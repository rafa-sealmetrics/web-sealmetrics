import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SealMetrics for Healthcare — Complete Patient Journey Analytics",
  description:
    "Healthcare faces the highest privacy bar in Europe. SealMetrics captures 100% of visitor journeys without cookies or personal data — GDPR compliant.",
  openGraph: {
    title: "SealMetrics for Healthcare",
    description:
      "Complete analytics for healthcare providers. 100% visitor journeys captured, zero personal data processed, EU-only infrastructure.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/for/healthcare",
  },
};

export default function ForHealthcarePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For Healthcare" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For Healthcare", url: "/for/healthcare" }])} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              For Healthcare
            </span>
            <h1 className="headline-hero mb-8">
              Patient privacy is non-negotiable. Complete analytics should not be the cost.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Healthcare websites handle the most sensitive visitor intent in
              any industry. Consent rejection rates reach 80-90%. Your{" "}
              <Link href="/glossary/gdpr-analytics-compliance" className="text-text-secondary border-b border-warm-200 pb-0.5 no-underline hover:text-text-primary transition-colors">
                GDPR compliance
              </Link>{" "}
              is essential — but it should not mean operating with 10-20% of
              your visitor data. SealMetrics is built on{" "}
              <Link href="/security" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">privacy-first EU infrastructure</Link>{" "}
              that captures 100% without processing personal data.
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
                title: "Privacy requirements create a data vacuum",
                desc: "Your compliance team mandates strict consent implementation — rightly so. But the result is 80-90% of visitors rejecting cookies. You are compliant and nearly blind. Service page performance, appointment funnels, and campaign ROI are measured on a sliver of traffic.",
              },
              {
                title: "Appointment funnel optimization is impossible",
                desc: "How many visitors research a specialist, compare services, and then book an appointment? When 80-90% of those journeys are invisible, you cannot identify drop-off points, optimize the booking flow, or measure which services drive the most demand.",
              },
              {
                title: "Third-party tools create regulatory exposure",
                desc: "Every analytics tool that transfers data to US servers is a compliance risk in healthcare. Patient browsing patterns — which conditions they research, which specialists they view — are sensitive data. US-hosted analytics creates liability your DPO cannot accept.",
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
                title: "100% data, zero personal data processed",
                desc: "SealMetrics captures every session and page interaction without cookies, without personal data, and without consent requirements. Your privacy standards remain the highest in any industry — and your analytics is finally complete.",
              },
              {
                title: "Complete appointment funnel visibility",
                desc: "Track the full journey from symptom research through specialist comparison to appointment booking — across every visitor. Identify where patients drop off, which services generate the most interest, and where the booking flow creates friction.",
              },
              {
                title: "EU-only infrastructure, no exceptions",
                desc: "All data processed and stored exclusively in EU data centers. No transatlantic transfers, no data processing agreements with US entities, no regulatory grey areas. An architecture your DPO and legal team can confidently defend.",
              },
              {
                title: "LENS AI for healthcare",
                desc: "Appointment funnel anomalies, service page traffic shifts, booking completion rate changes, and referral source drops — detected automatically. Identify operational issues before they impact patient access or service utilization.",
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
            Metrics that matter for healthcare
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Visitor journeys captured" },
              { metric: "0", label: "Personal data processed" },
              { metric: "EU-only", label: "Data infrastructure" },
              { metric: "0", label: "Cross-border transfers" },
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
            Complete analytics, zero privacy compromise.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            30-minute demo with your actual traffic. We show you the data gap
            your privacy requirements created — and how to close it without
            any compliance trade-offs.
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
