"use client";

import { useState } from "react";
import { pushEvent } from "@/lib/analytics";
import { submitFirstPartyForm } from "@/lib/forms/submit";
import { LeadTurnstile } from "@/components/forms/LeadTurnstile";

type Locale = "en" | "es";

/**
 * Free-mail domains are refused here as well as in the forms Worker.
 * The report costs real inference money per request, and a company address is the
 * cheapest signal that there is a company behind the request. The browser check exists
 * to say *why* the address was refused: the Worker can only answer yes or no.
 */
const PERSONAL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "outlook.com",
  "outlook.es",
  "hotmail.com",
  "hotmail.es",
  "live.com",
  "yahoo.com",
  "yahoo.es",
  "icloud.com",
  "me.com",
  "proton.me",
  "protonmail.com",
  "aol.com",
  "gmx.com",
  "yandex.com",
  "mail.com",
  "zoho.com",
]);

const EMAIL_RE = /^[^@\s]+@[^@\s.]+\.[^@\s]+$/;

const copy = {
  en: {
    brand: "Brand or company",
    brandPlaceholder: "Acme Analytics",
    email: "Work email",
    emailPlaceholder: "you@yourcompany.com",
    sector: "Sector",
    sectorPlaceholder: "web analytics",
    sectorHint: "Optional. Helps the models place you in a category.",
    competitors: "Competitors",
    competitorsPlaceholder: "Two or three names, separated by commas",
    competitorsHint: "Optional. Without them, the report finds who the models name instead of you.",
    submit: "Send me the report",
    submitting: "Requesting the report",
    successTitle: "On its way.",
    successBody:
      "Fifteen models are answering the six questions now. The report lands in your inbox in about five minutes.",
    errorBrand: "Tell us which brand to ask about.",
    errorEmail: "That address does not look valid.",
    errorPersonal: "Use your company address, not a personal one.",
    errorGeneric: "We could not request it right now. Try again in a moment.",
    privacy: "We use your address to send this report and, occasionally, others like it. Unsubscribe in one click.",
    privacyLink: "Privacy",
  },
  es: {
    brand: "Marca o empresa",
    brandPlaceholder: "Acme Analytics",
    email: "Correo de empresa",
    emailPlaceholder: "tu@tuempresa.com",
    sector: "Sector",
    sectorPlaceholder: "analítica web",
    sectorHint: "Opcional. Ayuda a los modelos a situarte en una categoría.",
    competitors: "Competidores",
    competitorsPlaceholder: "Dos o tres nombres, separados por comas",
    competitorsHint: "Opcional. Sin ellos, el informe descubre a quién nombran los modelos en tu lugar.",
    submit: "Enviadme el informe",
    submitting: "Pidiendo el informe",
    successTitle: "En camino.",
    successBody:
      "Quince modelos están contestando ahora las seis preguntas. El informe llega a tu correo en unos cinco minutos.",
    errorBrand: "Dinos por qué marca preguntamos.",
    errorEmail: "Ese correo no parece válido.",
    errorPersonal: "Usa el correo de tu empresa, no uno personal.",
    errorGeneric: "Ahora mismo no hemos podido pedirlo. Prueba en un momento.",
    privacy: "Usamos tu correo para enviarte este informe y, de vez en cuando, otros como él. Te das de baja en un clic.",
    privacyLink: "Privacidad",
  },
} as const;

export function BrandReportForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const prefix = locale === "es" ? "/es" : "";
  const [brand, setBrand] = useState("");
  const [email, setEmail] = useState("");
  const [sector, setSector] = useState("");
  const [competitors, setCompetitors] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [companyFax, setCompanyFax] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);

  const canSubmit = Boolean(brand.trim() && email.trim() && turnstileToken) && status !== "submitting";

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!canSubmit) return;

    const cleanBrand = brand.trim();
    const cleanEmail = email.trim().toLowerCase();
    const domain = cleanEmail.split("@")[1] ?? "";

    if (!cleanBrand) return fail(t.errorBrand);
    if (!EMAIL_RE.test(cleanEmail)) return fail(t.errorEmail);
    if (PERSONAL_DOMAINS.has(domain)) return fail(t.errorPersonal);

    setStatus("submitting");
    setMessage("");

    const trimmedSector = sector.trim();
    try {
      await submitFirstPartyForm(
        "brand_report",
        {
          email: cleanEmail,
          brand: cleanBrand,
          sector: trimmedSector,
          // The purchase question asks for a recommendation without naming anyone, so it
          // needs a category rather than a sector: "recommend me a {category}".
          category: trimmedSector ? `${trimmedSector} tool` : "",
          country: locale === "es" ? "España" : "Europe",
          competitors: competitors.trim(),
          language: locale,
        },
        { companyFax, turnstileToken: turnstileToken ?? "" }
      );
      setStatus("success");
      pushEvent({ event: "lead_brand_report", email: cleanEmail });
    } catch {
      setStatus("error");
      setMessage(t.errorGeneric);
      setTurnstileToken(null);
      setTurnstileResetKey((key) => key + 1);
    }
  }

  function fail(text: string) {
    setStatus("error");
    setMessage(text);
  }

  if (status === "success") {
    return (
      <div className="sig-brand-form sig-brand-form-done" role="status">
        <p className="sig-brand-done-title">{t.successTitle}</p>
        <p className="sig-brand-done-body">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form className="sig-brand-form" onSubmit={handleSubmit} noValidate>
      <label className="sig-brand-field">
        <span>{t.brand}</span>
        <input
          type="text"
          name="brand"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
          placeholder={t.brandPlaceholder}
          maxLength={120}
          required
        />
      </label>

      <label className="sig-brand-field">
        <span>{t.email}</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t.emailPlaceholder}
          maxLength={254}
          required
        />
      </label>

      <label className="sig-brand-field">
        <span>{t.sector}</span>
        <input
          type="text"
          name="sector"
          value={sector}
          onChange={(event) => setSector(event.target.value)}
          placeholder={t.sectorPlaceholder}
          maxLength={120}
        />
        <small>{t.sectorHint}</small>
      </label>

      <label className="sig-brand-field">
        <span>{t.competitors}</span>
        <input
          type="text"
          name="competitors"
          value={competitors}
          onChange={(event) => setCompetitors(event.target.value)}
          placeholder={t.competitorsPlaceholder}
          maxLength={200}
        />
        <small>{t.competitorsHint}</small>
      </label>

      {/* Honeypot: hidden from people, filled by the bots that read the markup. */}
      <input
        type="text"
        name="company_fax"
        value={companyFax}
        onChange={(event) => setCompanyFax(event.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="sig-brand-honeypot"
      />

      <LeadTurnstile onToken={setTurnstileToken} resetKey={turnstileResetKey} locale={locale} />

      {status === "error" && message ? (
        <p role="alert" className="sig-brand-error">
          {message}
        </p>
      ) : null}

      <button type="submit" className="sig-brand-submit" disabled={!canSubmit}>
        {status === "submitting" ? t.submitting : t.submit}
      </button>

      <p className="sig-brand-privacy">
        {t.privacy} <a href={`${prefix}/privacy/`}>{t.privacyLink}</a>
      </p>
    </form>
  );
}
