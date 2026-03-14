import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { Logos } from "@/components/sections/Logos";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { pricingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SealMetrics Pricing — Complete Analytics from €599/mo",
  description:
    "Complete analytics from €599/mo. 100% of your traffic captured. Plans auto-scale — no surprises, no blocked data. 14-day free trial, no card required.",
  openGraph: {
    title: "SealMetrics Pricing — Complete Analytics from €599/mo",
    description:
      "Enterprise analytics from €599/mo. Annual billing from €499/mo. 14-day free trial.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/pricing",
  },
};

const everyPlanIncludes = [
  "Unlimited websites",
  "Unlimited users",
  "Conversion Properties",
  "24 months data retention",
  "Consentless Tracking (GDPR)",
  "Real-time data (<2 min)",
  "Funnel Analysis",
  "Multi-site Portfolio View",
];

const differentiators = [
  {
    from: "Growth",
    to: "Scale",
    diff: "More events (15M) + Agent AI Analytics + Webhooks + Guided onboarding",
  },
  {
    from: "Scale",
    to: "Enterprise",
    diff: "Unlimited events + SSO + Account Manager + Isolated Processing",
  },
];

interface ComparisonRow {
  feature: string;
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
      { feature: "Consentless Tracking (GDPR)", growth: true, scale: true, enterprise: true },
      { feature: "Real-time Data (<2 min)", growth: true, scale: true, enterprise: true },
      { feature: "Pageview & Session Tracking", growth: true, scale: true, enterprise: true },
      { feature: "UTM & Channel Attribution", growth: true, scale: true, enterprise: true },
      { feature: "Device & Geo Analytics", growth: true, scale: true, enterprise: true },
      { feature: "Funnel Analysis", growth: true, scale: true, enterprise: true },
      { feature: "Data Freshness", growth: "Before 6am daily", scale: "Before 6am daily — SLA 99.5%", enterprise: "Before 6am daily — Custom SLA" },
    ],
  },
  {
    category: "Agent Analytics (Coming Soon)",
    rows: [
      { feature: "AI Agent Detection", growth: false, scale: "Coming Soon", enterprise: "Coming Soon" },
      { feature: "Agent Scoring (300+ signals)", growth: false, scale: "Coming Soon", enterprise: "Coming Soon" },
      { feature: "HTTP Signatures (RFC 9421)", growth: false, scale: "Coming Soon", enterprise: "Coming Soon" },
      { feature: "Provider Detection (OpenAI, Anthropic, etc.)", growth: false, scale: "Coming Soon", enterprise: "Coming Soon" },
    ],
  },
  {
    category: "eCommerce",
    rows: [
      { feature: "Conversion Tracking", growth: true, scale: true, enterprise: true },
      { feature: "Microconversion Tracking", growth: true, scale: true, enterprise: true },
      { feature: "Conversion Properties", growth: true, scale: true, enterprise: true },
      { feature: "Revenue Attribution", growth: true, scale: true, enterprise: true },
    ],
  },
  {
    category: "LENS AI",
    rows: [
      { feature: "Forecasting & Prediction", growth: true, scale: true, enterprise: true },
      { feature: "Anomaly Detection", growth: true, scale: true, enterprise: true },
      { feature: "Growth Opportunities", growth: true, scale: true, enterprise: true },
      { feature: "Weekly & Monthly Reporting", growth: true, scale: true, enterprise: true },
    ],
  },
  {
    category: "Monitoring & Alerts",
    rows: [
      { feature: "Critical Alerts", growth: true, scale: true, enterprise: true },
      { feature: "Business Monitoring", growth: true, scale: true, enterprise: true },
      { feature: "Risk Management", growth: true, scale: true, enterprise: true },
      { feature: "Custom Alerts", growth: true, scale: true, enterprise: true },
    ],
  },
  {
    category: "Data & API",
    rows: [
      { feature: "API Access (full)", growth: true, scale: true, enterprise: true },
      { feature: "MCP Server", growth: true, scale: true, enterprise: true },
      { feature: "CSV / JSON Export", growth: true, scale: true, enterprise: true },
      { feature: "BigQuery Export", growth: true, scale: true, enterprise: true },
      { feature: "Webhooks", growth: false, scale: true, enterprise: true },
    ],
  },
  {
    category: "Multi-site",
    rows: [
      { feature: "Multi-site Portfolio View", growth: true, scale: true, enterprise: true },
    ],
  },
  {
    category: "Governance",
    rows: [
      { feature: "Role-based Access (RBAC)", growth: "Basic", scale: "Advanced", enterprise: "Full" },
      { feature: "SSO / SAML", growth: false, scale: false, enterprise: true },
      { feature: "Isolated Processing", growth: false, scale: false, enterprise: true },
    ],
  },
  {
    category: "Support",
    rows: [
      { feature: "Email Support", growth: true, scale: true, enterprise: true },
      { feature: "Chat Support", growth: true, scale: true, enterprise: true },
      { feature: "Priority Support", growth: false, scale: true, enterprise: true },
      { feature: "Dedicated Account Manager", growth: false, scale: false, enterprise: true },
      { feature: "Onboarding", growth: "Docs + Videos", scale: "1 session", enterprise: "White-glove" },
      { feature: "SLA", growth: "99%", scale: "99.5%", enterprise: "99.9%" },
    ],
  },
  {
    category: "Infrastructure",
    rows: [
      { feature: "Human Events / month", growth: "5M", scale: "15M", enterprise: "Unlimited" },
      { feature: "AI Agents", growth: "Coming Soon", scale: "Coming Soon", enterprise: "Coming Soon" },
      { feature: "Websites", growth: "Unlimited", scale: "Unlimited", enterprise: "Unlimited" },
      { feature: "Users", growth: "Unlimited", scale: "Unlimited", enterprise: "Unlimited" },
      { feature: "Data Retention", growth: "24 months", scale: "24 months", enterprise: "Custom" },
    ],
  },
];

const faqs = [
  {
    q: "What counts as a human event?",
    a: "A human event is any interaction from a real visitor: pageviews, clicks, conversions, form submissions, add-to-cart actions, newsletter signups. AI agent traffic and traditional bots are excluded from your event count — they're tracked separately and don't count toward your limit.",
  },
  {
    q: "Why is AI agent traffic free?",
    a: "AI agents (ChatGPT, Claude, Perplexity) represent a new category of traffic that you need visibility into. We track them for free because understanding who reads your content with AI is a strategic advantage, not a cost center.",
  },
  {
    q: "What happens if I exceed my event limit?",
    a: "Your tracking never stops. We never block, throttle, or sample your data — that would defeat the purpose of complete analytics. At 80% usage you get an informational email (no action needed). At 100% a badge appears in your dashboard. If you exceed your limit for 2+ consecutive months, your plan automatically upgrades at your next billing cycle. One month of overage per year is free — seasonal spikes don't trigger anything.",
  },
  {
    q: "Will I ever be automatically upgraded without warning?",
    a: "You'll always receive an email before any plan change takes effect. Auto-upgrades only happen after 2+ consecutive months above 120% of your limit, and they apply at the start of your next billing cycle — never mid-cycle. Annual plan customers are only adjusted at renewal. We will never upgrade you based on a single spike month.",
  },
  {
    q: "What if my traffic decreases? Can I downgrade?",
    a: "Yes — and we'll actually suggest it. If your usage drops below 50% of your plan limit for 3+ months, we'll proactively email you with a one-click option to move to a smaller plan. If you do nothing, nothing changes. We'd rather you pay for what you use.",
  },
  {
    q: "Are all features really included in every plan?",
    a: "Yes. Core analytics, conversion tracking, LENS AI, monitoring, API, MCP Server, and BigQuery export are included in every plan starting from Growth. The only differences between plans are event volume, governance features (RBAC, SSO), support level, and Agent AI Analytics (available from Scale). You never hit a feature wall.",
  },
  {
    q: "Can I switch between monthly and annual billing?",
    a: "Yes. Switch to annual billing at any time to get 2 months free. Annual commitments are billed upfront. If you switch from monthly to annual, the change applies at your next billing cycle.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. Every plan includes a 14-day free trial with full access to all features. No credit card required. You'll see your real data within minutes of installing our script.",
  },
  {
    q: "What about unlimited websites and users?",
    a: "Every plan includes unlimited websites and unlimited team members. No per-seat charges, no per-domain charges. Add your entire team and all your domains from day one.",
  },
  {
    q: "SealMetrics captures 100% of traffic — does that mean my event count will be higher than what I see in GA4?",
    a: "Yes, significantly. Because we track without cookies or consent banners, we capture visitors that GA4 never sees — typically 40-90% more traffic depending on your consent rejection rate. Keep this in mind when estimating your plan: if GA4 shows you 100K sessions/month, your real traffic may be 170K-300K sessions, generating roughly 4-6 events per session.",
  },
  {
    q: "Do you charge per event if I go over my limit?",
    a: "No. We don't do per-event overage billing. Your plan has a clear limit, and if you consistently grow beyond it, you move to the next plan at a fixed price. No surprise line items, no variable invoices, no calculator needed.",
  },
  {
    q: "How does billing work for annual plans if my usage grows mid-year?",
    a: "Annual plans are protected for the full contract period. If your traffic grows mid-year, we absorb the overage until your renewal date. At renewal, we'll recommend the plan that fits your current usage. You'll never receive an unexpected invoice mid-contract.",
  },
];

const adaptCards = [
  {
    title: "We never cut your data",
    desc: "No matter your usage, your tracking keeps running. We will never block, throttle, or sample your data. Complete data is our promise — we don't break it over billing.",
  },
  {
    title: "If you grow, your plan grows with you",
    desc: "If your traffic consistently exceeds your plan limit for 2+ months, we automatically upgrade your plan at the start of your next billing cycle. You'll get an email confirming the change — no sales calls, no negotiations. Monthly plans adjust the next month. Annual plans adjust at renewal only.",
  },
  {
    title: "If you need less, we'll tell you",
    desc: "If your usage drops significantly for 3+ months, we proactively email you suggesting a smaller plan. One click to confirm. If you do nothing, nothing changes. We'd rather you pay for what you need than overpay in silence.",
  },
  {
    title: "Seasonal spikes are on us",
    desc: "Black Friday? January sales? A viral campaign? One month of overage per year is included at no extra charge and doesn't trigger any plan change. Your business has peaks — your analytics bill shouldn't punish you for them.",
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
        { name: "Growth", price: "599", description: "5M human events/mo" },
        { name: "Scale", price: "1079", description: "15M human events/mo" },
      ])} />
      <JsonLd data={breadcrumbSchema([{ name: "Pricing", url: "/pricing" }])} />
      <JsonLd data={faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <h1 className="headline-hero mb-6">
            Pay for humans. Not bots. Not consent banners. Not guesswork.
          </h1>
          <p className="text-[1.15rem] leading-[1.75] text-text-secondary max-w-[640px] mx-auto mb-2">
            AI agent traffic tracking coming soon.
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

      {/* Client logos — social proof */}
      <Logos />

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
            AI agent tracking (ChatGPT, Claude, Perplexity) coming soon. Will not count against your event limit.
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
                  <th className="py-3 pr-4 text-[0.8rem] font-medium text-text-tertiary uppercase tracking-wider w-[40%]">
                    Feature
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
                        colSpan={4}
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
                    <span className="inline-block px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-text-tertiary border border-warm-200 rounded-[2px]">
                      Coming Soon
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
          <p className="text-[0.85rem] text-text-secondary mt-8 p-5 bg-warm-white border border-warm-100 rounded-[4px] leading-[1.7]">
            <span className="font-medium text-text-primary">Important:</span>{" "}
            SealMetrics captures 100% of your traffic — including visitors who reject cookies on other analytics tools. This means your event count in SealMetrics will be significantly higher than what you see in Google Analytics. When choosing your plan, estimate your real traffic at 2-3x what GA4 reports.
          </p>
        </div>
      </section>

      {/* How your plan adapts */}
      <section className="py-20 bg-warm-white border-t border-warm-100">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-3 text-center">
            Your plan adapts to your business
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary text-center max-w-[680px] mx-auto mb-14">
            We never block your tracking. We never surprise you with invoices. Your plan scales with you — automatically and transparently.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {adaptCards.map((card) => (
              <div
                key={card.title}
                className="p-7 bg-white border border-warm-100 rounded-[4px]"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-0">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border-b border-warm-100 last:border-0"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between py-5 font-serif text-[1.1rem] font-medium text-text-primary [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-text-tertiary text-[1.1rem] ml-4 shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-[0.95rem] leading-[1.7] text-text-secondary pb-6">
                  {faq.a}
                </p>
              </details>
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
