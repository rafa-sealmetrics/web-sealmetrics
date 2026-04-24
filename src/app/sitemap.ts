import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content/blog";
import { glossaryTerms } from "@/lib/content/glossary";

export const dynamic = "force-static";

const SITE = "https://sealmetrics.com";
const today = new Date().toISOString().split("T")[0];

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
  "/vs/ga360",
  "/vs/adobe-analytics",
  "/vs/piwik-pro",
  "/alternatives/google-analytics",
  "/blog",
  "/glossary",
  "/case-studies",
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
  "/diagnostic-result",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Bilingual top-level paths with hreflang alternates
  for (const path of bilingualPaths) {
    const cleanPath = path === "/" ? "" : path;
    entries.push({
      url: `${SITE}${cleanPath}`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: path === "/" ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${SITE}${cleanPath}`,
          es: `${SITE}/es${cleanPath}`,
          "x-default": `${SITE}${cleanPath}`,
        },
      },
    });
    entries.push({
      url: `${SITE}/es${cleanPath}`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: path === "/" ? 0.9 : 0.7,
      alternates: {
        languages: {
          en: `${SITE}${cleanPath}`,
          es: `${SITE}/es${cleanPath}`,
          "x-default": `${SITE}${cleanPath}`,
        },
      },
    });
  }

  // EN-only paths
  for (const path of enOnlyPaths) {
    entries.push({
      url: `${SITE}${path}`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.3,
    });
  }

  // Blog posts (EN)
  for (const post of blogPosts.filter((p) => !p.draft)) {
    entries.push({
      url: `${SITE}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // Glossary terms (EN)
  for (const term of glossaryTerms) {
    entries.push({
      url: `${SITE}/glossary/${term.slug}`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  // Demo thank-you (low priority)
  entries.push({
    url: `${SITE}/demo/thank-you`,
    lastModified: today,
    changeFrequency: "yearly",
    priority: 0.1,
  });

  return entries;
}
