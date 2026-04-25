import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { pricingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
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
    "Complete analytics from €499/mo annual. Every feature in every plan. AI agents free. You only pay more if you grow. 14-day free trial, no card.",
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
  { question: "Is there a free trial?", answer: "Yes. Every plan includes a 14-day free trial with full access to all features. No credit card required." },
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
      <JsonLd data={breadcrumbSchema([{ name: "Pricing", url: "/pricing" }])} />
      <JsonLd data={faqSchema(faqsForSchema)} />

      <PricingHeroV3 />
      <LogosStrip />
      <PricingPlansV3 locale="en" />
      <PlanIncludesV3 />
      <TrafficCountingV3 />
      <PlanAdaptsV3 />
      <FullComparisonV3 />
      <PricingFaqV3 locale="en" />
      <PricingFinalCtaV3 />
    </>
  );
}
