export const SEALMETRICS_PIXEL_URL =
  process.env.NEXT_PUBLIC_SEALMETRICS_PIXEL_URL ??
  "https://pixel.sealmetrics.com";

export const SEALMETRICS_TAG_ID =
  process.env.NEXT_PUBLIC_SEALMETRICS_TAG_ID ?? "sealmetrics2";

export const SEALMETRICS_PIXEL_SRC = `${SEALMETRICS_PIXEL_URL}/t.js?id=${SEALMETRICS_TAG_ID}`;

export function stripLocale(pathname: string): string {
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3);
  return pathname;
}

export function getContentGroup(pathname: string): string {
  const path = stripLocale(pathname);
  if (path === "/") return "home";
  if (path === "/product") return "product";
  if (path === "/pricing") return "pricing";
  if (path === "/how-it-works") return "how-it-works";
  if (path === "/security") return "security";
  if (path === "/integrations") return "integrations";
  if (path === "/about") return "about";
  if (path === "/demo" || path.startsWith("/demo/")) return "demo";
  if (path === "/audit" || path.startsWith("/audit/")) return "audit";
  if (path === "/data-loss-calculator") return "calculator";
  if (path === "/growth-calculator") return "calculator";
  if (path === "/modern-analytics") return "modern-analytics";
  if (path.startsWith("/case-studies")) return "case-studies";
  if (path.startsWith("/vs")) return "vs";
  if (path.startsWith("/for/")) return "for";
  if (path.startsWith("/blog")) return "blog";
  if (path.startsWith("/glossary")) return "glossary";
  if (path === "/videos") return "videos";
  if (path === "/changelog") return "changelog";
  if (path === "/privacy" || path === "/terms" || path === "/dpa") return "legal";
  return "other";
}

const MICRO_CONVERSIONS: Record<string, string> = {
  "/pricing": "pricing_view",
  "/demo": "contact_view",
  "/audit": "audit_view",
  "/data-loss-calculator": "calculator_view",
  "/growth-calculator": "calculator_view",
};

export function getMicroConversion(pathname: string): string | undefined {
  return MICRO_CONVERSIONS[stripLocale(pathname)];
}
