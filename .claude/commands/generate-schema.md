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

4. **Use a helper from `src/lib/schema.ts`. Do not hand-write the object.**

   There is a builder for every page type this site has: `articleSchema`,
   `comparisonPageSchema`, `faqPageSchema`, `howToSchema`, `definedTermSchema`,
   `collectionPageSchema`, `servicePageSchema`, `pricingSchema`,
   `softwareApplicationSchema`, `breadcrumbSchema`, `personSchema`,
   `videoObjectSchema`, `statisticClaimSchema`, `itemListSchema`.

   If none fits, add a builder there rather than writing JSON in the page. Every
   helper does three things a hand-written object will not, and all three are
   build gates:

   - references the organisation by `@id` (`publisher-not-linked`)
   - resolves a Person to the single node (`person-entity-split`)
   - sets `inLanguage` from the route (`schema-inlanguage-mismatch`)

5. **Add it with `<JsonLd>`**, never a raw `<script>`:

```tsx
import { JsonLd } from "@/components/ui/JsonLd";
import { articleSchema } from "@/lib/schema";

<JsonLd data={articleSchema({ ... })} />
```

`JsonLd` normalises internal URLs to the trailing-slash convention the
canonicals and sitemap use; a raw `<script>` skips that and fails
`schema-url-no-trailing-slash`.

6. **Verify:** `npm run build` (0 violations) and `npm test`.

## Rules
- BreadcrumbList should reflect the actual URL path
- **Never restate the organisation inline.** `publisher`, `provider`, `seller`
  and `worksFor` reference `ORG_ID`; `SharedLayout` emits the Organization +
  WebSite graph in the `<head>` of every page so the reference resolves
- FAQ and HowTo content must be **visible on the page**, not schema-only —
  `faq-schema-not-visible` and `howto-schema-not-visible` fail the build
- A `sameAs` must resolve. `scripts/audit-sameas.mjs` checks the declared
  profiles nightly; a dead one is removed, not left in place
- FAQ answers must be self-contained (no "Contact us" or "It depends")

## Input
$ARGUMENTS — Required: page route (e.g., "product", "pricing", "vs-ga4", "/" for homepage)
