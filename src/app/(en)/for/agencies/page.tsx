import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SealMetrics for Agencies — Prove Campaign ROI",
  description:
    "Stop defending campaign results with incomplete data. SealMetrics gives agencies 100% attribution across every client — no cookies, no consent gaps.",
  openGraph: {
    title: "SealMetrics for Agencies",
    description:
      "Complete attribution for every client. 100% of conversions captured, true campaign ROI, one source of truth across accounts.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/for/agencies",
  },
};

export default function ForAgenciesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For Agencies" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For Agencies", url: "/for/agencies" }])} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics for Agencies", description: "Stop defending campaign results with incomplete data. SealMetrics gives agencies 100% attribution across every client — no cookies, no consent gaps.", url: "/for/agencies", audience: "Marketing Agencies" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              For Agencies
            </span>
            <h1 className="headline-hero mb-8">
              Your clients doubt the numbers. Because the numbers are incomplete.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              When GA4 captures 13% of EU traffic, every client report is a
              negotiation. Ad platforms say one thing, analytics says another,
              and the client&apos;s CRM says a third. The problem is not your
              campaigns — it is the{" "}
              <Link href="/glossary/data-loss-in-analytics" className="text-text-secondary border-b border-warm-200 pb-0.5 no-underline hover:text-text-primary transition-colors">
                data loss
              </Link>{" "}
              between click and conversion. SealMetrics gives agencies{" "}
              <Link href="/product" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">complete multi-client analytics</Link>{" "}
              with one source of truth per account.
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
                title: "Client reporting is a credibility fight",
                desc: "You present campaign results and the client cross-references with their own data. The numbers never match. You spend hours reconciling instead of optimizing — and every discrepancy erodes trust.",
              },
              {
                title: "Attribution gaps cost you accounts",
                desc: "When 60-70% of conversions are invisible, your best campaigns look mediocre. Clients question your spend decisions. Some move to another agency. The real problem is the data, not the strategy.",
              },
              {
                title: "Multi-client reporting is unsustainable",
                desc: "Each client has different consent rates, different cookie setups, different data gaps. You are building reports on shifting foundations — and scaling means multiplying the reconciliation work.",
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
                title: "One source of truth per client",
                desc: "No more reconciling GA4, ad platforms, and CRM exports. SealMetrics captures 100% of sessions and conversions. When you present a number, it matches reality — and the client knows it.",
              },
              {
                title: "Prove campaign ROI with complete attribution",
                desc: "Every conversion attributed to its actual source, across every channel and touchpoint. Show clients the true ROAS of each campaign — not the fraction that cookies happened to track.",
              },
              {
                title: "Scale without multiplying the data problem",
                desc: "Same methodology, same completeness, every client. Onboard new accounts without worrying about consent rate variations or cookie policy differences. The data infrastructure is consistent from day one.",
              },
              {
                title: "LENS AI as your early warning system",
                desc: "60+ anomaly detection rules running across all client accounts. Traffic drops, conversion rate shifts, campaign performance changes — detected automatically and flagged before the client notices.",
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
            Metrics that matter for agencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Conversions captured" },
              { metric: "0", label: "Reconciliation gaps" },
              { metric: "60+", label: "LENS AI anomaly rules" },
              { metric: "1", label: "Source of truth per client" },
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
            Show your clients the complete picture.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            30-minute demo with real client data. We show you the gap between
            what GA4 reports and what actually happened.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Book a Demo for Your Agency
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
