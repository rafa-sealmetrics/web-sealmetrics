"use client";

import { useMemo, useState } from "react";
import { DualCTA } from "./DualCTA";

const fmtNum = (n: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.round(n));
const fmtEur = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
const fmtPct = (n: number, d = 2) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
  }).format(n) + "%";

export function BlindnessCalculator() {
  const [visits, setVisits] = useState(1_000_000);
  const [ticket, setTicket] = useState(87);
  const [crPct, setCrPct] = useState(0.8);
  const [planPrice, setPlanPrice] = useState(499);

  const calc = useMemo(() => {
    const ga4Visits = Math.max(0, visits);
    const ga4Orders = ga4Visits * (Math.max(0, crPct) / 100);
    const ga4Revenue = ga4Orders * Math.max(0, ticket);

    const sealVisits = ga4Visits * 1.55;
    const sealOrders = ga4Orders * 1.25;
    const sealRevenue = sealOrders * Math.max(0, ticket);

    const dVisits = sealVisits - ga4Visits;
    const dOrders = sealOrders - ga4Orders;
    const dRevenue = sealRevenue - ga4Revenue;

    const realCR = sealVisits > 0 ? (sealOrders / sealVisits) * 100 : 0;
    const dCR = realCR - crPct;
    const blindPct = sealRevenue > 0 ? (dRevenue / sealRevenue) * 100 : 0;

    const ordersToBreakEven = ticket > 0 ? planPrice / ticket : 0;
    const paybackPct = dOrders > 0 ? (ordersToBreakEven / dOrders) * 100 : 0;
    const monthlyROI = planPrice > 0 ? dRevenue / planPrice : 0;
    const ordersPerDay = dOrders / 30;
    const daysToPayback = ordersPerDay > 0 ? ordersToBreakEven / ordersPerDay : 0;

    return {
      ga4Visits, ga4Orders, ga4Revenue,
      sealVisits, sealOrders, sealRevenue,
      dVisits, dOrders, dRevenue,
      realCR, dCR, blindPct,
      ordersToBreakEven, paybackPct, monthlyROI, ordersPerDay, daysToPayback,
    };
  }, [visits, ticket, crPct, planPrice]);

  return (
    <section id="ga4-gap" className="bg-warm-50 border-t border-warm-100 py-24">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        {/* Editorial masthead */}
        <header className="border-t-[3px] border-ink border-b border-ink py-3 flex justify-between items-baseline font-mono text-[11px] uppercase tracking-[0.12em]">
          <span className="font-bold text-ink">SealMetrics · Consentless Analytics</span>
          <span className="text-ink-soft hidden sm:inline">Vol. 01 — The Blindness Calculator</span>
        </header>

        {/* Hero */}
        <div className="py-12 md:py-14 border-b border-warm-100">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red-alert font-semibold mb-4 flex items-center gap-3">
            <span className="inline-block w-7 h-px bg-red-alert" />
            A diagnostic for CMOs and founders
          </div>
          <h2
            className="font-semibold text-ink leading-[1.02] tracking-[-0.025em]"
            style={{ fontSize: "clamp(34px, 5.4vw, 64px)" }}
          >
            Your GA4 is{" "}
            <span className="relative inline-block">
              lying
              <span
                aria-hidden
                className="absolute left-[-2%] right-[-2%]"
                style={{
                  top: "52%",
                  height: 4,
                  background: "#B5423B",
                  transform: "rotate(-2deg)",
                }}
              />
            </span>
            <br />
            — and it&apos;s costing you <em className="italic-accent">real money.</em>
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-[1.55] text-ink-2 max-w-[680px]">
            Enter your <b className="font-semibold text-ink">monthly</b> numbers from GA4. We&apos;ll show you how many visits, orders and revenue you&apos;re missing every month — and why your conversion rate is, in reality, lower than you think.
          </p>
        </div>

        {/* Calculator grid */}
        <div
          className="mt-12 grid md:grid-cols-[360px_1fr] border border-ink bg-warm-white"
          style={{ boxShadow: "8px 8px 0 #0E0E0C" }}
        >
          {/* INPUTS */}
          <aside className="bg-ink text-warm-white p-8 md:p-9 relative">
            <span className="absolute top-3 right-4 font-mono text-[10px] tracking-[0.2em] text-white/40">
              INPUT
            </span>
            <h3
              className="font-semibold leading-[1.1] tracking-[-0.01em] text-white"
              style={{ fontSize: "26px" }}
            >
              Your <em className="italic font-medium" style={{ color: "#E8B84B" }}>current</em> numbers
            </h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/55 mt-1.5 mb-8">
              Monthly figures from GA4
            </p>

            <CalcField
              label="Monthly visits (GA4)"
              hint="What GA4 reports today, after the consent banner."
              value={visits}
              onChange={setVisits}
              suffix="/ month"
              step={1000}
            />
            <CalcField
              label="Average order value (AOV)"
              hint="Average revenue per order."
              value={ticket}
              onChange={setTicket}
              prefix="€"
              step={1}
            />
            <CalcField
              label="Observed conversion rate"
              hint="The CR GA4 reports. Spoiler: it's inflated."
              value={crPct}
              onChange={setCrPct}
              suffix="%"
              step={0.01}
            />

            <div className="mt-9 pt-6 border-t border-dashed border-white/20">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55 mb-3.5">
                SealMetrics model
              </div>
              {[
                { k: "Real visits vs GA4", v: "+55%" },
                { k: "Real conversions vs GA4", v: "+25%" },
                { k: "Consentless capture", v: "100% GDPR" },
              ].map((row, i, arr) => (
                <div
                  key={row.k}
                  className={`flex justify-between items-baseline py-2.5 text-[13px] ${
                    i < arr.length - 1 ? "border-b border-dotted border-white/15" : ""
                  }`}
                >
                  <span className="text-white/70">{row.k}</span>
                  <span className="font-mono font-bold text-amber">{row.v}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* OUTPUT */}
          <section className="p-8 md:p-10 bg-warm-white relative">
            <span className="absolute top-3 right-6 font-mono text-[10px] tracking-[0.2em] text-ink/40">
              THE BLINDNESS CALCULATION
            </span>

            <div className="flex items-baseline justify-between mb-7 pb-5 border-b-2 border-ink">
              <h3
                className="font-semibold text-ink leading-[1.1] tracking-[-0.01em]"
                style={{ fontSize: "28px" }}
              >
                The cost of your <em className="italic-accent">blindness</em>
              </h3>
              <span className="font-mono text-[11px] tracking-[0.1em] text-ink-soft hidden sm:inline">
                live update
              </span>
            </div>

            {/* Comparison table */}
            <div className="overflow-x-auto -mx-2">
              <table className="w-full border-collapse mb-7">
                <thead>
                  <tr>
                    <th className="text-left font-mono font-medium text-[10px] uppercase tracking-[0.16em] text-ink-soft pb-2.5 px-3 border-b border-ink">
                      Metric (monthly)
                    </th>
                    <th className="text-right font-mono font-medium text-[10px] uppercase tracking-[0.16em] text-ink-soft pb-2.5 px-3 border-b border-ink">
                      GA4 (biased)
                    </th>
                    <th className="text-right font-mono font-medium text-[10px] uppercase tracking-[0.16em] text-red-alert pb-2.5 px-3 border-b border-ink">
                      SealMetrics (real)
                    </th>
                    <th className="text-right font-mono font-medium text-[10px] uppercase tracking-[0.16em] text-brand pb-2.5 px-3 border-b border-ink">
                      Blind spot
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <CalcRow
                    label="Monthly visits"
                    ga4={fmtNum(calc.ga4Visits)}
                    seal={fmtNum(calc.sealVisits)}
                    diff={"+" + fmtNum(calc.dVisits)}
                  />
                  <CalcRow
                    label="Total orders"
                    ga4={fmtNum(calc.ga4Orders)}
                    seal={fmtNum(calc.sealOrders)}
                    diff={"+" + fmtNum(calc.dOrders)}
                  />
                  <CalcRow
                    label="Monthly revenue"
                    ga4={fmtEur(calc.ga4Revenue)}
                    seal={fmtEur(calc.sealRevenue)}
                    diff={"+" + fmtEur(calc.dRevenue)}
                    headline
                  />
                </tbody>
              </table>
            </div>

            {/* CR truth */}
            <div className="bg-warm-100 border border-warm-200 px-5 md:px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-2 leading-[1.4]">
                Conversion Rate
                <br />
                <span className="text-ink-soft">— the inconvenient truth —</span>
              </div>
              <div className="flex flex-wrap gap-x-7 gap-y-3 items-baseline">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-soft">
                    GA4 tells you
                  </div>
                  <div
                    className="font-semibold text-[20px] tabular-nums text-ink-soft"
                    style={{
                      textDecoration: "line-through",
                      textDecorationColor: "#B5423B",
                      textDecorationThickness: "1.5px",
                    }}
                  >
                    {fmtPct(crPct)}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-soft">
                    Reality
                  </div>
                  <div className="font-semibold text-[20px] tabular-nums text-red-alert">
                    {fmtPct(calc.realCR)}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-soft">
                    Delta
                  </div>
                  <div
                    className="font-semibold text-[20px] tabular-nums"
                    style={{ color: "#B5423B" }}
                  >
                    {(calc.dCR >= 0 ? "+" : "−") + fmtPct(Math.abs(calc.dCR))}
                  </div>
                </div>
              </div>
            </div>

            {/* Verdict */}
            <div
              className="mt-3 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-center px-6 py-6 border border-l-[6px]"
              style={{
                background: "rgba(232, 184, 75, 0.18)",
                borderColor: "#E8B84B",
                borderLeftColor: "#B5423B",
              }}
            >
              <div
                className="font-semibold tabular-nums leading-none text-red-alert"
                style={{ fontSize: "clamp(48px, 6vw, 72px)", letterSpacing: "-0.03em" }}
              >
                {new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(calc.blindPct)}
                <span className="text-[0.5em] font-medium ml-1">%</span>
              </div>
              <div className="text-ink leading-[1.45]">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-red-alert font-semibold mb-1.5">
                  The verdict
                </div>
                <p className="text-[16.5px]">
                  You&apos;re operating with a blind spot of{" "}
                  <b className="font-semibold">{fmtEur(calc.dRevenue)}</b> in monthly revenue and{" "}
                  <b className="font-semibold">{fmtNum(calc.dOrders)}</b> orders you can&apos;t see.
                </p>
                <p className="text-[14px] text-ink-2 mt-1.5">
                  That&apos;s <b className="font-semibold text-ink">{fmtEur(calc.dRevenue * 12)}</b> a year you don&apos;t even know exists.
                </p>
              </div>
            </div>

            {/* Conversion block — CTA + email capture */}
            <CalcConversionBlock blindPct={calc.blindPct} dRevenue={calc.dRevenue} />

            {/* Footnote */}
            <div className="mt-9 pt-5 border-t border-warm-100 grid sm:grid-cols-2 gap-7 font-mono text-[11px] leading-[1.6] text-ink-soft">
              <div>
                <strong className="block text-ink uppercase tracking-[0.08em] text-[10px] mb-1.5">
                  Why this happens
                </strong>
                GA4 depends on the consent banner. Between 35% and 55% of European users reject or ignore cookies. Those users buy — but you never see them.
              </div>
              <div>
                <strong className="block text-ink uppercase tracking-[0.08em] text-[10px] mb-1.5">
                  What SealMetrics does
                </strong>
                Captures 100% of traffic with no cookies, no consent banner, fully GDPR-compliant. You finally see what GA4 leaves behind.
              </div>
            </div>
          </section>
        </div>

        {/* Payback block */}
        <div
          className="section-dark mt-12 border border-ink bg-ink text-warm-white overflow-hidden"
          style={{ boxShadow: "8px 8px 0 #E8B84B" }}
        >
          <div className="flex flex-wrap justify-between items-baseline gap-4 px-7 md:px-9 py-6 border-b border-dashed border-white/20">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold mb-1.5">
                The math gets uncomfortable
              </div>
              <h3
                className="font-semibold leading-[1.1] tracking-[-0.01em] text-white"
                style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}
              >
                How many sales does SealMetrics need to{" "}
                <em className="italic font-medium" style={{ color: "#E8B84B" }}>
                  pay for itself?
                </em>
              </h3>
            </div>
            <div className="flex items-baseline gap-2 bg-white/5 border border-white/15 px-4 py-2.5">
              <label htmlFor="plan-price" className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/65">
                Plan
              </label>
              <span className="font-mono text-[12px] text-white/55">€</span>
              <input
                id="plan-price"
                type="number"
                value={planPrice}
                min={0}
                step={1}
                onChange={(e) => setPlanPrice(parseFloat(e.target.value) || 0)}
                className="bg-transparent border-0 text-white font-semibold text-[22px] w-[90px] text-right tabular-nums outline-none focus:ring-0"
              />
              <span className="font-mono text-[12px] text-white/55">/ mo</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3">
            <PaybackCell
              label="Sales to break even"
              num={
                calc.ordersToBreakEven < 10
                  ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 1, minimumFractionDigits: 1 }).format(calc.ordersToBreakEven)
                  : fmtNum(Math.ceil(calc.ordersToBreakEven))
              }
              suffix="orders / month"
              explain="Recovered orders SealMetrics needs to surface — at your AOV — to fully pay for itself."
              hero
            />
            <PaybackCell
              label="% of the blind spot"
              num={
                calc.paybackPct < 1
                  ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(calc.paybackPct)
                  : new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(calc.paybackPct)
              }
              numSuffix="%"
              suffix="of recovered orders"
              explain="A tiny fraction of the orders you're already missing. The rest is pure upside."
            />
            <PaybackCell
              label="Monthly ROI"
              num={new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.round(calc.monthlyROI))}
              numSuffix="×"
              suffix="return on SealMetrics"
              explain="For every €1 spent on SealMetrics, this is the recovered revenue you gain visibility on."
            />
          </div>

          <div
            className="px-7 md:px-9 py-4 font-mono text-[11.5px] leading-[1.55] tracking-[0.04em] text-warm-white"
            style={{ background: "rgba(232,184,75,0.12)", borderTop: "1px solid rgba(232,184,75,0.3)" }}
          >
            With{" "}
            <strong className="text-amber font-bold">
              {calc.ordersPerDay < 10
                ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(calc.ordersPerDay)
                : fmtNum(Math.round(calc.ordersPerDay))}
            </strong>{" "}
            recovered orders per day, SealMetrics is already paying for itself.{" "}
            <strong className="text-amber font-bold">
              {calc.daysToPayback < 1
                ? "< 1"
                : new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(calc.daysToPayback)}
            </strong>{" "}
            days into the month, you&apos;re in profit.
          </div>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="https://my.sealmetrics.com/register"
            className="inline-flex items-center gap-2 px-7 py-4 bg-ink text-white rounded-md text-[15px] font-semibold no-underline hover:bg-brand transition-colors"
          >
            Stop the bleeding · start free <span>→</span>
          </a>
          <a
            href="/data-loss-calculator"
            className="inline-flex items-center gap-2 px-7 py-4 border border-warm-200 text-ink rounded-md text-[15px] font-semibold no-underline hover:bg-warm-50 transition-colors"
          >
            Run the deep gap audit
          </a>
        </div>
      </div>
    </section>
  );
}

function CalcField({
  label,
  hint,
  value,
  onChange,
  suffix,
  prefix,
  step = 1,
}: {
  label: string;
  hint?: string;
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
  prefix?: string;
  step?: number;
}) {
  return (
    <div className="mb-6">
      <label className="block font-mono text-[11px] tracking-[0.14em] uppercase text-white/85 mb-2">
        {label}
      </label>
      <div className="flex items-baseline border-b border-white/25 py-1.5 focus-within:border-amber transition-colors">
        {prefix && <span className="font-mono text-[12px] tracking-[0.1em] text-white/55 mr-2">{prefix}</span>}
        <input
          type="number"
          value={value}
          min={0}
          step={step}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="bg-transparent border-0 text-white font-semibold text-[28px] md:text-[32px] w-full outline-none tabular-nums"
          style={{ letterSpacing: "-0.01em" }}
        />
        {suffix && (
          <span className="font-mono text-[12px] tracking-[0.1em] text-white/55 ml-2 shrink-0">
            {suffix}
          </span>
        )}
      </div>
      {hint && <div className="text-[12px] text-white/50 mt-1.5 leading-[1.4]">{hint}</div>}
    </div>
  );
}

function CalcRow({
  label,
  ga4,
  seal,
  diff,
  headline = false,
}: {
  label: string;
  ga4: string;
  seal: string;
  diff: string;
  headline?: boolean;
}) {
  if (headline) {
    return (
      <tr>
        <td className="bg-ink text-warm-white/70 px-3 py-5 font-mono uppercase tracking-[0.06em] text-[12px] font-medium">
          {label}
        </td>
        <td
          className="bg-ink text-warm-white/40 px-3 py-5 text-right font-semibold tabular-nums text-[20px]"
          style={{
            textDecoration: "line-through",
            textDecorationColor: "#B5423B",
            textDecorationThickness: "1.5px",
            letterSpacing: "-0.01em",
          }}
        >
          {ga4}
        </td>
        <td
          className="bg-ink text-warm-white px-3 py-5 text-right font-semibold tabular-nums"
          style={{ fontSize: "30px", letterSpacing: "-0.015em" }}
        >
          {seal}
        </td>
        <td
          className="bg-ink px-3 py-5 text-right font-mono font-bold tabular-nums text-[16px]"
          style={{ color: "#4ADE80" }}
        >
          {diff}
        </td>
      </tr>
    );
  }
  return (
    <tr className="border-b border-warm-100 hover:bg-amber/5">
      <td className="px-3 py-3.5 font-mono uppercase tracking-[0.06em] text-[12px] font-medium text-ink-2">
        {label}
      </td>
      <td
        className="px-3 py-3.5 text-right font-semibold tabular-nums text-[18px] text-ink-soft"
        style={{
          textDecoration: "line-through",
          textDecorationColor: "#B5423B",
          textDecorationThickness: "1.5px",
          letterSpacing: "-0.01em",
        }}
      >
        {ga4}
      </td>
      <td
        className="px-3 py-3.5 text-right font-semibold tabular-nums text-[18px] text-ink"
        style={{ letterSpacing: "-0.01em" }}
      >
        {seal}
      </td>
      <td className="px-3 py-3.5 text-right font-mono font-bold tabular-nums text-[14px] text-brand">
        {diff}
      </td>
    </tr>
  );
}

function PaybackCell({
  label,
  num,
  numSuffix,
  suffix,
  explain,
  hero = false,
}: {
  label: string;
  num: string;
  numSuffix?: string;
  suffix: string;
  explain: string;
  hero?: boolean;
}) {
  return (
    <div className="px-7 md:px-9 py-7 border-b md:border-b-0 md:border-r border-dashed border-white/20 last:border-r-0 last:border-b-0">
      <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-white/55 mb-3.5">
        {label}
      </div>
      <div
        className={`font-semibold leading-none tabular-nums mb-2 ${hero ? "text-amber" : "text-white"}`}
        style={{ fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.025em" }}
      >
        {num}
        {numSuffix && (
          <span className="font-medium ml-0.5" style={{ fontSize: "0.5em", opacity: 0.6 }}>
            {numSuffix}
          </span>
        )}
      </div>
      <div className="font-mono text-[12px] tracking-[0.08em] text-white/55 mb-2.5">
        {suffix}
      </div>
      <p className="text-[13px] leading-[1.5] text-white/70 max-w-[280px]">{explain}</p>
    </div>
  );
}

function CalcConversionBlock({ blindPct, dRevenue }: { blindPct: number; dRevenue: number }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const pct = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(blindPct);
  const yearly = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(dRevenue * 12));

  return (
    <div
      className="mt-6 p-7 rounded-xl border"
      style={{
        background: "rgba(45,139,109,0.06)",
        borderColor: "rgba(45,139,109,0.25)",
      }}
    >
      <p className="text-[19px] font-semibold tracking-[-0.015em] text-ink leading-[1.3] mb-2">
        You&apos;re losing <span className="text-red-alert">{pct}%</span> of your data — that&apos;s {yearly}/year you&apos;re not seeing.{" "}
        <em className="italic-accent">Get it back.</em>
      </p>
      <p className="text-[14.5px] leading-[1.55] text-ink-soft mb-5">
        Install SealMetrics in 4 minutes. See every visit, every conversion, every channel — including the 35-55% GA4 hides from you.
      </p>
      <DualCTA locale="en" />

      {/* Email capture */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: connect to lead capture API
          setSubmitted(true);
        }}
        className="mt-5 flex flex-col sm:flex-row gap-2"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          aria-label="Email"
          className="flex-1 px-4 py-2.5 rounded-md border border-warm-200 bg-white text-[14px] text-ink placeholder:text-ink-soft focus:outline-none focus:border-ink"
        />
        <button
          type="submit"
          disabled={submitted}
          className="px-4 py-2.5 bg-ink text-white rounded-md text-[13.5px] font-semibold hover:bg-brand transition-colors disabled:opacity-60"
        >
          {submitted ? "Sent — check your inbox" : "Send me the report"}
        </button>
      </form>
      <p className="text-[11px] text-ink-soft mt-2 font-mono uppercase tracking-[0.06em]">
        We&apos;ll send a personalized analysis. No spam.
      </p>
    </div>
  );
}
