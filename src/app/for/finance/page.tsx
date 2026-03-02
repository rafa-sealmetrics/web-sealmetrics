import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SealMetrics for Finance — Compliant Analytics, Complete Data",
  description:
    "Financial services face the strictest consent requirements in Europe. SealMetrics captures 100% of visitor journeys without cookies — fully GDPR compliant, EU-hosted.",
  openGraph: {
    title: "SealMetrics for Finance",
    description:
      "Complete analytics for financial services. 100% visitor data, zero cookie dependency, EU-only infrastructure, GDPR compliant by design.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/for/finance",
  },
};

export default function ForFinancePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For Finance" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For Finance", url: "/for/finance" }])} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              For Financial Services
            </span>
            <h1 className="headline-hero mb-8">
              The stricter your compliance, the less data you collect. That trade-off is unnecessary.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Financial services face the highest consent rejection rates in
              Europe — 75-85% in some markets. Your{" "}
              <Link href="/glossary/gdpr-analytics-compliance" className="text-text-secondary border-b border-warm-200 pb-0.5 no-underline hover:text-text-primary transition-colors">
                GDPR compliance
              </Link>{" "}
              is impeccable, but your analytics shows a fraction of reality.
              SealMetrics captures 100% without compromising compliance — built on{" "}
              <Link href="/security" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">EU-only infrastructure with privacy-first architecture</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            Problems you recognize
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                title: "Compliance kills your data coverage",
                desc: "Your legal team requires strict consent implementation. The result: 75-85% of visitors reject cookies. You are compliant — and nearly blind. Product decisions, campaign optimization, and conversion analysis run on 15-25% of traffic.",
              },
              {
                title: "Lead attribution across long sales cycles",
                desc: "A mortgage inquiry, an insurance quote, a wealth management consultation — these journeys span weeks of research. Cookie expiration and consent rejection mean you lose attribution between first research visit and final application.",
              },
              {
                title: "Third-party data transfer risk",
                desc: "Every analytics tool that sends data to US servers creates regulatory exposure. Google Analytics, Adobe, and most tag managers transfer personal data outside the EU — a growing liability under evolving DPA enforcement.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-warm-white border border-warm-100 rounded-[4px]"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What changes */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            What changes with complete data
          </h2>
          <div className="space-y-12 max-w-[750px]">
            {[
              {
                title: "100% data coverage, 100% compliant",
                desc: "No cookies, no personal data processing, no consent required. SealMetrics operates under the GDPR legitimate interest exemption for audience measurement. Your DPO approves it. Your analytics is complete.",
              },
              {
                title: "Full application funnel visibility",
                desc: "Track the complete journey from first research visit through product comparison to application submission — across weeks and multiple devices. See where prospects drop off, which products attract the most research, and which channels drive qualified leads.",
              },
              {
                title: "EU-only data infrastructure",
                desc: "All data processed and stored exclusively in EU data centers. No transatlantic data transfers, no adequacy decision dependencies, no Schrems III risk. Your compliance team gets a clean architecture they can defend to any regulator.",
              },
              {
                title: "LENS AI for financial services",
                desc: "Application funnel anomalies, traffic drops from key segments, conversion rate shifts on product pages, and campaign performance changes — detected automatically. Spot issues before they appear in quarterly business reviews.",
              },
            ].map((item) => (
              <div key={item.title} className="pb-8 border-b border-warm-100 last:border-0">
                <h3 className="font-serif text-[1.15rem] font-medium text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.7] text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics that matter */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            Metrics that matter for financial services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Visitor journeys captured" },
              { metric: "0", label: "Cookies or personal data" },
              { metric: "EU-only", label: "Data infrastructure" },
              { metric: "0", label: "Cross-border data transfers" },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-6 bg-warm-white border border-warm-100 rounded-[4px]"
              >
                <p className="font-mono text-[2rem] font-medium text-text-primary leading-tight">
                  {item.metric}
                </p>
                <p className="text-[0.8rem] text-text-tertiary mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-warm-white text-center border-t border-warm-100">
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Complete data without compliance trade-offs.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            30-minute demo with your actual traffic. We show you the data gap
            your compliance requirements created — and how to close it.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            See Your Complete Visitor Data
          </Link>
          <p className="mt-4 text-[0.8rem] text-text-tertiary">
            Or{" "}
            <Link
              href="/data-loss-calculator"
              className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors"
            >
              calculate your data loss first
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
