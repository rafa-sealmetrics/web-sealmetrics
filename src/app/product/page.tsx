import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product — SealMetrics",
  description:
    "Cookieless web analytics with full data capture, revenue attribution, and AI-powered anomaly detection. See every visitor, every session, every conversion.",
};

const reports = [
  "Traffic Overview",
  "Acquisition Channels",
  "Page Performance",
  "User Journeys",
  "Conversion Funnels",
  "Revenue Attribution",
  "Campaign Analysis",
  "Real-time Dashboard",
  "Custom Reports",
];

export default function ProductPage() {
  return (
    <>
      {/* Hero — Dark */}
      <section className="section-dark pt-40 pb-28 bg-dark-bg">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-green-muted mb-6">
              Product
            </span>
            <h1 className="headline-hero mb-8">
              Complete analytics built on complete data.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-dark-text-secondary mb-10">
              Nine specialized reports, AI-powered anomaly detection, and
              multi-touch revenue attribution&nbsp;&mdash; all powered by 100%
              data capture, not statistical estimates.
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <Link
                href="/demo"
                className="inline-flex items-center px-7 py-3.5 text-[0.95rem] font-medium text-dark-bg bg-green rounded-[4px] no-underline hover:shadow-[0_0_50px_-5px_rgba(0,255,127,0.4)] transition-shadow"
                style={{ boxShadow: "0 0 40px -10px rgba(0,255,127,0.3)" }}
              >
                Book a Demo
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center px-7 py-3.5 text-[0.95rem] text-dark-text-secondary border border-dark-border rounded-[4px] no-underline hover:border-dark-text hover:text-dark-text transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Data Capture */}
      <section className="section-dark py-28 bg-dark-bg border-t border-dark-border/30">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-green-muted mb-3">
                Data Capture
              </span>
              <h2 className="headline-section mb-5">
                Every visitor. No exceptions.
              </h2>
              <p className="text-[1rem] leading-[1.7] text-dark-text-secondary mb-6">
                Cookie-based analytics miss the majority of European traffic.
                SealMetrics uses first-party, server-side collection that
                captures every session regardless of consent status, browser
                settings, or ad blocker usage.
              </p>
              <ul className="space-y-2">
                {[
                  "No cookies — works without consent banners",
                  "First-party infrastructure — invisible to ad blockers",
                  "Cross-device recognition without third-party data",
                  "Session reconstruction from first touch to conversion",
                  "1.2KB script — zero impact on page performance",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9rem] text-dark-text-secondary"
                  >
                    <span className="text-green-muted shrink-0">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-[4px] p-8">
              <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-dark-text-tertiary mb-6">
                Data capture by scenario
              </div>
              {[
                { scenario: "Standard visit", sm: "100%", ga: "~100%" },
                { scenario: "Consent declined", sm: "100%", ga: "0%" },
                { scenario: "Safari ITP", sm: "100%", ga: "~30%" },
                { scenario: "Ad blocker active", sm: "100%", ga: "0%" },
                { scenario: "Firefox ETP", sm: "100%", ga: "~40%" },
                { scenario: "Incognito mode", sm: "100%", ga: "~60%" },
              ].map((row) => (
                <div
                  key={row.scenario}
                  className="flex items-center py-3 border-b border-dark-border/30 last:border-0 text-[0.85rem]"
                >
                  <span className="flex-1 text-dark-text-secondary">
                    {row.scenario}
                  </span>
                  <span className="w-20 text-right font-mono text-green">
                    {row.sm}
                  </span>
                  <span className="w-20 text-right font-mono text-dark-text-tertiary">
                    {row.ga}
                  </span>
                </div>
              ))}
              <div className="flex items-center pt-4 text-[0.7rem] text-dark-text-tertiary">
                <span className="flex-1" />
                <span className="w-20 text-right">SealMetrics</span>
                <span className="w-20 text-right">GA4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Attribution */}
      <section className="section-dark py-28 bg-dark-bg border-t border-dark-border/30">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-dark-card border border-dark-border rounded-[4px] p-8">
              <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-dark-text-tertiary mb-6">
                Attribution comparison — same traffic, different data
              </div>
              {[
                { channel: "Organic Search", sm: "€67,240", ga: "€12,100" },
                { channel: "Paid Search", sm: "€52,180", ga: "€8,450" },
                { channel: "Social (Meta)", sm: "€31,450", ga: "€4,200" },
                { channel: "Email", sm: "€22,890", ga: "€6,780" },
                { channel: "Direct", sm: "€11,070", ga: "€3,340" },
              ].map((row) => (
                <div
                  key={row.channel}
                  className="flex items-center py-3 border-b border-dark-border/30 last:border-0 text-[0.85rem]"
                >
                  <span className="flex-1 text-dark-text-secondary">
                    {row.channel}
                  </span>
                  <span className="w-24 text-right font-mono text-green">
                    {row.sm}
                  </span>
                  <span className="w-24 text-right font-mono text-dark-text-tertiary">
                    {row.ga}
                  </span>
                </div>
              ))}
              <div className="flex items-center pt-4 text-[0.7rem] text-dark-text-tertiary">
                <span className="flex-1" />
                <span className="w-24 text-right">SealMetrics</span>
                <span className="w-24 text-right">GA4</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-green-muted mb-3">
                Revenue Intelligence
              </span>
              <h2 className="headline-section mb-5">
                Know what actually drives revenue.
              </h2>
              <p className="text-[1rem] leading-[1.7] text-dark-text-secondary mb-6">
                Attribution built on 13% of data produces misleading results.
                SealMetrics connects every touchpoint to revenue using complete
                session data&nbsp;&mdash; showing the real ROI of every channel,
                campaign, and creative.
              </p>
              <ul className="space-y-2">
                {[
                  "Multi-touch attribution across the full journey",
                  "Channel and campaign-level revenue breakdown",
                  "Cost integration for true ROAS calculation",
                  "Funnel analysis with drop-off diagnostics",
                  "Cohort analysis and LTV modeling",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9rem] text-dark-text-secondary"
                  >
                    <span className="text-green-muted shrink-0">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LENS AI */}
      <section className="section-dark py-28 bg-dark-bg border-t border-dark-border/30">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-green-muted mb-3">
                LENS AI
              </span>
              <h2 className="headline-section mb-5">
                Anomalies detected before they become problems.
              </h2>
              <p className="text-[1rem] leading-[1.7] text-dark-text-secondary mb-6">
                LENS monitors 60+ metrics continuously, detecting changes in
                traffic patterns, conversion rates, revenue trends, and channel
                performance. When something breaks at 3 AM, your team knows
                before the morning standup.
              </p>
              <ul className="space-y-2">
                {[
                  "60+ automated anomaly detection rules",
                  "Natural language alerts — plain English, not charts",
                  "Root cause analysis with suggested actions",
                  "Revenue impact estimation per anomaly",
                  "Slack, email, and webhook notifications",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9rem] text-dark-text-secondary"
                  >
                    <span className="text-green-muted shrink-0">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-[4px] p-8 space-y-4">
              <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-dark-text-tertiary mb-2">
                Live anomaly feed
              </div>
              {[
                { severity: "High priority", color: "text-red-alert", text: "Organic traffic from Germany dropped 34% in 72h. Correlates with Search Console indexing alert.", time: "2h ago" },
                { severity: "Medium", color: "text-[#E0A458]", text: "Cart abandonment rate +12% on mobile since v4.2.1 deployment.", time: "6h ago" },
                { severity: "Insight", color: "text-green-muted", text: "Email 'Winter Sale' outperforming paid search 3.2x on ROAS. Consider budget reallocation.", time: "1d ago" },
                { severity: "Resolved", color: "text-dark-text-tertiary", text: "Payment page 500 error resolved. Estimated recovered revenue: €4,200.", time: "2d ago" },
              ].map((a) => (
                <div key={a.text} className="p-4 bg-dark-bg/50 border border-dark-border/30 rounded-[4px]">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-[0.65rem] font-medium uppercase tracking-[0.06em] ${a.color}`}>{a.severity}</span>
                    <span className="text-[0.65rem] text-dark-text-tertiary">{a.time}</span>
                  </div>
                  <div className="text-[0.8rem] text-dark-text-secondary leading-snug">{a.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reports */}
      <div className="transition-to-light" />
      <section className="py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[600px] mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Reports
            </span>
            <h2 className="headline-section mb-4">
              Nine reports. Zero guesswork.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
              Every report is built on 100% data&nbsp;&mdash; not sampled, not
              modeled, not estimated.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reports.map((r, i) => (
              <div
                key={r}
                className="p-6 border border-warm-100 rounded-[4px] bg-warm-white"
              >
                <span className="font-mono text-[0.75rem] text-text-tertiary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[1rem] font-medium text-text-primary mt-2">
                  {r}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-24 bg-dark-bg text-center relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,255,127,0.05), transparent 70%)" }}
        />
        <div className="relative z-10 max-w-[500px] mx-auto px-8">
          <h2 className="headline-section mb-4">See it with your own data.</h2>
          <p className="text-[1rem] leading-[1.7] text-dark-text-secondary mb-8">
            We will run SealMetrics on your site and show you exactly what you
            have been missing.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-dark-bg bg-green rounded-[4px] no-underline hover:shadow-[0_0_50px_-5px_rgba(0,255,127,0.4)] transition-shadow"
            style={{ boxShadow: "0 0 40px -10px rgba(0,255,127,0.3)" }}
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
