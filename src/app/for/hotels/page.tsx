import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SealMetrics for Hotels — Complete Booking Attribution",
  description:
    "Your guests search on mobile, compare on desktop, and book on tablet. Traditional analytics sees fragments. SealMetrics captures the complete booking journey — cookieless.",
  openGraph: {
    title: "SealMetrics for Hotels",
    description:
      "Complete booking attribution for hotels and travel. Full journey visibility, direct vs OTA clarity, seasonal campaign optimization.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/for/hotels",
  },
};

export default function ForHotelsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For Hotels" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For Hotels", url: "/for/hotels" }])} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              For Hotels &amp; Travel
            </span>
            <h1 className="headline-hero mb-8">
              Your guests search on mobile, compare on desktop, and book on tablet. You see fragments.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Multi-device booking journeys and high consent rejection in EU
              travel markets mean 60-70% of your guest interactions are
              invisible. Your direct booking strategy is built on a fraction
              of the data. SealMetrics captures the{" "}
              <Link href="/glossary/cookieless-analytics" className="text-text-secondary border-b border-warm-200 pb-0.5 no-underline hover:text-text-primary transition-colors">
                complete journey
              </Link>
              .
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
                title: "Direct vs OTA attribution is a black box",
                desc: "You invest in driving direct bookings, but you cannot measure the true cost per direct booking versus OTA commission. When 60-70% of website visitors are invisible, your direct channel performance is guesswork.",
              },
              {
                title: "Multi-device journeys break attribution",
                desc: "A guest searches on their phone during lunch, compares prices on their laptop at home, and books on a tablet in bed. Cookie-based analytics sees three different visitors — not one guest on a booking journey.",
              },
              {
                title: "Seasonal campaign ROI is guesswork",
                desc: "Peak season ad spend decisions require confidence. But when you are making six-figure budget calls based on 30-40% of conversion data, you are optimizing for the visible minority — not your actual guest base.",
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
                title: "Complete booking funnel visibility",
                desc: "From initial search to rate comparison to final booking — across every device. See the full guest journey without relying on cookies or cross-device stitching that breaks with consent walls.",
              },
              {
                title: "Direct vs OTA channel clarity",
                desc: "Measure your true direct booking rate with 100% of data. See cost per booking by channel — direct, OTA, metasearch, paid campaigns — and make distribution strategy decisions based on complete numbers, not estimates.",
              },
              {
                title: "Seasonal campaign optimization",
                desc: "100% of conversion data means confident budget decisions for peak and off-peak seasons. Know exactly which campaigns drive bookings during high season, and which off-season promotions actually generate returns.",
              },
              {
                title: "LENS AI for hospitality",
                desc: "Booking anomalies, rate parity issues, sudden traffic drops from key source markets, and conversion rate shifts — detected in real-time and explained in plain language. No more discovering problems in the weekly revenue meeting.",
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
            Metrics that matter for hotels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Booking journeys captured" },
              { metric: "60-70%", label: "Previously invisible" },
              { metric: "0", label: "Cookies required" },
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
            See your complete booking data.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            30-minute demo with your actual traffic. We show you every booking
            journey GA4 is missing — and the revenue it represents.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            See Your Complete Booking Data
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
