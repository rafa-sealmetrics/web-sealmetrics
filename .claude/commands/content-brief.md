# Content Brief

Generate a detailed content brief for a new page or blog post before building it.

## Steps

1. **Read `SEO-STRATEGY.md`** to understand topic clusters, keyword map, and interlinking rules
2. **Read `PRD.md`** to check if the page has a spec already
3. **Read `CLAUDE.md`** for design and copy rules

## Generate the brief with:

### Page identity
- **URL**: The final URL path
- **Page type**: Pillar / Comparison / Blog / Glossary / Landing / Tool
- **Topic cluster**: Which cluster (Product, Comparisons, Compliance, Education)
- **Primary keyword**: Main search term to target
- **Secondary keywords**: 3-5 related terms
- **Search intent**: Informational / Navigational / Transactional / Commercial

### Content structure
- **H1**: Exact headline (includes primary keyword)
- **Meta title**: <60 chars (includes brand + keyword)
- **Meta description**: <160 chars (includes CTA language)
- **Sections**: Ordered list of H2 sections with brief description of each
- **Word count target**: Estimated length

### Interlinking plan
- **Links TO this page from**: List existing pages that should link here
- **Links FROM this page to**: List pages this should link to (per interlinking rules)
- **Glossary terms to link**: First mentions that should link to /glossary/[term]
- **CTA destination**: /demo, /pricing, or /data-loss-calculator

### SEO elements
- **JSON-LD type**: Which schema.org type applies
- **Breadcrumb path**: Home > [Parent] > [Page]
- **OG image**: Description of what it should show

### Conversion elements
- **Primary CTA**: Text and destination
- **Secondary CTA**: Text and destination (if applicable)
- **Social proof**: What type (testimonial, metric, logo, case study)

## Output
Present the brief as a structured markdown document. Ask the user to approve before building.

## Input
$ARGUMENTS — Required: topic or page name (e.g., "blog post about GA4 data loss", "vs matomo comparison", "glossary term cookieless analytics")
