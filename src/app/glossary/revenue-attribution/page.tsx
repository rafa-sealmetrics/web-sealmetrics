import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { definedTermSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "What Is Revenue Attribution? — SealMetrics Glossary",
  description:
    "Revenue attribution connects purchases and conversions to the marketing channels that influenced them. Requires complete visitor journey data for accuracy.",
  openGraph: {
    title: "What Is Revenue Attribution?",
    description: "Revenue attribution connects purchases to marketing channels. Requires complete data for accuracy.",
    type: "article",
  },
  alternates: { canonical: "https://sealmetrics.com/glossary/revenue-attribution" },
};

export default function RevenueAttributionPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Glossary", href: "/glossary" }, { label: "Revenue Attribution" }]} />
      <JsonLd data={definedTermSchema({ name: "Revenue Attribution", description: "Connecting revenue events to the marketing channels that influenced them.", url: "/glossary/revenue-attribution" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Glossary", url: "/glossary" }, { name: "Revenue Attribution" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">Definition</span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">Revenue Attribution</h1>
        </header>
        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <p className="text-[1rem] text-text-primary font-medium">
              The process of connecting revenue events (purchases, subscriptions) to the marketing channels and campaigns that influenced them. Requires complete visitor journey data for accuracy.
            </p>
          </div>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">How it works</h2>
          <p>Revenue attribution tracks the full visitor journey from first touch to purchase and assigns credit to each marketing touchpoint along the way. This can use <Link href="/glossary/multi-touch-attribution" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">multi-touch attribution</Link> models (linear, time-decay, position-based, or data-driven) to distribute revenue across channels, campaigns, and creatives.</p>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">The data completeness requirement</h2>
          <p>Revenue attribution is uniquely sensitive to <Link href="/glossary/data-loss-in-analytics" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">data loss</Link>. If your analytics miss 87% of visitor touchpoints, your attribution model assigns revenue credit based on a fragment of the real journey. The typical result: direct traffic is inflated, top-of-funnel channels are undervalued, and budget allocation follows the bias.</p>
          <p>SealMetrics provides revenue attribution built on 100% of traffic data. Because every session is captured through <Link href="/glossary/cookieless-analytics" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">cookieless analytics</Link>, the attribution reflects what actually happened — not what the cookie-accepting segment suggests.</p>
        </div>
        <div className="mt-16 pt-10 border-t border-warm-100">
          <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">Related terms</h3>
          <div className="space-y-3">
            <Link href="/glossary/multi-touch-attribution" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Multi-Touch Attribution</Link>
            <Link href="/glossary/data-loss-in-analytics" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Data Loss in Analytics</Link>
            <Link href="/glossary/attribution-model" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Attribution Model</Link>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-warm-100">
          <p className="text-[0.85rem] text-text-tertiary">
            Learn more: <Link href="/blog/multi-touch-attribution-complete-data" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">Why Multi-Touch Attribution Fails Without Complete Data</Link> &middot; <Link href="/product" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">SealMetrics Revenue Attribution</Link>
          </p>
        </div>
      </div>
    </article>
    </>
  );
}
