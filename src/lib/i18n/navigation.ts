import { type Locale, SITE_URL, localePrefix } from "./types";

/** Pages available in Spanish */
const translatedPaths = new Set([
  "/",
  "/pricing",
  "/product",
  "/how-it-works",
  "/demo",
  "/security",
  "/growth-calculator",
  "/data-loss-calculator",
  "/about",
  "/integrations",
  "/platforms",
  "/vs",
  "/vs-ga4",
  "/vs/ga360",
  "/vs/adobe-analytics",
  "/vs/piwik-pro",
  "/alternatives/google-analytics",
  "/for",
  "/blog",
  "/glossary",
  "/case-studies",
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
