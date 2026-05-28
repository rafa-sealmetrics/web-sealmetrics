import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { blogPosts } from "@/lib/content/blog";
import { publishedChapters } from "@/lib/content/open";

export const dynamic = "force-static";

const SITE = "https://sealmetrics.com";
const today = new Date().toISOString().split("T")[0];

const EN_ROOT = path.join(process.cwd(), "src", "app", "(en)");
const ES_ROOT = path.join(process.cwd(), "src", "app", "(es)", "es");

// Routes that should NOT appear in the sitemap
// (thank-you, gated, ephemeral result pages, and redirect stubs).
const EXCLUDE = new Set<string>([
  "/demo/thank-you",
  "/diagnostic-result",
  "/demo-access",
  // Redirect stub: canonical lives at /vs-ga4/. See src/app/(en)/vs/ga4/page.tsx.
  "/vs/ga4",
]);

// blog post slug → ISO date, used to emit accurate <lastmod>
const blogDates = new Map(blogPosts.map((p) => [p.slug, p.date]));

/**
 * Walk a route-group directory and return every route with a page file.
 * Skips dynamic ([slug]), parallel (@x) and private (_x) segments —
 * dynamic routes are expanded explicitly below from their content registry.
 *   "/page.tsx"         → "/"
 *   "/blog/foo/page.tsx" → "/blog/foo"
 */
function collectRoutes(dir: string, prefix = ""): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (
      entry.isFile() &&
      (entry.name === "page.tsx" || entry.name === "page.ts")
    ) {
      out.push(prefix === "" ? "/" : prefix);
      continue;
    }
    if (!entry.isDirectory()) continue;
    const n = entry.name;
    if (n.startsWith("[") || n.startsWith("@") || n.startsWith("_")) continue;
    out.push(...collectRoutes(path.join(dir, n), `${prefix}/${n}`));
  }
  return out;
}

function enUrl(p: string): string {
  return p === "/" ? `${SITE}/` : `${SITE}${p}/`;
}
function esUrl(p: string): string {
  return p === "/" ? `${SITE}/es/` : `${SITE}/es${p}/`;
}

function lastModFor(route: string): string {
  const m = route.match(/^\/blog\/(.+)$/);
  if (m) {
    const date = blogDates.get(m[1]);
    if (date) return date;
  }
  return today;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const enRoutes = collectRoutes(EN_ROOT).filter((r) => !EXCLUDE.has(r));
  const esRoutes = collectRoutes(ES_ROOT).filter((r) => !EXCLUDE.has(r));

  // Expand dynamic [slug] routes. /open/[slug] is EN-only today.
  for (const c of publishedChapters) {
    enRoutes.push(`/open/${c.slug}`);
  }

  const enSet = new Set(enRoutes);
  const esSet = new Set(esRoutes);

  const entries: MetadataRoute.Sitemap = [];

  // Bilingual: present in both locales → emit both URLs with hreflang.
  for (const route of enRoutes) {
    if (!esSet.has(route)) continue;
    const enHref = enUrl(route);
    const esHref = esUrl(route);
    const languages = { en: enHref, es: esHref, "x-default": enHref };
    entries.push({
      url: enHref,
      lastModified: lastModFor(route),
      alternates: { languages },
    });
    entries.push({
      url: esHref,
      lastModified: lastModFor(route),
      alternates: { languages },
    });
  }

  // EN-only
  for (const route of enRoutes) {
    if (esSet.has(route)) continue;
    entries.push({ url: enUrl(route), lastModified: lastModFor(route) });
  }

  // ES-only
  for (const route of esRoutes) {
    if (enSet.has(route)) continue;
    entries.push({ url: esUrl(route), lastModified: lastModFor(route) });
  }

  return entries;
}
