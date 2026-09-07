import { describe, expect, it } from "vitest";
import { guardUrl } from "../src/url-guard";

describe("guardUrl", () => {
  it("acepta una URL https válida", () => {
    const r = guardUrl("https://example.com");
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.url.hostname).toBe("example.com");
  });

  it("acepta una URL http válida", () => {
    const r = guardUrl("http://example.com/path");
    expect(r.ok).toBe(true);
  });

  it("normaliza URL sin protocolo a https", () => {
    const r = guardUrl("example.com");
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.url.protocol).toBe("https:");
  });

  it("rechaza string vacío", () => {
    const r = guardUrl("   ");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("invalid_url");
  });

  it("rechaza protocolos no permitidos", () => {
    const r = guardUrl("ftp://example.com");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("invalid_url");
  });

  it("rechaza javascript: URLs", () => {
    const r = guardUrl("javascript:alert(1)");
    expect(r.ok).toBe(false);
  });

  it("rechaza localhost", () => {
    expect(guardUrl("http://localhost").ok).toBe(false);
    expect(guardUrl("http://localhost:8080").ok).toBe(false);
  });

  it("rechaza 127.0.0.1 y rango loopback", () => {
    expect(guardUrl("http://127.0.0.1").ok).toBe(false);
    expect(guardUrl("http://127.5.5.5").ok).toBe(false);
  });

  it("rechaza 0.0.0.0", () => {
    expect(guardUrl("http://0.0.0.0").ok).toBe(false);
  });

  it("rechaza rangos RFC1918", () => {
    expect(guardUrl("http://10.0.0.1").ok).toBe(false);
    expect(guardUrl("http://192.168.1.1").ok).toBe(false);
    expect(guardUrl("http://172.16.0.1").ok).toBe(false);
    expect(guardUrl("http://172.31.255.255").ok).toBe(false);
  });

  it("acepta IPs públicas que están justo fuera de RFC1918", () => {
    expect(guardUrl("http://172.15.0.1").ok).toBe(true);
    expect(guardUrl("http://172.32.0.1").ok).toBe(true);
    expect(guardUrl("http://11.0.0.1").ok).toBe(true);
  });

  it("rechaza link-local 169.254.x.x", () => {
    expect(guardUrl("http://169.254.169.254").ok).toBe(false);
  });

  it("rechaza CGNAT 100.64/10", () => {
    expect(guardUrl("http://100.64.0.1").ok).toBe(false);
  });

  it("rechaza multicast y reservados", () => {
    expect(guardUrl("http://224.0.0.1").ok).toBe(false);
    expect(guardUrl("http://239.0.0.1").ok).toBe(false);
  });

  it("rechaza hosts sin punto (intranet)", () => {
    expect(guardUrl("http://intranet").ok).toBe(false);
  });

  it("rechaza loopback IPv6", () => {
    expect(guardUrl("http://[::1]").ok).toBe(false);
  });

  it("rechaza link-local IPv6 fe80::", () => {
    expect(guardUrl("http://[fe80::1]").ok).toBe(false);
  });

  it("rechaza ULA IPv6 fc00::/7", () => {
    expect(guardUrl("http://[fc00::1]").ok).toBe(false);
    expect(guardUrl("http://[fd12::1]").ok).toBe(false);
  });
});
