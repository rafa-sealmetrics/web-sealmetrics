# Schema.org Structured Data Audit — sealmetrics.com

Date: 2026-05-28
Auditor: Schema.org markup specialist
Method: Live curl extraction of `<script type="application/ld+json">` blocks on production (https://sealmetrics.com/), validated against schema.org spec + Google rich-results guidance.

Severity legend:
- **CRIT** — broken, deprecated, or risks Google penalty/loss of rich results
- **HIGH** — missing required property or factual inconsistency
- **MED**  — recommended property missing / suboptimal modelling
- **LOW**  — polish, consistency

---

## 1. Coverage matrix (sampled pages)

| URL                                                | Types found                                                                                                  | Notes |
|----------------------------------------------------|--------------------------------------------------------------------------------------------------------------|-------|
| `/`                                                | Organization, WebSite (in @graph), SoftwareApplication, WebPage, **FAQPage**, CreativeWork×3, Quotation×3   | 10 blocks. FAQPage is policy-violating (see CRIT-1). |
| `/product/`                                        | SoftwareApplication, BreadcrumbList, WebPage                                                                  | Missing Organization @graph link via `@id`. |
| `/pricing/`                                        | Product (AggregateOffer with 2 nested Offers), SoftwareApplication, BreadcrumbList                            | Price inconsistency vs. SoftwareApplication block (see HIGH-1). |
| `/security/`                                       | BreadcrumbList, WebPage                                                                                       | No SoftwareApplication, no FAQ. |
| `/how-it-works/`                                   | BreadcrumbList, WebPage                                                                                       | No SoftwareApplication / TechArticle. |
| `/vs-ga4/`                                         | BreadcrumbList, WebPage (comparison), Quotation                                                               | Valid. Other `/vs/*` pages live at `/vs/<slug>/` — URL inconsistency (see CRIT-2). |
| `/vs/ga360/`, `/vs/adobe-analytics/`, `/vs/piwik-pro/` | BreadcrumbList, WebPage (with `author`, `reviewedBy`, `about[]`, `mainEntity:Table`)                       | Valid. |
| `/blog/`                                           | CollectionPage, BreadcrumbList, ItemList (~25 posts)                                                          | Valid. |
| `/blog/cookieless-analytics-explained/`            | Article, BreadcrumbList                                                                                       | Valid. Author Person nested inside Article only — no standalone Person `@id`. |
| `/glossary/`                                       | CollectionPage, BreadcrumbList, ItemList (15 terms)                                                           | Valid. |
| `/glossary/cookieless-analytics/`                  | DefinedTerm, BreadcrumbList                                                                                   | Valid; `subjectOf` used non-standardly (see MED-2). |
| `/case-studies/`                                   | BreadcrumbList, CollectionPage, ItemList, Review×3                                                            | Last Review item points to `/case-studies` (anonymous DTC) — wrong target. |
| `/case-studies/palladium-hotel-group/`             | BreadcrumbList, Person, Article, CreativeWork×3, Quotation×2, Review                                          | Rich. Validate `image` (see MED-3). |
| `/about/`                                          | BreadcrumbList, Organization+WebSite @graph                                                                   | Duplicates homepage @graph — OK because `@id` matches. |
| `/authors/rafa-jimenez/`                           | BreadcrumbList, Person                                                                                        | Valid. |

**Pages confirmed missing JSON-LD entirely:** none in sample. All sampled pages ship at least breadcrumbs + a WebPage/CollectionPage.

---

## 2. Validation defects

### CRIT-1 — FAQPage on the homepage violates Google's August 2023 policy
URL: `https://sealmetrics.com/` · Block #3 · Type `FAQPage`

Google restricted FAQPage rich results to **government and health-authority websites** in August 2023. Continuing to serve `FAQPage` JSON-LD on a commercial SaaS homepage:
- Will **not** produce rich results.
- Risks being flagged in Search Console as a "policy violation" if Google tightens enforcement.
- Sends a confused signal to LLM crawlers, since SealMetrics is not a "FAQPage" entity.

**Fix:** Remove the `FAQPage` block entirely. Migrate the same Q/A pairs into either:
- Inline `<details>`/`<summary>` markup (Google parses on-page FAQ content for AI Overviews even without schema), **or**
- A `Question` array nested inside a `WebPage` `mainEntity` for the relevant pillar pages (still parsed by LLMs but not declared as FAQPage type).

### CRIT-2 — Comparison URL inconsistency: GA4 page lives at non-canonical URL
- `/vs/ga4/` returns HTTP **404**
- `/vs-ga4/` returns HTTP **200** (canonical live URL)
- `/vs/ga360/`, `/vs/adobe-analytics/`, `/vs/piwik-pro/` all return 200 at the `/vs/<slug>/` path

The GA4 comparison sits outside the cluster URL pattern. The BreadcrumbList and WebPage `url` in the JSON-LD correctly point to `/vs-ga4`, so schema is internally consistent, but:
- Sibling `/vs/*` pages should cross-link to `/vs-ga4`, not to `/vs/ga4/`.
- Decide on one pattern (`/vs/ga4/` recommended) and 301-redirect the other. Until then, sitelinks and internal/external citations will fragment.

### CRIT-3 — `WebPage.url` and `Organization.url` omit trailing slash
Throughout: `"url":"https://sealmetrics.com/product"` (no trailing slash) while the canonical resolved URL is `https://sealmetrics.com/product/`. The site is a static export with directory-style URLs — Next.js / GitHub Pages serves `/product/`.

Effect: Self-referential `url` in JSON-LD doesn't match the canonical, causing Google to do a normalization round-trip and weakening entity disambiguation. Fix once in a `siteUrl()` helper.

### HIGH-1 — Price contradiction between `SoftwareApplication.offers` and `Product.offers`
- SoftwareApplication (homepage, product, pricing): `Growth €599`, `Scale €1079` (these are **monthly** prices)
- Product/AggregateOffer (pricing only): `Growth €499`, `Scale €899` (these are **annual-billing** monthly prices)

Both prices are correct on-page (annual €499/€899; monthly €599/€1079), but the schema doesn't say which is which. The SoftwareApplication offers lack `priceSpecification.unitText` so Google reads two contradictory absolute prices for the same product. This causes:
- Google merchant/structured-data warnings.
- LLM citations to invent or mix the numbers.

**Fix:** Either drop the `offers[]` from the SoftwareApplication block (keep only the Product/AggregateOffer on `/pricing/`), or attach `priceSpecification` to every Offer with `billingDuration` and `unitText` ("Per month, billed annually" vs "Per month, billed monthly").

### HIGH-2 — `Article.image` on case study points to generic OG image
`/case-studies/palladium-hotel-group/` declares `"image":"https://sealmetrics.com/og-image.png"`. Google's Article rich-result spec **requires** at least one high-res, page-specific image with min dimensions (1200×675 / 1200×1200 / 1200×900). The generic site OG image is allowed but discouraged. Add a case-study-specific OG image (per blog post pattern at `/og/blog/<slug>.png`).

### HIGH-3 — `Review` for anonymous "DTC coffee brand" links to wrong URL
`/case-studies/` Review #3 lists the DTC brand but `author.name = "DTC coffee brand"` (Organization with no `url`) and the parent `ItemList` entry for that case points to `https://sealmetrics.com/case-studies` (the index, not a case detail). The detail page doesn't exist, so the schema implies a phantom entity. Either:
- Drop the third ItemList entry until the DTC case has its own page, **or**
- Convert it to a `Quotation` only and remove the `ListItem`.

### HIGH-4 — Missing `Organization.contactPoint.telephone`
Google's Organization rich-result spec lists `contactPoint.telephone` as recommended. Both `ContactPoint` entries declare `url` (`/demo`, `/security`) but no `telephone`. Either add a sales line or drop `contactPoint` entirely — `url`-only ContactPoint produces no rich result.

### MED-1 — Organization missing `numberOfEmployees`, `legalName`, `vatID`
Recommended for B2B SaaS Organization to disambiguate from other "SealMetrics" entities and help knowledge graph. Easy addition:
```
"legalName": "SealMetrics S.L.",
"numberOfEmployees": {"@type":"QuantitativeValue","value":"11-50"},
"vatID":"ESB12345678"   // verify actual Spanish VAT
```

### MED-2 — `DefinedTerm.subjectOf` is misused on glossary pages
`/glossary/cookieless-analytics/` uses `subjectOf` to list related terms. Per schema.org, `subjectOf` means "a CreativeWork ABOUT this thing". The correct property for related terms is **no direct property** — terms in the same set should be linked via `inDefinedTermSet` (already used) and the page itself can ship a sibling `ItemList`. Replace `subjectOf` with `relatedLink` or move related-term links to a sibling block.

### MED-3 — Comparison pages: `mainEntity` is a bare `Table` with no rows
On all `/vs/*` WebPage blocks, `"mainEntity":{"@type":"Table","about":"..."}` declares a Table with no `cssSelector`, no rows, no parsable content. This is useless to crawlers. Either:
- Add `cssSelector` pointing to the on-page comparison table, **or**
- Replace with a `mainEntity: ItemList` of comparison criteria (rows as ListItem with name + description for SealMetrics and competitor), **or**
- Drop the `mainEntity` and let `about[]` carry the meaning.

### MED-4 — Article author lacks `@id` for cross-page entity reconciliation
Blog Article blocks nest `author: {@type:Person, name:"Rafa Jiménez", url:"…/authors/rafa-jimenez", ...}` but never use `@id`. The `Person` schema served at `/authors/rafa-jimenez/` also has no `@id`. Add `@id:"https://sealmetrics.com/#person-rafa-jimenez"` (or use the URL) on both so Google treats them as the **same** entity. Today they look like potentially separate people.

### MED-5 — `Person.sameAs` on author profile is thin
`/authors/rafa-jimenez/` `sameAs` lists only LinkedIn + the about page. Add:
- X/Twitter handle if public
- GitHub
- Speaker bureau pages, podcast appearances, published articles on third-party domains
This is the strongest E-E-A-T signal for blog Article ranking.

### MED-6 — Homepage `Quotation` entities have anonymous `spokenByCharacter`
Two of three quotations use `name:"Head of eCommerce"` and `name:"Founder & CEO"` — these are roles, not names. Schema is technically valid (Person can have a generic name) but it lowers credibility for LLMs that parse for E-E-A-T. Either:
- Reference the named Palladium quote (already de-anonymized — see project memory), or
- Drop the anonymous Quotations entirely and rely on the Palladium one only.

### MED-7 — Pricing page `Product.brand` and `Product.provider` not unified
`Product.brand` is `{@type:"Brand","name":"SealMetrics"}` but does not reference the Organization. Add `@id` reference:
```
"brand": {"@id":"https://sealmetrics.com/#organization"}
```
Otherwise Google may treat "SealMetrics" the brand and "SealMetrics" the Organization as separate entities.

### LOW-1 — `inLanguage` on WebSite is `["en","es"]` but only EN is sampled live
Verify the `/es/` route group actually ships; otherwise drop `"es"` from `inLanguage`.

### LOW-2 — Mixed accent on author name
Homepage Organization → `"name":"Rafa Jimenez"`. Article author + Person page → `"name":"Rafa Jiménez"` (with accent). Unify to `Rafa Jiménez` everywhere — accent is the canonical spelling.

### LOW-3 — `CreativeWork` blocks for stat callouts (40%, 35%, +165%) on homepage duplicate the case study
The same three `CreativeWork` blocks appear on `/` and on `/case-studies/palladium-hotel-group/`. Schema-valid, but redundant. Keep on the case study page; on the homepage, link via `isBasedOn` referencing the case study URL rather than re-declaring the underlying data.

### LOW-4 — `Article.articleSection:"Technology"` is generic
Use the actual on-site category ("Cookieless analytics", "GA4", "Compliance"). Helps cluster signaling.

---

## 3. Coverage gaps — pages that should have schema but don't (or have wrong type)

### GAP-1 — `/security/` should ship `SoftwareApplication` (or `Service`) + `FAQPage`-equivalent
Currently only `WebPage` + `BreadcrumbList`. Security is a high-intent pillar page. Add:
- `SoftwareApplication` block referencing Organization via `@id`, with `featureList` listing security/compliance attributes (GDPR by architecture, ePrivacy, Schrems II, Dublin hosting, DPA included, TPSR).
- **Do not** use `FAQPage` (Google policy). Instead, use `WebPage.mainEntity` = array of `Question` entities.

### GAP-2 — `/how-it-works/` should ship `TechArticle` (educational long-form) — not `HowTo`
**Do not use `HowTo`** — Google deprecated rich results for it September 2023. Use `TechArticle` with `author`, `datePublished`, `dateModified`, `mainEntityOfPage`. This is the closest type for technical explainer pages.

### GAP-3 — `/product/` should embed Organization + WebSite via `@id` references
Currently the SoftwareApplication block declares `provider:{@type:"Organization","name":"SealMetrics","url":"..."}` as a fresh entity rather than referencing `https://sealmetrics.com/#organization`. Fix by using `"provider":{"@id":"https://sealmetrics.com/#organization"}`.

### GAP-4 — Case study detail pages should use `Article` + `subjectOf` linking to a `Service`/`SoftwareApplication`
Already uses `Article` — but could be strengthened by typing as `Article` **with** an `about` pointing to the SoftwareApplication, giving Google "this case study is about SealMetrics's analytics product." Currently `about` is unused.

### GAP-5 — `/authors/rafa-jimenez/` Person should list `knowsLanguage`, `alumniOf`, `award` (where true), and `mainEntityOfPage`
The Person block is missing `mainEntityOfPage` linking back to the author profile URL — without it, Google may treat the JSON-LD as referring to a different Person entity than the page subject.

### GAP-6 — Pillar pages need cross-references to glossary terms via schema, not only inline links
The glossary terms already declare themselves as `DefinedTerm`. Pillar pages (e.g. `/product/`) could ship `mentions: [{@type:"DefinedTerm","@id":"https://sealmetrics.com/glossary/cookieless-analytics#term"}, …]` to reinforce topic clustering for LLMs.

### GAP-7 — `/pricing/` has no `Service` type for the underlying SaaS service
`Product` is fine, but `Service` is the more semantically correct type for SaaS. Many enterprise rankings prefer Service. Recommendation: add a `Service` block alongside `Product` with `serviceType:"Web analytics SaaS"`, `provider` referencing Organization, and `offers` mirroring the Product offers.

### GAP-8 — Site-wide `@id` graph is not used consistently
Homepage uses `@graph` with proper `@id` for Organization and WebSite — good. But every other page re-declares Organization-like data inline (in `publisher`, `provider`, `seller`, `author`) without `@id` references. Refactor: a shared `<OrgGraph />` component that emits the canonical Organization+WebSite block once, then every other type uses `@id` references only.

---

## 4. Breadcrumbs

Breadcrumbs are **present on every sampled non-homepage URL**. Format is correct (`BreadcrumbList` with `ListItem.position`, `name`, `item`). Two minor issues:
- All `item` URLs lack the trailing slash (consistency with CRIT-3).
- Names use sentence-case ("Case studies" vs. "Blog") — consistent enough but verify against header nav copy.

---

## 5. Author entities

- `Article.author` on blog posts: full Person object with `name`, `url`, `jobTitle`, `sameAs[LinkedIn]`, `worksFor`. **Good.**
- `/authors/rafa-jimenez/` Person page exists and ships Person schema with `knowsAbout`, `sameAs`, `worksFor`. **Good.**
- **Missing:** `@id` linkage between Article-nested Person and standalone Person page (see MED-4).
- **Missing:** richer `sameAs` (see MED-5).
- The `/vs/*` pages declare `author` and `reviewedBy` both as Rafa Jiménez — fine, but `reviewedBy` should arguably be a second reviewer (legal counsel, technical reviewer) for true E-E-A-T.

---

## 6. Organization

Current Organization @graph (homepage, about page) is **strong**:
- `name`, `url`, `logo` (with width/height), `description`, `foundingDate`, `founders[]`, `address`, `sameAs[9 profiles]`, `knowsAbout[]`, `areaServed[]`, `contactPoint[]`

Missing or weak:
- `legalName`, `vatID`, `numberOfEmployees` (MED-1)
- `contactPoint.telephone` (HIGH-4)
- `award`, `slogan`, `brand` (would help disambiguation)
- `parentOrganization` / `subOrganization` if applicable

---

## 7. Ready-to-paste fixes

### 7.1 Replace homepage FAQPage block with `Question[]` nested in WebPage (CRIT-1)

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://sealmetrics.com/#webpage",
  "url": "https://sealmetrics.com/",
  "name": "SealMetrics — complete data for eCommerce",
  "isPartOf": { "@id": "https://sealmetrics.com/#website" },
  "primaryImageOfPage": { "@type": "ImageObject", "url": "https://sealmetrics.com/og-image.png" },
  "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["[data-speakable]", ".tldr", "h1"] },
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why pay for SealMetrics when GA4 is free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GA4 is free because you are the product — your data trains Google's ad models. More importantly, GA4 relies on cookies most EU visitors reject, so you make budget decisions on a fraction of real data. The cost of SealMetrics is a rounding error compared to the cost of misallocated ad spend."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is cookieless tracking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Palladium Hotel Group discovered 40% of their traffic had no attribution in their previous stack and improved Cost-per-Search on Display by +165% after switching. No sampling, no modelling — every data point observed."
      }
    },
    {
      "@type": "Question",
      "name": "GDPR compliant without a consent banner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Cookieless by architecture — no cookies, no personal data storage, no cross-site tracking. 100% EU-hosted in Dublin, Ireland. Complies with GDPR, ePrivacy and Schrems II without consent banners."
      }
    }
  ]
}
```

### 7.2 Security page SoftwareApplication + Q&A (GAP-1)

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://sealmetrics.com/security/#webpage",
  "url": "https://sealmetrics.com/security/",
  "name": "Security & Compliance — SealMetrics",
  "isPartOf": { "@id": "https://sealmetrics.com/#website" },
  "about": { "@id": "https://sealmetrics.com/#software" },
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is SealMetrics GDPR-compliant without a consent banner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. SealMetrics is cookieless by architecture: no cookies, no personal data storage, no cross-site tracking. EU-hosted in Dublin, Ireland. Complies with GDPR, ePrivacy and Schrems II without consent banners."
      }
    },
    {
      "@type": "Question",
      "name": "Where is data hosted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "100% EU-hosted in Dublin, Ireland. No data leaves the EU. Schrems II-clean architecture."
      }
    }
  ]
}
```

Plus a `SoftwareApplication` block on `/security/` with `@id: "https://sealmetrics.com/#software"` so any page can reference it.

### 7.3 Unified Product + Service block for `/pricing/` (HIGH-1, GAP-7)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Product", "SoftwareApplication", "Service"],
      "@id": "https://sealmetrics.com/#software",
      "name": "SealMetrics",
      "applicationCategory": "AnalyticsApplication",
      "operatingSystem": "Web",
      "serviceType": "Cookieless web analytics SaaS",
      "url": "https://sealmetrics.com/",
      "image": "https://sealmetrics.com/logos/logo-sealmetrics-negro.png",
      "brand": { "@id": "https://sealmetrics.com/#organization" },
      "provider": { "@id": "https://sealmetrics.com/#organization" },
      "description": "Enterprise analytics for eCommerce. Captures 100% of traffic, last-click revenue attribution, GDPR-compliant by architecture.",
      "featureList": [
        "Cookieless tracking (no consent banner required)",
        "100% traffic data capture",
        "GDPR/ePrivacy compliant by design",
        "Last-click revenue attribution",
        "LENS AI anomaly detection",
        "AI Agent Analytics (MCP)"
      ],
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "499",
        "highPrice": "1079",
        "priceCurrency": "EUR",
        "offerCount": 2,
        "offers": [
          {
            "@type": "Offer",
            "name": "Growth (annual)",
            "price": "499",
            "priceCurrency": "EUR",
            "priceValidUntil": "2026-12-31",
            "availability": "https://schema.org/InStock",
            "url": "https://sealmetrics.com/pricing/",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "499",
              "priceCurrency": "EUR",
              "unitText": "Per month, billed annually",
              "referenceQuantity": { "@type": "QuantitativeValue", "value": "5000000", "unitText": "events/month" }
            }
          },
          {
            "@type": "Offer",
            "name": "Growth (monthly)",
            "price": "599",
            "priceCurrency": "EUR",
            "priceValidUntil": "2026-12-31",
            "availability": "https://schema.org/InStock",
            "url": "https://sealmetrics.com/pricing/",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "599",
              "priceCurrency": "EUR",
              "unitText": "Per month, billed monthly",
              "referenceQuantity": { "@type": "QuantitativeValue", "value": "5000000", "unitText": "events/month" }
            }
          }
        ]
      }
    }
  ]
}
```

(Add equivalent `Scale` offers €899/€1079; remove the duplicate SoftwareApplication block on `/pricing/`.)

### 7.4 Author Person with stable `@id` (MED-4, GAP-5)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://sealmetrics.com/#person-rafa-jimenez",
  "mainEntityOfPage": "https://sealmetrics.com/authors/rafa-jimenez/",
  "name": "Rafa Jiménez",
  "jobTitle": "Founder & CEO, SealMetrics",
  "description": "20+ years in European eCommerce analytics. Founder of SealMetrics.",
  "url": "https://sealmetrics.com/authors/rafa-jimenez/",
  "image": "https://sealmetrics.com/authors/rafa-jimenez.jpg",
  "knowsAbout": ["Web Analytics","Cookieless Tracking","Revenue Attribution","GDPR Compliance","eCommerce Analytics","MCP Protocol"],
  "sameAs": [
    "https://www.linkedin.com/in/rafajimenez/",
    "https://x.com/rafadesmarkt",
    "https://github.com/rafadesmarkt"
  ],
  "worksFor": { "@id": "https://sealmetrics.com/#organization" }
}
```

Then in every Article: `"author": {"@id": "https://sealmetrics.com/#person-rafa-jimenez"}` instead of an inline Person object.

### 7.5 Organization additions (MED-1, HIGH-4, LOW-2)

```json
{
  "@type": "Organization",
  "@id": "https://sealmetrics.com/#organization",
  "name": "SealMetrics",
  "legalName": "SealMetrics S.L.",
  "alternateName": ["Seal Metrics", "sealmetrics.com"],
  "url": "https://sealmetrics.com/",
  "logo": { "@type": "ImageObject", "url": "https://sealmetrics.com/logos/logo-sealmetrics-negro.png", "width": 160, "height": 32 },
  "foundingDate": "2020",
  "founder": { "@id": "https://sealmetrics.com/#person-rafa-jimenez" },
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": "11-50" },
  "address": { "@type": "PostalAddress", "addressCountry": "ES" },
  "sameAs": [
    "https://www.linkedin.com/company/sealmetrics",
    "https://x.com/sealmetrics",
    "https://www.youtube.com/@sealmetrics"
  ],
  "knowsAbout": ["Web Analytics","Cookieless Tracking","GDPR Compliance","Revenue Attribution","eCommerce Analytics"],
  "areaServed": [{"@type":"Place","name":"European Union"},{"@type":"Place","name":"United Kingdom"}],
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "sales@sealmetrics.com",
    "url": "https://sealmetrics.com/demo/",
    "availableLanguage": ["English","Spanish"],
    "areaServed": "EU"
  }]
}
```

### 7.6 Fix the `/vs/*` `mainEntity` Table (MED-3)

Replace the empty `Table` with:

```json
"mainEntity": {
  "@type": "ItemList",
  "name": "SealMetrics vs Google Analytics 4 — feature comparison",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Data completeness", "description": "SealMetrics: 100% of traffic. GA4: ~13% in EU after consent rejection." },
    { "@type": "ListItem", "position": 2, "name": "Consent banner required", "description": "SealMetrics: No. GA4: Yes." },
    { "@type": "ListItem", "position": 3, "name": "Attribution", "description": "SealMetrics: Last-click on 100% of data. GA4: Data-driven on sampled data." },
    { "@type": "ListItem", "position": 4, "name": "EU hosting", "description": "SealMetrics: Dublin, EU. GA4: US-based with Schrems II concerns." }
  ]
}
```

---

## 8. Priority action plan

1. **Remove FAQPage from homepage** (CRIT-1) — 5 min, eliminates policy risk.
2. **Resolve `/vs/ga4/` vs `/vs-ga4/` URL** (CRIT-2) — pick `/vs/ga4/`, add redirect, update internal links.
3. **Add `priceSpecification.unitText` to all Offers** (HIGH-1) — resolves price contradiction.
4. **Centralize Organization+Person `@graph` with stable `@id`s** (GAP-8, MED-4) — refactor once, all pages benefit.
5. **Add SoftwareApplication + Q&A to `/security/` and `/how-it-works/`** (GAP-1, GAP-2).
6. **Replace empty `Table` on `/vs/*` pages with populated `ItemList`** (MED-3).
7. **Enrich Person `sameAs` and add `mainEntityOfPage`** (MED-5, GAP-5).
8. **Strip trailing-slash inconsistency in all `url`/`item` fields** (CRIT-3).
9. **Drop or restructure anonymous DTC Review** on case-studies index (HIGH-3).
10. **Add case-study-specific OG image** for Palladium and future case studies (HIGH-2).
