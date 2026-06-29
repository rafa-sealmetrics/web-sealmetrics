// SealMetrics — cookieless, consentless analytics. Replaces Google Tag Manager.
//
// The pixel (`t.js`) fires ONE pageview when it loads, reading `id` + `group`
// from its own <script> src. Because this site is a Next.js SPA (soft client
// navigation never reloads the document), we re-inject the script on every
// route change to register each subsequent pageview. Business events are sent
// through the global `sealmetrics.micro()` / `sealmetrics.conv()` API.
//
// PRIVACY — SealMetrics is cookieless and GDPR-compliant by architecture.
// Never send personal data (email, name, phone), order/transaction IDs, or
// user/customer IDs to the pixel. PII keys are stripped centrally below; the
// raw email still flows to our first-party n8n webhook, never to the pixel.

export const SEALMETRICS_ID =
  process.env.NEXT_PUBLIC_SEALMETRICS_ID ?? "sealmetrics2";

// Preprod endpoint is correct for the marketing site (by design).
export const SEALMETRICS_PIXEL_HOST = "https://pixel-pre.sealmetrics.com";

type EventProps = Record<string, string | number | boolean>;

interface SealMetricsApi {
  micro?: (event: string, props?: EventProps) => void;
  conv?: (event: string, value?: number, props?: EventProps) => void;
}

declare global {
  interface Window {
    sealmetrics?: SealMetricsApi;
  }
}

// ---------------------------------------------------------------------------
// Pixel loading + a tiny ready-queue so events fired before t.js has finished
// loading (e.g. a view-micro on the first page load) are not dropped.
// ---------------------------------------------------------------------------

const PIXEL_SCRIPT_ID = "sealmetrics-pixel";
let pixelReady = false;
const pending: Array<() => void> = [];

function flushQueue(): void {
  pixelReady = true;
  while (pending.length) pending.shift()?.();
}

function whenReady(fn: () => void): void {
  if (typeof window === "undefined") return;
  if (pixelReady && window.sealmetrics) {
    fn();
  } else {
    pending.push(fn);
  }
}

// (Re)load the pixel for `group`, which registers a pageview. Called on every
// route change by SealMetricsTracker.
export function pageview(group?: string): void {
  if (typeof document === "undefined") return;
  document.getElementById(PIXEL_SCRIPT_ID)?.remove();

  const params = new URLSearchParams({ id: SEALMETRICS_ID });
  if (group) params.set("group", group);

  const script = document.createElement("script");
  script.id = PIXEL_SCRIPT_ID;
  script.defer = true;
  script.src = `${SEALMETRICS_PIXEL_HOST}/t.js?${params.toString()}`;
  script.onload = flushQueue;
  document.head.appendChild(script);
}

// ---------------------------------------------------------------------------
// Event taxonomy. Keep call sites unchanged: they still call pushEvent() with
// the legacy event names; this table maps each to the SealMetrics closed
// taxonomy (conv: lead/signup/purchase/subscription/booking · micro: the rest).
// ---------------------------------------------------------------------------

const PII_KEYS = new Set([
  "email",
  "name",
  "first_name",
  "last_name",
  "fullname",
  "phone",
]);

type Mapping =
  | { kind: "conv"; name: string; value?: number }
  | { kind: "micro"; name: string };

const EVENT_MAP: Record<string, Mapping> = {
  // ── Conversions (business outcomes) ───────────────────────────────────
  demo_request: { kind: "conv", name: "lead", value: 0 }, // demo form submit
  lead_demo_access: { kind: "conv", name: "lead", value: 0 }, // demo-access granted
  lead_diagnostic_demo_access: { kind: "conv", name: "lead", value: 0 },
  lead_audit_submitted: { kind: "conv", name: "lead", value: 0 }, // free audit

  // ── Microconversions (engagement) ─────────────────────────────────────
  demo_access_request: { kind: "micro", name: "form_submit" }, // submit attempt
  lead_book_demo: { kind: "micro", name: "book_demo_cta" }, // thank-you reached
  calculator_used: { kind: "micro", name: "calculator_used" },
  growth_calculator_used: { kind: "micro", name: "calculator_used" },
  calculator_report_email: { kind: "micro", name: "report_request" },
  video_play: { kind: "micro", name: "video_play" },
  "404": { kind: "micro", name: "404_error" },
};

function sanitize(payload: Record<string, unknown>): EventProps {
  const props: EventProps = {};
  for (const [key, value] of Object.entries(payload)) {
    if (key === "event" || key === "value") continue;
    if (PII_KEYS.has(key)) continue;
    if (value === undefined || value === null) continue;
    props[key] = typeof value === "boolean" ? value : String(value);
  }
  return props;
}

// Legacy entry point kept so existing call sites don't change. Dispatches to
// the SealMetrics pixel via the taxonomy table above, stripping any PII.
export function pushEvent(
  payload: { event: string; value?: number } & Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;
  const mapping = EVENT_MAP[payload.event];
  if (!mapping) return; // unmapped legacy event → ignored
  const props = sanitize(payload);
  whenReady(() => {
    if (mapping.kind === "conv") {
      const value =
        mapping.value ??
        (typeof payload.value === "number" ? payload.value : 0);
      window.sealmetrics?.conv?.(mapping.name, value, props);
    } else {
      window.sealmetrics?.micro?.(mapping.name, props);
    }
  });
}

// Direct helpers for new instrumentation that doesn't go through pushEvent.
export function micro(event: string, props?: EventProps): void {
  whenReady(() => window.sealmetrics?.micro?.(event, props));
}

export function conv(event: string, value = 0, props?: EventProps): void {
  whenReady(() => window.sealmetrics?.conv?.(event, value, props));
}

// ---------------------------------------------------------------------------
// Content grouping + view-micros (unchanged taxonomy).
// ---------------------------------------------------------------------------

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
  // Routes export with a trailing slash (e.g. "/demo/"), so normalise before
  // the exact-match lookup.
  const path = stripLocale(pathname).replace(/\/$/, "") || "/";
  return MICRO_CONVERSIONS[path];
}

// Competitor slug for comparison pages. Handles both URL shapes in use:
// "/vs/ga360" -> "ga360" and the legacy "/vs-ga4" -> "ga4".
// Returns undefined for the /vs index and non-comparison pages.
export function getComparisonCompetitor(pathname: string): string | undefined {
  const path = stripLocale(pathname);
  const match = path.match(/^\/vs[/-]([^/]+)\/?$/);
  return match ? match[1] : undefined;
}

// Booking / external app links count as a near-conversion intent signal.
export function isBookingHref(href: string): boolean {
  return /cal\.com|app\.sealmetrics|\/book(?:ing)?\b/i.test(href);
}

// Primary lead-driving destinations — clicks toward these are CTA intent.
const CTA_DESTINATIONS =
  /^\/(demo|demo-access|audit|free-audit|pricing|data-loss-calculator|growth-calculator)\b/;

export function isCtaHref(href: string): boolean {
  if (!href.startsWith("/")) return false;
  return CTA_DESTINATIONS.test(stripLocale(href));
}
