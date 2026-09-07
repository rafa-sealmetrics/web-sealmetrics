# Schema.org Structured Data Audit — sealmetrics.com

Date: 2026-06-09 · Method: live fetch of 11 pages + full source grep (`src/app/**/page.tsx`, `src/lib/schema.ts`)

## Score: 88/100

Excellent coverage and architecture; points lost on type misuse in Review/Quotation blocks, a self-serving review risk, URL trailing-slash mismatch with canonicals, and a wrong author type on the case study.

---

## 1. Detection Results

| Page | Blocks | Types |
|---|---|---|
| `/` | 8 | Organization + WebSite (@graph), SoftwareApplication, WebPage (speakable), 3× CreativeWork (stats), 2× Quotation |
| `/es/` | 8 | Mirror of homepage, stat/quote text localized |
| `/pricing/` | 3 | Product (AggregateOffer, 2 Offers, UnitPriceSpecification), SoftwareApplication, BreadcrumbList |
| `/blog/why-ga4-shows-13pct-eu-traffic/` | 2 | Article, BreadcrumbList |
| `/glossary/cookieless-analytics/` | 2 | DefinedTerm (+DefinedTermSet), BreadcrumbList |
| `/vs/ga360/` | 3 | WebPage (about, mainEntity ItemList, author, reviewedBy), BreadcrumbList, Quotation |
| `/case-studies/palladium-hotel-group/` | 9 | Article, Person (Toni Andújar), Review, BreadcrumbList, 3× CreativeWork, 2× Quotation |
| `/for/ecommerce/` | 2 | SoftwareApplication (with audience), BreadcrumbList |
| `/how-it-works/` | 2 | WebPage (speakable), BreadcrumbList |
| `/demo/` | 1 | BreadcrumbList |
| `/authors/rafa-jimenez/` | 2 | Person (knowsAbout, sameAs, worksFor), BreadcrumbList |

**Source coverage:** 161 of 171 `page.tsx` files render JSON-LD via `src/components/ui/JsonLd.tsx` / `src/lib/schema.ts`. The 10 without schema are all noindex `RedirectStub` pages (`/contact`, `/customers`, `/features`, `/partners`, `/pricing-plans`, `/vs/ga4`, `/case-studies/european-hotel-group` EN+ES, `/es/diagnostic-result`) — correct as-is. Effective coverage of indexable pages: **100%**.

## 2. Validation Results

### Pass
- All blocks parse as valid JSON-LD; `@context` is `https://schema.org` everywhere
- No deprecated types (no HowTo, SpecialAnnouncement). `faqPageSchema()` helper exists in `src/lib/schema.ts:96` but is **unused** — compliant with the Aug-2023 FAQ restriction. Keep it unused.
- **No fake AggregateRating anywhere** (verified by grep — only one Review with a real attributed quote)
- Organization consistent on EN and ES: same `@id` (`/#organization`), name, logo (`/logos/logo-sealmetrics-negro.png`), 9-item sameAs, founders, contactPoint
- BreadcrumbList on every non-home page, absolute URLs, correct positions, ES variant uses "Inicio"
- Article (blog): all required + recommended props (headline, image, dates ISO 8601, author Person with url/sameAs/worksFor, publisher with logo) — eligible for Article rich results
- Product (pricing): real prices (€499/€899), priceValidUntil, availability, eligibleRegion, seller — eligible
- DefinedTerm with inDefinedTermSet — correct pattern for glossary
- No placeholder text; dates ISO 8601 throughout

### Fail / Warning

1. **Review author typed as Organization** (case study): `"author": {"@type": "Organization", "name": "Toni Andújar"}` — Toni Andújar is a Person. Wrong type; validators will flag.
2. **Self-serving review risk** (case study): a 5-star Review of SealMetrics (`itemReviewed: SoftwareApplication SealMetrics`) published on sealmetrics.com violates Google's self-serving review policy — review snippets are not shown when the reviewed entity hosts the review. Won't penalize, but is ineligible; consider removing `reviewRating` and keeping it as a Quotation/testimonial.
3. **Case study Article author** is `{"@type": "Person", "name": "SealMetrics"}` — should be `Organization` (or Rafa Jiménez as Person, matching blog).
4. **URL trailing-slash mismatch sitewide**: canonicals use trailing slash (`/pricing/`), all schema `url`/`item`/`mainEntityOfPage @id` values omit it (`/pricing`). Not an error, but entity URLs should match canonicals exactly for clean graph consolidation.
5. **`Quotation.spokenByCharacter` used for real people** (home, ES home, case study, /vs/ga360): that property is for fictional characters. No rich result exists for Quotation; semantically wrong but harmless.
6. **CreativeWork "stat" blocks** (3× on home/ES/case study): no rich-result value; `mainEntity: QuantitativeValue` is a nonstandard pattern. Informational — fine for LLM consumption, invisible to Google.
7. **Case study Article image** is generic `/og-image.png` while blog posts use per-page images. Google recommends 1:1, 4:3, 16:9 image array.
8. **Organization logo 160×32** — below Google's recommended ≥112×112; supply a square mark variant.
9. **SoftwareApplication blocks (home, /for/ecommerce) lack `offers`** — Google requires offers or aggregateRating for SoftwareApplication rich results, so these are ineligible (the pricing Product covers the rich result; these still feed the knowledge graph).

## 3. Missing Opportunities (by priority)

### P1
- **Fix Review author type + self-serving rating** on `/case-studies/palladium-hotel-group/` (src: case study page.tsx / schema.ts)
- **Align schema URLs with trailing-slash canonicals** — one change in `SITE_URL` URL-building in `src/lib/schema.ts` fixes it sitewide
- **Fix case study Article author** → Organization SealMetrics with `@id` reference

### P2
- **VideoObject**: no video schema anywhere; if /demo, /how-it-works, or case studies embed product video, add VideoObject (name, description, thumbnailUrl, uploadDate, contentUrl)
- **Link Organization via `@id` references** from publisher/provider/seller objects on subpages (currently inline duplicates) — e.g. `"publisher": {"@id": "https://sealmetrics.com/#organization"}`
- **Add `offers` to SoftwareApplication** on home and /for/* pages (reuse pricing AggregateOffer) to unlock SoftwareApplication eligibility
- **Per-page OG/schema image** for case studies; image array with 3 aspect ratios on Articles

### P3
- Replace `spokenByCharacter` with non-typed attribution or drop Quotation blocks in favor of plain text
- Square ≥112px logo for Organization
- `/es/` Organization `description` still in English — localize
- `hreflang`-aware WebPage `inLanguage` per page (currently only on WebSite)

## 4. Organization Consistency Check — PASS

Identical across `/` and `/es/` (single source: `src/lib/schema.ts`): name "SealMetrics", logo path, foundingDate 2020, 9 sameAs profiles (LinkedIn, X, YouTube, Reddit, G2, Capterra, Crunchbase, Product Hunt, GitHub), addressCountry ES, contactPoint without personal emails (uses /demo, /security URLs — compliant with content rules).
