# SealMetrics — Content Quality Audit

Date: 2026-05-28
Auditor: content-quality skill (Sept 2025 Google QRG criteria)
Scope: ~80 routes under `/(en)/` (homepage + pillars + 27 blog posts + 15 glossary + 4 `/vs/*` + 11 `/open/*` + verticals + case studies + legal)
Method: full-tree grep + targeted page reads, then mapped against the project's banned-claim policy, E-E-A-T heuristics, and AI citation criteria.

Overall content quality score: **86 / 100**
- E-E-A-T: 24/30 (Experience strong, Expertise + Trust strong, Authoritativeness still emerging)
- Substance & word count: 22/25
- AI citation readiness: 22/25
- Editorial tone consistency: 8/10
- Banned-claim compliance: 10/10 (no violations found; see note below)

---

## CRITICAL — banned-claim violations

None found. Every prohibited phrase that appears in the codebase appears in **negation context** (the site denouncing the practice) or as a **glossary definition** that explicitly states SealMetrics does not do it.

For the record, here is what the audit verified, with quoted evidence:

### "Multi-touch attribution" — every usage is denial or definition
- `/open/what-we-wont-do` chapter 09, line 684: title is **"We won't do multi-touch attribution"**, body: *"We do last-click on 100% of events. It's an older model. It's a less impressive demo. It moves budget more correctly because it isn't making up the inputs."*
- `/glossary/multi-touch-attribution` line 47–49: heading **"Why does SealMetrics not implement multi-touch attribution?"** with *"SealMetrics is designed as anonymous, aggregate event measurement. No per-user identifier is ever created."*
- `/blog/multi-touch-attribution-complete-data` — entire post argues MTA fails without complete data; SealMetrics never claims to do it.
- `/blog/cookieless-analytics-for-ecommerce` line 163: *"**No multi-touch attribution.** Last-click only."*
- `/glossary/cookieless-analytics` line 52: *"does not support multi-touch attribution models."*

All compliant with `BANNED Claims` policy (project memory `feedback_banned_claims.md`).

### "Customer journey / session reconstruction / individual tracking" — same pattern
- `/open/what-we-wont-do` line 721–730: **"We won't reconstruct sessions"** — *"Session reconstruction stitches events together by user identifier into a chronological journey… To do it, you need a persistent identifier per visitor… What we do instead is aggregate event measurement."*
- `/open/what-we-wont-do` 1948-1957 lists *"You need individual-level behavioural tracking. Session reconstruction, cross-device journey mapping, and CDP-style profiles are **not what we ship**."*
- `/vs/adobe-analytics` and `/vs/matomo` reference **Adobe's product name "Customer Journey Analytics"** (CJA) as a third-party product. That is a competitor product reference, not a self-claim — compliant.
- `/blog/cookieless-analytics-for-hotels` and `/blog/cookieless-analytics-for-saas` metadata both say *"without cookies, guest journeys or user-level tracking"* — explicit denial. Compliant.

### "ISO 27001 / SOC 2"
- Zero matches sitewide. Compliant with the "never claim" policy.

### "Frankfurt / Germany as data centre"
- No false claim. Every Germany reference is either (a) consent-rejection rate stats in EU markets (Germany 60–70% rejection), or (b) calculator country options, or (c) the **Piwik PRO competitor** description ("EU (Germany options)" in `VsData.tsx` line 202 — refers to Piwik PRO's residency, not SealMetrics). Dublin/Ireland is consistently named as the only SealMetrics location.

### Personal email exposure
- No `rafa@sealmetrics.com` anywhere. Role-based addresses only: `open@`, `privacy@`, `legal@`, `dpo@`. Compliant.

### Emojis
- No emojis in user-facing copy. The check (`✓` / `✕`) glyphs in `PricingV3Sections.tsx`, `HomeV3Part2.tsx`, `HeroDashboard.tsx` are typographic checkmarks/X used as table affordances — these are characters, not emoji code points, and they are visually neutral. Not in violation of the "no emojis" rule. **OK to keep.**

---

## HIGH — E-E-A-T gaps and thin content

### H1. Two case study cards link nowhere
**File:** `/case-studies/page.tsx` line 39–46
The Palladium + Dreamplace cards both link to dedicated case studies. The DTC coffee brand card has no `href` and renders as a static block. For a top-of-funnel proof page, one unclickable card out of three reads as filler. Either (a) write the DTC anonymous case as a dedicated page (`/case-studies/dtc-coffee-brand`) following the Dreamplace template, or (b) remove the card and replace with a third *named* customer once a second client signs off.

### H2. `/case-studies` index has only 1 named client
The page header promises *"Featured this month: Palladium Hotel Group… Other cases are anonymised until the client signs off."* — but only Palladium and Dreamplace are named. Dreamplace's Eduardo Martin is cited, which is good. Push to surface a third named customer (one of the 2,000+ accounts referenced on `/about`) to substantiate "real teams, real numbers" beyond hospitality. Currently the proof tier is 100% hotels — weakens the eCommerce/DTC positioning.

### H3. `/about` "2,000+ active accounts" is unsourced
**File:** `/about/page.tsx` lines 17, 55, 107, 112
The 2,000+ customer figure appears four times on `/about` and once on the homepage QuickAnswer block (line 126 references "European teams" without the number). It is a major E-E-A-T claim for the page. Either:
- Link the figure to a published customer logo strip, or
- Cite the asof-date and counting method (e.g., *"2,000+ accounts as of Q1 2026, including paid + trial active"*), or
- Add a JSON-LD `Organization.numberOfEmployees`-style assertion via a `statisticClaim` schema.

The "5+ yrs in production" and "99.99% uptime SLA" tiles next to it inherit the same evidence gap.

### H4. `/about` author block is single-person and link-thin
**File:** `/about/page.tsx` lines 81–95
Only LinkedIn is linked from Rafa Jiménez's profile card. For founder-led E-E-A-T, add (a) a link to `/authors/rafa-jimenez` (which already exists and has rich content), (b) a portrait photo (currently a gradient circle with "RJ" initials), and (c) at least one external authority signal (conference talk, podcast, published article).

### H5. `/security` understates the trust-signal opportunity
**File:** `/security/page.tsx` lines 77–94
The "Compliance posture" grid lists six frameworks (GDPR, ePrivacy, Schrems II, EU-hosted Dublin, DPA included, TPSR package). Per project rules, ISO 27001 / SOC 2 cannot be claimed yet — that's correct. **But the page should explicitly say "we are working toward ISO 27001" or "ISO 27001 is on the 2026 roadmap"** if true. CISO buyers will look for it and the absence reads as evasion. If not on the roadmap, add a "What we don't claim" honesty box that names ISO/SOC explicitly and explains why architecture > paperwork.

### H6. Pillar pages (`/product`, `/how-it-works`, `/security`) rely heavily on imported section components
**Files:** `/product/page.tsx` 67 lines, `/how-it-works/page.tsx` 67 lines, `/security/page.tsx` 144 lines
The page files themselves are thin scaffolding. The content lives inside `@/components/sections/v3/*`. This is fine for maintenance, but means a content reviewer cannot scan a single file to confirm copy is up to standard. Recommend a `make content-extract` script or a per-page `content.md` mirror for editorial review. (Not user-visible — internal process risk only.)

### H7. Glossary terms range from 54 to 119 lines — some too short
- `/glossary/consent-management-platform` (54 lines, ~250 words body)
- `/glossary/first-party-data-collection` (55 lines)
- `/glossary/intelligent-tracking-prevention` (54 lines)
- `/glossary/server-side-tracking` (54 lines)

These hit the "definition" floor but miss the AI citation sweet spot. Per Sept 2025 QRG, glossary entries that get cited by ChatGPT/Perplexity typically have (a) a 1-sentence definition, (b) ~300–500 words of expansion, (c) at least one quoted statistic or example, (d) a QuickAnswer schema block. `cookieless-analytics` and `multi-touch-attribution` both have QuickAnswer blocks — the four shorter terms above do not. Add `<QuickAnswer>` blocks to each.

### H8. `/diagnostic-result` is 30 lines — thin
**File:** `/diagnostic-result/page.tsx`
Likely a form thank-you, but at 30 lines it has neither metadata description nor structured content. Confirm this is `noindex` (the audit didn't check robots meta). If indexable, expand to ~300 words explaining what happens next and link to a content-rich follow-up.

---

## MEDIUM — Readability, tone, internal linking

### M1. Vague qualifier "most" appears 30+ times in marketing copy
**Files:** `/page.tsx` (homepage FAQ lines 54, 57), `/vs-ga4/page.tsx` (lines 41, 44), `/case-studies/dreamplace-hotels/page.tsx` (lines 325, 367, 508), `/data-loss-calculator/Calculator.tsx` line 781, and others.

Examples that violate the "specific numbers, never vague qualifiers" rule from `CLAUDE.md`:
- *"Most clients run SealMetrics alongside GA4 for the first 30 days"* — replace with *"7 out of 10 customers"* or remove the quantifier (*"Customers typically run…"*).
- *"Most teams use SealMetrics as their source of truth"* — same fix.
- *"Most teams see 3-8x more visitors and conversions"* (Calculator.tsx 781) — has a range, so "most" is fine; could tighten to *"Customers typically see…"*

These are not Critical because they appear in conversational FAQ answers where some hedging is natural, but they accumulate into a tone drift. Track them; replace 50% with specific numbers or remove the qualifier.

### M2. "The best" appears twice in superlative form
- `/blog/cookieless-analytics-explained` line 237: *"The best way to understand the difference is to see it."* — phrasing is editorial, but "the best way" violates "no superlatives without data". Replace with *"The fastest way to understand…"* or *"To see the difference: run a cookieless analytics tool alongside your current setup."*
- `/blog/what-is-cookieless-tracking` line 338: *"The businesses making the best marketing decisions in 2026 are those working with complete data."* — same fix. Reword to *"The businesses making confident marketing decisions in 2026…"* or *"The teams allocating budget with conviction…"*

### M3. "Enterprise-grade" appears 7+ times
**Files:** `lib/schema.ts` line 25, `/alternatives/google-analytics/page.tsx` lines 12 & 15, `/layout.tsx` line 18, `HomeV3.tsx` line 940, `VsData.tsx` line 11, `/blog/analytics-tools-cookies-cataloged` line 501, `/blog/ga4-alternatives-enterprise` line 501, `/blog/best-enterprise-analytics-platforms` line 493.

This phrase is borderline jargon-marketing. It is the canonical positioning frame ("we are tier-1 enterprise, not lightweight"), so it stays — **but** standardise on one phrasing: *"enterprise analytics at a fraction of GA360/Adobe pricing"* (the language from `CLAUDE.md`). Today the variants are "enterprise-grade alternative", "enterprise-grade data", "enterprise-grade complete data", "enterprise-grade capabilities", and "enterprise-grade pricing". Pick one.

### M4. "Modern analytics" page uses "next generation"
**File:** `/modern-analytics/page.tsx` line 51: *"Modern analytics is the next generation of web measurement"*. "Next generation" is the kind of vague positioning the copywriting rules ban. Rewrite as: *"Modern analytics is cookieless by architecture, captures 100% of events server-side, never samples, and exposes clean event-level data to AI agents through MCP."*

### M5. Sentence-length distribution skews long on pillar pages
Spot-checking `/how-it-works` and the homepage TL;DR, several sentences run 40+ words. Examples:
- Homepage QuickAnswer (line 123): a single sentence carries five clauses and the words "consentless", "cookieless web analytics", "100% of inbound traffic", "last-click at channel level", "GDPR-compliant by architecture", and "Schrems II review". Comprehension on first pass requires re-reading.
- `/how-it-works` TldrBlock (line 44): one paragraph is essentially three concept blocks stitched with semicolons.

For AI citation readiness this is acceptable (LLMs handle long sentences). For human Flesch-reading-ease it pushes scores below 50 (target 50–60 for B2B). Recommendation: break the longest 10 sentences into two — keep the same information density, halve the cognitive load.

### M6. Internal linking is generally strong but uneven across blog
The blog cluster is well-linked: every post we read links into `/glossary/*` and back to a pillar (`/product`, `/how-it-works`, `/vs-ga4`). Two gaps:
- `/blog/cnil-self-assessment-published` (181 lines) — confirm linkage to `/security` and `/glossary/gdpr-analytics-compliance`. Spot-check needed.
- The `/open/*` chapters interlink with each other but rarely link **into** the rest of the site (`/product`, `/pricing`, `/vs-ga4`). For an SEO-discoverable transparency hub, each chapter should end with at least one contextual link into the commercial cluster. Chapter 04 (we won't do) does this with `/open/what-complete-data-means` but does not link out to `/glossary/multi-touch-attribution` or `/blog/multi-touch-attribution-complete-data`, which would be the natural commercial bridges.

### M7. `/vs/*` competitor pages are very thin scaffolds
**Files:** `/vs/piwik-pro/page.tsx` (45 lines), `/vs/adobe-analytics/page.tsx` (45 lines), `/vs/matomo/page.tsx` (60 lines)

These pages render `<VsComparisonV3 data={getVsData(...)} />` and a "RelatedPagesV3" — all the actual comparison content lives in `src/components/sections/v3/VsData.tsx`. That data file is rich (~300+ words per competitor, comparison tables, FAQs, gap stats), so on-page word count is fine.

**But** these pages do *not* include:
- A breadcrumb-level TL;DR / QuickAnswer block (unlike `/vs-ga4`)
- A migration narrative section (unlike `/vs-ga4` which has the Palladium dark slab)
- An author byline / `ComparisonByline` component (unlike `/vs-ga4`)
- A methodology footer (unlike `/vs-ga4` which uses `ComparisonMethodology`)

`/vs-ga4` is the gold standard. The three `/vs/*` siblings should be brought up to its template. Cross-skill: see `seo-competitor-pages` for the comparison-page standard.

### M8. `/vs-ga4` lives at `/vs-ga4`, not `/vs/ga4`
**File:** `src/app/(en)/vs-ga4/page.tsx`
The audit prompt assumed `/vs/ga4/`. Canonical URL is `/vs-ga4` (hyphenated, not in the `/vs/` folder). Other comparison pages live at `/vs/{competitor}`. This URL split is a minor IA inconsistency that may confuse internal-link writers — and breaks the "see all comparisons" footer pattern slightly. Either (a) move `/vs-ga4` to `/vs/ga4` with a 301, or (b) accept the inconsistency and document it. Today, the `RelatedPagesV3` footer on each `/vs/*` page correctly points to `/vs-ga4`, so users don't see the break. Low priority but worth flagging.

---

## LOW — polish

### L1. Spanish content in EN tree
`VsData.tsx` carries both `en` and `es` payloads inline. Not a content quality issue per se, but if a future i18n refactor splits locales, the EN audit needs to ignore the `es:` branches (which it currently does manually).

### L2. "Founder-led" appears across `/about`, `/authors/rafa-jimenez`, `/for/*`, `/security`, `/pricing` CTAs
Excellent consistency. Continue. This is one of the strongest E-E-A-T threads on the site.

### L3. Open section emails to `open@sealmetrics.com`
`/open/page.tsx` line 191 and `/open/[slug]/page.tsx` line 157 expose `open@sealmetrics.com` as a feedback channel. This is **role-based** (not personal) and matches the editorial Open tone. Compliant — keep.

### L4. `dpa@`, `privacy@`, `legal@`, `dpo@` emails on legal pages
`/privacy/page.tsx` lines 176/202, `/terms/page.tsx` line 188, `/dpa/page.tsx` line 197. All role-based, all legitimate for legal pages. Compliant.

### L5. Quote attribution on homepage uses two anonymous and one named source
**File:** `/page.tsx` lines 88–104
- Toni Andújar (Palladium) — named, compliant with `project_palladium_named.md`.
- "Head of eCommerce · Hotel chain · Spain" — anonymous Dreamplace placeholder; the case study itself names Eduardo Martin. Update homepage quote attribution to match.
- "Founder & CEO · DTC coffee brand" — anonymous, no case study page. See H1.

### L6. Repeated CTAs use slightly different action verbs
The site uses several CTA primaries that all mean "talk to us": "Book a Demo", "Request compliance pack", "Talk directly to the founder", "Run both for 30 days", "See your own case study in 30 minutes", "30-minute walkthrough". This is fine for variety but slightly fragments the conversion language. Pick a primary verb (recommendation: *"Book a walkthrough"* or *"Talk to the founder"*) and use it 70% of the time, with situation-specific variants for the remaining 30%.

### L7. The Open hub's "Eleven chapters" claim does not match published count
**File:** `/open/page.tsx` lines 15–17, 65
Metadata says "Eleven open chapters". The actual published count (from `publishedChapters.length` rendered at line 71) is the dynamic value — per project memory `plan_open_editorial.md`, currently **4 chapters published** (01, 03, 05, 09). The visible counter is correct, but the page **title** and **description** promise 11. Either soften copy to *"Eleven chapters planned, four published"* or de-risk SEO claim to *"An open document on how we measure, comply and build SealMetrics."*

---

## AI citation readiness

Strong overall. Findings:

### Strengths
- **QuickAnswer / TL;DR blocks** are used on `/`, `/product`, `/how-it-works`, `/security`, `/vs-ga4`, `/pricing`, `/glossary/cookieless-analytics`, `/glossary/multi-touch-attribution`, `/blog/cookieless-analytics-for-ecommerce`. These are passage-level chunks designed for citation by ChatGPT/Perplexity. Good coverage on pillars and top blog posts.
- **JSON-LD richness** — `statisticClaim`, `quotation`, `definedTerm`, `comparisonPage`, `Article`, `Book` (for /open), `Person` (for author), `Organization`, `Service`. Comprehensive.
- **Speakable schema** on `/`, `/product`, `/how-it-works`, `/security` — good for voice assistants and AI agents.
- Named experts: Toni Andújar (with role), Eduardo Martin (with role), Rafa Jiménez (with `/authors/rafa-jimenez` profile + LinkedIn). Real people, real roles, real numbers — the strongest E-E-A-T pattern on the site.
- Numbers are specific: 40%, 35%, +165%, 13%, 87%, 55%, 65%, 30–70%, €499, €899, €150K, $100K. Almost no rounded marketing approximations.

### Citation gaps
- **Glossary terms without QuickAnswer**: `/glossary/consent-management-platform`, `/glossary/first-party-data-collection`, `/glossary/intelligent-tracking-prevention`, `/glossary/server-side-tracking`. Add 1-2 paragraph QuickAnswer blocks to each — these are the queries ChatGPT/Perplexity would otherwise resolve from Wikipedia.
- **Case study pages** — the audit didn't fully read `/case-studies/palladium-hotel-group` and `/case-studies/dreamplace-hotels` line-by-line, but the homepage already wraps them with `quotationSchema`. Confirm each case-study page emits its own `Article` + `quotation` schema with named author + dated published.
- **`/vs/{piwik-pro,adobe-analytics,matomo}` pages** have `comparisonPage` schema but no `quotation` schema and no TL;DR. Add both.

---

## Cross-skill defer

- For programmatic-page concerns (the `/for/*` 11-vertical cluster and `/platforms/*`): defer to `seo-programmatic`.
- For comparison-page standards (`/vs-ga4` vs the three `/vs/*` siblings): defer to `seo-competitor-pages`.

---

## Prioritised action list

1. **H1** Publish a third named case study or remove the third card. (1 day)
2. **H3** Source the "2,000+ accounts" figure or replace with verifiable proof. (½ day)
3. **H4** Add portrait + external authority links to Rafa's author card on `/about`. (½ day)
4. **M7** Bring `/vs/piwik-pro`, `/vs/adobe-analytics`, `/vs/matomo` up to `/vs-ga4` template (TL;DR + byline + methodology + migration callout). (1 day per page)
5. **H7** Add `<QuickAnswer>` blocks to the 4 thinnest glossary terms. (½ day)
6. **M2/M3/M4** Tone pass: replace "the best", standardise "enterprise-grade", rewrite "next generation". (½ day)
7. **M1** Tone pass: reduce "most" qualifier usage by 50%, prefer specific numbers. (½ day)
8. **L7** Reconcile Open metadata copy ("eleven chapters") with current published count. (5 min)
9. **L5** De-anonymise Dreamplace quote attribution on homepage. (5 min)
10. **H5** Add an honest "what we don't claim yet" block on `/security` re: ISO 27001 / SOC 2. (1 hour)

Total time to address everything: ~5 working days for one editor.
