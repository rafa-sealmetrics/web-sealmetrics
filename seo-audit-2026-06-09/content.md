# Content Quality + E-E-A-T Audit — sealmetrics.com
Date: 2026-06-09 · Sample: 10 live pages (fetched via curl, all HTTP 200)

## Overall Score: 79 / 100

| Dimension | Score | Notes |
|---|---|---|
| Experience (20%) | 85 | Founder narrative, named client (Palladium, Toni Andújar quoted 12x), real numbers (40%/35%/+165%), Dreamplace data |
| Expertise (25%) | 82 | Author page with Person schema, `knowsAbout`, jobTitle; named author + dates on blogs and /vs pages |
| Authoritativeness (25%) | 68 | External citations exist (eur-lex, CNIL, WebKit, Google support) but sparse; author `sameAs` only LinkedIn + own /about; anonymous testimonial on /for/ecommerce |
| Trustworthiness (30%) | 80 | Honest comparison framing ("Acknowledges its strengths"), explicit capability disclaimers, dateModified fresh (2026-06-03); dinged for internal stat contradictions |
| **Weighted E-E-A-T** | **78.5** | |
| AI-citation readiness | 84 | DefinedTerm schema, `data-speakable` "Quick answer" blocks, Key Takeaways, FAQ, Quotation/QuantitativeValue schema — excellent structure; dinged for conflicting numbers |

## Banned-Claims Check: PASS (all 10 pages)

- **Multi-touch attribution** — only appears as explicit disclaimers: glossary defines it and states "SealMetrics deliberately does not implement multi-touch attribution" / "last-click on 100% of observed events". Compliant.
- **ISO 27001 / SOC 2** — zero occurrences.
- **Session reconstruction / journeys / individual tracking** — all occurrences are negations ("no per-user journeys", "does not identify visitors"). Compliant.

## Word Counts (rendered text incl. chrome)

| Page | Words | Floor | Status |
|---|---|---|---|
| Homepage | 1,919 | 500 | OK |
| /blog/why-ga4-shows-13pct-eu-traffic | 1,459 | 1,500 | Borderline (≈1,250 body) |
| /blog/cookieless-analytics-explained | 773 | 1,500 | **Thin** |
| /glossary/cookieless-analytics | 755 | n/a | OK for glossary |
| /glossary/multi-touch-attribution | 713 | n/a | OK for glossary |
| /vs/ga360 | 1,192 | 800 | OK |
| /case-studies/palladium-hotel-group | 2,016 | — | Strong |
| /for/ecommerce | 723 | 800 | **Below floor** |
| /authors/rafa-jimenez | 595 | — | OK for author page |
| /es/ | 1,978 | 500 | OK (but see translation issue) |

## Issues

### Critical
None. No banned claims, no certification claims, no thin-content penalties at site level.

### High
1. **English text leaking into /es/ homepage.** The social-proof slab renders untranslated: "The single source of truth", "European eCommerce signs against" (also a grammatical error — likely meant "swears by" or similar), and the full Dreamplace/Palladium results paragraph in English. This is a classic partial-translation signal raters flag; it undermines ES-market E-E-A-T and looks machine-assisted. Fix the ES locale strings for that section.
2. **Conflicting statistics across pages — direct AI-citation risk.** LLMs ingesting the site will surface contradictory numbers:
   - Ad blockers: **40%** (blog1, blog2, gloss1) vs **~25%** (glossary/multi-touch-attribution)
   - Consent rejection: **55%** (blog1, gloss1) vs **40–60%** (gloss2, /vs/ga360, author page)
   - Traffic invisible to GA4: homepage says **62%**, blog/glossary say **87%** loss / 13% captured. The 62% and 87% figures both describe "your traffic is invisible to GA4" framing with no reconciliation.
   Pick canonical numbers (or label ranges consistently) and propagate. The 13%/87% cascade is the brand's signature claim — it must be internally consistent to be citable.

### Medium
3. **/blog/cookieless-analytics-explained is thin (~773 words)** for a pillar-explainer blog topic (floor 1,500). It reads as a summary of the glossary page; expand with implementation detail, DPA guidance specifics, migration FAQs — or canonicalize toward a fuller piece.
4. **/for/ecommerce below service-page floor (~723 words)** and its only testimonial is anonymous ("Founder & CEO · DTC brand") on a site that elsewhere names Palladium/Dreamplace. Swap in a named quote or link the Palladium case study inline.
5. **Headline stats lack inline sourcing.** "55% consent rejection", "40% ad blockers", "62% invisible", "Trusted by teams analyzing 500M+ events across 12 countries" have no cited source on most pages. blog1/blog2 cite eur-lex/CNIL/WebKit for legal/browser claims (good) but the loss percentages are asserted, not sourced. Per Sept 2025 QRG, unsourced statistics are a trust deduction and reduce citation likelihood.

### Low
6. Author `sameAs` is only LinkedIn + own /about — add 2–3 external profiles (conference talks, podcast appearances, press) to strengthen Authoritativeness.
7. Glossary pages show no visible published/updated date (schema-only freshness); a small "Updated" line aids both raters and AI extraction.
8. Blog1 takeaway math reads ambiguously: "consent rejection (55%), ad blockers (40%)" — clarify these are sequential percentages of the remainder (100→45→27→13), since 55+40 naively exceeds the 87% total.

## Strengths Worth Keeping
- Speakable "Quick answer" blocks + DefinedTerm/Quotation/QuantitativeValue schema = best-in-class AI-citation structure.
- Honest competitor framing on /vs/ga360 ("premium support & sampling relief" acknowledged) — exactly what QRG rewards.
- Capability disclaimers (no MTA, no per-user tracking) are an unusual and powerful trust signal; the multi-touch glossary page defining a feature you don't have, honestly, is excellent E-E-A-T.
- dateModified within 6 days of audit on blog posts; named, schema-backed author throughout.
