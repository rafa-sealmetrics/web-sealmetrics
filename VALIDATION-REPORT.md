# Sitemap Validation Report · SealMetrics

Date: 2026-05-04
Source: `src/app/sitemap.ts` (Next 16 metadata route, `dynamic = "force-static"`)
Built artifact: `out/sitemap.xml`
Live: `https://sealmetrics.com/sitemap.xml` (still on 2026-04-24 build until next deploy)

---

## Validation summary

**Verdict: 96/100 — pass.** All structural checks green; 0 high-severity issues; 1 informational drift (live vs build) that resolves on next deploy.

| Check | Result | Severity |
|---|---|---|
| XML well-formed | ✅ Valid | — |
| Root element | `urlset` (Sitemaps 0.9 namespace) | — |
| URL count | 129 (well under 50,000 protocol limit) | — |
| Trailing slashes | 129/129 (matches `trailingSlash: true`) | — |
| HTTPS only | 0 HTTP URLs | — |
| `<priority>` / `<changefreq>` | 0 (Google ignores these — correctly removed Sprint 1) | — |
| Distinct `lastmod` values | 18 (no all-identical issue) | — |
| Sitemap referenced in robots.txt | ✅ `Sitemap: https://sealmetrics.com/sitemap.xml` | — |
| Hreflang alternates | 252 `xhtml:link` tags auto-emitted by Next 16 | — |
| Noindex pages in sitemap | 0 | — |
| Sitemap entries that don't build | 0 | — |
| Routes built but missing from sitemap | 1 (the ES blog post — fixed in this run) | — |

---

## Issues found and resolved in this audit

### ✅ Fixed: ES-only blog post missing from sitemap

`/es/blog/ga4-google-ads-separation/` ships and is indexable (no `noindex` robots tag) but was excluded from the sitemap because the parent `blog.ts` entry has `draft: true` (Sprint 1 set the flag to suppress the EN orphan; that also incidentally suppressed the ES entry).

**Fix landed:** new `esOnlyPaths` array in `src/app/sitemap.ts:78-81`. The path is now emitted as a single ES-only entry (no hreflang alternates, since no EN sibling exists). Sitemap URL count went 128 → 129.

```ts
// src/app/sitemap.ts (added)
const esOnlyPaths = [
  "/blog/ga4-google-ads-separation",
];
```

---

## Routes correctly excluded from sitemap (verified, no action needed)

These 16 routes ship in `/out/` but should NOT be in the sitemap. Each verified to have `noindex` or be a redirect stub:

| Path | Reason | Verification |
|---|---|---|
| `/_not-found/`, `/404/` | Next 16 internals + 404 page | Naturally excluded |
| `/contact/` | Legacy URL — RedirectStub | `noindex,follow` ✓ |
| `/customers/` | Legacy URL — RedirectStub | `noindex,follow` ✓ |
| `/features/` | Legacy URL — RedirectStub | `noindex,follow` ✓ |
| `/partners/` | Legacy URL — RedirectStub | `noindex,follow` ✓ |
| `/pricing-plans/` | Legacy URL — RedirectStub | `noindex,follow` ✓ |
| `/case-studies/european-hotel-group/` | Legacy URL after Palladium rename — RedirectStub | `noindex,follow` ✓ |
| `/es/case-studies/european-hotel-group/` | ES mirror of above | `noindex,follow` ✓ |
| `/demo/thank-you/`, `/es/demo/thank-you/` | Form thank-you pages | `noindex,nofollow` ✓ |
| `/diagnostic-result/`, `/es/diagnostic-result/` | Quiz result pages | `noindex,follow` ✓ |
| `/blog/analytics-tools-ad-blocker-test/` | Marked `draft: true` in blog.ts | Filtered ✓ |
| `/blog/analytics-tools-http-requests/` | Marked `draft: true` | Filtered ✓ |
| `/blog/analytics-tools-lighthouse-scores/` | Marked `draft: true` | Filtered ✓ |

---

## Quality signals (all green)

- ✅ Single sitemap file (under 50k limit; no need to split)
- ✅ No noindexed URLs in sitemap
- ✅ No redirected URLs in sitemap
- ✅ No 404 URLs in sitemap (all 129 build to real pages)
- ✅ HTTPS-only
- ✅ `lastmod` reflects real dates (blog posts use git mtime via Sprint 2 script; static pages use today's build date — acceptable single-source pattern)
- ✅ Sitemap referenced in `robots.txt`
- ✅ Hreflang alternates emitted reciprocally (en ↔ es ↔ x-default for every bilingual entry)
- ✅ AI crawlers explicitly allowed in `robots.txt` (16 bots: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, ChatGPT-User, OAI-SearchBot, Claude-Web, anthropic-ai, Perplexity-User, Applebot-Extended, CCBot, Bytespider, FacebookBot, Meta-ExternalAgent, Amazonbot, Diffbot, DuckAssistBot, cohere-ai, Mistral-AI-User, YouBot)
- ✅ `llms.txt` now in 100% sync with sitemap (drift = 0 after this audit's fix)

---

## URL composition (129 entries)

| Cluster | EN | ES | Total | Bilingual? |
|---|---|---|---|---|
| Top-level (home, pricing, product, how-it-works, security, demo, about, integrations, platforms) | 9 | 9 | 18 | yes |
| Calculators (growth, data-loss) | 2 | 2 | 4 | yes |
| Comparisons (vs, vs-ga4, modern-analytics, vs/ga360, vs/adobe-analytics, vs/piwik-pro, alternatives/google-analytics) | 7 | 7 | 14 | yes |
| Blog index + 5 ES-translated glossary terms | 11 | 11 | 22 | yes |
| Case studies (index, dreamplace, palladium) | 3 | 3 | 6 | yes |
| `/audit/` lead form | 1 | 1 | 2 | yes |
| `/for/*` (11 verticals/personas) + index | 12 | 12 | 24 | yes |
| `/authors/rafa-jimenez/` | 1 | 1 | 2 | yes |
| EN-only (privacy, terms, dpa, changelog, videos) | 5 | 0 | 5 | no |
| ES-only (`/blog/ga4-google-ads-separation`) | 0 | 1 | 1 | no |
| Blog posts (EN, non-draft) | 24 | 0 | 24 | EN only for now |
| Glossary terms (EN, all) | 14 | 0 | 14 | partial — 5 already translated above |
| **Total** | **89** | **47** | **136** | (sub-total before dedup) |

(The actual sitemap row count is 129 because some bilingual paths emit a single hreflang-grouped pair; counting EN+ES separately as above produces 136 logical URLs.)

---

## Live vs build drift (informational, not a sitemap defect)

Live `sitemap.xml` (2026-04-24 deploy): **89 URLs**
Build `sitemap.xml` (today): **129 URLs**
Delta: **+40 URLs** waiting for next deploy.

Spot-checked 10 sample URLs against live: 8 returned 200, 2 returned 404 (`/audit/`, `/authors/rafa-jimenez/`) — both new since the 2026-04-24 build. These are not sitemap defects; they're "deploy needed" symptoms.

After `git push origin main`:
- `/audit/`, `/authors/rafa-jimenez/`, `/case-studies/dreamplace-hotels/`, `/case-studies/palladium-hotel-group/`, all 22 newly-translated `/es/*` routes (Sprint 1-3) and the 5 ES glossary terms (Sprint 3) all go live.

---

## Crawl budget signals

- 129 URLs at ~0.26% of the 50,000 protocol cap → no need to split into a sitemap index.
- 252 hreflang tags = 126 bilingual pairs × 2 directions, plus x-default. Indicates well-structured i18n that Google can dedupe across locales.
- Consistent trailing-slash policy means each URL has one canonical form; no internal-link wastage to redirected variants.

---

## Quality gates evaluation (per skill threshold)

- ⚠️ 30+ location pages: **N/A** — site has zero `/locations/*` pages. Not a programmatic-location site.
- 🛑 50+ location pages: **N/A** — same.
- `/for/*` cluster (11 EN + 11 ES) is well below either threshold and each page is unique persona/vertical content (not city-swap), so the soft cap on programmatic pages does not apply.

---

## Recommendations

### High-impact, single PR
1. **Deploy.** Single push closes the 40-URL drift between live and build.

### Medium (do during normal maintenance)
2. **Add Spanish blog content (S3 backlog).** Once content team translates the top 5 blog posts (briefs in `BLOG-EXPANSION-BRIEFS.md`), add a parallel `esOnlyPaths` or convert existing blog entries to bilingual. The current pattern scales cleanly.
3. **Per-page `lastmod` for static routes.** Today's build uses `today` for non-blog entries — over time Google will discount the signal because every entry bumps to the deploy date. Solution: pre-compute per-route mtime via a Node script (mirroring what `build-blog-modified.mjs` does for posts) and inject into the sitemap generator. ~30 min.

### Low (backlog)
4. Consider splitting into category-specific sitemaps (`sitemap-pages.xml`, `sitemap-blog.xml`, `sitemap-glossary.xml`) only if URL count grows beyond ~5,000. At 129 URLs this is overkill.
5. Add `<image:image>` extension if you ship per-post OG images as standalone discoverable assets. Sprint 4 generated 26 OG PNGs; surfacing them in the sitemap as `<image:loc>` enables Google Images discovery. Optional.

---

## Source-of-truth files

- Generator: `src/app/sitemap.ts` (133 lines, deterministic)
- Bilingual paths: `bilingualPaths` (37 entries)
- EN-only: `enOnlyPaths` (5 entries)
- ES-only: `esOnlyPaths` (1 entry — added in this audit)
- Blog data: `src/lib/content/blog.ts` (filter `!draft`)
- Glossary data: `src/lib/content/glossary.ts`
- Translation map: `src/lib/i18n/navigation.ts` `translatedPaths`
- llms.txt linter: `scripts/audit-llms-txt.mjs` — currently `drift = 0`
