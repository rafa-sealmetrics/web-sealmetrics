// Rate-limit por hostname target (NO por usuario).
// Justificación legal/UX: no usamos IP ni cookies; protegemos a los sitios target
// y a nosotros mismos contra abuso/loop de scans repetidos al mismo dominio.
//
// Si el usuario deja un email opcional, el cap por hostname sube (defaults: 1 → 10).
// El email no se almacena aquí; sólo se usa como señal de "lead que ha dado contacto".

export interface RateLimitDecision {
  allowed: boolean;
  remaining: number;
  resetSeconds: number;
}

interface CheckArgs {
  kv: KVNamespace;
  hostname: string;
  withEmail: boolean;
  capNoEmail: number;
  capWithEmail: number;
  ttlSeconds: number;
}

async function hashKey(hostname: string, withEmail: boolean): Promise<string> {
  const tag = withEmail ? "with-email" : "anon";
  const data = new TextEncoder().encode(`scan:${tag}:${hostname.toLowerCase()}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  const bytes = new Uint8Array(digest);
  let out = "";
  for (const b of bytes) out += b.toString(16).padStart(2, "0");
  return out;
}

export async function checkRateLimit(args: CheckArgs): Promise<RateLimitDecision> {
  const cap = args.withEmail ? args.capWithEmail : args.capNoEmail;
  if (cap <= 0) {
    return { allowed: false, remaining: 0, resetSeconds: args.ttlSeconds };
  }

  const key = await hashKey(args.hostname, args.withEmail);
  const existing = await args.kv.get(key);
  const current = existing ? Number(existing) : 0;

  if (current >= cap) {
    return { allowed: false, remaining: 0, resetSeconds: args.ttlSeconds };
  }

  const next = current + 1;
  // KV no soporta TTL deslizante, así que cada vez que escribimos lo refrescamos.
  // Trade-off conocido: el reset se desliza hacia adelante. Aceptable para este caso.
  await args.kv.put(key, String(next), { expirationTtl: args.ttlSeconds });

  return {
    allowed: true,
    remaining: Math.max(0, cap - next),
    resetSeconds: args.ttlSeconds,
  };
}
