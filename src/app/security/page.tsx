import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Security & Compliance — SealMetrics",
  description:
    "Privacy by architecture, not by policy. GDPR compliant by design with EU-only data residency, zero PII collection, and complete data isolation.",
  openGraph: {
    title: "Security & Compliance — SealMetrics",
    description:
      "Privacy by architecture, not by policy. GDPR compliant by design with EU-only data residency and zero PII collection.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/security",
  },
};

const principles = [
  {
    title: "No personal data collection",
    desc: "SealMetrics does not collect IP addresses, device fingerprints, or any data that could identify an individual. Privacy is not a setting — it is the architecture.",
  },
  {
    title: "No cookies, no consent required",
    desc: "Because SealMetrics uses first-party cookieless collection, no consent banner is required for analytics under GDPR. This eliminates both the legal burden and the UX friction.",
  },
  {
    title: "EU-only data residency",
    desc: "All data is processed and stored exclusively in European infrastructure. No data transfers outside the EU, no sub-processors in third countries, no reliance on US-EU data transfer frameworks.",
  },
  {
    title: "Data minimization by design",
    desc: "We collect only what is necessary for analytics: page URLs, referrers, browser type, screen size, and session behavior. No names, no emails, no identifiers.",
  },
];

const regulations = [
  {
    name: "GDPR (EU)",
    status: "Compliant by design",
    detail:
      "No PII collection means GDPR obligations around consent, data subject access requests, and data deletion do not apply to SealMetrics analytics data. No DPA required for the analytics layer — though we provide one for clients who need it for internal governance.",
  },
  {
    name: "ePrivacy Directive",
    status: "No consent required",
    detail:
      "Article 5(3) of the ePrivacy Directive requires consent for storing information on a user's device. SealMetrics does not store anything on the user's device — no cookies, no localStorage, no fingerprints.",
  },
  {
    name: "CCPA / CPRA (California)",
    status: "Compliant",
    detail:
      "SealMetrics does not sell personal information, does not share personal information for cross-context behavioral advertising, and does not collect sensitive personal information as defined under CCPA/CPRA.",
  },
  {
    name: "UK GDPR",
    status: "Compliant",
    detail:
      "The same privacy-by-design principles that ensure EU GDPR compliance apply equally under the UK's data protection framework. EU-only residency satisfies UK adequacy requirements.",
  },
];

const security = [
  {
    title: "Encryption in transit and at rest",
    desc: "All data is encrypted using TLS 1.3 in transit and AES-256 at rest. API communications use authenticated endpoints with token-based access control.",
  },
  {
    title: "Complete data isolation",
    desc: "Each client's data is logically isolated at the database level. No shared tables, no cross-client data access, no data commingling. No cross-customer learning or model training.",
  },
  {
    title: "Access controls and audit",
    desc: "Internal access to production data follows the principle of least privilege. All access is logged, audited, and reviewed. No engineer has routine access to client analytics data.",
  },
  {
    title: "High availability",
    desc: "Infrastructure is designed for high availability with redundancy across multiple availability zones within the EU. Monitoring and alerting run 24/7.",
  },
];

const trust = [
  {
    title: "No cross-customer learning",
    desc: "Your data is never used to train models, improve algorithms, or generate insights for other clients. What you put in is yours alone.",
  },
  {
    title: "No third-party data sharing",
    desc: "SealMetrics does not share client data with any third party. No advertising partners, no data brokers, no analytics aggregators.",
  },
  {
    title: "Transparent data processing",
    desc: "We document exactly what data we collect, how we process it, and where it is stored. No black boxes, no hidden processing.",
  },
  {
    title: "Right to data portability",
    desc: "Export your complete dataset at any time via BigQuery integration or API. Your data is yours — we make it easy to take it with you.",
  },
];

const securityFaqs = [
  {
    q: "Does SealMetrics require a consent banner?",
    a: "No. SealMetrics does not use cookies, localStorage, or any form of device storage, and it collects no personal data (no IP addresses, no device IDs, no user identifiers). Under GDPR and the ePrivacy Directive, consent is only required when personal data is collected or information is stored on the user's device. SealMetrics does neither.",
  },
  {
    q: "Is SealMetrics GDPR compliant?",
    a: "Yes, by architecture. GDPR applies to the processing of personal data. SealMetrics does not collect personal data — no IP addresses, no device fingerprints, no user identifiers. The data SealMetrics processes (page URLs, referrers, browser type, screen size, session behavior) does not constitute personal data under GDPR Article 4(1).",
  },
  {
    q: "Does SealMetrics transfer data outside the EU?",
    a: "No. All data is processed and stored exclusively on EU servers. There are no sub-processors in third countries, no US-based cloud infrastructure, and no reliance on Standard Contractual Clauses, adequacy decisions, or other cross-border transfer mechanisms.",
  },
  {
    q: "What personal data does SealMetrics collect?",
    a: "None. SealMetrics collects page URLs, referrer URLs, browser type, operating system, screen resolution, language, session duration, and scroll depth. It does not collect IP addresses, device fingerprints, user IDs, email addresses, or any data that could identify an individual.",
  },
  {
    q: "How does SealMetrics comply with the ePrivacy Directive?",
    a: "Article 5(3) of the ePrivacy Directive requires consent for storing or accessing information on a user's device. SealMetrics does not store anything on the user's device — no cookies, no localStorage, no fingerprints. This means the ePrivacy consent requirement does not apply.",
  },
  {
    q: "Can my DPO verify compliance?",
    a: "Yes. We provide a Data Processing Agreement (DPA), detailed technical documentation of our data collection methods, a list of all data points collected, and our infrastructure architecture. We also publish self-assessments against CNIL and UK PECR criteria.",
  },
  {
    q: "Is there a Data Processing Agreement?",
    a: "Yes. A DPA is available for all clients, even though SealMetrics analytics data does not contain personal data. Many organizations require a DPA as part of their internal governance, and we provide one that documents our data processing practices, security measures, and sub-processor list.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Security" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Security", url: "/security" }])} />
      <JsonLd data={faqSchema(securityFaqs.map((f) => ({ question: f.q, answer: f.a })))} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Security & Compliance
            </span>
            <h1 className="headline-hero mb-8">
              Privacy by architecture, not by policy.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary mb-10">
              SealMetrics does not collect personal data. Compliance is not a
              configuration option&nbsp;&mdash; it is the foundation of how the
              platform works. Your DPO will appreciate the simplicity, and you can read why{" "}
              <Link
                href="/for/cto"
                className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors"
              >
                engineering teams approve SealMetrics
              </Link>{" "}
              without the usual security review friction.
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <Link
                href="/demo"
                className="inline-flex items-center px-7 py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center px-7 py-3.5 text-[0.95rem] text-text-secondary border border-warm-200 rounded-[4px] no-underline hover:border-text-body hover:text-text-primary transition-colors"
              >
                See Full Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Core principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {principles.map((p) => (
              <div
                key={p.title}
                className="p-8 border border-warm-100 rounded-[4px] bg-warm-white"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {p.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulations */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Regulatory compliance</h2>
          <div className="space-y-6">
            {regulations.map((r) => (
              <div
                key={r.name}
                className="p-8 bg-white border border-warm-100 rounded-[4px]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-3">
                  <h3 className="font-serif text-[1.1rem] font-medium text-text-primary">
                    {r.name}
                  </h3>
                  <span className="text-[0.75rem] font-medium tracking-[0.04em] uppercase text-green-muted">
                    {r.status}
                  </span>
                </div>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {r.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Security */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Infrastructure security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {security.map((s) => (
              <div
                key={s.title}
                className="p-8 border border-warm-100 rounded-[4px] bg-warm-white"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {s.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Architecture */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Trust architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {trust.map((t) => (
              <div
                key={t.title}
                className="p-8 bg-white border border-warm-100 rounded-[4px]"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {t.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {securityFaqs.map((faq) => (
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
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Questions about compliance?
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            We are happy to discuss your specific regulatory requirements and
            provide documentation for your internal review.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Contact Us
          </Link>
          <p className="mt-4 text-[0.8rem] text-text-tertiary">
            We provide DPAs, security questionnaire responses, and technical
            documentation.
          </p>
        </div>
      </section>
    </>
  );
}
