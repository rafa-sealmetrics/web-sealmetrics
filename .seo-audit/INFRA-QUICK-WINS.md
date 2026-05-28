# Infrastructure Quick Wins — actions only you can take

Two of the Top 5 Quick Wins require dashboard access (GitHub Pages + Fastly). Code can't do these.

---

## QW#1 — Enforce HTTPS on GitHub Pages (2 min)

**What**: Force every `http://sealmetrics.com/*` request to 301 to `https://`. Today they return 200 over plain HTTP — a credibility and ranking hit for a privacy-positioned vendor.

**Steps**:
1. Go to https://github.com/sealmetrics/web-sealmetrics/settings/pages (replace org/repo with the real one).
2. Under **Custom domain**, confirm `sealmetrics.com` is set.
3. Tick the **Enforce HTTPS** checkbox.
4. Wait ~1 minute for the redirect to propagate.

**Verify** (from your shell after the change):
```bash
curl -sI http://sealmetrics.com/ | head -1
# Expected: HTTP/1.1 301 Moved Permanently
```

If the checkbox is greyed out, GitHub is still provisioning the cert — wait 15 min and refresh.

---

## QW#5 — Fastly cache TTL on `/_next/static/*` (10–20 min)

**What**: Hashed Next.js assets (CSS, JS chunks, fonts) under `/_next/static/*` are immutable by design — once built they never change. Today Fastly caches them for **10 minutes**. We should cache them for **1 year**. Projected: ~1350ms LCP saving on repeat visits.

**Steps** (in Fastly UI):

1. Log in to https://manage.fastly.com → pick the `sealmetrics.com` service.
2. **Configure** → **Edit configuration** → clone the active version.
3. Add a new **Header** action (or VCL snippet if you prefer):

### Option A — Header action (UI, easier)
- Type: **Cache**
- Name: `Immutable cache for hashed assets`
- Action: **Set**
- Destination: `http.Cache-Control`
- Source: `"public, max-age=31536000, immutable"`
- Condition (Request): `req.url.path ~ "^/_next/static/"`

### Option B — VCL snippet (more control)
In **VCL Snippets** → **+ Create Snippet**:
- Name: `immutable-next-static`
- Type: `vcl_deliver`
- Code:

```vcl
if (req.url ~ "^/_next/static/") {
  set resp.http.Cache-Control = "public, max-age=31536000, immutable";
  unset resp.http.Set-Cookie;
}
```

4. **Activate** the new version.

**Verify** (after activation):
```bash
# Pick any hashed asset URL from the live HTML
ASSET=$(curl -s https://sealmetrics.com/ | grep -oE '/_next/static/chunks/[a-z0-9]+\.css' | head -1)
curl -sI "https://sealmetrics.com$ASSET" | grep -i cache-control
# Expected: cache-control: public, max-age=31536000, immutable
```

### While you're in Fastly — bonus: ship the security headers (QW related, not Top 5 but Critical from the audit)

Same VCL snippet location, append:

```vcl
set resp.http.Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload";
set resp.http.X-Content-Type-Options = "nosniff";
set resp.http.Referrer-Policy = "strict-origin-when-cross-origin";
set resp.http.X-Frame-Options = "SAMEORIGIN";
set resp.http.Permissions-Policy = "interest-cohort=(), browsing-topics=()";
```

(Skip CSP for now — it needs a Report-Only tuning pass first.)

---

## What you should expect after both ship

- `http://` returns 301 → `https://` (instead of 200).
- `Strict-Transport-Security` header present on every response.
- Hashed Next.js assets get a 1-year cache on repeat visits.
- Mobile LCP should drop from ~7.5s simulated to ~3s simulated on the next Lighthouse run.

Once these are deployed, re-run `/seo-audit` — projected health score lifts from **74 → ~85**.
