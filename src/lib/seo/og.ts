import fs from "node:fs";
import path from "node:path";

/**
 * Resolves the Open Graph card for a route.
 *
 * Before this existed every page hard-coded its image URL, so 202 of 262 pages
 * shipped the same generic `/og-image.png` — including the two named case
 * studies and ten blog posts whose bespoke cards were sitting unreferenced in
 * `public/og/`. Deriving the path from the route makes that class of drift
 * impossible: generate a card at `public/og/<route>.png` and the page picks it
 * up on the next build.
 *
 * Spanish routes intentionally resolve to the English card — the artwork is
 * typographic and shared, and there is no `public/og/es/` tree.
 *
 * Runs at build time only (static export), so the filesystem check is free and
 * never reaches a request.
 */
const SITE = "https://sealmetrics.com";
const OG_ROOT = path.join(process.cwd(), "public", "og");
const DEFAULT_OG = `${SITE}/og-image.png`;

export function ogImage(route: string): string {
  const clean = route
    .replace(/^https?:\/\/[^/]+/, "")
    .replace(/^\/(es\/|es$)/, "/")
    .replace(/^\/+|\/+$/g, "");
  if (!clean) return DEFAULT_OG;

  const rel = `${clean}.png`;
  // Guard against a route escaping public/og via ".." — routes are static, but
  // the check costs nothing and keeps the join honest.
  const abs = path.join(OG_ROOT, rel);
  if (!abs.startsWith(OG_ROOT)) return DEFAULT_OG;

  return fs.existsSync(abs) ? `${SITE}/og/${rel}` : DEFAULT_OG;
}
