import Link from "next/link";
import { DualCTA } from "@/components/homepage/DualCTA";
import { HeroDashboard } from "@/components/sections/v3/HeroDashboard";

/* ============================================================
   Homepage sections — benefit-led home built around three messages:
   1. Set up in ~1 minute (from your AI assistant)
   2. Real time — decide during your Promo Days, not the day after
   3. LENS AI — unblock growth, mitigate risk, reduce cost
   Rendered by src/app/(en)/page.tsx (and /preview/home-power-d).
   ============================================================ */

/* --- Hero --------------------------------------------------- */
export function HeroD() {
  return (
    <section data-hero className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-0">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center pb-16">
        <div className="inline-flex items-center gap-3 bg-white border border-warm-100 rounded-full px-4 py-1.5 text-[13px] text-ink-2 mb-10">
          <span className="bg-warm-100 text-ink px-2.5 py-1 rounded text-[10px] font-semibold font-mono tracking-[0.08em] uppercase">
            Set up in ~1 min
          </span>
          <a href="#agentic-setup" className="text-ink border-b border-warm-200 hover:border-ink">
            Provisioned by your AI assistant — no sales call
          </a>
        </div>

        <h1 className="h-display mx-auto">
          Optimize real-time ROAS with <em className="italic-accent">private AI.</em>
        </h1>

        <p
          className="text-ink-soft mt-8 mx-auto max-w-[64ch] leading-[1.55]"
          style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
        >
          Set up from your AI assistant in about a minute. Watch your Promo Days unfold live while
          LENS private AI surfaces the growth, the risks and the wasted spend — with time still on
          the clock to act.
        </p>

        <DualCTA locale="en" className="justify-center mt-7" />

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft">
          {["~1 min setup", "Real-time dashboards", "Growth · risk · cost", "100% consentless data"].map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <HeroDashboard />
      </div>
    </section>
  );
}

/* --- Consentless Analytics (data foundation → Real ROAS) ---- */
export function ConsentlessAnalytics() {
  return (
    <section className="py-28 bg-white border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16 items-center">
        <div>
          <span className="eyebrow mb-5">Consentless Analytics</span>
          <h2 className="h-section mt-5">
            Privacy-first analytics, the complete data behind your <em>real ROAS.</em>
          </h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-ink-soft max-w-[56ch]">
            <Link href="/consentless-analytics" className="text-brand font-medium border-b border-brand/30 hover:border-brand">
              Consentless analytics
            </Link>{" "}
            measures 100% of your sales without a consent banner — legally. GDPR by architecture,
            privacy-first everywhere you sell, zero personal data stored. No cookies, no consent
            wall, no 40–60% blind spot.
          </p>
          <p className="mt-4 text-[17px] leading-[1.6] text-ink-soft max-w-[56ch]">
            That&rsquo;s why your ROAS is finally <b className="text-ink font-semibold">real</b>: every
            conversion counted, so the channels that actually work stop hiding inside
            &ldquo;direct&rdquo; and unconsented traffic.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft">
            {["GDPR by architecture", "ePrivacy", "Privacy-first worldwide", "Zero personal data"].map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Real ROAS panel */}
        <div className="bg-warm-white border border-warm-100 rounded-2xl p-8 md:p-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft mb-6">
            Same campaign · same spend
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-baseline justify-between gap-4 pb-5 border-b border-warm-100">
              <span className="text-[14px] text-ink-soft leading-[1.4]">
                ROAS you see today<br />
                <span className="text-[12px] text-ink-mute">consent-gated analytics</span>
              </span>
              <span className="font-mono text-[30px] font-semibold text-ink-mute tracking-[-0.02em]">2.4×</span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-[14px] text-ink leading-[1.4] font-medium">
                Real ROAS<br />
                <span className="text-[12px] text-brand font-mono">100% of sales measured</span>
              </span>
              <span className="font-mono text-[40px] font-semibold text-brand tracking-[-0.03em]">4.1×</span>
            </div>
          </div>
          <div className="mt-7 pt-6 border-t border-warm-100 text-[13px] leading-[1.55] text-ink-soft">
            You weren&rsquo;t under-performing — you were under-measuring. The budget you&rsquo;d have
            cut was your best-converting channel.
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Message 2: Real-time Promo Days ------------------------ */
export function PromoDaysRealTime() {
  return (
    <section className="py-28 bg-white border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16 items-center">
        <div>
          <span className="eyebrow mb-5">Real time</span>
          <h2 className="h-section mt-5">
            Know how your Promo Days are going <em>while they happen.</em>
          </h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-ink-soft max-w-[56ch]">
            Launch a campaign at 9 AM and see what it&rsquo;s actually doing by noon. When a Promo
            Day underperforms, you fix it the same afternoon — not tomorrow morning, when the budget
            is already spent and the day is gone.
          </p>
          <ul className="mt-7 flex flex-col gap-3 text-[15.5px] leading-[1.5] text-ink-2">
            <li className="flex gap-3">
              <span className="text-brand font-semibold shrink-0">—</span>
              Every dashboard live — revenue, channels, campaigns, products
            </li>
            <li className="flex gap-3">
              <span className="text-brand font-semibold shrink-0">—</span>
              Spot a winning or failing campaign within hours of launch
            </li>
            <li className="flex gap-3">
              <span className="text-brand font-semibold shrink-0">—</span>
              Built for peak load — Promo Days, sales, Black Friday, viral spikes
            </li>
          </ul>
        </div>

        {/* Promo Day ticker */}
        <div className="bg-warm-white border border-warm-100 rounded-2xl p-8 md:p-10">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
              Promo Day · 13:00 · 4h after launch
            </span>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-brand font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              Live
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-7">
            {[
              { label: "Revenue so far", value: "€96,204", delta: "on pace vs last Promo Day", up: true },
              { label: "Best campaign", value: "PMax_Catalog", delta: "€31,540 · scale it now", up: true },
              { label: "Underperformer", value: "DemandGen", delta: "9,230 clicks · 2 sales", up: false },
              { label: "Conversion rate", value: "1.10%", delta: "+0.3 pts since 11:00", up: true },
            ].map((kpi) => (
              <div key={kpi.label}>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-mute mb-1.5">
                  {kpi.label}
                </div>
                <div className="text-[24px] font-semibold text-ink tracking-[-0.02em] font-mono">
                  {kpi.value}
                </div>
                <div className={`text-[12.5px] font-medium mt-1 ${kpi.up ? "text-brand" : "text-red-alert"}`}>
                  {kpi.delta}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-warm-100 text-[13px] leading-[1.5] text-ink-soft">
            Decision at 13:00: kill DemandGen, move budget to PMax_Catalog. Not a post-mortem
            tomorrow — a fix today.
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Message 3: Growth / Risk / Cost (LENS, dark slab) ------ */
const PILLARS = [
  {
    tag: "Growth",
    title: "Unblock growth opportunities",
    q: "Which products leak revenue between add-to-cart and checkout?",
    a: "77% of carts don't convert. The biggest leak is premium e-bikes — add a financing prompt on the product page.",
  },
  {
    tag: "Risk",
    title: "Mitigate risks early",
    q: "What dropped overnight that I haven't noticed yet?",
    a: "Returning premium buyers fell 84% this week. Likely a stock-out — verify before the weekend.",
    featured: true,
  },
  {
    tag: "Cost",
    title: "Reduce wasted spend",
    q: "Where am I burning ad budget?",
    a: "DemandGen: 9,230 clicks, 2 sales. Pausing it and reallocating to PMax_Catalog recovers the spend.",
  },
];

export function GrowthRiskCost() {
  return (
    <section className="section-dark bg-ink py-28 border-t border-warm-100 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          right: -160, top: -160, width: 520, height: 520, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,139,109,0.3), transparent 70%)",
        }}
      />
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 relative">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "#E8B84B" }}>
          LENS AI
        </span>
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end mt-5 mb-14">
          <h2 className="h-section">
            Unblock growth. Mitigate risk. <em>Cut cost.</em>
          </h2>
          <p className="text-[17px] leading-[1.6] text-white/70 max-w-[54ch]">
            LENS reads 100% of your data and answers in plain language — the three questions that
            actually move the number. Ask it, or let it surface the answer before you think to ask.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {PILLARS.map((p) => (
            <article
              key={p.tag}
              className={`rounded-2xl p-8 flex flex-col min-h-[320px] border ${
                p.featured ? "bg-white/[0.07] border-white/20" : "bg-white/[0.03] border-white/10"
              }`}
            >
              <span
                className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: p.featured ? "#E8B84B" : "rgba(255,255,255,0.5)" }}
              >
                {p.tag}
              </span>
              <h3 className="text-[20px] font-semibold text-white mt-3 mb-5 leading-[1.25]">
                {p.title}
              </h3>
              <div className="self-start max-w-[95%] bg-white/10 text-white px-4 py-3 rounded-[14px] rounded-bl-[4px] text-[13px] leading-[1.5] mb-2.5">
                {p.q}
              </div>
              <div
                className="self-start max-w-[97%] px-4 py-3 rounded-[14px] rounded-bl-[4px] text-[13px] leading-[1.55] font-medium mt-auto"
                style={{ background: "#E8B84B", color: "#0E0E0C" }}
              >
                {p.a}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://lens-lite.sealmetrics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-ink px-7 py-3.5 rounded-md text-[15px] font-semibold no-underline hover:bg-warm-50 transition"
          >
            Ask LENS on demo data →
          </a>
        </div>
      </div>
    </section>
  );
}

/* --- Small framing lead-in for the setup block -------------- */
export function OneMinuteLede() {
  return (
    <section className="pt-24 pb-4 bg-white border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end">
          <div>
            <span className="eyebrow mb-5">One minute to live</span>
            <h2 className="h-section mt-5">
              The fastest analytics you&rsquo;ll ever <em>install.</em>
            </h2>
          </div>
          <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
            No onboarding project, no tag manager maze. Your AI assistant provisions the account and
            wires the pixel — you paste one line and data starts flowing.{" "}
            <Link href="#agentic-setup" className="text-brand font-medium border-b border-brand/30 hover:border-brand">
              See the exact steps
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

/* --- Testimonial quote (Palladium) -------------------------- */
export function QuoteBlock() {
  return (
    <section className="py-24 bg-warm-white border-t border-warm-100">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-10">
        <blockquote className="border-l-2 pl-7 md:pl-10" style={{ borderColor: "#2E5C8A" }}>
          <p className="text-[24px] md:text-[32px] font-medium text-ink leading-[1.3] tracking-[-0.02em] max-w-[26ch]">
            The data SealMetrics delivers is agnostic, unbiased and neutral. <em className="italic-accent">There&rsquo;s no black box.</em>
          </p>
          <footer className="mt-7 flex items-center gap-3.5">
            <span className="w-11 h-11 rounded-full bg-ink text-white font-semibold text-[14px] flex items-center justify-center shrink-0">TA</span>
            <span className="text-[14px] leading-[1.4]">
              <b className="text-ink font-semibold block">Toni Andújar</b>
              <span className="text-ink-soft">Digital &amp; Direct Sales Director, Palladium Hotel Group</span>
            </span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
