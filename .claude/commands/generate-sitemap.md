# Generate Sitemap & Robots

Generate or update `sitemap.xml` and `robots.txt` for the site.

## Steps

1. **Scan all existing pages** in `src/app/*/page.tsx` (recursively)
2. **Read `SEO-STRATEGY.md` section 8** for robots.txt spec

## Generate sitemap.xml

### File: `/Users/rafa/code/web-sealmetrics/public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/2000/svg"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://sealmetrics.com/</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- ... all pages ... -->
</urlset>
```

### Priority rules
| Page type | Priority | Change frequency |
|-----------|----------|-----------------|
| Homepage `/` | 1.0 | weekly |
| Tier 1 (`/demo`, `/pricing`) | 0.9 | monthly |
| Tier 2 pillars (`/product`, `/how-it-works`, `/vs-ga4`, `/security`) | 0.8 | monthly |
| Tier 2 comparisons (`/vs/*`) | 0.7 | monthly |
| Tier 3 (`/customers`, `/for/*`) | 0.7 | monthly |
| Tier 4 blog posts | 0.6 | yearly |
| Tier 5 glossary | 0.5 | yearly |
| Legal pages | 0.3 | yearly |

### Rules
- Only include pages that actually exist (have a page.tsx file)
- Use today's date for `lastmod`
- Base URL: `https://sealmetrics.com`
- Do NOT include 404 page or any error pages
- Do NOT include pages behind authentication

## Generate robots.txt

### File: `/Users/rafa/code/web-sealmetrics/public/robots.txt`

```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://sealmetrics.com/sitemap.xml
```

## Verify
- Count pages in sitemap vs actual pages — they must match
- Ensure no duplicate URLs
- Ensure all URLs use https://

## Input
$ARGUMENTS — Optional: "update" to refresh existing files, or empty to create from scratch.
