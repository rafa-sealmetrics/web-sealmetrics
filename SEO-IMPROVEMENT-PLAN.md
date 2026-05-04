# SealMetrics · SEO Improvement Plan (all 7 categories)

Date: 2026-05-03 · Baseline: 73/100 · Target: 92/100 in 6 weeks
Source data: `audits/2026-05-03/`

This plan moves every category from current score to target. Sequenced in 4 sprints so each week ships measurable score improvement and unblocks the next sprint's work. Effort estimates are dev-hours.

---

## Score targets

| Category | Weight | Now | Target | Δ | Driver |
|---|---|---|---|---|---|
| Technical SEO | 25% | 64 | 90 | +26 | Sprint 1 + Sprint 2 |
| Content Quality | 25% | 72 | 88 | +16 | Sprint 2 + Sprint 3 |
| On-Page SEO | 20% | 88 | 95 | +7 | Sprint 1 cleanup |
| Schema | 10% | 62 | 92 | +30 | Sprint 1 + Sprint 2 |
| Performance | 10% | 81 | 93 | +12 | Sprint 2 + Sprint 3 |
| Images | 5% | 65 | 90 | +25 | Sprint 3 |
| AI Search Readiness | 5% | 76 | 92 | +16 | Sprint 4 |
| **Weighted total** | | **73** | **92** | **+19** | |

---

## Sprint 1 — Stop the bleeding (Week 1, ~12h dev)

Goal: unblock the next deploy without shipping known regressions. Lifts Technical 64→78, Schema 62→78, On-Page 88→95.

### S1.1 — Sitemap trailing slashes (15 min)
`src/app/sitemap.ts:67-91`. Add `/` after every path. Verify `grep -c "/</loc>" out/sitemap.xml` matches `grep -c "</loc>" out/sitemap.xml`.

### S1.2 — Pricing single source of truth (2h)
Create `src/lib/content/pricing.ts`:
```ts
export const PRICING = {
  growth: { monthly: 599, annual: 499 },
  scale:  { monthly: 1079, annual: 899 },
} as const;
```
Refactor consumers: `src/lib/schema.ts:163-181`, `src/components/sections/PricingPlansV3.tsx:28-51`, `src/components/sections/v3/HomeV3Part2.tsx:471-473`, `src/components/sections/v3/HomeV3EsPart2.tsx`. Add a build-time assertion that the homepage Scale price matches `PRICING.scale.annual`.

### S1.3 — Pixel default → production (30 min)
`src/lib/sealmetrics.ts:3` — flip default to `https://pixel.sealmetrics.com`. Add CI step: `! grep -r "pixel-pre" out/ && echo OK`. Preprod becomes the explicit override via `NEXT_PUBLIC_SEALMETRICS_PIXEL_URL`.

### S1.4 — Auto-detect locale in `breadcrumbSchema()` (30 min)
`src/lib/schema.ts`. Derive locale from URL: `locale = url.includes('/es/') || url.endsWith('/es') ? 'es' : 'en'`. Removes need to touch 25 ES pages.

### S1.5 — Security page: drop "Certifications" framing (45 min)
`src/app/(en)/security/page.tsx:69-93` and `(es)/es/security/page.tsx`. Rename eyebrow to "Compliance posture". Replace "certified, audited" with "architectural and contractual". Remove all 4 instances of "outside material scope": same security page line 78, `src/components/sections/v3/VerticalsData.tsx:495,522`, `src/app/(en)/authors/rafa-jimenez/page.tsx:115`.

### S1.6 — Remove HowTo schema from 4 pages (30 min)
`/how-it-works`, `/data-loss-calculator`, `/growth-calculator` + ES mirror. Google deprecated HowTo rich results September 2023.

### S1.7 — Remove FAQPage schema from 22 commercial pages (1h)
16 EN + 6 ES. Keep the FAQ HTML; drop the JSON-LD wrapper. Google restricted FAQPage rich results to government/health pages August 2023.

### S1.8 — Sitemap cleanups (45 min)
- Add `/case-studies/palladium-hotel-group/` to `src/app/sitemap.ts:11-49` and `src/lib/i18n/navigation.ts:4-42`.
- Remove `/demo/thank-you/` from `src/app/sitemap.ts:124-130` (page is `noindex,nofollow`).
- Resolve `/blog/ga4-google-ads-separation/` orphan: ship EN or mark `draft: true` at `src/lib/content/blog.ts:347`.
- Delete `out/sitemap.xml.old`.
- Drop `priority` and `changefreq` (Google ignores both).

### S1.9 — Metadata length over-limits (30 min)
- `src/app/(en)/case-studies/dreamplace-hotels/page.tsx:14` — trim 66c title.
- `src/app/(es)/es/case-studies/dreamplace-hotels/page.tsx:14` — trim 65c title + 166c description.
- `src/app/(en)/glossary/multi-touch-attribution/page.tsx:11` — trim 162c description.

### S1.10 — Bilingual hreflang gaps (30 min)
Add `getAlternates(path)` to `metadata` of: `src/app/(en)/blog/page.tsx`, `src/app/(en)/glossary/page.tsx`, `src/app/(en)/data-loss-calculator/page.tsx`. ES siblings already exist.

### S1.11 — Deploy `main` (deploy step)
After S1.1-S1.10 land. Verify post-deploy:
- `curl -s https://sealmetrics.com/sitemap.xml | grep -c "/</loc>"` returns 120.
- `curl -s https://sealmetrics.com/ | grep -c pixel-pre` returns 0.
- `https://sealmetrics.com/case-studies/dreamplace-hotels/` returns 200.
- `https://sealmetrics.com/es/audit/` returns 200.

**Sprint 1 score impact:** 73 → 80.

---

## Sprint 2 — Infra + content trust (Week 2-3, ~14h dev + 2h infra)

Goal: fix the things that need ops touch (Fastly, deploy env), ship the Palladium de-anonymization, close the JS-weight regression. Lifts Technical 78→88, Schema 78→90, Content 72→82, Performance 81→88.

### S2.1 — HTTP→HTTPS + security headers at Fastly (2h, infra)
- Toggle GitHub Pages "Enforce HTTPS".
- Fastly VCL: `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, `X-Frame-Options: DENY`, CSP in report-only first.
- Verify with `curl -sI https://sealmetrics.com/` → all 6 headers present, `curl -sI http://sealmetrics.com/` → 301.

### S2.2 — Static asset caching (30 min, infra)
Fastly override on `_next/static/*` to `cache-control: max-age=31536000, immutable`. Fingerprinted hashes make this safe.

### S2.3 — Palladium / Toni Andújar de-anonymization (3-4h)
**EN files:**
- `src/app/(en)/page.tsx:54-75` — homepage JSON-LD + visible copy.
- Rename route: `src/app/(en)/case-studies/european-hotel-group/page.tsx` → `palladium-hotel-group/page.tsx` (and make the existing redirect stub the canonical, redirect from european-hotel-group).
- `src/app/(en)/case-studies/page.tsx:22, 27` — listing.
- `src/components/sections/v3/HomeV3.tsx:17` — hero announcement.
- `src/components/sections/v3/VerticalsData.tsx` — hospitality vertical.
- `src/app/(en)/modern-analytics/page.tsx` — FAQ.
**ES mirror:** all of the above under `(es)/es/`.
**Use:** Toni Andújar (named); 40% / 35% / +165% canonical numbers from April 2026 PDF source. Add Person schema for Toni Andújar with `jobTitle: "Director of Digital, Palladium Hotel Group"`.

### S2.4 — JS wire-weight investigation (3h)
Run `ANALYZE=true npm run build`. Identify the two new shared chunks (`5ec682…` 13 KB gz, `4be79…` 10 KB gz). Likely v3 client components hoisted into shared shell. Move to per-route lazy loads via `next/dynamic` with `ssr: true`. Target: roll back from 200 KB gz → 160 KB gz (still +5% over baseline, acceptable for v3 features).

### S2.5 — Logo PNG → SVG, drop the preload (1h)
- Convert `public/logos/logo-sealmetrics-negro.png` (94 KB) to inline SVG component (~4 KB).
- Update `src/components/layout/Header.tsx:200-207` and `src/components/sections/v3/HeroDashboard.tsx:140` to use the SVG component.
- Remove `<link rel="preload" as="image">` for the logo from layout.
- Same for `public/logos/logo-sealmetrics-blanco.png`.

### S2.6 — Mobile horizontal scroll fix (2h)
6 of 8 audited pages overflow at 390×844 (home, es-home, pricing, product, vs-ga360, how-it-works). Likely the announcement pill. Add `overflow-x-hidden` on body; audit `AnnouncementPill` for fixed widths or text breaking. Verify against `audits/2026-05-03/_visual_metrics.json` after fix; new run should show 0/8 overflow.

### S2.7 — `dateModified` on Article schemas (1h)
25 of 26 blog posts ship without it. Update `articleSchema()` in `src/lib/schema.ts` to require `dateModified`. Backfill from git mtime via a build script: `git log -1 --format=%aI <file>`.

### S2.8 — Header CTA WCAG 44px (15 min)
Shared header CTA component: add `min-h-[44px]`.

### S2.9 — `breadcrumbSchema()` validation (30 min)
Make `item` required in helper signature. Fix orphan crumb at `src/app/(en)/authors/rafa-jimenez/page.tsx:33`.

**Sprint 2 score impact:** 80 → 86.

---

## Sprint 3 — Content depth + image pipeline (Week 4-5, ~28h)

Goal: lift Content 82→88 and Images 65→90 by addressing thin content, bilingual parity, and the AVIF/WebP gap.

### S3.1 — AVIF/WebP build pipeline (4h, dev)
Add `scripts/optimize-images.mjs`:
- For every PNG/JPG in `/public/`, generate `.avif` and `.webp` siblings via `sharp`.
- Update components to use `<picture>` with `<source type="image/avif">`, `<source type="image/webp">`, `<img>` PNG fallback.
- Pre-export step in `package.json`: `"build": "node scripts/optimize-images.mjs && next build"`.
- Target: 21 PNGs → 21 PNG + 21 WebP + 21 AVIF; serve AVIF to ~90% of traffic at 30-50% smaller payload.

### S3.2 — Per-post OG images (4h, design + dev)
Currently every post shares `/og-image.png`. Generate per-post OG via `@vercel/og` at build time:
- Template: brand strip + post title + author avatar + date.
- Hook into `generateMetadata()` in `src/app/(en)/blog/[slug]/page.tsx`.
- Same for case studies and glossary terms.

### S3.3 — Fix "cookieless" in H1 across 6 pages (1h)
Affected: `src/app/(en)/blog/cookieless-analytics-explained/page.tsx:37` plus 5 sibling cookieless-* blog/glossary pages.
Re-cast each H1 to a benefit-led variant; demote "cookieless" to body copy. Examples:
- "Cookieless analytics explained" → "How analytics works without cookies".
- "Cookieless analytics for ecommerce" → "How EU eCommerce captures 100% of revenue without cookies".

### S3.4 — Blog depth pass on top 5 posts (10h, content)
20 of 27 EN blog posts under 1000 words; 0 over 1500. Pick the 5 highest-intent (highest cluster value):
- `eu-digital-omnibus-marketer-guide-2026`
- `gdpr-analytics-without-consent`
- `ga4-alternatives-enterprise`
- `ga4-data-sampling-problem`
- `cookieless-analytics-for-ecommerce`
Expand each to 1500-2200 words: original data tables, 2-3 expert quotes, 1 chart, citations, FAQ section. Update `dateModified`.

### S3.5 — ES bilingual content parity, first wave (8h, content)
EN: 27 blog + 14 glossary. ES: 1 blog + 0 glossary. First pass:
- Translate top-10 glossary terms (highest internal-link recipients).
- Translate top-5 blog posts (the 5 from S3.4).
- Add to `translatedPaths` and sitemap.

### S3.6 — Comparison schema (1h)
Wire `comparisonPageSchema()` into `/vs/ga360`, `/vs/adobe-analytics`, `/vs/piwik-pro`, `/vs-ga4`, `/alternatives/google-analytics`. Helper exists with zero callers.

**Sprint 3 score impact:** 86 → 90.

---

## Sprint 4 — AI search readiness + polish (Week 6, ~10h)

Goal: lift AI Readiness 76→92 and ship the long-tail polish items. Final score push to 92.

### S4.1 — `/for/*` schema coverage (1h)
7 of 11 `/for/*` pages have only BreadcrumbList. Apply `verticalSoftwareApplicationSchema()` to all 11. Each gets industry-specific `applicationCategory` and `audience.audienceType`.

### S4.2 — Refresh llms.txt (1h)
Currently ~11 URLs behind. Add: `/audit`, `/modern-analytics`, `/authors/rafa-jimenez`, 3 case-study detail pages, 5 newer blog posts (April 2026), ~12 ES-surface URLs. Auto-generate from sitemap so it never drifts again.

### S4.3 — Article wrapper for case studies (45 min)
`src/app/(en)/case-studies/european-hotel-group/page.tsx` (becomes palladium-hotel-group after S2.3) and `dreamplace-hotels`. Wrap in `Article` JSON-LD with `author`, `datePublished`, `dateModified`, `mainEntityOfPage`.

### S4.4 — Expand `data-speakable` markers (1h)
Currently only `TldrBlock` uses `data-speakable`. Extend to all H1s, lead paragraphs, and answer paragraphs in FAQs. Add `SpeakableSpecification` schema referencing the CSS selectors.

### S4.5 — Buyer-quote attribution (3h, content)
Only Dreamplace ("Eduardo Martin") names the source. Get permission from Palladium (Toni Andújar — already done in S2.3) and 2 more clients. Title-only attribution kills E-E-A-T; named quotes are AI-citable.

### S4.6 — Per-page OpenAI `<meta>` overrides (1h)
For top 10 pages, add `<meta name="claude-summary">` and `<meta name="gpt-summary">` with a 2-sentence summary AI engines can lift verbatim. Reduces the chance of hallucinated summaries.

### S4.7 — Onest weight 300 cleanup (15 min)
Drop weight 300 from `src/components/layout/SharedLayout.tsx:13` import — `font-light` has zero matches in `src/`.

### S4.8 — Preconnect `crossOrigin` fix (10 min)
`src/components/layout/SharedLayout.tsx:37` — add `crossOrigin="anonymous"`. Preconnect handshake currently wasted (script is cross-origin uncredentialed).

### S4.9 — Drop noModule polyfill (1h)
Set `browserslist` floor higher in `package.json` to skip the legacy bundle. 112 KB raw / 39 KB gz savings on every modern browser.

### S4.10 — 28 short titles audit (1h)
Mostly `for/*` and utility pages under 30 chars. Expand each to 45-58 chars with cluster keywords. Wasting SERP pixels.

### S4.11 — Dreamplace mobile H1 (15 min)
Wraps to 8 lines on 390×844 — entire fold consumed. Add responsive `clamp()` size on case-study H1 template.

### S4.12 — Announcement pill 10px → 12px (10 min)
Below the 12px legibility floor on home/es-home. Bump to 12px or hide on mobile.

**Sprint 4 score impact:** 90 → 92.

---

## Verification gates per sprint

After each sprint, re-run `/seo-audit` against the freshly-deployed production. Sprint passes when:

| Sprint | Gate |
|---|---|
| Sprint 1 | Health Score ≥ 80, zero critical defects, deploy green |
| Sprint 2 | Health Score ≥ 86, all 6 security headers present, JS gz ≤ 165 KB, Palladium named everywhere |
| Sprint 3 | Health Score ≥ 90, AVIF served to >50% traffic, 5 blog posts ≥ 1500 words, ES blog ≥ 6 / glossary ≥ 10 |
| Sprint 4 | Health Score ≥ 92, AI Readiness sub-score ≥ 90, llms.txt fully synced |

---

## Effort & ownership summary

| Sprint | Dev hours | Content hours | Infra hours | Design hours |
|---|---|---|---|---|
| Sprint 1 | 12 | 1 (security copy) | 0 | 0 |
| Sprint 2 | 12 | 4 (Palladium) | 2.5 | 0 |
| Sprint 3 | 8 | 18 | 0 | 2 (OG template) |
| Sprint 4 | 6 | 4 | 0 | 0 |
| **Total** | **38** | **27** | **2.5** | **2** |

Total: ~70h across 6 weeks. One full-time week of dev + content split, easily done in the background of normal feature work.

---

## What this plan deliberately does NOT do

- **No new pages.** Every fix is to existing surface. New page creation comes after the 92-score baseline is locked in.
- **No replatforming.** Stays on Next 16 static export to GitHub Pages + Fastly. No Edge runtime, no ISR, no migration to Vercel.
- **No competitor-positioning changes.** Already sound — competes with GA360/Adobe/Piwik PRO, not Plausible/Fathom.
- **No design system changes.** v3 system is correct; only the bugs that violate it (mobile overflow, header CTA height, announcement pill size) get fixed.
- **No scope creep into pricing, GTM, or product copy.** SEO plan only.
