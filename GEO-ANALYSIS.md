# GEO Analysis — sealmetrics.com

Date: 2026-04-18
Scope: AI search / Generative Engine Optimization readiness (Google AI Overviews, ChatGPT web search, Perplexity, Bing Copilot).

---

## GEO Readiness Score: **82 / 100**

Well above the industry median for B2B SaaS marketing sites. The site has already executed most high-leverage GEO fundamentals (llms.txt, FAQ schema, Article schema with author, question-based H2s, Key Takeaways blocks, specific statistics, SSR via static export). The gap to 95+ is primarily external entity-building and a few on-page author-schema improvements, not structural rework.

### Platform breakdown

| Platform | Score | Rationale |
|---|---|---|
| Google AI Overviews | 85/100 | Strong passage structure, FAQ schema, stats with sources. Top-10 ranking is the gating factor (92% of AIO citations come from top-10); most pillar pages are young and still climbing. |
| ChatGPT web search | 80/100 | Good llms.txt, SSR content, author byline. Weakness: Wikipedia (47.9% of ChatGPT citations) and Reddit (11.3%) presence is minimal. |
| Perplexity | 74/100 | Reddit is 46.7% of Perplexity citations — SealMetrics has no organic Reddit thread presence on target terms. Content itself is highly citable. |
| Bing Copilot | 82/100 | Bing-compatible SEO, IndexNow not configured but static sitemap is clean. |

---

## 1. AI Crawler Access Status

`public/robots.txt` — **allows** the critical AI crawlers via explicit rules + default `User-agent: *` allow:

| Crawler | Status | Notes |
|---|---|---|
| GPTBot (OpenAI) | Allowed (explicit) | Good |
| ClaudeBot (Anthropic) | Allowed (explicit) | Good |
| PerplexityBot | Allowed (explicit) | Good |
| Google-Extended | Allowed (explicit) | Good |
| OAI-SearchBot | Allowed (implicit via `*`) | **Add explicit rule** — improves grader confidence |
| ChatGPT-User | Allowed (implicit via `*`) | **Add explicit rule** |
| anthropic-ai | Allowed (implicit via `*`) | **Add explicit rule** |
| CCBot | Allowed (implicit) | Optional: block to prevent training-set inclusion |
| Bytespider | Allowed (implicit) | Optional: block if undesired |

**Sitemap** referenced correctly. **LLMs-Txt** directive present (non-standard but harmless).

---

## 2. llms.txt Status

`public/llms.txt` (102 lines) and `public/llms-full.txt` (222 lines) — **present, well-structured, above-average quality.**

Strengths:
- Title + `>` description line follows spec exactly.
- Logical section groupings (Core pages, Comparisons, Role-specific, Industry, Blog, Glossary).
- Enterprise-positioning paragraph disambiguates SealMetrics from lightweight privacy tools (prevents AI mis-classification).
- `llms-full.txt` includes founder bio, compliance claims, pricing — strong for ChatGPT context retrieval.

Gaps:
- No `Contact:` structured block with email (only demo URL).
- Founder paragraph lacks external authority anchors (no LinkedIn `sameAs`-style listing beyond a URL mention).
- No explicit "last updated" date at the top.

---

## 3. Brand Mention / Entity Presence — **Weakest area**

(Brand mentions correlate 3× stronger with AI visibility than backlinks — Ahrefs Dec 2025.)

| Surface | Status | Impact |
|---|---|---|
| Wikipedia (brand or Rafa Jimenez) | **Missing** | Highest priority — 47.9% of ChatGPT citations |
| YouTube channel with mentions | Unknown / not linked from site | 0.737 correlation — strongest single signal |
| Reddit threads on r/analytics, r/PPC, r/ecommerce | Not seeded | 46.7% of Perplexity citations |
| LinkedIn company page | Linked in Organization `sameAs` | OK |
| X (Twitter) | Linked in Organization `sameAs` | OK |
| Wikidata entry | **Missing** | Cheap win — enables Wikipedia eligibility |
| GitHub org / open source | Unknown | Moderate signal for technical audiences |

The `sameAs` array in `src/lib/schema.ts:30-33` lists only LinkedIn + X. Every credible AI-cited brand has 5–10 entries here.

---

## 4. Passage-Level Citability

Sampled: homepage, `/blog/what-is-cookieless-tracking`, `/blog/why-ga4-shows-13pct-eu-traffic`.

**Strong patterns already in place:**
- "Key Takeaways" block at top of blog posts — extractable, quotable, self-contained.
- First 60 words contain direct definitions ("Cookieless tracking is a method of collecting website analytics data without storing cookies…").
- Question-based H2 headings ("What is cookieless tracking?").
- Specific statistics with sources (13%, 87%, 55%, 40%) — highly citable.
- Dash-separated clauses read cleanly when excerpted.

**Passages in the 134-167 word sweet spot:** approximate — body paragraphs on blog posts are well-sized; FAQ answers on homepage run 50–90 words, which is slightly under-length for optimal AI extraction.

**Recommended expansions:**
- FAQ answers on `FaqFocused.tsx` — extend the top 3 answers to 130–160 words each (currently 60–100). Add one concrete number per answer.
- Glossary term pages — verify each has a 140-word self-contained "What is X?" opening paragraph before subheadings.

---

## 5. Schema / Structured Data Audit

`src/lib/schema.ts` covers: Organization, WebSite, Breadcrumb, SoftwareApplication (with Offer pricing), Article (with Person author), DefinedTerm, FAQPage, ComparisonPage, CollectionPage, ItemList, Product, WebApplication, ServicePage. **Breadth is excellent.**

Gaps:
- **Person schema for Rafa Jimenez is inline-only** (inside Article `author`). Create a standalone Person schema on `/about` with its own `sameAs` (LinkedIn, X, any speaker bios, GitHub). AI crawlers use this to resolve authorship as an entity.
- **Organization `sameAs` is thin** — 2 entries. Target 5+.
- **No `dateModified` discipline** — `articleSchema` defaults `dateModified` to `datePublished` when omitted. Adding a real last-reviewed date on evergreen posts boosts AI freshness signals.
- **No `Review` / `aggregateRating`** on pricing page — if you have verified review counts (G2, Capterra), surface them.
- **No `Dataset` schema** on `/blog/we-measured-every-analytics-script` — that post is original research and would benefit from Dataset markup for AI citation as source material.

---

## 6. Server-Side Rendering Check

Next.js 16 with `output: "export"` → every page is pre-rendered HTML. **All critical content (H1, H2s, paragraphs, FAQ text, schema) ships in initial HTML.** No JS-dependency risk for AI crawlers. ✔

Interactive elements (growth-calculator, data-loss-calculator) are the only client-rendered islands; their static shell + copy are still in the HTML.

---

## 7. Top 5 Highest-Impact Changes

Ranked by effort × GEO lift:

1. **Create Wikidata entry for SealMetrics and Rafa Jimenez.** Unlocks Wikipedia eligibility (47.9% of ChatGPT citations) and is a 2-hour task. Link both via `sameAs`. **Highest leverage per hour.**
2. **Expand `Organization.sameAs` from 2 → 8+ entries** in `src/lib/schema.ts:30`. Add: Wikidata, Crunchbase, G2, Capterra, YouTube channel, GitHub (if exists), Product Hunt, Founder's LinkedIn. Publish Person schema on `/about` with its own sameAs.
3. **Seed 3–5 authoritative Reddit threads** in r/analytics, r/PPC, r/ecommerce, r/GDPR — first-person posts about the 13% / 87% data-loss math, not promotional. Perplexity weights Reddit at 46.7% of citations. Do NOT spam; one thoughtful thread/month for 6 months.
4. **Extend homepage FAQ answers to 130–160 words each** in `src/components/sections/FaqFocused.tsx`. Currently 60–100 words — just under the 134-167 AI-citation sweet spot. Add one statistic per answer.
5. **Add explicit robots.txt rules for OAI-SearchBot, ChatGPT-User, anthropic-ai** in `public/robots.txt`. Implicitly allowed today; explicit improves scorecard grading and removes ambiguity if defaults change.

---

## 8. Medium-Effort Wins

- Publish a YouTube video per quarter (founder explaining the 13% problem, screencast of dashboard). Link from every blog post footer. **Highest single correlation signal (0.737).**
- Add `dateModified` to every pillar page and evergreen blog post. Touch quarterly.
- Add `Dataset` schema to `/blog/we-measured-every-analytics-script` and `/blog/analytics-tools-cookies-cataloged` — these are original-research posts.
- Create `/blog/authors/rafa-jimenez` with full bio, credentials, external links, and Person schema. Link from every article byline.
- Add RSL 1.0 licensing declaration (machine-readable permission for AI training/citation).

---

## 9. High-Impact Plays (strategic)

- **Original research report** once per year (e.g., "State of EU Analytics Compliance 2027"). Nothing else produces as many citations as unique data.
- **Wikipedia article** for SealMetrics once notability is established via ≥3 independent press mentions (TechCrunch, Heise, industry analyst).
- **Expert quote network** — get Rafa Jimenez quoted in 5+ third-party pieces on GDPR analytics. AI models cite the *quoting* publication, but attribute to the quoted person.

---

## 10. Specific Content Reformatting Suggestions

### `src/components/sections/FaqFocused.tsx` — extend answer length

Current "Why pay for SealMetrics when GA4 is free?" answer ≈ 85 words. Expand to 140–150:
- Add the specific cost-of-bad-decisions math (e.g., "For a €50M eCommerce site misallocating 20% of ad spend, that's €X in lost ROAS per quarter").
- Close with a concrete data point, not a rhetorical flourish.

### `src/components/sections/HeroDark.tsx:14-26`

Hero paragraph is strong (3 specific claims + internal links). Consider adding one quantified proof point directly in the hero: "…captures 100% of traffic — vs ~13% for GA4 in the EU." Inline numbers in the hero are AI-extractable as brand facts.

### Blog post pattern (verified on `/blog/what-is-cookieless-tracking`)

Already follows best practice: Breadcrumbs → H1 → meta line (date/author/read-time) → Key Takeaways block → intro paragraphs → question-based H2s. **Use this as the template for every new pillar post.** Do NOT regress into introductions that bury the definition past word 100.

### `src/lib/schema.ts:30-33` — expand sameAs

```ts
sameAs: [
  "https://www.linkedin.com/company/sealmetrics",
  "https://x.com/sealmetrics",
  "https://www.wikidata.org/wiki/Q_TBD",        // after creation
  "https://www.crunchbase.com/organization/sealmetrics",
  "https://www.g2.com/products/sealmetrics",
  "https://www.capterra.com/p/TBD/sealmetrics",
  "https://www.youtube.com/@sealmetrics",        // after channel
  "https://github.com/sealmetrics",              // if applicable
],
```

---

## Summary — what to do this week

1. Add 3 explicit AI crawler lines to `robots.txt` (15 min).
2. Extend homepage FAQ answers to 130–160 words (1 hour).
3. File Wikidata entry for SealMetrics + Rafa Jimenez (2 hours).
4. Expand `Organization.sameAs` with verifiable profiles only (30 min + profile-creation time).
5. Add standalone Person schema on `/about` with Rafa Jimenez's sameAs (30 min).

Expected lift: +8–12 points on GEO readiness within 90 days, assuming external entity work (Wikidata, Reddit seeding, YouTube) is executed consistently.
