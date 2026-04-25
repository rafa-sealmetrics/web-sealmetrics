import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { RelatedGlossaryTerms } from "@/components/ui/RelatedGlossaryTerms";
import { definedTermSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "What Is Multi-Touch Attribution? — SealMetrics Glossary",
  description:
    "Multi-touch attribution splits conversion credit across multiple observed touchpoints of the same identified visitor. It requires per-user tracking — SealMetrics does not use it.",
  openGraph: {
    title: "What Is Multi-Touch Attribution?",
    description: "An attribution model that requires per-user tracking. SealMetrics does last-click only, at channel level.",
    type: "article",
  },
  alternates: { canonical: "https://sealmetrics.com/glossary/multi-touch-attribution" },
};

export default function MultiTouchAttributionPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Glossary", href: "/glossary" }, { label: "Multi-Touch Attribution" }]} />
      <JsonLd data={definedTermSchema({ name: "Multi-Touch Attribution", description: "An attribution model that distributes conversion credit across multiple touchpoints.", url: "/glossary/multi-touch-attribution", related: [{ name: "Attribution Model", url: "/glossary/attribution-model" }, { name: "Revenue Attribution", url: "/glossary/revenue-attribution" }, { name: "Event Tracking", url: "/glossary/event-tracking" }, { name: "Data Loss in Analytics", url: "/glossary/data-loss-in-analytics" }] })} />
      <JsonLd data={breadcrumbSchema([{ name: "Glossary", url: "/glossary" }, { name: "Multi-Touch Attribution" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">Definition</span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">Multi-Touch Attribution</h1>
        </header>
        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <p className="text-[1rem] text-text-primary font-medium">
              An attribution model that splits conversion credit across multiple observed touchpoints of the same identified visitor, instead of giving all credit to the first or last interaction. It requires per-user tracking to link touchpoints across sessions.
            </p>
          </div>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Common models</h2>
          <p>Multi-touch attribution comes in several variants: linear (equal credit to all touchpoints), time-decay (more credit to recent touchpoints), position-based (40% first, 40% last, 20% middle), and data-driven (ML-determined weights). Each has trade-offs, but all share a fundamental requirement: visibility into every touchpoint of the same identified visitor — which means a persistent per-user identifier must exist.</p>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">The data completeness problem</h2>
          <p>Multi-touch attribution is only as accurate as the touchpoint data feeding it. When cookie-based analytics miss 87% of visitor interactions due to <Link href="/glossary/consent-management-platform" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">consent rejection</Link>, ad blockers, and browser restrictions, the model distributes credit across a fragment of the observed data.</p>
          <p>This systematically undervalues top-of-funnel channels (organic, social, display) because first touches are most likely to be lost when cookies are not yet active.</p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Why SealMetrics does not do multi-touch attribution</h2>
          <p>Multi-touch attribution requires the analytics system to identify the same visitor across multiple sessions so the touchpoints can be linked. That identification requires a persistent per-user identifier — a cookie, a device fingerprint or another tracking mechanism that makes the analytics subject to GDPR consent rules.</p>
          <p>SealMetrics is designed as anonymous, aggregate event measurement. No per-user identifier is ever created, so there is no basis for linking touchpoints of the same person across sessions. <Link href="/glossary/revenue-attribution" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">Attribution</Link> is last-click on the observed conversion event: whichever source was recorded on the pageview where the conversion fired gets credit. Channel totals roll up from those events.</p>
          <p>The trade-off is deliberate: you give up modelled credit-splitting across touchpoints, and in exchange you get aggregate channel totals on 100% of traffic with no consent dependency.</p>
        </div>
        <RelatedGlossaryTerms slug="multi-touch-attribution" />
        <div className="mt-10 pt-6 border-t border-warm-100">
          <p className="text-[0.85rem] text-text-tertiary">
            Learn more: <Link href="/blog/multi-touch-attribution-complete-data" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">Why Multi-Touch Attribution Fails Without Complete Data</Link> &middot; <Link href="/product" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">SealMetrics Product</Link>
          </p>
        </div>
      </div>
    </article>
    </>
  );
}
