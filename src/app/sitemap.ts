import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content/blog";
import { glossaryTerms } from "@/lib/content/glossary";

export const dynamic = "force-static";

const SITE = "https://sealmetrics.com";
const today = new Date().toISOString().split("T")[0];

/** Build a fully-qualified URL with trailing slash (matches `trailingSlash: true`). */
function url(path: string): string {
  if (path === "/" || path === "") return `${SITE}/`;
  return `${SITE}${path.endsWith("/") ? path : `${path}/`}`;
}

function esUrl(path: string): string {
  if (path === "/" || path === "") return `${SITE}/es/`;
  return `${SITE}/es${path.endsWith("/") ? path : `${path}/`}`;
}

/** Paths that have both EN + ES versions. Used to emit hreflang-aware entries. */
const bilingualPaths = [
  "/",
  "/pricing",
  "/product",
  "/how-it-works",
  "/demo",
  "/security",
  "/about",
  "/integrations",
  "/platforms",
  "/growth-calculator",
  "/data-loss-calculator",
  "/vs",
  "/vs-ga4",
  "/modern-analytics",
  "/vs/ga360",
  "/vs/adobe-analytics",
  "/vs/piwik-pro",
  "/alternatives/google-analytics",
  "/blog",
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
  "/for",
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
];

/** Paths that only exist in EN (legal, content-only, utilities). */
const enOnlyPaths = [
  "/privacy",
  "/terms",
  "/dpa",
  "/changelog",
  "/videos",
];

/** Paths that only exist in ES (no EN equivalent yet). */
const esOnlyPaths = [
  "/blog/ga4-google-ads-separation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Bilingual top-level paths with hreflang alternates
  for (const path of bilingualPaths) {
    const enHref = url(path);
    const esHref = esUrl(path);
    entries.push({
      url: enHref,
      lastModified: today,
      alternates: {
        languages: {
          en: enHref,
          es: esHref,
          "x-default": enHref,
        },
      },
    });
    entries.push({
      url: esHref,
      lastModified: today,
      alternates: {
        languages: {
          en: enHref,
          es: esHref,
          "x-default": enHref,
        },
      },
    });
  }

  // EN-only paths
  for (const path of enOnlyPaths) {
    entries.push({
      url: url(path),
      lastModified: today,
    });
  }

  // ES-only paths (no EN sibling — emit without hreflang alternates)
  for (const path of esOnlyPaths) {
    entries.push({
      url: esUrl(path),
      lastModified: today,
    });
  }

  // Blog posts (EN)
  for (const post of blogPosts.filter((p) => !p.draft)) {
    entries.push({
      url: url(`/blog/${post.slug}`),
      lastModified: post.date,
    });
  }

  // Glossary terms (EN). Skip slugs already covered by bilingualPaths to avoid
  // duplicate sitemap entries (one with hreflang alternates, one without).
  const bilingualSlugs = new Set(
    bilingualPaths
      .filter((p) => p.startsWith("/glossary/"))
      .map((p) => p.replace("/glossary/", ""))
  );
  for (const term of glossaryTerms) {
    if (bilingualSlugs.has(term.slug)) continue;
    entries.push({
      url: url(`/glossary/${term.slug}`),
      lastModified: today,
    });
  }

  return entries;
}
