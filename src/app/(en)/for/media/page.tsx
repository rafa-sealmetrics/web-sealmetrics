import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "SealMetrics for Media — Complete Audience Measurement",
  description:
    "When 60-70% of EU readers are invisible to analytics, your CPMs are undervalued. SealMetrics captures every visit — cookieless, 100% data.",
  openGraph: {
    title: "SealMetrics for Media",
    description:
      "Complete audience measurement for publishers. 100% of readers captured, accurate pageview counts, real engagement data for ad sales.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/for/media",
    languages: getAlternates("/for/media"),
  },
};

export default function ForMediaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For Media" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For Media", url: "/for/media" }])} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics for Media", description: "When 60-70% of EU readers are invisible to analytics, your CPMs are undervalued. SealMetrics captures every visit — cookieless, 100% data.", url: "/for/media", audience: "Media Publishers" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              For Media &amp; Publishers
            </span>
            <h1 className="headline-hero mb-8">
              Your audience is larger than your analytics says. Your ad revenue reflects the smaller number.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              EU consent rejection rates mean 60-70% of your readers never
              appear in analytics. Your real audience is 2-3x what you report
              to advertisers. Every invisible pageview is{" "}
              <Link href="/glossary/data-loss-in-analytics" className="text-text-secondary border-b border-warm-200 pb-0.5 no-underline hover:text-text-primary transition-colors">
                lost revenue
              </Link>
              . SealMetrics provides{" "}
              <Link href="/product" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">complete audience measurement</Link>{" "}
              so your ad rates reflect your true reach.
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
                title: "Audience numbers undervalue your inventory",
                desc: "Advertisers pay based on reported audience size. When your analytics only captures 30-40% of readers, your CPMs are calculated on a fraction of your true reach. You are selling your inventory at a discount without knowing it.",
              },
              {
                title: "Content performance data is distorted",
                desc: "Which articles drive engagement? Which topics retain readers? When most visits are invisible, your editorial decisions are guided by a biased sample — readers who accepted cookies, not your full audience.",
              },
              {
                title: "Subscription conversion funnels are incomplete",
                desc: "You cannot optimize a paywall you cannot measure. When 60-70% of reader journeys are invisible, your free-to-paid conversion funnel is built on partial data. The real drop-off points are hidden.",
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
                title: "True audience numbers for ad sales",
                desc: "Report your real audience size to advertisers — every reader, every pageview, every session. When your verified audience is 2-3x what GA4 reports, your CPMs and sponsorship rates should reflect that.",
              },
              {
                title: "Complete content performance analytics",
                desc: "See which articles, topics, and formats drive real engagement across 100% of your audience. Make editorial decisions based on your full readership, not the cookie-consented subset.",
              },
              {
                title: "Full subscription funnel visibility",
                desc: "Track every reader journey from first visit through paywall interaction to paid subscription. Identify the real conversion barriers and optimize with complete data — not a 30-40% sample.",
              },
              {
                title: "LENS AI for publishers",
                desc: "Traffic anomalies, engagement shifts, referral source changes, and content performance outliers — detected automatically. Know when a story is trending or when a traffic source drops before it impacts revenue.",
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
            Metrics that matter for publishers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Readers captured" },
              { metric: "2-3x", label: "True vs reported audience" },
              { metric: "0", label: "Cookie dependency" },
              { metric: "EU-only", label: "Infrastructure" },
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
            See your real audience size.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            30-minute demo with your actual traffic. We show you the gap
            between reported and real readership — and what it means for ad
            revenue.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            See Your Complete Audience Data
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
