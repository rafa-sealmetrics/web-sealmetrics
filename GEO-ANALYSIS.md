# Generative Engine Optimization (GEO) Analysis · SealMetrics

Date: 2026-05-04
Site: `https://sealmetrics.com` (post-Sprint 4 + post-Schema-Council build, 124 sitemap URLs)
Standard: GEO best practices Feb 2026 — brand mentions weighted 3× backlinks for AI citation

---

## GEO Readiness Score: **69/100**

| Category | Weight | Score | Notes |
|---|---|---|---|
| Citability (passage quality) | 25% | 14/25 | Strong DefinedTerm cluster + statisticClaimSchema, but 0 passages in the optimal 134-167 word range |
| Structural Readability | 20% | 16/20 | Clean H1→H2→H3, but only 8% of H2/H3 are question-style |
| Multi-Modal Content | 15% | 8/15 | 17 pages with comparison tables; few embedded images, no charts, no video |
| Authority & Brand Signals | 20% | 11/20 | On-page E-E-A-T strong; off-page (Wikipedia, Reddit, YouTube) weak/absent |
| Technical Accessibility | 20% | 20/20 | Best-in-class: 100% SSR, 21-bot allowlist, llms.txt synced, schema validated |

---

## Platform-specific scores

| Platform | Score | Lift opportunity |
|---|---|---|
| **Google AI Overviews** | 75/100 | Strong base. Add 134-167w answer blocks + comparison tables on top pages → 85+. |
| **ChatGPT (web search)** | 55/100 | **Wikipedia missing** is the single biggest gap (47.9% of ChatGPT citations come from Wikipedia). |
| **Perplexity** | 50/100 | **Reddit absent from sameAs.** Reddit is Perplexity's #1 source (46.7%). Need community presence. |
| **Bing Copilot** | 75/100 | Mirrors AIO. IndexNow + Bing Webmaster account would accelerate. |

---

## Detailed findings

### ✅ Best-in-class (preserve)

1. **Crawler allowlist — 21 AI bots explicitly permitted** in `public/robots.txt`: GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot, Bytespider, FacebookBot, Meta-ExternalAgent, Amazonbot, Diffbot, DuckAssistBot, cohere-ai, Mistral-AI-User, YouBot. Custom `LLMs-Txt:` declaration at the bottom is informative.

2. **llms.txt + llms-full.txt present.** 124 entries; **0 drift vs sitemap** (verified by `scripts/audit-llms-txt.mjs`). Each URL has a hand-written one-line description AI engines can lift verbatim.

3. **100% server-side rendering.** Static export means every word of the visible UI is in the initial HTML response. AI crawlers — none of which execute JS — see the full content. Sample: homepage HTML body contains 1,866 words of visible text. Blog posts contain the full article body in HTML.

4. **E-E-A-T signals on every blog post:** all 27 posts have author (Person schema), `datePublished`, AND `dateModified` (auto-derived from git mtime via Sprint 2 build script). Both case studies have Person schema for the named source (Toni Andújar / Eduardo Martin) added in the Schema Council pass.

5. **Schema cluster optimized for AI citation:**
   - `DefinedTerm` + `DefinedTermSet` on 14 EN + 5 ES glossary terms (citable knowledge graph)
   - `statisticClaimSchema` (16 instances) — replaced deprecated `ClaimReview`; emits `CreativeWork` + `QuantitativeValue` + `isBasedOn` for each verifiable claim
   - `Quotation` (14 instances) — testimonials with named `Person.spokenByCharacter`
   - `speakableWebPageSchema` on `/`, `/es/`, `/product`, `/how-it-works`, `/security`
   - `data-speakable` markers on TldrBlock + FaqAccordionV3 (63 blocks site-wide)
   - `comparisonPageSchema` on 10 vs/alternatives pages (citable side-by-side comparisons)

### ❌ Critical GEO gaps

**G1 — No Wikipedia article for "SealMetrics".** Verified: `https://en.wikipedia.org/wiki/SealMetrics` returns 404. Per the skill: *brand mentions correlate 3× more strongly with AI citation than backlinks; Wikipedia mentions = 47.9% of ChatGPT citations*. This is the single biggest missing signal. Caveat: Wikipedia notability standards mean a self-published article will be deleted; the path is **earned** via independent press coverage.

**G2 — No Reddit / YouTube presence in `Organization.sameAs`.** Current `sameAs`: LinkedIn, X, G2, Capterra, Crunchbase, ProductHunt, GitHub. Missing: Reddit (Perplexity's #1 source — 46.7%), YouTube (highest correlation with AI visibility per Ahrefs Dec 2025: 0.737), Wikipedia, Wikidata, Mastodon (optional). Adding the URLs to schema is a 5-minute fix; the harder part is having actual content on those platforms to link to.

**G3 — 0 passages in the optimal 134-167 word AI-citation range.** Distribution of speakable blocks (63 site-wide):
- 0-50 words: 38 blocks (TldrBlock answers — too short for full citation)
- 50-100 words: 23 blocks
- 100-134 words: 0
- **134-167 words: 0** ← this is the sweet spot AI engines extract verbatim
- 167-250 words: 1
- 250-500 words: 1

The TldrBlock pattern (`answer + bullets`) keeps answers short by design. Need to add **dedicated 134-167 word "Quick Answer" blocks** at the top of the 10 highest-intent pages (homepage, /pricing, /product, /how-it-works, /security, top 5 blog posts, top 5 glossary terms).

**G4 — Only 8% of H2/H3 are question-style** (166 of 1,912). AI engines route queries to question-form headings: "What is GDPR analytics compliance?" matches the user query better than "Compliance posture". The site uses statement-style headings for editorial weight ("All the paperwork. None of the excuses."). Recommendation: keep statement H2 as the visible headline, but add a question-form H3 immediately below for AI matching.

**G5 — No RSL 1.0 (Really Simple Licensing) implementation.** December 2025 standard backed by Reddit, Yahoo, Medium, Quora, Cloudflare. Provides machine-readable AI training/inference licensing terms. Missing — emerging standard, low immediate impact but trending fast.

### ⚠️ Medium gaps

**M1 — Comparison tables present (17 pages) but few side-by-side spec tables.** The /vs/* pages emit data via React components, not `<table>` markup, so the structured comparison data is not in a queryable table format AI engines prefer. Convert the comparison cards to `<table>` semantics on `/vs/ga360`, `/vs/adobe-analytics`, `/vs/piwik-pro`, `/vs-ga4`, `/alternatives/google-analytics`.

**M2 — No embedded video on key pages.** Homepage, /product, /how-it-works could each carry a 60-90s product walkthrough. Per the skill: *content with multi-modal elements sees 156% higher selection rates*. Even 1 embedded YouTube video per page lifts the multi-modal score.

**M3 — No infographics / charts.** Data points like "13% EU traffic", "40-60% consent rejection", "+165% Display CPS" appear as text or single stats. Embedding 1-2 charts per pillar page (with proper `alt` text + `figcaption`) gives AI engines extractable visual signals.

**M4 — Glossary first paragraphs use "Web analytics that..." (18 occurrences).** Good definitional pattern — but the `is a / refers to` opener is more directly matched. Consider rephrasing: "Cookieless analytics is a measurement approach that..." instead of "Web analytics that captures...".

---

## Top 5 highest-impact actions (in order)

| # | Action | Effort | Impact platform |
|---|---|---|---|
| 1 | **Add Reddit + YouTube URLs to `Organization.sameAs`** + start posting (founder Q&A on r/analytics, Rafa videos on YouTube). 5-min schema patch + ongoing content. | 5 min code · 8h/mo content | Perplexity (+15), ChatGPT (+5), AIO (+3) |
| 2 | **Ship 134-167 word Quick Answer blocks** on top 10 pages: homepage, /pricing, /product, /how-it-works, /security, /vs-ga4, /vs/ga360, top 3 glossary terms. New `<QuickAnswer>` component + content per page. | 4-6h | All platforms (+8 each) |
| 3 | **Earn a Wikipedia mention** — get cited in 2-3 independent articles on EU privacy/analytics, then have a third party (not the company) draft the Wikipedia entry. Path is months not weeks. | months · external | ChatGPT (+15), AIO (+5) |
| 4 | **Convert /vs/* comparison cards to `<table>` markup** with proper `<th>` headers and `<caption>`. AI engines extract row/column comparisons. | 2-3h | AIO (+5), ChatGPT (+3) |
| 5 | **Add question-style H3 below each statement H2** on glossary + /security + /how-it-works. E.g., under "Compliance posture" add `<h3>How is SealMetrics GDPR-compliant?</h3>`. | 2h | AIO (+3), ChatGPT (+3) |

---

## Schema recommendations for AI discoverability

Already shipped (post-Sprint 4 + Schema Council):
- ✅ `Organization` (with knowsAbout array, areaServed, contactPoint, founders)
- ✅ `DefinedTerm` + `DefinedTermSet` (glossary)
- ✅ `Article` with `dateModified` from git mtime + per-post OG
- ✅ `statisticClaimSchema` (16 verifiable claims with QuantitativeValue + isBasedOn)
- ✅ `Quotation` with named `Person.spokenByCharacter`
- ✅ `casePersonSchema` for Toni Andújar + Eduardo Martin
- ✅ `speakableWebPageSchema` on top conversion pages
- ✅ `comparisonPageSchema` on 10 vs/alternatives pages
- ✅ `verticalSoftwareApplicationSchema` on 22 /for/* pages

Still missing (worth adding):
- `VideoObject` once first product video ships (one helper exists; zero callers today)
- `Course` or `LearningResource` if you publish the SealMetrics certification track
- `Event` for upcoming webinars / EU Digital Omnibus AMAs
- `WebSite.potentialAction` (`SearchAction`) — deferred until /search route exists
- `AggregateRating` on Organization — only with verifiable customer reviews (don't fabricate)

---

## Content reformatting suggestions

**Pattern: Add a "Quick Answer" block at the top of every pillar/comparison/glossary page.**

```tsx
<aside className="my-10 p-6 bg-warm-50 border-l-4 border-brand">
  <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-brand font-semibold mb-3">
    Quick answer
  </p>
  <p data-speakable className="text-[16px] leading-[1.6] text-ink">
    {/* 134-167 words, self-contained, definitional opener */}
    Cookieless analytics is a measurement approach that captures website
    traffic without browser cookies, localStorage, fingerprinting, or any
    personal identifier. ...
  </p>
</aside>
```

Apply to (priority order):
1. `/glossary/cookieless-analytics/` (and 4 ES siblings)
2. `/glossary/gdpr-analytics-compliance/` (and 4 ES siblings)
3. `/glossary/multi-touch-attribution/` (and 4 ES siblings)
4. `/blog/cookieless-analytics-explained/`
5. `/blog/gdpr-analytics-without-consent/`
6. `/how-it-works/`
7. `/security/`
8. `/vs-ga4/`
9. Each `/vs/<vendor>/`

Each block must:
- Open with definitional pattern: "X is a [category] that [does what] [for whom]."
- Include 1-2 specific numbers with citations
- End with a single call-out sentence (not a CTA — CTA pollutes the citable passage)
- Carry `data-speakable` and `.faq-answer` classes for SpeakableSpecification matching

---

## Quick reference: live verification commands

```sh
# AI crawler allowlist
curl -s https://sealmetrics.com/robots.txt | grep -A1 "GPTBot\|ClaudeBot\|PerplexityBot"

# llms.txt freshness
node scripts/audit-llms-txt.mjs

# SSR check (must show real article text, not a JS shell)
curl -s https://sealmetrics.com/blog/cookieless-analytics-explained/ | grep -oE '<h1[^>]*>[^<]+</h1>'

# AI mention quick check (manual)
# - https://www.google.com/search?q=site:reddit.com+sealmetrics
# - https://www.google.com/search?q=site:youtube.com+sealmetrics
# - https://en.wikipedia.org/wiki/SealMetrics
```

---

## Source-of-truth files

- `public/robots.txt` — 21-bot AI allowlist + `LLMs-Txt:` declaration
- `public/llms.txt` — 124 entries, 0 drift vs sitemap (linter: `scripts/audit-llms-txt.mjs`)
- `public/llms-full.txt` — long-form companion document
- `src/lib/schema.ts` — 18 active schema helpers (post-Schema-Council cleanup)
- `src/components/ui/TldrBlock.tsx` — `data-speakable` on answer + bullets
- `src/components/sections/v3/FaqAccordionV3.tsx` — `data-speakable` + `.faq-answer` on answers
