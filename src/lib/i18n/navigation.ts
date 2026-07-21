import { type Locale, SITE_URL, localePrefix } from "./types";

/** Pages available in Spanish */
const translatedPaths = new Set([
  "/",
  "/pricing",
  "/product",
  "/why-sealmetrics",
  "/how-it-works",
  "/demo",
  "/demo-access",
  "/security",
  "/growth-calculator",
  "/data-loss-calculator",
  "/about",
  "/integrations",
  "/platforms",
  "/vs",
  "/vs-ga4",
  "/modern-analytics",
  "/ai-analytics",
  "/reg-gap-analysis",
  "/vs/ga360",
  "/vs/adobe-analytics",
  "/vs/piwik-pro",
  "/vs/matomo",
  "/alternatives/google-analytics",
  "/for",
  "/blog",
  "/blog/gdpr-analytics-spain-faq",
  "/blog/gdpr-eprivacy-analytics-legal-assessment",
  "/blog/ga4-alternatives-enterprise",
  "/blog/self-service-analytics-lens-ai",
  "/blog/cookieless-analytics-explained",
  "/blog/consent-banner-impact-on-analytics",
  "/blog/ga4-data-sampling-problem",
  "/blog/why-ga4-shows-13pct-eu-traffic",
  "/blog/gdpr-analytics-without-consent",
  "/glossary",
  "/glossary/cookieless-analytics",
  "/glossary/gdpr-analytics-compliance",
  "/glossary/multi-touch-attribution",
  "/glossary/data-loss-in-analytics",
  "/glossary/revenue-attribution",
  "/case-studies",
  "/case-studies/dreamplace-hotels",
  "/case-studies/palladium-hotel-group",
  "/audit",
  "/for/cmo",
  "/for/cto",
  "/for/dpo",
  "/for/ecommerce",
  "/for/hotels",
  "/for/saas",
  "/for/agencies",
  "/for/media",
  "/for/finance",
  "/for/healthcare",
  "/for/education",
  "/authors/rafa-jimenez",
]);

/** Returns true if the path has a Spanish translation */
export function hasTranslation(path: string): boolean {
  const clean = path.replace(/\/$/, "") || "/";
  return translatedPaths.has(clean);
}

/** Prefix a path with the locale prefix. Untranslated pages stay in English. */
export function localizedHref(path: string, locale: Locale): string {
  if (locale === "en") return path;
  const clean = path.replace(/\/$/, "") || "/";
  if (!hasTranslation(clean)) return path;
  return `${localePrefix[locale]}${clean === "/" ? "" : clean}` || "/es";
}

/** Generate alternates.languages for Next.js metadata (use from English pages) */
export function getAlternates(path: string) {
  const clean = path.replace(/\/$/, "") || "/";
  if (!hasTranslation(clean)) return undefined;
  const enUrl = `${SITE_URL}${clean === "/" ? "" : clean}`;
  const esUrl = `${SITE_URL}/es${clean === "/" ? "" : clean}`;
  return {
    "en": enUrl,
    "es": esUrl,
    "x-default": enUrl,
  };
}

/** Generate alternates.languages for Next.js metadata (use from Spanish pages) */
export function getAlternatesEs(path: string) {
  return getAlternates(path);
}
