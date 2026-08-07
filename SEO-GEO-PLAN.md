# SealMetrics · SEO/GEO Technical Plan

**Date:** 7 August 2026
**Scope:** the technical and machine-readable layer — metadata, indexability, structured data, Markdown surface, regression gates.
**Companion doc:** `GSC-ACTION-PLAN.md` (28 Jul 2026) owns *what content to write*, from Search Console data. **This doc owns *how the site is built*.** Where they touch the same page, GSC wins on priority and this doc wins on mechanics. §2 records where my build evidence contradicts an existing document.

Everything below is derived from the built output (`out/`), not from inspection of source. Figures are reproducible with `npm run build && npm test`.

---

## 0. State after branch `claude/sealmetrics-seo-geo-d9ab56`

All six phases below are complete as of 7 August 2026.

| | Before | Now |
|---|---:|---:|
| Findings at critical / high / medium | 6 / 73 / 617 | **0 / 0 / 0** |
| Tracked warnings (title/description length, headings, schema) | 184 | **0** |
| Automated tests | 0 | **57** |
| Pages missing `og:url` and `og:site_name` | 231/248 | **0/256** |
| Pages sharing one inherited Twitter card | 229/248 | **0/256** |
| `noindex` URLs in sitemap | 3 | **0** |
| `FAQPage` schema with invisible Q&A | 35 pages | **0** |
| FAQ answers absent from the served HTML | 25 | **0** |
| Broken internal links | 7 | **0** |
| Heading levels skipped | 58 | **0** |
| Spanish glossary terms | 5 | **14** |
| Client-side storage calls | 3 | **0** |
| Markdown twins for AI agents | 0 | **232** |

*Before-figures are from the first audit run against `main`'s build. Page count rises 248 → 256: nine new Spanish glossary pages and two new hubs, minus Next's unbranded `_not-found` placeholder.*

The build fails on regression (`scripts/seo-audit.mjs`, 17 blocking rules plus warnings), and the PR check runs the same rules per-rule (`npm test`).

---

## 1. Priorities, and why in this order

`GSC-ACTION-PLAN.md` §0 established the central fact: **the site does not have a ranking problem, it has a CTR problem.** Five pages hold ~9,200 impressions and produce 9 clicks.

That reorders my own audit. The 43 over-long meta descriptions and 26 over-long titles are not cosmetic housekeeping — **they are the measured problem**, sitting on pages that already rank. Everything else queues behind them.

One caution, from `GSC-ACTION-PLAN.md` §8: the hypothesis *"`/pricing` underperforms because its meta description doesn't lead with a price"* was **tested and discarded** — that page ranks for the wrong query and no rewrite fixes it. So Phase 1 targets only pages whose queries are already right. Rewriting a description never fixes a query-match failure.

---

## 2. Corrections to existing documents

Verified against the build of 7 August 2026.

| Doc | Claim | Reality |
|---|---|---|
| `GSC-ACTION-PLAN.md` §2 / §4 P8 | "llms.txt — 22 URLs missing, being reconciled separately" | **Closed.** 0 drift, and now build-enforced: `scripts/audit-llms-txt.mjs` fails the build on any divergence. 222 URLs on both sides. |
| `GSC-ACTION-PLAN.md` §4 P3 | "`/glossary` needs an A–Z index with definitions **on the page**, not a link list" | **Already true on EN.** `/glossary/` renders all definitions inline with an A–Z index and emits 54 `DefinedTerm` nodes. P3's remaining gap is **Spanish**, not English — see Phase 3. |
| `SEO-STRATEGY.md` (implied) | Sitemap exclusions maintained in a list | **Removed.** Indexability is now derived from each page's own `robots` metadata (`src/lib/seo/routes.ts`). The hand-maintained list is what leaked 3 `noindex` posts into the sitemap. Do not reintroduce one. |
| Any doc recommending "fix headers / CSP at the edge" | Assumes `vercel.json` is live | **`vercel.json` is staged, not served.** Deploy is GitHub Pages (`.github/workflows/deploy.yml`), which sends no custom headers, so no HSTS, CSP or cache rule reaches a visitor. It is *not* dead config — `scripts/audit-csp.mjs` lints the code against it and fails the build on drift. Every build now prints this status. See Phase 5. |

---

## Phase 1 — CTR repair on pages that already rank ✅ DONE (7 Aug 2026)

**Targets the measured #1 problem.** `GSC-ACTION-PLAN.md` §5 sets CTR of the five §1.1 pages from ~0.1% to 2% in 90 days.

**Work:**
1. **43 meta descriptions over 160 chars** — 37 blog posts, 6 legal/careers pages. Worst offenders run 289–311 chars, median 240. Google truncates around 160, so roughly a third of each description never renders.
2. **26 titles over 60 chars** — 11 EN, 15 ES. Spanish is materially worse (up to **96 chars** on `/es/blog/how-we-benchmark-our-own-ai/`) because titles were translated without re-checking length.

**Rules:** rewrite by hand, one page at a time. No automated truncation — a cut sentence reads worse than a long one. Lead with the answer, not the brand. Per `GSC-ACTION-PLAN.md` §6, lean on **`consentless`** (position 9.6–9.9, ownable) rather than `cookieless` (position 26.6) in the pages where both would fit.

**Order:** the five §1.1 pages first, then ES blog (worst truncation, best-converting market), then EN blog, then legal.

**Effort:** ~69 hand edits. Two focused sessions.
**Verified by:** `description-over-160-chars` and `title-over-60-chars` warnings reach 0. Real signal is CTR in Search Console at 30/60/90 days.

---

## Phase 2 — Question-shaped headings (GEO) ✅ DONE (7 Aug 2026)

AI engines lift a question heading together with the paragraph that follows it. Today the FAQ questions on ~35 pages are `<h4>` sitting directly under an `<h2>`, which both breaks the hierarchy and weakens extraction.

**Work:**
1. **Four shared components, `h4` → `h3`:** `FaqV3.tsx`, `FaqV3Es.tsx`, `FaqAccordionV3.tsx`, `PricingFaqV3.tsx`. This single change fixes ~35 of the 58 heading skips and makes every FAQ question a properly-nested heading. Purely semantic — the `className` carries the visual size, so nothing moves on screen.
2. **~23 remaining `h1 → h3` skips**, per page: `/pricing/` (plan cards are `h3` with no `h2` above), `/about/`, `/how-it-works/`, `/integrations/`, `/modern-analytics/`, `/reg-gap-analysis/`, `/videos/`, `/demo/`, `/audit/`, `/ai-analytics/`, `/vs-ga4/` and their ES twins. Either introduce the missing `h2` or demote the card headings.

**Effort:** 4 component files + ~12 page files. One session.
**Verified by:** `heading-level-skipped` warnings reach 0.

---

## Phase 3 — Spanish glossary (highest-yield locale) ✅ DONE (7 Aug 2026)

The strongest evidence-to-effort ratio in this plan.

**Evidence:**
- Spain: **11.3% CTR**, 210 clicks on 1,855 impressions. United States: **0.22%**, 31 clicks on 14,161. (`GSC-ACTION-PLAN.md` §1.4)
- Spanish pages average **position 4.7** — "where the language exists, it works".
- `GSC-ACTION-PLAN.md` P3 wants a real glossary hub; EN already is one, **ES is not**. `/es/glossary/` currently tells visitors *"Definiciones disponibles solo en inglés por ahora"*.
- P5 wants the sampling cluster: `/glossary/data-sampling` holds 382 impressions at position 31.6, with no Spanish equivalent.

**Work:** translate the 9 terms that ES references but does not have — `consent-management-platform`, `first-party-data-collection`, `intelligent-tracking-prevention`, `server-side-tracking`, `data-sampling`, `event-tracking`, `attribution-model`, `ad-blocker-analytics-impact`, `analytics-data-residency`. All nine have verified EN sources, so this is translation, not authoring.

This also retires the 21 cross-language links I had to introduce to clear the broken-link failures — a stopgap that followed the convention already in `es/glossary/page.tsx`, not a destination.

**Effort:** 9 pages from existing sources. One session.
**Verified by:** `hreflang-not-reciprocal` stays 0, no `/glossary/` links remain in the ES tree, ES glossary drops the "solo en inglés" notice.

---

## Phase 4 — Structured data completion ✅ DONE (7 Aug 2026)

**Work:** add `BreadcrumbList` to the 9 `/open/*` pages (index + 8 chapters). They already carry `Article` and `isPartOf` a `Book`; breadcrumbs are the missing navigational signal.

**Effort:** two files (`/open/page.tsx`, `/open/[slug]/page.tsx`). Under an hour.
**Verified by:** `no-breadcrumb-schema` warnings reach 0.

---

## Phase 5 — Hosting decision ⚠️ STATUS DOCUMENTED, DECISION STILL OPEN

**This is the ceiling on everything else technical.** The site is a static export on GitHub Pages, and we do not control the CDN layer. Four consequences, none fixable in this repo:

1. **`vercel.json` is dead configuration.** HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` and the report-only CSP are all defined and **none are served**.
2. **No 301 redirects.** Old URLs are handled by `<meta http-equiv="refresh">` stubs (`src/components/ui/Redirect.tsx`). They work and they carry `noindex` + a canonical to the destination, but a meta refresh is not a 301 and passes signals less reliably.
3. **No `X-Robots-Tag`.** This is why the Markdown twins are governed by `robots.txt` `Disallow` rules for Googlebot/Bingbot instead of a header — a `.md` file cannot carry a meta tag.
4. **No content negotiation.** `Accept: text/markdown` + `Vary: Accept` is not implementable; static `.md` twins are the deliberate substitute.

**The decision is not mine to make** and it is not urgent — items 2–4 have working mitigations. Item 1 is the real exposure: security headers that exist in the repo but not in production read as done to anyone auditing the repo.

**Correction to an earlier draft of this plan, which said to delete `vercel.json`.** That was wrong. The file is not junk: `scripts/audit-csp.mjs` uses it as the source of truth for the CSP and fails the build when the code loads an origin the policy would block — a gate that already caught a policy which would have killed the pixel, every lead form and every video embed (`INFRA-MIGRATION.md`, 31 Jul 2026). Deleting it would remove a working gate and a reviewed migration artefact.

**Done instead:** the status is now stated where someone would be misled — a header block in `scripts/audit-csp.mjs`, a line printed on **every build**, and a "Deployment reality" section in `CLAUDE.md`. The gap is now impossible to miss and impossible to forget quietly.

Per the standing rule on DNS: the pixel endpoint shares the zone and serves customer production, so no nameserver change belongs in a quick win.

---

## Phase 6 — Carried-over code health ✅ DONE (7 Aug 2026)

**`sessionStorage` in the diagnostic quiz flow** — `src/app/(en)/diagnostic-result/DiagnosticResultClient.tsx` reads `sessionStorage.getItem("diagnostic_answers")`, which violates the project's no-client-storage rule. Found while fixing that page's missing `<h1>`; out of scope for an SEO branch, and rearchitecting the quiz is a real change. Tracked separately.

---

## 3. What I deliberately do NOT propose

- **No new `/gdpr-analytics/*` country pages.** `GSC-ACTION-PLAN.md` P4 shows all three existing ones are invisible (<56 impressions/quarter) and that the CNIL fan-out is captured by a *blog post*, not by them. **Flag on my own work:** the `/gdpr-analytics/` hub I created adds a page to that cluster. It is justified — breadcrumbs on all three country pages pointed at it and returned 404, in the visible nav *and* inside `BreadcrumbList` JSON-LD — but if P4 resolves toward consolidation, the hub should be re-evaluated with the rest of the cluster, not defended separately.
- **No auto-generated meta descriptions.** Truncation that damages meaning is worse than a long description.
- **No `ISO 27001` / `SOC 2` claims.** A test now enforces this per sentence across all 223 Markdown twins.
- **No US-market content.** 14,161 impressions, 0.22% CTR, not the ICP.
- **No more regulatory explainer content** until the existing ~4,250 omnibus impressions convert.
- **No reintroduction of a hand-maintained sitemap exclusion list.**

---

## 4. Decisions needing a human

Carried forward from `GSC-ACTION-PLAN.md` §7, plus one new:

1. **German-language site — yes or no.** 921 impressions, second EU market, no content on its DPA. Opens i18n permanently.
2. **Verticals consolidation** (`SEO-STRATEGY.md` §6, overdue since 30 June). Data supports folding Finance/Healthcare/Education into `/for/regulated-industries`. Note this would also retire 6 of the heading-skip fixes in Phase 2 — worth resolving *before* Phase 2 touches `/for/*`.
3. **NEW — hosting migration, or accept the ceiling.** See Phase 5. If the answer is "accept", `vercel.json` should be deleted so it stops reading as live.

---

## 5. Sequencing

| Phase | Blocked by | Effort | Evidence class |
|---|---|---|---|
| 1 · CTR repair | — | 2 sessions | Measured (GSC §1.1, §5) |
| 2 · Question headings | Decision #2 for `/for/*` | 1 session | Best practice + GEO |
| 3 · ES glossary | — | 1 session | Measured (GSC §1.4, P3, P5) |
| 4 · Breadcrumbs on `/open` | — | <1 hour | Audit |
| 5 · Hosting | Decision #3 | n/a | Audit |
| 6 · sessionStorage | — | separate task | Project rule |

Phases 1, 3 and 4 are independent and can run in any order or in parallel. Phase 2 should wait on decision #2 only for the `/for/*` pages; the four FAQ components can ship immediately.

---

## 6. How this stays true

Every phase above closes a counter that the build already reports. `npm run build` prints the current numbers and fails on regression; `npm test` names the specific rule. This document should be re-derived from that output rather than edited from memory — that is what kept `GSC-ACTION-PLAN.md` §2 necessary.
