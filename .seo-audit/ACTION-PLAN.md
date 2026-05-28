# SealMetrics — SEO Action Plan

**Date**: 2026-05-28
**Health Score**: 74/100
**Companion report**: [`FULL-AUDIT-REPORT.md`](./FULL-AUDIT-REPORT.md)

Priorities are estimated to lift the health score by ~20 points if all Critical + High items are resolved.

---

## CRITICAL — fix today

| # | Issue | Fix | Owner | Effort |
|---|---|---|---|---|
| C1 | `http://sealmetrics.com/` returns 200, no HTTPS redirect | GitHub Pages → Settings → **Enforce HTTPS** (1 click) | Rafa | 2 min |
| C2 | No HSTS header | Add `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` at Fastly edge (after C1) | Rafa | 10 min |
| C3 | `/vs/ga4/` is 404 (canonical lives at `/vs-ga4/`) | Pick one: (a) copy page to `/vs/ga4/` and 301 `/vs-ga4/` to it (preferred — matches cluster convention), or (b) 301 `/vs/ga4/` → `/vs-ga4/`. Add to `/vs/` hub either way. | Rafa | 30 min |
| C4 | Homepage FAQPage JSON-LD violates Google's Aug-2023 rich-result policy | Remove `@type: FAQPage`; embed Q/A as `WebPage.mainEntity` containing `Question[]`. Ready-to-paste snippet in `schema.md`. | Rafa | 15 min |
| C5 | `/pricing/` schema contradicts itself: SoftwareApplication €599/€1079 vs Product/AggregateOffer €499/€899 | Add `priceSpecification.unitText: "MONTH"` / `"YEAR"`, OR consolidate into a single Offer with `eligibleQuantity` + `priceSpecification`. Snippet in `schema.md`. | Rafa | 20 min |

---

## HIGH — fix within 1 week

| # | Issue | Fix | Effort |
|---|---|---|---|
| H1 | 325KB `/favicon.png` loaded twice/page | Replace HTML + manifest `<link>` references with `.avif` (6.8KB) and `.webp` (12KB); the files already exist in `/public/` | 20 min |
| H2 | Fastly cache TTL on `/_next/static/*` = 10 min | Add Fastly VCL override: `public, max-age=31536000, immutable` on hashed asset paths | 30 min |
| H3 | Zero security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSP) | Add at Fastly edge; start CSP in Report-Only mode to tune | 1 h |
| H4 | Homepage title 67 chars / description 171 chars (EN and ES) | Tighten to ≤58 / ≤155 in both locales. CLAUDE.md §SEO rule. | 20 min |
| H5 | `/case-studies/` 3rd card (DTC coffee) links nowhere | Either build the case study or remove the card | 30 min – 4 h |
| H6 | Unsourced "2,000+ active accounts" claim repeats 4× on `/about/` | Add citation/methodology footnote, OR soften to "hundreds of brands" | 15 min |
| H7 | `/security/` should add "we don't claim ISO 27001 / SOC 2 yet" honesty block | Frame the compliance roadmap; reduces CISO friction | 1 h |
| H8 | `/security/` and `/how-it-works/` ship only WebPage + BreadcrumbList schema | Add SoftwareApplication (via shared `@id` from homepage) + `Question[]` for FAQs already on page | 45 min |
| H9 | Mobile LCP 7.2–7.9s simulated 4G (vs internal 2.0s bar) | Combination of H1 + H2 should drop this below 3s; verify after deploy | depends on H1+H2 |
| H10 | `/vs/piwik-pro/`, `/vs/adobe-analytics/`, `/vs/matomo/` are thin scaffolds vs gold-standard `/vs-ga4/` | Bring each to the same content depth (comparison table, "when to choose them", "when to choose us", FAQs) | 4–6 h each |
| H11 | Amber italic-emphasis highlight missing on every commercial page except `/open/` | Add the `<mark class="amber-soft">` (or equivalent) wrapper to italic key phrases on `/`, `/product/`, `/how-it-works/`, `/security/`, `/pricing/` | 1 h |
| H12 | Default Next.js 404 page on any broken URL | Build a branded `not-found.tsx` (it already exists at `src/app/(en)/not-found.tsx` — verify it's wired up at the root and on dynamic segments) | 30 min |
| H13 | Empty `Table` `mainEntity` on `/vs/*` pages | Replace with populated `ItemList` of comparison criteria (rows). Snippet in `schema.md`. | 45 min for the template |

---

## MEDIUM — fix within 1 month

| # | Issue | Fix | Effort |
|---|---|---|---|
| M1 | All non-blog `lastmod` values are build-time `today` | Extend the `blog-modified.json` git-based pattern to glossary, `/open/`, and pillar pages in `src/app/sitemap.ts` | 2 h |
| M2 | CTA copy inconsistent ("Start FREE Trial" vs "Start free trial") | Canonicalise to one casing (CLAUDE.md says action-specific: "Book a Demo"); update header + every hero | 30 min |
| M3 | "Most" appears 30+ times as vague qualifier across marketing copy | Find/replace with specific numbers; remove where no number is defensible | 2 h |
| M4 | "The best" appears 2× as ungrounded superlative | Replace with data-backed claim or remove | 10 min |
| M5 | No price anchor above the fold on `/pricing/` | Add a single anchor figure ("From €499/mo, billed annually") in the hero | 20 min |
| M6 | No product screenshot above the fold on `/`, `/product/`, `/pricing/`, `/blog/` | Add a single editorial dashboard render (PNG, ≤80KB AVIF) per page; aspect-ratio fixed to prevent CLS | 4 h |
| M7 | Mobile fold pressure on `/pricing/` (CTA below the fold) | Reduce H1 line count from 4→3 on mobile, or shrink eyebrow pill | 30 min |
| M8 | 4 short glossary terms (CMP, FPD collection, ITP, server-side tracking) lack QuickAnswer blocks | Add a 40–60 word answer block at the top of each — boosts ChatGPT/Perplexity citation odds | 1 h |
| M9 | Author entity drift: standalone `/authors/rafa-jimenez/` Person not linked by `@id` to authors nested in Articles | Define one canonical `@id: https://sealmetrics.com/authors/rafa-jimenez/#person` and reference it everywhere via `{ "@id": "..." }` instead of inlining | 1 h |
| M10 | Registry-vs-filesystem drift: blog has 2 orphan page folders, glossary has 1 orphan term | Decide: publish them (add to registries) or delete the page folders | 30 min |
| M11 | `/about/` author block needs portrait + external authority links (talks, publications) beyond LinkedIn | Add image + 2–3 authority links | 1 h |

---

## LOW — backlog

| # | Issue | Notes |
|---|---|---|
| L1 | Onest font preload not present | Add `<link rel="preload" as="font" type="font/woff2">` for the hero weight; minor LCP gain |
| L2 | `/blog/` index thin compared to `/open/` editorial bar | Out of scope for SEO audit; content roadmap |
| L3 | Consider an `Organization.sameAs` augmentation (LinkedIn, GitHub, YouTube if present, podcast appearances) | Strengthens entity disambiguation for LLMs |
| L4 | Consider `Speakable` markup on glossary definitions for voice search | Low traffic, but cheap to add |

---

## Recommended sequencing

**Day 1 (~2 hours total)** — clear all 5 Critical items. The HTTPS / HSTS / `/vs/ga4/` / FAQ / pricing-schema fixes have outsized impact for minimal effort.

**Days 2–5** — H1 (favicon), H2 (cache TTL), H3 (security headers), H4 (title/desc), H8 (security/how-it-works schema), H11 (amber highlight), H12 (404 page). After this batch, recheck mobile LCP — H9 should resolve automatically.

**Weeks 2–4** — H5 (case-study card), H6 (sourced metric), H7 (security honesty block), H10 (thin /vs/* pages), H13 (vs ItemList).

**Month 2** — work through the Medium list, starting with M1 (lastmod) and M5–M7 (pricing-page UX).

---

## How to re-score after fixes

Re-run `/seo-audit` after deploying any Critical batch. The technical score will jump from 65 → ~85 once HTTPS + HSTS + cache + security headers ship. Pricing-schema + FAQ fixes will lift schema from 70 → ~85. Favicon + cache fixes should push performance from 70 → ~88. Projected re-score: **~88/100**.
