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
import { AgenticSetupSteps } from "@/components/sections/v3/AgenticPlanV3";
import { McpInstaller } from "@/components/sections/v3/McpInstaller";

export const metadata: Metadata = {
  title: "SealMetrics Pricing — Pay for humans, not bots",
  description:
    "Free Agentic tier up to 1M events, set up from your AI assistant. Paid plans from €499/mo annual — every feature, every plan. You only pay more if you grow.",
  openGraph: {
    title: "SealMetrics Pricing — Pay for humans, not bots",
    description:
      "Complete analytics from €499/mo. Every feature in every plan. AI agents free. 14-day free trial.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/pricing/",
    languages: getAlternates("/pricing"),
  },
};

const faqsForSchema = [
  { question: "What counts as a human event?", answer: "Any real visitor interaction: pageviews, clicks, conversions, form submissions, add-to-cart, newsletter signups. AI agent traffic and traditional bots are excluded — they don't count toward your limit." },
  { question: "Why is AI agent traffic free?", answer: "AI agents (ChatGPT, Claude, Perplexity) are a new category of traffic you need visibility into. We track them for free because understanding who reads your content with AI is a strategic advantage." },
  { question: "What happens if I exceed my event limit?", answer: "Your tracking never stops. We never block, throttle or sample your data. If you exceed for 2 consecutive months, Growth moves up to Scale automatically at your next billing cycle; Scale is never auto-upgraded — we email you to discuss Enterprise. One overage month per year is free." },
  { question: "Is there a free trial?", answer: "Yes. Every plan includes a 14-day free trial with full access to all features. You add a payment method when you start and are not charged until the trial ends — cancel before then and you pay nothing. The Agentic Package, set up from your AI assistant, needs no card." },
  { question: "Are all features included in every plan?", answer: "Yes for the analytics. Core analytics, conversion tracking, API, MCP Server, BigQuery export and LENS AI — ask your data in plain language and turn the answer into a report — are all included from Growth up, running on your own AI key (BYOK: Anthropic, OpenAI, Gemini or DeepSeek). Rule-based anomaly detection, forecasting and growth opportunities are on the roadmap, not live today. The only usage-based option is Private AI, our managed EU-hosted model with no key needed: a paid add-on on Growth, included on Scale and Enterprise (5M tokens/month), with extra 5M-token packs at €358.80 each and a dedicated non-shared instance on Enterprise. Other plan differences are event volume, webhooks and audit logs (Scale up), governance and support." },
  { question: "What is the Agentic Package?", answer: "A free SealMetrics tier set up directly from your AI assistant (Claude Desktop, Codex or any MCP-capable agent). Your agent creates the account and generates the pixel — same complete cookieless analytics as Growth, free up to 1M human events per month, self-serve with documentation only and no credit card. Above 1M events per month the Growth plan activates." },
];

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Pricing" }]} />
      <JsonLd data={pricingSchema([
        { name: "Agentic", price: "0", description: "1M human events/mo · free · set up from your AI assistant" },
        { name: "Growth", price: "499", description: "5M human events/mo · annual billing" },
        { name: "Scale", price: "899", description: "15M human events/mo · annual billing" },
      ])} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Pricing", url: "/pricing" }])} />

      <PricingHeroV3 />
      <LogosStrip />
      <PricingPlansV3 locale="en" />
      <McpInstaller locale="en" />
      <AgenticSetupSteps locale="en" />
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
              SealMetrics pricing is annual-billed enterprise analytics with no usage-based surprises. The Growth plan is €499/month billed annually (€599 monthly) for 5 million human events per month; the Scale plan is €899/month billed annually (€1,079 monthly) for 15 million events; Enterprise is custom for portfolio brands with unlimited events, isolated processing, an exclusive non-shared Private AI, a 99.9% SLA and a dedicated account manager. Every plan includes the same data architecture: 100% capture, last-click revenue attribution, EU-hosted in Dublin, 24-month fixed retention, GDPR-compliant by design, and the standard DPA. LENS AI — ask your data in plain language and turn the answer into a report — is included from Growth up and runs on your own AI key (BYOK: Anthropic, OpenAI, Gemini or DeepSeek); rule-based anomaly detection and forecasting are on the roadmap. Private AI, the managed EU-hosted model that needs no key, is a paid add-on on Growth and included on Scale and Enterprise (5M tokens/month), with extra 5M-token packs at €358.80 each.
            </p>
            <p>
              For an EU eCommerce team spending €20K+/month in paid media, the Growth plan represents under 2.5% of paid spend — typically less than the cost of a single mis-attributed campaign decision. Annual billing includes two months free against monthly. The 14-day trial takes a payment method up front and charges nothing if you cancel before it ends; the free Agentic tier, provisioned from your AI assistant, needs no card at all. No migration from GA4 is required since both run in parallel.
            </p>
          </QuickAnswer>
        </div>
      </section>
    </>
  );
}
