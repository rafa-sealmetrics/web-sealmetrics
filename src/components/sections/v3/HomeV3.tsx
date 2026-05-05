import { Picture } from "@/components/ui/Picture";
import Link from "next/link";
import { HeroDashboard } from "./HeroDashboard";
import { PRICING } from "@/lib/content/pricing";
import { DualCTA } from "@/components/homepage/DualCTA";

/* ============================================
   HERO · V3 centered with dashboard
   ============================================ */
export function HeroV3() {
  return (
    <section data-hero className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-0">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center pb-16">
        <div className="inline-flex items-center gap-3 bg-white border border-warm-100 rounded-full px-4 py-1.5 text-[13px] text-ink-2 mb-10">
          <span className="bg-warm-100 text-ink px-2.5 py-1 rounded text-[10px] font-semibold font-mono tracking-[0.08em] uppercase">
            New · Case study
          </span>
          <a href="#featured-case" className="text-ink border-b border-warm-200 hover:border-ink">
            Palladium Hotel Group: 40% of traffic had no attribution → +165% Display CPS
          </a>
        </div>

        <h1 className="h-display mx-auto">
          Make decisions with <em className="italic-accent">data you trust</em> again.
        </h1>

        <p
          className="text-ink-soft mt-8 mx-auto max-w-[62ch] leading-[1.55]"
          style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
        >
          SealMetrics captures 100% of your traffic, without cookies or consent. The complete data source that puts your marketing budget back on solid ground.
        </p>

        <p className="text-[13.5px] text-ink-soft mt-5">
          Trusted by marketing teams analyzing <b className="font-semibold text-ink">500M+ events</b> across <b className="font-semibold text-ink">12 countries</b>
        </p>

        <DualCTA locale="en" className="justify-center mt-7" />

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft">
          {["GDPR by architecture", "ePrivacy", "Schrems II clean", "EU-hosted · Dublin"].map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
              {b}
            </span>
          ))}
        </div>

        {/* Integration badges */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mt-7 opacity-70">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft mr-1">
            Integrates with
          </span>
          {[
            { src: "/logos/brands/shopify.svg", alt: "Shopify", h: 26 },
            { src: "/logos/brands/woocommerce.svg", alt: "WooCommerce", h: 38 },
            { src: "/logos/brands/magento.svg", alt: "Magento", h: 26 },
            { src: "/logos/brands/prestashop.svg", alt: "PrestaShop", h: 26 },
            { src: "/logos/brands/bigquery.svg", alt: "BigQuery", h: 26 },
          ].map((logo) => (
            <Picture
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={logo.h}
              className="object-contain w-auto"
              style={{ height: `${logo.h}px`, maxWidth: 150 }}
            />
          ))}
        </div>
      </div>

      {/* Dashboard mockup (interactive) */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <HeroDashboard />
      </div>
    </section>
  );
}

/* ============================================
   LOGOS STRIP · reusable
   Top row (first 5) visually larger — flagship clients.
   Bottom row slightly smaller.
   ============================================ */
const LOGOS: { src: string; alt: string; h: number }[] = [
  // Top row — flagship
  { src: "/logos/clients/dreamplace.svg", alt: "Dreamplace Hotels", h: 54 },
  { src: "/logos/clients/acciona.svg", alt: "Acciona", h: 44 },
  { src: "/logos/clients/crocs.svg", alt: "Crocs", h: 38 },
  { src: "/logos/clients/desigual-dark.svg", alt: "Desigual", h: 38 },
  // Bottom row — secondary
  { src: "/logos/clients/unicef.svg", alt: "UNICEF", h: 36 },
  { src: "/logos/clients/casabatllo.png", alt: "Casa Batlló", h: 44 },
  { src: "/logos/clients/juguettos.png", alt: "Juguettos", h: 38 },
  { src: "/logos/clients/3cat.png", alt: "3Cat", h: 36 },
  { src: "/logos/clients/fundacion-bankinter.png", alt: "Fundación Bankinter", h: 80 },
];

export function LogosStrip() {
  return (
    <section className="py-14 bg-warm-white border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="mb-9">
          <h3
            className="font-semibold text-ink tracking-[-0.02em] leading-[1.2]"
            style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
          >
            The <em className="italic-accent">single source of truth</em> European eCommerce signs against
          </h3>
          <p className="mt-3 text-[15.5px] leading-[1.55] text-ink-soft max-w-[68ch]">
            <b className="text-ink font-semibold">Dreamplace Hotels</b> recovered <b className="text-ink font-semibold">+30% more traffic</b> vs GA4 and closed a <b className="text-ink font-semibold">15–20% gap</b> in sales attribution against their CRM. <b className="text-ink font-semibold">Palladium Hotel Group</b> recovered <b className="text-ink font-semibold">35% of unattributed bookings</b> and improved Display CPS by <b className="text-ink font-semibold">+165%</b>.
          </p>
        </div>
        <LogosGrid />
      </div>
    </section>
  );
}

export function LogosSecondary() {
  return (
    <section className="py-14 bg-warm-white border-t border-warm-100">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <p className="text-center mx-auto max-w-[44rem] mb-8 leading-[1.4] text-ink font-medium"
          style={{ fontSize: "clamp(18px, 2vw, 22px)", letterSpacing: "-0.015em" }}
        >
          Joining <em className="italic-accent">hotel groups, DTC brands and media companies</em> — hundreds of European teams measuring what actually happened.
        </p>
        <LogosGrid />
      </div>
    </section>
  );
}

function LogosGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-12 items-center justify-items-center">
      {LOGOS.map((logo, i) => {
        const isTop = i < 5;
        return (
          <div
            key={logo.alt}
            className={`flex items-center justify-center transition-transform hover:scale-105 ${
              isTop ? "min-h-20" : "min-h-12"
            }`}
          >
            <Picture
              src={logo.src}
              alt={logo.alt}
              width={isTop ? 200 : 200}
              height={logo.h}
              className="object-contain w-auto"
              style={{ height: `${logo.h}px`, maxWidth: "220px" }}

            />
          </div>
        );
      })}
    </div>
  );
}

/* ============================================
   VALUE PROP · 4-minute strip
   ============================================ */
export function ValueProp4Min() {
  return (
    <section className="bg-ink text-white py-14 border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 grid md:grid-cols-[1fr_auto] gap-7 md:gap-12 items-center">
        <div>
          <span className="inline-block bg-brand text-white font-mono text-[11px] font-semibold uppercase tracking-[0.14em] px-3 py-1 rounded-md mb-3.5">
            4-minute demo
          </span>
          <p
            className="text-white font-semibold leading-[1.2] tracking-[-0.025em] max-w-[32ch]"
            style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
          >
            In 4 minutes, go from seeing{" "}
            <em
              className="italic font-medium"
              style={{ color: "#E8B84B", fontStyle: "italic" }}
            >
              half your sales
            </em>{" "}
            to seeing all of them.
          </p>
          <p className="mt-3 font-mono text-[13px] tracking-[0.04em] text-white/60">
            Your own site · your real gap · no install · no commitment
          </p>
        </div>
        <Link
          href="/audit"
          className="inline-flex items-center gap-2 bg-amber text-ink px-8 py-4 rounded-md text-[15px] font-semibold no-underline hover:brightness-105 transition"
          style={{ backgroundColor: "#E8B84B" }}
        >
          Book a 4-min walkthrough →
        </Link>
      </div>
    </section>
  );
}

/* ============================================
   COMPARE · Palladium Hotel Group finding + Patterns
   ============================================ */
export function CompareSection() {
  return (
    <section className="py-28 bg-white border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-14">
          <div>
            <span className="eyebrow mb-5">The finding that changed the conversation</span>
            <h2 className="h-section mt-5">
              Half of your traffic isn&apos;t mis-attributed.{" "}
              <em>It isn&apos;t there at all.</em>
            </h2>
          </div>
          <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
            When Palladium Hotel Group compared SealMetrics against their full stack — Meta Pixel, Google Ads, Analytics, their CRM — they discovered 40% of their inbound traffic had no attribution. Not mis-tagged. Not in &ldquo;direct&rdquo;. Source and medium simply lost in transit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <article className="bg-white border border-warm-100 rounded-xl p-10 md:p-12 flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-sm bg-red-alert shrink-0" />
                <h3
                  className="font-semibold text-ink leading-[1.15] tracking-[-0.015em]"
                  style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
                >
                  Conventional stack
                </h3>
              </div>
              <div
                className="font-semibold leading-[0.88] tracking-[-0.045em] mt-6 text-warm-300 tabular-nums"
                style={{ fontSize: "clamp(100px, 13vw, 180px)" }}
              >
                40<span className="text-[0.5em] text-ink-soft ml-1 align-top relative top-[0.3em] font-normal">%</span>
              </div>
              <div className="font-mono text-[12px] uppercase tracking-[0.1em] text-ink-soft font-semibold mb-7 mt-1.5">
                of traffic with no attribution · source/medium lost
              </div>
            </div>
            <p className="text-[17px] text-ink-2 leading-[1.5] max-w-[40ch]">
              Every report — brand, agency, dashboard — is built on the share that survived cookie walls, sampling and platform bias. Every budget decision, defended on a fraction of what actually happened.
            </p>
            <div className="mt-6 pt-5 border-t border-warm-100 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft font-semibold">
              Source · Palladium Hotel Group internal audit · April 2026
            </div>
          </article>

          <article
            className="bg-ink text-white border border-ink rounded-xl p-10 md:p-12 flex flex-col justify-between min-h-[460px] relative overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute pointer-events-none"
              style={{
                right: -100,
                top: -100,
                width: 320,
                height: 320,
                borderRadius: "50%",
                background: "radial-gradient(circle,rgba(45,139,109,0.35),transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-sm bg-brand shrink-0" />
                <h3
                  className="font-semibold text-white leading-[1.15] tracking-[-0.015em]"
                  style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
                >
                  With <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>SealMetrics</em> · neutrally observed
                </h3>
              </div>
              <div
                className="font-semibold leading-[0.88] tracking-[-0.045em] mt-6 text-white tabular-nums"
                style={{ fontSize: "clamp(100px, 13vw, 180px)" }}
              >
                100<span className="text-[0.5em] text-white/60 ml-1 align-top relative top-[0.3em] font-normal">%</span>
              </div>
              <div className="font-mono text-[12px] uppercase tracking-[0.1em] text-white/60 font-semibold mb-7 mt-1.5">
                of events observed · 35% more bookings now attributed
              </div>
            </div>
            <p className="text-[17px] text-white/85 leading-[1.5] max-w-[40ch] relative">
              <b className="text-amber font-semibold">&ldquo;The data is agnostic, unbiased, neutral. There&apos;s no black box.&rdquo;</b>{" "}
              The number every stakeholder signs against — because it has no ad inventory to sell and nothing to inflate.
            </p>
            <div className="mt-6 pt-5 border-t border-white/15 font-mono text-[11px] uppercase tracking-[0.08em] text-white/50 font-semibold relative">
              Quote · Toni Andújar · Digital &amp; Direct Sales Director · Palladium Hotel Group
            </div>
          </article>
        </div>

        <p
          className="text-center mx-auto mt-10 text-ink font-medium leading-[1.3] max-w-[32ch]"
          style={{ fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "-0.02em" }}
        >
          The difference isn&apos;t a margin of error. <em>It&apos;s half of your decisions.</em>
        </p>

        {/* Patterns strip */}
        <div className="mt-14 pt-10 border-t border-warm-100">
          <h3
            className="font-semibold text-ink tracking-[-0.02em] leading-[1.2] mb-8"
            style={{ fontSize: "clamp(24px, 2.6vw, 34px)" }}
          >
            Patterns we see <em className="italic-accent">across European brands</em> we audit
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "+165%", em: "165", l: "Cost-per-Search improvement on Display", src: "Palladium Hotel Group · DV360" },
              { n: "40%", em: "40", l: "Of traffic with no attribution before", src: "Palladium Hotel Group · 2026 audit" },
              { n: "35%", em: "35", l: "Of bookings unattributed in GA4", src: "Palladium Hotel Group · 2026 audit" },
              { n: "30–70%", em: "70", l: "More traffic observed vs GA", src: "Cross-industry average" },
            ].map((p) => (
              <div key={p.l} className="p-5 bg-white border border-warm-100 rounded-xl">
                <div className="text-[26px] font-semibold tracking-[-0.025em] text-ink tabular-nums">
                  {p.n}
                </div>
                <div className="text-[13px] text-ink-2 font-medium leading-[1.4] mt-1.5">
                  {p.l}
                </div>
                <div className="font-mono text-[10px] text-ink-soft uppercase tracking-[0.1em] font-semibold mt-1.5">
                  {p.src}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Four tools, four truths */}
        <div className="mt-16 pt-10 border-t border-warm-100">
          <h3
            className="font-semibold text-ink tracking-[-0.02em] leading-[1.2] mb-4"
            style={{ fontSize: "clamp(24px, 2.6vw, 34px)" }}
          >
            Four tools. Four different numbers. <em className="italic-accent">One reason why.</em>
          </h3>
          <p className="text-[16px] leading-[1.6] text-ink-soft max-w-[62ch] mb-8">
            Every number in your weekly reporting comes from a tool that has a financial stake in what it reports. Three of the four below either sell ad inventory or live inside a company that does. The fourth doesn&apos;t — which is exactly why brand, finance and agencies can sign against it.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Sells its own ads", name: "Meta Ads", bias: "Reports with Meta's bias. Attributes the maximum possible to Meta campaigns — because every claimed conversion justifies the next ad euro.", dark: false },
            { label: "Sells its own ads", name: "Google Ads", bias: "Reports with Google's bias. Inflates last-click toward paid search, because paid search is the inventory Google is selling you.", dark: false },
            { label: "Lives inside Google", name: "Google Analytics", bias: "Not sold as an ad product, but part of Google's ecosystem. Samples above threshold. Models what consent-rejection removes.", dark: false },
            { label: "Sells no inventory", name: "SealMetrics", bias: "No ad business. No channel to favour. Measures what actually happened — which is why agencies, brand and CFO can sign the same number.", dark: true },
          ].map((t) => (
            <div
              key={t.name}
              className={`p-7 rounded-xl border flex flex-col gap-2.5 ${
                t.dark
                  ? "bg-ink text-white border-ink relative overflow-hidden"
                  : "bg-warm-50 border-warm-100"
              }`}
            >
              {t.dark && (
                <span
                  aria-hidden
                  className="absolute pointer-events-none"
                  style={{
                    right: -40,
                    top: -40,
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    background: "radial-gradient(circle,rgba(45,139,109,0.4),transparent 70%)",
                  }}
                />
              )}
              <div className={`font-mono text-[10px] uppercase tracking-[0.12em] font-semibold relative ${t.dark ? "text-brand-soft" : "text-ink-soft"}`}>
                {t.label}
              </div>
              <div className="text-[20px] font-semibold tracking-[-0.02em] relative">{t.name}</div>
              <div className={`text-[13px] leading-[1.5] mt-1 relative ${t.dark ? "text-white/75" : "text-ink-soft"}`}>
                {t.bias}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   FEATURED CASE · anonymized hotel group
   ============================================ */
export function FeaturedCase() {
  return (
    <section id="featured-case" className="py-20 md:py-24 bg-warm-50 border-t border-warm-100">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-10">
        <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand mb-10">
          Case study · Palladium Hotel Group
        </p>

        {/* Big metric tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { n: "40%", c: "text-ink", l: "traffic that was invisible to GA4" },
            { n: "35%", c: "text-brand", l: "bookings recovered & attributed" },
            { n: "+165%", c: "text-brand", l: "Display CPS improvement on DV360" },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-white rounded-2xl p-8 text-center border border-warm-100 shadow-[0_1px_0_rgba(14,14,12,0.04)]"
            >
              <p
                className={`font-semibold tracking-[-0.03em] tabular-nums leading-none ${s.c}`}
                style={{ fontSize: "clamp(40px, 5vw, 56px)" }}
              >
                {s.n}
              </p>
              <p className="text-[13.5px] text-ink-soft mt-3 leading-[1.4]">{s.l}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="max-w-[760px] mx-auto text-center">
          <p
            className="text-ink italic font-medium leading-[1.4] tracking-[-0.015em]"
            style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
          >
            &ldquo;The data SealMetrics delivers is agnostic, unbiased and neutral. There&apos;s no black box.&rdquo;
          </p>
          <footer className="mt-5 font-mono text-[12px] uppercase tracking-[0.08em] text-ink-soft font-semibold">
            — <strong className="text-ink">Toni Andújar</strong> · Digital &amp; Direct Sales Director · Palladium Hotel Group
          </footer>
        </blockquote>

        <div className="mt-10 flex flex-col items-center gap-4">
          <DualCTA locale="en" />
          <Link
            href="/case-studies/palladium-hotel-group"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink no-underline border-b border-warm-200 hover:border-ink"
          >
            Read the full case study <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  client,
  sector,
  quote,
  cite,
  stats,
}: {
  client: string;
  sector: string;
  quote: React.ReactNode;
  cite: string;
  stats: { n: string; l: string }[];
}) {
  return (
    <article className="bg-white border border-warm-100 rounded-xl p-8 flex flex-col gap-4">
      <header className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-warm-100">
        <span className="text-[17px] font-semibold text-ink tracking-[-0.015em]">{client}</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft font-semibold">
          {sector}
        </span>
      </header>
      <blockquote className="text-[18px] leading-[1.4] tracking-[-0.01em] text-ink font-medium">
        {quote}
        <cite className="block mt-2.5 not-italic font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft font-semibold">
          {cite}
        </cite>
      </blockquote>
      <div className="grid grid-cols-2 gap-3.5 pt-4 border-t border-warm-100">
        {stats.map((s) => (
          <div key={s.n}>
            <div className="text-[28px] font-semibold tracking-[-0.03em] text-brand leading-none tabular-nums">
              {s.n}
            </div>
            <div className="text-[12.5px] leading-[1.45] text-ink-soft mt-1.5">{s.l}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

/* ============================================
   SOCIAL PROOF BAND · 2.2 · post-hero credibility
   ============================================ */
export function SocialProofBand() {
  return (
    <section className="bg-warm-white border-t border-warm-100 py-14">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="bg-white border border-warm-100 rounded-2xl p-8 md:p-12 grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-soft font-semibold">
              Featured proof
            </span>
            <span className="text-[17px] font-semibold text-ink tracking-[-0.015em]">
              Palladium Hotel Group
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft">
              Hotels · eCommerce · Spain
            </span>
          </div>
          <div>
            <p
              className="text-ink font-medium leading-[1.35] tracking-[-0.015em]"
              style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
            >
              Recovered <em className="italic-accent">35% of bookings</em> with no attribution and improved Display CPC by <em className="italic-accent">+165%</em>. Same budget. Zero extra euros. Just the right data.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-7 pt-6 border-t border-warm-100">
              {[
                { n: "35%", l: "Bookings recovered" },
                { n: "+165%", l: "Display CPC improvement" },
                { n: "€0", l: "Extra spend" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-[26px] font-semibold tracking-[-0.025em] text-ink tabular-nums leading-none">
                    {s.n}
                  </div>
                  <div className="text-[12.5px] text-ink-soft mt-2 leading-[1.4]">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/case-studies/palladium-hotel-group"
              className="inline-flex items-center gap-1.5 mt-6 text-[14px] font-semibold text-ink no-underline border-b border-warm-200 hover:border-ink"
            >
              Read the full case study <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   PROBLEM SECTION · 2.3 · one impactful headline + datapoint
   ============================================ */
export function ProblemSection() {
  return (
    <section className="bg-white border-t border-warm-100 py-20 md:py-24">
      <div className="max-w-[900px] mx-auto px-5 sm:px-10 text-center">
        <p
          className="font-semibold text-ink leading-[1.05] tracking-[-0.025em]"
          style={{ fontSize: "clamp(34px, 5vw, 60px)" }}
        >
          <span className="text-red-alert">62%</span> of your traffic is <em className="italic-accent">invisible to GA4.</em>
        </p>
        <p className="mt-6 text-[17px] md:text-[18.5px] leading-[1.6] text-ink-soft max-w-[58ch] mx-auto">
          Consent banners block most of your data. You&apos;re making decisions with a fraction of reality — and your CFO is starting to notice.
        </p>
      </div>
    </section>
  );
}

/* ============================================
   HOW TO START · 2.4 · 3-step setup
   ============================================ */
export function SolutionStepsPLG() {
  return (
    <section id="how" className="bg-warm-50 border-t border-warm-100 py-24">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-14">
          <div>
            <span className="eyebrow mb-5">How to start</span>
            <h2 className="h-section mt-5">
              5 minutes to see your <em>real traffic.</em>
            </h2>
          </div>
          <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
            No migration. No cookie banner. No data team required. From zero to real data in less time than your standup.
          </p>
        </div>

        <ol className="grid md:grid-cols-3 gap-4">
          {[
            {
              n: "01",
              time: "Minute 1",
              t: "Paste the script",
              r: "Activate our module on your CMS or paste the pixel via Tag Manager. No engineering ticket, no deployment.",
            },
            {
              n: "02",
              time: "Minute 3",
              t: "See real data",
              r: "Visits, products, add-to-cart, checkout, purchase — all flowing into your dashboard from the first second. 100% of traffic, GDPR-compliant.",
            },
            {
              n: "03",
              time: "Minute 5",
              t: "Discover your hidden traffic",
              r: "See the 35-55% GA4 hides from you. Reallocate paid media on data that matches Shopify. Defend every euro in front of finance.",
            },
          ].map((s) => (
            <li
              key={s.n}
              className="bg-white border border-warm-100 rounded-xl p-8 flex flex-col gap-3 min-h-[260px]"
            >
              <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-brand">
                Step {s.n}
              </span>
              <span className="inline-flex self-start px-2.5 py-1 bg-brand-soft text-brand-hover font-mono text-[10px] font-bold uppercase tracking-[0.08em] rounded">
                {s.time}
              </span>
              <h3 className="text-[22px] font-semibold tracking-[-0.025em] leading-[1.2] mt-2">
                {s.t}
              </h3>
              <p className="text-[14.5px] leading-[1.55] text-ink-soft mt-auto">{s.r}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="https://my.sealmetrics.com/register"
            className="inline-flex items-center gap-2 px-7 py-4 bg-ink text-white rounded-md text-[15px] font-semibold no-underline hover:bg-brand transition-colors"
          >
            Start your 14-day free trial <span>→</span>
          </a>
          <a
            href="#ga4-gap"
            className="inline-flex items-center gap-2 px-7 py-4 border border-warm-200 text-ink rounded-md text-[15px] font-semibold no-underline hover:bg-warm-50 transition-colors"
          >
            See your GA4 gap first <span>→</span>
          </a>
        </div>

        <p className="mt-5 text-center font-mono text-[12px] text-ink-soft uppercase tracking-[0.08em]">
          14-day free trial · 4-minute setup · Worth a look before next quarter&apos;s budget
        </p>
      </div>
    </section>
  );
}

/* ============================================
   FOUR PILLARS · 2.5 · condensed inline trust badges
   ============================================ */
export function FourPillars() {
  const pillars = [
    "Ad arbitrage",
    "Neutral data",
    "Inventory audit",
    "Margin protection",
  ];

  return (
    <section className="py-10 border-y border-warm-100 bg-warm-white">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 flex flex-wrap justify-center gap-x-10 gap-y-4 items-center">
        {pillars.map((p) => (
          <span
            key={p}
            className="inline-flex items-center gap-2.5 text-[14px] font-semibold text-ink"
          >
            <span className="w-2 h-2 rounded-sm bg-brand shrink-0" />
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ============================================
   GAP CALCULATOR CTA · 2.6 · functional signup
   ============================================ */
export function GapCalculatorCTA() {
  return (
    <section className="bg-warm-50 border-t border-warm-100 py-24">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="bg-white border border-warm-100 rounded-2xl p-10 md:p-14 text-center">
          <span className="eyebrow mb-5 justify-center" style={{ display: "inline-flex" }}>
            60-second gap report
          </span>
          <h2 className="h-section mt-5 mx-auto" style={{ maxWidth: "22ch" }}>
            How much traffic are you losing? <em>Find out in 60 seconds.</em>
          </h2>
          <p className="text-[17px] leading-[1.6] text-ink-soft mt-5 mx-auto max-w-[58ch]">
            Enter your domain. We estimate your real data gap based on country, industry and average consent rate. Instant report. No signup. No call.
          </p>

          <form
            action="/data-loss-calculator"
            method="get"
            className="mt-9 mx-auto max-w-[520px] flex flex-col sm:flex-row gap-3"
          >
            <input
              name="domain"
              type="text"
              placeholder="yourdomain.com"
              aria-label="Your domain"
              className="flex-1 px-5 py-4 border border-warm-200 rounded-md bg-white text-[15px] text-ink placeholder:text-ink-soft focus:outline-none focus:border-ink"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-ink text-white rounded-md text-[15px] font-semibold hover:bg-brand transition-colors"
            >
              Get my gap report <span>→</span>
            </button>
          </form>

          <p className="mt-5 font-mono text-[11px] text-ink-soft uppercase tracking-[0.08em]">
            Country · Industry · Consent rate · Estimated traffic loss
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   FINAL URGENCY · 2.8 · close with stakes
   ============================================ */
export function FinalUrgencyV3() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-10">
        <div className="bg-ink text-white rounded-[20px] px-10 md:px-16 py-16 md:py-20 text-center relative overflow-hidden">
          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              right: -120,
              top: -120,
              width: 360,
              height: 360,
              borderRadius: "50%",
              background: "radial-gradient(circle,rgba(181,66,59,0.28),transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              left: -120,
              bottom: -120,
              width: 360,
              height: 360,
              borderRadius: "50%",
              background: "radial-gradient(circle,rgba(45,139,109,0.32),transparent 70%)",
            }}
          />
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55 mb-5 relative">
            The bleed is daily
          </p>
          <h2
            className="text-white font-semibold leading-[1.08] tracking-[-0.03em] mx-auto max-w-[28ch] relative"
            style={{ fontSize: "clamp(30px, 4.2vw, 50px)" }}
          >
            The average eCommerce loses 58% of its data.{" "}
            <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>
              How many more days?
            </em>
          </h2>
          <p className="text-white/75 text-[16.5px] leading-[1.6] mt-7 mb-8 mx-auto max-w-[58ch] relative">
            Every day without SealMetrics means pageviews you don&apos;t see, conversions you can&apos;t attribute, and budget you waste. Consent rates fall every quarter. Direction is unambiguous: less real data, more statistical fiction.
          </p>

          <DualCTA locale="en" variant="dark" className="justify-center" />
          <p className="mt-6 font-mono text-[11px] text-white/55 uppercase tracking-[0.08em] relative">
            14-day free trial · No credit card · 4-minute setup
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   PRICING PLG · 2.7 · annual default, monthly secondary
   ============================================ */
export function PricingPLG() {
  const plans = [
    {
      name: "Growth",
      annualPerMonth: PRICING.growth.annual,
      annualTotal: PRICING.growth.annual * 12,
      monthly: PRICING.growth.monthly,
      events: PRICING.growth.eventsMillions,
      blurb: "For teams that want to see their real data.",
      features: [
        `${PRICING.growth.eventsMillions}M human events / month`,
        "3 domains",
        "Full MCP + BigQuery + API",
        "GA4 side-by-side comparison",
        "Email support",
      ],
      cta: "Start free 14 days",
      href: "https://my.sealmetrics.com/register",
      featured: true,
      type: "register" as const,
    },
    {
      name: "Scale",
      annualPerMonth: PRICING.scale.annual,
      annualTotal: PRICING.scale.annual * 12,
      monthly: PRICING.scale.monthly,
      events: PRICING.scale.eventsMillions,
      blurb: "For serious eCommerce that needs the data to decide.",
      features: [
        `${PRICING.scale.eventsMillions}M human events / month`,
        "10 domains",
        "Everything in Growth",
        "Priority support",
        "Onboarding led by the founder",
      ],
      cta: "Start free 14 days",
      href: "https://my.sealmetrics.com/register",
      featured: false,
      type: "register" as const,
    },
    {
      name: "Enterprise",
      annualPerMonth: null,
      annualTotal: null,
      monthly: null,
      events: null,
      blurb: "For portfolio brands or custom integration needs.",
      features: [
        "Unlimited events",
        "BI & data warehouse integration",
        "SSO, SAML, RBAC, audit logs",
        "99.9% SLA",
        "Dedicated account manager",
      ],
      cta: "Talk to us",
      href: "/demo",
      featured: false,
      type: "demo" as const,
    },
  ];

  return (
    <section id="pricing" className="bg-warm-50 border-t border-warm-100 py-24">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="max-w-[44rem] mx-auto text-center mb-14">
          <span className="eyebrow mb-5 justify-center" style={{ display: "inline-flex" }}>
            Pricing
          </span>
          <h2 className="h-section mt-5 mx-auto text-center">
            Start measuring <em>reality.</em>
          </h2>
          <p className="text-[18px] leading-[1.6] text-ink-soft mt-5">
            Annual billing — two months free vs monthly. Self-serve on Growth and Scale. Enterprise is custom-quoted. Every plan includes the same data architecture: 100% capture, last-click attribution, EU-hosted in Dublin.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 items-stretch">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`rounded-xl p-8 flex flex-col bg-white relative ${
                p.featured ? "border-2 border-brand shadow-[0_8px_32px_-12px_rgba(45,139,109,0.25)]" : "border border-warm-100"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white font-mono text-[10.5px] font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-md">
                  Most popular
                </span>
              )}
              <header className="pb-5 border-b border-warm-100 mb-5">
                <h3 className="text-[24px] font-semibold tracking-[-0.01em] mb-2">{p.name}</h3>
                <p className="text-[14px] text-ink-soft leading-[1.5] mb-5">{p.blurb}</p>

                {p.annualPerMonth !== null ? (
                  <>
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className="font-semibold tracking-[-0.025em] leading-none tabular-nums text-ink"
                        style={{ fontSize: "clamp(36px, 4vw, 44px)" }}
                      >
                        €{p.annualPerMonth.toLocaleString("en-US")}
                      </span>
                      <span className="text-[15px] text-ink-soft">/mo</span>
                      <span className="ml-2 inline-flex items-center bg-brand-soft text-brand-hover font-mono text-[10px] font-bold uppercase tracking-[0.08em] px-2 py-1 rounded">
                        2 mo free
                      </span>
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft mt-2">
                      Billed annually · €{p.annualTotal!.toLocaleString("en-US")}/yr
                    </div>
                    <div className="font-mono text-[10.5px] text-ink-soft mt-1.5 opacity-70">
                      or €{p.monthly!.toLocaleString("en-US")}/mo billed monthly
                    </div>
                    <p className="text-[12px] text-ink-soft mt-3 leading-[1.4]">
                      Less than what you lose in <em className="italic-accent">one day</em> of incomplete data.
                    </p>
                    <p className="text-[12px] font-semibold text-brand mt-2">
                      14-day free trial · No credit card
                    </p>
                  </>
                ) : (
                  <>
                    <div
                      className="font-semibold tracking-[-0.025em] leading-none tabular-nums text-ink"
                      style={{ fontSize: "clamp(36px, 4vw, 44px)" }}
                    >
                      Custom
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft mt-2">
                      Annual or custom terms
                    </div>
                  </>
                )}
              </header>

              <ul className="flex flex-col gap-2 mb-7 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="relative pl-4 text-[14.5px] leading-[1.55] text-ink">
                    <span className="absolute left-0 text-ink-soft">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              {p.type === "register" ? (
                <a
                  href={p.href}
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-md text-[14.5px] font-semibold no-underline w-full transition-colors ${
                    p.featured
                      ? "bg-ink text-white hover:bg-brand"
                      : "border border-warm-200 text-ink hover:bg-warm-50"
                  }`}
                >
                  {p.cta} →
                </a>
              ) : (
                <Link
                  href={p.href}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md text-[14.5px] font-semibold no-underline w-full transition-colors border border-warm-200 text-ink hover:bg-warm-50"
                >
                  {p.cta} →
                </Link>
              )}

              {p.featured && (
                <p className="text-[12px] text-ink-soft italic mt-5 leading-[1.5] px-1">
                  &ldquo;Recovered 35% of bookings without attribution.&rdquo;{" "}
                  <span className="not-italic font-semibold text-ink">— Palladium Hotel Group</span>
                </p>
              )}
            </article>
          ))}
        </div>

        <p className="mt-10 p-6 bg-white border border-warm-100 rounded-xl text-center max-w-[48rem] mx-auto text-[14.5px] leading-[1.65] text-ink-soft">
          For reference: <b className="text-ink font-semibold">GA360 starts at $150,000/year</b>. <b className="text-ink font-semibold">Adobe Analytics starts at $100,000/year</b>. SealMetrics gives you enterprise-grade data without the enterprise contract.
        </p>
      </div>
    </section>
  );
}

/* ============================================
   CONNECTORS · 2.4b · direct integrations
   ============================================ */
const CONNECTORS: { name: string; src?: string; tag: "ecommerce" | "data" }[] = [
  { name: "Shopify", src: "/logos/brands/shopify.svg", tag: "ecommerce" },
  { name: "WordPress", src: "/logos/brands/wordpress.svg", tag: "ecommerce" },
  { name: "WooCommerce", src: "/logos/brands/woocommerce.svg", tag: "ecommerce" },
  { name: "Magento", src: "/logos/brands/magento.svg", tag: "ecommerce" },
  { name: "PrestaShop", src: "/logos/brands/prestashop.svg", tag: "ecommerce" },
  { name: "BigCommerce", tag: "ecommerce" },
  { name: "BigQuery", src: "/logos/brands/bigquery.svg", tag: "data" },
  { name: "Looker Studio", tag: "data" },
];

export function Connectors() {
  return (
    <section className="bg-white border-t border-warm-100 py-20">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end mb-10">
          <div>
            <span className="eyebrow mb-5">Direct connectors</span>
            <h2 className="h-section mt-5">
              Plugs into the stack you already run. <em>One-click integrations.</em>
            </h2>
          </div>
          <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
            Native connectors for the eCommerce platforms, BI tools and dashboards your team uses every day. No middleware. No custom engineering. No data team required.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CONNECTORS.map((c) => (
            <div
              key={c.name}
              className="bg-warm-50 border border-warm-100 rounded-xl p-6 flex flex-col items-center justify-center gap-3 min-h-[120px] transition-all hover:-translate-y-0.5 hover:border-rule-2"
            >
              {c.src ? (
                <Picture
                  src={c.src}
                  alt={c.name}
                  width={140}
                  height={36}
                  className="object-contain"
                  style={{ height: 36, maxWidth: 150 }}
                />
              ) : (
                <span
                  className="font-semibold text-ink tracking-[-0.015em] text-center"
                  style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}
                >
                  {c.name}
                </span>
              )}
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft font-semibold">
                {c.tag === "ecommerce" ? "eCommerce" : "Data & BI"}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-[12px] text-ink-soft uppercase tracking-[0.08em]">
          Need another integration? <Link href="/integrations" className="text-ink border-b border-warm-200 hover:border-ink no-underline">See full list of integrations</Link>
        </p>
      </div>
    </section>
  );
}
