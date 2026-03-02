import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { softwareApplicationSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Product — SealMetrics",
  description:
    "100% data capture, multi-touch revenue attribution, LENS AI supervision, and AI agent tracking. Enterprise-grade analytics from €199/mo.",
  openGraph: {
    title: "Product — SealMetrics",
    description:
      "Complete web analytics with 100% data capture, multi-touch revenue attribution, LENS AI supervision, and AI agent tracking.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/product",
  },
};

const reports = [
  {
    name: "Traffic Overview",
    desc: "Complete visitor counts, session depth, and engagement — from 100% of traffic, not a sample.",
  },
  {
    name: "Acquisition Channels",
    desc: "See which channels actually drive visitors, with no blind spots from consent rejection or ad blockers.",
  },
  {
    name: "Page Performance",
    desc: "Page-level metrics including load times, bounce rates, and scroll depth on complete data.",
  },
  {
    name: "User Journeys",
    desc: "Full path reconstruction from first touch to conversion within each session.",
  },
  {
    name: "Conversion Funnels",
    desc: "Step-by-step funnel analysis with drop-off diagnostics and segment comparison.",
  },
  {
    name: "Revenue Attribution",
    desc: "Multi-touch attribution connecting every marketing touchpoint to revenue outcomes.",
  },
  {
    name: "Campaign Analysis",
    desc: "Campaign-level performance with cost integration for true ROAS calculation.",
  },
  {
    name: "Real-time Dashboard",
    desc: "Live visitor activity, active campaigns, and anomaly alerts as they happen.",
  },
  {
    name: "Custom Reports",
    desc: "Build reports from any combination of dimensions and metrics on your complete dataset.",
  },
];

const productFaqs = [
  {
    q: "What data does SealMetrics capture?",
    a: "SealMetrics captures pageviews, sessions, referrers, UTM parameters, browser type, screen size, scroll depth, clicks, conversions, and ecommerce transactions. All data comes from 100% of visitors — no sampling, no consent dependency.",
  },
  {
    q: "Can I run SealMetrics alongside GA4?",
    a: "Yes. Many clients run both in parallel during a transition period. SealMetrics typically shows 3-8x more tracked visitors and conversions than GA4 in EU markets because it captures traffic that GA4 misses due to consent rejection and ad blockers.",
  },
  {
    q: "How does SealMetrics handle single-page applications?",
    a: "The JavaScript tag automatically detects client-side navigation events in SPAs and frameworks like React, Next.js, and Vue. No additional configuration is needed — page transitions are tracked as standard pageviews.",
  },
  {
    q: "What is LENS AI and what does it detect?",
    a: "LENS is SealMetrics' AI supervision engine. It continuously monitors 60+ metrics including traffic patterns, conversion rates, revenue trends, and campaign performance. It detects anomalies, provides root cause analysis, and suggests actions — all grounded in complete data.",
  },
  {
    q: "How does multi-touch attribution work without cookies?",
    a: "SealMetrics reconstructs visitor journeys using first-party cookieless session data. Because 100% of touchpoints are captured, multi-touch attribution models (first-touch, last-touch, linear, time-decay) produce accurate results — unlike cookie-based tools where 87% of touchpoints are missing.",
  },
  {
    q: "Does SealMetrics track ecommerce transactions?",
    a: "Yes. SealMetrics tracks product views, add-to-cart events, checkout steps, and purchases with full revenue attribution. Integrations with Shopify, WooCommerce, PrestaShop, and Magento provide automatic ecommerce tracking.",
  },
  {
    q: "What integrations are available?",
    a: "SealMetrics integrates with 25+ platforms: Google Ads, Meta Ads, TikTok Ads, Shopify, WooCommerce, BigQuery, HubSpot, Salesforce, Klaviyo, and more. Data can be exported via API, BigQuery, webhooks, or CSV.",
  },
];

export default function ProductPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Product" }]} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Product", url: "/product" }])} />
      <JsonLd data={faqSchema(productFaqs.map((f) => ({ question: f.q, answer: f.a })))} />
      {/* Hero */}
      <section className="pt-12 pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Product
            </span>
            <h1 className="headline-hero mb-8">
              Nine reports built on 100% of reality.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary mb-10">
              Revenue attribution, AI anomaly detection, and agent
              tracking&nbsp;&mdash; all powered by complete data capture, not
              statistical estimates. See how{" "}
              <Link
                href="/for/cmo"
                className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors"
              >
                marketing leaders use SealMetrics
              </Link>{" "}
              to reclaim the data they have been missing. Enterprise-grade analytics at a fraction of
              GA360 or Adobe pricing.
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <Link
                href="/demo"
                className="inline-flex items-center px-7 py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center px-7 py-3.5 text-[0.95rem] text-text-secondary border border-warm-200 rounded-[4px] no-underline hover:border-text-body hover:text-text-primary transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Data Capture */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-3">
                Data Capture
              </span>
              <h2 className="headline-section mb-5">
                Every visitor. No exceptions.
              </h2>
              <p className="text-[1rem] leading-[1.7] text-text-secondary mb-6">
                Cookie-based analytics miss the majority of European traffic.
                SealMetrics uses{" "}
                <Link
                  href="/how-it-works"
                  className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors"
                >
                  first-party cookieless collection
                </Link>{" "}
                that captures every session regardless of consent status,
                browser settings, or ad blocker usage.
              </p>
              <ul className="space-y-2">
                {[
                  "No cookies — works without consent banners",
                  "First-party infrastructure — invisible to ad blockers",
                  "100% session capture regardless of browser or consent",
                  "Session reconstruction from first touch to conversion",
                  "846-byte script — zero impact on page performance",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9rem] text-text-secondary"
                  >
                    <span className="text-text-tertiary shrink-0">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-warm-100 rounded-[4px] p-8">
              <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-6">
                Data capture by scenario
              </div>
              <div className="flex items-center pb-3 mb-1 border-b border-warm-100 text-[0.7rem] font-medium uppercase tracking-[0.04em] text-text-tertiary">
                <span className="flex-1">Scenario</span>
                <span className="w-24 text-right">SealMetrics</span>
                <span className="w-24 text-right">GA4</span>
              </div>
              {[
                { scenario: "Standard visit", sm: "100%", ga: "~100%" },
                { scenario: "Consent declined", sm: "100%", ga: "0%" },
                { scenario: "Safari ITP", sm: "100%", ga: "~30%" },
                { scenario: "Ad blocker active", sm: "100%", ga: "0%" },
                { scenario: "Firefox ETP", sm: "100%", ga: "~40%" },
                { scenario: "Incognito mode", sm: "100%", ga: "~60%" },
              ].map((row) => (
                <div
                  key={row.scenario}
                  className="flex items-center py-3 border-b border-warm-100/60 last:border-0 text-[0.85rem]"
                >
                  <span className="flex-1 text-text-secondary">
                    {row.scenario}
                  </span>
                  <span className="w-24 text-right font-mono text-green-muted font-medium">
                    {row.sm}
                  </span>
                  <span className="w-24 text-right font-mono text-text-tertiary">
                    {row.ga}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Attribution */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-warm-white border border-warm-100 rounded-[4px] p-8">
              <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-6">
                Attribution comparison &mdash; same traffic, different data
              </div>
              <div className="flex items-center pb-3 mb-1 border-b border-warm-100 text-[0.7rem] font-medium uppercase tracking-[0.04em] text-text-tertiary">
                <span className="flex-1">Channel</span>
                <span className="w-24 text-right">SealMetrics</span>
                <span className="w-24 text-right">GA4</span>
              </div>
              {[
                { channel: "Organic Search", sm: "€67,240", ga: "€12,100" },
                { channel: "Paid Search", sm: "€52,180", ga: "€8,450" },
                { channel: "Social (Meta)", sm: "€31,450", ga: "€4,200" },
                { channel: "Email", sm: "€22,890", ga: "€6,780" },
                { channel: "Direct", sm: "€11,070", ga: "€3,340" },
              ].map((row) => (
                <div
                  key={row.channel}
                  className="flex items-center py-3 border-b border-warm-100/60 last:border-0 text-[0.85rem]"
                >
                  <span className="flex-1 text-text-secondary">
                    {row.channel}
                  </span>
                  <span className="w-24 text-right font-mono text-text-primary font-medium">
                    {row.sm}
                  </span>
                  <span className="w-24 text-right font-mono text-text-tertiary">
                    {row.ga}
                  </span>
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-warm-100">
                <div className="flex items-center text-[0.85rem]">
                  <span className="flex-1 font-medium text-text-primary">
                    Total attributed
                  </span>
                  <span className="w-24 text-right font-mono text-text-primary font-medium">
                    €184,830
                  </span>
                  <span className="w-24 text-right font-mono text-text-tertiary">
                    €34,870
                  </span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-3">
                Revenue Attribution
              </span>
              <h2 className="headline-section mb-5">
                Know what actually drives revenue.
              </h2>
              <p className="text-[1rem] leading-[1.7] text-text-secondary mb-6">
                Attribution built on 13% of data produces misleading results.
                SealMetrics{" "}
                <Link
                  href="/integrations"
                  className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors"
                >
                  connects to 25+ platforms
                </Link>{" "}
                and ties every touchpoint to revenue using complete
                session data&nbsp;&mdash; showing the real ROI of every channel,
                campaign, and creative.
              </p>
              <ul className="space-y-2">
                {[
                  "Multi-touch attribution across the full journey",
                  "Channel and campaign-level revenue breakdown",
                  "Cost integration for true ROAS calculation",
                  "Funnel analysis with drop-off diagnostics",
                  "Cohort analysis and LTV modeling",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9rem] text-text-secondary"
                  >
                    <span className="text-text-tertiary shrink-0">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LENS AI */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-3">
                LENS AI
              </span>
              <h2 className="headline-section mb-5">
                Ask business questions. Get answers from complete data.
              </h2>
              <p className="text-[1rem] leading-[1.7] text-text-secondary mb-6">
                LENS monitors 60+ metrics continuously, detecting changes in
                traffic patterns, conversion rates, revenue trends, and channel
                performance. Ask questions in natural language and get
                decision-ready answers grounded in complete data&nbsp;&mdash; not
                dashboards that need interpretation.
              </p>
              <ul className="space-y-2">
                {[
                  "60+ automated anomaly detection rules",
                  "Natural language alerts and question answering",
                  "Root cause analysis with suggested actions",
                  "Revenue impact estimation per anomaly",
                  "Slack, email, and webhook notifications",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9rem] text-text-secondary"
                  >
                    <span className="text-text-tertiary shrink-0">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-warm-100 rounded-[4px] p-8 space-y-4">
              <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-2">
                LENS AI &mdash; Recent detections
              </div>
              {[
                {
                  severity: "High priority",
                  color: "text-red-alert",
                  text: "Organic traffic from Germany dropped 34% in 72h. Correlates with Search Console indexing alert.",
                  time: "2h ago",
                },
                {
                  severity: "Medium",
                  color: "text-[#E0A458]",
                  text: "Cart abandonment rate +12% on mobile since v4.2.1 deployment.",
                  time: "6h ago",
                },
                {
                  severity: "Insight",
                  color: "text-green-muted",
                  text: 'Email "Winter Sale" outperforming paid search 3.2x on ROAS. Consider budget reallocation.',
                  time: "1d ago",
                },
                {
                  severity: "Resolved",
                  color: "text-text-tertiary",
                  text: "Payment page 500 error resolved. Estimated recovered revenue: €4,200.",
                  time: "2d ago",
                },
              ].map((a) => (
                <div
                  key={a.text}
                  className="p-4 bg-warm-white border border-warm-100 rounded-[4px]"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`text-[0.65rem] font-medium uppercase tracking-[0.06em] ${a.color}`}
                    >
                      {a.severity}
                    </span>
                    <span className="text-[0.65rem] text-text-tertiary">
                      {a.time}
                    </span>
                  </div>
                  <div className="text-[0.8rem] text-text-secondary leading-snug">
                    {a.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agent Analytics */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-warm-white border border-warm-100 rounded-[4px] p-8">
              <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-6">
                Agent activity &mdash; last 7 days
              </div>
              {[
                { agent: "GPT-4 (OpenAI)", sessions: "1,247", pages: "4,891" },
                {
                  agent: "Claude (Anthropic)",
                  sessions: "892",
                  pages: "3,104",
                },
                { agent: "Perplexity", sessions: "634", pages: "2,340" },
                {
                  agent: "Google AI Overview",
                  sessions: "421",
                  pages: "1,687",
                },
                { agent: "Other AI agents", sessions: "298", pages: "1,052" },
              ].map((row) => (
                <div
                  key={row.agent}
                  className="flex justify-between items-center py-3 border-b border-warm-100/60 last:border-0"
                >
                  <span className="text-[0.85rem] text-text-secondary">
                    {row.agent}
                  </span>
                  <div className="flex gap-6">
                    <span className="font-mono text-[0.8rem] text-text-tertiary">
                      {row.sessions} sessions
                    </span>
                    <span className="font-mono text-[0.8rem] text-text-primary font-medium">
                      {row.pages} pages
                    </span>
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-warm-100">
                <div className="text-[0.75rem] text-green-muted font-medium">
                  Included free and unlimited on every plan
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-3">
                Agent Analytics
              </span>
              <h2 className="headline-section mb-5">
                See what AI agents do on your site.
              </h2>
              <p className="text-[1rem] leading-[1.7] text-text-secondary mb-6">
                ChatGPT, Claude, Perplexity, and other AI agents are already
                browsing your site&nbsp;&mdash; scraping content, answering
                questions about your products, sending traffic your way. Most
                analytics tools have no idea this is happening. SealMetrics
                tracks AI agent activity separately from human traffic, so you
                understand both audiences.
              </p>
              <ul className="space-y-2">
                {[
                  "Separate tracking for AI agents vs. human visitors",
                  "Identify which AI models browse your site",
                  "Understand how agents interact with your content",
                  "Monitor AI-driven referral traffic trends",
                  "Free and unlimited on every plan",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9rem] text-text-secondary"
                  >
                    <span className="text-text-tertiary shrink-0">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[600px] mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Reports
            </span>
            <h2 className="headline-section mb-4">
              Nine reports. Zero guesswork.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
              Every report is built on 100% of your data&nbsp;&mdash; not
              sampled, not modeled, not estimated. What you see is what actually
              happened.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reports.map((r, i) => (
              <div
                key={r.name}
                className="p-6 border border-warm-100 rounded-[4px] bg-white"
              >
                <span className="font-mono text-[0.75rem] text-text-tertiary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[1rem] font-medium text-text-primary mt-2 mb-2">
                  {r.name}
                </h3>
                <p className="text-[0.8rem] text-text-secondary leading-snug">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise comparison */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Enterprise Tier
            </span>
            <h2 className="headline-section mb-4">
              Enterprise-grade. Not enterprise pricing.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
              SealMetrics delivers complete data at a fraction of what GA360 or
              Adobe Analytics cost&nbsp;&mdash; with capabilities they do not
              offer.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: "SealMetrics",
                highlight: true,
                items: [
                  "100% data capture",
                  "LENS AI (60+ rules)",
                  "Agent Analytics (free)",
                  "EU-only servers",
                  "No consent required",
                  "From €199/mo",
                ],
              },
              {
                name: "GA360",
                highlight: false,
                items: [
                  "Consent-dependent capture",
                  "Basic AI insights",
                  "No agent tracking",
                  "US servers (EU limited)",
                  "Consent required",
                  "~$150,000/yr",
                ],
              },
              {
                name: "Adobe Analytics",
                highlight: false,
                items: [
                  "Consent-dependent capture",
                  "Adobe Sensei (add-on)",
                  "No agent tracking",
                  "Configurable residency",
                  "Consent required",
                  "~$100,000/yr",
                ],
              },
              {
                name: "Piwik PRO",
                highlight: false,
                items: [
                  "Consent-dependent capture",
                  "No AI detection",
                  "No agent tracking",
                  "EU available",
                  "Consent required",
                  "~€30,000/yr",
                ],
              },
            ].map((col) => (
              <div
                key={col.name}
                className={`p-7 rounded-[4px] ${
                  col.highlight
                    ? "border-2 border-text-primary"
                    : "border border-warm-100"
                }`}
              >
                <h3
                  className={`font-serif text-[1.1rem] font-medium mb-5 ${
                    col.highlight ? "text-text-primary" : "text-text-tertiary"
                  }`}
                >
                  {col.name}
                </h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-[0.85rem] ${
                        col.highlight ? "text-text-body" : "text-text-tertiary"
                      }`}
                    >
                      <span className="shrink-0">&mdash;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/vs-ga4"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              See the full SealMetrics vs GA4 comparison
            </Link>
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
            {productFaqs.map((faq) => (
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
      <section className="py-28 bg-white text-center border-t border-warm-100">
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            See it with your own data.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Built by a team that{" "}
            <Link
              href="/about"
              className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors"
            >
              understands ecommerce data
            </Link>
            , SealMetrics is constantly evolving. Check out our latest{" "}
            <Link
              href="/changelog"
              className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors"
            >
              product updates
            </Link>
            , or let us run it on your site and show you exactly what you
            have been missing.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Book a Demo
          </Link>
          <p className="mt-4 text-[0.8rem] text-text-tertiary">
            30-minute walkthrough. No commitment required.
          </p>
        </div>
      </section>
    </>
  );
}
