import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How It Works — SealMetrics",
  description:
    "Understand how SealMetrics captures 100% of your traffic without cookies. First-party server-side collection explained simply.",
  openGraph: {
    title: "How It Works — SealMetrics",
    description:
      "How cookieless analytics captures 100% of your traffic. First-party server-side collection explained.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "How It Works" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "How It Works", url: "/how-it-works" }])} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              How It Works
            </span>
            <h1 className="headline-hero mb-8">
              A different approach to measurement.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Traditional analytics lose most of your data before it is even
              recorded. SealMetrics was built from scratch to solve
              this&nbsp;&mdash; without cookies, without consent dependency, and
              without compromising privacy.
            </p>
          </div>
        </div>
      </section>

      {/* The problem visual */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[800px]">
            <h2 className="headline-section mb-8">
              Where your data disappears
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-10">
              Your website has real visitors. But between consent banners, ad
              blockers, cookie expiration, and browser restrictions, only a
              fraction of them are recorded by traditional tools.
            </p>

            <div className="space-y-8">
              {[
                {
                  step: "70,000",
                  label: "Real visitors land on your site",
                  width: "100%",
                  color: "bg-text-primary",
                },
                {
                  step: "45,500",
                  label: "After consent banner (35% decline in EU)",
                  width: "65%",
                  color: "bg-text-body",
                },
                {
                  step: "27,300",
                  label: "After ad blockers strip tracking (40%)",
                  width: "39%",
                  color: "bg-text-secondary",
                },
                {
                  step: "16,400",
                  label: "After Safari ITP & Firefox ETP cookie limits",
                  width: "23%",
                  color: "bg-text-tertiary",
                },
                {
                  step: "10,000",
                  label: "What GA4 reports as your total traffic",
                  width: "14%",
                  color: "bg-red-alert",
                },
              ].map((item) => (
                <div key={item.step}>
                  <div className="flex justify-between text-[0.85rem] mb-2">
                    <span className="text-text-secondary">{item.label}</span>
                    <span className="font-mono text-text-primary font-medium">
                      {item.step}
                    </span>
                  </div>
                  <div className="h-6 bg-warm-100 rounded-[2px]">
                    <div
                      className={`h-full ${item.color} rounded-[2px]`}
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
              <div className="flex justify-between text-[0.85rem] mb-2">
                <span className="text-text-secondary">
                  What SealMetrics captures
                </span>
                <span className="font-mono text-green-muted font-medium">
                  70,000
                </span>
              </div>
              <div className="h-6 bg-warm-100 rounded-[2px]">
                <div className="h-full bg-green-muted rounded-[2px] w-full" />
              </div>
              <p className="text-[0.8rem] text-text-tertiary mt-3">
                100% capture. No consent dependency. No data loss.
              </p>
            </div>

            <p className="mt-8 text-[0.9rem] text-text-secondary">
              Want to see the numbers for your own site?{" "}
              <Link
                href="/data-loss-calculator"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                Calculate your data loss
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Three steps */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-16">How SealMetrics works</h2>
          <div className="space-y-20">
            {[
              {
                number: "01",
                title: "First-party data collection",
                desc: "A lightweight 846-byte script runs on your domain. It collects behavioral data through first-party server-side methods — meaning the data travels directly from your visitor's browser to your server, never through a third party.",
                details: [
                  "No third-party cookies or external requests",
                  "Invisible to ad blockers (first-party infrastructure)",
                  "Works regardless of consent banner status",
                  "Zero impact on page load speed (<50ms)",
                  "One line of code to install",
                ],
              },
              {
                number: "02",
                title: "Full-resolution processing",
                desc: "Every session is recorded individually. We do not model, sample, or estimate. When you see 72,847 visitors in your dashboard, that number represents 72,847 actual sessions — not a statistical projection.",
                details: [
                  "100% of sessions captured, not a sample",
                  "Real-time data processing",
                  "No data thresholds that trigger sampling",
                  "Session-level granularity for every visitor",
                  "EU-only infrastructure for all processing",
                ],
              },
              {
                number: "03",
                title: "Decision-ready intelligence",
                desc: "Complete data enables complete intelligence. Nine specialized reports, multi-touch revenue attribution, LENS AI anomaly detection with 60+ rules, and AI agent tracking — all built on the full picture, not approximations.",
                details: [
                  "9 report types covering the full funnel",
                  "Multi-touch attribution with complete journey data",
                  "LENS AI: ask questions in natural language, get answers from real data",
                  "AI agent tracking — see GPT, Claude, Perplexity visits as sessions",
                  "Revenue attribution by channel, campaign, and creative",
                ],
              },
            ].map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8"
              >
                <div className="font-serif text-[4rem] font-light text-warm-200 leading-none">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-serif text-[1.5rem] font-medium text-text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-6 max-w-[600px]">
                    {step.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {step.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 text-[0.9rem] text-text-body"
                      >
                        <span className="text-text-tertiary shrink-0">
                          &mdash;
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical details */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            What makes this different from other tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                title: "First-party, not third-party",
                desc: "Traditional tools send data to external servers via third-party requests. SealMetrics operates as first-party infrastructure on your domain, making it invisible to ad blockers and immune to third-party cookie restrictions.",
              },
              {
                title: "Server-side, not client-side",
                desc: "Client-side JavaScript is the first thing blocked by privacy tools. Our server-side collection method means the data path is between your visitor and your server — no external call to intercept.",
              },
              {
                title: "No cookies, no consent dependency",
                desc: "SealMetrics does not use cookies and does not collect personal data. This means consent banners do not affect data collection. You measure 100% of visitors regardless of their consent choice.",
              },
              {
                title: "No sampling, no modeling",
                desc: "GA4 applies data sampling when traffic exceeds certain thresholds. Adobe uses statistical modeling. SealMetrics records every session individually — what you see is what actually happened.",
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
          <p className="mt-10 text-[0.9rem] text-text-secondary">
            SealMetrics{" "}
            <Link
              href="/integrations"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              connects to 25+ platforms
            </Link>{" "}
            including Google Ads, Meta, Shopify, and BigQuery. Want the full technical and compliance details?{" "}
            <Link
              href="/security"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              Read our security and privacy architecture
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-warm-white text-center border-t border-warm-100">
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            See it with your own data.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Run SealMetrics alongside your current setup. Compare the numbers.
            Then decide. Or read more in our{" "}
            <Link
              href="/blog"
              className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors"
            >
              analytics blog
            </Link>
            .
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
