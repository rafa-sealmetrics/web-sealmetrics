import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { definedTermSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "What Is Data Sampling in Analytics? — SealMetrics Glossary",
  description:
    "Data sampling is when analytics tools analyze a subset of data and extrapolate. Learn how it affects GA4 reporting and decision accuracy.",
  openGraph: {
    title: "What Is Data Sampling in Analytics?",
    description: "Data sampling analyzes a subset of data and extrapolates. Learn how it affects GA4 reporting.",
    type: "article",
  },
  alternates: { canonical: "https://sealmetrics.com/glossary/data-sampling" },
};

export default function DataSamplingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Glossary", href: "/glossary" }, { label: "Data Sampling" }]} />
      <JsonLd data={definedTermSchema({ name: "Data Sampling", description: "A technique where analytics tools analyze a subset of data and extrapolate results.", url: "/glossary/data-sampling" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Glossary", url: "/glossary" }, { name: "Data Sampling" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">

        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">Definition</span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">Data Sampling</h1>
        </header>

        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <p className="text-[1rem] text-text-primary font-medium">
              A technique where analytics tools analyze a subset of data and extrapolate results to the full dataset. Introduces estimation error that grows with the degree of sampling applied.
            </p>
          </div>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">How sampling works in GA4</h2>
          <p>
            When you create exploration reports in GA4 that query large volumes of data, Google may analyze only a portion of events and use statistical methods to estimate the full result. The free version of GA4 has lower sampling thresholds than GA360, meaning sampling activates sooner for most businesses.
          </p>
          <p>
            Google indicates when sampling is active through a shield icon in exploration reports. Standard reports use a different methodology Google calls &ldquo;blended data,&rdquo; which combines observed and modeled data.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Why it matters</h2>
          <p>
            For high-level trends, sampling may be acceptable. For specific analyses — campaign performance by segment, conversion path analysis, <Link href="/glossary/revenue-attribution" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">revenue attribution</Link> by creative — the margin of error can lead to wrong conclusions and misallocated budgets.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">The alternative: full-resolution analytics</h2>
          <p>
            <Link href="/glossary/cookieless-analytics" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">Cookieless analytics</Link> platforms like SealMetrics record every session individually with no sampling applied. When you see 72,847 visitors, that number represents 72,847 actual sessions — not a statistical estimate.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-warm-100">
          <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">Related terms</h3>
          <div className="space-y-3">
            <Link href="/glossary/data-loss-in-analytics" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Data Loss in Analytics</Link>
            <Link href="/glossary/cookieless-analytics" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Cookieless Analytics</Link>
            <Link href="/glossary/event-tracking" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Event Tracking</Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-warm-100">
          <p className="text-[0.85rem] text-text-tertiary">
            Learn more: <Link href="/blog/ga4-data-sampling-problem" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">GA4 Data Sampling: Why Your Traffic Numbers Are Wrong</Link> &middot; <Link href="/product" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">SealMetrics Product</Link>
          </p>
        </div>
      </div>
    </article>
    </>
  );
}
