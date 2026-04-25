import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { RelatedGlossaryTerms } from "@/components/ui/RelatedGlossaryTerms";
import { definedTermSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "What Is Data Loss in Analytics? — SealMetrics Glossary",
  description:
    "Data loss in analytics is the gap between actual traffic and what tools report. Typically 70-87% in the EU due to consent, ad blockers, and ITP.",
  openGraph: {
    title: "What Is Data Loss in Analytics?",
    description: "Data loss in analytics: the gap between real traffic and what tools report. Typically 70-87% in the EU.",
    type: "article",
  },
  alternates: { canonical: "https://sealmetrics.com/glossary/data-loss-in-analytics" },
};

export default function DataLossPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Glossary", href: "/glossary" }, { label: "Data Loss in Analytics" }]} />
      <JsonLd data={definedTermSchema({ name: "Data Loss in Analytics", description: "The gap between actual website traffic and what analytics tools report.", url: "/glossary/data-loss-in-analytics", related: [{ name: "Ad Blocker Impact on Analytics", url: "/glossary/ad-blocker-analytics-impact" }, { name: "Consent Management Platform (CMP)", url: "/glossary/consent-management-platform" }, { name: "Intelligent Tracking Prevention (ITP)", url: "/glossary/intelligent-tracking-prevention" }, { name: "Data Sampling", url: "/glossary/data-sampling" }, { name: "Cookieless Analytics", url: "/glossary/cookieless-analytics" }] })} />
      <JsonLd data={breadcrumbSchema([{ name: "Glossary", url: "/glossary" }, { name: "Data Loss in Analytics" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">Definition</span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">Data Loss in Analytics</h1>
        </header>
        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <p className="text-[1rem] text-text-primary font-medium">
              The gap between actual website traffic and what analytics tools report. Caused by consent rejection, ad blockers, browser restrictions, and data sampling. Typically 70-87% in the EU.
            </p>
          </div>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">The cascade of losses</h2>
          <p>Data loss in web analytics is not caused by a single factor. It is a cascade where each loss compounds on the previous one:</p>
          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px] my-6 text-[0.9rem] space-y-3">
            <div className="flex justify-between"><span className="text-text-secondary">Consent banner rejection (EU)</span><span className="font-mono text-text-primary">-55%</span></div>
            <div className="flex justify-between"><span className="text-text-secondary">Accept on page 2 (no source attribution)</span><span className="font-mono text-text-primary">65% of accepted</span></div>
            <div className="flex justify-between"><span className="text-text-secondary">Correct traffic source attribution</span><span className="font-mono text-red-alert">~16%</span></div>
            <div className="flex justify-between"><span className="text-text-secondary">Ad blocker blocking</span><span className="font-mono text-text-primary">-40%</span></div>
            <div className="flex justify-between"><span className="text-text-secondary"><Link href="/glossary/intelligent-tracking-prevention" className="text-text-primary no-underline border-b border-warm-200 pb-0.5">ITP</Link> / ETP cookie limits</span><span className="font-mono text-text-primary">-40%</span></div>
            <div className="flex justify-between"><span className="text-text-secondary"><Link href="/glossary/data-sampling" className="text-text-primary no-underline border-b border-warm-200 pb-0.5">Data sampling</Link></span><span className="font-mono text-text-primary">-25%</span></div>
            <div className="flex justify-between border-t border-warm-100 pt-3"><span className="text-text-primary font-medium">Cumulative: GA4 reports</span><span className="font-mono text-red-alert font-medium">~13% of real traffic</span></div>
          </div>
          <p>Use the <Link href="/data-loss-calculator" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">data loss calculator</Link> to see the specific numbers for your traffic and region.</p>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">The business impact</h2>
          <p>Data loss is not just a measurement problem. It directly affects <Link href="/glossary/revenue-attribution" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">revenue attribution</Link>, campaign optimization, and board reporting. When your analytics show 10,000 visitors but 70,000 actually visited, every decision built on that data is compromised.</p>
        </div>
        <RelatedGlossaryTerms slug="data-loss-in-analytics" />
        <div className="mt-10 pt-6 border-t border-warm-100">
          <p className="text-[0.85rem] text-text-tertiary">
            Learn more: <Link href="/how-it-works" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">How SealMetrics Works</Link> &middot; <Link href="/data-loss-calculator" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">Calculate Your Data Loss</Link> &middot; <Link href="/blog/what-is-data-loss-in-analytics" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">What Is Data Loss in Analytics?</Link>
          </p>
        </div>
      </div>
    </article>
    </>
  );
}
