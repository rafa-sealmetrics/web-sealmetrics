# PRD — Content Strategy for a Consentless + Cookieless Analytics SaaS

**Version**: 1.0
**Date**: 2026-05-28
**Author**: Rafa Jiménez
**Scope**: pillar + cluster content roadmap for sealmetrics.com (EN + ES)
**Companion docs**: `CLAUDE.md`, `SEO-STRATEGY.md` (v1, Feb 2026 — this PRD supersedes its Phase 4-5 sections), `PRD.md`

---

## 1. Why now

The Feb 2026 `SEO-STRATEGY.md` defined the first cluster map. Since then:

- Site grew to **151 indexed URLs** (100 EN + 50 ES + home).
- We have **27 blog posts**, **15 glossary terms**, **3 case studies**, **5 comparison pages**, **11 vertical landings**, **3 role landings**, and a new transparency hub (`/open`).
- The May 2026 SEO audit (`FULL-AUDIT-REPORT.md`) scored content **86/100** but flagged structural gaps: only one true pillar with deep clustering (`/vs-ga4`), thin scaffolds on the other `/vs/*` pages, no dedicated *Cookieless Analytics* or *Consentless Analytics* pillar (only blog + glossary), no country-specific compliance pages, an empty `/platforms` hub, and an `/alternatives` cluster with one entry.
- We are shifting positioning from "cookieless" to **"complete data for eCommerce"** (March 2026), with three pillars: 70% complete data, 20% investment decisions, 10% compliance.

This PRD defines the **next 12 months of content** around that positioning, using a strict **hub-and-spoke** architecture so every page has a defined role in the topical map and a defined link path to conversion.

---

## 2. Content model

Five page archetypes. Each has a fixed role in the topic map and a fixed interlinking pattern.

| Archetype | Role | Word count target | CTA terminal |
|---|---|---|---|
| **Pillar** | Owns a head term, ~3K words, links to all spokes, links to `/demo` | 2,500–3,500 | `/demo` |
| **Cluster spoke** (blog, case study, /for/*, /vs/*) | Owns a long-tail term, links back to pillar | 1,500–2,500 | pillar → `/demo` |
| **Glossary term** | Owns a definitional query, citation-ready, very short | 400–800 | pillar |
| **Tool** (calculators, diagnostics) | Captures intent, generates lead | 600–1,000 (above tool) | `/demo` with pre-filled context |
| **Editorial** (`/open` chapters) | Authority, AI-citation, brand | 1,000–2,000 | `/open` index |

Internal-linking law: **traffic enters at spokes, equity flows to pillars, pillars push to conversion.** Spokes do not link directly to `/demo`. Pillars do.

---

## 3. The seven pillars

Today we have four pillar pages (`/product`, `/how-it-works`, `/security`, `/pricing`). We need **three more** to own the head terms a consentless + cookieless analytics SaaS must own.

### 3.1 Existing pillars — gaps to close

| Pillar | Status | Gap |
|---|---|---|
| `/product` | Strong | Add a "compare to GA360/Adobe" CTA strip — pricing buyers arrive here from comparisons |
| `/how-it-works` | Strong | Add a "first-party server-side collection" diagram + cite it from blog posts (no diagram = no LLM citation) |
| `/security` | Medium | Add honesty block ("we are not ISO 27001 / SOC 2 certified yet") + Dublin DC architecture diagram |
| `/pricing` | Medium | Add price anchor above the fold + a Cost-of-bad-data side-by-side vs GA360 |

### 3.2 New pillars to build

#### **Pillar A — `/cookieless-analytics`** (NEW)
- **Head term**: "cookieless analytics" (5K–10K searches/mo)
- **Audience**: CMOs and ecommerce managers researching the category
- **Promise**: definitive 3,000-word explainer of what cookieless analytics is, why it matters, how it differs from cookie-based, and what it does and doesn't capture
- **Anchors spokes**: 6 blog posts already exist (`cookieless-analytics-explained`, `cookieless-analytics-for-ecommerce`, `-for-hotels`, `-for-saas`, `consentless-analytics-for-dtc`, `what-is-cookieless-tracking`) → rewire them as spokes
- **Links to**: `/product`, `/how-it-works`, glossary `cookieless-analytics`, `/vs-ga4`, `/demo`
- **Priority**: P0

#### **Pillar B — `/consentless-analytics`** (NEW)
- **Head term**: "consentless analytics" / "analytics without consent" (1K–2K searches/mo, growing)
- **Audience**: DPOs, CMOs in EU post-Digital-Omnibus
- **Promise**: 3,000-word legal-grade explainer of the GDPR Art. 6(1)(f) basis, the ePrivacy interplay, country-specific authority guidance (CNIL, AEPD, Garante, ICO), and what "consentless" actually means architecturally
- **Anchors spokes**: existing posts `gdpr-analytics-without-consent`, `consent-banner-impact-on-analytics`, `cnil-self-assessment-published`, `uk-pecr-analytics-exemption`, `eu-digital-omnibus-cookie-banners-analytics` → rewire as spokes
- **Links to**: `/security`, glossary `gdpr-analytics-compliance` + `consent-management-platform`, country compliance pages (§5), `/demo`
- **Priority**: P0

#### **Pillar C — `/complete-data`** (NEW — positioning pillar)
- **Head term**: "complete analytics data" / "100% data capture" (head-of-funnel, brand-building)
- **Audience**: CMOs frustrated with 13% sampled GA4 data
- **Promise**: 2,500-word manifesto on why incomplete data leads to wrong investment decisions, with the 13%/87% framing, the cost of bad decisions, the architecture that makes 100% possible
- **Anchors spokes**: `why-ga4-shows-13pct-eu-traffic`, `ga4-data-sampling-problem`, `what-is-data-loss-in-analytics`, `analytics-scripts-costing-you-sales`, the `/data-loss-calculator` tool
- **Links to**: `/vs-ga4`, `/data-loss-calculator`, `/product`, `/demo`
- **Priority**: P0

After this batch, the homepage has **seven pillars to point to** instead of four: complete-data, cookieless-analytics, consentless-analytics, product, how-it-works, security, pricing.

---

## 4. Comparison cluster (`/vs-*`)

Today `/vs-ga4/` is gold-standard; `/vs/adobe-analytics/`, `/vs/ga360/`, `/vs/matomo/`, `/vs/piwik-pro/` are thin scaffolds (audit Medium-priority).

### 4.1 URL normalisation
- Move `/vs-ga4/` → `/vs/ga4/` (matches cluster convention). 301 the legacy URL. **Fixes audit Critical #3.**
- Update all internal links and `llms.txt` reference.

### 4.2 Bring scaffolds to gold-standard
- `/vs/ga360/` — Adobe-tier enterprise Google. Frame: same league, fraction of price.
- `/vs/adobe-analytics/` — enterprise legacy. Frame: complete-data + EU-native + AI supervision.
- `/vs/piwik-pro/` — EU enterprise privacy. Frame: last-click on 100% data vs Piwik's session-stitching.
- `/vs/matomo/` — open-source positioning. Frame: managed-service + AI vs DIY-ops.

### 4.3 Comparisons explicitly NOT to build
Per CLAUDE.md: never compare with Plausible, Fathom, Simple Analytics, Umami, Cabin, Mixpanel, Amplitude. Different category, commoditises us.

### 4.4 Schema fix
Replace empty `Table` `mainEntity` on every `/vs/*` with a populated `ItemList` of comparison criteria (audit Schema High). Single template, reused.

**Priority**: URL normalisation P0 (audit Critical), scaffold rewrite P1 (one per sprint).

---

## 5. Country compliance cluster (`/gdpr-analytics/[country]`) — NEW

Today we have zero country-specific compliance pages. They rank well, build EU credibility, and are exactly the page a DPO Googles when their CMO proposes SealMetrics.

| Page | Owner authority | Key term | Priority |
|---|---|---|---|
| `/gdpr-analytics/france` | CNIL exemption criteria | "analytics sans consentement france" / "cnil analytics" | P1 |
| `/gdpr-analytics/germany` | BfDI / DSK guidance | "analytics ohne einwilligung" | P1 |
| `/gdpr-analytics/spain` | AEPD analytics guidance | "analítica web sin consentimiento" | P1 |
| `/gdpr-analytics/italy` | Garante GA4 ban memory | "analytics senza consenso" | P2 |
| `/gdpr-analytics/uk` | ICO + PECR | "analytics without consent uk" | P2 |
| `/gdpr-analytics/netherlands` | AP guidance | P3 | |
| `/gdpr-analytics/portugal` | CNPD | P3 | |

Each page: 1,500–2,000 words. Cites the actual authority guidance (linked). Confirms SealMetrics meets the exemption. Links up to `/consentless-analytics` pillar.

Existing post `cnil-self-assessment-published` becomes a spoke of `/gdpr-analytics/france`.

**Priority**: P1 (France + Germany + Spain first — biggest EU markets where we sell).

---

## 6. Platform integration cluster (`/platforms/[stack]`) — EXPANSION

Today `/platforms/` is a hub page with FAQs but **zero child pages**. Audit-flagged.

| Page | Search term | Priority |
|---|---|---|
| `/platforms/shopify` | "shopify cookieless analytics" / "shopify gdpr analytics" | P1 |
| `/platforms/woocommerce` | "woocommerce analytics gdpr" | P1 |
| `/platforms/magento` | "magento analytics" / "adobe commerce analytics" | P2 |
| `/platforms/prestashop` | "prestashop analytics" | P2 |
| `/platforms/bigcommerce` | P3 | |
| `/platforms/salesforce-commerce` | P3 | |
| `/platforms/webflow` | P3 | |
| `/platforms/headless` | "headless analytics" / "next.js analytics" | P2 |

Each page: 1,200–1,800 words. Install steps, dataLayer/order reconciliation patterns, screenshots of admin install (no PII), code snippet. Links to `/cookieless-analytics` pillar.

**Priority**: Shopify + WooCommerce P1 (biggest eCom segments), rest staggered.

---

## 7. Use-case cluster (`/use-cases/[task]`) — NEW

Today we have role and industry verticals (`/for/*`), but no **task** verticals. Task pages rank for higher-intent commercial queries.

| Page | Search term | Priority |
|---|---|---|
| `/use-cases/revenue-attribution` | "last-click revenue attribution" / "cookieless attribution" | P1 |
| `/use-cases/conversion-tracking` | "conversion tracking without cookies" | P1 |
| `/use-cases/marketing-mix-modeling` | "MMM analytics" / "marketing mix modeling" (positioned as complement, not substitute) | P2 |
| `/use-cases/google-ads-attribution` | "google ads attribution without cookies" | P1 |
| `/use-cases/meta-ads-attribution` | "facebook ads attribution ios14" | P2 |
| `/use-cases/ga4-migration` | "migrate from ga4" / "ga4 alternative migration" | P1 |
| `/use-cases/server-side-tracking` | "server side tracking analytics" | P2 |

Each: 1,800–2,500 words. Use case, before/after, customer evidence, links to relevant pillar + comparison + `/demo`.

**Priority**: revenue-attribution + conversion-tracking + ga4-migration P1 (Q3 2026).

---

## 8. Verticals (`/for/*`) — RE-PRIORITISE

Today: 11 verticals, depth uneven. Per audit, several are thin scaffolds.

**Keep and deepen** (we sell into these): eCommerce, Hotels, SaaS, Agencies, Media.

**Decide and either deepen or sunset**: Finance, Healthcare, Education — currently aspirational, no case studies. If no client by end of Q3, demote to a single `/for/regulated-industries` page.

**Roles**: CMO, CTO, DPO already exist. Consider adding `/for/cfo` (the budget-defence angle is strong, audit content score on this would be high).

**Vertical depth bar** (per page): 1,800 words, named customer quote, one mini-case (anonymized OK), comparison-table vs the GA4 + CDP combo they're currently using, FAQ block (3–5 Q/A), CTA to `/demo` with vertical pre-filled.

---

## 9. Case studies — EXPANSION

Today: 3 cases (all hotels — Palladium, Dreamplace, "European hotel group"). Concentrated. We need diversity to talk to non-hotel buyers.

**Target Q3 2026**: 8 cases total.

| Case | Sector | Status | Priority |
|---|---|---|---|
| Palladium Hotel Group | Hotels | Live + named | — |
| Dreamplace Hotels | Hotels | Live | — |
| European hotel group (anonymized) | Hotels | Live | — |
| eCommerce — DTC fashion | DTC | Needed | P1 |
| eCommerce — marketplace | Marketplace | Needed | P1 |
| SaaS — B2B PLG | SaaS | Needed | P2 |
| Media — premium publisher | Media | Needed | P2 |
| Agency — performance | Agency | Needed | P2 |

Bar: named client OR specific revenue + segment + region; one chart (delta vs GA4); one direct quote from the buyer (named); links up to relevant `/for/*` and `/vs-*` pages.

The audit flagged a third `/case-studies/` card linking nowhere — kill it or build it. Decision required.

---

## 10. Glossary — EXPANSION

Today: 15 terms. Target Q4 2026: **40 terms**.

**Missing high-volume terms** (estimated by search trend tools):

- attribution-window
- conversion-attribution
- last-click-attribution
- cookieless-tracking (distinct from cookieless-analytics)
- cookieless-conversion
- pixel-tracking
- pseudonymization
- anonymization-vs-pseudonymization
- DPA (Data Processing Agreement)
- TPSR (Transfer Privacy and Security Review)
- legitimate-interest-analytics
- consent-mode-v2
- google-signals
- enhanced-conversions
- TCF-2.2
- privacy-sandbox
- topics-api
- chips (CHIPS partitioned cookies)
- ePrivacy-directive
- gdpr-article-6
- gdpr-article-22 (automated decisions)
- schrems-ii
- standard-contractual-clauses
- adequacy-decision
- gpr (Global Privacy Control)

Each: 400–800 words, QuickAnswer block (40–60 words) at the top for AI citation, definition, SealMetrics context (one paragraph), links to one pillar + 2 related terms.

**Priority**: Top 10 by search volume first (P1 batch — Q3 2026).

The audit flagged 4 existing terms (CMP, FPD collection, ITP, server-side-tracking) lacking QuickAnswer blocks → retrofit in the same sprint.

---

## 11. Tools / interactive

Today: `/data-loss-calculator`, `/growth-calculator`, `/free-audit`, `/diagnostic-result`, `/audit`.

**Add**:

- `/tools/cookie-banner-impact` — paste your URL, we'll fetch the consent rate and project lost data (uses public Common Crawl data, no scraping target site)
- `/tools/ga4-migration-checklist` — interactive checklist that emits a PDF with their config
- `/tools/cost-of-bad-data` — input revenue + media spend, output the value of the missing 87%

Each tool: above-fold input, below-fold methodology + one editorial paragraph explaining why this matters, CTA to `/demo` with the tool result pre-filled in the form.

**Priority**: cookie-banner-impact P2, others P3.

---

## 12. `/open` editorial

Already in flight (`plan_open_editorial.md`). Out of scope for this PRD except to confirm: `/open` is the **authority engine** — LLMs cite it, journalists quote it, partners link to it. Continue publishing on schedule. Do not consolidate with marketing pages.

---

## 13. Interlinking law (updates to v1 strategy)

Three changes to the v1 SEO-STRATEGY rules:

1. **Pillars are now seven, not four.** Homepage points to all seven. Add the three new pillars to the global nav under a "Why SealMetrics" dropdown.
2. **First mention of any pillar term in any spoke MUST link to the pillar.** Enforced via a lint rule (P2 — `scripts/check-interlinks.ts`).
3. **Comparison pages cross-link to other comparisons via "Other comparisons" footer** (already specified in v1, enforce on the audit's thin pages).

---

## 14. Roadmap

### Q3 2026 (Jun–Aug) — P0 + P1 batch

- Pillar A: `/cookieless-analytics` (build + rewire 6 existing spokes)
- Pillar B: `/consentless-analytics` (build + rewire 5 existing spokes)
- Pillar C: `/complete-data` (build + rewire 4 existing spokes)
- `/vs/ga4/` URL normalisation + 4 `/vs/*` scaffold rewrites
- `/gdpr-analytics/france`, `/germany`, `/spain`
- `/platforms/shopify`, `/woocommerce`
- `/use-cases/revenue-attribution`, `/conversion-tracking`, `/ga4-migration`
- 10 new glossary terms + QuickAnswer retrofit on 4 existing
- 2 new case studies (DTC eCommerce + marketplace)

### Q4 2026 (Sep–Nov) — P2 batch

- Remaining `/vs/*` scaffold work polished
- `/gdpr-analytics/italy`, `/uk`
- `/platforms/magento`, `/prestashop`, `/headless`
- Use-cases: `/marketing-mix-modeling`, `/google-ads-attribution`, `/server-side-tracking`
- 15 new glossary terms (continue toward 40 total)
- 2 new case studies (SaaS + Media)
- `/for/regulated-industries` consolidation (or keep all 3 if we land clients)

### Q1 2027 (Dec–Feb) — P3 batch + measurement

- Remaining `/gdpr-analytics/*` (NL, PT)
- Remaining `/platforms/*` (BigCommerce, Salesforce, Webflow)
- Remaining `/use-cases/*` (Meta ads, MMM finishing)
- Tools: `/tools/cookie-banner-impact`, `/cost-of-bad-data`
- Search-Console-driven refresh: rewrite the 10 lowest-CTR pages with new H1/title based on actual query data

---

## 15. Success criteria

| Metric | Baseline (May 2026) | Q4 2026 target | Q1 2027 target |
|---|---:|---:|---:|
| Indexed URLs (sitemap) | 151 | 220 | 280 |
| Pillar pages owned | 4 | 7 | 7 |
| Glossary terms | 15 | 30 | 40 |
| Case studies | 3 | 6 | 8 |
| `/vs/*` gold-standard pages | 1 (`/vs-ga4`) | 5 | 7 |
| Country compliance pages | 0 | 3 | 7 |
| Platform integration pages | 0 | 2 | 8 |
| Use-case pages | 0 | 3 | 7 |
| Organic sessions (GSC) | TBD baseline | +60% vs baseline | +150% vs baseline |
| Demo requests from organic | TBD baseline | +40% | +120% |

---

## 15b. Infra migration (Q3 2026 — added 2026-05-28)

**Context**: the May 2026 SEO audit surfaced two infrastructure blockers that GitHub Pages cannot solve from the repo:

- **Cache-Control headers** on `/_next/static/*` are fixed at `max-age=600` by GitHub's CDN (Fastly behind the scenes — not ours, no control).
- **Security headers** (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSP) cannot be set from a static-export repo on GitHub Pages.

Combined impact: roughly 1.3s mobile LCP not recoverable, full security-header credibility gap on a privacy-positioned vendor.

**Why deferred**: fixing requires either (a) Cloudflare in front of GitHub Pages, or (b) migrating the marketing site to Vercel/Netlify/Cloudflare Pages. Both touch DNS that also serves the **production pixel endpoint** (`pixel-pre.sealmetrics.com`), the **API** (`api.sealmetrics.com`), the **app** (`app.sealmetrics.com`), and the **Google Workspace MX records**. Not appropriate as a quick win.

**Decision**: plan as a Q3 2026 infra project, ideally aligned with the new-pillar batch deploy.

**Recommended approach**: **migrate the marketing site to Vercel** (or equivalent). Why:
- Headers + cache config live in `vercel.json` (in-repo, code-reviewed, reverts cleanly).
- Zero impact on `pixel-pre`, `api`, `app` — those keep their own DNS / IPs.
- Sole DNS change is the apex/`www` of `sealmetrics.com`. MX/TXT untouched.
- Deploy preview URLs per PR — also unlocks content QA before publish.

**Pre-migration checklist** (when we get to it):
1. Inventory all DNS records (snapshot done 2026-05-28 in this PRD).
2. Pick maintenance window (Saturday morning, low-traffic).
3. Set TTL on apex+www to 300s a week before, to shorten propagation.
4. Run side-by-side: Vercel deploy on a preview domain, smoke-test, only then flip DNS.
5. Monitor `pixel-pre` ingest rate for 24h post-flip — it shares DNS but not the apex record, should be untouched.
6. Add headers + cache rules in `vercel.json` as part of the same PR.

**Out of scope of this PRD section**: choice of host (Vercel vs Netlify vs CF Pages vs Cloudflare-in-front-of-GHPages). Decide in Q3 planning.

---

## 16. Out of scope

- Paid acquisition (separate doc)
- Email nurture (separate doc)
- Product release notes / changelog content (handled at `/changelog`)
- Sales enablement collateral
- Translations beyond ES — Italian, French, German planned for 2027 if numbers justify

---

## 17. Open decisions

1. **Verticals: keep finance/healthcare/education or sunset?** — depends on whether we land a client in any of them by Q3.
2. **Pricing of `/complete-data` vs `/cookieless-analytics` as primary nav** — both are valid head-pillars; pick one as the dominant homepage CTA.
3. **`/changelog` vs `/open/changelog`** — currently separate, may consolidate under `/open`.
4. **Spanish-only content?** — current strategy is full EN+ES parity. As we add 70+ new pages, that's 140 page-builds. Consider EN-first publication with ES translation 30 days later.
5. **The third `/case-studies/` card** — kill or build (audit-flagged). Recommend: build a DTC eCommerce case for it.
6. **Infra migration host** (see §15b) — Vercel / Netlify / CF Pages / Cloudflare-in-front-of-GHPages. Resolve in Q3 planning.

---

## Appendix A — page-count summary

| Cluster | Today | Q3 target | Q4 target | Q1 target |
|---|---:|---:|---:|---:|
| Pillars | 4 | 7 | 7 | 7 |
| `/vs/*` | 5 | 5 | 5 | 7 |
| `/for/*` | 11 | 11 | 9 (consolidation) | 9 |
| `/platforms/*` | 1 (hub) | 3 | 6 | 9 |
| `/gdpr-analytics/*` | 0 | 3 | 5 | 7 |
| `/use-cases/*` | 0 | 3 | 6 | 7 |
| `/case-studies/*` | 3 | 5 | 7 | 8 |
| Glossary | 15 | 25 | 30 | 40 |
| Blog | 27 | 35 | 42 | 50 |
| Tools | 5 | 5 | 6 | 8 |
| `/open` chapters | 8 (4 published) | 11 (8 published) | 11 (all published) | + new |

Total indexed URLs (EN-only, doubles with ES parity): 71 → 100 → 132 → 162.

---

**Next action**: get sign-off on §3 (three new pillars) and §5 (country compliance cluster) — these are the load-bearing decisions. Everything else is sequencing.
