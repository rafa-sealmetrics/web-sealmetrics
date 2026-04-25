import Link from "next/link";

/* ============================================
   PRODUCT HERO
   ============================================ */
export function ProductHeroV3() {
  return (
    <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
        <span
          className="eyebrow mb-5"
          style={{ display: "inline-flex", justifyContent: "center" }}
        >
          Platform overview
        </span>
        <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
          Complete analytics, <em>without the compromises.</em>
        </h1>
        <p
          className="text-ink-soft mt-8 mx-auto max-w-[62ch] leading-[1.55]"
          style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
        >
          A full analytics stack built for eCommerce teams: consentless tracking, revenue attribution, LENS AI, SuperAPI and MCP server — all on the same full-resolution data. No sampling. No modelling.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-9">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-7 py-4 bg-ink text-white rounded-md text-[15px] font-semibold no-underline hover:bg-brand transition-colors"
          >
            Book a demo <span>→</span>
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 px-7 py-4 border border-warm-200 text-ink rounded-md text-[15px] font-semibold no-underline hover:bg-warm-50 transition-colors"
          >
            See how it works
          </Link>
        </div>
        <p className="mt-4 font-mono text-[12px] text-ink-soft uppercase tracking-[0.06em]">
          14-day free trial · No credit card
        </p>
      </div>
    </section>
  );
}

/* ============================================
   FOUR PILLARS
   ============================================ */
export function FourPillarsV3() {
  const pillars = [
    {
      n: "01 · Capture",
      title: "Consentless tracking",
      p: "First-party, cookieless, GDPR-safe. 100% of traffic — not a fraction.",
    },
    {
      n: "02 · Attribute",
      title: "Revenue attribution",
      p: "Every euro linked to channel, campaign and creative. Last-click on complete data.",
    },
    {
      n: "03 · Understand",
      title: "LENS AI",
      p: "Anomaly detection, forecasts, growth ops — in natural language.",
    },
    {
      n: "04 · Activate",
      title: "API · MCP · BigQuery",
      p: "Pipe real data into warehouses, agents and BI — from day one.",
    },
  ];
  return (
    <section className="py-28 bg-warm-50 border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
          <div>
            <span className="eyebrow mb-5">The platform</span>
            <h2 className="h-section mt-5">
              Four pillars. <em>One picture.</em>
            </h2>
          </div>
          <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
            SealMetrics is not four tools stitched together. It&apos;s one pipeline: from the first observed visitor to the last-touch revenue attribution your CFO signs off on.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1px] bg-warm-100 border border-warm-100 rounded-2xl overflow-hidden">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white p-8 min-h-[200px] flex flex-col"
            >
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-brand mb-4">
                {p.n}
              </div>
              <h4 className="text-[20px] font-semibold tracking-[-0.02em] leading-[1.25] mb-2 text-ink">
                {p.title}
              </h4>
              <p className="text-[14px] leading-[1.55] text-ink-soft">{p.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   FEATURE BLOCK · wrapper
   ============================================ */
function FeatureBlock({
  tag,
  title,
  lede,
  bullets,
  visual,
  reversed = false,
  bgClass = "bg-white",
}: {
  tag: string;
  title: React.ReactNode;
  lede: string;
  bullets: string[];
  visual: React.ReactNode;
  reversed?: boolean;
  bgClass?: string;
}) {
  return (
    <section className={`py-28 border-t border-warm-100 ${bgClass}`}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div
          className={`grid md:grid-cols-2 gap-14 md:gap-20 items-center ${
            reversed ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <span className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-brand bg-brand-soft px-3 py-1 rounded-md mb-5">
              {tag}
            </span>
            <h3
              className="font-semibold text-ink tracking-[-0.03em] leading-[1.05]"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              {title}
            </h3>
            <p className="text-[17px] leading-[1.6] text-ink-soft mt-5">{lede}</p>
            <ul className="mt-6 flex flex-col">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 items-center py-2.5 border-b border-warm-100 text-[15px] text-ink-2 leading-[1.45]"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                    aria-hidden
                  />
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

/* ============================================
   FEATURE · LENS AI
   ============================================ */
export function FeatureLensAIV3() {
  return (
    <FeatureBlock
      tag="LENS AI"
      title={
        <>
          Ask your data a question.
          <br />
          Get a <em>real answer.</em>
        </>
      }
      lede="60+ anomaly rules run against your full-resolution data every hour. LENS AI watches revenue, funnel and channels in the background — and surfaces what changed, in plain language."
      bullets={[
        "Forecasts revenue, sessions, conversion rate",
        "Detects anomalies before they hit Monday standup",
        "Suggests growth opportunities by channel",
        "Weekly & monthly auto-reports, in your inbox",
      ]}
      visual={<LensChatVisual />}
    />
  );
}

function LensChatVisual() {
  return (
    <div
      className="bg-ink text-white rounded-[20px] p-8 md:p-10 min-h-[380px] flex flex-col justify-center relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          right: -80,
          top: -80,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(45,139,109,0.35),transparent 70%)",
        }}
      />
      <div className="relative">
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-4" style={{ color: "#E8B84B" }}>
          ● LENS AI · live
        </div>
        <h5 className="text-[20px] font-semibold mb-6 leading-[1.3]">
          What happened to paid social yesterday?
        </h5>
        <div className="flex flex-col gap-2.5">
          <div className="self-end max-w-[85%] bg-white/10 text-white px-4 py-3 rounded-[14px] rounded-br-[4px] text-[13px] leading-[1.45]">
            Why did paid social drop 22%?
          </div>
          <div
            className="self-start max-w-[90%] px-4 py-3 rounded-[14px] rounded-bl-[4px] text-[13px] leading-[1.5] font-medium"
            style={{ background: "#E8B84B", color: "#0E0E0C" }}
          >
            Meta CPC rose 31% on the <b>Summer Sale</b> campaign after 4 PM. ROAS dropped from 4.2 → 2.8. 3 ad sets responsible.
            <span className="block mt-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.06em] text-brand">
              Anomaly · high confidence · 3 AM detection
            </span>
          </div>
          <div className="self-end max-w-[85%] bg-white/10 text-white px-4 py-3 rounded-[14px] rounded-br-[4px] text-[13px] leading-[1.45]">
            Show me the ad sets.
          </div>
          <div
            className="self-start max-w-[90%] px-4 py-3 rounded-[14px] rounded-bl-[4px] text-[13px] leading-[1.5] font-medium"
            style={{ background: "#E8B84B", color: "#0E0E0C" }}
          >
            Opening Attribution → Meta → Summer Sale…
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   FEATURE · ATTRIBUTION
   ============================================ */
export function FeatureAttributionV3() {
  return (
    <FeatureBlock
      tag="Revenue attribution"
      reversed
      bgClass="bg-warm-50"
      title={
        <>
          Every euro <em>gets a source.</em>
        </>
      }
      lede="Last-click revenue attribution on 100% of observed events — including the pageviews GA4 loses to cookies and consent. Aggregate channel, campaign and creative totals. No modelling, no sampling, no per-user tracking."
      bullets={[
        "Channel · campaign · ad set · creative granularity",
        "Microconversion counts & revenue totals",
        "Multi-site portfolio rollup",
        "Export to BigQuery + MCP in one click",
      ]}
      visual={<AttributionBarsVisual />}
    />
  );
}

function AttributionBarsVisual() {
  const bars = [
    { label: "Organic", amount: "€482K", pct: 92, color: "#E8B84B" },
    { label: "Meta Ads", amount: "€331K", pct: 64, color: "#B5423B" },
    { label: "Google Ads", amount: "€248K", pct: 48, color: "#2D8B6D" },
    { label: "Email", amount: "€142K", pct: 28, color: "#E8B84B" },
    { label: "Direct", amount: "€81K", pct: 16, color: "#B5423B" },
  ];
  return (
    <div
      className="bg-ink text-white rounded-[20px] p-8 md:p-10 min-h-[380px] flex flex-col justify-center relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          right: -80,
          top: -80,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(45,139,109,0.35),transparent 70%)",
        }}
      />
      <div className="relative">
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-3" style={{ color: "#E8B84B" }}>
          ● Revenue / last 30 days
        </div>
        <h5 className="text-[22px] font-semibold mb-6 leading-[1.3] tabular-nums">
          €1,284,430 attributed
        </h5>
        <div className="flex flex-col gap-3 font-mono text-[12px]">
          {bars.map((b) => (
            <div
              key={b.label}
              className="grid grid-cols-[88px_1fr_80px] items-center gap-3"
            >
              <span className="text-white/85">{b.label}</span>
              <div className="h-3.5 rounded-md bg-white/8 overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div
                  className="h-full rounded-md"
                  style={{ width: `${b.pct}%`, background: b.color }}
                />
              </div>
              <span className="text-white font-semibold text-right tabular-nums">
                {b.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================
   FEATURE · SUPERAPI + MCP + BIGQUERY
   ============================================ */
export function FeatureSuperAPIV3() {
  return (
    <FeatureBlock
      tag="SuperAPI · MCP · BigQuery"
      title={
        <>
          Your data, <em>everywhere.</em>
        </>
      }
      lede="Full-resolution data piped wherever you need it. Native BigQuery export. REST + streaming API. And an MCP server so AI agents — Claude, ChatGPT, custom copilots — can query your analytics directly."
      bullets={[
        "BigQuery native export (no ETL)",
        "REST & streaming API with full coverage",
        "MCP server for AI agents",
        "Webhooks for real-time ops",
      ]}
      visual={<SuperApiVisual />}
    />
  );
}

function SuperApiVisual() {
  return (
    <div
      className="bg-ink text-white rounded-[20px] p-8 md:p-10 min-h-[380px] flex flex-col justify-center relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          left: -60,
          bottom: -60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(45,139,109,0.35),transparent 70%)",
        }}
      />
      <div className="relative">
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-3" style={{ color: "#E8B84B" }}>
          ● SuperAPI · query
        </div>
        <h5 className="text-[20px] font-semibold mb-6 leading-[1.3]">
          One query, full resolution
        </h5>
        <pre className="font-mono text-[12.5px] leading-[1.8] text-white/90 whitespace-pre-wrap overflow-x-auto">
<span className="text-white/45">{`-- Last 7 days, attributed revenue by channel`}</span>{"\n"}
<span style={{ color: "#E8B84B" }}>SELECT</span>{" "}channel,{"\n"}
       <span style={{ color: "#E8B84B" }}>SUM</span>(revenue) <span style={{ color: "#E8B84B" }}>AS</span> attributed{"\n"}
<span style={{ color: "#E8B84B" }}>FROM</span>   sealmetrics.conversions{"\n"}
<span style={{ color: "#E8B84B" }}>WHERE</span>  date &gt; <span style={{ color: "#B5423B" }}>&quot;2026-04-14&quot;</span>{"\n"}
<span style={{ color: "#E8B84B" }}>GROUP BY</span> channel{"\n"}
<span style={{ color: "#E8B84B" }}>ORDER BY</span> attributed <span style={{ color: "#E8B84B" }}>DESC</span>;{"\n"}{"\n"}
<span className="text-white/45">{`→ 1.2M rows · 340ms · full resolution`}</span>
        </pre>
      </div>
    </div>
  );
}

/* ============================================
   NINE REPORTS
   ============================================ */
export function NineReportsV3() {
  const reports = [
    { n: "01", title: "Audience", p: "Aggregate visit counts by source, device, geo and referrer — no identifiers." },
    { n: "02", title: "Acquisition", p: "Channel & campaign totals on 100% of traffic." },
    { n: "03", title: "Behavior", p: "Pageviews, events, engagement counts — every pageview logged anonymously." },
    { n: "04", title: "Funnel", p: "Step-level drop-off with no sampling thresholds." },
    { n: "05", title: "Attribution", p: "Last-click revenue by channel, campaign and creative." },
    { n: "06", title: "eCommerce", p: "Products, baskets, AOV, revenue — full resolution." },
    { n: "07", title: "Portfolio", p: "Multi-site rollup for retail groups & agencies." },
    { n: "08", title: "LENS AI", p: "Anomalies, forecasts and growth ops in natural language." },
    { n: "09", title: "Agent Analytics", p: "GPT, Claude, Perplexity — treated as real sessions.", soon: true },
  ];
  return (
    <section className="py-28 bg-white border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
          <div>
            <span className="eyebrow mb-5">Nine core reports</span>
            <h2 className="h-section mt-5">
              Every report, <em>built on complete data.</em>
            </h2>
          </div>
          <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
            Nine reports covering the full surface of eCommerce analytics — from acquisition to attribution, funnel to portfolio. All on the same full-resolution data pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {reports.map((r) => (
            <article
              key={r.title}
              className="bg-white border border-warm-100 rounded-xl p-6 transition-all hover:border-warm-200 hover:-translate-y-0.5"
              style={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
            >
              <div className="font-mono text-[11px] text-ink-mute tracking-[0.08em] mb-3">
                {r.n}
              </div>
              <h4 className="text-[17px] font-semibold tracking-[-0.02em] text-ink leading-[1.3] mb-1.5 flex items-center gap-2 flex-wrap">
                {r.title}
                {r.soon && (
                  <span
                    className="font-mono text-[10px] font-semibold uppercase tracking-[0.06em] px-2 py-0.5 rounded"
                    style={{ background: "#E8E2F5", color: "#2B2A28" }}
                  >
                    Soon
                  </span>
                )}
              </h4>
              <p className="text-[13.5px] text-ink-soft leading-[1.55]">{r.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   INTEGRATIONS STRIP
   ============================================ */
export function IntegrationsStripV3() {
  const pills = [
    "Google Ads",
    "Meta Ads",
    "TikTok Ads",
    "Shopify",
    "WooCommerce",
    "Magento",
    "PrestaShop",
    "BigQuery",
    "Snowflake",
    "Looker",
    "Klaviyo",
    "HubSpot",
    "Segment",
    "Zapier",
    "Webhooks",
  ];
  return (
    <section className="py-28 bg-warm-50 border-t border-warm-100 text-center">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <span
          className="eyebrow mb-5"
          style={{ display: "inline-flex", justifyContent: "center" }}
        >
          25+ native integrations
        </span>
        <h2 className="h-section mt-5 mx-auto" style={{ maxWidth: "20ch" }}>
          Plug into the stack <em>you already run.</em>
        </h2>
        <div className="flex gap-3 flex-wrap justify-center mt-10">
          {pills.map((p) => (
            <span
              key={p}
              className="px-5 py-2.5 bg-white border border-warm-100 rounded-full text-[14px] font-medium font-mono text-ink-2 tracking-[-0.005em]"
            >
              {p}
            </span>
          ))}
          <span
            className="px-5 py-2.5 rounded-full text-[14px] font-mono font-medium bg-ink text-white border border-ink"
          >
            + 10 more
          </span>
        </div>
        <div className="mt-10">
          <Link
            href="/integrations"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-warm-200 text-ink rounded-md text-[15px] font-semibold no-underline hover:bg-white transition-colors"
          >
            See all integrations →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   PRODUCT FINAL CTA
   ============================================ */
export function ProductFinalCtaV3() {
  return (
    <section id="demo" className="py-20 bg-white border-t border-warm-100">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-10">
        <div className="bg-ink text-white rounded-[20px] px-12 py-16 md:py-20 text-center relative overflow-hidden">
          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              right: -100,
              top: -100,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "radial-gradient(circle,rgba(45,139,109,0.3),transparent 70%)",
            }}
          />
          <h2
            className="text-white font-semibold leading-[1.1] tracking-[-0.03em] mx-auto max-w-[22ch] relative"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            The analytics platform <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>eCommerce teams deserve.</em>
          </h2>
          <p className="text-white/70 text-[16px] leading-[1.55] mt-6 mb-8 mx-auto max-w-[52ch] relative">
            Book a 30-minute walkthrough with the founder. We&apos;ll run your own site through the gap calculator live and show you the exact data you&apos;re missing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 flex-wrap relative">
            <a
              href="https://cal.com/sealmetrics"
              className="inline-flex items-center justify-center gap-2 bg-white text-ink px-8 py-4 rounded-md text-[15px] font-semibold no-underline hover:brightness-95"
            >
              Book a demo →
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-8 py-4 rounded-md text-[15px] font-semibold no-underline hover:bg-white/5"
            >
              See pricing
            </Link>
          </div>
          <p className="font-mono text-[11px] text-white/50 uppercase tracking-[0.1em] font-semibold mt-6 relative">
            14-day free trial · No credit card · EU-hosted · Consentless by design
          </p>
        </div>
      </div>
    </section>
  );
}
