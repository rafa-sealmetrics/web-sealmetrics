import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Case Studies — SealMetrics",
  description:
    "How European eCommerce teams recovered their invisible revenue with SealMetrics. Real results, real numbers.",
  openGraph: {
    title: "Case Studies — SealMetrics",
    description:
      "How European eCommerce teams recovered their invisible revenue with SealMetrics.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Case Studies" }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Case Studies", url: "/case-studies" },
        ])}
      />

      {/* Hero */}
      <section className="pt-12 pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
            Case studies
          </span>
          <h1 className="headline-hero max-w-[640px] mb-6">
            Real results from real eCommerce teams.
          </h1>
          <p className="text-[1.1rem] text-text-secondary max-w-[560px] leading-relaxed">
            Not benchmarks. Not estimates. What actually changed when these teams
            stopped making decisions on incomplete data.
          </p>
        </div>
      </section>

      {/* Case study 1 — Fashion Retailer */}
      <section className="py-16 border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block text-[0.72rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
                Fashion eCommerce &middot; 45M&euro; revenue &middot;
                &euro;12K/mo paid media
              </span>
              <h2 className="text-[1.8rem] font-medium text-text-primary mb-4 leading-tight">
                74% of conversions were invisible. Every budget decision was
                wrong.
              </h2>
              <p className="text-[0.95rem] text-text-secondary leading-relaxed mb-6">
                A European fashion retailer with 200+ SKUs and &euro;12K/month
                in Google Ads was optimizing campaigns based on GA4 data. The
                problem: GA4 was only recording 26% of their real conversions.
                Their best-performing channels looked like their worst &mdash;
                because those channels had the lowest cookie acceptance rates.
              </p>
              <p className="text-[0.95rem] text-text-secondary leading-relaxed mb-8">
                After implementing SealMetrics alongside GA4, the team
                discovered the full picture within 30 days. They reallocated 35%
                of their paid media budget based on complete attribution data.
                ROAS improved 40% in the following quarter.
              </p>
              <blockquote className="border-l-2 border-warm-200 pl-5">
                <p className="text-[0.95rem] text-text-primary italic leading-relaxed mb-2">
                  &ldquo;Our entire attribution model was built on incomplete
                  data &mdash; every budget decision we made was wrong.
                  SealMetrics showed us we were missing 74% of our
                  conversions.&rdquo;
                </p>
                <footer className="text-[0.8rem] text-text-tertiary">
                  Head of Digital Marketing
                </footer>
              </blockquote>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  before: "12,400",
                  after: "47,200",
                  label: "Monthly visitors tracked",
                  pct: "+281%",
                },
                {
                  before: "340",
                  after: "1,290",
                  label: "Conversions recorded",
                  pct: "+279%",
                },
                {
                  before: "\u20AC89K",
                  after: "\u20AC342K",
                  label: "Revenue attributed/mo",
                  pct: "+284%",
                },
                {
                  before: "Baseline",
                  after: "+40%",
                  label: "ROAS improvement",
                  pct: "",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-5 bg-warm-white border border-warm-100 rounded-[4px]"
                >
                  <div className="text-[0.7rem] font-medium uppercase tracking-wider text-text-tertiary mb-2">
                    {stat.label}
                  </div>
                  <div className="text-[0.85rem] text-text-tertiary line-through mb-1">
                    {stat.before}
                  </div>
                  <div className="font-serif text-[1.6rem] font-medium text-text-primary">
                    {stat.after}
                  </div>
                  {stat.pct && (
                    <div className="text-[0.75rem] text-green-muted mt-1">
                      {stat.pct} vs GA4
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for more cases */}
      <section className="py-16 border-t border-warm-100 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[560px]">
            <span className="inline-block text-[0.72rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              More results coming
            </span>
            <h2 className="text-[1.4rem] font-medium text-text-primary mb-4">
              35+ eCommerce teams. More case studies being documented.
            </h2>
            <p className="text-[0.95rem] text-text-secondary leading-relaxed mb-6">
              Want to see results from a business similar to yours? Book a demo
              and we&rsquo;ll show you what teams in your sector have recovered.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center px-6 py-3 text-[0.9rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
            >
              See results for your sector &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="headline-section mb-4">Want to know your number?</h2>
          <p className="text-[1rem] text-text-secondary mb-8 max-w-[480px] mx-auto">
            We&rsquo;ll run SealMetrics alongside your current setup and show
            you exactly what you&rsquo;re missing. 30 minutes. Your data. No
            commitment.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-8 py-4 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Book a 30-minute demo
          </Link>
          <p className="mt-3 text-[0.8rem] text-text-tertiary">
            Or{" "}
            <Link
              href="/data-loss-calculator"
              className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors"
            >
              estimate your data loss in 2 minutes &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
