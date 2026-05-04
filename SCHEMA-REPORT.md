# Schema Markup Audit · SealMetrics

Date: 2026-05-04
Built artifact: `/out/` (140 routes, post-Sprint 4)
Helper module: `src/lib/schema.ts`
Format: JSON-LD (Google's stated preference) — 100% coverage; no Microdata or RDFa

---

## Inventory of `@type` values across the build (top 30 by count)

| @type | Count | Notes |
|---|---|---|
| ListItem | 611 | inside BreadcrumbList + ItemList — fine |
| Organization | 254 | every page emits via header `organizationSchema()` — fine |
| BreadcrumbList | 128 | every non-homepage — fine |
| Place | 104 | inside Organization.areaServed — fine |
| DefinedTerm | 101 | glossary cluster (14 EN + 5 ES) — strong AI signal |
| Person | 90 | mostly Article.author — fine |
| WebPage | 85 | speakableWebPageSchema + comparisonPageSchema — fine |
| ImageObject | 76 | Organization logo + Article publisher — fine |
| SoftwareApplication | 71 | homepage + verticalSoftwareApplicationSchema (22 /for/* pages) + comparison about[] — fine |
| Article | 62 | 26 blog (auto-OG via Sprint 4) + 4 case studies (added in Sprint 4) — strong |
| Offer | 52 | pricing + softwareApplicationSchema offers — fine |
| Rating | 26 | inside Review + ClaimReview — see ⚠️ ClaimReview below |
| ItemList | 26 | blog + glossary index pages — fine |
| BusinessAudience | 25 | inside verticalSoftwareApplicationSchema — fine |
| ContactPoint | 24 | inside Organization — fine |
| WebSite | 20 | inside organizationSchema graph — fine but missing potentialAction (see W2) |
| DefinedTermSet | 20 | inside DefinedTerm.inDefinedTermSet — fine |
| UnitPriceSpecification | 16 | inside pricing offers — fine |
| **ClaimReview** | **16** | ❌ **DEPRECATED June 2025** — see C1 below |
| Claim | 16 | nested inside ClaimReview — same problem |
| Quotation | 14 | testimonial blocks — see W1 (data-quality bug, partially fixed) |
| CreativeWork | 14 | inside Quotation.citation — fine |
| Review | 10 | case study testimonials + 1 stale call site — fine |
| Product | 8 | pricing pages — fine |
| AggregateOffer | 8 | inside pricingSchema — see M1 (range understated) |
| WebApplication | 4 | calculator pages — fine |
| **CollectionPage** | 6 | blog + glossary indexes — fine |
| **SpeakableSpecification** | 3 | /product, /how-it-works, /security — should also be on `/` (M2) |

---

## Validation results

### ❌ Critical

**C1 — ClaimReview is DEPRECATED (Google retired rich results June 2025).** Used 16 times across the site (8 EN + 8 ES — homepage 3×, palladium 3×, dreamplace 2× per locale). The schema is still legal but produces no rich result and may signal stale SEO practice to crawlers. Replace with `Article` containing inline `Claim` entities, or with `Statistic` / `QuantitativeValue` markup pointing at the source via `subjectOf`. Recommended replacement is documented in `generated-schema.json` as `claimAsCreativeWork()`.

Files to update (or have the helper return a no-op + remove call sites):
- `src/lib/schema.ts:485` (helper definition — mark deprecated or delete)
- `src/app/(en)/page.tsx` (3 calls)
- `src/app/(en)/case-studies/palladium-hotel-group/page.tsx` (3 calls)
- `src/app/(en)/case-studies/dreamplace-hotels/page.tsx` (2 calls)
- ES mirrors of all three

### ⚠️ Warnings

**W1 — Quotation.spokenByCharacter has wrong field assignment** (data-quality bug introduced by Sprint 2 sed pass).

Found in production-bound HTML on the homepage: `Person.name = "Digital & Direct Sales Director"` (the role) and `Person.jobTitle = "Toni Andújar · Digital & Direct Sales Director · Palladium Hotel Group"` (name + role + org concatenated). Should be `name = "Toni Andújar"`, `jobTitle = "Digital & Direct Sales Director, Palladium Hotel Group"`.

**Status:** fixed in source (this audit) at `src/app/(en)/page.tsx:73-74` and `src/app/(es)/es/page.tsx:74-75` plus the Palladium case studies (EN+ES) where the duplicated name was stripped from `spokenByRole`. Will ship on next deploy.

**W2 — WebSite missing `potentialAction` (no sitelinks search box).** `organizationSchema()` emits `{ "@type": "WebSite", name, url }` without a `SearchAction`. Adding a SearchAction enables Google to render a sitelinks search box on the brand SERP. Patch in `generated-schema.json` as `webSiteSchemaWithSearch()`.

**W3 — Helper bloat in `src/lib/schema.ts`:** 3 helpers exported with zero callers but still tempting future re-use:
- `howToSchema()` — Google deprecated September 2023. Delete.
- `faqSchema()` — Google restricted to government/healthcare August 2023. Delete.
- `claimReviewSchema()` — Google retired June 2025 (see C1). Delete after fixing call sites.

### ℹ️ Medium

**M1 — Pricing AggregateOffer range is understated.** `lowPrice: "499"` and `highPrice: "899"` reflect annual prices only. Real range is €499 (Growth annual) → €1079 (Scale monthly). If both billing modes are visible to users, both should appear in the AggregateOffer's `offers` array — currently only annual is listed. Decision: either bump `highPrice` to 1079 to span the full visible range, or split into two SoftwareApplication products (one billed annually, one monthly).

**M2 — `speakableWebPageSchema` missing on homepage.** /product, /how-it-works, /security have it from Sprint 4. Homepage doesn't, despite the TldrBlock having `data-speakable` markup. One JsonLd line addition.

**M3 — Toni Andújar and Eduardo Martin are not Person entities.** They're cited as quote authors with name + jobTitle but never elevated to standalone `Person` schema. Adding two Person blocks (one per case study) gives AI engines a citable Person URI for the named source — improves AI citation likelihood.

**M4 — No AggregateRating anywhere.** With 2 named case studies + 8 ClaimReview blocks, the site has the underlying data to publish an AggregateRating on the Organization (e.g., `ratingValue: 4.9, reviewCount: 12, bestRating: 5`). Caveat: only with verifiable customer reviews, no fabrication. If real review data isn't available, skip — don't fake it.

**M5 — `breadcrumbSchema()` validation tightened in Sprint 2** — every `ListItem.item` is now required; type signature enforces it. ✓

**M6 — Article.image now auto-points to per-post OG (S4)** — verified on `/blog/cookieless-analytics-explained/` with `image: "https://sealmetrics.com/og/blog/cookieless-analytics-explained.png"`. ✓

### ✅ Strengths (do not change)

- 100% JSON-LD; no Microdata, no RDFa.
- Self-referential Organization graph on every page.
- Article on every blog + every case study; with auto-derived `dateModified` from git mtime + per-post OG image (Sprint 2 + 4).
- DefinedTerm + DefinedTermSet on glossary cluster (14 EN + 5 ES).
- BreadcrumbList with locale-aware root (ES → "Inicio → /es") via Sprint 1 fix.
- comparisonPageSchema on all 5 EN + 5 ES `/vs/*` and `/alternatives/*` pages (Sprint 3).
- verticalSoftwareApplicationSchema on all 11 EN + 11 ES `/for/*` pages (Sprint 4).
- speakableWebPageSchema on /product, /how-it-works, /security (Sprint 4).
- `data-speakable` markers in TldrBlock + FaqAccordionV3 (Sprint 4).
- Pricing data flows from a single source (`src/lib/content/pricing.ts`) — no schema/page divergence.
- Pixel default flipped to production; build emits `https://pixel.sealmetrics.com` (Sprint 1).

---

## Page-by-page schema block count

| Page | Blocks | Composition |
|---|---|---|
| `/` (homepage) | 8 | Organization+WebSite (graph), SoftwareApplication, 3× ClaimReview ❌, 3× Quotation |
| `/pricing/` | 1 | Product (AggregateOffer with 2 plans) |
| `/product/` | 2 | BreadcrumbList, SoftwareApplication, speakableWebPageSchema |
| `/how-it-works/` | 1 | BreadcrumbList, speakableWebPageSchema |
| `/security/` | 1 | BreadcrumbList, speakableWebPageSchema |
| `/case-studies/palladium-hotel-group/` | 8 | BreadcrumbList, Article, 3× ClaimReview ❌, 2× Quotation, Review |
| `/case-studies/dreamplace-hotels/` | 8 | similar — same ClaimReview issue |
| `/vs/{ga360,adobe-analytics,piwik-pro}/` | 1 (each) | BreadcrumbList + comparisonPageSchema |
| `/vs-ga4/` | 1 | BreadcrumbList + comparisonPageSchema |
| `/alternatives/google-analytics/` | 1 | BreadcrumbList + comparisonPageSchema |
| `/for/{cmo,cto,dpo,...}/` (11 pages × 2 locales) | 1 (each) | BreadcrumbList + verticalSoftwareApplicationSchema |
| `/blog/` | 1 | CollectionPage + ItemList + BreadcrumbList |
| `/blog/<slug>/` (26 posts) | 2 | Article + BreadcrumbList |
| `/glossary/` | 1 | CollectionPage + ItemList + BreadcrumbList |
| `/glossary/<slug>/` (14 EN + 5 ES) | 2 | DefinedTerm + BreadcrumbList |
| `/authors/rafa-jimenez/` | 1 | Person + BreadcrumbList |

(Block counts above are HTML `<script>` tags; one block can contain multiple typed entities, e.g. the homepage Organization+WebSite are in one `@graph`.)

---

## Recommendations (priority order)

| # | Action | Files | Effort |
|---|---|---|---|
| 1 | **Remove ClaimReview** (C1). Replace with inline `Statistic` claims inside the Article schema, or as `CreativeWork` cited via `subjectOf`. See `generated-schema.json` `claimAsCreativeWork()`. | 6 files (3 EN + 3 ES) | 1h |
| 2 | **Add SearchAction to WebSite** (W2). One edit to `organizationSchema()`. | `src/lib/schema.ts:75-79` | 5 min |
| 3 | **Delete dead helpers** (W3): `howToSchema`, `faqSchema`, `claimReviewSchema`. | `src/lib/schema.ts` | 5 min after C1 done |
| 4 | **Add speakable to homepage** (M2). One JsonLd line. | `src/app/(en)/page.tsx`, `src/app/(es)/es/page.tsx` | 5 min |
| 5 | **Reconcile pricing AggregateOffer range** (M1). Either bump `highPrice` to 1079 or split monthly/annual. | `src/lib/schema.ts pricingSchema` | 15 min |
| 6 | **Person schema for Toni Andújar + Eduardo Martin** (M3). Two new helper calls. | `src/lib/schema.ts` (extend), 4 case study pages | 30 min |
| 7 | **Optional: AggregateRating on Organization** (M4) — only if you have ≥10 real customer reviews to back it up. Skip otherwise. | `src/lib/schema.ts organizationSchema` | depends |

---

Generated code for items 1, 2, 3, 4, 5 is in `generated-schema.json`.
