import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Integrations — SealMetrics",
  description:
    "Connect SealMetrics to Google Ads, Meta, Shopify, WooCommerce, BigQuery, and 20+ platforms. One-click setup, real-time data sync.",
  openGraph: {
    title: "Integrations — SealMetrics",
    description:
      "Connect SealMetrics to Google Ads, Meta, Shopify, WooCommerce, BigQuery, and 20+ platforms. One-click setup, real-time data sync.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/integrations",
  },
};

const categories = [
  {
    name: "Ad Platforms",
    integrations: [
      { icon: "G", name: "Google Ads" },
      { icon: "M", name: "Meta Ads" },
      { icon: "T", name: "TikTok Ads" },
      { icon: "M", name: "Microsoft Ads" },
      { icon: "L", name: "LinkedIn Ads" },
      { icon: "P", name: "Pinterest Ads" },
    ],
  },
  {
    name: "Ecommerce",
    integrations: [
      { icon: "S", name: "Shopify" },
      { icon: "W", name: "WooCommerce" },
      { icon: "P", name: "PrestaShop" },
      { icon: "M", name: "Magento" },
      { icon: "B", name: "BigCommerce" },
      { icon: "C", name: "Custom (API)" },
    ],
  },
  {
    name: "CRM & Marketing",
    integrations: [
      { icon: "H", name: "HubSpot" },
      { icon: "S", name: "Salesforce" },
      { icon: "K", name: "Klaviyo" },
      { icon: "M", name: "Mailchimp" },
      { icon: "A", name: "ActiveCampaign" },
    ],
  },
  {
    name: "Data & Infrastructure",
    integrations: [
      { icon: "B", name: "BigQuery" },
      { icon: "G", name: "Google Sheets" },
      { icon: "W", name: "Webhooks" },
      { icon: "R", name: "REST API" },
      { icon: "Z", name: "Zapier" },
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Connect your account",
    desc: "Authenticate directly from the SealMetrics dashboard. No API keys, no manual configuration.",
  },
  {
    number: "02",
    title: "Data flows automatically",
    desc: "Revenue, campaign spend, and conversion data sync in real-time across all connected platforms.",
  },
  {
    number: "03",
    title: "See complete attribution",
    desc: "Every channel, every touchpoint, every conversion — attributed with 100% data.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Integrations" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Integrations", url: "/integrations" }])} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Integrations
            </span>
            <h1 className="headline-hero mb-8">
              Connect to your existing stack.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              SealMetrics integrates with your marketing platforms, ecommerce
              systems, CRMs, and data infrastructure. Most integrations are
              one-click setup.
            </p>
          </div>
        </div>
      </section>

      {/* Integration categories */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category.name}>
                <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-6">
                  {category.name}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.integrations.map((int) => (
                    <div
                      key={`${category.name}-${int.name}`}
                      className="p-5 text-center border border-warm-100 rounded-[4px] bg-white hover:border-text-tertiary transition-colors"
                    >
                      <div className="text-[1.5rem] opacity-40 text-text-secondary">
                        {int.icon}
                      </div>
                      <div className="text-[0.8rem] text-text-secondary mt-3">
                        {int.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px] mb-16">
            <h2 className="headline-section mb-4">
              One-click integration, no engineering required.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-8 bg-warm-white border border-warm-100 rounded-[4px]"
              >
                <span className="font-mono text-[0.75rem] text-text-tertiary">
                  {step.number}
                </span>
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom integrations */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <h2 className="headline-section mb-6">
              Need a custom integration?
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              SealMetrics provides a full REST API and webhook support for
              teams that need to build custom data pipelines. Push conversion
              data, pull attribution reports, or trigger workflows based on
              real-time analytics events.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-8">
              For enterprise deployments, our onboarding team handles the
              integration end-to-end&nbsp;&mdash; connecting your ecommerce
              platform, ad accounts, and data warehouse so you see complete{" "}
              <Link
                href="/glossary/revenue-attribution"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                revenue attribution
              </Link>{" "}
              from day one.
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <Link
                href="/product"
                className="text-[0.9rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                See the full platform
              </Link>
              <Link
                href="/demo"
                className="text-[0.9rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                Book a demo for custom needs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-white text-center border-t border-warm-100">
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Ready to connect your stack?
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Most integrations take under five minutes. Our team handles the
            rest.
          </p>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <Link
              href="/demo"
              className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center px-7 py-3.5 text-[0.95rem] text-text-secondary border border-warm-200 rounded-[4px] no-underline hover:border-text-body hover:text-text-primary transition-colors"
            >
              See Full Platform
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
