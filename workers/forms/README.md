# SealMetrics forms proxy

First-party Cloudflare Worker for the static marketing website. Browsers submit
to `/api/forms`; the Worker validates the request and forwards the existing
payload to n8n without exposing n8n webhook URLs in the frontend or in Git.

## Runtime configuration

The following values must be stored with `wrangler secret put` and must never
be committed:

- `N8N_WEBFORM_LEAD_URL`
- `N8N_DEMO_ACCESS_URL`
- `N8N_CAREERS_URL`
- `TURNSTILE_SECRET`

`ALLOWED_ORIGINS`, `TURNSTILE_HOSTNAMES`, `TURNSTILE_ACTION`, and
`REQUIRE_TURNSTILE` are non-secret settings in `wrangler.jsonc`. Turnstile is
implemented but remains disabled until every production form renders the
challenge; rate limiting and origin validation remain active meanwhile.

## Deployment sequence

1. Run `npm ci` and `npm test` in this directory.
2. Confirm the target Cloudflare account with `npx wrangler whoami`.
3. Configure the four secrets above.
4. Deploy to the generated `workers.dev` hostname and run synthetic tests.
5. Add `forms.sealmetrics.com` as a Worker custom domain.
6. Point the static forms at `https://forms.sealmetrics.com/api/forms`.
7. Add Turnstile to every form and set `REQUIRE_TURNSTILE` to `true`.
8. Rotate the n8n webhook paths that were previously present in frontend code.
9. Confirm all six flows reach the expected mailbox before merging to `main`.

Do not enable `ALLOW_INSECURE_TESTING` outside the automated unit tests.
