import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Multi-Touch Attribution? — SealMetrics Glossary",
  description:
    "Multi-touch attribution distributes conversion credit across all touchpoints in a customer journey. Requires complete data to function accurately.",
  openGraph: {
    title: "What Is Multi-Touch Attribution?",
    description: "Multi-touch attribution distributes conversion credit across all touchpoints in a customer journey.",
    type: "article",
  },
  alternates: { canonical: "https://sealmetrics.com/glossary/multi-touch-attribution" },
};

export default function MultiTouchAttributionPage() {
  return (
    <article className="pt-40 pb-28 bg-white">
      <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <nav className="flex items-center gap-2 text-[0.8rem] text-text-tertiary mb-10">
          <Link href="/glossary" className="no-underline hover:text-text-primary transition-colors">Glossary</Link>
          <span>/</span>
          <span className="text-text-secondary">Attribution</span>
        </nav>
        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">Definition</span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">Multi-Touch Attribution</h1>
        </header>
        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <p className="text-[1rem] text-text-primary font-medium">
              An analytics model that distributes conversion credit across multiple touchpoints in a customer journey, rather than giving all credit to the first or last interaction.
            </p>
          </div>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Common models</h2>
          <p>Multi-touch attribution comes in several variants: linear (equal credit to all touchpoints), time-decay (more credit to recent touchpoints), position-based (40% first, 40% last, 20% middle), and data-driven (ML-determined weights). Each has trade-offs, but all share a fundamental requirement: visibility into the complete journey.</p>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">The data completeness problem</h2>
          <p>Multi-touch attribution is only as accurate as the touchpoint data feeding it. When cookie-based analytics miss 87% of visitor interactions due to <Link href="/glossary/consent-management-platform" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">consent rejection</Link>, ad blockers, and browser restrictions, the model distributes credit across a fragment of the real journey.</p>
          <p>This systematically undervalues top-of-funnel channels (organic, social, display) because first touches are most likely to be lost when cookies are not yet active. <Link href="/glossary/revenue-attribution" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">Revenue attribution</Link> on complete data eliminates this bias.</p>
        </div>
        <div className="mt-16 pt-10 border-t border-warm-100">
          <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">Related terms</h3>
          <div className="space-y-3">
            <Link href="/glossary/revenue-attribution" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Revenue Attribution</Link>
            <Link href="/glossary/data-loss-in-analytics" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Data Loss in Analytics</Link>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-warm-100">
          <p className="text-[0.85rem] text-text-tertiary">
            Learn more: <Link href="/blog/multi-touch-attribution-complete-data" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">Why Multi-Touch Attribution Fails Without Complete Data</Link>
          </p>
        </div>
      </div>
    </article>
  );
}
