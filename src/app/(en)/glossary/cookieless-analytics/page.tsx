import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { definedTermSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "What Is Cookieless Analytics? — SealMetrics Glossary",
  description:
    "Cookieless analytics captures visitor data without browser cookies, enabling 100% traffic measurement. Learn how it works and why it matters.",
  openGraph: {
    title: "What Is Cookieless Analytics?",
    description: "Cookieless analytics captures visitor data without cookies, enabling 100% traffic measurement.",
    type: "article",
  },
  alternates: { canonical: "https://sealmetrics.com/glossary/cookieless-analytics" },
};

export default function CookielessAnalyticsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Glossary", href: "/glossary" }, { label: "Cookieless Analytics" }]} />
      <JsonLd data={definedTermSchema({ name: "Cookieless Analytics", description: "Web analytics that captures visitor data without using browser cookies.", url: "/glossary/cookieless-analytics" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Glossary", url: "/glossary" }, { name: "Cookieless Analytics" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">

        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">Definition</span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">Cookieless Analytics</h1>
        </header>

        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <p className="text-[1rem] text-text-primary font-medium">
              Web analytics that captures visitor data without using browser cookies, enabling 100% traffic measurement regardless of consent status or browser restrictions.
            </p>
          </div>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">How it works</h2>
          <p>
            Traditional analytics tools (like GA4) rely on cookies — small text files stored in the visitor&rsquo;s browser — to identify returning visitors, track sessions, and build user journeys. Cookieless analytics replaces this mechanism with <Link href="/glossary/first-party-data-collection" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">first-party data collection</Link> that operates without any identifiers on the visitor&rsquo;s device.
          </p>
          <p>
            Instead of storing identifiers on the visitor&rsquo;s device, cookieless analytics processes behavioral data at the server level, on your own domain. The data path is first-party (your domain to your server), which means it is not blocked by ad blockers, not affected by browser cookie restrictions like <Link href="/glossary/intelligent-tracking-prevention" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">ITP</Link>, and not dependent on consent banners.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Why it matters</h2>
          <p>
            In the EU, cookie-based analytics capture approximately 13% of actual traffic due to consent rejection (55%), ad blockers (40%), and browser restrictions. Cookieless analytics eliminates all three loss vectors, capturing 100% of real visitor activity.
          </p>
          <p>
            This is not a marginal improvement — it is the difference between making decisions on a statistical fragment and making decisions on complete data.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Privacy implications</h2>
          <p>
            Cookieless analytics achieves <Link href="/glossary/gdpr-analytics-compliance" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">GDPR compliance</Link> by architecture: no personal data is collected, no cookies are stored, and no consent is required for the analytics to function. This is consistent with CNIL (French DPA) exemption criteria for audience measurement tools.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-warm-100">
          <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">Related terms</h3>
          <div className="space-y-3">
            <Link href="/glossary/first-party-data-collection" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">First-Party Data Collection</Link>
            <Link href="/glossary/server-side-tracking" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Server-Side Tracking</Link>
            <Link href="/glossary/data-loss-in-analytics" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Data Loss in Analytics</Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-warm-100">
          <p className="text-[0.85rem] text-text-tertiary">
            Learn more: <Link href="/blog/cookieless-analytics-explained" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">Cookieless Analytics Explained</Link> &middot; <Link href="/how-it-works" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">How SealMetrics Works</Link>
          </p>
        </div>
      </div>
    </article>
    </>
  );
}
