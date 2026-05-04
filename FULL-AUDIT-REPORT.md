# SealMetrics · Full SEO Audit Report

Date: 2026-05-03
Target: https://sealmetrics.com (production) + `/Users/rafa/code/web-sealmetrics/` (source @ `main` HEAD `507620e`) + `/out/` (fresh local build, 135 routes)
Scope: live production crawl (Fastly + GitHub Pages edge), source review of `src/`, schema helper inventory, mobile/desktop visual capture, sitemap and llms.txt validation, bilingual EN/ES surface.
Auditor: orchestrator aggregation of 6 specialist sub-audits in `audits/2026-05-03/`.

This report supersedes the 2026-04-29 audit. Today's headline: production has not been redeployed since 2026-04-24 22:35 UTC (now 9 days behind source). Most prior visual / hreflang / OG / pixel symptoms persist on production until a deploy lands; the source has changed enough since the last audit to introduce new issues that will ship the moment that deploy happens.

---

## Executive Summary

**Overall SEO Health Score: 73/100** (down 2 from 2026-04-29)

Business type detected: B2B SaaS · Enterprise analytics · EU eCommerce focus. Bilingual EN/ES (37 ES routes, 84 EN routes — ratio improved markedly vs prior audit).

| Category | Weight | Score | Δ | Status |
|---|---|---|---|---|
| Technical SEO | 25% | 64/100 | −7 | Sitemap trailing-slash regression, JS payload +30%, HTTPS+headers still unfixed |
| Content Quality | 25% | 72/100 | −6 | Big metadata cleanup; new "Certifications" misuse on /security; Palladium still anonymized |
| On-Page SEO | 20% | 88/100 | +16 | Titles >60c: 15 → 2. Descriptions >160c: 22 → 2. OG gaps: 48 → 0. |
| Schema / Structured Data | 10% | 62/100 | −13 | Three pricing sources of truth (€1079/€899/€999). ES breadcrumbs render with EN locale. HowTo + FAQPage misuse persist. |
| Performance (CWV) | 10% | 81/100 | +1 | Build improves; production stale. JS wire weight grew +30% in v3 migration. |
| Images | 5% | 65/100 | 0 | Still PNG-only, 94 KB logo for 160×32 slot. Unchanged. |
| AI Search Readiness | 5% | 76/100 | −4 | Homepage JSON-LD exploded 1 → 16 types (213 KB HTML). Strong DefinedTerm/Quotation/ClaimReview cluster offsets risk. |

### Top 5 critical issues (fix before next deploy)

1. **Sitemap trailing-slash regression — every URL becomes a 301 the moment you deploy.** `src/app/sitemap.ts:67-91` now emits `<loc>https://sealmetrics.com/pricing</loc>` (no slash) on all 120 entries. Site enforces `trailingSlash: true`, so Google will hit each entry once, get a 301 to the slashed canonical, and retry. Production sitemap (still on the 2026-04-24 build) is correct; the regression is in source only. **Fix before deploy** or you discount 9 days of indexing work in one push.

2. **Three different prices for the "Scale" plan, all in JSON-LD or visible copy.** `src/lib/schema.ts:174` says €1079, `src/components/sections/PricingPlansV3.tsx:51` (rendered on `/pricing/`) says €899 annual, `src/components/sections/v3/HomeV3Part2.tsx:472` (homepage) says €999. Same product, three numbers, all crawlable. Prior audit had two — v3 homepage shipped a third. AI engines will pick a price at random when answering "how much does SealMetrics cost?".

3. **HTTP→HTTPS still 200, zero security headers on production** (HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy). Unchanged for 9 days, prior audit, prior-prior audit. For a vendor selling GDPR/ePrivacy compliance, this is the single most damaging finding to AI-cited trust signals. Fix at the Fastly tier (GitHub Pages cannot set headers).

4. **Production loads `pixel-pre.sealmetrics.com` (preprod analytics endpoint).** Source `src/lib/sealmetrics.ts:3` accepts `NEXT_PUBLIC_SEALMETRICS_PIXEL_URL` from env but defaults to preprod when unset. CI does not set the var, so even after the next deploy this will still ship preprod unless either the env var is wired in the deploy step or the default is flipped to `pixel.sealmetrics.com`.

5. **ES breadcrumbs render the wrong locale.** `breadcrumbSchema()` in `src/lib/schema.ts` accepts `locale: "en" | "es" = "en"` but ~25 of ~30 ES pages call it without `"es"`. Result: every Spanish page's BreadcrumbList declares "Home → https://sealmetrics.com" as root instead of "Inicio → https://sealmetrics.com/es/". Hreflang says "this page is Spanish"; structured data says "this page lives at the English root". Search engines may collapse the ES set into the EN set.

### Top 5 quick wins (high-impact, single PR each)

1. **Trigger a deploy of `main`** after fixing #1 above. Single action: production catches up 9 days, Plus Jakarta → Onest sitewide, `/audit/`, `/case-studies/dreamplace-hotels/` and 22 `/es/*` routes go live, +34 visual points, +3-5 perf points. Free.

2. **Restore trailing slashes in `src/app/sitemap.ts:67-91`.** Add `/` after every path. One PR, prevents the 120-URL redirect cascade described in critical #1.

3. **Set `NEXT_PUBLIC_SEALMETRICS_PIXEL_URL=https://pixel.sealmetrics.com` in the GitHub Pages deploy workflow** — or change the default in `src/lib/sealmetrics.ts:3` to prod and let preprod be the override. Either fixes critical #4.

4. **Move pricing data to `src/lib/content/pricing.ts`** as the single source of truth. Have `softwareApplicationSchema()` (`src/lib/schema.ts:163-181`), `pricing/page.tsx` and `HomeV3Part2.tsx:471-473` all import from it. Fixes critical #2.

5. **Default `breadcrumbSchema()` locale from pathname** instead of accepting an opt-in parameter — `pathname.startsWith('/es')` is enough. Fixes critical #5 in one helper change instead of touching 25 pages.

---

## Technical SEO (64/100)

Down 7 points since 2026-04-29 because the v3 migration introduced new source-side defects that more than offset the genuine wins (hreflang coverage 40% → 62%, AI-bot robots.txt allowlist expanded 4 → 16 entries).

Critical:
- **Sitemap trailing slashes dropped** (`src/app/sitemap.ts:67-91`) — all 120 entries lack `/`. Production sitemap is still the old correct one; regression ships on next deploy.
- **HTTP→HTTPS still 200, zero security headers** on production. Same as 2026-04-29.
- **Pixel still defaults to preprod** in source. Build still ships preprod-bound.

High:
- **3 fixable bilingual hreflang gaps**: `/blog/`, `/glossary/`, `/data-loss-calculator/` — ES siblings exist but EN sources call only `canonical`, not `getAlternates()`.
- **9-day build-vs-deploy drift.** Production 404s on `/audit/`, `/case-studies/dreamplace-hotels/`, all 22 newly-translated `/es/*` routes including 11 `/for/*` pages.
- **Initial JS+CSS wire weight +30%** (152 KB gz → 200 KB gz). Two new shared chunks (`5ec682…` 13 KB gz, `4be79…` 10 KB gz) appear on every page. Likely v3 client components hoisted into the shell. Action: `ANALYZE=true npm run build`.
- **Static asset cache-control still 600s** on hash-named chunks (should be 31536000 immutable). Wastes the entire fingerprinted-chunk pattern.

Medium:
- Two URL schemes for comparison pages still coexist (`/vs-ga4/` and `/vs/{vendor}/`). Confirmed *intentional* per content architecture (content-agnostic page vs vendor-specific), but 301 still recommended for `/vs/ga4/` if it's ever hit.
- `lastmod` regenerated to today on every deploy for 96 of 120 sitemap entries (only the 24 blog posts have real per-page dates).

Verified-OK: trailing-slash on canonicals (Next normalises despite source omission), `/demo/thank-you/` noindex+nofollow, `/diagnostic-result/` noindex+follow, 404 emits noindex with proper 404 status, www→apex 301 works.

Full report: `audits/2026-05-03/seo-technical.md`.

---

## Content Quality (72/100)

Up materially from prior cycle on metadata + banned-claims hygiene; pulled down by three remaining trust-issue defects.

Strengths (post-2026-04-29 wins):
- **Banned claims sweep mostly clean**: zero ISO 27001 / SOC 2, zero `rafa@sealmetrics.com`, zero Frankfurt, zero "multi-touch attribution" as feature claim, zero "session reconstruction", zero peer comparisons with Plausible/Fathom (consistently framed as "lightweight, different category" e.g. `src/app/(en)/modern-analytics/page.tsx:54-55`).
- **Metadata cleanup**: titles >60c dropped 15 → 2, descriptions >160c 22 → 2, OG gaps 48 → 0.
- AI citation readiness sub-score 76/100 — DefinedTerm/Quotation/ClaimReview cluster intact and well-formed.

Critical:
- **C1 — Security page misuses "Certifications" framing.** `src/app/(en)/security/page.tsx:69-93` puts GDPR / ePrivacy / Schrems II / DPA / TPSR under a "Certifications" eyebrow with copy "certified, audited" (line 73). None of those are certifications. A DPO reading "certified, audited" will reasonably expect ISO 27001 / SOC 2 to exist (and the project rule explicitly forbids those claims).
- **C2 — "Outside material scope" wording remains** (4 instances): `src/app/(en)/security/page.tsx:78`, `src/components/sections/v3/VerticalsData.tsx:495, 522`, `src/app/(en)/authors/rafa-jimenez/page.tsx:115`.
- **C3 — Palladium / Toni Andújar de-anonymization not implemented.** Memory says client OK to name with 40%/35%/+165% canonical numbers. Source scan finds zero references to "Palladium", "Toni" or "Andújar". Numbers are present, client is still "European hotel group" everywhere: `src/app/(en)/page.tsx:54-75`, `src/app/(en)/case-studies/european-hotel-group/page.tsx:14-52`, `src/components/sections/v3/HomeV3.tsx:17`. Named route `case-studies/palladium-hotel-group/page.tsx` is just a redirect stub.
- **C4 — Bilingual parity gap.** EN: 27 blog posts + 14 glossary terms. ES: 1 blog post + 0 glossary terms.

High:
- "cookieless" in H1 across 6 pages (rule: never in H1/H2): `src/app/(en)/blog/cookieless-analytics-explained/page.tsx:37` plus 5 sibling cookieless-* pages.
- 20 of 27 EN blog posts under 1000 words; 0 over 1500 — under the QRG comprehensive-coverage floor.
- Buyer quotes title-only attribution across the site; only Dreamplace ("Eduardo Martin") is named.
- 4 length over-limits remain: `src/app/(en)/case-studies/dreamplace-hotels/page.tsx:14` (66c title), `src/app/(es)/es/case-studies/dreamplace-hotels/page.tsx:14` (65c title + 166c description), `src/app/(en)/glossary/multi-touch-attribution/page.tsx:11` (162c description).

Full report: `audits/2026-05-03/content-audit.md`.

---

## On-Page SEO (88/100)

Largest single-cycle improvement. The 2026-04-29 audit listed 15 over-length titles, 22 over-length descriptions, 48 missing OG, 1 page missing all metadata. Today: 2 / 2 / 0 / 0 (the remaining 8 OG gaps are all redirect stubs, acceptable). Heading hierarchy still clean (one H1, no skipped levels). The "cookieless" in H1 on 6 cookieless-* blog/glossary pages is the main remaining on-page lint (counted under Content above).

---

## Schema & Structured Data (62/100)

Down 13 points. Two genuinely-shipped regressions plus all four prior P0/P1 defects unresolved.

Critical:
- **Three pricing sources of truth, all different** for the "Scale" plan: `src/lib/schema.ts:174` €1079, `src/app/(en)/pricing/page.tsx:49` €899, `src/components/sections/v3/HomeV3Part2.tsx:472` €999. Prior audit had two; v3 homepage shipped a third. Same plan, three numbers, all in crawlable JSON-LD or visible copy. AI engines will hallucinate.
- **NEW — ES breadcrumbs render the EN locale.** `breadcrumbSchema()` accepts `locale: "en" | "es" = "en"`; ~25 of ~30 ES pages omit the parameter, so every ES page declares "Home → sealmetrics.com" as breadcrumb root. Auto-detect from pathname.

High:
- **HowTo deprecated since Sept 2023, still on 4 files**: `/how-it-works`, `/data-loss-calculator`, `/growth-calculator`, ES mirror.
- **FAQPage rich-result restricted since Aug 2023, still on 22 commercial pages** (16 EN + 6 ES). Google only renders FAQ markup on government/health pages now; on commercial pages it does nothing or risks a manual action.
- **Comparison pages emit BreadcrumbList only.** `comparisonPageSchema()` helper exists but has zero callers.
- **7 of 11 `/for/*` pages have only BreadcrumbList**; only 4 use `verticalSoftwareApplicationSchema()`.
- **25 of 26 blog posts ship without `dateModified`** despite v3 / Dreamplace / Palladium content sprint touching ~30 of them.

Medium:
- `breadcrumbSchema()` produces invalid `ListItem` (no `item`) when caller omits URL — orphan crumb at `src/app/(en)/authors/rafa-jimenez/page.tsx:33`.
- New `/case-studies/dreamplace-hotels` shipped without addressing the missing `Article` wrapper raised against european-hotel-group last week.
- Homepage JSON-LD exploded from 1 type to 16 types (Claim, ClaimReview, Quotation included). HTML payload grew 174 KB → 213 KB. Powerful for AI citation; risky and unvalidated for traditional search.

Wins:
- `data-speakable` is now used in `src/components/ui/TldrBlock.tsx:18,31` (new since prior audit).

Full report: `audits/2026-05-03/seo-schema.md`.

---

## Performance (81/100)

Up 1 point net. Build-side improvements (Onest font swap, preconnect/dns-prefetch to pixel host, hero React/SVG eliminating the 91 KB dashboard PNG as LCP candidate) are blocked behind the deploy. Build wire-weight regression cancels most of the gain.

Strengths:
- Hero v3 is interactive React/SVG — H1 is now LCP candidate on `/`, not a PNG.
- Preconnect + dns-prefetch to pixel host added (`src/components/layout/SharedLayout.tsx:37`).
- `font-display: swap` on Onest, weight subset reasonable.

Critical (unchanged from prior):
- 9-day deploy stale; production still ships Plus Jakarta + old assets.
- `cache-control: max-age=600` on every `_next/static/*` asset (verified live 2026-05-03 16:04 UTC). Fingerprinted hashes wasted.
- Pixel still preprod (see Technical critical #4).

High:
- **Initial JS+CSS wire weight grew +30%** (152 → 200 KB gz). Two new shared chunks; framework chunk +4 KB gz; Tailwind CSS +2.5 KB gz.
- Logo PNG still 94 KB at `public/logos/logo-sealmetrics-negro.png` (1219×204 for a 160×32 slot). LCP candidate on 7 of 8 audited pages, still `<link rel="preload" as="image">` on every page.
- Zero AVIF/WebP under `/public/`. 21 PNG, 17 SVG.
- Preconnect at `SharedLayout.tsx:37` lacks `crossOrigin="anonymous"` → handshake wasted (script is cross-origin uncredentialed; preconnect is credentialed).
- noModule legacy polyfill chunk still 112 KB raw / 39 KB gz on every modern browser.
- Brotli still not negotiated by GitHub Pages (gzip only).

Per-page wire weight (build, gz): `/` 200K, `/pricing/` 204K, `/product/` 198K, `/how-it-works/` 199K, `/vs/ga360/` 199K, `/case-studies/european-hotel-group/` 194K, `/case-studies/dreamplace-hotels/` 194K, `/demo/` 197K.

Full report: `audits/2026-05-03/seo-performance.md`.

---

## Images (65/100)

Unchanged from 2026-04-29. All raster is PNG (no AVIF/WebP). 94 KB logo for 160×32 slot still preloaded on every page. No per-post OG images. Alt-text coverage on `next/image` callsites is good.

---

## AI Search Readiness (76/100)

Down 4 points. The DefinedTerm/Quotation/ClaimReview cluster on the glossary, homepage, and case studies is genuinely strong and already a competitive moat for AI citation. But the homepage JSON-LD bloat to 16 types (213 KB HTML) and the pricing-data inconsistency directly undermine citability. AI engines hallucinating the price is worse than not being cited at all.

Wins:
- llms.txt + llms-full.txt present, robots.txt allows GPTBot/ClaudeBot/PerplexityBot/Google-Extended/ChatGPT-User/OAI-SearchBot/Claude-Web/anthropic-ai/Perplexity-User/Applebot-Extended/CCBot/Bytespider/FacebookBot/Meta-ExternalAgent/Amazonbot/Diffbot/DuckAssistBot/cohere-ai/Mistral-AI-User/YouBot (16 entries, up from 4).
- ClaimReview blocks on homepage and case study; Quotation blocks make pull-quotes individually queryable.
- DefinedTerm + DefinedTermSet on glossary makes the cluster a citeable knowledge graph.
- New `data-speakable` markers in `TldrBlock`.

Risks:
- Pricing inconsistency = AI engines will pick a number at random.
- HowTo/FAQPage schema theater remains (rich-result restricted, but still parseable signal noise).
- llms.txt is ~11 URLs behind the page set.

---

## Sitemap (sub-audit summary, feeds Technical score)

**78/100** — up materially from an effective 62 last cycle once these fixes deploy. `bilingualPaths` and `translatedPaths` are now in perfect 37/37 sync. Hreflang coverage 40% → 62%. 16-bot AI crawler allowlist.

Defects to fix:
- Palladium Hotel Group case study missing from sitemap despite EN + ES pages on disk. Add to `src/app/sitemap.ts:11-49` and `src/lib/i18n/navigation.ts:4-42`.
- `/blog/ga4-google-ads-separation` orphan: sitemap line 838 lists EN URL but no EN page exists (only ES). Either ship EN or mark draft.
- `/demo/thank-you` is in sitemap (`src/app/sitemap.ts:124-130`) but the page is `noindex,nofollow`. Soft conflict. Remove.
- Trailing-slash regression (already covered as Technical critical #1).
- Stale `out/sitemap.xml.old` (20.3 KB) sitting next to the new sitemap — delete to avoid accidental serving.

Full report: `audits/2026-05-03/seo-sitemap.md`.

---

## Visual (sub-audit summary)

**Local build: 86/100.** v3 redesign landed cleanly: Onest 600, warm cream `#FAFAF7` body, italic emphasis in brand green `#2D8B6D` + amber `#E8B84B` underline.

**Production: 52/100.** Still on 2026-04-24 build: Plus Jakarta Sans 400 on flat white, no italic emphasis, `/case-studies/dreamplace-hotels/` returns 404. Single deploy closes the 34-point gap.

New defects (will ship on next deploy, fix first):
- **Mobile horizontal scroll on 6/8 pages** (home, es-home, pricing, product, vs-ga360, how-it-works at 390×844). Likely the announcement pill at small breakpoints. Add `overflow-x-hidden` on body and audit the pill.
- Header CTA still 125×41 sitewide — 3px short of WCAG 44px. Add `min-h-[44px]`.
- Dreamplace mobile H1 wraps to 8 lines and consumes entire 844px fold — no CTA visible. Shorten H1 or reduce mobile size on case-study template.
- Announcement pill text at 10px is below the 12px legibility floor on home/es-home.

Banned-positioning checks pass: "cookieless" not in any H1/H2 across 64 sampled headings; "multi-touch attribution" not in any heading.

Full report: `audits/2026-05-03/seo-visual.md`. Screenshots: `audits/2026-05-03/screenshots/` (64 PNGs).

---

## What changed since 2026-04-29

| Area | Before | After | Δ |
|---|---|---|---|
| Sitemap URLs | 89 | 120 | +31 |
| Hreflang coverage | 36/89 (40%) | 74/120 (62%) | +22 pts |
| AI bot allowlist | 4 entries | 16 entries | +12 |
| Titles >60c | 15 | 2 | −13 |
| Descriptions >160c | 22 | 2 | −20 |
| OG metadata gaps | 48 | 0 (content) / 8 (stubs) | −48 |
| Pricing sources of truth | 2 | 3 (NEW regression) | −1 |
| Sitemap trailing slashes | correct | dropped (NEW regression) | −1 |
| ES breadcrumb locale | n/a | EN-locale on ~25 ES pages (NEW) | −1 |
| Homepage JSON-LD types | 1 | 16 | mixed |
| Initial JS wire weight (gz) | 152 KB | 200 KB | +30% |
| Production deploy age | live (2026-04-24) | live (2026-04-24) | +9 days drift |

---

## Detail reports

- `audits/2026-05-03/seo-technical.md`
- `audits/2026-05-03/content-audit.md`
- `audits/2026-05-03/seo-schema.md`
- `audits/2026-05-03/seo-sitemap.md`
- `audits/2026-05-03/seo-performance.md`
- `audits/2026-05-03/seo-visual.md`
- `audits/2026-05-03/screenshots/` (64 PNGs)
- `audits/2026-05-03/_visual_metrics.json`

Action plan: `ACTION-PLAN.md`.
