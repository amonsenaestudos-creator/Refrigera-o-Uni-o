import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { getSiteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Refrigeração União | Conserto de eletrodomésticos",
    template: "%s | Refrigeração União",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  category: "Conserto de eletrodomésticos",
  formatDetection: { telephone: true, address: false, email: false },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    title: "Refrigeração União | Conserto de eletrodomésticos",
    description: siteConfig.description,
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Refrigeração União — conserto de eletrodomésticos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refrigeração União | Conserto de eletrodomésticos",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  other: {
    "geo.region": "BR-BA",
    "geo.placename": "Dias d'Ávila",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061f3d",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
