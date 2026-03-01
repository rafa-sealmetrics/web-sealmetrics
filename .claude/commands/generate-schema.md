# Generate JSON-LD Schema

Generate and add JSON-LD structured data to a specific page.

## Steps

1. **Read `SEO-STRATEGY.md` section 6** for schema requirements per page type
2. **Read the target page** at `src/app/$ARGUMENTS/page.tsx`
3. **Determine the correct schema type:**

| Page type | Schema |
|-----------|--------|
| Homepage `/` | `Organization` + `WebSite` |
| Product `/product` | `SoftwareApplication` |
| Pricing `/pricing` | `Product` + `Offer` per plan + `FAQPage` |
| Blog post `/blog/[slug]` | `Article` |
| Blog listing `/blog` | `CollectionPage` |
| Glossary term `/glossary/[term]` | `DefinedTerm` + `DefinedTermSet` |
| Comparison `/vs/*` | `WebPage` + comparison content |
| Customer case `/customers/[slug]` | `Article` + `Organization` |
| All pages | `BreadcrumbList` |

4. **Generate the JSON-LD** following schema.org specifications
5. **Add it to the page** as a `<script>` tag in the component JSX:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [/* schemas */]
    })
  }}
/>
```

6. **Validate** the JSON-LD is syntactically correct

## Rules
- Use `@graph` array when multiple schemas apply to one page
- BreadcrumbList should reflect actual URL path
- Always include `"@context": "https://schema.org"`
- Organization schema: name "SealMetrics", url "https://sealmetrics.com"
- FAQ answers must be self-contained (no "Contact us" or "It depends")

## Input
$ARGUMENTS — Required: page route (e.g., "product", "pricing", "vs-ga4", "/" for homepage)
