import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { comparisonPageSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { OtherComparisons } from "@/components/ui/OtherComparisons";

export const metadata: Metadata = {
  title: "SealMetrics vs GA360 — Enterprise Analytics Comparison",
  description:
    "SealMetrics vs Google Analytics 360: 100% vs ~35% EU data capture. Enterprise analytics from €599/mo instead of $150,000+/yr. Full comparison.",
  openGraph: {
    title: "SealMetrics vs GA360 — Enterprise Analytics Comparison",
    description:
      "SealMetrics vs GA360: 100% vs ~35% EU data capture. Enterprise-grade analytics at 1/60th the cost.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/vs/ga360",
  },
};

const vsGa360Faqs = [
  {
    q: "Can SealMetrics really replace GA360?",
    a: "For EU businesses focused on data completeness, yes. SealMetrics captures 100% of traffic vs ~35% for GA360. It includes revenue attribution, AI anomaly detection, and real-time processing \u2014 at 1/60th the cost.",
  },
  {
    q: "Does SealMetrics have unsampled data like GA360?",
    a: "Yes. SealMetrics never samples data at any traffic level. Every session is recorded individually. GA360 offers unsampled reports but with quota limits.",
  },
  {
    q: "What about BigQuery integration?",
    a: "SealMetrics supports data export to BigQuery and 25+ other platforms. GA360\u2019s native BigQuery export is a strength, but SealMetrics provides the same capability with complete underlying data.",
  },
  {
    q: "Is SealMetrics suitable for large eCommerce operations?",
    a: "Yes. The Enterprise plan handles custom event volumes with dedicated infrastructure. Built on ClickHouse for sub-second queries at any scale, with EU-only data residency guaranteed.",
  },
];

const comparisonRows = [
  { feature: "EU data capture rate", sm: "100% of visitors", ga: "~35% average (consent tools help, still cookie-dependent)", category: "Data Capture" },
  { feature: "Cookie dependency", sm: "None — fully cookieless", ga: "Requires first and third-party cookies", category: "Data Capture" },
  { feature: "Consent banner required", sm: "No", ga: "Yes (enhanced consent mode available)", category: "Data Capture" },
  { feature: "Ad blocker resistance", sm: "First-party infrastructure", ga: "Partially mitigated with server-side GTM", category: "Data Capture" },
  { feature: "Data sampling", sm: "Never — full resolution at any volume", ga: "Unsampled reports available (quota-limited)", category: "Data Capture" },
  { feature: "Data freshness", sm: "Real-time", ga: "4-8 hour processing, real-time limited", category: "Data Capture" },
  { feature: "AI agent tracking (Coming Soon)", sm: "Built-in", ga: "Not available", category: "Data Capture" },
  { feature: "Revenue attribution", sm: "Last-click on 100% of data", ga: "Advanced (consent-dependent data)", category: "Intelligence" },
  { feature: "AI anomaly detection", sm: "LENS AI — 60+ automated rules", ga: "Custom alerts, basic anomaly detection", category: "Intelligence" },
  { feature: "Natural language queries", sm: "Ask business questions, get answers", ga: "Limited to Explore interface", category: "Intelligence" },
  { feature: "BigQuery integration", sm: "Native export available", ga: "Native BigQuery export (strength)", category: "Intelligence" },
  { feature: "Custom reports", sm: "9 specialized report types", ga: "Unlimited custom reports + explorations", category: "Intelligence" },
  { feature: "Audience building", sm: "Based on 100% data", ga: "Advanced, Google Ads integration", category: "Intelligence" },
  { feature: "GDPR compliance", sm: "By design — no PII collected", ga: "Requires DPA, consent mode v2, legal review", category: "Privacy" },
  { feature: "Data residency", sm: "EU-only servers, guaranteed", ga: "EU data storage option (US processing possible)", category: "Privacy" },
  { feature: "ePrivacy compliance", sm: "No consent needed", ga: "Consent required", category: "Privacy" },
  { feature: "Personal data collection", sm: "None — zero PII", ga: "IP address, device IDs, user IDs, Google signals", category: "Privacy" },
  { feature: "Annual cost", sm: "From €5,988/yr", ga: "$150,000+/yr", category: "Other" },
  { feature: "Setup complexity", sm: "One script tag, 5 minutes", ga: "6-12 week implementation, certified partner recommended", category: "Other" },
  { feature: "Support", sm: "Priority email + onboarding", ga: "Dedicated account manager", category: "Other" },
  { feature: "Contract", sm: "Monthly, cancel anytime", ga: "Annual contract required", category: "Other" },
];

export default function VsGA360Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs GA360" }]} />
      <JsonLd data={comparisonPageSchema({ name: "SealMetrics vs GA360", description: "Enterprise analytics comparison: SealMetrics vs Google Analytics 360.", url: "/vs/ga360", competitor: { name: "Google Analytics 360", url: "https://marketingplatform.google.com/about/analytics-360/" }, dateModified: "2026-03-09" })} />
      <JsonLd data={breadcrumbSchema([{ name: "vs GA360", url: "/vs/ga360" }])} />
      <JsonLd data={faqSchema(vsGa360Faqs.map((f) => ({ question: f.q, answer: f.a })))} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[750px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Comparison
            </span>
            <h1 className="headline-hero mb-8">
              SealMetrics vs Google Analytics&nbsp;360
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              GA360 is the enterprise tier of Google Analytics at
              $150,000+/yr. SealMetrics offers enterprise-grade analytics
              from&nbsp;&euro;599/mo&nbsp;&mdash; with{" "}
              <Link href="/blog/why-ga4-shows-13pct-eu-traffic" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">complete data capture</Link>{" "}
              that GA360 still cannot deliver in the EU.
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
                Google Analytics 360
              </div>
              <div className="font-serif text-[3.5rem] font-light text-red-alert leading-none mb-3">
                ~35%
              </div>
              <p className="text-[1rem] text-text-secondary leading-relaxed">
                Average EU data capture rate. Better than free GA4 thanks to
                enhanced consent tools, but still fundamentally
                cookie-dependent. Two thirds of your visitors remain invisible.
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
                blocker. No cookies, no dependencies. Enterprise-grade analytics
                at 1/60th of the cost.
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
                    Google Analytics 360
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
                          {row.ga}
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
                GA360 works well when
              </h3>
              <ul className="space-y-2">
                {[
                  "You need deep Google Ads and DV360 integration",
                  "Your team has 6+ analysts who need unlimited custom reports",
                  "You've already invested in the Google Marketing Platform ecosystem",
                  "Budget is not a constraint and you can afford $150K+/yr",
                  "Consent rates are above 70% in your markets",
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
                  "You operate in the EU and need 100% data capture",
                  "You want enterprise analytics without enterprise pricing",
                  "GDPR compliance must be architectural, not configured",
                  "Your data must stay in the EU exclusively",
                  "You want AI-powered anomaly detection included, not add-on",
                  "You need to track AI agent traffic alongside human analytics (Coming Soon)",
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
              Enterprise analytics shouldn&rsquo;t require enterprise budgets.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              <a href="https://marketingplatform.google.com/about/analytics-360/" target="_blank" rel="noopener noreferrer" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">GA360</a>{" "}
              is an excellent product if you can afford it and consent
              isn&rsquo;t a concern. But at $150,000+/yr, it still misses 65% of
              EU visitors due to its fundamental cookie dependency. Better consent
              tools improve the numbers, but they don&rsquo;t solve the underlying
              architecture problem — as we explain in{" "}
              <Link href="/blog/analytics-tools-data-sampling" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">our data sampling comparison</Link>.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-8">
              SealMetrics delivers complete data&nbsp;&mdash; 100% of visitors,
              zero cookie dependency,{" "}
              <Link href="/security" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">GDPR compliance by design</Link>&nbsp;&mdash; at
              1/60th of the cost. With capabilities GA360 does not offer:{" "}
              <Link href="/how-it-works" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">cookieless
              collection</Link>, AI agent tracking (coming soon), and privacy compliance
              that requires no configuration.
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
          <p className="text-[0.8rem] text-text-tertiary mb-4 font-medium uppercase tracking-[0.06em]">
            Other comparisons
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href="/vs-ga4"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              SealMetrics vs GA4
            </Link>
            <Link
              href="/vs/adobe-analytics"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              SealMetrics vs Adobe Analytics
            </Link>
            <Link
              href="/vs/piwik-pro"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              SealMetrics vs Piwik PRO
            </Link>
            <Link
              href="/alternatives/google-analytics"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              Google Analytics Alternatives
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
            {vsGa360Faqs.map((faq) => (
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
      <section className="py-28 bg-warm-white text-center border-t border-warm-100">
        <div className="max-w-[550px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Compare with your own data.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Run SealMetrics alongside GA360. See the difference in your own
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
      <OtherComparisons currentHref="/vs/ga360/" />
    </>
  );
}
