import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { pricingSchema, breadcrumbSchema, softwareApplicationSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { PricingPlansV3 } from "@/components/sections/v3/PricingPlansV3";
import {
  PricingHeroV3,
  PlanIncludesV3,
  TrafficCountingV3,
  PlanAdaptsV3,
  FullComparisonV3,
  PricingFinalCtaV3,
} from "@/components/sections/v3/PricingV3Sections";
import { PricingFaqV3 } from "@/components/sections/v3/PricingFaqV3";

export const metadata: Metadata = {
  title: "SealMetrics Pricing — Pay for humans, not bots",
  description:
    "Complete analytics from €499/mo annual. Every feature in every plan. AI agents free. You only pay more if you grow. 14-day free trial.",
  openGraph: {
    title: "SealMetrics Pricing — Pay for humans, not bots",
    description:
      "Complete analytics from €499/mo. Every feature in every plan. AI agents free. 14-day free trial.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/pricing",
    languages: getAlternates("/pricing"),
  },
};

const faqsForSchema = [
  { question: "What counts as a human event?", answer: "Any real visitor interaction: pageviews, clicks, conversions, form submissions, add-to-cart, newsletter signups. AI agent traffic and traditional bots are excluded — they don't count toward your limit." },
  { question: "Why is AI agent traffic free?", answer: "AI agents (ChatGPT, Claude, Perplexity) are a new category of traffic you need visibility into. We track them for free because understanding who reads your content with AI is a strategic advantage." },
  { question: "What happens if I exceed my event limit?", answer: "Your tracking never stops. We never block, throttle or sample your data. If you exceed for 2+ consecutive months, your plan auto-upgrades at your next billing cycle. One overage month per year is free." },
  { question: "Is there a free trial?", answer: "Yes. Every plan includes a 14-day free trial with full access to all features." },
  { question: "Are all features included in every plan?", answer: "Yes. Core analytics, conversion tracking, LENS AI, monitoring, API, MCP Server and BigQuery export are included from Growth up. Plan differences are event volume, governance, support and Agent Analytics (Scale+)." },
];

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Pricing" }]} />
      <JsonLd data={pricingSchema([
        { name: "Growth", price: "499", description: "5M human events/mo · annual billing" },
        { name: "Scale", price: "899", description: "15M human events/mo · annual billing" },
      ])} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Pricing", url: "/pricing" }])} />

      <PricingHeroV3 />
      <LogosStrip />
      <PricingPlansV3 locale="en" />
      <PlanIncludesV3 />
      <TrafficCountingV3 />
      <PlanAdaptsV3 />
      <FullComparisonV3 />
      <PricingFaqV3 locale="en" />
      <PricingFinalCtaV3 />
      <section className="bg-warm-white border-t border-warm-100 py-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <QuickAnswer>
            <p>
              SealMetrics pricing is annual-billed enterprise analytics with no usage-based surprises. The Growth plan is €499/month billed annually (€599 monthly) for 5 million human events per month; the Scale plan is €899/month billed annually (€1,079 monthly) for 15 million events; Enterprise is custom for portfolio brands with unlimited events, isolated processing, SSO/SAML, RBAC, 99.9% SLA and a dedicated account manager. Every plan includes the same data architecture: 100% capture, last-click revenue attribution, EU-hosted in Dublin, GDPR-compliant by design, and the standard DPA.
            </p>
            <p>
              For an EU eCommerce team spending €20K+/month in paid media, the Growth plan represents under 2.5% of paid spend — typically less than the cost of a single mis-attributed campaign decision. Annual billing includes two months free against monthly. Free 14-day trial; no migration from GA4 required since both run in parallel.
            </p>
          </QuickAnswer>
        </div>
      </section>
    </>
  );
}
