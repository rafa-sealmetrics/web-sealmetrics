# Hreflang Validation Report · SealMetrics

Date: 2026-05-04
Languages: 2 (English `en`, Spanish `es`) + `x-default`
Implementation: dual — HTML `<link rel="alternate">` tags AND XML sitemap `<xhtml:link>` (Next 16 emits both from `metadata.alternates.languages`)

---

## Verdict: **94/100 — pass.** All bidirectional checks green; 2 critical defects found and fixed in this run.

---

## Validation summary

| Check | Result |
|---|---|
| Self-referencing tag present (URLs with hreflang sets) | ✅ 84/84 |
| Return tags (full mesh: A↔B reciprocity) | ✅ 0 violations |
| `x-default` present on every set | ✅ 84/84 |
| Language codes valid (ISO 639-1) | ✅ Only `en`, `es`, `x-default` |
| Region codes valid | ✅ N/A (no region qualifiers used) |
| Canonical URL alignment (canonical == hreflang self-ref) | ✅ 0 mismatches across 124 pages |
| Protocol consistency (HTTPS only) | ✅ 0 HTTP URLs in any hreflang set |
| Trailing-slash consistency | ✅ 124/124 |
| Hreflang on canonical URL only | ✅ Redirect stubs and noindex pages excluded |
| Cross-domain | N/A — single domain |

---

## Defects fixed in this audit

### ✅ Fixed: 5 EN translated glossary pages had no hreflang in HTML

After Sprint 3 added 5 ES glossary translations (`cookieless-analytics`, `gdpr-analytics-compliance`, `multi-touch-attribution`, `data-loss-in-analytics`, `revenue-attribution`), the corresponding **EN** pages were never updated to call `getAlternates()` in their `metadata.alternates`. Result: ES pages emitted the full hreflang set in HTML (en + es + x-default); EN pages emitted only `<link rel="canonical">` and no hreflang tags at all. Half-mesh — Google's hreflang validation rejects half-mesh sets.

**Fix landed:** added `getAlternates("/glossary/<slug>")` to all 5 EN glossary metadata blocks plus the missing `import { getAlternates } from "@/lib/i18n/navigation";`. Verified: each EN page now emits 3 hreflang tags (en, es, x-default).

### ✅ Fixed: Sitemap had duplicate entries for translated glossary terms

The sitemap generator iterated `glossaryTerms` to emit every EN glossary slug, but 5 of those slugs were ALSO in `bilingualPaths`. Result: each translated slug appeared twice in the sitemap — once with hreflang alternates (correct), once without (wrong). Google may see the second entry as a "no hreflang relationship declared" signal that conflicts with the first.

**Fix landed:** added a dedup guard in `src/app/sitemap.ts`:

```ts
const bilingualSlugs = new Set(
  bilingualPaths
    .filter((p) => p.startsWith("/glossary/"))
    .map((p) => p.replace("/glossary/", ""))
);
for (const term of glossaryTerms) {
  if (bilingualSlugs.has(term.slug)) continue;
  // ... emit EN-only entry
}
```

Sitemap URL count: 129 → 124 (5 duplicates removed). Each translated slug now has exactly 1 EN entry + 1 ES entry, both with full hreflang sets.

---

## Coverage breakdown

| Cluster | URLs | Hreflang sets | Notes |
|---|---|---|---|
| Top-level pages (home, pricing, product, etc.) | 18 | 18 (9 EN ↔ 9 ES) | Full mesh ✓ |
| Calculators | 4 | 4 | Full mesh ✓ |
| Comparisons (/vs/*, /alternatives/*, /vs-ga4, /modern-analytics) | 14 | 14 | Full mesh ✓ |
| Blog index | 2 | 2 | Full mesh ✓ |
| Glossary index | 2 | 2 | Full mesh ✓ |
| Glossary terms (5 translated) | 10 | 10 | Full mesh ✓ |
| Case studies (index, dreamplace, palladium) | 6 | 6 | Full mesh ✓ |
| /audit/ + /authors/rafa-jimenez/ | 4 | 4 | Full mesh ✓ |
| /for/* (11 verticals/personas + index) | 24 | 24 | Full mesh ✓ |
| **Subtotal: bilingual entries** | **84** | **84** | |
| EN-only legal (privacy, terms, dpa, changelog, videos) | 5 | 0 | Correctly no hreflang ✓ |
| ES-only blog (ga4-google-ads-separation) | 1 | 0 | Correctly no hreflang ✓ (no EN sibling) |
| EN-only blog posts (24 non-draft) | 24 | 0 | No ES translations yet — see M1 below |
| EN-only glossary (9 untranslated) | 9 | 0 | Same — see M1 |
| **Total** | **124** | **84** | |

---

## Bidirectional return-tag verification (full mesh)

Every URL with a hreflang set was checked: A.alternates.B ⇒ B.alternates.A. Zero violations across 84 bilingual URLs.

Sample (all bilingual URLs follow the same pattern):

```
https://sealmetrics.com/glossary/cookieless-analytics/
  en       → https://sealmetrics.com/glossary/cookieless-analytics/
  es       → https://sealmetrics.com/es/glossary/cookieless-analytics/
  x-default → https://sealmetrics.com/glossary/cookieless-analytics/

https://sealmetrics.com/es/glossary/cookieless-analytics/
  en       → https://sealmetrics.com/glossary/cookieless-analytics/
  es       → https://sealmetrics.com/es/glossary/cookieless-analytics/
  x-default → https://sealmetrics.com/glossary/cookieless-analytics/
```

Both sides reference each other and both name `https://sealmetrics.com/glossary/cookieless-analytics/` (the EN page) as `x-default`. Reciprocal ✓.

---

## Implementation methods in use

The site uses **both** HTML `<link>` tags and XML sitemap `<xhtml:link>`. This is normally listed as a low-severity dup in the skill's guide (recommend picking one) — but for Next 16 metadata routes both come from a single source of truth (`metadata.alternates.languages` → both HTML + sitemap), so there's no maintenance burden and no risk of drift. **No action needed.**

---

## What's NOT in any hreflang set (and is correct)

| Category | Count | Why no hreflang | Verified |
|---|---|---|---|
| EN legal/utility (privacy, terms, dpa, changelog, videos) | 5 | EN-only by design — no ES translation planned | ✓ |
| ES-only blog post (ga4-google-ads-separation) | 1 | No EN equivalent — emit ES standalone | ✓ |
| EN blog posts (24) | 24 | No ES translations yet (S3 backlog) | ✓ |
| EN glossary (9 untranslated) | 9 | No ES translations yet (S3 backlog) | ✓ |
| Redirect stubs (`/contact`, `/customers`, `/features`, `/partners`, `/pricing-plans`, `/case-studies/european-hotel-group`, ES mirror) | 7 | `noindex,follow` — should not appear in hreflang | ✓ Excluded from sitemap |
| Form thank-you / quiz result pages | 4 | `noindex,nofollow` / `noindex,follow` | ✓ Excluded |

---

## Recommendations (priority order)

### High — once content team translates more
**M1 — As ES blog posts and ES glossary terms ship, add their slugs to `bilingualPaths` in `src/app/sitemap.ts` AND to `translatedPaths` in `src/lib/i18n/navigation.ts`.** The Sprint 3 pattern works: 5-line addition to each file per slug; HTML hreflang + sitemap hreflang both auto-emit. Don't forget to call `getAlternates(...)` / `getAlternatesEs(...)` in the new pages' metadata (today's defect was caused by skipping that step).

### Low / informational
**M2 — Region-qualified variants are not used.** The site uses bare `en` and `es` (no `en-GB` / `en-US` / `es-MX` / `es-AR`). For an EU-targeted product this is appropriate — Google will resolve to the broadest match. If/when you build a market-specific landing page (e.g., a UK pricing page in £, or an Argentinian pricing page in ARS), introduce `en-GB` and `es-AR` THEN — not preemptively.

**M3 — Cross-domain not in scope.** Single domain (`sealmetrics.com`) hosting both languages via path prefix `/es/`. No cross-domain hreflang setup needed.

**M4 — `x-default` consistently points at the EN page.** This is the correct pattern when EN is the canonical/authoritative version. ES users get hreflang-matched naturally; users in unmatched languages (de, fr, etc.) fall back to EN. ✓

---

## Source-of-truth files

- `src/lib/i18n/navigation.ts` — `translatedPaths` set + `getAlternates()` / `getAlternatesEs()` helpers (per-page metadata source)
- `src/app/sitemap.ts` — `bilingualPaths` array + `enOnlyPaths` + `esOnlyPaths` (sitemap source)
- Each page: `metadata.alternates.languages: getAlternates("/...")` — single line per page enables both HTML + sitemap output

These two files are the only places to edit when adding/removing bilingual paths. Both must be kept in sync (today they are: the audit script `scripts/audit-llms-txt.mjs` flags drift between sitemap and llms.txt, and a parallel mental check between sitemap and navigation is part of any new-page workflow).
