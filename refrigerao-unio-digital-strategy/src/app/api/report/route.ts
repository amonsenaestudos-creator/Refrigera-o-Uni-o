import { db } from "@/db";
import { sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function isAuthorized(request: NextRequest) {
  const reportToken = process.env.REPORT_TOKEN;
  if (!reportToken) return false;
  return request.headers.get("authorization") === `Bearer ${reportToken}`;
}

export async function GET(request: NextRequest) {
  if (!process.env.REPORT_TOKEN) {
    return NextResponse.json(
      { error: "Relatório ainda não configurado. Defina REPORT_TOKEN no servidor." },
      { status: 503 },
    );
  }

  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const totals = await db.execute(sql`
    select
      event_type as "eventType",
      count(*)::int as "total"
    from contact_events
    where created_at >= now() - interval '30 days'
    group by event_type
    order by total desc
  `);

  const sources = await db.execute(sql`
    select
      source,
      event_type as "eventType",
      count(*)::int as "total"
    from contact_events
    where created_at >= now() - interval '30 days'
    group by source, event_type
    order by total desc
    limit 50
  `);

  const daily = await db.execute(sql`
    select
      to_char(date_trunc('day', created_at at time zone 'America/Bahia'), 'YYYY-MM-DD') as "date",
      event_type as "eventType",
      count(*)::int as "total"
    from contact_events
    where created_at >= now() - interval '30 days'
    group by date_trunc('day', created_at at time zone 'America/Bahia'), event_type
    order by date_trunc('day', created_at at time zone 'America/Bahia') desc
  `);

  return NextResponse.json(
    {
      period: "últimos 30 dias",
      generatedAt: new Date().toISOString(),
      totals: totals.rows,
      bySource: sources.rows,
      daily: daily.rows,
      note: "Cliques indicam intenção de contato; orçamentos e serviços contratados devem ser registrados na planilha operacional.",
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
