import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "SealMetrics for SaaS — Complete Trial-to-Paid Attribution",
  description:
    "SaaS buying journeys span weeks and multiple sessions. Cookie-based analytics loses the thread. SealMetrics captures every touchpoint, 100% complete.",
  openGraph: {
    title: "SealMetrics for SaaS",
    description:
      "Complete trial-to-paid attribution for SaaS. Full funnel visibility across long sales cycles and product-led growth.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/for/saas",
    languages: getAlternates("/for/saas"),
  },
};

export default function ForSaaSPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For SaaS" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For SaaS", url: "/for/saas" }])} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics for SaaS", description: "Your signup-to-paid journey spans weeks and multiple sessions. Cookie-based analytics loses the thread. SealMetrics captures every touchpoint — cookieless, 100% complete.", url: "/for/saas", audience: "SaaS Companies" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              For SaaS
            </span>
            <h1 className="headline-hero mb-8">
              Your best leads visit 7 times before signing up. You see 2 of those visits.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              SaaS buying journeys are long, multi-session, and multi-device.
              Cookie expiration and consent rejection in EU markets mean you
              lose the thread between first touch and paid conversion. Your{" "}
              attribution model is built on fragments. SealMetrics delivers{" "}
              <Link href="/product" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">complete trial-to-paid attribution</Link>{" "}
              across every touchpoint.
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
                title: "Trial-to-paid attribution is broken",
                desc: "A lead reads your blog, comes back via a retargeting ad, visits pricing twice, then signs up for a trial 3 weeks later. Cookies expired after the first visit. Your analytics credits the last touchpoint — or nothing at all.",
              },
              {
                title: "Content ROI is invisible",
                desc: "You invest in content marketing, SEO, and thought leadership. These channels drive top-of-funnel awareness that converts weeks later — but cookie-based analytics cannot connect the first visit to the eventual signup.",
              },
              {
                title: "PLG metrics are unreliable",
                desc: "Product-led growth depends on understanding the full journey from anonymous visitor to free user to paid customer. When 60-70% of that journey is invisible, your activation and conversion funnels are built on partial data.",
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
                title: "Full trial-to-paid attribution",
                desc: "Every session from first anonymous visit through trial signup to paid conversion — connected without cookies. See which channels, content, and campaigns actually drive revenue, not just which ones get last-click credit.",
              },
              {
                title: "Content marketing ROI, measured",
                desc: "Connect top-of-funnel blog visits to downstream conversions that happen weeks later. Know exactly which articles, guides, and landing pages contribute to pipeline — even when the visitor rejected cookies on their first visit.",
              },
              {
                title: "Complete product-led growth funnels",
                desc: "Track the full journey from anonymous visitor to free user to paid customer with 100% of data. Identify where users drop off, which activation steps matter most, and where to focus product and marketing effort.",
              },
              {
                title: "LENS AI for SaaS",
                desc: "Trial signup anomalies, activation rate shifts, conversion funnel changes, and traffic source performance — detected automatically across your complete data. Know when something changes before it shows up in your MRR.",
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
            Metrics that matter for SaaS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Visitor journeys captured" },
              { metric: "0", label: "Cookie dependency" },
              { metric: "7x", label: "Avg. touches before signup" },
              { metric: "60+", label: "LENS AI anomaly rules" },
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
            See the full journey from visit to revenue.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            30-minute demo with your actual traffic. We show you every
            touchpoint GA4 is missing — and how it connects to pipeline.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            See Your Complete Funnel Data
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
