// Builds the payload for sales.sealmetrics.net/inbound/signup.
//
// We never POST directly from the browser — the token would leak. Instead
// every form sends its existing payload to n8n with a `signup` object
// embedded, and an n8n node forwards `signup` to /inbound/signup with the
// X-Inbound-Token header from n8n credentials.

export type SectorEnum = "ecom" | "hotel" | "other";

export type AdsSpendEnum = "lt_10k" | "10k_50k" | "50k_200k" | "gt_200k";

export type LostTrackingEnum = "yes_much" | "yes_some" | "no" | "dont_know";

export type StakeholdersEnum =
  | "solo"
  | "marketing_founder"
  | "marketing_cmo"
  | "marketing_team"
  | "committee";

export type TimelineEnum = "now" | "1m" | "3m" | "exploring";

// All optional except email, source. pain_score is "required" by the
// backend for scoring, but we still allow omission when the user skips
// the qualifier — the n8n node can decide whether to forward.
export interface SignupInput {
  email: string;
  name?: string;
  company?: string;
  role?: string;
  site_url?: string;
  sector?: SectorEnum | "";
  ads_spend_band?: AdsSpendEnum | "";
  pain_score?: number | null;
  lost_tracking?: LostTrackingEnum | "";
  stakeholders?: StakeholdersEnum | "";
  timeline?: TimelineEnum | "";
  source: string;
  extraMetadata?: Record<string, string | number | boolean | null | undefined>;
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "msclkid",
] as const;

const STORAGE_KEY = "sm_first_touch_v1";

interface FirstTouch {
  utm: Record<string, string>;
  referrer: string;
  landing_url: string;
  captured_at: string;
}

function readFirstTouch(): FirstTouch | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as FirstTouch;
  } catch {
    // sessionStorage blocked (incognito quotas etc.) — continue.
  }
  return null;
}

function captureFirstTouch(): FirstTouch {
  const url = new URL(window.location.href);
  const utm: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const v = url.searchParams.get(key);
    if (v) utm[key] = v;
  }
  const ft: FirstTouch = {
    utm,
    referrer: document.referrer || "",
    landing_url: window.location.href,
    captured_at: new Date().toISOString(),
  };
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(ft));
  } catch {
    // best-effort
  }
  return ft;
}

// Call once per session (e.g. from a top-level Layout effect) so UTMs from
// the landing URL survive internal navigation before the user submits.
export function ensureFirstTouchCaptured(): void {
  if (typeof window === "undefined") return;
  if (readFirstTouch()) return;
  captureFirstTouch();
}

function getFirstTouch(): FirstTouch {
  return readFirstTouch() ?? captureFirstTouch();
}

function compactObject<T extends Record<string, unknown>>(obj: T): Partial<T> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null || v === "") continue;
    out[k] = v;
  }
  return out as Partial<T>;
}

// Builds the JSON body for POST /inbound/signup. Safe to call on the
// server (returns a stub without metadata). Required fields validated by
// the caller.
export function buildSignupPayload(input: SignupInput): Record<string, unknown> {
  const base = {
    email: input.email.trim().toLowerCase(),
    name: input.name?.trim(),
    company: input.company?.trim(),
    role: input.role?.trim(),
    site_url: input.site_url?.trim(),
    sector: input.sector || undefined,
    ads_spend_band: input.ads_spend_band || undefined,
    pain_score:
      typeof input.pain_score === "number" && input.pain_score >= 1 && input.pain_score <= 10
        ? input.pain_score
        : undefined,
    lost_tracking: input.lost_tracking || undefined,
    stakeholders: input.stakeholders || undefined,
    timeline: input.timeline || undefined,
    source: input.source,
  };

  const metadata =
    typeof window === "undefined"
      ? {}
      : (() => {
          const ft = getFirstTouch();
          return compactObject({
            ...ft.utm,
            referrer: ft.referrer,
            landing_url: ft.landing_url,
            landing_at: ft.captured_at,
            page_url: window.location.href,
            user_agent: window.navigator.userAgent,
            screen: `${window.screen.width}x${window.screen.height}`,
            locale_browser: window.navigator.language,
            ...(input.extraMetadata ?? {}),
          });
        })();

  return {
    ...compactObject(base),
    metadata,
  };
}

// Client-side email regex — matches the backend's tolerance (anything
// vaguely email-shaped). Backend re-validates with Pydantic EmailStr.
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value.trim());
}
