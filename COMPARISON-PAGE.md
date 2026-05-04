# Comparison Page Audit & Strategy · SealMetrics

Date: 2026-05-04
Existing /vs/* + /alternatives/* pages: 5 EN + 5 ES = 10 total
Schema: comparisonPageSchema wired (Sprint 3) + semantic `<table>` markup (GEO push)

---

## Existing comparison surface (audit)

| Page | Words | Table rows | Schema | Date | Author | Methodology | G2/Capterra |
|---|---|---|---|---|---|---|---|
| `/vs/ga360/` | 729 | 16 | ✅ ComparisonPage | ❌ | ❌ | ❌ | ❌ |
| `/vs/adobe-analytics/` | 615 | 15 | ✅ | ❌ | ❌ | ❌ | ❌ |
| `/vs/piwik-pro/` | 587 | 14 | ✅ | ❌ | ❌ | ❌ | ❌ |
| `/vs-ga4/` | 1284 | n/a (custom layout) | ✅ | ❌ | ❌ | ✅ (1 mention) | ❌ |
| `/alternatives/google-analytics/` | 573 | 16 | ✅ | ❌ | ❌ | ❌ | ❌ |

**All 5 EN pages mirror in ES.** All have `comparisonPageSchema` with `about[]` listing both SoftwareApplication entities, all have semantic `<table>` markup with `<caption>`/`<thead>`/`<tbody>`/`<th scope>`, all cross-link to the other 3 vs pages via `RelatedPagesV3`.

---

## Coverage assessment

**Verdict: coverage is correct, depth is shallow.**

The competitive set matches CLAUDE.md positioning rules:
- ✅ GA360, Adobe Analytics, Piwik PRO, GA4 — the right enterprise tier
- ✅ 0 pages comparing against Plausible/Fathom/Simple Analytics/Umami/Cabin (lightweight tools, different category)
- ✅ /alternatives/google-analytics covers the "Google Analytics alternatives" intent without committing to a specific GA tier

**No new comparison pages recommended right now.** Adding /vs/matomo, /vs/snowplow, /vs/heap would either:
- Pull SealMetrics into the lightweight tier framing (Matomo self-hosted is in that bucket) — violates positioning rule
- Compare against product analytics tools (Heap, Mixpanel, Amplitude) — different category, weakens enterprise comparison cluster

---

## Critical gaps (fix existing pages, don't create new ones)

### G1 — All /vs/* pages under the 1500w skill threshold

The 4 component-driven /vs pages (ga360, adobe-analytics, piwik-pro, alternatives/google-analytics) are 573-729w because they share `VsComparisonV3` which has limited prose surface. The /vs-ga4 page (1284w) has a custom layout (VsGA4V3Sections) with more sections.

**Action:** extend `VsComparisonV3` — or render per-vendor prose blocks before/after the comparison table — to add 4 sections per page (~200w each):
1. **"What [Competitor] is built for"** — fair acknowledgement of competitor strengths (250w)
2. **"Where SealMetrics differs"** — 4-5 differentiation points with evidence (300w)
3. **"Migration playbook"** — what a "Switched from [Competitor]" 30-day flow looks like (250w)
4. **"Pricing reality"** — actual quoted pricing per tier with "as of [date]" disclaimer (200w)

Target: 1600-1800w per page.

### G2 — No "Last updated" timestamp + no visible author

The skill flags both as critical trust signals. SealMetrics already has `articleSchema` for case studies and blog posts; comparison pages emit `comparisonPageSchema` but no `dateModified`. Visible "Last updated 2026-05-04" + "Reviewed by Rafa Jiménez" gives reader and AI a freshness signal.

**Action:**
1. Add `dateModified: "2026-05-04"` to `comparisonPageSchema()` calls
2. Render a small visible byline below the H1: `Updated 2026-05-04 · By Rafa Jiménez, Founder` linking to `/authors/rafa-jimenez`

### G3 — No methodology disclosure

Per skill: *"Methodology disclosure (how comparisons were conducted)"*. Comparison pages without it are flagged as low-trust by both readers and AI engines (Google's QRG explicitly mentions "how the assessment was made").

**Action:** add a "How we compared" footer block on each `/vs/*` page (150w):
- Sources: vendor public docs, G2/Capterra reviews, anonymized customer testing where applicable
- Pricing date: "as of [date]"
- Conflict-of-interest disclosure: "SealMetrics is our product; we built this comparison to be useful even if you don't choose us"
- Update cadence: "Reviewed quarterly; flagged when the competitor ships a major change"

### G4 — No G2/Capterra badges or ratings

Sprint 4 added Reddit + YouTube to `Organization.sameAs` and the Org schema already lists `g2.com/products/sealmetrics` + `capterra.com/p/sealmetrics`. But neither rating is visible on comparison pages.

**Action:** embed a small badge component on each /vs/* page (3 lines, low visual weight):
- "SealMetrics on G2: 4.X/5 ([N] reviews)"
- "SealMetrics on Capterra: 4.X/5 ([N] reviews)"
- Link to the source profile

Caveat: only ship once you have ≥10 actual reviews on each platform. Don't fake.

### G5 — No customer migration stories

Per skill: *"Switched from [Competitor]" stories*. Comparison pages would benefit from 1 short case-study block per /vs page. Today both Palladium + Dreamplace case studies exist but are not surfaced from the /vs pages.

**Action:** on /vs/ga360 add a 100w "Switched from GA360 / GA4" block with a quote and link to the case study. Same pattern for /vs-ga4. Less applicable to Adobe / Piwik PRO until you have a named migration customer.

---

## Pricing comparison block (recommended new component)

Add a dedicated pricing comparison table per /vs page. Today pricing appears as one row inside the feature matrix; AI engines extract dedicated pricing blocks more reliably.

### Template

```markdown
| Plan | SealMetrics | [Competitor] |
|---|---|---|
| Starting price | €499/mo annual (Growth, 5M events) | $150,000/yr annual contract |
| Mid tier | €899/mo annual (Scale, 15M events) | Custom (typically $200K-400K/yr) |
| Enterprise | Custom | Custom |
| Free tier | 14-day trial | None |
| Setup fee | None | Implementation: $20-80K (avg) |
| Annual commit | Optional | Required |
| Per-user pricing | No (unlimited users) | Yes |

*Pricing data: SealMetrics from /pricing (2026-05-04); GA360 from public reseller quotes + customer reports (2026-Q1).*
```

Each /vs page ships a ~200w pricing block with a "Calculate your data loss" CTA linking to `/data-loss-calculator/`.

---

## Schema improvements

The current `comparisonPageSchema` is good but undersells. Add:

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "SealMetrics vs Google Analytics 360",
  "url": "https://sealmetrics.com/vs/ga360",
  "datePublished": "2026-04-15",
  "dateModified": "2026-05-04",
  "author": {
    "@type": "Person",
    "name": "Rafa Jiménez",
    "url": "https://sealmetrics.com/authors/rafa-jimenez"
  },
  "reviewedBy": {
    "@type": "Person",
    "name": "Rafa Jiménez",
    "url": "https://sealmetrics.com/authors/rafa-jimenez"
  },
  "about": [
    { "@type": "SoftwareApplication", "name": "SealMetrics", ... },
    { "@type": "SoftwareApplication", "name": "Google Analytics 360", ... }
  ],
  "mainEntity": {
    "@type": "Table",
    "about": "Feature-by-feature comparison of SealMetrics vs Google Analytics 360"
  }
}
```

Schema patch lives in `comparison-schema.json` next to this file.

---

## Keyword strategy (per page)

| Page | Primary | Secondary | Long-tail |
|---|---|---|---|
| `/vs/ga360/` | "SealMetrics vs GA360" | "GA360 alternative", "GA360 cost" | "GA360 alternative for European companies", "is GA360 worth $150,000" |
| `/vs/adobe-analytics/` | "SealMetrics vs Adobe Analytics" | "Adobe Analytics alternative", "Adobe Analytics cost" | "Adobe Analytics alternative for ecommerce", "Adobe Analytics implementation time" |
| `/vs/piwik-pro/` | "SealMetrics vs Piwik PRO" | "Piwik PRO alternative" | "Piwik PRO vs cookieless analytics", "EU-hosted Piwik PRO alternative" |
| `/vs-ga4/` | "SealMetrics vs Google Analytics 4" | "GA4 alternative", "best GA4 alternative" | "GA4 alternative for EU eCommerce", "GA4 EU data loss" |
| `/alternatives/google-analytics/` | "Google Analytics alternatives" | "best Google Analytics alternative", "GA alternatives 2026" | "Google Analytics alternatives for European companies", "GDPR-compliant Google Analytics alternative" |

**Title tag formula already in use** (e.g., "SealMetrics vs GA360 — Enterprise data for less"). Keep.

**Untapped long-tail to consider:**
- "[Competitor] vs SealMetrics for hotels" — vertical pivots
- "[Competitor] migration cost" — calculator-style intent
- "is [Competitor] worth it" — question intent that maps well to FAQ schema (but FAQPage is restricted; use Article + question H2/H3)

---

## Recommended implementation priority

| # | Action | Effort | Files |
|---|---|---|---|
| 1 | Add visible "Updated [date] · By Rafa Jiménez" byline + extend comparisonPageSchema with author/dateModified/reviewedBy | 1h | `src/lib/schema.ts`, 5 EN + 5 ES /vs page files |
| 2 | Add "How we compared" methodology footer (shared component) on all /vs/* pages | 1h | new `src/components/sections/v3/ComparisonMethodology.tsx` |
| 3 | Expand VsData per-vendor with 4 prose sections (1500-1800w target) | 4-6h per vendor × 4 vendors | `src/components/sections/v3/VsData.tsx` + small layout component |
| 4 | Pricing comparison block per /vs page (with "as of [date]" footnote) | 2h | new component + pricing data per vendor |
| 5 | "Switched from GA360/GA4" case-study callout on /vs/ga360 + /vs-ga4 | 1h | inline in vs page templates |
| 6 | G2/Capterra rating badge (only when ≥10 reviews exist) | 30 min once ratings exist | new badge component |

**Sequence:** start with 1+2 (low risk, immediate trust lift). Tackle 3 incrementally — one vendor per content sprint.

---

## Out of scope (do not create)

- ❌ `/vs/plausible`, `/vs/fathom`, `/vs/simple-analytics`, `/vs/umami` — wrong tier per CLAUDE.md positioning rule
- ❌ `/vs/matomo` self-hosted comparison — same wrong-tier risk; if added, scope to "Matomo Cloud enterprise" specifically
- ❌ `/vs/heap`, `/vs/mixpanel`, `/vs/amplitude` — product analytics, different category
- ❌ "Best web analytics tools 2026" roundup — would force inclusion of competitors at random tiers; better to keep `/alternatives/google-analytics` as the single editorial roundup

---

## Source-of-truth files

- Existing competitor data: `src/components/sections/v3/VsData.tsx`
- Existing layout: `src/components/sections/v3/VsComparisonV3.tsx` (now `<table>` semantic)
- Custom layout for vs-ga4: `src/components/sections/v3/VsGA4V3Sections.tsx`
- Schema helper: `src/lib/schema.ts` (`comparisonPageSchema()`)
- Schema patch: `comparison-schema.json` (this directory)
- Cross-linking: `src/components/sections/v3/RelatedPagesV3.tsx` (already wired to all sibling vs pages)
