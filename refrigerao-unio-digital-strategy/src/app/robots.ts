import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

// Necessário para a exportação estática (GitHub Pages) e inofensivo no modo servidor.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
