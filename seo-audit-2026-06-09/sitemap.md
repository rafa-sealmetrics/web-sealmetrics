# Sitemap Audit — sealmetrics.com

Date: 2026-06-09
Live sitemap: https://sealmetrics.com/sitemap.xml (170 URLs, 47.7 KB)
Generator: `src/app/sitemap.ts` (Next.js MetadataRoute, filesystem walk of `(en)`/`(es)` route groups + content registries)

## Score: 92 / 100

## Validation Report

| Check | Result | Detail |
|-------|--------|--------|
| XML well-formed | PASS | Parses cleanly; correct `urlset` namespace + `xhtml` namespace for hreflang |
| URL count limit | PASS | 170 URLs (limit 50,000) |
| lastmod present | PASS | All 170 URLs have `<lastmod>` in valid ISO date format |
| lastmod accuracy | **PARTIAL FAIL** | 137/170 URLs share `2026-06-03` (last deploy date). Only blog posts get real dates from `blogDates`; every other page falls through to `today` (sitemap.ts line 60-67). lastmod changes on every build regardless of content changes — Google learns to ignore it |
| priority/changefreq | PASS | None present (correct — both deprecated/ignored) |
| Sitemap in robots.txt | PASS | `Sitemap: https://sealmetrics.com/sitemap.xml` declared; llms.txt also referenced |
| hreflang alternates | PASS | Bilingual pages emit en/es/x-default reciprocally |
| Non-200 URLs | PASS | Spot-checked 12 URLs (platforms, gdpr-analytics, use-cases, open chapters, /es mirrors) — all 200 |
| Coverage (repo vs sitemap) | PASS | Zero routes missing. Suspected gaps (/platforms/woocommerce, /platforms/shopify, /gdpr-analytics/{france,germany,spain}, /use-cases/*, /open/*) are ALL present |
| Orphan URLs | PASS | 8 apparent "orphans" are the `/open/[slug]` dynamic route expanded from `publishedChapters` (8 chapters with `status: "ready"`). Draft chapters correctly 404 and are excluded |
| Exclusions | PASS | /demo/thank-you, /diagnostic-result, /demo-access, /vs/ga4 (redirect stub) correctly excluded |

## How Generation Works (why nothing is missing)

`src/app/sitemap.ts` walks `src/app/(en)` and `src/app/(es)/es` at build time, picking up every `page.tsx` automatically, skipping `[slug]`/`@`/`_` segments, then explicitly expands `/open/[slug]` from `publishedChapters` in `src/lib/content/open.ts`. New pages are included on next build with no manual step. This is the correct architecture.

## Prioritized Issues

### 1. MEDIUM — lastmod is build-date for 137 non-blog URLs
`lastModFor()` returns `today` for any non-blog route. Every deploy stamps all pages as freshly modified, which (a) wastes crawl-budget signaling and (b) trains Google to distrust the field.
Fix: derive lastmod per route from `git log -1 --format=%cI -- <page.tsx>` at build time (works in CI if checkout has history), or maintain a date map for pillar pages like the blog registry does.

### 2. LOW — /vs/ga4/ returns 200 instead of redirecting
Excluded from sitemap as a "redirect stub" for /vs-ga4/, but serves 200 with no HTTP redirect (static export limitation). Verify it carries `canonical` → /vs-ga4/ and ideally a meta refresh; otherwise it's an indexable duplicate.

### 3. LOW — robots.txt Disallow gaps for ES mirrors
`Disallow: /demo/thank-you` does not cover `/es/demo/thank-you` or `/demo-access`, `/diagnostic-result`. They are excluded from the sitemap but remain crawlable. Add the missing Disallow lines or confirm noindex meta on those pages.

### 4. INFO — sitemap size headroom
170 URLs, single file, no index needed. Re-evaluate only past ~10k URLs.

## Quality Gates
No location-page pattern detected. The 3 `/gdpr-analytics/*` country pages are well under the 30-page warning threshold and are legally differentiated content (CNIL/DSK/AEPD) — safe.
