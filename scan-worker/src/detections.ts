// Detección de señales públicas en el HTML crudo del sitio target.
// No usamos un parser real — basta con regex sobre el HTML servido en la respuesta inicial.
// Las plataformas SaaS modernas inyectan estas señales en el primer HTML SSR/SSG.

import type { Detections, Platform } from "./types";

// Cada patrón es una lista de aguja; con que matchee UNA basta.
const GA_PATTERNS = [
  /google-analytics\.com/i,
  /\banalytics\.js\b/i,
];

const GA4_PATTERNS = [
  /googletagmanager\.com\/gtag\/js/i,
  /gtag\(['"]config['"]\s*,\s*['"]G-[A-Z0-9-]+['"]/i,
];

const GTM_PATTERNS = [
  /googletagmanager\.com\/gtm\.js/i,
  /GTM-[A-Z0-9]{4,}/,
];

const META_PIXEL_PATTERNS = [
  /fbevents\.js/i,
  /connect\.facebook\.net/i,
  /facebook\.com\/tr\b/i,
];

const TIKTOK_PIXEL_PATTERNS = [
  /\bttq\.load\b/i,
  /analytics\.tiktok\.com/i,
];

const CMP_PATTERNS = [
  /onetrust/i,
  /cookiebot/i,
  /cookieyes/i,
  /cookieye/i,
  /consentframework/i,
  /cookieconsent/i,
  /didomi/i,
  /usercentrics/i,
];

const PLATFORM_PATTERNS: Array<{ platform: Platform; patterns: RegExp[] }> = [
  {
    platform: "shopify",
    patterns: [/cdn\.shopify\.com/i, /myshopify/i, /Shopify\.theme/i, /\bShopify\b/],
  },
  {
    platform: "woocommerce",
    patterns: [/woocommerce/i, /wp-content\/plugins\/woocommerce/i],
  },
  {
    platform: "vtex",
    patterns: [/vtexassets/i, /\bvtex\b/i],
  },
  {
    platform: "magento",
    patterns: [/\bMagento\b/, /\/mage\//, /Mage\.Cookies/i],
  },
  {
    platform: "prestashop",
    patterns: [/prestashop/i],
  },
];

function anyMatch(html: string, patterns: RegExp[]): boolean {
  for (const p of patterns) {
    if (p.test(html)) return true;
  }
  return false;
}

function detectPlatform(html: string): Platform {
  for (const { platform, patterns } of PLATFORM_PATTERNS) {
    if (anyMatch(html, patterns)) return platform;
  }
  return "unknown";
}

export function detectSignals(html: string): Detections {
  const ga4 = anyMatch(html, GA4_PATTERNS);
  const gaLegacy = anyMatch(html, GA_PATTERNS);
  const gtm = anyMatch(html, GTM_PATTERNS);

  return {
    // ga4Detected agrupa GA4 + analytics.js / google-analytics.com legacy:
    // para efectos de "tracking dependiente de cookies" es equivalente.
    ga4Detected: ga4 || gaLegacy,
    gtmDetected: gtm,
    metaPixelDetected: anyMatch(html, META_PIXEL_PATTERNS),
    tiktokPixelDetected: anyMatch(html, TIKTOK_PIXEL_PATTERNS),
    consentBannerDetected: anyMatch(html, CMP_PATTERNS),
    platform: detectPlatform(html),
  };
}
