# SealMetrics · SEO Action Plan

Date: 2026-05-03 · Health Score: 73/100 · Source: `audits/2026-05-03/`

Prioritized recommendations from the 2026-05-03 audit. Critical → High → Medium → Low.

---

## CRITICAL (block the next deploy until these are fixed)

### C1. Restore trailing slashes in sitemap
**File:** `src/app/sitemap.ts:67-91`
**Problem:** All 120 entries now emit `<loc>https://sealmetrics.com/pricing</loc>` (no slash). Site enforces `trailingSlash: true`, so on next deploy every Google-indexed URL becomes a 301 hop. Production sitemap (the one Google has cached) is still correct; the regression is in source only.
**Fix:** add `/` after every path; ensure `https://sealmetrics.com/` (root) keeps its slash too. Verify with `grep -c "</loc>" out/sitemap.xml` after rebuild.
**Owner:** dev. **Effort:** 15 min.

### C2. Unify pricing data — three sources of truth
**Files:** `src/lib/schema.ts:163-181` (€1079), `src/components/sections/PricingPlansV3.tsx:28-51` rendered on `/pricing/` (€899 annual), `src/components/sections/v3/HomeV3Part2.tsx:471-473` (€999).
**Problem:** Same plan ("Scale"), three different prices, all crawlable and ingestible by AI engines. Prior audit flagged two; v3 homepage shipped a third.
**Fix:** create `src/lib/content/pricing.ts` exporting `{ growth: { monthly, annual }, scale: { monthly, annual } }`. Have all three callers import from it. Add a build-time assertion that `softwareApplicationSchema()` reads from the same constant.
**Owner:** dev. **Effort:** 1-2h.

### C3. Production HTTP→HTTPS + security headers
**Where:** Fastly VCL (GitHub Pages cannot set headers).
**Problem:** `curl -sI http://sealmetrics.com/` returns 200, not 301. Zero security headers (HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy). Unchanged for 9+ days. For a privacy/compliance vendor this is the single most damaging trust signal.
**Fix:** Toggle GitHub Pages "Enforce HTTPS"; add Fastly VCL header injection for HSTS (`max-age=31536000; includeSubDomains; preload`), CSP (start with report-only), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, `X-Frame-Options: DENY`.
**Owner:** infra. **Effort:** 2h.

### C4. Pixel default → production
**File:** `src/lib/sealmetrics.ts:3`
**Problem:** Defaults to `pixel-pre.sealmetrics.com`. Env var `NEXT_PUBLIC_SEALMETRICS_PIXEL_URL` is read but not set in CI, so build still ships preprod. Prior audit flagged this; partial fix landed (env-var override) but the default is wrong.
**Fix:** Either flip the default to `https://pixel.sealmetrics.com` and let preprod be the override (preferred), OR set `NEXT_PUBLIC_SEALMETRICS_PIXEL_URL=https://pixel.sealmetrics.com` in `.github/workflows/*.yml`. Add a CI assertion that grepping the build output for `pixel-pre` returns zero.
**Owner:** dev. **Effort:** 30 min.

### C5. Auto-detect locale in `breadcrumbSchema()`
**File:** `src/lib/schema.ts` (`breadcrumbSchema()` helper)
**Problem:** Accepts `locale: "en" | "es" = "en"`. ~25 of ~30 ES pages call it without passing `"es"`, so every Spanish page declares "Home → https://sealmetrics.com" (EN root) as breadcrumb root instead of "Inicio → /es/". Hreflang says ES; structured data says EN.
**Fix:** Default the locale from the page path. The helper already receives the page's URL — derive `locale = url.includes('/es/') || url.endsWith('/es') ? 'es' : 'en'`. Removes the need to touch 25 pages.
**Owner:** dev. **Effort:** 30 min.

### C6. Security page — remove "Certifications" framing
**File:** `src/app/(en)/security/page.tsx:69-93`
**Problem:** Puts GDPR / ePrivacy / Schrems II / DPA / TPSR under "Certifications" eyebrow with "certified, audited" copy. None of those are certifications. CLAUDE.md explicitly forbids ISO 27001 / SOC 2 claims; this implies them.
**Fix:** Rename eyebrow to "Compliance posture" or "Privacy framework". Replace "certified, audited" with "architectural and contractual". Audit the same patterns in `(es)/es/security/`.
**Owner:** content. **Effort:** 30 min.

---

## HIGH (within 1 week)

### H1. Deploy `main` after C1-C5 land
Single action unlocks everything in source: Onest font sitewide, `/audit/`, `/case-studies/dreamplace-hotels/`, 22 `/es/*` routes, hero v3 redesign, 16-bot allowlist, expanded ClaimReview/Quotation/DefinedTerm cluster. Visual production score 52 → 86, perf +3-5 points, technical +5-10 points.

### H2. Mobile horizontal scroll on 6/8 pages
**Pages:** home, es-home, pricing, product, vs-ga360, how-it-works at 390×844.
**Likely cause:** announcement pill at small breakpoints overflowing.
**Fix:** add `overflow-x-hidden` on body; audit `AnnouncementPill` component for fixed widths or text breaking. Verify with `audits/2026-05-03/_visual_metrics.json` after fix.

### H3. De-anonymize Palladium / Toni Andújar
**Files to touch:**
- `src/app/(en)/page.tsx:54-75` (homepage JSON-LD anonymization)
- `src/app/(en)/case-studies/european-hotel-group/page.tsx:14-52` (main case study — also rename route to `palladium-hotel-group`)
- `src/app/(en)/case-studies/page.tsx:22, 27` (listing)
- `src/components/sections/v3/HomeV3.tsx:17` (hero announcement)
- `src/components/sections/v3/VerticalsData.tsx` (hospitality vertical)
- `src/app/(en)/modern-analytics/page.tsx` (FAQ)
- `src/app/(en)/case-studies/palladium-hotel-group/page.tsx` (currently a redirect stub — make it the canonical, redirect from european-hotel-group)
- ES mirrors of all of the above.
**Use:** Toni Andújar (named), 40% / 35% / +165% canonical numbers (April 2026 PDF source). Add to sitemap and `translatedPaths`.
**Effort:** 2-4h.

### H4. Remove HowTo schema from 4 pages
**Files:** `/how-it-works`, `/data-loss-calculator`, `/growth-calculator`, ES mirror. Google deprecated HowTo rich results September 2023.

### H5. Remove FAQPage schema from 22 commercial pages
**16 EN + 6 ES.** Google restricted FAQPage rich results to government/health pages August 2023. Either keep the FAQ block as plain HTML or migrate to `Question` items inside an `Article`/`WebPage`.

### H6. Header CTA + WCAG 44px
**File:** shared header CTA component.
Currently 125×41. Add `min-h-[44px]`.

### H7. Logo PNG → SVG, drop the preload
**File:** `public/logos/logo-sealmetrics-negro.png` (94 KB, 1219×204 for a 160×32 slot). LCP candidate on 7 of 8 audited pages.
**Fix:** ship inline SVG via `<svg>` component or a 4 KB SVG file; remove `<link rel="preload" as="image">` from layout.

### H8. Sitemap cleanups
- Add `/case-studies/palladium-hotel-group/` to `src/app/sitemap.ts:11-49` and `src/lib/i18n/navigation.ts:4-42`.
- Remove `/demo/thank-you/` from sitemap (`src/app/sitemap.ts:124-130`) — page is `noindex`.
- Resolve `/blog/ga4-google-ads-separation/` orphan (EN URL listed, ES-only on disk): ship EN or mark draft.
- Delete `out/sitemap.xml.old`.

### H9. Add `dateModified` to Article schemas
25 of 26 blog posts have no `dateModified` despite recent content sprints. Update `articleSchema()` helper to require it; backfill from git mtime.

### H10. Fix 4 metadata length over-limits
- `src/app/(en)/case-studies/dreamplace-hotels/page.tsx:14` — 66c title.
- `src/app/(es)/es/case-studies/dreamplace-hotels/page.tsx:14` — 65c title + 166c description.
- `src/app/(en)/glossary/multi-touch-attribution/page.tsx:11` — 162c description.

### H11. Static asset caching
Currently `cache-control: max-age=600` on every `_next/static/*` chunk. Set Fastly override on `_next/static/*` to `max-age=31536000, immutable`. Hash-named chunks make this safe; current setting wastes the entire fingerprinting pattern.

### H12. Remove "outside material scope" copy
4 instances: `src/app/(en)/security/page.tsx:78`, `src/components/sections/v3/VerticalsData.tsx:495, 522`, `src/app/(en)/authors/rafa-jimenez/page.tsx:115`.

---

## MEDIUM (within 1 month)

### M1. JS wire-weight regression investigation
+30% (152 → 200 KB gz) since v3 migration. Run `ANALYZE=true npm run build` and identify the two new shared chunks (`5ec682…` 13 KB gz, `4be79…` 10 KB gz). Likely v3 client components hoisted into shared shell — should be lazily loaded per-route.

### M2. Bilingual hreflang gaps
Three EN pages have ES siblings but call only `canonical`, not `getAlternates()`: `/blog/`, `/glossary/`, `/data-loss-calculator/`. Add `getAlternates(path)` to those pages' metadata.

### M3. ES bilingual content parity (long-running)
EN: 27 blog + 14 glossary. ES: 1 blog + 0 glossary. Translate top-10 glossary terms + top-5 blog posts as a first pass. Track in a separate sprint.

### M4. Fix "cookieless" in H1 across 6 pages
Rule: never in H1/H2. Affected: `cookieless-analytics-explained` plus 5 sibling pages. Re-cast H1 as benefit-led with "cookieless" demoted to body copy.

### M5. Comparison pages — add schema
`comparisonPageSchema()` exists but has zero callers. Wire into `/vs/ga360`, `/vs/adobe-analytics`, `/vs/piwik-pro`, `/vs-ga4`, `/alternatives/google-analytics`.

### M6. `/for/*` schema coverage
7 of 11 `/for/*` pages have only BreadcrumbList. Apply `verticalSoftwareApplicationSchema()` to all 11.

### M7. Preconnect missing `crossOrigin`
`src/components/layout/SharedLayout.tsx:37` — preconnect handshake wasted because the script is cross-origin uncredentialed but preconnect is credentialed. Add `crossOrigin="anonymous"`.

### M8. Buyer-quote attribution
Only Dreamplace ("Eduardo Martin") names the source. Rest are title-only. Get permission to name 2-3 more.

### M9. Blog depth
20 of 27 EN blog posts under 1000 words; 0 over 1500. Pick 3-5 high-intent posts and expand to 1500+ words with original data, screenshots, and citations.

### M10. Onest weight 300 unused
Loaded but `font-light` has zero matches in `src/`. Drop the weight from the import in `src/components/layout/SharedLayout.tsx:13`.

### M11. llms.txt freshness
~11 URLs behind the page set. Missing: `/audit`, `/modern-analytics`, `/authors/rafa-jimenez`, 3 case-study detail pages, 5 newer blog posts (April 2026), ~12 ES-surface URLs.

### M12. Article wrapper for case studies
Both `european-hotel-group` and `dreamplace-hotels` lack the `Article` JSON-LD wrapper.

---

## LOW (backlog)

### L1. AVIF/WebP conversion for the 21 PNGs in `/public/`
Use `next/image` won't help (static export uses `unoptimized: true`). Pre-convert at build time with a script.

### L2. Drop `priority`/`changefreq` from sitemap
Google ignores both. Cleaner file at `src/app/sitemap.ts:69-70, 82-83, 99-100, 109-110, 119-120, 128-129`.

### L3. `lastmod` per-page literals
Currently 96 of 120 entries carry today's date because `src/app/sitemap.ts:8` computes `today` once at build time. Refactor to per-page literal or git mtime.

### L4. Brotli at the edge
GitHub Pages negotiates gzip only. If Fastly fronts the origin, enable brotli at the Fastly tier.

### L5. Drop noModule polyfill
112 KB raw / 39 KB gz on every modern browser. Configure Next 16 to skip the legacy bundle, or set the `browserslist` floor higher.

### L6. Announcement pill text at 10px
Below the 12px legibility floor on home/es-home. Bump to 12px or remove the pill on mobile.

### L7. `/vs/ga4/` 301 stub
Even though `/vs-ga4/` is intentional content architecture, add a 301 stub at `/vs/ga4/` for users who guess the URL pattern.

### L8. `breadcrumbSchema()` validation
Helper produces invalid `ListItem` (no `item`) when caller omits URL — orphan crumb at `src/app/(en)/authors/rafa-jimenez/page.tsx:33`. Make `item` required.

### L9. Dreamplace mobile H1
Wraps to 8 lines on 390×844 and consumes entire fold — no CTA visible. Shorten H1 or set responsive size on case-study template.

### L10. 28 page titles under 30 chars
Mostly `for/*` and utility pages. Wasting SERP pixels. Expand to use the available 50-60 chars.

---

## What can land in one PR before the next deploy

A "ship-ready" PR addresses C1, C2, C4, C5, C6 + H8 + H10 + H12. That's:
- One sitemap `.ts` edit (trailing slashes + Palladium add + thank-you remove)
- One pricing constants module + 3 import edits
- One env-var/default flip in `sealmetrics.ts`
- One auto-detect change in `breadcrumbSchema()`
- Security-page copy edits (rename eyebrow, replace 4 instances of "outside material scope")
- 4 metadata title/description trims
- Delete `out/sitemap.xml.old`

Estimated effort: 4-5h. Resolves 7 of 8 score-pulling items in critical+high tiers and lifts the projected post-deploy health score from 73 → ~85.
