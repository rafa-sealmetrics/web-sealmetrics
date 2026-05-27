"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

const API_BASE = process.env.NEXT_PUBLIC_PIXEL_AUDITOR_API ?? "";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

// Bypass de Turnstile en localhost: Cloudflare no permite hostnames
// privados sin registrarlos, así que en dev mandamos un token especial
// que el backend acepta SOLO cuando ENVIRONMENT=development.
function isLocalhost(): boolean {
  if (typeof window === "undefined") return false;
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1" || h === "0.0.0.0";
}
const DEV_BYPASS_TOKEN = "dev-bypass";

type Stage =
  | "idle"
  | "submitting"
  | "queued"
  | "running"
  | "completed"
  | "error";

interface SubmitError {
  code: number | null;
  message: string;
}

const POLL_INTERVAL_MS = 5000;
const POLL_MAX_TICKS = 60; // 5 min máximo de espera.

export function FreeAuditForm() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const [stage, setStage] = useState<Stage>("idle");
  const [auditId, setAuditId] = useState<string | null>(null);
  const [error, setError] = useState<SubmitError | null>(null);

  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const pollTicksRef = useRef(0);

  // En localhost saltamos el widget y enviamos el token dev. En cualquier
  // otro hostname el widget Turnstile es obligatorio.
  const [bypassMode, setBypassMode] = useState(false);
  useEffect(() => {
    if (isLocalhost()) {
      setBypassMode(true);
      setTurnstileToken(DEV_BYPASS_TOKEN);
    }
  }, []);

  // Polling del status mientras el audit corre.
  useEffect(() => {
    if (!auditId || (stage !== "queued" && stage !== "running")) return;

    let cancelled = false;
    const tick = async () => {
      if (cancelled) return;
      pollTicksRef.current += 1;
      try {
        const resp = await fetch(
          `${API_BASE}/public/audit/${auditId}/status`,
          { method: "GET", headers: { Accept: "application/json" } },
        );
        if (!resp.ok) throw new Error(`http_${resp.status}`);
        const data: { status: string; completed: boolean } = await resp.json();
        if (cancelled) return;

        if (data.completed) {
          setStage("completed");
        } else if (data.status === "running") {
          setStage("running");
        } else if (data.status === "failed") {
          setStage("error");
          setError({ code: null, message: "Audit failed. Please try again." });
        }

        if (pollTicksRef.current >= POLL_MAX_TICKS && !data.completed) {
          // No bloqueamos al usuario: el audit sigue en backend y el
          // email llegará igualmente. Solo paramos de pollear.
          setStage("completed");
        }
      } catch {
        // Errores transitorios de red → seguimos polleando.
      }
    };

    const interval = setInterval(tick, POLL_INTERVAL_MS);
    // Disparo inmediato para no esperar 5s la primera vez.
    void tick();
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [auditId, stage]);

  const canSubmit =
    stage === "idle" &&
    url.trim().length > 0 &&
    email.trim().length > 0 &&
    consent &&
    turnstileToken !== null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStage("submitting");
    setError(null);

    try {
      const resp = await fetch(`${API_BASE}/public/audit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url: url.trim(),
          email: email.trim(),
          locale: "en",
          turnstile_token: turnstileToken,
        }),
      });

      if (!resp.ok) {
        let detail = `Request failed (${resp.status})`;
        try {
          const data = await resp.json();
          if (data?.detail) detail = String(data.detail);
        } catch {
          // ignore
        }
        setStage("error");
        setError({ code: resp.status, message: detail });
        turnstileRef.current?.reset();
        setTurnstileToken(null);
        return;
      }

      const data: { audit_id: string; status: string } = await resp.json();
      setAuditId(data.audit_id);
      setStage("queued");
      pollTicksRef.current = 0;
    } catch (err) {
      setStage("error");
      setError({
        code: null,
        message:
          err instanceof Error
            ? `Network error: ${err.message}`
            : "Network error. Check your connection and try again.",
      });
    }
  };

  const handleReset = () => {
    setStage("idle");
    setError(null);
    setAuditId(null);
    setUrl("");
    setEmail("");
    setConsent(false);
    setTurnstileToken(null);
    turnstileRef.current?.reset();
    pollTicksRef.current = 0;
  };

  // --------------------- Render branches ---------------------

  if (stage === "completed") {
    return (
      <div className="p-10 sm:p-12 border border-warm-100 rounded-[4px] bg-warm-white text-center">
        <p className="font-serif text-[1.6rem] text-text-primary mb-3">
          Your audit is on its way
        </p>
        <p className="text-[0.9rem] text-text-secondary leading-relaxed max-w-[480px] mx-auto mb-6">
          We sent the report to <span className="font-medium text-text-primary">{email}</span>.
          Check your inbox in the next minute or two. If you do not see it, look
          in spam.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center px-6 py-2.5 text-[0.85rem] font-medium text-text-primary border border-warm-200 rounded-[4px] bg-white hover:bg-warm-100 transition-colors cursor-pointer"
        >
          Run another audit
        </button>
      </div>
    );
  }

  if (stage === "queued" || stage === "running") {
    return (
      <div className="p-10 sm:p-12 border border-warm-100 rounded-[4px] bg-warm-white text-center">
        <div className="inline-block w-8 h-8 mb-5 border-2 border-warm-200 border-t-text-primary rounded-full animate-spin" />
        <p className="font-serif text-[1.4rem] text-text-primary mb-2">
          Auditing your site
        </p>
        <p className="text-[0.85rem] text-text-secondary leading-relaxed max-w-[420px] mx-auto">
          This usually takes 1–3 minutes. You can close this tab — we will email
          the full report to <span className="font-medium text-text-primary">{email}</span> when ready.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-warm-white border border-warm-100 rounded-[4px] p-8 sm:p-10"
    >
      <h2 className="font-serif text-[1.35rem] text-text-primary mb-1">
        Audit your tracking implementation
      </h2>
      <p className="text-[0.8rem] text-text-tertiary mb-8">
        We send the full PDF report to your inbox in 1–3 minutes. Free, no
        credit card.
      </p>

      <div className="space-y-5">
        {/* URL */}
        <div>
          <label
            htmlFor="fa-url"
            className="block text-[0.8rem] font-medium text-text-body mb-1.5"
          >
            Website URL to audit
          </label>
          <input
            id="fa-url"
            type="url"
            required
            placeholder="https://yourstore.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={stage === "submitting"}
            className="w-full px-4 py-3 text-[0.95rem] border border-warm-200 rounded-[4px] bg-white text-text-primary focus:border-text-body focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-accent focus-visible:outline-offset-2 transition-colors disabled:opacity-60"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="fa-email"
            className="block text-[0.8rem] font-medium text-text-body mb-1.5"
          >
            Your business email
          </label>
          <input
            id="fa-email"
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={stage === "submitting"}
            className="w-full px-4 py-3 text-[0.95rem] border border-warm-200 rounded-[4px] bg-white text-text-primary focus:border-text-body focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-accent focus-visible:outline-offset-2 transition-colors disabled:opacity-60"
          />
          <p className="text-[0.7rem] text-text-tertiary mt-1.5 leading-relaxed">
            We send the report here. No newsletter spam — opt-out anytime.
          </p>
        </div>

        {/* Consent */}
        <label className="flex items-start gap-3 text-[0.8rem] text-text-secondary leading-relaxed cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            disabled={stage === "submitting"}
            className="mt-0.5 w-4 h-4 border border-warm-200 rounded-[2px] cursor-pointer"
          />
          <span>
            I agree to receive the audit report by email and accept the{" "}
            <Link href="/privacy" className="underline hover:text-text-primary">
              privacy policy
            </Link>
            .
          </span>
        </label>

        {/* Turnstile (oculto en localhost — dev bypass automático) */}
        {bypassMode ? (
          <p className="text-[0.7rem] text-text-tertiary italic">
            Captcha disabled in local development.
          </p>
        ) : TURNSTILE_SITE_KEY ? (
          <Turnstile
            ref={turnstileRef}
            siteKey={TURNSTILE_SITE_KEY}
            onSuccess={(token) => setTurnstileToken(token)}
            onError={() => setTurnstileToken(null)}
            onExpire={() => setTurnstileToken(null)}
            options={{
              theme: "light",
              size: "flexible",
            }}
          />
        ) : (
          <p className="text-[0.75rem] text-red-alert">
            Captcha not configured. Contact support.
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] hover:bg-[#333] transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {stage === "submitting" ? "Submitting…" : "Run free audit"}
        </button>

        {error && (
          <p className="text-[0.8rem] text-red-alert leading-relaxed">
            {error.code === 429
              ? "You have reached today's audit limit. Try again tomorrow or contact us for more."
              : error.message}
          </p>
        )}

        <p className="text-[0.7rem] text-text-tertiary text-center leading-relaxed">
          Audits a single URL: pixel firing pre-consent, Consent Mode v2,
          GDPR compliance signals. No CAPTCHA spam, no phone calls.
        </p>
      </div>
    </form>
  );
}
