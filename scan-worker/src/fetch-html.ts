// Fetch del HTML target con límites estrictos:
//   - timeout vía AbortSignal
//   - User-Agent realista (algunas webs bloquean fetchers anónimos)
//   - lectura limitada por bytes (evita respuestas gigantes que rompan el Worker)
//   - sólo cuerpo de tipo text/html — si el servidor devuelve algo raro, abortamos
//
// Cloudflare resuelve los redirects automáticamente con `redirect: "follow"`.
// El URL final lo exponemos para que el caller pueda mostrarlo como `scannedUrl`.

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_4) AppleWebKit/605.1.15 " +
  "(KHTML, like Gecko) Version/17.4 Safari/605.1.15 SealmetricsScanner/1.0";

export interface FetchHtmlOk {
  ok: true;
  html: string;
  finalUrl: string;
  status: number;
}

export interface FetchHtmlErr {
  ok: false;
  reason: "timeout" | "network" | "non_html" | "http_error" | "empty";
  status?: number;
  detail: string;
}

export type FetchHtmlResult = FetchHtmlOk | FetchHtmlErr;

interface FetchHtmlOptions {
  timeoutMs: number;
  maxBytes: number;
}

export async function fetchHtml(url: URL, opts: FetchHtmlOptions): Promise<FetchHtmlResult> {
  let response: Response;
  try {
    response = await fetch(url.toString(), {
      method: "GET",
      redirect: "follow",
      signal: AbortSignal.timeout(opts.timeoutMs),
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const isTimeout = err instanceof Error && err.name === "TimeoutError";
    return {
      ok: false,
      reason: isTimeout ? "timeout" : "network",
      detail: message,
    };
  }

  if (!response.ok) {
    return {
      ok: false,
      reason: "http_error",
      status: response.status,
      detail: `Upstream returned ${response.status}`,
    };
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (contentType && !/text\/html|application\/xhtml/i.test(contentType)) {
    return {
      ok: false,
      reason: "non_html",
      status: response.status,
      detail: `Content-Type not HTML: ${contentType}`,
    };
  }

  const body = response.body;
  if (!body) {
    return { ok: false, reason: "empty", detail: "Empty response body" };
  }

  // Lectura con tope de bytes: en cuanto pasamos maxBytes, cancelamos el stream
  // y nos quedamos con lo leído. Suficiente para detectar tags en el <head> y primer <body>.
  const reader = body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  try {
    while (total < opts.maxBytes) {
      const { value, done } = await reader.read();
      if (done) break;
      if (value) {
        chunks.push(value);
        total += value.byteLength;
      }
    }
  } finally {
    try {
      await reader.cancel();
    } catch {
      // ignoramos errores de cierre del stream
    }
  }

  if (total === 0) {
    return { ok: false, reason: "empty", detail: "No bytes read" };
  }

  const merged = new Uint8Array(Math.min(total, opts.maxBytes));
  let offset = 0;
  for (const c of chunks) {
    const remaining = merged.length - offset;
    if (remaining <= 0) break;
    const slice = c.subarray(0, Math.min(c.byteLength, remaining));
    merged.set(slice, offset);
    offset += slice.byteLength;
  }

  const html = new TextDecoder("utf-8").decode(merged);

  return {
    ok: true,
    html,
    finalUrl: response.url || url.toString(),
    status: response.status,
  };
}
