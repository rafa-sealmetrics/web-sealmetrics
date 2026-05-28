# SealMetrics — Full SEO Audit Report

**Site**: https://sealmetrics.com/
**Date**: 2026-05-28
**Crawler**: 6 specialist agents (technical, content, schema, sitemap, performance, visual)
**Pages sampled**: homepage + 25 representative pages across EN + ES locales

---

## Executive Summary

### SEO Health Score: **74 / 100**

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 25% | 65 | 16.25 |
| Content Quality | 25% | 86 | 21.50 |
| On-Page SEO | 20% | 75 | 15.00 |
| Schema / Structured Data | 10% | 70 | 7.00 |
| Performance (CWV) | 10% | 70 | 7.00 |
| Images | 5% | 55 | 2.75 |
| AI Search Readiness | 5% | 90 | 4.50 |
| **Total** | **100%** | | **74.00** |

**Verdict**: Solid editorial site with excellent content discipline (zero banned-claim violations, comprehensive llms.txt, clean sitemap with hreflang reciprocity). Held back by hosting-layer security defaults (no HTTPS enforcement, no HSTS, 10-min cache TTL) and a handful of high-impact polish issues (broken `/vs/ga4/` URL, pricing schema contradiction, oversized favicon).

**Business type detected**: B2B SaaS, enterprise tier, bilingual (EN primary, ES secondary), editorial content strategy with pillar + cluster architecture.

### Top 5 Critical Issues

1. **No HTTP→HTTPS redirect.** `http://sealmetrics.com/` returns 200 with full HTML. Privacy-positioned vendor serving unencrypted is a credibility hit and a Google ranking penalty signal. *(1-click GitHub Pages fix.)*
2. **No HSTS or other security headers.** Zero `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, CSP. Must be added at Fastly edge.
3. **`/vs/ga4/` returns 404.** GA4 is the migration source for nearly every prospect. Page exists at `/vs-ga4/` but breaks the `/vs/<slug>/` cluster convention and is absent from the `/vs/` hub.
4. **Homepage FAQPage schema violates Google's Aug-2023 policy.** Rich-result eligibility is restricted to government and health sites; emitting FAQPage elsewhere can trigger manual action. Migrate Q/A into `WebPage.mainEntity` as `Question[]`.
5. **Pricing schema contradiction.** `SoftwareApplication` declares €599/€1079 (monthly) while `Product/AggregateOffer` declares €499/€899 (annual), with no `priceSpecification.unitText` to differentiate. Google will pick one and may surface a misleading price.

### Top 5 Quick Wins (≤1 hour each)

1. **Enable "Enforce HTTPS"** in GitHub Pages settings → fixes Critical #1.
2. **Delete the 325KB `/favicon.png`** in favour of the existing 6.8KB AVIF + 12KB WebP. Currently loaded twice per page. Single biggest mobile-CWV win.
3. **Tighten homepage title (67→≤58 chars) and description (171→≤155 chars)** in both EN and ES — current values are truncated in SERPs.
4. **301 `/vs/ga4/` → `/vs-ga4/`** (or copy the page to `/vs/ga4/` and 301 the legacy URL), then add it to the `/vs/` hub.
5. **Add Fastly cache override** `public, max-age=31536000, immutable` on `/_next/static/*` → projected 1350ms repeat-visit LCP improvement.

---

## 1. Technical SEO

Full report: [`technical.md`](./technical.md) — 215 lines, ✅ written.

### Critical
- **HTTPS not enforced.** `http://` returns 200, never 301s to `https://`. Verified live. Fix: GitHub Pages → Settings → Enforce HTTPS (one click).
- **No HSTS.** Required once HTTPS enforced. Recommended value at Fastly edge: `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`.

### High
- **Zero security headers.** None of HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSP are present. Add via Fastly VCL; start CSP in Report-Only.
- **Cache-Control on hashed assets is 10 minutes.** GitHub Pages forces `max-age=600` on `/_next/static/*`. Override at Fastly to `max-age=31536000, immutable` — biggest available Core Web Vitals lever.
- **Homepage title (67 chars) and meta description (171 chars) exceed the CLAUDE.md limits** (<60 / <160) in EN and ES. Google truncates and hides "Real data again."

### Healthy
- Sitemap valid, 151 URLs, 100% of spot-checked URLs return 200, zero redirect chains.
- Hreflang reciprocity verified across en/es/x-default.
- Canonicals correct everywhere sampled.
- Static HTML contains all rendered content (output: "export" working as intended).
- Mobile viewport meta set on every page.
- `robots.txt` permits the modern AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.).
- `llms.txt` and `llms-full.txt` present and well-structured.

---

## 2. Content Quality

Full report: [`content.md`](./content.md) — 218 lines. Score: **86/100**.

### Banned-claim compliance — clean ✓
- **No** "multi-touch attribution" except in negation context (`/open/what-we-wont-do`, `/glossary/multi-touch-attribution` — both explicitly disclaim it).
- **No** "session reconstruction" / "customer journeys" / "individual tracking" / "per-user identifier".
- **No** ISO 27001 or SOC 2 certification claims.
- **No** Frankfurt / Germany data centre references (correct: Dublin, Ireland).
- **No** `rafa@sealmetrics.com` (only role-based `open@`, `privacy@`, `legal@`, `dpo@`).
- **No** emojis anywhere on the marketing surface.

### High
- **Unsourced "2,000+ active accounts" claim** appears 4× on `/about/` without a source link or methodology note. Either add a citation or soften to "hundreds of brands".
- **`/case-studies/` third card (DTC coffee brand) links nowhere.** Two named clients carry the page; the unnamed third weakens trust.
- **`/security/` should add an honest "not certified yet" block** clearly framing the ISO/SOC roadmap. CISOs will look for it; absence reads as evasion.
- **`/about/` author block needs portrait + external authority links** beyond LinkedIn (talks, publications, podcast appearances) to strengthen E-E-A-T.

### Medium
- **"Most" appears 30+ times** as a vague qualifier in marketing copy. Per CLAUDE.md, replace with specific numbers or remove.
- **"The best" appears twice** as ungrounded superlative.
- **`/vs/piwik-pro/`, `/vs/adobe-analytics/`, `/vs/matomo/` are thin scaffolds** vs. the gold-standard `/vs-ga4/`. Bring them up to the same comparison depth.
- **Four short glossary terms** (CMP, FPD collection, ITP, server-side tracking) lack the QuickAnswer block needed for ChatGPT/Perplexity citation.

### Strengths
- Editorial tone consistent and authoritative across all sampled pages.
- `/open/` transparency hub is exceptionally citation-ready (passage-level chunks, named claims, dated commitments).
- Pillar→cluster→glossary linking is in place on educational pages.

---

## 3. On-Page SEO

### High
- **Homepage title 67 chars / description 171 chars** — over limits (see Technical §High).
- **CTA copy inconsistent** ("Start FREE Trial" in header vs "Start free trial" in heroes) — pick one casing.

### Medium
- **Mobile fold pressure on `/pricing/`**: pill + eyebrow + 4-line H1 pushes the CTA below the fold on a 390-wide viewport.
- **No price anchor above the fold on `/pricing/`.** A 10M€+ buyer comparing to GA360 (€150K) needs a number to start mental math.
- **No product visual above the fold on home/product/pricing/blog.** Adobe and GA360 lead with dashboards; absence of any product imagery reads as under-built for the enterprise buyer.

### Healthy
- Heading hierarchy clean (exactly 1× H1, ordered H2→H3) on every page sampled.
- Internal linking is contextual (in-prose), not "Related: X, Y, Z" lists.
- Breadcrumbs present on every non-home page.

---

## 4. Schema / Structured Data

Full report: [`schema.md`](./schema.md) — comprehensive.

### Critical
- **Homepage FAQPage violates Google's Aug-2023 policy** (rich results restricted to gov/health). Replace with `WebPage.mainEntity` containing `Question[]`.
- **`/vs/ga4/` returns 404** while every other competitor lives at `/vs/<slug>/`. The GA4 comparison is at `/vs-ga4/`. Schema is moot if the URL is wrong.
- **Pricing-page contradiction**: SoftwareApplication €599/€1079 vs Product/AggregateOffer €499/€899, no `priceSpecification.unitText`.

### High
- **`/security/` and `/how-it-works/` ship only WebPage + BreadcrumbList.** Add SoftwareApplication (via shared `@id`) plus `Question[]` blocks.
- **Author entity drift**: no stable `@id` linking the standalone `/authors/rafa-jimenez/` Person to authors nested inside Article blocks. Google may treat them as separate entities.
- **`/vs/*` declares an empty `Table` `mainEntity`.** Replace with a populated `ItemList` of comparison criteria.

### Inventory of types currently deployed
Organization, WebSite, SoftwareApplication, Product + AggregateOffer + Offer, WebPage with SpeakableSpecification, BreadcrumbList (every non-home page — full coverage), Article + Person, DefinedTerm, CollectionPage + ItemList, Quotation, Review, CreativeWork, FAQPage (to be removed from homepage).

---

## 5. Sitemap

Full report: [`sitemap.md`](./sitemap.md) — 9.5KB.

### Healthy
- 151 URLs (100 EN + 50 ES + homepage).
- Valid XML, correct `xmlns:xhtml` namespace for alternates.
- Trailing-slash consistency 100%.
- Hreflang reciprocity verified.
- Excluded routes (`/demo/thank-you/`, `/diagnostic-result/`, `/demo-access/`) correctly absent and confirmed noindex on the live site.
- Dynamic-route expansion works: `/open/[slug]` correctly expands 8 published chapters from `publishedChapters`, drafts excluded. Blog (27), glossary (15), case-studies (3), `/for/*` (9) are not dynamic — each has its own `page.tsx` and is picked up by the filesystem walker.

### Medium
- **All non-blog routes use build-time `today` as `lastmod`.** Extend the `blog-modified.json` git-based pattern to glossary, /open/, and pillar pages.

### Low
- **Registry-vs-filesystem drift**: `blog.ts` has 25 publishable posts but 27 `page.tsx` folders exist (2 leaked drafts). `glossary.ts` has 16 entries but only 15 pages on disk (1 orphan term).

---

## 6. Performance (Core Web Vitals)

Full report: [`performance.md`](./performance.md) — 125 lines.

### Per-page Lighthouse (simulated mobile 4G)

| Page | Perf | LCP (sim) | LCP (obs) | CLS | TBT |
|---|---:|---:|---:|---:|---:|
| `/` | ~80 | 7.2s | 2.3s | 0.024 | 10ms |
| `/product/` | ~80 | 7.4s | 2.3s | 0.000 | 20ms |
| `/pricing/` | **74** | **7.9s** | 2.3s | 0.000 | 30ms |
| `/open/` | ~80 | 7.5s | 2.3s | 0.000 | 15ms |

Desktop: 100/100 across the board, LCP 0.4–1.2s. CLS and INP/TBT already cleared.

### High
- **Delete the 325KB `/favicon.png`.** It's requested twice per page (HTML + manifest). 6.8KB AVIF and 12KB WebP variants already exist. Single biggest mobile win.
- **Cache TTL fix (see Technical).** Lighthouse projects a 1350ms LCP saving on repeat visits with proper immutable caching.
- **Inline critical CSS + defer the 15KB stylesheet.** It's the only render-blocking resource and gates Onest font discovery; Onest gates hero text LCP.

### Note
Performance agent flagged `/blog/` as 301→404. **Verified live: false alarm.** `/blog/` returns 200; only `/blog` (no slash) 301s to `/blog/` which is correct behaviour.

---

## 7. Images

### High
- **325KB `/favicon.png` is the single biggest image asset on every page** (see Performance §High). AVIF/WebP siblings exist in `/public/`; just wire them up in `layout.tsx` and `manifest.webmanifest`.

### Medium
- **No product screenshots above the fold** on home, product, pricing, blog (see On-Page §Medium).

### Healthy
- Pages use `next/image` with `unoptimized: true` (required for static export).
- No image >100KB found above the favicon.
- CLS scores near zero indicate aspect-ratio is preserved.

---

## 8. AI Search Readiness

Score: **90/100**. The strongest category.

### Strengths
- `llms.txt` and `llms-full.txt` present, well-structured, comprehensive.
- `robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, OAI-SearchBot, Bytespider, Amazonbot, etc.
- `/open/` chapters are exceptionally citation-friendly: numbered structure, named commitments, dated decisions, passage-level chunks.
- Glossary terms use `DefinedTerm` schema with stable definitions.
- Editorial voice = "specialist authority" not "marketing copy" — high signal-to-noise for LLM training and retrieval.

### Medium
- **Four shortest glossary terms** (CMP, FPD collection, ITP, server-side tracking) lack QuickAnswer blocks; add a 40–60 word definition at the top to maximise AI citation odds.
- **Author entity `@id` drift** (see Schema §High) weakens the E-E-A-T signal LLMs use to weight a citation.

---

## Linked Reports

- [`technical.md`](./technical.md) — full technical SEO findings
- [`content.md`](./content.md) — content quality + E-E-A-T + banned-claim sweep
- [`schema.md`](./schema.md) — JSON-LD inventory + validation defects + ready-to-paste replacements
- [`sitemap.md`](./sitemap.md) — XML validity, hreflang, coverage
- [`performance.md`](./performance.md) — per-page CWV + bottlenecks
- [`visual.md`](./visual.md) — above-fold + mobile + screenshot analysis
- [`screenshots/`](./screenshots/) — desktop + mobile captures of home, product, pricing, vs-ga4, blog, open
