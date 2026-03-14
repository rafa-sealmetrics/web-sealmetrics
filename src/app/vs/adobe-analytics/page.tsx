import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { comparisonPageSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SealMetrics vs Adobe Analytics — Full Comparison",
  description:
    "SealMetrics vs Adobe Analytics: 100% vs ~25% EU data capture. Cookieless architecture vs cookie-dependent. Enterprise analytics from €599/mo vs $100,000+/yr. Full feature comparison.",
  openGraph: {
    title: "SealMetrics vs Adobe Analytics — Full Comparison",
    description:
      "Enterprise analytics compared. 100% vs ~25% EU data capture, cookieless architecture, from €599/mo vs $100,000+/yr.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/vs/adobe-analytics",
  },
};

const vsAdobeFaqs = [
  {
    q: "Is SealMetrics a real alternative to Adobe Analytics for enterprise?",
    a: "Yes. SealMetrics captures 100% of EU traffic vs ~25% for Adobe. Multi-touch attribution, AI anomaly detection, and 9 report types. From \u20AC5,988/yr vs $100,000+/yr for Adobe.",
  },
  {
    q: "Does SealMetrics replace Adobe\u2019s segmentation and Analysis Workspace?",
    a: "SealMetrics focuses on complete data capture and revenue attribution rather than unlimited custom reports. For EU businesses, the 4x more data typically outweighs the fewer report templates.",
  },
  {
    q: "Can SealMetrics handle enterprise-level traffic?",
    a: "Yes. The Scale plan handles 15M events/month, and the Enterprise plan supports custom volumes. Built on ClickHouse for sub-second queries at any scale.",
  },
  {
    q: "How long does migration from Adobe Analytics take?",
    a: "SealMetrics can be deployed in 5 minutes with a single script tag. Most enterprise customers run both tools in parallel for 30\u201360 days before deciding.",
  },
];

const comparisonRows = [
  { feature: "EU data capture rate", sm: "100% of visitors", adobe: "~25% average (consent-dependent)", category: "Data Capture" },
  { feature: "Cookie dependency", sm: "None — fully cookieless", adobe: "Requires first and third-party cookies", category: "Data Capture" },
  { feature: "Consent banner required", sm: "No", adobe: "Yes (GDPR compliance configuration)", category: "Data Capture" },
  { feature: "Ad blocker resistance", sm: "First-party infrastructure", adobe: "CNAME cloaking (partially effective)", category: "Data Capture" },
  { feature: "Data sampling", sm: "Never — full resolution", adobe: "Configurable thresholds", category: "Data Capture" },
  { feature: "Data freshness", sm: "Real-time", adobe: "30-90 minute latency", category: "Data Capture" },
  { feature: "AI agent tracking (Coming Soon)", sm: "Built-in", adobe: "Not available", category: "Data Capture" },
  { feature: "Revenue attribution", sm: "Complete multi-touch (100% data)", adobe: "Advanced Attribution IQ (consent-limited)", category: "Intelligence" },
  { feature: "AI anomaly detection", sm: "LENS AI — 60+ automated rules", adobe: "Adobe Sensei (additional licensing)", category: "Intelligence" },
  { feature: "Natural language queries", sm: "Ask business questions, get answers", adobe: "Limited Analysis Workspace NLP", category: "Intelligence" },
  { feature: "Segmentation", sm: "Based on 100% data", adobe: "Advanced segmentation (strength)", category: "Intelligence" },
  { feature: "Custom reports", sm: "9 specialized report types", adobe: "Unlimited (Analysis Workspace)", category: "Intelligence" },
  { feature: "Data warehouse", sm: "Full data export available", adobe: "Data Warehouse (scheduled reports)", category: "Intelligence" },
  { feature: "GDPR compliance", sm: "By design — no PII collected", adobe: "Requires extensive configuration + legal review", category: "Privacy" },
  { feature: "Data residency", sm: "EU-only servers, guaranteed", adobe: "Regional data centers (US processing common)", category: "Privacy" },
  { feature: "ePrivacy compliance", sm: "No consent needed", adobe: "Consent required (cookies)", category: "Privacy" },
  { feature: "Personal data", sm: "None — zero PII", adobe: "IP, device IDs, Experience Cloud IDs", category: "Privacy" },
  { feature: "Annual cost", sm: "From €5,988/yr", adobe: "$100,000+/yr (custom quote)", category: "Other" },
  { feature: "Setup complexity", sm: "One script tag, 5 minutes", adobe: "3-6 month implementation, Adobe consultants", category: "Other" },
  { feature: "Support", sm: "Priority email + onboarding", adobe: "Enterprise support (tiered)", category: "Other" },
  { feature: "Ecosystem lock-in", sm: "Open, API-first", adobe: "Deep Experience Cloud dependency", category: "Other" },
];

export default function VsAdobeAnalyticsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Adobe Analytics" }]} />
      <JsonLd data={comparisonPageSchema({ name: "SealMetrics vs Adobe Analytics", description: "Modern cookieless analytics vs legacy enterprise analytics.", url: "/vs/adobe-analytics", competitor: { name: "Adobe Analytics", url: "https://business.adobe.com/products/analytics/adobe-analytics.html" }, dateModified: "2026-03-09" })} />
      <JsonLd data={breadcrumbSchema([{ name: "vs Adobe Analytics", url: "/vs/adobe-analytics" }])} />
      <JsonLd data={faqSchema(vsAdobeFaqs.map((f) => ({ question: f.q, answer: f.a })))} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[750px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Comparison
            </span>
            <h1 className="headline-hero mb-8">
              SealMetrics vs Adobe&nbsp;Analytics
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Adobe Analytics is the legacy enterprise analytics platform.
              SealMetrics is the modern alternative&nbsp;&mdash; built for a
              cookieless, consent-aware web, at a fraction of the cost. In EU markets where{" "}
              <Link href="/blog/consent-banner-impact-on-analytics" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">consent banners destroy analytics data</Link>,
              architecture matters more than features.
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
                Adobe Analytics
              </div>
              <div className="font-serif text-[3.5rem] font-light text-red-alert leading-none mb-3">
                ~25%
              </div>
              <p className="text-[1rem] text-text-secondary leading-relaxed">
                Average EU data capture rate. Cookie-dependent architecture
                suffers the same consent and ad blocker losses as any
                traditional analytics tool. Decisions built on a quarter of
                the picture.
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
                blocker. No cookies, no dependencies. Enterprise analytics
                grounded in complete data.
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
                    Adobe Analytics
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
                          {row.adobe}
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
                Adobe Analytics works well when
              </h3>
              <ul className="space-y-2">
                {[
                  "You're already invested in the Adobe Experience Cloud ecosystem",
                  "You need advanced segmentation across multiple Adobe products",
                  "Your team includes certified Adobe analysts",
                  "Budget is not a constraint",
                  "You need Analysis Workspace's depth for complex ad-hoc analysis",
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
                  "You want complete data without cookie dependency",
                  "You need enterprise analytics at 1/40th of the cost",
                  "Implementation should take minutes, not months",
                  "GDPR compliance must be architectural, not a configuration project",
                  "You want modern AI supervision included by default",
                  "Vendor lock-in is a concern",
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
              Modern analytics, without the legacy tax.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              Adobe Analytics was built for a pre-GDPR, cookie-rich web. In
              2026, with consent rates below 30% in most EU markets and AI
              agents generating increasing traffic, the assumptions underlying
              Adobe&rsquo;s architecture no longer hold. Under the{" "}
              <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" target="_blank" rel="noopener noreferrer" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">GDPR</a>,{" "}
              <Link href="/blog/what-is-data-loss-in-analytics" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">data loss in analytics</Link>{" "}
              is no longer a minor inconvenience — it is a structural problem.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-8">
              SealMetrics was built for the web as it is now&nbsp;&mdash;{" "}
              <Link href="/how-it-works" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">cookieless, consent-aware, AI-inclusive</Link>&nbsp;&mdash; at a fraction
              of the cost. See how it compares to{" "}
              <Link href="/blog/ga4-alternatives-enterprise" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">other enterprise GA4 alternatives</Link>.
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
              href="/vs/ga360"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              SealMetrics vs GA360
            </Link>
            <Link
              href="/vs/piwik-pro"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              SealMetrics vs Piwik PRO
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
            {vsAdobeFaqs.map((faq) => (
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
            Run SealMetrics alongside Adobe Analytics. See the difference in
            your own numbers. Then decide which tool tells you the truth.
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
