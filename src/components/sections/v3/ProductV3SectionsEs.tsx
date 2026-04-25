import Link from "next/link";

/* HERO · ES */
export function ProductHeroV3Es() {
  return (
    <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
        <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>
          La plataforma
        </span>
        <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
          Analítica completa, <em>sin compromisos.</em>
        </h1>
        <p className="text-ink-soft mt-8 mx-auto max-w-[62ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
          Un stack analítico completo para equipos eCommerce: tracking sin consentimiento, atribución de ingresos, LENS AI, SuperAPI y MCP server — todo sobre los mismos datos a resolución completa. Sin muestreo. Sin modelado.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-9">
          <Link href="/es/demo" className="inline-flex items-center gap-2 px-7 py-4 bg-ink text-white rounded-md text-[15px] font-semibold no-underline hover:bg-brand transition-colors">
            Pide una demo <span>→</span>
          </Link>
          <Link href="/es/how-it-works" className="inline-flex items-center gap-2 px-7 py-4 border border-warm-200 text-ink rounded-md text-[15px] font-semibold no-underline hover:bg-warm-50 transition-colors">
            Cómo funciona
          </Link>
        </div>
        <p className="mt-4 font-mono text-[12px] text-ink-soft uppercase tracking-[0.06em]">
          14 días gratis · Sin tarjeta
        </p>
      </div>
    </section>
  );
}

/* FOUR PILLARS · ES */
export function FourPillarsV3Es() {
  const pillars = [
    { n: "01 · Captura", title: "Tracking sin consentimiento", p: "First-party, sin cookies, RGPD-safe. 100% del tráfico — no una fracción." },
    { n: "02 · Atribuye", title: "Atribución de ingresos", p: "Cada euro enlazado a canal, campaña y creatividad. Last-click sobre datos completos." },
    { n: "03 · Entiende", title: "LENS AI", p: "Detección de anomalías, forecast, oportunidades de crecimiento — en lenguaje natural." },
    { n: "04 · Activa", title: "API · MCP · BigQuery", p: "Envía datos reales a warehouses, agentes IA y BI — desde el día uno." },
  ];
  return (
    <section className="py-28 bg-warm-50 border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
          <div>
            <span className="eyebrow mb-5">La plataforma</span>
            <h2 className="h-section mt-5">
              Cuatro pilares. <em>Una sola imagen.</em>
            </h2>
          </div>
          <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
            SealMetrics no son cuatro herramientas pegadas. Es un solo pipeline: del primer visitante observado a la atribución last-touch que firma tu CFO.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1px] bg-warm-100 border border-warm-100 rounded-2xl overflow-hidden">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white p-8 min-h-[200px] flex flex-col">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-brand mb-4">{p.n}</div>
              <h4 className="text-[20px] font-semibold tracking-[-0.02em] leading-[1.25] mb-2 text-ink">{p.title}</h4>
              <p className="text-[14px] leading-[1.55] text-ink-soft">{p.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FEATURE BLOCK · wrapper */
function FeatureBlockEs({ tag, title, lede, bullets, visual, reversed = false, bgClass = "bg-white" }: {
  tag: string; title: React.ReactNode; lede: string; bullets: string[]; visual: React.ReactNode; reversed?: boolean; bgClass?: string;
}) {
  return (
    <section className={`py-28 border-t border-warm-100 ${bgClass}`}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className={`grid md:grid-cols-2 gap-14 md:gap-20 items-center ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}>
          <div>
            <span className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-brand bg-brand-soft px-3 py-1 rounded-md mb-5">
              {tag}
            </span>
            <h3 className="font-semibold text-ink tracking-[-0.03em] leading-[1.05]" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
              {title}
            </h3>
            <p className="text-[17px] leading-[1.6] text-ink-soft mt-5">{lede}</p>
            <ul className="mt-6 flex flex-col">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 items-center py-2.5 border-b border-warm-100 text-[15px] text-ink-2 leading-[1.45]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          {visual}
        </div>
      </div>
    </section>
  );
}

/* FEATURE · LENS AI ES */
export function FeatureLensAIV3Es() {
  return (
    <FeatureBlockEs
      tag="LENS AI"
      title={<>Haz una pregunta a tus datos.<br />Obtén una <em>respuesta real.</em></>}
      lede="60+ reglas de anomalía corren contra tus datos a resolución completa cada hora. LENS AI vigila ingresos, embudo y canales en segundo plano — y te muestra qué cambió, en lenguaje natural."
      bullets={[
        "Pronostica ingresos, sesiones, conversión",
        "Detecta anomalías antes del standup del lunes",
        "Sugiere oportunidades de crecimiento por canal",
        "Reportes automáticos semanales y mensuales",
      ]}
      visual={<LensChatVisualEs />}
    />
  );
}

function LensChatVisualEs() {
  return (
    <div className="bg-ink text-white rounded-[20px] p-8 md:p-10 min-h-[380px] flex flex-col justify-center relative overflow-hidden">
      <div aria-hidden className="absolute pointer-events-none" style={{ right: -80, top: -80, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle,rgba(45,139,109,0.35),transparent 70%)" }} />
      <div className="relative">
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-4" style={{ color: "#E8B84B" }}>● LENS AI · en vivo</div>
        <h5 className="text-[20px] font-semibold mb-6 leading-[1.3]">¿Qué pasó con paid social ayer?</h5>
        <div className="flex flex-col gap-2.5">
          <div className="self-end max-w-[85%] bg-white/10 text-white px-4 py-3 rounded-[14px] rounded-br-[4px] text-[13px] leading-[1.45]">
            ¿Por qué cayó paid social un 22%?
          </div>
          <div className="self-start max-w-[90%] px-4 py-3 rounded-[14px] rounded-bl-[4px] text-[13px] leading-[1.5] font-medium" style={{ background: "#E8B84B", color: "#0E0E0C" }}>
            El CPC de Meta subió 31% en la campaña <b>Summer Sale</b> después de las 16h. El ROAS bajó de 4,2 → 2,8. 3 ad sets responsables.
            <span className="block mt-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.06em] text-brand">
              Anomalía · alta confianza · detección 03:00
            </span>
          </div>
          <div className="self-end max-w-[85%] bg-white/10 text-white px-4 py-3 rounded-[14px] rounded-br-[4px] text-[13px] leading-[1.45]">
            Enséñame los ad sets.
          </div>
          <div className="self-start max-w-[90%] px-4 py-3 rounded-[14px] rounded-bl-[4px] text-[13px] leading-[1.5] font-medium" style={{ background: "#E8B84B", color: "#0E0E0C" }}>
            Abriendo Atribución → Meta → Summer Sale…
          </div>
        </div>
      </div>
    </div>
  );
}

/* FEATURE · ATTRIBUTION ES */
export function FeatureAttributionV3Es() {
  return (
    <FeatureBlockEs
      tag="Atribución de ingresos"
      reversed
      bgClass="bg-warm-50"
      title={<>Cada euro <em>tiene origen.</em></>}
      lede="Atribución de ingresos last-click sobre el 100% de los eventos observados — incluidos los pageviews que GA4 pierde por cookies y consentimiento. Totales agregados por canal, campaña y creatividad. Sin modelado, sin muestreo, sin tracking por usuario."
      bullets={[
        "Granularidad canal · campaña · ad set · creatividad",
        "Conteos de microconversión y totales de ingresos",
        "Vista portfolio multi-site",
        "Export a BigQuery + MCP en un click",
      ]}
      visual={<AttributionBarsVisualEs />}
    />
  );
}

function AttributionBarsVisualEs() {
  const bars = [
    { label: "Orgánico", amount: "€482K", pct: 92, color: "#E8B84B" },
    { label: "Meta Ads", amount: "€331K", pct: 64, color: "#B5423B" },
    { label: "Google Ads", amount: "€248K", pct: 48, color: "#2D8B6D" },
    { label: "Email", amount: "€142K", pct: 28, color: "#E8B84B" },
    { label: "Directo", amount: "€81K", pct: 16, color: "#B5423B" },
  ];
  return (
    <div className="bg-ink text-white rounded-[20px] p-8 md:p-10 min-h-[380px] flex flex-col justify-center relative overflow-hidden">
      <div aria-hidden className="absolute pointer-events-none" style={{ right: -80, top: -80, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle,rgba(45,139,109,0.35),transparent 70%)" }} />
      <div className="relative">
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-3" style={{ color: "#E8B84B" }}>● Ingresos / últimos 30 días</div>
        <h5 className="text-[22px] font-semibold mb-6 leading-[1.3] tabular-nums">€1.284.430 atribuidos</h5>
        <div className="flex flex-col gap-3 font-mono text-[12px]">
          {bars.map((b) => (
            <div key={b.label} className="grid grid-cols-[88px_1fr_80px] items-center gap-3">
              <span className="text-white/85">{b.label}</span>
              <div className="h-3.5 rounded-md overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-md" style={{ width: `${b.pct}%`, background: b.color }} />
              </div>
              <span className="text-white font-semibold text-right tabular-nums">{b.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* FEATURE · SUPERAPI ES */
export function FeatureSuperAPIV3Es() {
  return (
    <FeatureBlockEs
      tag="SuperAPI · MCP · BigQuery"
      title={<>Tus datos, <em>en todas partes.</em></>}
      lede="Datos a resolución completa enviados donde los necesites. Export nativo a BigQuery. API REST + streaming. Y un MCP server para que los agentes IA — Claude, ChatGPT, copilots propios — consulten tu analítica directamente."
      bullets={[
        "Export nativo a BigQuery (sin ETL)",
        "API REST y streaming con cobertura completa",
        "MCP server para agentes IA",
        "Webhooks para operaciones en tiempo real",
      ]}
      visual={<SuperApiVisualEs />}
    />
  );
}

function SuperApiVisualEs() {
  return (
    <div className="bg-ink text-white rounded-[20px] p-8 md:p-10 min-h-[380px] flex flex-col justify-center relative overflow-hidden">
      <div aria-hidden className="absolute pointer-events-none" style={{ left: -60, bottom: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle,rgba(45,139,109,0.35),transparent 70%)" }} />
      <div className="relative">
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-3" style={{ color: "#E8B84B" }}>● SuperAPI · query</div>
        <h5 className="text-[20px] font-semibold mb-6 leading-[1.3]">Una consulta, resolución completa</h5>
        <pre className="font-mono text-[12.5px] leading-[1.8] text-white/90 whitespace-pre-wrap overflow-x-auto">
<span className="text-white/45">{`-- Últimos 7 días, ingresos atribuidos por canal`}</span>{"\n"}
<span style={{ color: "#E8B84B" }}>SELECT</span>{" "}channel,{"\n"}
       <span style={{ color: "#E8B84B" }}>SUM</span>(revenue) <span style={{ color: "#E8B84B" }}>AS</span> attributed{"\n"}
<span style={{ color: "#E8B84B" }}>FROM</span>   sealmetrics.conversions{"\n"}
<span style={{ color: "#E8B84B" }}>WHERE</span>  date &gt; <span style={{ color: "#B5423B" }}>&quot;2026-04-14&quot;</span>{"\n"}
<span style={{ color: "#E8B84B" }}>GROUP BY</span> channel{"\n"}
<span style={{ color: "#E8B84B" }}>ORDER BY</span> attributed <span style={{ color: "#E8B84B" }}>DESC</span>;{"\n"}{"\n"}
<span className="text-white/45">{`→ 1,2M filas · 340ms · resolución completa`}</span>
        </pre>
      </div>
    </div>
  );
}

/* NINE REPORTS ES */
export function NineReportsV3Es() {
  const reports = [
    { n: "01", title: "Audiencia", p: "Conteos agregados de visitas por fuente, dispositivo, geo y referrer — sin identificadores." },
    { n: "02", title: "Adquisición", p: "Totales por canal y campaña sobre el 100% del tráfico." },
    { n: "03", title: "Comportamiento", p: "Pageviews, eventos, engagement — cada pageview registrado de forma anónima." },
    { n: "04", title: "Embudo", p: "Drop-off por paso sin umbrales de muestreo." },
    { n: "05", title: "Atribución", p: "Ingresos last-click por canal, campaña y creatividad." },
    { n: "06", title: "eCommerce", p: "Productos, carritos, AOV, ingresos — resolución completa." },
    { n: "07", title: "Portfolio", p: "Rollup multi-site para grupos retail y agencias." },
    { n: "08", title: "LENS AI", p: "Anomalías, forecast y oportunidades en lenguaje natural." },
    { n: "09", title: "Agent Analytics", p: "GPT, Claude, Perplexity — tratados como sesiones reales.", soon: true },
  ];
  return (
    <section className="py-28 bg-white border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
          <div>
            <span className="eyebrow mb-5">Nueve reportes core</span>
            <h2 className="h-section mt-5">
              Cada reporte, <em>sobre datos completos.</em>
            </h2>
          </div>
          <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
            Nueve reportes que cubren la superficie completa de la analítica eCommerce — de adquisición a atribución, embudo a portfolio. Todos sobre el mismo pipeline de datos a resolución completa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {reports.map((r) => (
            <article key={r.title} className="bg-white border border-warm-100 rounded-xl p-6 transition-all hover:border-warm-200 hover:-translate-y-0.5">
              <div className="font-mono text-[11px] text-ink-mute tracking-[0.08em] mb-3">{r.n}</div>
              <h4 className="text-[17px] font-semibold tracking-[-0.02em] text-ink leading-[1.3] mb-1.5 flex items-center gap-2 flex-wrap">
                {r.title}
                {r.soon && <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.06em] px-2 py-0.5 rounded" style={{ background: "#E8E2F5", color: "#2B2A28" }}>Próx.</span>}
              </h4>
              <p className="text-[13.5px] text-ink-soft leading-[1.55]">{r.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* INTEGRATIONS ES */
export function IntegrationsStripV3Es() {
  const pills = ["Google Ads", "Meta Ads", "TikTok Ads", "Shopify", "WooCommerce", "Magento", "PrestaShop", "BigQuery", "Snowflake", "Looker", "Klaviyo", "HubSpot", "Segment", "Zapier", "Webhooks"];
  return (
    <section className="py-28 bg-warm-50 border-t border-warm-100 text-center">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>
          25+ integraciones nativas
        </span>
        <h2 className="h-section mt-5 mx-auto" style={{ maxWidth: "20ch" }}>
          Encaja en el stack <em>que ya usas.</em>
        </h2>
        <div className="flex gap-3 flex-wrap justify-center mt-10">
          {pills.map((p) => (
            <span key={p} className="px-5 py-2.5 bg-white border border-warm-100 rounded-full text-[14px] font-medium font-mono text-ink-2 tracking-[-0.005em]">{p}</span>
          ))}
          <span className="px-5 py-2.5 rounded-full text-[14px] font-mono font-medium bg-ink text-white border border-ink">+ 10 más</span>
        </div>
        <div className="mt-10">
          <Link href="/es/integrations" className="inline-flex items-center gap-2 px-7 py-3.5 border border-warm-200 text-ink rounded-md text-[15px] font-semibold no-underline hover:bg-white transition-colors">
            Ver todas las integraciones →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* PRODUCT FINAL CTA ES */
export function ProductFinalCtaV3Es() {
  return (
    <section id="demo" className="py-20 bg-white border-t border-warm-100">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-10">
        <div className="bg-ink text-white rounded-[20px] px-12 py-16 md:py-20 text-center relative overflow-hidden">
          <div aria-hidden className="absolute pointer-events-none" style={{ right: -100, top: -100, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(45,139,109,0.3),transparent 70%)" }} />
          <h2 className="text-white font-semibold leading-[1.1] tracking-[-0.03em] mx-auto max-w-[22ch] relative" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
            La plataforma de analítica que <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>los equipos eCommerce merecen.</em>
          </h2>
          <p className="text-white/70 text-[16px] leading-[1.55] mt-6 mb-8 mx-auto max-w-[52ch] relative">
            Reserva 30 minutos con el founder. Pasamos tu web por la calculadora de gap en directo y te mostramos los datos exactos que te están faltando.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 flex-wrap relative">
            <a href="https://cal.com/sealmetrics" className="inline-flex items-center justify-center gap-2 bg-white text-ink px-8 py-4 rounded-md text-[15px] font-semibold no-underline hover:brightness-95">
              Pide una demo →
            </a>
            <Link href="/es/pricing" className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-8 py-4 rounded-md text-[15px] font-semibold no-underline hover:bg-white/5">
              Ver precios
            </Link>
          </div>
          <p className="font-mono text-[11px] text-white/50 uppercase tracking-[0.1em] font-semibold mt-6 relative">
            14 días gratis · Sin tarjeta · Alojado en UE · Sin consentimiento por diseño
          </p>
        </div>
      </div>
    </section>
  );
}
