# Blog Expansion Briefs · Sprint 3 Content Roadmap

Date: 2026-05-03 · Owner: content team · Source: Sprint 3 plan S3.4

The 2026-05-03 SEO audit found **20 of 27 EN blog posts are under 1000 words** and **0 are over 1500**, well below Google's QRG comprehensive-coverage floor for blog content. This document picks the 5 highest-intent posts and gives each a content brief: target word count, required sections, original data points to add, expert quotes to source, and citations.

The infrastructure is already in place to expand them — `dateModified` is auto-pulled from git mtime, so the moment a post is touched, AI engines and Google see fresh-content signals.

---

## Selection criteria

Posts ranked by **internal-link recipient count × commercial intent**. Top 5:

| # | Slug | EN words today | Target | Cluster | Why |
|---|---|---|---|---|---|
| 1 | `gdpr-analytics-without-consent` | ~900 | 2200 | Compliance pillar | Highest-intent compliance keyword for DPOs reviewing analytics |
| 2 | `eu-digital-omnibus-marketer-guide-2026` | ~1100 | 2000 | News/regulatory pillar | Captures "EU Digital Omnibus" search wave through 2026 |
| 3 | `ga4-alternatives-enterprise` | ~700 | 2000 | Comparison pillar | Direct enterprise-buyer query, links to all 4 /vs/* pages |
| 4 | `ga4-data-sampling-problem` | ~800 | 1800 | Data quality pillar | Pairs with `/glossary/data-sampling` for the technical buyer |
| 5 | `cookieless-analytics-for-ecommerce` | ~1200 | 2200 | eCommerce pillar | Highest intent in the eCommerce vertical |

---

## Brief 1 · gdpr-analytics-without-consent → 2200 words

**Working H1** (do not contain "cookieless"): *Compliant Analytics Without Cookie Banners: A DPO's Guide to GDPR Architecture*

**Required sections** (in order):
1. **TL;DR** (already present, expand to 4 bullets)
2. **The legal text** (NEW, 250w) — quote Article 6, Article 5(3) ePrivacy, Recital 26 (anonymous data); explain in plain English what each means for analytics
3. **The CNIL audience-measurement exemption** (NEW, 350w) — full criteria list (statistical purpose, no profile creation, configurable retention, opt-out, etc.); cite CNIL deliberation 2020-091; show how SealMetrics architecture meets each criterion
4. **The DPK (Germany) and AEPD (Spain) parallels** (NEW, 250w) — what each authority has said about cookieless analytics; link to source documents
5. **The "personal data" question** (existing, expand to 400w) — what makes data "personal" under GDPR; aggregate counts vs identifiers; cite Article 4(1) and Recital 26
6. **Three architectures, three legal positions** (NEW table, 200w) — GA4 + consent banner / GA4 + Consent Mode v2 / SealMetrics-style; for each: lawful basis, banner needed, DPIA needed, sub-processor count
7. **What a DPO sign-off looks like** (NEW, 300w) — checklist a DPO can run in 30 minutes; what documentation to demand from the vendor (DPA, TPSR, architecture diagram, sub-processor list)
8. **Where this approach has limits** (NEW, 200w) — be honest about what GDPR-by-architecture does NOT cover (advertising pixels still need consent; CRM personal data still needs lawful basis); link to /security
9. **Sources & further reading** (NEW, 100w) — CNIL, AEPD, DSK official docs

**Original data to add:**
- Compliance audit time table: GA4 + Consent Mode (3-4 weeks DPIA) vs SealMetrics (1-meeting review). Source: founder interview.
- Sub-processor count comparison: GA4 (12+ Google entities, US transfers) vs SealMetrics (3, all EU)
- Cost-of-non-compliance reference: 2024 CNIL fines on Google (€150M Dec 2021, €60M Jan 2024) — link to original CNIL press releases

**Expert quotes to source** (need 2):
- DPO at a named EU eCommerce client — on what made them sign off on SealMetrics in one meeting
- An external EU privacy lawyer — on the legal status of GDPR-by-architecture (1-paragraph quote, attributed)

**Internal links to add:**
- `/glossary/gdpr-analytics-compliance` (already has ES translation since Sprint 3)
- `/glossary/consent-management-platform`
- `/glossary/cookieless-analytics`
- `/security`
- `/case-studies/palladium-hotel-group` (Toni Andújar — direct, named client)
- `/blog/cnil-self-assessment-published`

**External authority links:**
- CNIL deliberation 2020-091 (audience-measurement criteria)
- EDPB guidance on consent
- Court of Justice of the EU rulings on Schrems II

---

## Brief 2 · eu-digital-omnibus-marketer-guide-2026 → 2000 words

**Working H1**: *EU Digital Omnibus 2026: What Marketers Need to Decide Before Q3*

**Required sections:**
1. **What the Digital Omnibus actually changes** (NEW, 400w) — concrete article-by-article changes that affect ad-tech, analytics, consent and ePrivacy; cite official EU Commission proposal text
2. **The cookie banner timeline** (NEW, 300w) — what the Omnibus says about banner fatigue, browser-level signals, the "do-not-track" revival; what's enforceable when
3. **3 marketer scenarios under the new rules** (NEW, 600w) — paid media director / DPO / CRO each get a 200w playbook for what to change in their stack before Q3 2026
4. **The ePrivacy Regulation tie-in** (NEW, 300w) — how the Omnibus interacts with the still-pending ePrivacy Regulation; what the practical effect on tracking will be
5. **Tools that survive the rule change** (NEW, 250w) — the architectural properties (no cookies, no identifiers, EU hosting) that future-proof a marketing measurement stack
6. **Action checklist by Q1 / Q2 / Q3 2026** (NEW, 150w)

**Original data to add:**
- Survey of 50+ EU marketers on Omnibus awareness (commission a quick LinkedIn poll if data not already collected)
- Side-by-side article diff: today's ePrivacy + GDPR vs Omnibus draft

**Expert quotes:**
- An EU privacy lawyer on the realistic enforcement timeline
- A CMO at an EU SaaS or eCommerce on how they're preparing

**Internal links:**
- `/blog/eu-digital-omnibus-cookie-banners-analytics`
- `/blog/uk-pecr-analytics-exemption`
- `/glossary/consent-management-platform`
- `/blog/cnil-self-assessment-published`

---

## Brief 3 · ga4-alternatives-enterprise → 2000 words

**Working H1**: *GA4 Enterprise Alternatives for European Companies (2026 Comparison)*

**Required sections:**
1. **Why "GA4 alternative" is the wrong framing** (NEW, 250w) — for enterprise, the choice is GA360 / Adobe / Piwik PRO / SealMetrics, not Plausible/Fathom. Frame the categories explicitly.
2. **Enterprise selection criteria** (NEW, 350w) — 8-criterion checklist: data completeness, EU residency, attribution model, AI agent readiness, BigQuery export, RBAC + SSO, SLA, vendor risk score
3. **GA360** (existing/expand, 250w) — pricing reality check ($150K/yr starting), what it adds vs free GA4, where the EU data gap still applies
4. **Adobe Analytics** (existing/expand, 250w) — pricing reality ($100K+/yr), implementation timeline (typically 4-6 months), the consultant tax
5. **Piwik PRO** (existing/expand, 250w) — EU hosting + cookie-based architecture; where it works, where it doesn't
6. **SealMetrics** (NEW, 250w) — be the honest comparison; what we are, what we're not
7. **Decision matrix** (NEW table, 200w) — for each tool: best-fit profile (e.g., "GA360 if you're already deep in Google Marketing Platform")
8. **Migration considerations** (NEW, 200w) — none of these require ripping out GA4; all run alongside

**Original data to add:**
- Pricing transparency table (real public/leaked enterprise quotes, dated)
- Implementation timeline by tool (from named customers, anonymized stages)
- AI-readiness rubric: which tools expose MCP, BigQuery streaming, structured citations

**Internal links:**
- `/vs/ga360`, `/vs/adobe-analytics`, `/vs/piwik-pro` (link from each respective section)
- `/glossary/data-sampling`, `/glossary/analytics-data-residency`

---

## Brief 4 · ga4-data-sampling-problem → 1800 words

**Working H1**: *Why GA4 Sampling Breaks Enterprise Decisions (and How to Verify It on Your Property)*

**Required sections:**
1. **Where sampling kicks in** (NEW, 300w) — the 10M event threshold in Explorations, the unsampled-export limit in standard GA4 vs GA360
2. **How to detect sampling on your own GA4** (NEW, 350w, with screenshots) — the yellow shield icon, the "based on 10% of sessions" notice, what each means
3. **The compounding effect with consent rejection** (NEW, 400w) — 13% observed traffic × statistical sampling = decision basis on <2% of real activity; show the math with named EU eCommerce numbers
4. **Adobe + Piwik PRO sampling thresholds** (NEW, 250w) — for completeness; cite vendor documentation
5. **Architectural alternatives** (NEW, 250w) — what makes a measurement system sampling-free by design (no cookies, server-side counting, full export); link to /how-it-works
6. **Action checklist** (NEW, 250w) — 5-step audit: how to verify your GA4 sampling rate, then how to decide whether it changes your decisions

**Original data:**
- Real GA4 property screenshots (anonymized) with sampling notices
- Math worksheet: traffic × consent rejection × sampling threshold × bias = decision error rate

**Internal links:**
- `/glossary/data-sampling` (existing definition)
- `/glossary/data-loss-in-analytics`
- `/blog/why-ga4-shows-13pct-eu-traffic`

---

## Brief 5 · cookieless-analytics-for-ecommerce → 2200 words

**Working H1** (already updated in Sprint 3): *How EU eCommerce Captures 100% of Revenue Without a Cookie Banner*

**Required new sections** (existing post is solid 1200w; add 1000w):
1. **Shopify + WooCommerce + Magento reconciliation patterns** (NEW, 500w) — concrete: where to read SealMetrics totals back into the platform's order export; what counts as "in agreement" (15-20% rule)
2. **Three real reconciliation scenarios** (NEW, 400w) — DTC fashion, marketplace seller, B2B eCommerce; for each: GA4 reported vs Shopify/Mage backend vs SealMetrics aggregate
3. **What to tell your CFO** (NEW, 200w) — the honest framing: this isn't a magic 30% revenue lift; it's making the 30% you couldn't attribute defensible

**Original data:**
- Per-platform reconciliation walkthrough (one screenshot each from Shopify, WooCommerce, Magento)
- A 90-day comparison table from a named DTC client (need permission)

**Expert quote:**
- An eCommerce director at a named DTC brand — on the moment the CRM reconciliation made budget reallocation defensible

---

## Production checklist (per post, repeat 5×)

- [ ] Draft to target word count
- [ ] All required new sections present
- [ ] Original data tables / screenshots added (real, not stock)
- [ ] At least 2 expert quotes named (with permission)
- [ ] Authority citations (CNIL, EDPB, Google docs, etc.) linked, not just mentioned
- [ ] All internal links inserted contextually within prose (not "Related: ..." lists)
- [ ] H1 does not contain "cookieless" / "Cookieless" (Sprint 3 rule)
- [ ] H2 does not contain "cookieless" / "Cookieless" except where the term is the topic of definition
- [ ] Last-click language used consistently; never "multi-touch attribution" as feature
- [ ] CLAUDE.md banned-claims sweep: ISO/SOC, Frankfurt, Plausible/Fathom in same league
- [ ] Author bio + Person schema present (Rafa or named contributor)
- [ ] `dateModified` will auto-update from git mtime — no manual action
- [ ] Per-post OG image (Sprint 4 deliverable, not blocking this post)

---

## Estimated effort

5 posts × 6h average (research, draft, edit, screenshot, source quotes) = **30h content work**.

Recommendation: 1 post per week → done by 2026-06-07. Each post lifts the cluster's pillar pages with fresh internal links + dateModified signals.

---

## Per-post OG image generation (S3.2 deferral)

Postponed to **Sprint 4 (S4.X)**. The work plan when picked up:

1. `npm install --save-dev satori @resvg/resvg-js` (or use built-in `next/og`)
2. Create `scripts/generate-og-images.mjs`:
   - Read `src/lib/content/blog.ts` via a small JSON-export step in prebuild
   - For each `{ slug, title, category, author, date }`, render an OG SVG via satori (1200×630)
   - Convert SVG → PNG via @resvg/resvg-js
   - Write `/public/og/blog/<slug>.png`
3. Wire into `prebuild` after `blog-modified.json` step
4. Update `articleSchema()` to set `image: \`${SITE_URL}/og/blog/${slug}.png\`` when slug is detected
5. Update each post's `metadata.openGraph.images` to point at the per-post file

Until then, all posts share `/og-image.png`. Acceptable; not blocking ranking.
