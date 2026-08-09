# PRD — Knowledge Layer automation and governance

**Status:** Approved for implementation
**Parent:** [`PRD-KNOWLEDGE-LAYER.md`](./PRD-KNOWLEDGE-LAYER.md)

## 1. Goal

Keep HTML, Markdown, indexes, metadata, and audits synchronized forever after every publish, update, translation, unpublish, redirect, or documentation release.

## 2. Source events

The system accepts `content.published`, `content.updated`, `content.translated`, `content.unpublished`, and `content.redirected`. Each event contains a content ID, canonical path, locale, content type, source version, and modification time.

For repository-driven content, a push or pull request is the event. For a CMS, use a signed webhook. The event must be idempotent: processing the same version twice produces the same files and manifest.

## 3. Publication pipeline

```text
source change
  -> manifest update
  -> deterministic HTML/Markdown render
  -> llms indexes
  -> security and parity audits
  -> atomic static deploy
  -> CDN invalidation
  -> production smoke test
```

The code renderer owns conversion. An LLM never silently rewrites production facts. A review agent may open a PR or issue with suggestions.

## 4. Immediate execution

On every accepted change:

1. Resolve the source-of-truth record.
2. Render the affected HTML and `.md` artifact.
3. Recompute the route manifest and relevant `llms.txt` sections.
4. Validate metadata, headings, links, locale, content type, and security.
5. Run the full route and index audit.
6. Publish HTML, Markdown, and indexes together.
7. Purge the changed canonical and alternate URLs.
8. Probe production and record a deployment receipt.

If any required output fails, the release remains pending or fails atomically. No HTML-only release is allowed for an included page.

## 5. Nightly reconciliation

The nightly job compares routes discovered from the source manifest, filesystem, sitemap, deployment output, and `llms.txt`. It reports missing Markdown, orphaned Markdown, stale entries, missing owners, expired review dates, broken links, and English/Spanish parity gaps.

The job must retry transient failures, alert on persistent failures, and save a machine-readable report for trend analysis.

## 6. Agent quality review

A scheduled agent reviews only public content and produces proposed PRs or issues. It checks:

- contradictory pricing or feature claims;
- missing evidence, owners, or verification dates;
- terminology drift against the glossary;
- unqualified legal or compliance claims;
- missing limits and exclusions;
- prompts in English and Spanish that fail to retrieve an authoritative source;
- prompt-injection patterns in content fields.

Human owners approve product, commercial, security, and legal changes. The agent may not deploy those changes directly.

## 7. Reliability and observability

Metrics include coverage percentage, publication latency, audit failures, stale critical pages, broken links, webhook retries, and evaluation score. A production dashboard or scheduled report must expose these metrics to Web, Engineering, Content, and Legal owners.

SLOs:

- Markdown available within five minutes of a successful source publish.
- 100% route coverage for included pages.
- Zero known broken critical links.
- Zero critical pages without an owner or review date.

## 8. Documentation-site contract

`docs.sealmetrics.com` must implement the same manifest fields, Markdown URL convention, MIME type, canonical relationship, audit commands, and event semantics. If its deployment is separate, the marketing site’s nightly reconciliation must still check its public manifest and health endpoints.

The current Docusaurus implementation satisfies this contract with:

- `npm run build` generating the Markdown mirrors and `static/knowledge-manifest.json` before the site build;
- `scripts/audit-markdown.mjs` failing the build on missing routes, duplicate H1s, invalid frontmatter, canonical drift, or unsafe residue;
- `.github/workflows/generate-llms.yml` regenerating the indexes and mirrors every morning (and on manual dispatch), then committing only generated knowledge artifacts;
- `.github/workflows/generated-files-check.yml` auditing mirrors on every relevant pull request;
- the existing deploy workflow publishing the generated `build/` directory atomically to GitHub Pages.

The marketing site follows the equivalent Next.js `postbuild` pipeline and a nightly production smoke test. A future CMS integration should trigger the same scripts from a signed webhook, with the nightly jobs retained as reconciliation rather than as the primary publication path.

## 9. Rollback

Every deployment stores the source version, manifest hash, Markdown hash, and index hash. A failed smoke test rolls back the whole artifact set, not only HTML or only Markdown. Unpublishing requires a redirect or an explicit 404 policy and removal from all indexes.
