import Image from "next/image";
import Link from "next/link";
import { HeroDashboard } from "./HeroDashboard";

/* ============================================
   HERO · V3 centered with dashboard
   ============================================ */
export function HeroV3() {
  return (
    <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-0">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center pb-16">
        <div className="inline-flex items-center gap-3 bg-white border border-warm-100 rounded-full px-4 py-1.5 text-[13px] text-ink-2 mb-10">
          <span className="bg-warm-100 text-ink px-2.5 py-1 rounded text-[10px] font-semibold font-mono tracking-[0.08em] uppercase">
            New · Case study
          </span>
          <a href="#featured-case" className="text-ink border-b border-warm-200 hover:border-ink">
            European hotel group: 50% of traffic was invisible →
          </a>
        </div>

        <h1 className="h-display mx-auto">
          See the 50% of your traffic <em>GA4 doesn&apos;t.</em>
        </h1>

        <p
          className="text-ink-soft mt-8 mx-auto max-w-[60ch] leading-[1.55]"
          style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
        >
          SealMetrics is the neutral source of truth brand, finance and agencies sign against — captured on 100% of your visitors, not a sampled estimate.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-9">
          <Link
            href="#audit"
            className="inline-flex items-center gap-2 px-7 py-4 bg-ink text-white rounded-md text-[15px] font-semibold no-underline hover:bg-brand transition-colors"
          >
            Get a free measurement audit <span>→</span>
          </Link>
          <Link
            href="#how"
            className="inline-flex items-center gap-2 px-7 py-4 border border-warm-200 text-ink rounded-md text-[15px] font-semibold no-underline hover:bg-warm-50 transition-colors"
          >
            See how it works
          </Link>
        </div>

        <p className="mt-4 font-mono text-[12px] text-ink-soft uppercase tracking-[0.06em]">
          No install required · No commitment
        </p>
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
  { src: "/logos/clients/palladium-dark.svg", alt: "Palladium Hotel Group", h: 48 },
  { src: "/logos/clients/dreamplace.svg", alt: "Dreamplace Hotels", h: 54 },
  { src: "/logos/clients/acciona.svg", alt: "Acciona", h: 44 },
  { src: "/logos/clients/crocs.svg", alt: "Crocs", h: 38 },
  { src: "/logos/clients/desigual-dark.svg", alt: "Desigual", h: 38 },
  // Bottom row — secondary
  { src: "/logos/clients/unicef.svg", alt: "UNICEF", h: 36 },
  { src: "/logos/clients/casabatllo.png", alt: "Casa Batlló", h: 44 },
  { src: "/logos/clients/juguettos.png", alt: "Juguettos", h: 38 },
  { src: "/logos/clients/3cat.svg", alt: "3Cat.cat", h: 36 },
  { src: "/logos/clients/fundacion-bankinter.png", alt: "Fundación Bankinter", h: 80 },
];

export function LogosStrip() {
  return (
    <section className="py-14 bg-warm-white border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="flex justify-between items-baseline flex-wrap gap-4 mb-9">
          <h3
            className="font-semibold text-ink tracking-[-0.02em] leading-[1.2]"
            style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
          >
            Single <em className="italic-accent">source of truth</em> for European brands
          </h3>
          <p className="font-mono text-[12px] text-ink-soft uppercase tracking-[0.1em] font-semibold">
            Teams with <b className="text-ink">€5M+</b> in annual paid media
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
          Joining <em className="italic-accent">hotel groups, DTC brands and media companies</em> — 2,000+ European teams measuring what actually happened.
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
            <Image
              src={logo.src}
              alt={logo.alt}
              width={isTop ? 200 : 200}
              height={logo.h}
              className="object-contain w-auto"
              style={{ height: `${logo.h}px`, maxWidth: "220px" }}
              unoptimized
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
          href="#audit"
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
   COMPARE · Palladium finding + Patterns
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
            When a European hotel group compared SealMetrics against their full stack — Meta Pixel, Google Ads, Analytics, their CRM — they discovered roughly half of their real traffic was invisible. Not in &ldquo;direct&rdquo;. Not mis-tagged. Simply not in any report.
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
                50<span className="text-[0.5em] text-ink-soft ml-1 align-top relative top-[0.3em] font-normal">%</span>
              </div>
              <div className="font-mono text-[12px] uppercase tracking-[0.1em] text-ink-soft font-semibold mb-7 mt-1.5">
                of traffic invisible · not measured
              </div>
            </div>
            <p className="text-[17px] text-ink-2 leading-[1.5] max-w-[40ch]">
              Every report — brand, agency, dashboard — is built on the half that survived cookie walls, sampling and platform bias. Every budget decision, built on a fraction of what actually happened.
            </p>
            <div className="mt-6 pt-5 border-t border-warm-100 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft font-semibold">
              Source · Hotel group internal audit · 2026
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
                of traffic observed · 25% more bookings visible
              </div>
            </div>
            <p className="text-[17px] text-white/85 leading-[1.5] max-w-[40ch] relative">
              <b className="text-amber font-semibold">&ldquo;The data is agnostic, unbiased, neutral. There&apos;s no black box.&rdquo;</b>{" "}
              The number every stakeholder signs against — because it has no ad inventory to sell and nothing to inflate.
            </p>
            <div className="mt-6 pt-5 border-t border-white/15 font-mono text-[11px] uppercase tracking-[0.08em] text-white/50 font-semibold relative">
              Quote · Marketing team · Hotel group
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
              { n: "30–70%", em: "70", l: "More traffic observed vs GA", src: "Cross-industry average" },
              { n: "15–20%", em: "20", l: "Closer to CRM in attributed sales", src: "Hotel chain · Spain" },
              { n: "4×", em: "4×", l: "More conversions tracked", src: "Hotels, fashion" },
              { n: "50%", em: "50", l: "Traffic invisible in typical stacks", src: "Hotel group · 2026 audit" },
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
    <section id="featured-case" className="py-28 bg-warm-white border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-14">
          <div>
            <span className="eyebrow mb-5">Featured case study</span>
            <h2 className="h-section mt-5">
              Brand, agencies and departments — <em>all signing the same number.</em>
            </h2>
          </div>
          <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
            A European hotel group chose SealMetrics for one reason: neutrality. Four tools reported four different truths. SealMetrics became the one number the brand, the paid media agency, the creative agency and internal analytics all accept as valid.
          </p>
        </div>

        <div className="bg-ink text-white rounded-[20px] p-10 md:p-[60px] grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-14 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              left: -80,
              bottom: -80,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "radial-gradient(circle,rgba(45,139,109,0.4),transparent 70%)",
            }}
          />
          <div className="relative">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand-soft font-semibold mb-7 inline-block">
              Case study · Hotels · eCommerce
            </span>
            <div className="text-brand text-[72px] leading-[0.5] h-8 font-semibold">&ldquo;</div>
            <blockquote
              className="mt-5 text-white font-medium leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(24px, 2.6vw, 34px)" }}
            >
              The data SealMetrics delivers is{" "}
              <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>
                agnostic, unbiased and neutral.
              </em>{" "}
              There&apos;s no black box.
            </blockquote>
            <div className="flex gap-3.5 mt-7 pt-6 border-t border-white/15 items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-ink text-[14px]"
                style={{ background: "linear-gradient(135deg,#2D8B6D,#E8B84B)" }}
              >
                H
              </div>
              <div>
                <b className="block text-[14px] font-semibold">Marketing team · European hotel group</b>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/60 font-semibold">
                  April 2026 · internal audit
                </span>
              </div>
            </div>
            <Link
              href="/case-studies/hotel-group"
              className="mt-7 inline-flex items-center gap-2 bg-amber text-ink px-6 py-3 rounded-md text-[14px] font-semibold no-underline hover:brightness-105"
              style={{ backgroundColor: "#E8B84B" }}
            >
              Read the full case study →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2.5 relative">
            {[
              { l: "Invisible traffic · before", v: "50", u: "%", hl: false, note: "Of traffic wasn't measured. Not mis-attributed — not there at all." },
              { l: "Invisible bookings · before", v: "25", u: "%", hl: true, note: "Real CRM bookings that didn't appear in any marketing report." },
              { l: "Sources of truth · after", v: "1", u: "", hl: false, note: "Number all players — brand, departments and external agencies — accept as the reference.", span: true },
            ].map((s, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl border flex flex-col gap-1.5 min-h-[150px] justify-between ${
                  s.hl ? "bg-brand border-brand" : "bg-white/5 border-white/12"
                } ${s.span ? "col-span-2" : ""}`}
              >
                <div
                  className={`font-mono text-[10px] uppercase tracking-[0.12em] font-semibold ${
                    s.hl ? "text-white/85" : "text-white/55"
                  }`}
                >
                  {s.l}
                </div>
                <div>
                  <div
                    className="font-semibold tracking-[-0.035em] text-white leading-none tabular-nums"
                    style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
                  >
                    {s.v}
                    {s.u && (
                      <span
                        className={`italic font-medium ${s.hl ? "text-white" : ""}`}
                        style={{ color: s.hl ? "#fff" : "#E8B84B", fontStyle: "italic" }}
                      >
                        {s.u}
                      </span>
                    )}
                  </div>
                  <div className={`text-[12px] leading-[1.45] mt-2 ${s.hl ? "text-white/90" : "text-white/60"}`}>
                    {s.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dreamplace + Incapto cards */}
        <div className="grid md:grid-cols-2 gap-5 mt-7">
          <CaseCard
            client="Hotel chain · Spain"
            sector="Hotels · eCommerce"
            quote={
              <>
                It&apos;s no longer a tool that sits next to the process. It&apos;s{" "}
                <em className="italic-accent">the tool that gives us the real data</em> — and the one we make decisions with.
              </>
            }
            cite="Head of eCommerce · Hotel chain"
            stats={[
              { n: "+30%", l: "More traffic registered vs GA4 after closing the consent gap" },
              { n: "15–20%", l: "Closer to CRM in attributed sales" },
            ]}
          />
          <CaseCard
            client="eCommerce DTC · Coffee"
            sector="DTC eCommerce · Spain"
            quote={
              <>
                We&apos;ve used SealMetrics as{" "}
                <em className="italic-accent">&ldquo;OK, we believe this data.&rdquo;</em> It&apos;s now our single source of truth.
              </>
            }
            cite="Founder & CEO · DTC brand"
            stats={[
              { n: "30–40%", l: "Under-reported by GA4 before switching" },
              { n: "30 days", l: "Parallel test to reach single source of truth" },
            ]}
          />
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
