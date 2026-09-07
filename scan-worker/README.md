# scan-worker

Cloudflare Worker que sirve `scan.sealmetrics.com`. Es el backend del
**Ad Leakage Scanner** (lead-magnet de la web). Recibe `{ url, adSpend, email?,
turnstileToken }`, hace un fetch público del HTML del sitio, detecta señales de
tracking, calcula un grade de seguridad de atribución y una estimación de
leakage mensual, devuelve JSON al frontend y manda una copia al endpoint de
persistencia del zoo (Sprint 3).

No usa Puppeteer ni headless browser — solo `fetch` del HTML crudo.

## Stack

- Cloudflare Workers (ESM, `compatibility_date 2025-01-15`)
- TypeScript estricto
- Vitest para tests unitarios
- Cero dependencias en runtime (solo APIs estándar Web)
- KV namespace `RATE_LIMIT` para rate-limit por hostname target
- Cloudflare Turnstile como anti-bot (sin cookies, sin fingerprinting)

## Estructura

```
scan-worker/
├── src/
│   ├── index.ts        # entry point Worker, orquestación
│   ├── types.ts        # tipos compartidos
│   ├── url-guard.ts    # validación URL + bloqueo IPs internas (anti-SSRF)
│   ├── fetch-html.ts   # fetch con timeout + límite de bytes
│   ├── detections.ts   # regex sobre HTML para GA/GTM/Meta/TikTok/CMP/platform
│   ├── grading.ts      # cálculo grade + leakage
│   ├── turnstile.ts    # verify token Turnstile
│   ├── rate-limit.ts   # KV-backed rate-limit por hostname
│   └── ingest.ts       # POST fire-and-forget al endpoint del zoo
├── tests/
│   ├── url-guard.test.ts
│   ├── detections.test.ts
│   └── grading.test.ts
├── wrangler.toml
├── tsconfig.json
└── package.json
```

## Endpoints

`POST /api/scan` (CORS limitado a `ALLOWED_ORIGINS`):

```json
{
  "url": "https://example.com",
  "adSpend": 50000,
  "email": "buyer@brand.com",
  "turnstileToken": "..."
}
```

Respuesta éxito:

```json
{
  "ok": true,
  "scannedUrl": "https://example.com/",
  "detections": {
    "ga4Detected": true,
    "gtmDetected": false,
    "metaPixelDetected": true,
    "tiktokPixelDetected": false,
    "consentBannerDetected": true,
    "platform": "shopify"
  },
  "risk": {
    "attributionSecurityGrade": "F",
    "cookieDependentTracking": true,
    "estimatedBlindSpotRate": 0.35,
    "blindTrafficValue": 17500,
    "estimatedMonthlyLeakage": 3500
  }
}
```

Respuesta error:

```json
{ "ok": false, "code": "rate_limited", "error": "..." }
```

`GET /health` — liveness simple.

## Rate-limit

- **Por hostname target**, NO por IP del visitante. Sin cookies, sin
  fingerprinting → no requiere banner de consentimiento.
- Defaults: `1/hora` sin email, `10/hora` con email opcional.
- Configurables vía `RATE_LIMIT_PER_HOSTNAME_NO_EMAIL` y
  `RATE_LIMIT_PER_HOSTNAME_WITH_EMAIL` en `wrangler.toml`.

## Setup — pasos manuales (Rafa)

### 1. Instalar deps

```bash
cd ~/code/web-sealmetrics/scan-worker
npm install
```

### 2. Login en Cloudflare

```bash
npx wrangler login
```

### 3. Crear KV namespace para rate-limit

```bash
npx wrangler kv namespace create RATE_LIMIT
```

Esto imprime un `id`. Pégalo en `wrangler.toml`:

```toml
[[kv_namespaces]]
binding = "RATE_LIMIT"
id = "PEGAR_AQUI"
```

### 4. Crear sitio en Turnstile

1. Abrir https://dash.cloudflare.com → Turnstile → Add site.
2. Domain: `sealmetrics.com`.
3. Widget mode: **Invisible** (o Managed si prefieres ver el badge).
4. Copiar **Site Key** (pública, va al frontend en Sprint 2) y **Secret Key**.

### 5. Guardar el secret en el Worker

```bash
npx wrangler secret put TURNSTILE_SECRET
# pegar la Secret Key cuando lo pida
```

(Para Sprint 3 también `npx wrangler secret put INGEST_TOKEN`, pero todavía no
hace falta — `INGEST_URL` está vacío en `wrangler.toml` y la función ingest es
no-op mientras esté vacío.)

### 6. Configurar el subdominio scan.sealmetrics.com

En Cloudflare dashboard → Workers & Pages → `scan-worker` → Settings →
Triggers → Custom Domains → **Add Custom Domain** → `scan.sealmetrics.com`.

Cloudflare crea el registro DNS automáticamente.

### 7. Deploy

```bash
npx wrangler deploy
```

## Local dev

```bash
cp .dev.vars.example .dev.vars
# editar .dev.vars con tu Turnstile secret de testing
npm run dev
```

Turnstile en local: usa la **testing secret** `1x0000000000000000000000000000000AA`
(siempre passes) o `2x0000000000000000000000000000000AA` (siempre falla).

## Tests

```bash
npm test
```

## Sprint 3 (pendiente)

Cuando el endpoint de ingest del zoo esté listo:

1. `npx wrangler secret put INGEST_TOKEN`
2. Editar `wrangler.toml` y poner `INGEST_URL = "https://<host>/scan-leads"`.
3. Redeploy.
