import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SealMetrics vs Google Analytics 4 — Comparison",
  description:
    "A detailed comparison between SealMetrics and Google Analytics 4. Data capture rates, privacy compliance, attribution accuracy, and more.",
};

const comparisonRows = [
  { feature: "EU data capture rate", sm: "100% of visitors", ga: "13% average (consent-dependent)", category: "Data" },
  { feature: "Cookie dependency", sm: "None — fully cookieless", ga: "Requires first and third-party cookies", category: "Data" },
  { feature: "Consent banner required", sm: "No", ga: "Yes (GDPR Article 6)", category: "Data" },
  { feature: "Ad blocker resistance", sm: "First-party infrastructure", ga: "Blocked by 40%+ of EU sessions", category: "Data" },
  { feature: "Data sampling", sm: "Never — full resolution at any volume", ga: "Sampled above 500K sessions/day", category: "Data" },
  { feature: "Data freshness", sm: "Real-time", ga: "24–48 hour processing delay", category: "Data" },
  { feature: "Revenue attribution", sm: "Complete multi-touch (100% data)", ga: "Partial (consent-dependent, modeled)", category: "Intelligence" },
  { feature: "AI anomaly detection", sm: "60+ automated rules, continuous", ga: "Basic automated insights", category: "Intelligence" },
  { feature: "Funnel analysis", sm: "Complete with drop-off diagnostics", ga: "Available but consent-limited", category: "Intelligence" },
  { feature: "Custom reports", sm: "9 specialized report types", ga: "Explorations (limited free quota)", category: "Intelligence" },
  { feature: "GDPR compliance", sm: "By design — no PII collected", ga: "Requires DPA, consent config, IP anonymization", category: "Privacy" },
  { feature: "Data residency", sm: "EU-only servers, guaranteed", ga: "US data transfers (Standard Contractual Clauses)", category: "Privacy" },
  { feature: "ePrivacy compliance", sm: "No consent needed (no device storage)", ga: "Consent required (cookies = device storage)", category: "Privacy" },
  { feature: "Personal data collection", sm: "None — zero PII by architecture", ga: "IP address, device identifiers, user IDs", category: "Privacy" },
  { feature: "Price", sm: "From €390/month", ga: "Free (paid version: Analytics 360)", category: "Other" },
  { feature: "Setup complexity", sm: "One script tag, 5 minutes", ga: "Tag Manager, consent setup, config", category: "Other" },
  { feature: "Support", sm: "Priority email + onboarding", ga: "Community forums (paid: dedicated)", category: "Other" },
];

export default function VsGA4Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[750px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Comparison
            </span>
            <h1 className="headline-hero mb-8">
              SealMetrics vs Google Analytics&nbsp;4
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              A comparison based on data, not opinion. Both tools measure web
              traffic&nbsp;&mdash; but they capture fundamentally different
              amounts of it. Here is what that means for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Key difference */}
      <section className="pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="p-9 bg-warm-white border border-warm-100 rounded-[4px]">
              <div className="font-mono text-[0.7rem] text-text-tertiary uppercase tracking-[0.06em] mb-4">
                Google Analytics 4
              </div>
              <div className="font-serif text-[3.5rem] font-light text-red-alert leading-none mb-3">
                13%
              </div>
              <p className="text-[1rem] text-text-secondary leading-relaxed">
                Average EU data capture rate. Depends on cookie consent, browser
                support, and absence of ad blockers.
              </p>
            </div>
            <div className="p-9 bg-warm-white border border-warm-100 rounded-[4px]">
              <div className="font-mono text-[0.7rem] text-green-muted uppercase tracking-[0.06em] mb-4">
                SealMetrics
              </div>
              <div className="font-serif text-[3.5rem] font-light text-text-primary leading-none mb-3">
                100%
              </div>
              <p className="text-[1rem] text-text-secondary leading-relaxed">
                Full data capture regardless of consent status, browser, or ad
                blocker. No cookies, no dependencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full comparison table */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="headline-section mb-12">
            Full comparison
          </h2>
          <div className="overflow-x-auto bg-white border border-warm-100 rounded-[4px]">
            <table className="w-full border-collapse text-[0.9rem]">
              <thead>
                <tr className="bg-warm-white">
                  <th className="text-left py-4 px-6 font-medium text-[0.75rem] text-text-tertiary border-b border-warm-100 uppercase tracking-[0.04em]">
                    Capability
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-[0.75rem] text-text-primary border-b border-warm-100 uppercase tracking-[0.04em]">
                    SealMetrics
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-[0.75rem] text-text-tertiary border-b border-warm-100 uppercase tracking-[0.04em]">
                    Google Analytics 4
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => {
                  const prevCategory = i > 0 ? comparisonRows[i - 1].category : null;
                  const showCategory = row.category !== prevCategory;
                  return (
                    <>
                      {showCategory && (
                        <tr key={`cat-${row.category}`}>
                          <td
                            colSpan={3}
                            className="py-3 px-6 text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary bg-warm-50 border-b border-warm-100"
                          >
                            {row.category}
                          </td>
                        </tr>
                      )}
                      <tr key={row.feature}>
                        <td className="py-3.5 px-6 border-b border-warm-100/60 text-text-body">
                          {row.feature}
                        </td>
                        <td className="py-3.5 px-6 border-b border-warm-100/60 text-text-primary font-medium">
                          {row.sm}
                        </td>
                        <td className="py-3.5 px-6 border-b border-warm-100/60 text-text-tertiary">
                          {row.ga}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to use */}
      <section className="py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="headline-section mb-12">When to use each</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="p-8 border border-warm-100 rounded-[4px]">
              <h3 className="font-serif text-[1.15rem] font-medium text-text-primary mb-4">
                GA4 works well when
              </h3>
              <ul className="space-y-2">
                {[
                  "Your audience is primarily outside the EU",
                  "Consent rates are above 80%",
                  "You need Google Ads integration above all else",
                  "Approximate data is acceptable for your decisions",
                  "Budget is the primary constraint",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9rem] text-text-secondary"
                  >
                    <span className="text-text-tertiary shrink-0">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 border-2 border-text-primary rounded-[4px]">
              <h3 className="font-serif text-[1.15rem] font-medium text-text-primary mb-4">
                SealMetrics is better when
              </h3>
              <ul className="space-y-2">
                {[
                  "You operate in the EU and consent rates are low",
                  "Accurate attribution drives budget decisions",
                  "You need full GDPR compliance without configuration",
                  "Your data must stay in the EU",
                  "You want to see 100% of your traffic, not 13%",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9rem] text-text-body"
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

      {/* CTA */}
      <section className="section-dark py-24 bg-dark-bg text-center relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,255,127,0.05), transparent 70%)" }}
        />
        <div className="relative z-10 max-w-[550px] mx-auto px-8">
          <h2 className="headline-section mb-4">
            Compare with your own data.
          </h2>
          <p className="text-[1rem] leading-[1.7] text-dark-text-secondary mb-8">
            Run SealMetrics alongside GA4. See the difference in your own
            numbers. Then decide which tool tells you the truth.
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
