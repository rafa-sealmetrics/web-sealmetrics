import fs from "node:fs";
import path from "node:path";

/**
 * Single source of truth for "which routes exist and which are indexable".
 *
 * Consumed by `src/app/sitemap.ts` (build) and by `scripts/seo-audit.mjs`
 * (postbuild gate), so the sitemap and the audit can never disagree about
 * what should be indexed.
 *
 * Indexability is DERIVED from the page source, never hand-maintained. The
 * previous hand-written EXCLUDE list silently shipped three `noindex` blog
 * posts into sitemap.xml because nobody remembered to add them — deriving it
 * makes that class of bug impossible rather than merely fixed.
 */

export const APP_ROOT = path.join(process.cwd(), "src", "app");
export const EN_ROOT = path.join(APP_ROOT, "(en)");
export const ES_ROOT = path.join(APP_ROOT, "(es)", "es");

/**
 * Routes deliberately kept out of the sitemap even though the page itself is
 * indexable. Every entry needs a reason — an unexplained entry here is the
 * exact drift the derived approach exists to prevent.
 */
export const SITEMAP_OVERRIDES: Record<string, string> = {
  // Empty by design. Every current exclusion is derivable from the page's own
  // `robots` metadata. Add an entry here only for a page that is genuinely
  // indexable yet must stay out of the sitemap, and say why.
};

/** Detects `robots: { index: false }` or a redirect stub, in page or layout. */
function isNoIndex(dir: string): boolean {
  for (const file of ["page.tsx", "page.ts", "layout.tsx"]) {
    const p = path.join(dir, file);
    if (!fs.existsSync(p)) continue;
    const src = fs.readFileSync(p, "utf8");
    // `buildRedirectMetadata()` always emits robots noindex — see
    // src/components/ui/Redirect.tsx.
    if (/buildRedirectMetadata/.test(src)) return true;
    if (/robots\s*:\s*\{[^}]*index\s*:\s*false/.test(src)) return true;
  }
  return false;
}

export type RouteInfo = {
  /** Route path without locale prefix and without trailing slash ("/" for root). */
  route: string;
  /** Absolute directory holding the page file. */
  dir: string;
  indexable: boolean;
};

/**
 * Walk a route-group directory and return every route that has a page file.
 * Skips dynamic ([slug]), parallel (@x) and private (_x) segments — dynamic
 * routes are expanded by the caller from their content registry.
 */
export function collectRoutes(dir: string, prefix = ""): RouteInfo[] {
  const out: RouteInfo[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && (entry.name === "page.tsx" || entry.name === "page.ts")) {
      out.push({
        route: prefix === "" ? "/" : prefix,
        dir,
        indexable: !isNoIndex(dir),
      });
      continue;
    }
    if (!entry.isDirectory()) continue;
    const n = entry.name;
    if (n.startsWith("[") || n.startsWith("@") || n.startsWith("_")) continue;
    out.push(...collectRoutes(path.join(dir, n), `${prefix}/${n}`));
  }
  return out;
}

/** Routes eligible for the sitemap: indexable and not explicitly overridden. */
export function sitemapRoutes(root: string): string[] {
  return collectRoutes(root)
    .filter((r) => r.indexable && !(r.route in SITEMAP_OVERRIDES))
    .map((r) => r.route);
}
