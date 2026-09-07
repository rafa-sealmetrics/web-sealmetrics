// Tipos compartidos entre módulos del Worker.

export type Platform =
  | "shopify"
  | "woocommerce"
  | "vtex"
  | "magento"
  | "prestashop"
  | "unknown";

export type Grade = "A" | "B" | "C" | "D" | "D-" | "F";

export interface Detections {
  ga4Detected: boolean;
  gtmDetected: boolean;
  metaPixelDetected: boolean;
  tiktokPixelDetected: boolean;
  consentBannerDetected: boolean;
  platform: Platform;
}

export interface Risk {
  attributionSecurityGrade: Grade;
  cookieDependentTracking: boolean;
  estimatedBlindSpotRate: number;
  blindTrafficValue: number;
  estimatedMonthlyLeakage: number;
}

export interface ScanResponse {
  ok: true;
  scannedUrl: string;
  detections: Detections;
  risk: Risk;
}

export interface ScanError {
  ok: false;
  error: string;
  code:
    | "invalid_url"
    | "blocked_host"
    | "rate_limited"
    | "turnstile_failed"
    | "fetch_failed"
    | "bad_request";
}

export interface Env {
  RATE_LIMIT: KVNamespace;
  TURNSTILE_SECRET: string;
  INGEST_URL: string;
  INGEST_TOKEN: string;
  ALLOWED_ORIGINS: string;
  MAX_HTML_BYTES: string;
  FETCH_TIMEOUT_MS: string;
  RATE_LIMIT_TTL_SECONDS: string;
  RATE_LIMIT_PER_HOSTNAME_NO_EMAIL: string;
  RATE_LIMIT_PER_HOSTNAME_WITH_EMAIL: string;
}
