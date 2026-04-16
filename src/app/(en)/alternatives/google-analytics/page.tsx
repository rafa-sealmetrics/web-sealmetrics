import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Google Analytics Alternatives (2026) — 8 Tools Compared",
  description:
    "Compare 8 Google Analytics alternatives on data capture, GDPR compliance, pricing, and features. Find the right fit for your team.",
  openGraph: {
    title: "Google Analytics Alternatives (2026) — 8 Tools Compared",
    description:
      "Find the right Google Analytics alternative. Compare 8 platforms on data completeness, EU compliance, and pricing.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/alternatives/google-analytics",
  },
};

const alternatives = [
  {
    name: "SealMetrics",
    url: "https://sealmetrics.com",
    tagline: "Cookieless analytics with 100% data capture",
    pricing: "From \u20ac599/mo",
    euDataCapture: "100%",
    gdprCompliance: "By design — no PII, no consent needed",
    ecommerce: "Last-click revenue attribution, LENS AI, agent analytics",
    chooseIf:
      "You need complete EU data, GDPR compliance built into the architecture, and enterprise analytics without enterprise pricing.",
  },
  {
    name: "Google Analytics 360",
    url: "https://marketingplatform.google.com/about/analytics-360/",
    tagline: "Enterprise tier of Google Analytics",
    pricing: "$150,000+/yr",
    euDataCapture: "~30-35%",
    gdprCompliance: "Requires DPA, consent mode v2, legal review",
    ecommerce: "Enhanced eCommerce, Google Ads attribution",
    chooseIf:
      "Budget is not a constraint, you are deeply embedded in the Google ecosystem, and consent rates in your markets exceed 70%.",
  },
  {
    name: "Adobe Analytics",
    url: "https://business.adobe.com/products/analytics/adobe-analytics.html",
    tagline: "Enterprise segmentation and reporting",
    pricing: "$100,000+/yr",
    euDataCapture: "~30%",
    gdprCompliance: "Requires configuration and legal review",
    ecommerce: "Advanced segmentation, calculated metrics",
    chooseIf:
      "You already use Adobe Experience Cloud and have dedicated Adobe analysts on staff.",
  },
  {
    name: "Piwik PRO",
    url: "https://piwikpro.com/",
    tagline: "EU-native privacy analytics",
    pricing: "From ~\u20ac30,000/yr",
    euDataCapture: "~35%",
    gdprCompliance: "EU-only hosting, bundled consent manager",
    ecommerce: "Standard eCommerce tracking, custom events",
    chooseIf:
      "You operate in regulated sectors where data sovereignty is the primary requirement.",
  },
  {
    name: "Matomo",
    url: "https://matomo.org/",
    tagline: "Open-source, self-hosted analytics",
    pricing: "Free (self-hosted) / From \u20ac23/mo",
    euDataCapture: "~40-60%",
    gdprCompliance: "Full data ownership if self-hosted",
    ecommerce: "eCommerce plugin, goals, funnels (paid)",
    chooseIf:
      "You have DevOps capacity for self-hosting and want open-source data ownership.",
  },
  {
    name: "Amplitude",
    url: "https://amplitude.com/",
    tagline: "Product analytics and experimentation",
    pricing: "From ~$50,000/yr",
    euDataCapture: "Varies",
    gdprCompliance: "Standard DPA, US/EU hosting",
    ecommerce: "Product-focused: funnels, retention, cohorts",
    chooseIf:
      "Your primary need is product analytics — feature adoption and in-app behavior — not web traffic measurement.",
  },
  {
    name: "Mixpanel",
    url: "https://mixpanel.com/",
    tagline: "Event-based analytics with intuitive UI",
    pricing: "Free tier / From ~$25,000/yr",
    euDataCapture: "Varies",
    gdprCompliance: "EU residency option available",
    ecommerce: "Event-based tracking, funnels, retention",
    chooseIf:
      "You need event-based product analytics with a generous free tier and lower complexity than Amplitude.",
  },
  {
    name: "Plausible / Fathom",
    url: "https://plausible.io/",
    tagline: "Lightweight privacy-first analytics",
    pricing: "From \u20ac9-19/mo",
    euDataCapture: "~80-90%",
    gdprCompliance: "No cookies, minimal data collection",
    ecommerce: "Basic pageview + goal tracking only",
    chooseIf:
      "You run a small to mid-sized site, need basic traffic metrics, and want simplicity over depth. Note: these are not enterprise analytics tools.",
  },
];

const faqs = [
  {
    question: "Why are teams switching away from Google Analytics?",
    answer:
      "Three primary reasons: GDPR compliance concerns with US data transfers, data loss from cookie consent rejection (35-55% of EU visitors reject cookies), and data sampling that reduces accuracy for high-traffic sites. These issues compound — enterprise teams making budget decisions on incomplete data face measurable business impact.",
  },
  {
    question:
      "What is the difference between Google Analytics alternatives and GA4 alternatives?",
    answer:
      'They overlap but are not identical. "Google Analytics alternatives" includes replacements for both the free GA4 tier and the enterprise GA360 tier. GA4 alternatives specifically target teams using the free version who need more — typically better data capture, EU compliance, or unsampled reporting.',
  },
  {
    question: "Can cookieless analytics replace Google Analytics completely?",
    answer:
      "For web traffic measurement, last-click revenue attribution, and campaign analysis — yes. Cookieless platforms like SealMetrics capture 100% of visitors and provide enterprise-grade reporting. The main limitation is the absence of native Google Ads integration, though data export bridges this gap for most use cases.",
  },
  {
    question:
      "How much traffic does Google Analytics actually miss in Europe?",
    answer:
      "In the EU, GA4 typically captures between 13% and 45% of actual website traffic. The gap comes from cookie consent rejection (35-55% of visitors), ad blocker usage (affecting 40%+ of sessions), and data sampling on high-traffic reports. The exact number depends on your market, consent implementation, and traffic volume.",
  },
  {
    question:
      "Are lightweight tools like Plausible or Fathom real alternatives to Google Analytics?",
    answer:
      "For small to mid-sized sites with basic measurement needs, yes. For enterprise teams that need segmentation, revenue attribution, AI-powered anomaly detection, or detailed eCommerce analytics, lightweight tools lack the depth required. They occupy a different category — privacy-first simplicity vs. enterprise-grade analysis.",
  },
];

export default function GoogleAnalyticsAlternativesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Alternatives", href: "/alternatives/google-analytics" },
          { label: "Google Analytics" },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Google Analytics Alternatives (2026)",
          description:
            "Compare 8 Google Analytics alternatives on data capture, GDPR compliance, pricing, and features.",
          url: "https://sealmetrics.com/alternatives/google-analytics",
          dateModified: "2026-03-16",
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Alternatives" },
          { name: "Google Analytics" },
        ])}
      />
      <JsonLd
        data={itemListSchema({
          name: "Google Analytics Alternatives 2026",
          description:
            "8 Google Analytics alternatives compared on data capture, EU compliance, and pricing.",
          url: "/alternatives/google-analytics",
          items: alternatives.map((a, i) => ({
            name: a.name,
            url: a.url,
            position: i + 1,
          })),
        })}
      />
      <JsonLd
        data={faqSchema(faqs)}
      />

      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[750px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Alternatives
            </span>
            <h1 className="headline-hero mb-8">
              Google Analytics Alternatives
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Google Analytics dominates web analytics by default, not by
              data quality. In Europe, GA4 captures{" "}
              <Link
                href="/blog/why-ga4-shows-13pct-eu-traffic"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                as little as 13% of actual traffic
              </Link>{" "}
              due to cookie consent rejection, ad blockers, and data sampling.
              These eight alternatives address different aspects of that problem.
            </p>
          </div>
        </div>
      </section>

      {/* Summary comparison table */}
      <section className="pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="overflow-x-auto bg-white border border-warm-100 rounded-[4px]">
            <table className="w-full border-collapse text-[0.85rem]">
              <thead>
                <tr className="bg-warm-50">
                  <th className="text-left py-4 px-5 font-medium text-[0.75rem] text-text-tertiary border-b border-warm-100 uppercase tracking-[0.04em]">
                    Platform
                  </th>
                  <th className="text-left py-4 px-5 font-medium text-[0.75rem] text-text-tertiary border-b border-warm-100 uppercase tracking-[0.04em]">
                    Pricing
                  </th>
                  <th className="text-left py-4 px-5 font-medium text-[0.75rem] text-text-tertiary border-b border-warm-100 uppercase tracking-[0.04em]">
                    EU Data Capture
                  </th>
                  <th className="text-left py-4 px-5 font-medium text-[0.75rem] text-text-tertiary border-b border-warm-100 uppercase tracking-[0.04em]">
                    GDPR
                  </th>
                  <th className="text-left py-4 px-5 font-medium text-[0.75rem] text-text-tertiary border-b border-warm-100 uppercase tracking-[0.04em]">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody>
                {alternatives.map((alt) => (
                  <tr
                    key={alt.name}
                    className="border-b border-warm-100 last:border-0"
                  >
                    <td className="py-3.5 px-5 text-text-primary font-medium">
                      {alt.name}
                    </td>
                    <td className="py-3.5 px-5 text-text-body font-mono text-[0.75rem]">
                      {alt.pricing}
                    </td>
                    <td className="py-3.5 px-5 text-text-body font-mono text-[0.75rem]">
                      {alt.euDataCapture}
                    </td>
                    <td className="py-3.5 px-5 text-text-secondary text-[0.8rem]">
                      {alt.gdprCompliance}
                    </td>
                    <td className="py-3.5 px-5 text-text-secondary text-[0.8rem]">
                      {alt.chooseIf.split(".")[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why look for alternatives */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <h2 className="headline-section mb-6">
              Why teams look for Google Analytics alternatives
            </h2>
            <div className="space-y-5 text-[1.05rem] leading-[1.75] text-text-secondary">
              <p>
                The decision to evaluate alternatives typically comes from one of
                three directions — and they compound.
              </p>
              <p>
                <strong className="font-semibold text-text-primary">
                  Data completeness.
                </strong>{" "}
                In the EU, cookie consent rejection rates of 35-55% mean
                Google Analytics shows a fraction of actual traffic. Ad blockers
                remove another layer. Data sampling estimates the rest. The
                compounding effect is that enterprise teams are making budget
                decisions on{" "}
                <Link
                  href="/glossary/data-loss-in-analytics"
                  className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  incomplete data
                </Link>
                .
              </p>
              <p>
                <strong className="font-semibold text-text-primary">
                  GDPR and privacy compliance.
                </strong>{" "}
                US data processing, cookie dependency, and evolving DPA guidance
                create ongoing legal uncertainty. Several EU Data Protection
                Authorities have questioned whether GA4 meets GDPR
                requirements. The{" "}
                <Link
                  href="/blog/eu-digital-omnibus-marketer-guide-2026"
                  className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  EU Digital Omnibus regulation
                </Link>{" "}
                is reshaping the landscape further.
              </p>
              <p>
                <strong className="font-semibold text-text-primary">
                  Cost of enterprise tiers.
                </strong>{" "}
                GA360 at $150,000+/yr solves some of GA4&rsquo;s limitations
                (sampling, support) but not the fundamental ones (cookies,
                consent, EU data residency). Organizations are asking whether
                that budget produces complete data — or pays a premium for better
                estimates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Individual alternatives */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            8 Google Analytics alternatives compared
          </h2>
          <div className="space-y-16">
            {alternatives.map((alt, i) => (
              <div
                key={alt.name}
                className="max-w-[700px]"
              >
                <h3 className="font-serif text-[1.3rem] font-medium text-text-primary mb-2">
                  {i + 1}. {alt.name}
                </h3>
                <p className="text-[0.85rem] text-text-tertiary mb-4">
                  {alt.tagline} &middot; {alt.pricing}
                </p>
                <div className="space-y-4 text-[0.95rem] leading-[1.75] text-text-secondary">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-warm-white border border-warm-100 rounded-[4px] text-[0.85rem]">
                    <div>
                      <span className="block text-text-tertiary text-[0.75rem] uppercase tracking-[0.04em] mb-1">
                        EU Data Capture
                      </span>
                      <span className="font-mono text-text-primary">
                        {alt.euDataCapture}
                      </span>
                    </div>
                    <div>
                      <span className="block text-text-tertiary text-[0.75rem] uppercase tracking-[0.04em] mb-1">
                        GDPR Compliance
                      </span>
                      <span className="text-text-primary">
                        {alt.gdprCompliance}
                      </span>
                    </div>
                    <div>
                      <span className="block text-text-tertiary text-[0.75rem] uppercase tracking-[0.04em] mb-1">
                        eCommerce Features
                      </span>
                      <span className="text-text-primary">
                        {alt.ecommerce}
                      </span>
                    </div>
                    <div>
                      <span className="block text-text-tertiary text-[0.75rem] uppercase tracking-[0.04em] mb-1">
                        Pricing
                      </span>
                      <span className="font-mono text-text-primary">
                        {alt.pricing}
                      </span>
                    </div>
                  </div>
                  <p>
                    <strong className="font-semibold text-text-primary">
                      Choose if:
                    </strong>{" "}
                    {alt.chooseIf}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision framework */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <h2 className="headline-section mb-6">How to choose</h2>
            <div className="space-y-5 text-[1.05rem] leading-[1.75] text-text-secondary">
              <p>
                Start with three questions. The answers narrow the field quickly.
              </p>
              <p>
                <strong className="font-semibold text-text-primary">
                  Where is your traffic?
                </strong>{" "}
                If the majority of visitors are European, cookie-dependent tools
                will structurally undercount your traffic by 35-55%. This is not
                configurable — it is architectural. Cookieless platforms avoid
                this gap entirely.
              </p>
              <p>
                <strong className="font-semibold text-text-primary">
                  Web analytics or product analytics?
                </strong>{" "}
                Amplitude and Mixpanel measure in-app behavior. GA4, GA360,
                Adobe, Piwik PRO, Matomo, and SealMetrics measure web traffic.
                Using one for the other&rsquo;s purpose creates friction that
                configuration cannot solve.
              </p>
              <p>
                <strong className="font-semibold text-text-primary">
                  What is your real budget?
                </strong>{" "}
                Include implementation time, required consultants, ongoing
                maintenance, and the cost of decisions based on incomplete data.
                Use the{" "}
                <Link
                  href="/data-loss-calculator"
                  className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  data loss calculator
                </Link>{" "}
                to quantify what incomplete data costs your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="pb-8 border-b border-warm-100 last:border-0"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-[0.95rem] leading-[1.7] text-text-secondary">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-16 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <p className="text-[0.8rem] text-text-tertiary mb-4 font-medium uppercase tracking-[0.06em]">
            Related comparisons
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href="/vs-ga4"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              SealMetrics vs GA4
            </Link>
            <Link
              href="/vs/ga360"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              SealMetrics vs GA360
            </Link>
            <Link
              href="/vs/adobe-analytics"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              SealMetrics vs Adobe Analytics
            </Link>
            <Link
              href="/vs/piwik-pro"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              SealMetrics vs Piwik PRO
            </Link>
            <Link
              href="/blog/best-enterprise-analytics-platforms"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              Best Enterprise Analytics Platforms
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-white text-center border-t border-warm-100">
        <div className="max-w-[550px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            See complete data for yourself.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Run SealMetrics alongside Google Analytics. Compare what each tool
            reports against your actual server logs. Then decide which one tells
            you the truth.
          </p>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <Link
              href="/demo"
              className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/data-loss-calculator"
              className="inline-flex items-center px-9 py-4 text-[1rem] text-text-secondary bg-transparent border border-warm-200 rounded-[4px] no-underline hover:border-text-body hover:text-text-primary transition-colors"
            >
              Calculate Your Data Loss
            </Link>
          </div>
          <p className="mt-4 text-[0.8rem] text-text-tertiary">
            30-minute walkthrough. No commitment required.
          </p>
        </div>
      </section>
    </>
  );
}
