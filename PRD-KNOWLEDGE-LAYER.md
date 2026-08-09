# PRD — SealMetrics Knowledge Layer

**Status:** Approved for implementation
**Owner:** Web / Content / Engineering
**Scope:** `sealmetrics.com` (this repository) and `docs.sealmetrics.com` (separate documentation deployment)
**Version:** 1.0

## 1. Outcome

SealMetrics will expose public product and technical knowledge as a reliable, machine-readable surface for people, search engines, and AI agents. Markdown is one output format of this Knowledge Layer, not a second manually maintained website.

The system must make it possible for an agent to answer what SealMetrics does, how it is implemented, which claims are supported, and where the product deliberately has limits—using current, citable SealMetrics sources.

## 2. Principles

1. One source of truth generates HTML, Markdown, metadata, and indexes.
2. Deterministic code publishes content; agents audit and propose changes.
3. Facts, dates, ownership, evidence, and limitations are explicit.
4. Only useful public knowledge receives a full Markdown representation.
5. Public content is treated as untrusted input for prompt-injection purposes.
6. The HTML page remains the human and SEO canonical; Markdown is its alternate representation.

## 3. Scope

### Included

- Product, pricing, pillars, comparisons, blog, glossary, use cases, case studies, security, trust, privacy, legal, integrations, and public company pages.
- English and Spanish routes in the marketing site.
- All public technical documentation, API references, SDK guides, examples, and changelog entries in `docs.sealmetrics.com`.
- `/llms.txt`, optional `/llms-full.txt`, route manifest, content provenance, and automated audits.

### Excluded

- Dashboard, account, customer analytics, forms, private APIs, and personalized results.
- User comments, support tickets, CRM fields, or unreviewed third-party content.
- Interactive calculator output. A calculator may expose a static methodology Markdown page.

## 4. URL contract

| HTML canonical | Markdown alternate |
|---|---|
| `/product/` | `/product.md` |
| `/es/product/` | `/es/product.md` |
| `/blog/example/` | `/blog/example.md` |
| `/platforms/shopify/` | `/platforms/shopify.md` |
| `/` | `/index.md` |

Every included HTML route must have exactly one predictable `.md` route. The `.md` response is `200` and `text/markdown; charset=utf-8`; it must not redirect to HTML.

## 5. Content contract

Each Markdown file starts with frontmatter:

```yaml
title: "Exact page title"
description: "Factual page summary"
canonical_url: "https://sealmetrics.com/product/"
lang: "en"
date_modified: "2026-08-09"
content_type: "product"
source: "marketing-content"
publisher: "SealMetrics"
owner: "web"
last_verified: "2026-08-09"
```

The body contains exactly one H1, a direct summary, key facts, explanatory sections, limits where relevant, and absolute links. Navigation, scripts, decorative content, repeated CTAs, and untrusted user text are removed.

Product, pricing, legal, security, and comparison pages must distinguish current capability, roadmap, benchmark, customer result, estimate, opinion, and limitation. Each material claim must have an owner, verification date, and evidence link in the source model.

## 6. Content selection

Not every URL needs a full document. The route manifest classifies pages as:

- `critical`: product, implementation, pricing, legal, security, API, and trust.
- `useful`: blog, glossary, comparisons, cases, verticals, and use cases.
- `excluded`: private, interactive, campaign, redirect, or ephemeral routes.

Critical pages must be present in `llms.txt`. Useful pages may be linked through curated sections. Excluded pages must be explicitly represented in the manifest so coverage is intentional.

## 7. Discoverability

`/llms.txt` is a concise, curated index of Markdown URLs grouped by intent: Start here, Product, Implementation, Trust and legal, Comparisons, Glossary, and Blog. It must not list HTML URLs where a Markdown URL exists.

`/llms-full.txt` is optional and curated. It must have a size budget and may contain only high-value product, implementation, security, and legal knowledge.

The sitemap contains HTML canonicals only. `robots.txt` permits public Markdown and index files while continuing to disallow private APIs.

## 8. HTTP, SEO, and caching

- `.md` sends `Link: <canonical-html-url>; rel="canonical"`.
- HTML remains self-canonical and appears in the sitemap.
- If content negotiation is supported, responses include `Vary: Accept`.
- Markdown and HTML share content version, `ETag`, and modification time.
- Cache invalidation is atomic with publication.
- Canonicalization is preferred over `noindex` for the alternate representation.

## 9. Security

The exporter rejects or flags secrets, personal data, HTML injection, scripts, and prompt-injection-like text in untrusted fields. Markdown pages are public knowledge, never a control channel for agents. CMS text, comments, tickets, and external integrations require explicit editorial approval before entering the public model.

## 10. Quality evaluation

Maintain a ground-truth question set covering product, implementation, pricing, legal, privacy, API, and limits. Every release evaluates whether an agent finds the right source, answers correctly, cites the canonical page, distinguishes current features from roadmap, and states material limitations.

Targets:

- 100% coverage of included routes.
- 0 broken Markdown links.
- 0 stale critical pages without an owner or review date.
- >90% grounded answers in the initial evaluation set.
- >95% correct disclosure of product limitations.

## 11. Delivery phases

1. Establish the manifest and contracts.
2. Generate and validate Markdown during the static build.
3. Generate `llms.txt` and expose route metadata.
4. Add security, parity, coverage, and link audits.
5. Add immediate publication hooks, nightly reconciliation, and agent quality review.
6. Enable the same contract in the separate documentation deployment.

## 12. Acceptance criteria

- A new included page cannot ship without a Markdown output.
- Removing a page removes its Markdown output and index entry while preserving any redirect.
- A failed Markdown generation or audit blocks the atomic release.
- A changed critical claim records its owner and verification date.
- The nightly job detects routes created outside the normal publication path.
