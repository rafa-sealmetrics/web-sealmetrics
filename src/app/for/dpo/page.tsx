import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SealMetrics for DPOs — GDPR Analytics by Design",
  description:
    "No cookies, no PII, no consent dependency, EU-only infrastructure. SealMetrics is the analytics platform your privacy team will sign off on.",
  openGraph: {
    title: "SealMetrics for DPOs",
    description:
      "No cookies, no PII, EU-only infrastructure. Analytics your privacy team will approve.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/for/dpo",
  },
};

export default function ForDPOPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For DPOs" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For DPOs", url: "/for/dpo" }])} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              For DPOs
            </span>
            <h1 className="headline-hero mb-8">
              Analytics that do not require a DPIA.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              No cookies. No personal data. No cross-border transfers. EU-only
              infrastructure. SealMetrics is designed so that the privacy
              assessment is straightforward&nbsp;&mdash; because there is nothing
              problematic to assess.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy architecture */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Privacy by architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                title: "No cookies",
                desc: "SealMetrics does not set, read, or rely on cookies of any kind — first-party or third-party. This eliminates the primary trigger for consent requirements under ePrivacy and GDPR cookie guidance.",
              },
              {
                title: "No personal data collection",
                desc: "No IP addresses stored, no device fingerprinting, no user IDs, no email hashes. The data SealMetrics collects is behavioral and aggregated. Individual visitors cannot be identified, re-identified, or tracked across sites.",
              },
              {
                title: "EU-only infrastructure",
                desc: "All data processing, storage, and backup occurs within the European Union. No sub-processors outside the EU, no reliance on Standard Contractual Clauses, no dependency on US-EU adequacy framework decisions.",
              },
              {
                title: "No consent dependency",
                desc: "Because SealMetrics does not collect personal data or use cookies, consent banner status does not affect data collection. This is not a workaround — it is a consequence of the architecture. No personal data means no consent requirement for analytics.",
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

      {/* Regulatory alignment */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Regulatory alignment</h2>
          <div className="space-y-8 max-w-[750px]">
            {[
              {
                regulation: "GDPR (Regulation 2016/679)",
                status: "Compliant by design",
                detail:
                  "No personal data processing as defined under Article 4(1). No profiling, no automated individual decision-making, no data subject identification capability.",
              },
              {
                regulation: "ePrivacy Directive (2002/58/EC)",
                status: "No consent trigger",
                detail:
                  "No terminal equipment access (no cookies, no local storage, no device fingerprinting). Article 5(3) consent requirement does not apply.",
              },
              {
                regulation: "Schrems II / US-EU Data Transfers",
                status: "Not applicable",
                detail:
                  "All infrastructure within EU jurisdiction. No data transfers to third countries. No reliance on SCCs, BCRs, or adequacy decisions.",
              },
              {
                regulation: "CNIL / French DPA guidance",
                status: "Aligned",
                detail:
                  "Consistent with CNIL exemption criteria for audience measurement tools that do not require consent when properly configured.",
              },
              {
                regulation: "DSK / German DPA guidance",
                status: "Aligned",
                detail:
                  "Meets German DPA requirements for analytics without consent: no cross-site tracking, no personal data, EU-only processing.",
              },
            ].map((item) => (
              <div
                key={item.regulation}
                className="pb-6 border-b border-warm-100 last:border-0"
              >
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 className="font-serif text-[1rem] font-medium text-text-primary">
                    {item.regulation}
                  </h3>
                  <span className="text-[0.75rem] font-medium text-green-muted uppercase tracking-wider">
                    {item.status}
                  </span>
                </div>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust architecture */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Trust architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                title: "No cross-customer data sharing",
                desc: "Each client's data is isolated. There is no aggregation across clients, no shared models, no benchmarking that could leak competitive information.",
              },
              {
                title: "Data portability",
                desc: "Clients own their data. Full export capability in standard formats at any time. No vendor lock-in through data access restrictions.",
              },
              {
                title: "Transparent processing",
                desc: "We document exactly what data is collected, how it is processed, and where it is stored. No black-box algorithms, no opaque data flows.",
              },
              {
                title: "DPA available",
                desc: "Standard Data Processing Agreement available for all plans. Custom DPA negotiation available on Enterprise tier. Security questionnaire responses provided on request.",
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

      {/* CTA */}
      <section className="py-28 bg-warm-white text-center border-t border-warm-100">
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Review the full privacy architecture.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            We are happy to walk your privacy team through the technical
            architecture, data flows, and compliance documentation.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Book a Privacy Review
          </Link>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-[0.8rem] text-text-tertiary">
            <Link
              href="/security"
              className="no-underline border-b border-warm-200 pb-0.5 text-text-secondary hover:text-text-primary transition-colors"
            >
              Security architecture
            </Link>
            <Link
              href="/dpa"
              className="no-underline border-b border-warm-200 pb-0.5 text-text-secondary hover:text-text-primary transition-colors"
            >
              Data Processing Agreement
            </Link>
            <Link
              href="/privacy"
              className="no-underline border-b border-warm-200 pb-0.5 text-text-secondary hover:text-text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
