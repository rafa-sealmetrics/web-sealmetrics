import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SealMetrics for CMOs — Decision Intelligence",
  description:
    "Stop making marketing decisions on 13% of your data. SealMetrics gives CMOs complete traffic visibility, accurate attribution, and AI-powered anomaly detection.",
  openGraph: {
    title: "SealMetrics for CMOs",
    description:
      "Complete data for confident marketing decisions. 100% traffic visibility, accurate attribution, AI anomaly detection.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/for/cmo",
  },
};

export default function ForCMOPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For CMOs" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For CMOs", url: "/for/cmo" }])} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics for CMOs", description: "Stop making marketing decisions on 13% of your data. SealMetrics gives CMOs complete traffic visibility, accurate attribution, and AI-powered anomaly detection.", url: "/for/cmo", audience: "Chief Marketing Officers" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              For CMOs
            </span>
            <h1 className="headline-hero mb-8">
              Every board report starts with data. Make sure it is complete.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              GA4 captures roughly 13% of EU traffic. Your attribution models,
              campaign decisions, and revenue reports are built on that fraction.
              SealMetrics{" "}
              <Link href="/product" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">captures 100% with complete attribution and AI-powered anomaly detection</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            Problems you recognize
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                title: "Attribution does not add up",
                desc: "Your channel attribution shows numbers that do not match actual revenue. You spend hours reconciling Google Ads, Meta, and GA4 data — and they never agree. The problem is not the model. It is the missing 87% of touchpoints.",
              },
              {
                title: "Board reports feel uncertain",
                desc: "You present traffic and conversion metrics to the board, but you know the numbers are approximations. When a board member asks why website data does not match CRM data, you do not have a satisfying answer.",
              },
              {
                title: "Campaign optimization is guesswork",
                desc: "You are optimizing ad spend based on partial data. A campaign that looks like it is underperforming might actually be your best performer — you just cannot see the conversions it generates from privacy-conscious visitors.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-warm-white border border-warm-100 rounded-[4px]"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What changes */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            What changes with complete data
          </h2>
          <div className="space-y-12 max-w-[750px]">
            {[
              {
                title: "Attribution you can trust",
                desc: "Revenue attribution built on 100% of visitor journeys. See which channels, campaigns, and creatives actually drive revenue — not which ones happen to be visible to cookies.",
              },
              {
                title: "LENS AI flags what matters",
                desc: "60+ anomaly detection rules running continuously on your complete data. When traffic drops, conversion rates shift, or a campaign underperforms, LENS tells you in plain language — before you discover it in a weekly review.",
              },
              {
                title: "One source of truth",
                desc: "No more reconciling GA4, ad platform dashboards, and CRM exports. SealMetrics captures every session, every conversion, and every revenue event. The numbers match because the data is complete.",
              },
              {
                title: "AI agent visibility (Coming Soon)",
                desc: "GPT, Claude, Perplexity, and Google AI Overviews are sending traffic to your site. Traditional analytics classify these visits as direct or unknown. SealMetrics identifies them as distinct agent sessions.",
              },
            ].map((item) => (
              <div key={item.title} className="pb-8 border-b border-warm-100 last:border-0">
                <h3 className="font-serif text-[1.15rem] font-medium text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.7] text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics that matter */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            Metrics that matter for CMOs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Traffic captured" },
              { metric: "9", label: "Report types" },
              { metric: "60+", label: "LENS AI anomaly rules" },
              { metric: "<50ms", label: "Script load time" },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-6 bg-warm-white border border-warm-100 rounded-[4px]"
              >
                <p className="font-mono text-[2rem] font-medium text-text-primary leading-tight">
                  {item.metric}
                </p>
                <p className="text-[0.8rem] text-text-tertiary mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-warm-white text-center border-t border-warm-100">
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            See what your marketing data has been missing.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            30-minute demo with your actual traffic. We show you the gap between
            GA4 and reality.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Book a Demo
          </Link>
          <p className="mt-4 text-[0.8rem] text-text-tertiary">
            Or{" "}
            <Link
              href="/data-loss-calculator"
              className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors"
            >
              calculate your data loss first
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
