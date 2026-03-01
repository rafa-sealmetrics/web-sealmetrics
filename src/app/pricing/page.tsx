import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { pricingSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pricing — SealMetrics",
  description:
    "Pay for humans. Not bots. All features included in every plan. 14-day free trial, no credit card required.",
  openGraph: {
    title: "Pricing — SealMetrics",
    description:
      "Enterprise analytics from €199/mo. All features included. 14-day free trial.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/pricing",
  },
};

const everyPlanIncludes = [
  "Unlimited websites",
  "Unlimited users",
  "Agent Analytics (AI detection)",
  "LENS AI (forecasting & anomalies)",
  "Conversion Properties",
  "24 months data retention",
  "Full API access",
  "Consentless Tracking (GDPR)",
];

const differentiators = [
  {
    from: "Starter",
    to: "Growth",
    diff: "More events (5M) + BigQuery + Chat support",
  },
  {
    from: "Growth",
    to: "Scale",
    diff: "More events (15M) + Webhooks + Guided onboarding",
  },
  {
    from: "Scale",
    to: "Enterprise",
    diff: "Unlimited events + SSO + Account Manager + Isolated Processing",
  },
];

interface ComparisonRow {
  feature: string;
  starter: string | boolean;
  growth: string | boolean;
  scale: string | boolean;
  enterprise: string | boolean;
}

interface ComparisonSection {
  category: string;
  rows: ComparisonRow[];
}

const comparisonData: ComparisonSection[] = [
  {
    category: "Analytics Core",
    rows: [
      { feature: "Consentless Tracking (GDPR)", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Real-time Data (<2 min)", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Pageview & Session Tracking", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "UTM & Channel Attribution", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Device & Geo Analytics", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Funnel Analysis", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Data Freshness", starter: "Before 6am daily", growth: "Before 6am daily", scale: "Before 6am daily — SLA 99.5%", enterprise: "Before 6am daily — Custom SLA" },
    ],
  },
  {
    category: "Agent Analytics",
    rows: [
      { feature: "AI Agent Detection", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Agent Scoring (300+ signals)", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "HTTP Signatures (RFC 9421)", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Provider Detection (OpenAI, Anthropic, etc.)", starter: true, growth: true, scale: true, enterprise: true },
    ],
  },
  {
    category: "E-Commerce",
    rows: [
      { feature: "Conversion Tracking", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Microconversion Tracking", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Conversion Properties", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Revenue Attribution", starter: true, growth: true, scale: true, enterprise: true },
    ],
  },
  {
    category: "LENS AI",
    rows: [
      { feature: "Forecasting & Prediction", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Anomaly Detection", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Growth Opportunities", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Weekly & Monthly Reporting", starter: true, growth: true, scale: true, enterprise: true },
    ],
  },
  {
    category: "Monitoring & Alerts",
    rows: [
      { feature: "Critical Alerts", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Business Monitoring", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Risk Management", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Custom Alerts", starter: true, growth: true, scale: true, enterprise: true },
    ],
  },
  {
    category: "Data & API",
    rows: [
      { feature: "API Access (full)", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "CSV / JSON Export", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "BigQuery Export", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Webhooks", starter: false, growth: false, scale: true, enterprise: true },
    ],
  },
  {
    category: "Multi-site",
    rows: [
      { feature: "Multi-site Portfolio View", starter: true, growth: true, scale: true, enterprise: true },
    ],
  },
  {
    category: "Governance",
    rows: [
      { feature: "Role-based Access (RBAC)", starter: "Basic", growth: "Basic", scale: "Advanced", enterprise: "Full" },
      { feature: "SSO / SAML", starter: false, growth: false, scale: false, enterprise: true },
      { feature: "Isolated Processing", starter: false, growth: false, scale: false, enterprise: true },
    ],
  },
  {
    category: "Support",
    rows: [
      { feature: "Email Support", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Chat Support", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Priority Support", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Dedicated Account Manager", starter: false, growth: false, scale: false, enterprise: true },
      { feature: "Onboarding", starter: "Docs + Videos", growth: "Docs + Videos", scale: "1 session", enterprise: "White-glove" },
      { feature: "SLA", starter: "99%", growth: "99%", scale: "99.5%", enterprise: "99.9%" },
    ],
  },
  {
    category: "Infrastructure",
    rows: [
      { feature: "Human Events / month", starter: "1M", growth: "5M", scale: "15M", enterprise: "Unlimited" },
      { feature: "AI Agents", starter: "Unlimited (free)", growth: "Unlimited (free)", scale: "Unlimited (free)", enterprise: "Unlimited (free)" },
      { feature: "Websites", starter: "Unlimited", growth: "Unlimited", scale: "Unlimited", enterprise: "Unlimited" },
      { feature: "Users", starter: "Unlimited", growth: "Unlimited", scale: "Unlimited", enterprise: "Unlimited" },
      { feature: "Data Retention", starter: "24 months", growth: "24 months", scale: "24 months", enterprise: "Custom" },
    ],
  },
];

const faqs = [
  {
    q: "What counts as a human event?",
    a: "A human event is any interaction from a real visitor: pageviews, clicks, conversions, form submissions. AI agent traffic and traditional bots are excluded from your event count.",
  },
  {
    q: "Why is AI agent traffic free?",
    a: "AI agents (ChatGPT, Claude, Perplexity) represent a new category of traffic that you need visibility into. We track them for free because understanding who reads your content with AI is a strategic advantage, not a cost center.",
  },
  {
    q: "What happens if I exceed my event limit?",
    a: "We never block your tracking. At 80% you get an email alert, at 100% a dashboard notification, and at 120% we contact you to discuss upgrading. No data is lost.",
  },
  {
    q: "Are all features really included in every plan?",
    a: "Yes. Analytics, Agent Analytics, LENS AI, Conversion Tracking, and Monitoring are included in every plan. The only differences are event volume, data integrations (BigQuery, Webhooks), governance features, and support level.",
  },
  {
    q: "Can I switch between monthly and annual billing?",
    a: "Yes. You can switch to annual billing at any time to get 2 months free. Annual commitments are billed upfront for the full year.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. Every plan includes a 14-day free trial with full access to all features. No credit card required — just sign up and start exploring.",
  },
  {
    q: "What about unlimited websites and users?",
    a: "Every plan includes unlimited websites and unlimited team members. No per-seat or per-domain charges.",
  },
];

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return <span className="text-green-muted">&#10003;</span>;
  }
  if (value === false) {
    return <span className="text-text-tertiary">&mdash;</span>;
  }
  return <span className="text-[0.8rem] text-text-secondary">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Pricing" }]} />
      <JsonLd data={pricingSchema([
        { name: "Starter", price: "199", description: "1M human events/mo" },
        { name: "Growth", price: "499", description: "5M human events/mo" },
        { name: "Scale", price: "899", description: "15M human events/mo" },
      ])} />
      <JsonLd data={breadcrumbSchema([{ name: "Pricing", url: "/pricing" }])} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <h1 className="headline-hero mb-6">
            Pay for humans. Not bots. Not consent banners. Not guesswork.
          </h1>
          <p className="text-[1.15rem] leading-[1.75] text-text-secondary max-w-[640px] mx-auto mb-2">
            AI agent traffic is tracked but never billed.
            <br />
            All features included in every plan.
          </p>
          <p className="text-[0.9rem] text-text-tertiary mb-10">
            Other analytics charge you for bot traffic. We only count humans.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Book a Demo
          </Link>
        </div>
      </section>

      {/* Plans with billing toggle */}
      <PricingPlans />

      {/* Every plan includes */}
      <section className="py-20 bg-warm-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-10">Every plan includes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {everyPlanIncludes.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 text-[0.9rem] text-text-secondary"
              >
                <span className="text-green-muted shrink-0">&#10003;</span>
                {feature}
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 text-[0.9rem] text-text-primary font-medium">
            <span className="text-green-muted shrink-0">&#10003;</span>
            Data freshness before 6am daily — including Black Friday
            <span className="inline-block px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-green-muted border border-green-muted rounded-[2px]">
              New
            </span>
          </div>
          <p className="text-[0.8rem] text-text-tertiary mt-8">
            AI agents (ChatGPT, Claude, Perplexity) are tracked for insights but never count against your event limit.
          </p>
        </div>
      </section>

      {/* What differentiates each plan */}
      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-10">What differentiates each plan</h2>
          <div className="space-y-5">
            {differentiators.map((d) => (
              <div
                key={d.from}
                className="flex items-start gap-3 text-[0.9rem]"
              >
                <span className="text-green-muted shrink-0 mt-0.5">&rarr;</span>
                <p className="text-text-secondary">
                  <span className="font-medium text-text-primary">
                    {d.from} &rarr; {d.to}:
                  </span>{" "}
                  {d.diff}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[0.85rem] text-text-secondary mt-10 pt-8 border-t border-warm-100 text-center">
            You only pay more if you grow. All core features are always included.
          </p>
        </div>
      </section>

      {/* Full capabilities comparison */}
      <section className="py-20 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12 text-center">
            Full capabilities comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-warm-200">
                  <th className="py-3 pr-4 text-[0.8rem] font-medium text-text-tertiary uppercase tracking-wider w-[35%]">
                    Feature
                  </th>
                  <th className="py-3 px-4 text-[0.8rem] font-medium text-text-tertiary uppercase tracking-wider text-center">
                    Starter
                  </th>
                  <th className="py-3 px-4 text-[0.8rem] font-medium text-text-tertiary uppercase tracking-wider text-center">
                    Growth
                  </th>
                  <th className="py-3 px-4 text-[0.8rem] font-medium text-text-tertiary uppercase tracking-wider text-center">
                    Scale
                  </th>
                  <th className="py-3 px-4 text-[0.8rem] font-medium text-text-tertiary uppercase tracking-wider text-center">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((section) => (
                  <Fragment key={section.category}>
                    <tr>
                      <td
                        colSpan={5}
                        className="pt-6 pb-2 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-text-tertiary"
                      >
                        {section.category}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr
                        key={row.feature}
                        className="border-b border-warm-100"
                      >
                        <td className="py-3.5 pr-4 text-[0.85rem] text-text-secondary">
                          {row.feature}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <CellValue value={row.starter} />
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <CellValue value={row.growth} />
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <CellValue value={row.scale} />
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <CellValue value={row.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How traffic counting works */}
      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-10 text-center">
            How traffic counting works
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-warm-200">
                  <th className="py-3 pr-4 text-[0.8rem] font-medium text-text-tertiary">
                    Traffic type
                  </th>
                  <th className="py-3 px-4 text-[0.8rem] font-medium text-text-tertiary text-center">
                    Tracked
                  </th>
                  <th className="py-3 px-4 text-[0.8rem] font-medium text-text-tertiary text-center">
                    Counts toward limit
                  </th>
                  <th className="py-3 px-4 text-[0.8rem] font-medium text-text-tertiary text-center">
                    Visible in dashboard
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-warm-100">
                  <td className="py-3.5 pr-4 text-[0.9rem] font-medium text-text-primary">
                    Humans
                  </td>
                  <td className="py-3.5 px-4 text-center text-green-muted">
                    &#10003;
                  </td>
                  <td className="py-3.5 px-4 text-center text-[0.85rem] font-medium text-text-primary">
                    Yes
                  </td>
                  <td className="py-3.5 px-4 text-center text-[0.85rem] text-text-secondary">
                    Human Analytics
                  </td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-3.5 pr-4">
                    <span className="text-[0.9rem] font-medium text-text-primary">
                      AI Agents
                    </span>{" "}
                    <span className="text-[0.8rem] text-text-tertiary">
                      (ChatGPT, Claude, etc.)
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center text-green-muted">
                    &#10003;
                  </td>
                  <td className="py-3.5 px-4 text-center text-[0.85rem] font-medium text-green-muted">
                    No
                  </td>
                  <td className="py-3.5 px-4 text-center text-[0.85rem] text-text-secondary">
                    Agent Analytics
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="pb-8 border-b border-warm-100 last:border-0"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {faq.q}
                </h3>
                <p className="text-[0.95rem] leading-[1.7] text-text-secondary">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-warm-100 text-center">
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-8">
            Ready to see what humans actually do on your site?
          </h2>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Book a Demo
          </Link>
          <div className="mt-4">
            <Link
              href="/how-it-works"
              className="text-[0.9rem] text-text-tertiary hover:text-text-secondary transition-colors"
            >
              Learn how it works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
