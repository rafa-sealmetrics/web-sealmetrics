// Fire-and-forget POST del resultado al endpoint del zoo (sealforce).
// Diseñado para correr dentro de ctx.waitUntil() — nunca debe bloquear ni romper
// la respuesta al usuario. Si el endpoint del zoo está caído, el scan ya respondió.
//
// El endpoint del zoo se implementa en Sprint 3. Mientras INGEST_URL esté vacío
// esta función es no-op (útil para dev local sin el zoo levantado).

import type { Detections, Risk } from "./types";

export interface IngestPayload {
  scannedUrl: string;
  hostname: string;
  adSpend: number;
  email: string | null;
  detections: Detections;
  risk: Risk;
  userAgent: string | null;
  referer: string | null;
  scannedAt: string;
}

interface IngestArgs {
  url: string;
  token: string;
  payload: IngestPayload;
}

export async function sendIngest({ url, token, payload }: IngestArgs): Promise<void> {
  if (!url) return;

  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(5000),
    });
  } catch (err) {
    // Solo logueamos — nunca propagamos. El user ya tiene su respuesta.
    console.error("ingest_failed", {
      url,
      hostname: payload.hostname,
      error: err instanceof Error ? err.message : String(err),
    });
  }
}
