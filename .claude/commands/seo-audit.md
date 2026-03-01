# SEO Audit

Audit the SEO health of the specified page(s). If no page is specified, audit all pages.

## Steps

1. **Read the target page(s)** in `src/app/*/page.tsx`
2. **Check each page for:**

### Metadata
- [ ] Has `metadata` export with `title` (<60 chars)
- [ ] Has `description` (<160 chars)
- [ ] Has `openGraph` (title, description, type)
- [ ] Has `canonical` URL via `alternates.canonical`
- [ ] Title includes primary keyword from `SEO-STRATEGY.md` keyword map

### Structured Data
- [ ] Has JSON-LD script matching page type (see `SEO-STRATEGY.md` section 6)
- [ ] JSON-LD is valid (proper @context, @type)

### Headings
- [ ] Exactly 1 `<h1>` per page
- [ ] No skipped heading levels (h1 → h3 without h2)
- [ ] H1 contains primary keyword

### Internal Links
- [ ] Links match interlinking rules in `SEO-STRATEGY.md` section 4
- [ ] No orphan pages (every page is linked from at least one other)
- [ ] No generic link text ("Learn More", "Click Here")
- [ ] Blog posts do NOT link directly to /demo
- [ ] Comparison pages have "Other comparisons" section

### Technical
- [ ] Page is included in `public/sitemap.xml`
- [ ] Images have meaningful `alt` text
- [ ] No render-blocking scripts

3. **Output a report** as a markdown table:

```
| Page | Title | Meta | JSON-LD | H1 | Links | Score |
|------|-------|------|---------|----|-------|-------|
| /    | ✅    | ✅   | ❌      | ✅ | ⚠️    | 4/6   |
```

4. **List specific fixes** needed per page, ordered by impact.

## Input
$ARGUMENTS — Optional: path to a specific page (e.g., "product", "vs-ga4"). If empty, audit all pages.
