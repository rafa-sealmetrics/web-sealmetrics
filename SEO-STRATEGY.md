# SEO Strategy — SealMetrics Marketing Website

**Versión:** 1.0
**Fecha:** 28 febrero 2026

---

## 1. Positioning

SealMetrics competes on **complete data** — the only analytics that captures 100% of traffic without cookies. SEO strategy must reinforce this positioning across every page, every keyword, and every internal link.

Primary search competitors: GA4 documentation, Matomo, Plausible, Piwik Pro, Amplitude.

---

## 2. Topic Clusters

### Cluster 1 — Product (pillar: `/product`)

```
/product                          ← Pillar
  ↔ /how-it-works                 ← Bidirectional
  ↔ /integrations                 ← Technical ecosystem
  → /demo                         ← Conversion
  ← /vs/ga4, /vs/matomo, etc.    ← Comparisons link to product
  ← /for/cmo                      ← Role landing links to features
```

### Cluster 2 — Comparisons (pillar: `/vs-ga4`)

```
/vs-ga4                           ← Pillar (main competitor)
  ↔ /vs/matomo                    ← Cross-linked comparisons
  ↔ /vs/plausible
  ↔ /vs/amplitude
  ↔ /vs/piwik-pro
  ↔ /vs/adobe-analytics
  → /product                      ← "See full product"
  → /data-loss-calculator         ← "Calculate your own data loss"
  → /demo                         ← CTA
  ← /blog/*                       ← Blog posts mentioning competitors
```

### Cluster 3 — Compliance / Privacy (pillar: `/security`)

```
/security                         ← Pillar
  ↔ /for/dpo                      ← DPO landing
  ↔ /for/cto                      ← CTO landing
  ← /glossary/gdpr-article-6
  ← /glossary/eprivacy-directive
  ← /blog/gdpr-analytics-consent
  → /demo                         ← CTA
```

### Cluster 4 — Education (pillar: `/how-it-works`)

```
/how-it-works                     ← Pillar
  ↔ /blog/cookieless-analytics
  ↔ /blog/first-party-vs-third-party
  ↔ /glossary/cookieless-analytics
  ↔ /glossary/server-side-tracking
  → /data-loss-calculator
  → /product
  → /demo                         ← CTA
```

---

## 3. Link Equity Flow

```
ORGANIC TRAFFIC ENTERS
    ↓                    ↓
┌─────────┐          ┌──────────┐
│  BLOG   │          │ GLOSSARY │
│(10 arts)│          │(20 terms)│
└────┬────┘          └─────┬────┘
     │    link equity      │
     ↓                     ↓
┌──────────────────────────────────────────┐
│            PILLAR PAGES                   │
│  /product    /how-it-works    /security   │
│       ↕              ↕              ↕     │
│  /vs/ga4        /calculator     /for/dpo  │
│  /vs/matomo                     /for/cto  │
│  /for/cmo                                 │
└──────────────────────┬───────────────────┘
                       │ link equity
                       ↓
              ┌─────────────────┐
              │   CONVERSION    │
              │  /demo  /pricing│
              └─────────────────┘
```

**Rule:** Traffic enters through content (blog, glossary), authority flows to pillars, pillars push to conversion. Never skip levels.

---

## 4. Interlinking Rules

### By page type

**Homepage `/`**
- Links to: pillar pages only (/product, /how-it-works, /security, /pricing, /customers)
- Links to: /demo (Hero + CtaFinal)
- Does NOT link to: blog, glossary, individual comparisons

**Pillar pages (`/product`, `/how-it-works`, `/security`)**
- Links to: cluster pages within their cluster
- Links to: /demo (CTA)
- Links to: other pillars (1-2 cross-links, inline)
- Links from: homepage, blog posts, glossary terms, comparisons

**Comparison pages (`/vs/*`)**
- Links to: /product (inline: "see full platform")
- Links to: /how-it-works (inline: "how our collection works")
- Links to: /data-loss-calculator (inline)
- Links to: /demo (CTA)
- Links to: other /vs/* pages (footer: "Other comparisons")
- Links from: /vs-ga4 pillar, blog posts, homepage (only /vs-ga4)

**Blog posts (`/blog/[slug]`)**
- Links to: 1 pillar page (primary, inline)
- Links to: 1-2 glossary terms (first mention of concept)
- Links to: /data-loss-calculator (CTA inline)
- Links to: 2-3 related blog posts (article footer)
- Does NOT link to: /demo directly (flow: blog → pillar → demo)

**Glossary terms (`/glossary/[term]`)**
- Links to: 1 relevant pillar page
- Links to: 2-3 related glossary terms
- Links to: 1 blog post that goes deeper
- Short pages, high SEO volume. Capture traffic, pass to pillars.

**Role landings (`/for/cmo`, `/for/cto`, `/for/dpo`)**
- Links to: relevant pillar (/product for CMO, /security for DPO/CTO)
- Links to: /demo or role-specific CTA
- Links from: pillar pages, relevant blog posts

### Link format

Contextual inline links (higher SEO weight):
```
SealMetrics captures 100% of sessions using [first-party server-side
collection](/how-it-works), which means your [revenue attribution](/product)
is based on complete data — not the [13% that GA4 reports](/vs-ga4).
```

Never generic lists:
```
❌ Related: Product | Pricing | How It Works
```

---

## 5. Keyword Map

### High intent (conversion-ready)

| Page | Primary keyword | Secondary keywords |
|------|----------------|-------------------|
| `/vs-ga4` | sealmetrics vs google analytics | ga4 alternative, ga4 replacement gdpr |
| `/vs/matomo` | sealmetrics vs matomo | matomo alternative, matomo vs cookieless |
| `/vs/plausible` | sealmetrics vs plausible | plausible alternative enterprise |
| `/vs/amplitude` | sealmetrics vs amplitude | amplitude alternative privacy |
| `/pricing` | sealmetrics pricing | cookieless analytics pricing, ga4 alternative cost |
| `/demo` | sealmetrics demo | cookieless analytics demo |

### Educational (awareness)

| Page | Primary keyword | Monthly search volume (est.) |
|------|----------------|------------------------------|
| `/how-it-works` | cookieless analytics how it works | 500-1K |
| `/blog/why-ga4-shows-13pct` | ga4 data loss | 1K-2K |
| `/blog/cookieless-analytics-guide` | what is cookieless analytics | 2K-5K |
| `/blog/gdpr-analytics-consent` | gdpr analytics consent required | 1K-2K |
| `/blog/ad-blockers-analytics` | ad blockers analytics data loss | 500-1K |
| `/data-loss-calculator` | analytics data loss calculator | <500 (but high conversion) |

### Long-tail (glossary)

| Term | Keyword | Monthly search volume (est.) |
|------|---------|------------------------------|
| cookieless-analytics | cookieless analytics | 2K-5K |
| first-party-data | first party data definition | 5K-10K |
| server-side-tracking | server side tracking | 2K-5K |
| safari-itp | safari itp tracking | 1K-2K |
| data-sampling | analytics data sampling | 500-1K |
| gdpr-article-6 | gdpr article 6 analytics | 500-1K |

---

## 6. Structured Data (JSON-LD)

### Per page type

| Page type | Schema | Key properties |
|-----------|--------|---------------|
| Homepage | `Organization` + `WebSite` | name, url, logo, description, sameAs |
| Product | `SoftwareApplication` | name, applicationCategory, operatingSystem, offers |
| Pricing | `Product` + `Offer` per plan | name, price, priceCurrency, description |
| Blog listing | `CollectionPage` | name, description |
| Blog post | `Article` | headline, author, datePublished, dateModified, image |
| FAQ (pricing) | `FAQPage` + `Question` | name, acceptedAnswer |
| Glossary term | `DefinedTerm` | name, description, inDefinedTermSet |
| Comparison | `WebPage` + `Table` | name, description, about |
| Customer case | `Article` + `Organization` | about, mentions |
| All pages | `BreadcrumbList` | itemListElement with position, name, item |

### Example: Homepage

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "SealMetrics",
      "url": "https://sealmetrics.com",
      "description": "Cookieless web analytics that captures 100% of your traffic. GDPR compliant by design.",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ES"
      }
    },
    {
      "@type": "WebSite",
      "name": "SealMetrics",
      "url": "https://sealmetrics.com"
    }
  ]
}
```

### Example: Pricing FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I run SealMetrics alongside Google Analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many clients run both in parallel during the transition period."
      }
    }
  ]
}
```

---

## 7. LLM Discoverability

### llms.txt

Create `/public/llms.txt` with:

```
# SealMetrics

## What is SealMetrics?
SealMetrics is a cookieless web analytics platform that captures 100% of website traffic without cookies, consent banners, or personal data collection. It is GDPR compliant by design and stores all data exclusively in the EU.

## Key facts
- Captures 100% of visitors (vs ~13% for GA4 in the EU)
- No cookies, no consent dependency
- First-party server-side data collection
- EU-only data residency
- GDPR, ePrivacy, CCPA compliant by architecture
- AI anomaly detection (LENS) with 60+ rules
- Multi-touch revenue attribution
- 9 specialized report types
- Pricing from €390/month

## Pages
- /product — Full platform overview
- /how-it-works — Technical explanation of cookieless collection
- /pricing — Plans starting at €390/month
- /vs-ga4 — Detailed comparison with Google Analytics 4
- /security — Privacy, compliance, and infrastructure security
- /customers — Case studies and client results
- /demo — Request a personalized demo

## Comparisons
- /vs/matomo — SealMetrics vs Matomo
- /vs/plausible — SealMetrics vs Plausible
- /vs/amplitude — SealMetrics vs Amplitude

## Contact
- Demo: https://sealmetrics.com/demo
- Website: https://sealmetrics.com
```

### Entity consistency

The following definition must appear consistently across home, about, product, and structured data:

> "SealMetrics is a cookieless web analytics platform that captures 100% of website traffic without cookies, consent banners, or personal data collection."

Variations are fine but the core claim (cookieless, 100%, no PII) must be present in every definition.

### FAQ completeness

All FAQ answers must be self-contained (a LLM can cite them without additional context). Never answer with "Contact us" or "It depends" — give the direct answer, then offer contact for specifics.

---

## 8. Technical SEO

### Required files

| File | Location | Purpose |
|------|----------|---------|
| `sitemap.xml` | `/public/sitemap.xml` | Auto-generated or manual, all public URLs |
| `robots.txt` | `/public/robots.txt` | Allow all, reference sitemap |
| `llms.txt` | `/public/llms.txt` | LLM discoverability |
| `favicon.ico` | `/public/favicon.ico` | Brand icon |
| `og-image.png` | `/public/og-image.png` | Default OG image |

### robots.txt

```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://sealmetrics.com/sitemap.xml
```

### Performance targets

| Metric | Target |
|--------|--------|
| LCP | < 1.5s |
| FID | < 50ms |
| CLS | < 0.05 |
| Lighthouse Performance | > 95 |
| Lighthouse SEO | 100 |

### Canonical URLs

Every page must have a canonical URL. For static export, set in metadata:
```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: "https://sealmetrics.com/product",
  },
};
```

### Headings hierarchy

Every page must follow:
- Exactly 1 `<h1>` (the page title)
- `<h2>` for section headings
- `<h3>` for subsection headings
- Never skip levels (h1 → h3)

---

## 9. Implementation Priority

```
Phase 1 (now):
  ✅ 7 pages with basic metadata

Phase 2 (next):
  → Optimize metadata + add JSON-LD to all 7 pages
  → Create robots.txt, sitemap.xml, llms.txt
  → Add breadcrumbs component
  → Create /vs/matomo, /vs/plausible (high-intent SEO)
  → Create /data-loss-calculator (conversion tool)
  → Implement contextual interlinking across existing pages

Phase 3:
  → Create /customers + 3 case studies
  → Create /for/cmo, /for/cto, /for/dpo
  → Add "Other comparisons" cross-linking to /vs/* pages

Phase 4:
  → Blog setup (MDX) + 10 initial articles
  → Glossary + 20 terms
  → Full internal linking audit
  → OG images per page

Phase 5:
  → Monitor rankings and adjust keyword targets
  → Expand blog based on search console data
  → A/B test CTAs and page titles
```
