# Infrastructure Runbook · SealMetrics

Operational tasks that live outside the codebase. Run in the listed order. Each section ends with a verification command — paste it into your terminal after applying the change.

---

## 1. Enforce HTTPS at GitHub Pages

**Where:** GitHub repo → Settings → Pages.
**Why:** `curl -sI http://sealmetrics.com/` currently returns `200`. Should return `301` to HTTPS. For a privacy/compliance vendor this is the single most damaging trust signal. Sprint 2 critical S2.1.

**Action:**
1. Repo Settings → Pages → "Enforce HTTPS" → toggle ON.
2. Wait ~5 minutes for GitHub to provision the redirect.

**Verify:**
```sh
curl -sI http://sealmetrics.com/ | head -3
# Expected: HTTP/1.1 301 Moved Permanently, Location: https://sealmetrics.com/
```

---

## 2. Security headers at Fastly (VCL)

**Where:** Fastly service for `sealmetrics.com` → VCL Snippets → "init" stage.
**Why:** Zero security headers on production response. Same root cause as #1.

**VCL snippet** (paste into a new init-stage snippet named `security-headers`):

```vcl
sub vcl_deliver {
  # HSTS — 1 year, all subdomains, preload-eligible
  set resp.http.Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload";

  # MIME-sniffing protection
  set resp.http.X-Content-Type-Options = "nosniff";

  # Referrer policy — leak only the origin to cross-origin requests
  set resp.http.Referrer-Policy = "strict-origin-when-cross-origin";

  # Permissions policy — explicitly disable powerful features we don't use
  set resp.http.Permissions-Policy = "camera=(), microphone=(), geolocation=(), interest-cohort=()";

  # Clickjacking protection — site is not designed to be framed by 3rd parties
  set resp.http.X-Frame-Options = "DENY";

  # Content-Security-Policy in report-only first; promote to enforce after 1 week of clean reports
  set resp.http.Content-Security-Policy-Report-Only = "default-src 'self'; script-src 'self' 'unsafe-inline' https://pixel.sealmetrics.com https://my.sealmetrics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://pixel.sealmetrics.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://my.sealmetrics.com;";
}
```

**Verify:**
```sh
curl -sI https://sealmetrics.com/ | grep -iE "strict-transport|x-content-type|referrer|permissions-policy|x-frame|content-security"
# Expected: 6 lines, all present
```

After 1 week of clean CSP reports → swap `Content-Security-Policy-Report-Only` for `Content-Security-Policy`.

---

## 3. Static asset cache override (VCL)

**Where:** Fastly service → VCL Snippets → "fetch" stage.
**Why:** `cache-control: max-age=600` on every `_next/static/*` chunk wastes the entire fingerprinted-hash pattern. Sprint 2 critical S2.2.

**VCL snippet** (paste into a new fetch-stage snippet named `static-asset-cache`):

```vcl
sub vcl_fetch {
  # Next.js fingerprinted assets — content-addressed by hash, safe to cache forever
  if (req.url ~ "^/_next/static/") {
    set beresp.http.Cache-Control = "public, max-age=31536000, immutable";
    set beresp.ttl = 31536000s;
  }

  # Public assets (images, fonts, manifest) — 30 days; long enough to amortise, short enough to recover from a wrong-asset push
  if (req.url ~ "^/(logos|brands|clients|fonts|favicon|manifest)") {
    set beresp.http.Cache-Control = "public, max-age=2592000";
    set beresp.ttl = 2592000s;
  }
}
```

**Verify:**
```sh
# Pick any chunk path from the latest deploy
CHUNK=$(curl -s https://sealmetrics.com/ | grep -oE "/_next/static/chunks/[a-f0-9]+\.js" | head -1)
curl -sI "https://sealmetrics.com$CHUNK" | grep -i cache-control
# Expected: cache-control: public, max-age=31536000, immutable
```

---

## 4. Pixel environment variable in deploy workflow

**Where:** `.github/workflows/<deploy>.yml` (whichever workflow runs `npm run build` for production).
**Why:** Source default in `src/lib/sealmetrics.ts:3` is now `https://pixel.sealmetrics.com` (Sprint 1 S1.3). For preprod deploys, set the env var explicitly so preprod ships preprod-bound JS.

**Production workflow:** no change needed. Default is correct.

**Preprod workflow:** add to the build step's `env:` block:
```yaml
env:
  NEXT_PUBLIC_SEALMETRICS_PIXEL_URL: https://pixel-pre.sealmetrics.com
```

**Verify after first preprod deploy:**
```sh
curl -s https://preprod.sealmetrics.com/ | grep -c "pixel-pre"
# Expected: ≥ 1
curl -s https://sealmetrics.com/ | grep -c "pixel-pre"
# Expected: 0
```

---

## Order of operations (recommended)

1. **First**: section 4 (pixel env). One-line change, blocks no future work, prevents regression on next preprod deploy.
2. **Second**: section 1 (HTTPS toggle). Free, zero downtime.
3. **Third**: section 2 (security headers). Deploy CSP in report-only first; monitor Fastly logs for `csp-report` entries for 1 week.
4. **Fourth**: section 3 (cache override). Largest perf win; ensure step 1 + 2 are stable before changing cache rules.

After all four, re-run `/seo-audit`. Expected score: 73 → ~80 (Sprint 1 already brought it here in source; deploy + headers ship the gains).
