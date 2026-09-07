// Validación y normalización de la URL target.
// Bloquea IPs internas/loopback para evitar SSRF contra la propia red de Cloudflare,
// metadata services de cloud o el host del cliente.

export interface UrlGuardOk {
  ok: true;
  url: URL;
}

export interface UrlGuardErr {
  ok: false;
  reason: "invalid_url" | "blocked_host";
  detail: string;
}

export type UrlGuardResult = UrlGuardOk | UrlGuardErr;

const BLOCKED_HOSTNAMES = new Set([
  "localhost",
  "ip6-localhost",
  "ip6-loopback",
  "broadcasthost",
]);

// Rangos privados / reservados que nunca deben resolverse desde un Worker público.
function isBlockedIPv4(hostname: string): boolean {
  const parts = hostname.split(".");
  if (parts.length !== 4) return false;
  const octets = parts.map((p) => Number(p));
  if (octets.some((n) => !Number.isInteger(n) || n < 0 || n > 255)) return false;
  const [a, b] = octets as [number, number, number, number];
  if (a === 10) return true;
  if (a === 127) return true;
  if (a === 0) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;
  if (a >= 224) return true;
  return false;
}

function isBlockedIPv6(hostname: string): boolean {
  const h = hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (h === "::1" || h === "::") return true;
  if (h.startsWith("fe80:")) return true;
  if (h.startsWith("fc") || h.startsWith("fd")) return true;
  if (h.startsWith("ff")) return true;
  return false;
}

export function guardUrl(input: string): UrlGuardResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return { ok: false, reason: "invalid_url", detail: "Empty URL" };
  }

  // Si el usuario escribe un protocolo explícito que no es http/https, lo rechazamos
  // antes de tocar nada (evita que ftp://, javascript:, file:, etc. acaben tratados
  // como path tras añadir "https://" delante).
  const explicitProtocol = trimmed.match(/^([a-z][a-z0-9+.-]*):/i);
  if (explicitProtocol) {
    const proto = explicitProtocol[1]?.toLowerCase();
    if (proto !== "http" && proto !== "https") {
      return {
        ok: false,
        reason: "invalid_url",
        detail: `Protocol not allowed: ${proto}`,
      };
    }
  }

  // Normalización: si no trae protocolo, asumimos https://
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  let url: URL;
  try {
    url = new URL(withProtocol);
  } catch {
    return { ok: false, reason: "invalid_url", detail: "Malformed URL" };
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return { ok: false, reason: "invalid_url", detail: "Protocol must be http or https" };
  }

  const hostname = url.hostname.toLowerCase();

  if (!hostname) {
    return { ok: false, reason: "invalid_url", detail: "Missing hostname" };
  }

  if (BLOCKED_HOSTNAMES.has(hostname)) {
    return { ok: false, reason: "blocked_host", detail: `Host not allowed: ${hostname}` };
  }

  // Hosts sin punto (intranet): bloqueamos por defecto, salvo el caso ya cubierto arriba.
  if (!hostname.includes(".") && !hostname.includes(":")) {
    return { ok: false, reason: "blocked_host", detail: `Host not allowed: ${hostname}` };
  }

  if (isBlockedIPv4(hostname)) {
    return { ok: false, reason: "blocked_host", detail: `Internal IPv4 not allowed: ${hostname}` };
  }

  if (hostname.includes(":") && isBlockedIPv6(hostname)) {
    return { ok: false, reason: "blocked_host", detail: `Internal IPv6 not allowed: ${hostname}` };
  }

  return { ok: true, url };
}
