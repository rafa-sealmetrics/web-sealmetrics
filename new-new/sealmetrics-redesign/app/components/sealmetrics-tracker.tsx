"use client";

import { useEffect } from "react";

type EventProps = Record<string, string | number | boolean>;
type SealMetricsApi = {
  micro?: (event: string, props?: EventProps) => void;
  conv?: (event: string, value?: number, props?: EventProps) => void;
};

declare global {
  interface Window {
    sealmetrics?: SealMetricsApi;
  }
}

const PIXEL_ID = "sealmetrics2";
const PIXEL_HOST = "https://pixel-pre.sealmetrics.com";
const SCRIPT_ID = "sealmetrics-pixel";
const pending: Array<() => void> = [];
let ready = false;
let firstTouch: Record<string, string> | null = null;

const PII_KEYS = new Set(["email", "name", "first_name", "last_name", "phone", "company"]);

function safeProps(props: Record<string, unknown> = {}): EventProps {
  const output: EventProps = {};
  for (const [key, value] of Object.entries(props)) {
    if (PII_KEYS.has(key) || value === undefined || value === null) continue;
    if (["string", "number", "boolean"].includes(typeof value)) output[key] = value as string | number | boolean;
  }
  return output;
}

function whenReady(callback: () => void) {
  if (typeof window === "undefined") return;
  if (ready && window.sealmetrics) callback();
  else pending.push(callback);
}

function flush() {
  ready = true;
  while (pending.length) pending.shift()?.();
}

function stripLocale(pathname: string) {
  const clean = pathname.replace(/\/$/, "") || "/";
  if (clean === "/es") return "/";
  return clean.startsWith("/es/") ? clean.slice(3) : clean;
}

function contentGroup(pathname: string) {
  const path = stripLocale(pathname);
  if (path === "/") return "home";
  if (path.startsWith("/blog")) return "blog";
  if (path.startsWith("/glossary")) return "glossary";
  if (path.startsWith("/case-studies")) return "case-studies";
  if (path.startsWith("/vs")) return "vs";
  if (path.startsWith("/for/")) return "for";
  if (["/demo", "/demo-access"].includes(path)) return "demo";
  if (["/audit", "/free-audit"].includes(path)) return "audit";
  if (["/data-loss-calculator", "/growth-calculator"].includes(path)) return "calculator";
  if (["/privacy", "/terms"].includes(path)) return "legal";
  return path.split("/").filter(Boolean)[0] || "other";
}

function injectPageview() {
  const previous = document.getElementById(SCRIPT_ID);
  previous?.remove();
  ready = false;
  const params = new URLSearchParams({ id: PIXEL_ID, group: contentGroup(window.location.pathname) });
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.defer = true;
  script.src = `${PIXEL_HOST}/t.js?${params.toString()}`;
  script.onload = flush;
  document.head.appendChild(script);
}

export function trackMicro(event: string, props?: Record<string, unknown>) {
  const safe = safeProps(props);
  whenReady(() => window.sealmetrics?.micro?.(event, safe));
}

export function trackConversion(event = "lead", props?: Record<string, unknown>) {
  const safe = safeProps(props);
  whenReady(() => window.sealmetrics?.conv?.(event, 0, safe));
}

export function attributionMetadata() {
  if (typeof window === "undefined") return {};
  if (firstTouch) return { ...firstTouch, page_url: window.location.href };
  const url = new URL(window.location.href);
  const metadata: Record<string, string> = {
    page_url: window.location.href,
    landing_url: window.location.href,
    referrer: document.referrer || "",
    locale_browser: window.navigator.language,
    captured_at: new Date().toISOString(),
  };
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "msclkid"]) {
    const value = url.searchParams.get(key);
    if (value) metadata[key] = value;
  }
  firstTouch = metadata;
  return metadata;
}

export function SealMetricsTracker() {
  useEffect(() => {
    attributionMetadata();
    const start = () => injectPageview();
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    const path = stripLocale(window.location.pathname);
    const views: Record<string, string> = {
      "/pricing": "pricing_view",
      "/demo": "contact_view",
      "/demo-access": "contact_view",
      "/audit": "audit_view",
      "/free-audit": "audit_view",
      "/data-loss-calculator": "calculator_view",
      "/growth-calculator": "calculator_view",
    };
    if (views[path]) trackMicro(views[path]);
    const competitor = path.match(/^\/vs[/-]([^/]+)$/)?.[1];
    if (competitor) trackMicro("comparison_view", { competitor });

    const onClick = (event: MouseEvent) => {
      const element = (event.target as HTMLElement | null)?.closest("a, button");
      if (!element) return;
      const href = element.getAttribute("href") || "";
      const location = element.closest("header") ? "header" : element.closest("footer") ? "footer" : "page";
      const text = (element.textContent || "").trim().slice(0, 80);
      if (/cal\.com|app\.sealmetrics|\/book(?:ing)?\b/i.test(href)) trackMicro("book_demo_cta", { location, text });
      else if (/^\/(?:es\/)?(?:demo|demo-access|audit|free-audit|pricing|data-loss-calculator|growth-calculator)\b/.test(href)) {
        trackMicro("cta_click", { destination: stripLocale(href), location, text });
      }
    };

    const fired = new Set<string>();
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable < window.innerHeight * 0.5) return;
      const percentage = (window.scrollY / scrollable) * 100;
      if (percentage >= 50 && !fired.has("50")) { fired.add("50"); trackMicro("scroll_50"); }
      if (percentage >= 90 && !fired.has("100")) { fired.add("100"); trackMicro("scroll_100"); }
    };

    document.addEventListener("click", onClick, { capture: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("load", start);
      document.removeEventListener("click", onClick, { capture: true });
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
