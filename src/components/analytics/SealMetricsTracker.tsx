"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    sealmetrics: {
      call: (event: undefined, data: { group: string }) => void;
      conv: (event: string, value?: number, data?: Record<string, string>) => void;
      micro: (event: string, data?: Record<string, string>) => void;
    };
  }
}

function getContentGroup(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname === "/product") return "product";
  if (pathname === "/pricing") return "pricing";
  if (pathname === "/how-it-works") return "how-it-works";
  if (pathname === "/security") return "security";
  if (pathname === "/integrations") return "integrations";
  if (pathname === "/about") return "about";
  if (pathname === "/demo") return "demo";
  if (pathname.startsWith("/demo/")) return "demo";
  if (pathname === "/data-loss-calculator") return "calculator";
  if (pathname.startsWith("/vs")) return "vs";
  if (pathname.startsWith("/for/")) return "for";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/glossary")) return "glossary";
  if (pathname === "/videos") return "videos";
  if (pathname === "/changelog") return "changelog";
  if (pathname === "/privacy" || pathname === "/terms" || pathname === "/dpa")
    return "legal";
  return "other";
}

export function SealMetricsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !window.sealmetrics) return;
    const group = getContentGroup(pathname);
    window.sealmetrics.call(undefined, { group });
  }, [pathname]);

  // Micro-conversions on specific page visits
  useEffect(() => {
    if (typeof window === "undefined" || !window.sealmetrics) return;

    const micros: Record<string, string> = {
      "/pricing": "pricing",
      "/demo": "contact",
      "/data-loss-calculator": "calculator_visit",
    };

    const micro = micros[pathname];
    if (micro) {
      window.sealmetrics.micro(micro);
    }
  }, [pathname]);

  return null;
}
