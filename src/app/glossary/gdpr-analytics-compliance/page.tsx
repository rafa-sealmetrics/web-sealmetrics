import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR Analytics Compliance — SealMetrics Glossary",
  description:
    "What GDPR requires from web analytics: lawful basis, data minimization, purpose limitation, and consent for cookie-based tracking.",
  openGraph: {
    title: "GDPR Analytics Compliance",
    description: "What GDPR requires from web analytics: lawful basis, data minimization, and consent for cookies.",
    type: "article",
  },
  alternates: { canonical: "https://sealmetrics.com/glossary/gdpr-analytics-compliance" },
};

export default function GDPRCompliancePage() {
  return (
    <article className="pt-40 pb-28 bg-white">
      <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <nav className="flex items-center gap-2 text-[0.8rem] text-text-tertiary mb-10">
          <Link href="/glossary" className="no-underline hover:text-text-primary transition-colors">Glossary</Link>
          <span>/</span>
          <span className="text-text-secondary">Privacy</span>
        </nav>
        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">Definition</span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">GDPR Analytics Compliance</h1>
        </header>
        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <p className="text-[1rem] text-text-primary font-medium">
              Meeting GDPR requirements for web analytics: lawful basis for processing, data minimization, purpose limitation, and — if using cookies — valid consent collection before tracking.
            </p>
          </div>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">GDPR requirements for analytics</h2>
          <p>The General Data Protection Regulation (GDPR) applies to any processing of personal data of EU residents. For web analytics, the key requirements are:</p>
          <ul className="space-y-2 pl-0 list-none">
            {[
              "Lawful basis — typically consent (Article 6(1)(a)) for cookie-based tracking, or legitimate interest for non-personal data collection",
              "Data minimization — collect only what is necessary for the stated purpose",
              "Purpose limitation — use the data only for the declared analytics purpose",
              "Storage limitation — define and enforce data retention periods",
              "Data subject rights — facilitate access, rectification, erasure requests",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.95rem]">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                {item}
              </li>
            ))}
          </ul>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">The ePrivacy layer</h2>
          <p>Beyond GDPR, the ePrivacy Directive (Article 5(3)) requires consent before accessing or storing information on a user&rsquo;s device — which includes setting cookies. This is why <Link href="/glossary/consent-management-platform" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">consent management platforms</Link> are required for cookie-based analytics.</p>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Compliance by architecture</h2>
          <p><Link href="/glossary/cookieless-analytics" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">Cookieless analytics</Link> approaches compliance differently. By collecting no personal data and storing nothing on the visitor&rsquo;s device, the consent requirement under ePrivacy does not apply, and GDPR obligations are minimal. This is consistent with guidance from CNIL (France), DSK (Germany), and other EU data protection authorities on audience measurement exemptions.</p>
        </div>
        <div className="mt-16 pt-10 border-t border-warm-100">
          <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">Related terms</h3>
          <div className="space-y-3">
            <Link href="/glossary/consent-management-platform" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Consent Management Platform (CMP)</Link>
            <Link href="/glossary/cookieless-analytics" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Cookieless Analytics</Link>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-warm-100">
          <p className="text-[0.85rem] text-text-tertiary">
            Learn more: <Link href="/security" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">Security & Privacy Architecture</Link> &middot; <Link href="/for/dpo" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">SealMetrics for DPOs</Link>
          </p>
        </div>
      </div>
    </article>
  );
}
