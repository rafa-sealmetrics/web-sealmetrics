import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { comparisonPageSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SealMetrics vs Piwik PRO — Detailed Comparison",
  description:
    "SealMetrics vs Piwik PRO: cookieless 100% data capture vs cookie-based ~40%. EU analytics from €199/mo vs €30,000+/yr. Full comparison.",
  openGraph: {
    title: "SealMetrics vs Piwik PRO — Detailed Comparison",
    description:
      "Cookieless vs cookie-based EU analytics. 100% vs ~40% data capture, €199/mo vs €30,000+/yr. Full comparison.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/vs/piwik-pro",
  },
};

const vsPiwikFaqs = [
  {
    q: "What is the main difference between SealMetrics and Piwik PRO?",
    a: "Data capture. Piwik PRO uses cookies and requires consent, capturing ~40% of EU traffic. SealMetrics is fully cookieless, capturing 100% without consent dependency.",
  },
  {
    q: "Is Piwik PRO more privacy-friendly than SealMetrics?",
    a: "Both are EU-hosted and privacy-focused. The key difference: Piwik PRO uses first-party cookies (requiring consent under ePrivacy), while SealMetrics uses no cookies at all (no consent needed for basic analytics).",
  },
  {
    q: "Does Piwik PRO have features SealMetrics doesn\u2019t?",
    a: "Yes. Piwik PRO includes a built-in Tag Manager, Consent Manager, and Customer Data Platform. SealMetrics focuses on complete data capture, AI analytics, and revenue attribution.",
  },
  {
    q: "Why is SealMetrics cheaper than Piwik PRO?",
    a: "Piwik PRO Enterprise starts at \u20AC30,000+/yr. SealMetrics starts at \u20AC2,388/yr. The price difference reflects different market positioning \u2014 SealMetrics delivers enterprise-grade analytics without enterprise-grade pricing.",
  },
];

const comparisonRows = [
  { feature: "EU data capture rate", sm: "100% of visitors", pp: "~40% average (consent-dependent)", category: "Data Capture" },
  { feature: "Cookie dependency", sm: "None — fully cookieless", pp: "First-party cookies required", category: "Data Capture" },
  { feature: "Consent banner required", sm: "No", pp: "Yes (built-in Consent Manager)", category: "Data Capture" },
  { feature: "Ad blocker resistance", sm: "First-party infrastructure", pp: "Partially blocked (JavaScript tracker)", category: "Data Capture" },
  { feature: "Data sampling", sm: "Never — full resolution", pp: "No sampling (strength)", category: "Data Capture" },
  { feature: "Data freshness", sm: "Real-time", pp: "Near real-time", category: "Data Capture" },
  { feature: "AI agent tracking (Coming Soon)", sm: "Built-in", pp: "Not available", category: "Data Capture" },
  { feature: "Revenue attribution", sm: "Complete multi-touch (100% data)", pp: "Multi-channel (consent-limited)", category: "Intelligence" },
  { feature: "AI anomaly detection", sm: "LENS AI — 60+ automated rules", pp: "No built-in AI detection", category: "Intelligence" },
  { feature: "Natural language queries", sm: "Ask business questions, get answers", pp: "Not available", category: "Intelligence" },
  { feature: "Tag management", sm: "Not needed (no tags)", pp: "Built-in Tag Manager (strength)", category: "Intelligence" },
  { feature: "Custom reports", sm: "9 specialized report types", pp: "Custom dashboards + reports", category: "Intelligence" },
  { feature: "Customer data platform", sm: "Analytics-focused", pp: "Built-in CDP (strength)", category: "Intelligence" },
  { feature: "GDPR compliance", sm: "By design — no PII collected", pp: "Privacy-focused, configurable compliance", category: "Privacy" },
  { feature: "Data residency", sm: "EU-only servers, guaranteed", pp: "EU hosting available (strength)", category: "Privacy" },
  { feature: "ePrivacy compliance", sm: "No consent needed (no device storage)", pp: "Consent needed (cookies used)", category: "Privacy" },
  { feature: "Consent management", sm: "Not needed", pp: "Built-in Consent Manager", category: "Privacy" },
  { feature: "Personal data", sm: "None — zero PII by architecture", pp: "Configurable — can minimize but cookies remain", category: "Privacy" },
  { feature: "Annual cost", sm: "From €2,388/yr", pp: "From €30,000+/yr (Core plan free, limited)", category: "Other" },
  { feature: "Setup complexity", sm: "One script tag, 5 minutes", pp: "Tag Manager setup + consent configuration", category: "Other" },
  { feature: "Support", sm: "Priority email + onboarding", pp: "Priority support (enterprise tiers)", category: "Other" },
  { feature: "Open source", sm: "Proprietary", pp: "Partially open-source heritage", category: "Other" },
];

export default function VsPiwikProPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Piwik PRO" }]} />
      <JsonLd data={comparisonPageSchema({ name: "SealMetrics vs Piwik PRO", description: "Cookieless 100% data vs cookie-based ~40%. EU analytics compared.", url: "/vs/piwik-pro", competitor: { name: "Piwik PRO", url: "https://piwik.pro" }, dateModified: "2026-03-09" })} />
      <JsonLd data={breadcrumbSchema([{ name: "vs Piwik PRO", url: "/vs/piwik-pro" }])} />
      <JsonLd data={faqSchema(vsPiwikFaqs.map((f) => ({ question: f.q, answer: f.a })))} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[750px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Comparison
            </span>
            <h1 className="headline-hero mb-8">
              SealMetrics vs Piwik&nbsp;PRO
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Two EU-focused, privacy-first analytics platforms with the same
              values&nbsp;&mdash; but fundamentally different architectures.
              One improved the cookie model. The other{" "}
              <Link href="/blog/cookieless-analytics-explained" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">eliminated it entirely</Link>.
              Here is what that means for your data.
            </p>
          </div>
        </div>
      </section>

      {/* Key difference cards */}
      <section className="pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="p-9 bg-warm-white border border-warm-100 rounded-[4px]">
              <div className="font-mono text-[0.7rem] text-text-tertiary uppercase tracking-[0.06em] mb-4">
                Piwik PRO
              </div>
              <div className="font-serif text-[3.5rem] font-light text-red-alert leading-none mb-3">
                ~40%
              </div>
              <p className="text-[1rem] text-text-secondary leading-relaxed">
                EU data capture rate. Better consent tools than GA4, but still
                cookie-dependent. When 60% of visitors decline consent, 60% of
                your data disappears.
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
                blocker. No cookies, no consent dependency. Every visitor
                counted, every session complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full comparison table */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Full comparison</h2>
          <div className="overflow-x-auto bg-white border border-warm-100 rounded-[4px]">
            <table className="w-full border-collapse text-[0.9rem]">
              <thead>
                <tr className="bg-warm-50">
                  <th className="text-left py-4 px-6 font-medium text-[0.75rem] text-text-tertiary border-b border-warm-100 uppercase tracking-[0.04em]">
                    Capability
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-[0.75rem] text-text-primary border-b border-warm-100 uppercase tracking-[0.04em]">
                    SealMetrics
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-[0.75rem] text-text-tertiary border-b border-warm-100 uppercase tracking-[0.04em]">
                    Piwik PRO
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => {
                  const prevCategory =
                    i > 0 ? comparisonRows[i - 1].category : null;
                  const showCategory = row.category !== prevCategory;
                  return (
                    <Fragment key={row.feature}>
                      {showCategory && (
                        <tr>
                          <td
                            colSpan={3}
                            className="py-3 px-6 text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary bg-warm-50 border-b border-warm-100"
                          >
                            {row.category}
                          </td>
                        </tr>
                      )}
                      <tr>
                        <td className="py-3.5 px-6 border-b border-warm-100/60 text-text-body">
                          {row.feature}
                        </td>
                        <td className="py-3.5 px-6 border-b border-warm-100/60 text-text-primary font-medium">
                          {row.sm}
                        </td>
                        <td className="py-3.5 px-6 border-b border-warm-100/60 text-text-tertiary">
                          {row.pp}
                        </td>
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to use each */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">When to use each</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="p-8 border border-warm-100 rounded-[4px]">
              <h3 className="font-serif text-[1.15rem] font-medium text-text-primary mb-4">
                Piwik PRO works well when
              </h3>
              <ul className="space-y-2">
                {[
                  "You need a built-in Consent Manager and Tag Manager in one platform",
                  "Customer Data Platform (CDP) is a core requirement",
                  "Your team prefers a familiar GA-like interface",
                  "You have budget for €30K+/yr enterprise analytics",
                  "Consent rates above 60% make cookie-dependent tracking acceptable",
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
                  "You need 100% data capture regardless of consent status",
                  "Cookieless architecture is a requirement, not a nice-to-have",
                  "You want enterprise analytics at 1/12th the cost",
                  "AI-powered anomaly detection and natural language queries matter",
                  "You want simplicity — one script, no tag manager, no consent manager needed",
                  "AI agent traffic tracking is on your roadmap (Coming Soon)",
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

      {/* Enterprise context */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <h2 className="headline-section mb-6">
              Same values, different architecture.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              <a href="https://piwik.pro" target="_blank" rel="noopener noreferrer" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">Piwik PRO</a>{" "}
              and SealMetrics share a commitment to privacy and EU
              data sovereignty. The fundamental difference is architectural:
              Piwik PRO improved the cookie-based model with better privacy
              controls. SealMetrics{" "}
              <Link href="/how-it-works" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">eliminated cookies entirely</Link>.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-8">
              In a world where{" "}
              <Link href="/blog/consent-banner-impact-on-analytics" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">consent rates average 30–40% in the EU</Link>,
              that architectural choice determines whether you see 40% or 100%
              of your data. Both platforms respect your users. Only one captures
              all of them. See{" "}
              <Link href="/blog/gdpr-analytics-without-consent" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">how GDPR-compliant analytics works without consent</Link>.
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <Link
                href="/pricing"
                className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
              >
                See Pricing
              </Link>
              <Link
                href="/product"
                className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
              >
                Full Product Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other comparisons */}
      <section className="py-16 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
            Other comparisons
          </h2>
          <div className="flex items-center gap-5 flex-wrap">
            <Link
              href="/vs-ga4"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              SealMetrics vs GA4
            </Link>
            <Link
              href="/vs/ga360"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              SealMetrics vs GA360
            </Link>
            <Link
              href="/vs/adobe-analytics"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              SealMetrics vs Adobe Analytics
            </Link>
            <Link
              href="/security"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              Security & Privacy
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {vsPiwikFaqs.map((faq) => (
              <div
                key={faq.q}
                className="pb-8 border-b border-warm-100 last:border-0"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {faq.q}
                </h3>
                <p className="text-[0.95rem] leading-[1.7] text-text-secondary">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-white text-center border-t border-warm-100">
        <div className="max-w-[550px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Compare with your own data.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Run SealMetrics alongside Piwik PRO. See the difference in your own
            numbers. Then decide which tool tells you the truth.
          </p>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <Link
              href="/demo"
              className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/data-loss-calculator"
              className="inline-flex items-center px-9 py-4 text-[1rem] text-text-secondary bg-transparent border border-warm-200 rounded-[4px] no-underline hover:border-text-body hover:text-text-primary transition-colors"
            >
              Calculate Your Data Loss
            </Link>
          </div>
          <p className="mt-4 text-[0.8rem] text-text-tertiary">
            30-minute walkthrough. No commitment required.
          </p>
        </div>
      </section>
    </>
  );
}
