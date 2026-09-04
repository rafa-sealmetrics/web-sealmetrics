# Generate Sitemap & Robots

## Read this before doing anything

**The sitemap is generated, not written.** `src/app/sitemap.ts` derives it at
build time and there is no `public/sitemap.xml` — this file used to tell you to
hand-write one, complete with a `changefreq`/`priority` table Google has ignored
for years. Writing that file would shadow the generated one with a stale copy.

Three things are derived, and each replaced a hand-maintained list that drifted:

- **Which routes are in it** comes from each page's own `robots` metadata, via
  `src/lib/seo/routes.ts`. To keep a page out, mark it `noindex` — never add it
  to an exclusion list. The previous hand-written list silently shipped three
  `noindex` posts into the sitemap.
- **`lastmod` for a blog post** comes from `postDates()` reading
  `src/lib/content/blog.ts` — the revision date when there is one, the
  publication date otherwise, per locale.
- **`lastmod` for every other page** comes from a hash of the rendered text
  (`scripts/stamp-sitemap-lastmod.mjs`), so a design pass or a class rename does
  not re-date the page. `.seo-lastmod.json` is committed state: when the build
  changes it, commit it.

## So what is there to do?

### Adding a page
Nothing here. Create the page, and add its hand-written line to
`public/llms.txt` — that is the one index that is editorial. `npm run build`
fails if the two disagree.

### Removing a page from the index
Set `robots: { index: false }` in its metadata.

### Changing robots.txt
`public/robots.txt` is hand-written and deliberate. Two rules must survive any
edit, both documented in the file itself:

- `.md` twins are `Disallow`ed for Googlebot, Bingbot, DuckDuckBot and
  YandexBot, and `Allow`ed for the AI crawlers. Removing those lines would let
  a plain-text copy of every page compete with the HTML in the search index.
- The AI crawler allowlist (GPTBot, ClaudeBot, PerplexityBot and the rest) is
  the whole point of the GEO work. Do not narrow it without a reason written
  down.

`tests/seo.test.mjs` asserts both.

## Verify

```bash
npm run build && npm test
```

`audit-llms-txt` reports drift, `seo-audit` checks that no `noindex` page
reached the sitemap and that every indexable one did.

## Input
$ARGUMENTS — ignored. There is nothing to generate; see above.
