"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { assetUrl, isStaticExport } from "@/lib/paths";

type ContactEvent =
  | "phone_click"
  | "instagram_click"
  | "google_profile_click"
  | "whatsapp_click";

type ContactLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: ContactEvent;
  placement: string;
  children: ReactNode;
};

function getSource() {
  const params = new URLSearchParams(window.location.search);
  const campaignSource = params.get("utm_source");
  if (campaignSource) return campaignSource.slice(0, 80);

  if (document.referrer) {
    try {
      return new URL(document.referrer).hostname.slice(0, 80);
    } catch {
      return "referencia";
    }
  }

  return "direto";
}

export function ContactLink({ eventName, placement, onClick, children, ...props }: ContactLinkProps) {
  function trackClick(event: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    // No site estático (GitHub Pages) não existe servidor nem banco de dados
    // para receber os cliques: o link funciona normalmente, sem medição.
    if (isStaticExport) return;

    const payload = JSON.stringify({
      eventName,
      placement: placement.slice(0, 80),
      source: getSource(),
      pagePath: window.location.pathname.slice(0, 160),
    });

    const endpoint = assetUrl("/api/events");

    if (navigator.sendBeacon) {
      navigator.sendBeacon(endpoint, new Blob([payload], { type: "application/json" }));
      return;
    }

    void fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    });
  }

  return <a {...props} onClick={trackClick}>{children}</a>;
}
