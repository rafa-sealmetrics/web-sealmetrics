# SealMetrics · Search Console Action Plan

**Date:** 28 July 2026
**Source:** Google Search Console — last 28 days + last 3 months, domain property (`sealmetrics.com` + `docs.` + `app.` + `legal.`), by query, by page and by country
**Companion docs:** `SEO-STRATEGY.md` (v2.2, 7 Jul), `GEO-ANALYSIS.md` (4 May), `ACTION-PLAN.md` (3 May, audit-driven)

This plan is **data-driven, not audit-driven**. The May documents scored the site against best practice; this one starts from what people actually searched and what they did or did not click. Where the two disagree, §2 records which one is wrong.

---

## 0. TL;DR

Four findings reframe the previous plans:

1. **The site does not have a ranking problem. It has a CTR problem, and a query-match problem.** Five pages hold ~9,200 impressions and produce 9 clicks between them.
2. **`docs.sealmetrics.com` is the SEO engine; `sealmetrics.com` is a brand landing page.** Docs earns ~61 non-brand clicks a quarter, the marketing site ~25, and its homepage clicks are almost entirely branded.
3. **AI retrieval is already working and is invisible in click metrics.** We rank position 1.0–7.6 on natural-language prompt queries and earn zero clicks from them, which is the expected outcome, not a failure.
4. **Google does not know what entity we are.** It uses `/pricing` as filler for "small brand + pricing" queries — Searchmetrics, Sealights, Seal LIMS, Semeon, Lifemetrics, Seedepth, Salience Insight.

---

## 1. The evidence

### 1.1 The CTR collapse

| Page | Impr. (3mo) | Pos. | Clicks |
|---|---:|---:|---:|
| `docs/compliance/omnibus/edpb-edps-opinion` | 3,496 | 8.2 | **0** |
| `/blog/gdpr-analytics-without-consent` | 2,625 | 8.3 | **0** |
| `/pricing` | 1,456 | 19.8 | 8 |
| `/vs/adobe-analytics` | 1,273 | 15.7 | **0** |
| `/glossary` | 384 | 40.6 | 1 |

The counter-example is on the same property and at a similar position:

| `docs/reports/insights/gtm-msr-appspot-and-tag-blocking` | 743 | 6.4 | **33 (4.4%)** |
|---|---:|---:|---:|

**Why that one works:** "what is `gtm-msr.appspot.com` and is it blocking my tags?" cannot be answered in a snippet. The reader has to open the page and compare against their own setup. The zero-click pages answer questions an AI Overview closes in two sentences.

> **Operating principle:** prefer queries whose answer cannot be consumed in the SERP — lookups, checkers, calculators, tables you have to walk, proprietary measurement. Everything else earns impressions (useful for GEO) and should be *counted* as impressions, not as a click failure.

### 1.2 The two zero-click pages are not the same problem

Query-level inspection settled it:

- **`edpb-edps-opinion`** — queries are verbatim citation lookups: `edpb edps joint opinion 2/2026 digital omnibus article 88b`, `…pdf`, and one 82-impression query that is a sentence pasted from the document. These people want the EDPB's PDF. **The traffic has no value. Do not optimise, do not write more of this.**
- **`/blog/gdpr-analytics-without-consent`** — 119 of 212 visible impressions are **25 near-identical permutations** of one CNIL question, 15 of them containing the word `official`. That is LLM query fan-out, and we sit at **position 6.8–10.5 across all of them**. This is the most valuable asset in the dataset.

### 1.3 Page type, not page quality (the Adobe finding)

| Page | Pos. | Query shape |
|---|---:|---|
| `/vs/ga360` | 9.7 | head-to-head |
| `/vs/piwik-pro` | 11.6 | head-to-head |
| `/vs/adobe-analytics` | **15.7** | listicle |
| `/alternatives/google-analytics` | **20.6** | listicle |

`adobe analytics alternative` (324) and `adobe analytics alternatives` (261) are listicle intent answered with a head-to-head. Until 28 July the site had **no list format anywhere** — `/alternatives/google-analytics` was 50 lines rendering the same head-to-head component.

### 1.4 Geography

| Market | Impr. | Clicks | CTR |
|---|---:|---:|---:|
| United States | 14,161 | 31 | **0.22%** |
| Spain | 1,855 | 210 | 11.3% |
| United Kingdom | 1,910 | 16 | 0.84% |
| Germany | 921 | 8 | 0.87% |
| Netherlands | 607 | **0** | 0% |
| France | 367 | 6 | 1.6% |
| Austria | 338 | **0** | 0% |
| Italy | 294 | 5 | 1.7% |
| Belgium | 228 | **0** | 0% |

The US is 60% of impressions and 8% of clicks, and is not the ICP. **EU core (ES, DE, FR, IT, NL, AT, BE) is ~4,610 impressions and 41 clicks** — that is the real target. Spanish pages rank at position 4.7 average on a seventh of the English volume; where the language exists, it works.

### 1.5 AI retrieval is live

| Query | Impr. | Pos. |
|---|---:|---:|
| `alternatives and cheap version of enterprise display ad analytics tools in spain` | 17 | **1.0** |
| `best platform for full-resolution analytics without sampling` | 41 | **2.9** |
| `evaluate adobe analytics compared to competitors on data & analytics.` | 26 | **3.9** |
| `evaluate adobe compared to competitors on data & analytics.` | 55 | 7.6 |

Sentence-case, trailing periods, natural language. These are assistant fan-out queries. Zero clicks is the correct outcome — the answer is rendered, not clicked.

---

## 2. Corrections to existing documents

Other sessions read these files and act on them. Each item below is verified wrong as of 28 July 2026.

| Doc | Claim | Reality |
|---|---|---|
| `SEO-STRATEGY.md` MED-1 | Add `numberOfEmployees` to Organization schema | **Rejected.** Optional in schema.org, no ranking benefit, and a small headcount is a liability selling to enterprise buyers. `legalName` + `vatID` + full `address` shipped instead. |
| `GEO-ANALYSIS.md` G2 | Reddit and YouTube missing from `Organization.sameAs` | Both present. Gap closed after the doc was written. |
| `GEO-ANALYSIS.md` | "llms.txt — 0 drift vs sitemap" | **22 URLs missing** (sitemap 184, llms.txt 162). Being reconciled separately. |
| `SEO-STRATEGY.md` §3 | `/gdpr-analytics/*` cluster "on track" | All three country pages are **invisible** — under 56 impressions combined per quarter. The CNIL fan-out is captured by a *blog post*, not by them. |
| `llms.txt` | `/alternatives/google-analytics` = "8 Google Analytics alternatives compared" | Compared none. **Corrected 28 July.** |
| `SEO-STRATEGY.md` §6 | Verticals consolidation decision due 30 Jun | **Overdue.** `/for/finance` is 388 impressions at position 71.2 on junk matches (`watch banking analytics`, `real-time data validation for financial transactions`). Data supports consolidation. |

---

## 3. Shipped 28 July 2026

| Change | Addresses |
|---|---|
| `docs` `robots.txt` — Googlebot/Bingbot excluded from `/docs-raw/` and `llms-full.txt` | Preventive. GSC showed **zero** impressions for both; the duplicate-content hypothesis was **false**. Landed because a `.txt` cannot carry a canonical and GitHub Pages gives us no `X-Robots-Tag`. |
| `/searchmetrics-vs-sealmetrics` | 831 impr/28d of Searchmetrics demand landing on `/pricing` |
| `Organization` `legalName` + `vatID` + `PostalAddress` | Entity confusion (§0.4) |
| `/alternatives/adobe-analytics` | ~723 impr of listicle-intent Adobe demand |
| `/blog/is-adobe-analytics-gdpr-compliant` | 61 impr, unserved, highest-authority topic |

**Closed without action:** the `edpb-edps-opinion` impression drop on 7 July. Not an incident — a February news cycle decaying, on a page whose traffic was citation lookups. Site-wide decline over the same window was −21%, consistent with July seasonality in a Spain-led market.

---

## 4. The plan

Ordered by expected value per unit of effort. Each item names the evidence.

### P1 — Third-party domain and cookie directory *(docs)*

**Why first:** it is the only content format on the property with a proven healthy CTR (4.4%), and we would be replicating a validated pattern rather than betting on a new one. Audience is DPOs and implementers running cookie audits — ICP-adjacent. Feeds `/consentless-analytics`.

One page per domain, following `gtm-msr-appspot-and-tag-blocking`: `demdex.net`, `omtrdc.net`, `everesttech.net`, `scorecardresearch.com`, `doubleclick.net`. Source data already exists in `/blog/analytics-tools-cookies-cataloged` and `/blog/analytics-tools-external-domains`.

**Evidence:** ~230 impressions already — `demdex analytics cookies` 85 (pos 10.2), `attacat cookie audit tool` 65 (28.1), `gtm-msr` variants 70 (1.0–6.1), `toolscookies` 17 (6.3), `appspot.com what is` 20 (9.2). `demdex` also links the directory to the Adobe cluster shipped 28 July.

**Lives in docs, not the blog** — that is where the format demonstrably converts.

### P2 — Push `analytics without personal data gdpr` to top 3

59 impressions at **position 9.0**. The only query in the dataset with volume, human phrasing *and* commercial intent. Its siblings are weak and worth pulling up in the same pass: `gdpr compliant analytics` (50, pos 50.6), `analytics tools without cookie consent banners` (pos 12.5), `gdpr anonymous tracking` (pos 26.0), `gdpr analytics` (115, pos 27.7).

### P3 — Turn `/glossary` into a real hub

384 impressions at position 40.6 producing 1 click, against 318 impressions of glossary-intent queries — `analytics glossary` 178 (40.4), `google analytics glossary` 60 (52.5), `web analytics glossary of terms` 50 (43.9), `web analytics glossary` 30 (44.2). Nobody competes hard here. Needs an A–Z index with definitions **on the page**, not a link list.

### P4 — Replicate the CNIL fan-out pattern per regulator

We capture 25 CNIL permutations at position 6.8–10.5 because of one interpretive blog post. **The format that wins fan-out is the interpretive explainer, not the country landing page** — and `/gdpr-analytics/{france,germany,spain}` are invisible, which is both a finding and a cannibalisation problem to resolve first.

Order by market value: **DE → NL → IT → AT/BE**. Germany takes two gaps at once — 921 impressions and no German-language site.

**Blocked on a product decision:** doing this properly for Germany means opening i18n, which multiplies every future page by language. See §7.

### P5 — Sampling / full-resolution

`analytics sampling` 200 (pos 26.4), `google analytics sampling` 44 (37.5), `data sampling` 28 (60.6), `what is data sampling` 27 (41.5), plus the prompt query `best platform for full-resolution analytics without sampling` at **position 2.9**. `/glossary/data-sampling` sits at 31.6 with 382 impressions.

### P6 — `/for/agencies` + the Supermetrics complementarity piece

`/for/agencies` is at position 58.2 (269 impr) and `/es/for/agencies` at 54.5 (228). Around 350 impressions of agency-reporting demand sit unserved: `client reporting for marketing agencies` 80, `google analytics supermetrics` 92, `que es supermetrics` 68, `saas marketing agencies analytics reporting` 18.

**Angle:** Supermetrics is transport, SealMetrics is a source. *Your pipeline is only as complete as its sources.* Nominative use only — **no claim of an official connector or partnership.**

### P7 — Adblockers and publishers

`adblocker analytics` 76 (pos 19.3), `ad blockers impact tracking` 47 (**9.9**), `analytics for publishers` 84 (35.4), `ad revenue attribution` 83 (74.9). `/glossary/ad-blocker-analytics-impact` is at 14.1, `/for/media` at 27.4.

### P8 — Housekeeping

- Reconcile the 22 missing `llms.txt` URLs.
- Resolve the `SEO-STRATEGY.md` §6 verticals decision (overdue since 30 June).
- Audit the 10 remaining remote branches — six are `claude/*` from prior sessions. On 28 July `main` was red for 12 minutes because parallel sessions collided.

---

## 5. Measurement

Two games, two metrics. Measuring them together is what made "position 8, zero clicks" look like a catastrophe when one of those pages was doing its job.

| Game | Metric | Now | 90-day target |
|---|---|---:|---:|
| Human commercial search | Non-brand clicks | ~180/quarter | 400 |
| Human commercial search | CTR of the five §1.1 pages | ~0.1% | 2% |
| AI retrieval | Impressions on queries >6 words | ~150 | 500 |
| AI retrieval | Fan-out permutations at pos <10, by regulator | 119 (CNIL only) | 500 across 4 |
| Market | EU-core impressions | 4,610 | 7,000 |
| Brand health | `sealmetrics` ÷ `searchmetrics` impression ratio | 1:4 | improving |

**Do not put CTR on the AI-retrieval rows.** It will stay near zero and it is supposed to.

---

## 6. Do not do

- **Do not chase US volume.** 14,161 impressions, not the ICP.
- **Do not write more regulatory explainer content** until the existing stock converts. ~4,250 omnibus impressions at position 8 currently produce zero clicks.
- **Do not attack `cookieless` as a head term yet.** We are at position 26.6 there and **9.6–9.9 on `consentless`** — a term we can own outright. Win that first and use it as leverage.
- **Do not build "Supermetrics alternative".** We are a source for it, not a competitor to it.
- **Do not expand the Searchmetrics play beyond the two pages.** The traffic does not convert; the value was freeing `/pricing`.
- **Ignore as noise:** `institutional tear sheet verification` (138, pos 108), `sleepeasy365` (126), `alternativas a porter metrics` (136), `hostingue`, `health tprm`, `sizmek api`, `baremetrics*`, `rescuemetrics`, and every query carrying `-site:reddit.com…` operators — those are brand-monitoring scrapers, not people.

---

## 7. Decisions needing a human

1. **German-language site — yes or no.** 921 impressions, second EU market, no content on its DPA. Opens i18n permanently. *This is a product decision, not a content one.*
2. **Verticals consolidation** (`SEO-STRATEGY.md` §6, overdue since 30 June). Data supports folding Finance/Healthcare/Education into `/for/regulated-industries`.
3. ~~**`dateModified` hygiene.** `blog-modified.json` derives from git mtime, so a lint-only commit bumps a post's freshness signal. Worth deciding whether that field should be hand-curated.~~

   **Resolved 2026-07-30.** This call was right, and it landed before the failure it predicted got worse. The trailing-slash sweep then re-dated 30 unchanged posts, exactly as described. Decision: hand-curated. Every post now declares `dateModified` in its own `articleSchema({ ... })` call, 30 false dates were corrected (#45), and the git-derived map was deleted rather than left as a fallback (#53). `CLAUDE.md` carries the rule.

---

## 8. Provenance

Every figure above comes from the Search Console exports of 28 July 2026. Two hypotheses raised during the analysis were **tested and discarded**, and are recorded so nobody re-runs them:

- *"The plain-text mirrors created duplicate content and cost us the omnibus rankings."* — **False.** Zero impressions for `/docs-raw/` and `llms-full.txt`; Google never indexed them.
- *"`/pricing` underperforms because its meta description does not lead with a price."* — **False.** It does (`from €499/mo`). The page ranks for the wrong query; no rewrite fixes that.
