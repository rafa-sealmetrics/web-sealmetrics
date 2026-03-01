import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { definedTermSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "What Is a Consent Management Platform (CMP)?",
  description:
    "A CMP displays cookie consent banners and manages user preferences. Required under GDPR for cookie-based analytics. 35% of EU visitors reject.",
  openGraph: {
    title: "What Is a Consent Management Platform (CMP)?",
    description: "A CMP displays cookie consent banners and manages user preferences. 35% of EU visitors reject.",
    type: "article",
  },
  alternates: { canonical: "https://sealmetrics.com/glossary/consent-management-platform" },
};

export default function ConsentManagementPlatformPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Glossary", href: "/glossary" }, { label: "Consent Management Platform" }]} />
      <JsonLd data={definedTermSchema({ name: "Consent Management Platform", description: "Software that manages cookie consent banners and user privacy preferences.", url: "/glossary/consent-management-platform" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Glossary", url: "/glossary" }, { name: "Consent Management Platform" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">Definition</span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">Consent Management Platform (CMP)</h1>
        </header>
        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <p className="text-[1rem] text-text-primary font-medium">
              Software that displays cookie consent banners and manages user preferences. Required under GDPR and ePrivacy Directive for websites that use cookies or collect personal data through analytics.
            </p>
          </div>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">The analytics cost of consent</h2>
          <p>CMPs are legally necessary for cookie-based analytics, but they create a fundamental measurement problem: visitors who reject cookies become invisible to analytics. In the EU, approximately 35% of visitors decline — and in privacy-conscious markets like Germany, the rate exceeds 50%.</p>
          <p>This creates a systematic bias in your data. Your analytics over-represent the cookie-accepting segment and entirely miss the privacy-conscious segment, which often includes higher-value visitors.</p>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">The alternative</h2>
          <p><Link href="/glossary/cookieless-analytics" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">Cookieless analytics</Link> does not require a CMP for its operation because it does not use cookies or collect personal data. This eliminates the consent rejection data loss vector entirely while maintaining full <Link href="/glossary/gdpr-analytics-compliance" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">GDPR compliance</Link>.</p>
        </div>
        <div className="mt-16 pt-10 border-t border-warm-100">
          <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">Related terms</h3>
          <div className="space-y-3">
            <Link href="/glossary/gdpr-analytics-compliance" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">GDPR Analytics Compliance</Link>
            <Link href="/glossary/data-loss-in-analytics" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Data Loss in Analytics</Link>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-warm-100">
          <p className="text-[0.85rem] text-text-tertiary">
            Learn more: <Link href="/blog/consent-banner-impact-on-analytics" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">How Consent Banners Destroy Your Analytics Data</Link>
          </p>
        </div>
      </div>
    </article>
    </>
  );
}
