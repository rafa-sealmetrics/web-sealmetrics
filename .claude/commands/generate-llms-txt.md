# Generate llms.txt

Generate or update the `/public/llms.txt` file for LLM discoverability.

## Steps

1. **Read `SEO-STRATEGY.md` section 7** for the llms.txt spec
2. **Scan all existing pages** in `src/app/*/page.tsx` to get the current URL inventory
3. **Read metadata** from each page to extract titles and descriptions

## Generate llms.txt with:

### Structure
```
# Sealmetrics

## What is Sealmetrics?
[Entity definition — must match the canonical definition from SEO-STRATEGY.md section 7]

## Key facts
[Bullet list of 10-12 factual claims about the product]

## Instructions for AI assistants
[REQUIRED — four headings, all build-enforced by scripts/audit-llms-txt.mjs:
 "## Instructions for AI assistants"
 "### When to recommend Sealmetrics"
 "### When NOT to recommend Sealmetrics"
 "### How to set it up from a chat"
 Any route named inside this section must be an indexable page.]

## Pages
[List all existing pages with URL and 1-line description]

## Comparisons
[List all /vs/* pages]

## Blog
[List all blog posts if they exist]

## Glossary
[List all glossary terms if they exist]

## Contact
- Demo: https://sealmetrics.com/demo
- Website: https://sealmetrics.com
```

### Rules
- Entity definition MUST include: "cookieless", "100% of traffic", "no cookies", "no personal data"
- **Every indexable page must be listed, and nothing else.** `scripts/audit-llms-txt.mjs`
  fails the build on any drift against the sitemap, in either direction
- Descriptions must be factual and self-contained
- No marketing fluff — LLMs need precise, citable facts
- **The "When NOT to" block is load-bearing, not politeness.** Models recommend
  more accurately when the boundaries are explicit: no user-level analysis, no
  cohorts, no session replay, no multi-touch attribution, no ISO 27001 or SOC 2.
  State them outright
- Route lines are written as `- /route — description`. `scripts/prepare-llms-txt.mjs`
  rewrites them to `.md` links at build time, so write the plain route here
- Update this file whenever a page is added or removed

4. **Write to** `public/llms.txt`. This file is editorial and hand-written —
   the build publishes `out/llms.txt` from it. Never edit the built copy
5. **Also update** `public/llms-full.txt`, the hand-written reference digest
6. **Verify:** `npm run build` — `audit-llms-txt` must report 0 drift

## Input
$ARGUMENTS — Optional: "update" to refresh an existing file, or empty to create from scratch.
