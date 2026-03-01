# Optimize Page

Optimize a specific page for SEO and conversion. This skill reads the page, identifies improvements, and applies them.

## Steps

1. **Read the target page** at `src/app/$ARGUMENTS/page.tsx`
2. **Read `SEO-STRATEGY.md`** to understand cluster, keywords, and interlinking rules for this page
3. **Read `PRD.md`** section 5 for the page spec

## Apply these optimizations:

### Metadata (if missing or incomplete)
- Add/update `metadata` export with optimized `title` (<60 chars, includes primary keyword)
- Add/update `description` (<160 chars, includes CTA language)
- Add `openGraph` with title, description, type, url
- Add `alternates.canonical` with full URL

### JSON-LD (if missing)
- Add appropriate structured data for the page type
- Place as `<script type="application/ld+json">` in the page component
- Follow schemas defined in `SEO-STRATEGY.md` section 6

### Internal Links (if missing or insufficient)
- Add contextual inline links per interlinking rules
- First mention of key concepts should link to glossary
- Add "Other comparisons" section if this is a /vs/* page
- Ensure CTA links to /demo or /pricing with action-specific text

### Content improvements
- Verify h1 contains primary keyword
- Verify heading hierarchy is correct
- Check that pain-before-solution structure is followed
- Add specific numbers where vague language exists

## Output
- List all changes made
- Show before/after for metadata
- Confirm the page still builds: `cd /Users/rafa/code/web-sealmetrics && npx next build 2>&1 | tail -5`

## Input
$ARGUMENTS — Required: page route (e.g., "product", "pricing", "vs-ga4")
