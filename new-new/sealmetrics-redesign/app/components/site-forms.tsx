"use client";

import { FormEvent, useMemo, useState } from "react";
import { attributionMetadata, trackConversion, trackMicro } from "./sealmetrics-tracker";

type Locale = "en" | "es";
type FormType = "demo" | "demo_access" | "audit" | "careers" | "calculator" | "growth";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PERSONAL_EMAIL_DOMAINS = new Set(["gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "live.com", "yahoo.com", "icloud.com", "proton.me", "protonmail.com"]);

function normalizeWebsite(value: string) {
  if (!value) return "";
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

function corporateEmailMatches(email: string, website: string) {
  try {
    const emailDomain = email.toLowerCase().split("@")[1];
    const webDomain = new URL(normalizeWebsite(website)).hostname.toLowerCase().replace(/^www\./, "");
    return Boolean(emailDomain) && !PERSONAL_EMAIL_DOMAINS.has(emailDomain) && (emailDomain === webDomain || emailDomain.endsWith(`.${webDomain}`) || webDomain.endsWith(`.${emailDomain}`));
  } catch { return false; }
}

const copy = {
  en: {
    details: "Your details",
    name: "Name",
    email: "Work email",
    company: "Company",
    website: "Website",
    role: "Role",
    consent: "I have read the privacy policy and agree to be contacted about this request.",
    privacy: "Privacy policy",
    send: "Send request",
    sending: "Sending…",
    error: "We could not send the request. Please try again.",
    invalid: "Check the required fields and use a valid email address.",
    success: "Request received. We will review it and contact you shortly.",
  },
  es: {
    details: "Tus datos",
    name: "Nombre",
    email: "Email de trabajo",
    company: "Empresa",
    website: "Sitio web",
    role: "Cargo",
    consent: "He leído la política de privacidad y acepto que me contacten sobre esta solicitud.",
    privacy: "Política de privacidad",
    send: "Enviar solicitud",
    sending: "Enviando…",
    error: "No hemos podido enviar la solicitud. Inténtalo de nuevo.",
    invalid: "Revisa los campos obligatorios y utiliza un email válido.",
    success: "Solicitud recibida. La revisaremos y contactaremos contigo en breve.",
  },
};

function signupPayload(form: HTMLFormElement, type: FormType, locale: Locale) {
  const fields = new FormData(form);
  const value = (key: string) => String(fields.get(key) || "").trim();
  const metadata = attributionMetadata();
  return {
    form: type,
    locale,
    name: value("name"),
    email: value("email").toLowerCase(),
    company: value("company"),
    website: normalizeWebsite(value("website")),
    role: value("role"),
    source: value("source") || `${type}-${locale}`,
    gdpr: fields.get("gdpr") === "on",
    answers: {
      ga4_gap: value("ga4_gap"),
      paid_spend: value("paid_spend"),
      priority: value("priority"),
    },
    signup: {
      email: value("email").toLowerCase(),
      name: value("name"),
      company: value("company"),
      role: value("role"),
      site_url: normalizeWebsite(value("website")),
      source: value("source") || `${type}-${locale}`,
      metadata: { ...metadata, form: type, locale },
    },
    metadata,
  };
}

async function submitForm(type: FormType, payload: Record<string, unknown>, honeypot: string) {
  const response = await fetch("/api/forms", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, payload, company_fax: honeypot }),
  });
  if (!response.ok) throw new Error("submission_failed");
}

function Status({ state, locale }: { state: "idle" | "sending" | "success" | "error" | "invalid"; locale: Locale }) {
  const c = copy[locale];
  if (state === "idle" || state === "sending") return null;
  return <p className={`form-status form-status-${state}`} role={state === "error" || state === "invalid" ? "alert" : "status"}>{state === "success" ? c.success : state === "invalid" ? c.invalid : c.error}</p>;
}

function StandardLeadForm({ type, locale }: { type: "demo" | "demo_access" | "audit"; locale: Locale }) {
  const c = copy[locale];
  const [state, setState] = useState<"idle" | "sending" | "success" | "error" | "invalid">("idle");
  const [honeypot, setHoneypot] = useState("");
  const isAudit = type === "audit";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = signupPayload(form, type, locale);
    if (!EMAIL.test(String(payload.email)) || !payload.name || !payload.website || !payload.gdpr || (type === "demo_access" && !corporateEmailMatches(String(payload.email), String(payload.website)))) { setState("invalid"); return; }
    setState("sending");
    try {
      await submitForm(type, payload, honeypot);
      setState("success");
      trackConversion("lead", { form: type, locale });
      trackMicro("form_submit", { form: type, locale, status: "accepted" });
      form.reset();
    } catch {
      setState("error");
      trackMicro("form_error", { form: type, locale });
    }
  }

  return (
    <form className="site-form" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="source" value={`${type}-${locale}`} />
      <label className="form-honeypot" aria-hidden="true">Company fax<input tabIndex={-1} autoComplete="off" value={honeypot} onChange={event => setHoneypot(event.target.value)} /></label>
      <div className="form-grid">
        <label>{c.name}<input name="name" autoComplete="name" required /></label>
        <label>{c.email}<input name="email" type="email" inputMode="email" autoComplete="email" required /></label>
        <label>{c.company}<input name="company" autoComplete="organization" /></label>
        <label>{c.website}<input name="website" inputMode="url" placeholder="company.com" required /></label>
        <label>{c.role}<input name="role" autoComplete="organization-title" /></label>
        <label>{locale === "es" ? "Inversión mensual en medios" : "Monthly paid media spend"}
          <select name="paid_spend" defaultValue=""><option value="" disabled>{locale === "es" ? "Selecciona" : "Select"}</option><option value="lt_10k">&lt; €10K</option><option value="10k_50k">€10K–€50K</option><option value="50k_200k">€50K–€200K</option><option value="gt_200k">€200K+</option></select>
        </label>
        <label className="form-wide">{isAudit ? (locale === "es" ? "¿Qué quieres auditar primero?" : "What do you want to audit first?") : (locale === "es" ? "¿Qué diferencia ves entre analítica e ingresos?" : "What gap do you see between analytics and revenue?")}
          <select name={isAudit ? "priority" : "ga4_gap"} defaultValue=""><option value="" disabled>{locale === "es" ? "Selecciona" : "Select"}</option><option value="attribution">{locale === "es" ? "Atribución de ventas" : "Revenue attribution"}</option><option value="traffic">{locale === "es" ? "Tráfico no medido" : "Unmeasured traffic"}</option><option value="channels">{locale === "es" ? "Rendimiento por canal" : "Channel performance"}</option><option value="unknown">{locale === "es" ? "Todavía no lo sé" : "Not sure yet"}</option></select>
        </label>
      </div>
      <label className="form-consent"><input name="gdpr" type="checkbox" required /><span>{c.consent} <a href={locale === "es" ? "/es/privacy/" : "/privacy/"}>{c.privacy}</a>.</span></label>
      <button className="form-submit" type="submit" disabled={state === "sending"}>{state === "sending" ? c.sending : c.send}<span>→</span></button>
      <Status state={state} locale={locale} />
    </form>
  );
}

function CareersForm({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const [state, setState] = useState<"idle" | "sending" | "success" | "error" | "invalid">("idle");
  const [honeypot, setHoneypot] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || "").trim();
    const links = value("other_links").split(/\n/).map(item => item.trim()).filter(Boolean).slice(0, 4);
    if (!value("team") || (!value("linkedin") && !value("github") && links.length === 0)) { setState("invalid"); return; }
    const payload = { form: "careers", locale, team: value("team"), linkedin: value("linkedin"), github: value("github"), other_links: links, source: `careers-${locale}`, metadata: attributionMetadata() };
    setState("sending");
    try {
      await submitForm("careers", payload, honeypot);
      setState("success");
      trackConversion("lead", { form: "careers", locale });
      form.reset();
    } catch { setState("error"); trackMicro("form_error", { form: "careers", locale }); }
  }

  return <form className="site-form" onSubmit={onSubmit} noValidate>
    <label className="form-honeypot" aria-hidden="true">Company fax<input tabIndex={-1} autoComplete="off" value={honeypot} onChange={event => setHoneypot(event.target.value)} /></label>
    <div className="form-grid">
      <label>{locale === "es" ? "Equipo" : "Team"}<select name="team" required defaultValue=""><option value="" disabled>{locale === "es" ? "Selecciona" : "Select"}</option>{["engineering", "product", "growth", "sales", "customer-success", "open"].map(team => <option key={team} value={team}>{team.replace("-", " ")}</option>)}</select></label>
      <label>LinkedIn<input name="linkedin" type="url" placeholder="https://linkedin.com/in/…" /></label>
      <label>GitHub<input name="github" type="url" placeholder="https://github.com/…" /></label>
      <label className="form-wide">{locale === "es" ? "Otros enlaces públicos (uno por línea)" : "Other public links (one per line)"}<textarea name="other_links" rows={4} placeholder={locale === "es" ? "Portfolio, artículos o proyectos" : "Portfolio, writing or projects"} /></label>
    </div>
    <p className="form-note">{locale === "es" ? "No envíes datos sensibles. Comparte únicamente enlaces públicos que quieras que revisemos." : "Do not send sensitive information. Share only public links you want us to review."}</p>
    <button className="form-submit" type="submit" disabled={state === "sending"}>{state === "sending" ? c.sending : c.send}<span>→</span></button><Status state={state} locale={locale} />
  </form>;
}

function CalculatorForm({ locale, type }: { locale: Locale; type: "calculator" | "growth" }) {
  const [sessions, setSessions] = useState(250000);
  const [revenue, setRevenue] = useState(500000);
  const [visible, setVisible] = useState(55);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "success" | "error" | "invalid">("idle");
  const result = useMemo(() => ({ missingSessions: Math.round(sessions * (1 - visible / 100)), missingRevenue: Math.round(revenue / (visible / 100) - revenue) }), [sessions, revenue, visible]);
  const euros = new Intl.NumberFormat(locale === "es" ? "es-ES" : "en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
  async function send(event: FormEvent) {
    event.preventDefault();
    if (!EMAIL.test(email)) { setState("invalid"); return; }
    setState("sending");
    const payload = { email: email.toLowerCase(), source: `${type}-report-${locale}`, visitors: String(sessions), revenue: String(revenue), visible_share: `${visible}%`, dataLoss: `${100 - visible}%`, modeled_missing_sessions: result.missingSessions, modeled_missing_revenue: result.missingRevenue, locale, signup: { email: email.toLowerCase(), source: `${type}-report-${locale}`, metadata: attributionMetadata() } };
    try {
      await submitForm(type, payload, "");
      setState("success");
      trackConversion("lead", { form: type, locale });
      trackMicro("report_request", { calculator: type, locale });
    } catch { setState("error"); trackMicro("form_error", { form: type, locale }); }
  }
  return <div className="calculator-module functional-calculator">
    <div className="calculator-inputs">
      <label>{locale === "es" ? "Sesiones medidas al mes" : "Monthly measured sessions"}<input type="number" min="0" value={sessions} onChange={event => { setSessions(Number(event.target.value)); trackMicro("calculator_used", { calculator: type }); }} /></label>
      <label>{locale === "es" ? "Ingresos medidos al mes" : "Monthly measured revenue"}<input type="number" min="0" value={revenue} onChange={event => setRevenue(Number(event.target.value))} /></label>
      <label>{locale === "es" ? "Porcentaje visible estimado" : "Assumed visible share"}<input type="range" min="10" max="100" value={visible} onChange={event => setVisible(Number(event.target.value))} /><b>{visible}%</b></label>
    </div>
    <div className="calculator-result">
      <span>{locale === "es" ? "ESCENARIO ILUSTRATIVO · NO ES DATO MEDIDO" : "ILLUSTRATIVE SCENARIO · NOT MEASURED DATA"}</span>
      <strong>{euros.format(result.missingRevenue)}</strong>
      <p>{locale === "es" ? "ingresos modelados fuera de la vista actual" : "modeled revenue outside the current view"}</p>
      <div><b>{result.missingSessions.toLocaleString(locale === "es" ? "es-ES" : "en-IE")}</b><span>{locale === "es" ? "sesiones modeladas no visibles" : "modeled sessions outside the view"}</span></div>
      <form className="calculator-email" onSubmit={send}><label>{locale === "es" ? "Recibe el escenario por email" : "Receive the scenario by email"}<input type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder={locale === "es" ? "tu@empresa.com" : "you@company.com"} required /></label><button type="submit" disabled={state === "sending"}>{state === "sending" ? copy[locale].sending : (locale === "es" ? "Enviar escenario" : "Send scenario")}</button><Status state={state} locale={locale} /></form>
      <small>{locale === "es" ? "El cálculo asume una pérdida proporcional. No demuestra la diferencia real de tu web; esa diferencia se mide comparando ambos sistemas en paralelo." : "The calculation assumes proportional loss. It does not prove the real gap on your site; measure that by running both systems side by side."}</small>
    </div>
  </div>;
}

export function FunctionalSurface({ route, locale }: { route: string; locale: Locale }) {
  const path = route.replace(/\/$/, "").replace(/^\/es(?=\/|$)/, "") || "/";
  let type: FormType | null = null;
  if (path === "/demo") type = "demo";
  else if (path === "/demo-access") type = "demo_access";
  else if (["/audit", "/free-audit"].includes(path)) type = "audit";
  else if (path === "/careers") type = "careers";
  else if (path === "/data-loss-calculator") type = "calculator";
  else if (path === "/growth-calculator") type = "growth";
  if (!type) return null;
  const headings: Record<FormType, [string, string]> = {
    demo: locale === "es" ? ["Solicita una demo", "Cuéntanos qué necesitas reconciliar. Prepararemos la sesión sobre tus datos y tus decisiones."] : ["Request a demo", "Tell us what needs reconciling. We will prepare the session around your data and decisions."],
    demo_access: locale === "es" ? ["Acceso a la demo", "Validamos cada acceso para mantener los datos y el entorno protegidos."] : ["Demo access", "We validate each request to keep the data and environment protected."],
    audit: locale === "es" ? ["Solicita tu auditoría", "Define el problema. Mediremos la diferencia antes de recomendar una solución."] : ["Request your audit", "Define the problem. We will measure the gap before recommending a solution."],
    careers: locale === "es" ? ["Enséñanos tu trabajo", "No necesitamos un CV. Comparte enlaces públicos que demuestren cómo piensas y construyes."] : ["Show us your work", "We do not need a CV. Share public links that show how you think and build."],
    calculator: locale === "es" ? ["Calcula el punto ciego", "Un escenario para dimensionar el riesgo. La cifra real requiere una medición paralela."] : ["Size the blind spot", "A scenario to size the risk. The real figure requires a parallel measurement."],
    growth: locale === "es" ? ["Modela la oportunidad", "Comprueba cuánto puede cambiar la decisión cuando cambia la cobertura de datos."] : ["Model the opportunity", "See how the decision can change when data coverage changes."],
  };
  return <section className="functional-surface" aria-labelledby={`form-${type}-title`}><div className="functional-intro"><span>{locale === "es" ? "FLUJO SEGURO" : "SECURE WORKFLOW"}</span><h2 id={`form-${type}-title`}>{headings[type][0]}</h2><p>{headings[type][1]}</p><small>{locale === "es" ? "Envío cifrado · validación en servidor · sin exponer el webhook" : "Encrypted submission · server validation · webhook never exposed"}</small></div><div className="functional-form">{type === "careers" ? <CareersForm locale={locale} /> : type === "calculator" || type === "growth" ? <CalculatorForm locale={locale} type={type} /> : <StandardLeadForm type={type} locale={locale} />}</div></section>;
}
