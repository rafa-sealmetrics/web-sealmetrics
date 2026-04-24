import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "SealMetrics for CTOs — EU-Only, Privacy-First",
  description:
    "846-byte script, <50ms load, EU-only infrastructure, no cookies, no PII. The analytics platform your engineering team will actually approve.",
  openGraph: {
    title: "SealMetrics for CTOs",
    description:
      "846-byte script, EU-only infrastructure, no cookies. Analytics your engineering team will approve.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/for/cto",
    languages: getAlternates("/for/cto"),
  },
};

export default function ForCTOPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For CTOs" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For CTOs", url: "/for/cto" }])} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics for CTOs", description: "846-byte script, <50ms load, EU-only infrastructure, no cookies, no PII. The analytics platform your engineering team will actually approve.", url: "/for/cto", audience: "Chief Technology Officers" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              For CTOs
            </span>
            <h1 className="headline-hero mb-8">
              Analytics that your engineering team will not fight.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              An 846-byte script. Sub-50ms load. EU-only infrastructure. No cookies,
              no PII, no consent management headaches. One line of code to
              install, zero ongoing engineering maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Technical specs */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Technical specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                title: "Minimal footprint",
                specs: [
                  "Script size: 846 bytes gzipped",
                  "Load time: <50ms on 3G",
                  "Zero external dependencies",
                  "No impact on Core Web Vitals",
                  "Async loading, non-blocking",
                ],
              },
              {
                title: "First-party architecture",
                specs: [
                  "Runs on your domain as first-party",
                  "First-party cookieless collection",
                  "No third-party requests",
                  "Invisible to ad blockers",
                  "No client-side cookie storage",
                ],
              },
              {
                title: "Infrastructure",
                specs: [
                  "EU-only data processing and storage",
                  "No sub-processors outside EU",
                  "No US-EU data transfer mechanisms needed",
                  "Real-time processing, no batch delays",
                  "99.9% uptime SLA on Scale and Enterprise",
                ],
              },
              {
                title: "Integration",
                specs: [
                  "One-line script installation",
                  "REST API for custom integrations",
                  "Webhooks for real-time event forwarding",
                  "Native integrations: GA4, Shopify, WooCommerce",
                  "No ongoing engineering maintenance required",
                ],
              },
            ].map((section) => (
              <div
                key={section.title}
                className="p-8 bg-warm-white border border-warm-100 rounded-[4px]"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-1.5">
                  {section.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-3 text-[0.85rem] text-text-body"
                    >
                      <span className="text-text-tertiary shrink-0">
                        &mdash;
                      </span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CTOs approve */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            Why engineering teams approve SealMetrics
          </h2>
          <div className="space-y-12 max-w-[750px]">
            {[
              {
                title: "No consent management complexity",
                desc: "SealMetrics does not use cookies and does not collect personal data. Your team does not need to build, maintain, or debug consent management platforms. No cookie banners to implement, no consent state to synchronize across services.",
              },
              {
                title: "No performance regression",
                desc: "At 846 bytes gzipped with sub-50ms load time, SealMetrics has zero measurable impact on Core Web Vitals. Compare this to GA4 (45KB+ with gtag.js) or Adobe Analytics (100KB+). Your Lighthouse scores stay exactly where they are.",
              },
              {
                title: "No data pipeline to maintain",
                desc: "Traditional enterprise analytics require ETL pipelines, BigQuery exports, scheduled queries, and data warehouse integration. SealMetrics processes and serves complete data directly. No engineering time spent maintaining analytics infrastructure.",
              },
              {
                title: "Compliance by architecture",
                desc: "Privacy compliance is not a configuration option — it is how the system works. No PII is collected, no cookies are stored, no data leaves the EU. Your DPO signs off once and does not need to revisit.",
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

      {/* Quick comparison */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-10">Engineering overhead comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[0.85rem]">
              <thead>
                <tr className="border-b border-warm-200">
                  <th className="text-left py-3 pr-6 text-text-tertiary font-medium">
                    Concern
                  </th>
                  <th className="text-left py-3 px-6 text-green-muted font-medium">
                    SealMetrics
                  </th>
                  <th className="text-left py-3 px-6 text-text-secondary font-medium">
                    GA4 / GA360
                  </th>
                  <th className="text-left py-3 pl-6 text-text-secondary font-medium">
                    Adobe Analytics
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    concern: "Script size",
                    sm: "846B",
                    ga: "45KB+",
                    adobe: "100KB+",
                  },
                  {
                    concern: "Installation",
                    sm: "1 line",
                    ga: "Multi-step + consent",
                    adobe: "Days of configuration",
                  },
                  {
                    concern: "Consent management",
                    sm: "Not needed",
                    ga: "Required (CMP)",
                    adobe: "Required (CMP)",
                  },
                  {
                    concern: "Data pipeline",
                    sm: "None",
                    ga: "BigQuery export + ETL",
                    adobe: "Data feeds + ETL",
                  },
                  {
                    concern: "Ongoing maintenance",
                    sm: "Zero",
                    ga: "Monthly",
                    adobe: "Weekly",
                  },
                  {
                    concern: "Core Web Vitals impact",
                    sm: "None measurable",
                    ga: "Moderate",
                    adobe: "Significant",
                  },
                ].map((row) => (
                  <tr
                    key={row.concern}
                    className="border-b border-warm-100 last:border-0"
                  >
                    <td className="py-3 pr-6 text-text-body">{row.concern}</td>
                    <td className="py-3 px-6 text-text-primary font-medium">
                      {row.sm}
                    </td>
                    <td className="py-3 px-6 text-text-secondary">{row.ga}</td>
                    <td className="py-3 pl-6 text-text-secondary">
                      {row.adobe}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-warm-white text-center border-t border-warm-100">
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            See the technical implementation.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            30-minute technical walkthrough. We cover architecture,
            implementation, and data flow.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Book a Technical Demo
          </Link>
          <p className="mt-4 text-[0.8rem] text-text-tertiary">
            Or{" "}
            <Link
              href="/security"
              className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors"
            >
              review our security architecture
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
