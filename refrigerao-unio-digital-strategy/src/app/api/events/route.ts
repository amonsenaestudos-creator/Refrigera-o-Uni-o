import { db } from "@/db";
import { contactEvents } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const allowedEvents = new Set([
  "phone_click",
  "instagram_click",
  "google_profile_click",
  "whatsapp_click",
]);

function clean(value: unknown, maxLength: number, fallback: string) {
  if (typeof value !== "string") return fallback;
  const sanitized = value.replace(/[^\p{L}\p{N}._/:@ -]/gu, "").trim();
  return sanitized.slice(0, maxLength) || fallback;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const eventName = clean(body.eventName, 40, "invalid");

    if (!allowedEvents.has(eventName)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    await db.insert(contactEvents).values({
      eventType: eventName,
      placement: clean(body.placement, 80, "nao_informado"),
      source: clean(body.source, 80, "direto"),
      pagePath: clean(body.pagePath, 160, "/"),
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
