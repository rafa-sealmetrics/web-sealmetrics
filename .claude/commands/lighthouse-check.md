# Lighthouse Check

Build the site and analyze the output for performance, SEO, and accessibility issues.

## Steps

1. **Build the site:**
```bash
cd /Users/rafa/code/web-sealmetrics && npx next build
```

2. **Check build output for:**
   - Any build errors or warnings
   - Page sizes (First Load JS)
   - Static pages generated

3. **Analyze against targets** (from PRD.md):

| Metric | Target |
|--------|--------|
| First Load JS | < 80KB |
| LCP | < 1.5s |
| CLS | < 0.05 |

4. **Check each page's HTML output** in `/out/` for:

### Performance
- [ ] No render-blocking scripts
- [ ] Images use next/image (lazy loading)
- [ ] Fonts loaded via next/font (no FOIT/FOUT)
- [ ] No unnecessary client-side JS
- [ ] CSS is minimal (no unused Tailwind classes causing bloat)

### SEO
- [ ] Every page has `<title>` tag
- [ ] Every page has `<meta name="description">`
- [ ] Every page has `<link rel="canonical">`
- [ ] Every page has Open Graph tags
- [ ] robots.txt exists
- [ ] sitemap.xml exists and lists all pages
- [ ] llms.txt exists

### Accessibility
- [ ] All images have alt text
- [ ] Heading hierarchy is correct (no skipped levels)
- [ ] Interactive elements are keyboard accessible
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Lang attribute on html tag

5. **If the dev server is running**, optionally run actual Lighthouse:
```bash
npx lighthouse http://localhost:3456 --output=json --quiet --chrome-flags="--headless" | jq '{performance: .categories.performance.score, seo: .categories.seo.score, accessibility: .categories.accessibility.score, bestPractices: .categories["best-practices"].score}'
```

## Output

### Build report
- Build status: ✅/❌
- Total pages: X
- First Load JS: X KB (target: <80KB)

### Page-by-page check
| Page | Title | Meta | Canonical | OG | JSON-LD | H1 | Images |
|------|-------|------|-----------|----|---------|----|---------|

### Issues found (ordered by severity)
1. [Critical] ...
2. [Warning] ...
3. [Info] ...

### Recommendations
- Prioritized list of fixes

## Input
$ARGUMENTS — Optional: "full" to also run Lighthouse via CLI (requires dev server running).
