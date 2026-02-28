import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security & Compliance — SealMetrics",
  description:
    "Privacy by architecture, not by policy. GDPR compliant by design with EU-only data residency and zero PII collection.",
};

const principles = [
  {
    title: "No personal data collection",
    desc: "SealMetrics does not collect IP addresses, device fingerprints, or any data that could identify an individual visitor. Privacy is not a setting — it is the architecture.",
  },
  {
    title: "No cookies, no consent required",
    desc: "Because SealMetrics uses first-party server-side collection without cookies, no consent banner is required for analytics under GDPR. This eliminates both the legal burden and the user experience friction.",
  },
  {
    title: "EU-only data residency",
    desc: "All data is processed and stored exclusively in European infrastructure. There are no data transfers outside the EU, no sub-processors in third countries, and no reliance on US-EU data transfer frameworks.",
  },
  {
    title: "Data minimization by design",
    desc: "We collect only what is necessary for analytics: page URLs, referrers, browser type, screen size, and session behavior. No names, no emails, no identifiers. The data we collect cannot be used to identify any individual.",
  },
];

const regulations = [
  {
    name: "GDPR",
    status: "Compliant by design",
    detail:
      "No PII collection means GDPR obligations around consent, data subject access requests, and data deletion do not apply to SealMetrics data.",
  },
  {
    name: "ePrivacy Directive",
    status: "No consent required",
    detail:
      "Article 5(3) of the ePrivacy Directive requires consent for storing information on a user's device. SealMetrics does not store anything on the user's device.",
  },
  {
    name: "CCPA / CPRA",
    status: "Compliant",
    detail:
      "SealMetrics does not sell personal information, does not share personal information for cross-context behavioral advertising, and does not collect sensitive personal information.",
  },
  {
    name: "UK GDPR",
    status: "Compliant",
    detail:
      "The same privacy-by-design principles that ensure GDPR compliance apply equally under the UK's data protection framework.",
  },
];

const security = [
  {
    title: "Encrypted in transit and at rest",
    desc: "All data is encrypted using TLS 1.3 in transit and AES-256 at rest. API communications use authenticated endpoints with token-based access.",
  },
  {
    title: "Infrastructure isolation",
    desc: "Each client's data is logically isolated at the database level. No shared tables, no cross-client data access, no data commingling.",
  },
  {
    title: "Access controls",
    desc: "Internal access to production data follows the principle of least privilege. All access is logged, audited, and reviewed regularly.",
  },
  {
    title: "Uptime and reliability",
    desc: "Our infrastructure is designed for high availability with redundancy across multiple availability zones within the EU.",
  },
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Security & Compliance
            </span>
            <h1 className="headline-hero mb-8">
              Privacy by architecture, not by policy.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              SealMetrics does not collect personal data. Compliance is not a
              configuration option&nbsp;&mdash; it is the foundation of how the
              platform works.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="headline-section mb-12">Core principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {principles.map((p) => (
              <div
                key={p.title}
                className="p-8 border border-warm-100 rounded-[4px]"
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
        <div className="max-w-[1200px] mx-auto px-8">
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

      {/* Security */}
      <section className="section-dark py-28 bg-dark-bg">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="headline-section mb-12">Infrastructure security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {security.map((s) => (
              <div
                key={s.title}
                className="p-8 border border-dark-border rounded-[4px] bg-dark-card"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-dark-text mb-3">
                  {s.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-dark-text-secondary">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="transition-to-light" />
      <section className="py-20 bg-white text-center">
        <div className="max-w-[500px] mx-auto px-8">
          <h2 className="headline-section mb-4">Questions about compliance?</h2>
          <p className="text-[1rem] leading-[1.7] text-text-secondary mb-8">
            We are happy to discuss your specific regulatory requirements.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-7 py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
