import Link from "next/link";
import { Fragment } from "react";

type Locale = "en" | "es";

/* HERO */
export function VsGA4HeroV3({ locale = "en" as Locale }) {
  const t = locale === "es"
    ? {
        eyebrow: "vs Google Analytics 4",
        h1Pre: "GA4 te enseña el ",
        h1Em: "40%",
        h1Post: " de tu tráfico. SealMetrics te enseña el 100%.",
        lede: "GA4 funciona bien para lo que Google necesita. No para el CMO que defiende un presupuesto de 2M€. Esta es la comparación honesta — y por qué la mayoría de equipos eCommerce corren los dos en paralelo.",
        ctaA: "Pide una demo",
        ctaB: "Corre ambos 30 días",
        micro: "Sin migración · Corren en paralelo · Decides tú",
      }
    : {
        eyebrow: "vs Google Analytics 4",
        h1Pre: "GA4 shows you ",
        h1Em: "40%",
        h1Post: " of your traffic. SealMetrics shows 100%.",
        lede: "GA4 works fine for what Google needs. Not for the CMO defending a €2M budget. This is the honest comparison — and why most eCommerce teams end up running both in parallel.",
        ctaA: "Book a demo",
        ctaB: "Run both for 30 days",
        micro: "No migration · Run side by side · You decide",
      };

  return (
    <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
        <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>
          {t.eyebrow}
        </span>
        <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
          {t.h1Pre}<em>{t.h1Em}</em>{t.h1Post}
        </h1>
        <p
          className="text-ink-soft mt-8 mx-auto max-w-[62ch] leading-[1.55]"
          style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
        >
          {t.lede}
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-9">
          <Link
            href={locale === "es" ? "/es/demo" : "/demo"}
            className="inline-flex items-center gap-2 px-7 py-4 bg-ink text-white rounded-md text-[15px] font-semibold no-underline hover:bg-brand transition-colors"
          >
            {t.ctaA} →
          </Link>
          <Link
            href={locale === "es" ? "/es/data-loss-calculator" : "/data-loss-calculator"}
            className="inline-flex items-center gap-2 px-7 py-4 border border-warm-200 text-ink rounded-md text-[15px] font-semibold no-underline hover:bg-warm-50 transition-colors"
          >
            {t.ctaB}
          </Link>
        </div>
        <p className="mt-4 font-mono text-[12px] text-ink-soft uppercase tracking-[0.06em]">
          {t.micro}
        </p>
      </div>
    </section>
  );
}

/* GAP STATS · 4 cards */
export function VsGA4GapStatsV3({ locale = "en" as Locale }) {
  const data = locale === "es"
    ? {
        eyebrow: "El gap",
        title: <>Lo que GA4 <em>no ve.</em></>,
        lede: "Cuatro puntos donde la arquitectura de GA4 pierde datos estructuralmente. No son errores — es el diseño funcionando como debe para el caso de uso de Google Ads.",
        stats: [
          { n: "40–60%", l: "Rechazo de consentimiento", p: "GA4 depende de cookies. El usuario UE medio rechaza y GA4 no lo ve." },
          { n: "~25%", l: "Ad blockers", p: "Bloquean google-analytics.com. GA4 nunca recibe el ping." },
          { n: "Sampling", l: "Umbrales de volumen", p: "Encima de cierto volumen, GA4 muestrea y modela. Black Friday = estimaciones." },
          { n: "US-hosted", l: "Schrems II", p: "Los datos cruzan a US. Sujeto a challenge regulatorio en UE." },
        ],
      }
    : {
        eyebrow: "The gap",
        title: <>What GA4 <em>doesn't see.</em></>,
        lede: "Four points where GA4's architecture loses data by design. Not bugs — this is the product working as intended for Google Ads' use case.",
        stats: [
          { n: "40–60%", l: "Consent rejection", p: "GA4 depends on cookies. Average EU visitor rejects, GA4 never sees them." },
          { n: "~25%", l: "Ad blockers", p: "Block google-analytics.com. GA4 never receives the ping." },
          { n: "Sampling", l: "Volume thresholds", p: "Above certain volume, GA4 samples and models. Black Friday = estimates." },
          { n: "US-hosted", l: "Schrems II", p: "Data crosses to US. Subject to ongoing EU regulatory challenge." },
        ],
      };

  return (
    <section className="py-28 bg-warm-50 border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
          <div>
            <span className="eyebrow mb-5">{data.eyebrow}</span>
            <h2 className="h-section mt-5">{data.title}</h2>
          </div>
          <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[56ch]">
            {data.lede}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {data.stats.map((s) => (
            <article
              key={s.l}
              className="bg-white border border-warm-100 rounded-xl p-6"
            >
              <div
                className="font-semibold text-ink tracking-[-0.025em] leading-none tabular-nums mb-2"
                style={{ fontSize: "clamp(28px, 3vw, 38px)", color: "#B5423B" }}
              >
                {s.n}
              </div>
              <div className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.1em] text-ink-soft mb-2">
                {s.l}
              </div>
              <p className="text-[13.5px] leading-[1.55] text-ink-2">{s.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* COMPARISON TABLE · feature-by-feature */
interface Row { feature: string; ga4: string; seal: string; }

export function VsGA4TableV3({ locale = "en" as Locale }) {
  const rowsEn: { category: string; rows: Row[] }[] = [
    {
      category: "Data capture",
      rows: [
        { feature: "Consent required", ga4: "Yes · 40–60% reject", seal: "No · 100% captured" },
        { feature: "Ad blocker affected", ga4: "Yes · ~25% blocked", seal: "No · first-party" },
        { feature: "Cookies on visitor device", ga4: "Required", seal: "None" },
        { feature: "Sampling at scale", ga4: "Yes · above threshold", seal: "Never · full resolution" },
      ],
    },
    {
      category: "Attribution",
      rows: [
        { feature: "Channel attribution", ga4: "Cookie-dependent", seal: "Session-level, consent-free" },
        { feature: "Direct/(none) bucket", ga4: "40–60% of sessions", seal: "Real share (typically <10%)" },
        { feature: "Last-click", ga4: "Limited", seal: "Default · on complete data" },
      ],
    },
    {
      category: "Infrastructure",
      rows: [
        { feature: "Data residency", ga4: "US · Google infra", seal: "EU · Dublin, Ireland" },
        { feature: "Schrems II exposure", ga4: "Yes · ongoing challenge", seal: "Clean" },
        { feature: "Sub-processors outside EU", ga4: "Yes", seal: "None" },
      ],
    },
    {
      category: "Integrations",
      rows: [
        { feature: "Google Ads native", ga4: "Yes", seal: "Via BigQuery export" },
        { feature: "Meta / TikTok Ads", ga4: "Via external sync", seal: "Native + BigQuery" },
        { feature: "BigQuery export", ga4: "Yes (sampled above threshold)", seal: "Yes · full resolution" },
        { feature: "MCP / AI agents", ga4: "No native support", seal: "Native MCP server" },
      ],
    },
    {
      category: "Pricing",
      rows: [
        { feature: "Price", ga4: "Free (your data trains ads)", seal: "From €499/mo annual" },
        { feature: "Per-event overage", ga4: "Hidden limits trigger sampling", seal: "No overage billing" },
        { feature: "Data retention", ga4: "14 months default", seal: "24 months included" },
      ],
    },
  ];

  const rowsEs: { category: string; rows: Row[] }[] = [
    {
      category: "Captura de datos",
      rows: [
        { feature: "Consentimiento requerido", ga4: "Sí · 40–60% rechaza", seal: "No · 100% capturado" },
        { feature: "Afectado por ad blockers", ga4: "Sí · ~25% bloqueado", seal: "No · first-party" },
        { feature: "Cookies en el dispositivo", ga4: "Obligatorias", seal: "Ninguna" },
        { feature: "Muestreo a escala", ga4: "Sí · sobre cierto umbral", seal: "Nunca · resolución completa" },
      ],
    },
    {
      category: "Atribución",
      rows: [
        { feature: "Atribución de canal", ga4: "Depende de cookies", seal: "A nivel sesión, sin consentimiento" },
        { feature: "Bucket directo/(none)", ga4: "40–60% de sesiones", seal: "Porcentaje real (típicamente <10%)" },
        { feature: "Last-click", ga4: "Limitado", seal: "Por defecto · sobre datos completos" },
      ],
    },
    {
      category: "Infraestructura",
      rows: [
        { feature: "Residencia de datos", ga4: "US · infra Google", seal: "UE · Dublín, Irlanda" },
        { feature: "Exposición Schrems II", ga4: "Sí · challenge regulatorio", seal: "Limpio" },
        { feature: "Sub-procesadores fuera UE", ga4: "Sí", seal: "Ninguno" },
      ],
    },
    {
      category: "Integraciones",
      rows: [
        { feature: "Google Ads nativo", ga4: "Sí", seal: "Vía export BigQuery" },
        { feature: "Meta / TikTok Ads", ga4: "Vía sync externo", seal: "Nativo + BigQuery" },
        { feature: "Export BigQuery", ga4: "Sí (muestreado sobre umbral)", seal: "Sí · resolución completa" },
        { feature: "MCP / agentes IA", ga4: "Sin soporte nativo", seal: "MCP server nativo" },
      ],
    },
    {
      category: "Precio",
      rows: [
        { feature: "Precio", ga4: "Gratis (tus datos entrenan Ads)", seal: "Desde €499/mes anual" },
        { feature: "Overage por evento", ga4: "Límites ocultos disparan muestreo", seal: "Sin facturación por exceso" },
        { feature: "Retención de datos", ga4: "14 meses por defecto", seal: "24 meses incluidos" },
      ],
    },
  ];

  const data = locale === "es" ? rowsEs : rowsEn;

  return (
    <section className="py-28 bg-white border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
          <div>
            <span className="eyebrow mb-5">
              {locale === "es" ? "Comparativa" : "Comparison"}
            </span>
            <h2 className="h-section mt-5">
              {locale === "es"
                ? <>Feature a feature. <em>Sin rodeos.</em></>
                : <>Feature by feature. <em>No spin.</em></>}
            </h2>
          </div>
          <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
            {locale === "es"
              ? "La comparación exacta que un CTO o CMO necesita antes de firmar. Acepta las fortalezas de GA4; destaca donde falla para un eCommerce que decide con dinero real."
              : "The exact comparison a CTO or CMO needs before signing. Honest about GA4's strengths; direct about where it fails for an eCommerce team deciding with real money."}
          </p>
        </div>

        <div className="bg-white border border-warm-100 rounded-xl overflow-hidden">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-warm-100 bg-warm-50 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-bold">
            <div className="p-5">{locale === "es" ? "Capacidad" : "Capability"}</div>
            <div className="p-5">Google Analytics 4</div>
            <div
              className="p-5 text-ink"
              style={{ background: "rgba(45,139,109,0.05)", borderLeft: "2px solid #2D8B6D" }}
            >
              SealMetrics
            </div>
          </div>
          {data.map((section) => (
            <Fragment key={section.category}>
              <div className="px-5 py-3 bg-warm-white border-b border-warm-100 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink font-bold">
                {section.category}
              </div>
              {section.rows.map((row, i) => {
                const isLastOverall =
                  i === section.rows.length - 1 && section === data[data.length - 1];
                return (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-[1.4fr_1fr_1fr] items-center ${
                      isLastOverall ? "" : "border-b border-warm-100"
                    }`}
                  >
                    <div className="p-4 md:p-5 text-[14px] text-ink font-semibold leading-[1.4]">
                      {row.feature}
                    </div>
                    <div className="p-4 md:p-5 text-[13.5px] text-ink-soft leading-[1.5]">
                      {row.ga4}
                    </div>
                    <div
                      className="p-4 md:p-5 text-[13.5px] text-ink leading-[1.5] font-medium"
                      style={{
                        background: "rgba(45,139,109,0.04)",
                        borderLeft: "2px solid #2D8B6D",
                      }}
                    >
                      {row.seal}
                    </div>
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>

        <div className="mt-6 p-6 bg-warm-50 border border-warm-100 rounded-xl text-center text-[15px] text-ink-2 leading-[1.55]">
          <b className="text-ink font-semibold">
            {locale === "es" ? 'No es "GA4 está roto".' : 'Not "GA4 is broken".'}
          </b>{" "}
          {locale === "es"
            ? "GA4 funciona para el ecosistema Google Ads. Para defender un presupuesto de marketing con datos completos, se quedan cortos. Corre ambos 30 días y "
            : "GA4 works well for the Google Ads ecosystem. For defending a marketing budget on complete data, it falls short. Run both for 30 days and "}
          <em className="italic-accent">
            {locale === "es" ? "decide tú." : "you decide."}
          </em>
        </div>
      </div>
    </section>
  );
}

/* RUN BOTH · methodology */
export function RunBothV3({ locale = "en" as Locale }) {
  const data = locale === "es"
    ? {
        eyebrow: "Metodología · 30 días",
        title: <>Corre los dos en paralelo. <em>Compara con tu CRM.</em></>,
        lede: "No te pedimos que reemplaces GA4. Te pedimos que los corras en paralelo 30 días, comparando ambos con tu CRM real. Después tú decides qué dato firmar.",
        phases: [
          { n: "Semana 1", t: "Ambos instalados", p: "GA4 sigue donde está. SealMetrics se instala en 15 min con un script. Los dos corren sobre el mismo tráfico." },
          { n: "Semana 2", t: "Calibración", p: "Te ayudamos a mapear canales, UTMs y microconversiones. Ambos sistemas ven lo mismo, reportan distinto." },
          { n: "Semana 3", t: "Comparación", p: "CRM en mano, comparas canales, conversiones e ingresos. Ves exactamente dónde GA4 se queda corto sobre tu tráfico." },
          { n: "Semana 4", t: "Decisión", p: "La mayoría de equipos firman SealMetrics como fuente de verdad y mantienen GA4 para las integraciones específicas de Google Ads." },
        ],
      }
    : {
        eyebrow: "Methodology · 30 days",
        title: <>Run both alongside. <em>Compare against your CRM.</em></>,
        lede: "We're not asking you to replace GA4. We're asking you to run both in parallel for 30 days, comparing each against your actual CRM. Then you decide which number to sign against.",
        phases: [
          { n: "Week 1", t: "Both installed", p: "GA4 stays where it is. SealMetrics installs in 15 minutes with one script tag. Both running on the same traffic." },
          { n: "Week 2", t: "Calibration", p: "We help you map channels, UTMs and microconversions. Both systems see the same traffic — and report very differently." },
          { n: "Week 3", t: "Comparison", p: "CRM in hand, you compare channels, conversions and revenue. You see exactly where GA4 falls short on your own data." },
          { n: "Week 4", t: "Decision", p: "Most teams sign SealMetrics as source of truth and keep GA4 for specific Google Ads integrations. No migration forced." },
        ],
      };

  return (
    <section className="py-28 bg-warm-50 border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
          <div>
            <span className="eyebrow mb-5">{data.eyebrow}</span>
            <h2 className="h-section mt-5">{data.title}</h2>
          </div>
          <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
            {data.lede}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {data.phases.map((p) => (
            <article
              key={p.n}
              className="bg-white border border-warm-100 rounded-xl p-6 flex flex-col min-h-[220px]"
            >
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-3">
                {p.n}
              </span>
              <h4 className="text-[19px] font-semibold tracking-[-0.02em] leading-[1.2] mb-2.5 text-ink">
                {p.t}
              </h4>
              <p className="text-[13.5px] leading-[1.6] text-ink-soft">{p.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
