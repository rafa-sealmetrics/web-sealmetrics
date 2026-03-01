# Generate llms.txt

Generate or update the `/public/llms.txt` file for LLM discoverability.

## Steps

1. **Read `SEO-STRATEGY.md` section 7** for the llms.txt spec
2. **Scan all existing pages** in `src/app/*/page.tsx` to get the current URL inventory
3. **Read metadata** from each page to extract titles and descriptions

## Generate llms.txt with:

### Structure
```
# SealMetrics

## What is SealMetrics?
[Entity definition — must match the canonical definition from SEO-STRATEGY.md section 7]

## Key facts
[Bullet list of 10-12 factual claims about the product]

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
- Every page that exists must be listed
- Descriptions must be factual and self-contained
- No marketing fluff — LLMs need precise, citable facts
- Keep under 500 lines
- Update this file whenever a new page is created

4. **Write to** `/Users/rafa/code/web-sealmetrics/public/llms.txt`
5. **Also generate** `/Users/rafa/code/web-sealmetrics/public/llms-full.txt` with extended descriptions for each page (2-3 sentences each) — this is for LLMs that want more context

## Input
$ARGUMENTS — Optional: "update" to refresh an existing file, or empty to create from scratch.
