import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "SealMetrics for Education — Complete Enrollment Attribution",
  description:
    "Students research for months before enrolling. Cookie-based analytics loses the journey. SealMetrics captures every visit — cookieless, GDPR compliant.",
  openGraph: {
    title: "SealMetrics for Education",
    description:
      "Complete enrollment attribution for universities and education providers. 100% of prospective student journeys captured, cookieless, EU-hosted.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/for/education",
    languages: getAlternates("/for/education"),
  },
};

export default function ForEducationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For Education" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For Education", url: "/for/education" }])} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics for Education", description: "Students research for months before enrolling. Cookie-based analytics loses the journey. SealMetrics captures every visit — cookieless, GDPR compliant.", url: "/for/education", audience: "Educational Institutions" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              For Education
            </span>
            <h1 className="headline-hero mb-8">
              A prospective student visits your site 12 times before applying. You see 3 of those visits.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              University enrollment journeys span months — program research,
              campus comparisons, financial aid pages, open day registrations.
              Cookie expiration and EU consent rejection mean your{" "}
              <Link href="/glossary/multi-touch-attribution" className="text-text-secondary border-b border-warm-200 pb-0.5 no-underline hover:text-text-primary transition-colors">
                attribution
              </Link>{" "}
              captures fragments of a journey that determines your next intake.
              SealMetrics provides{" "}
              <Link href="/product" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">complete enrollment attribution</Link>{" "}
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
                title: "Enrollment attribution is disconnected",
                desc: "A student discovers you through a Google ad, returns via organic search, attends a virtual open day, and applies 4 months later. Cookies expired after the first session. Your analytics credits the application to direct traffic — or nothing.",
              },
              {
                title: "Campaign spend decisions lack evidence",
                desc: "You run campaigns across search, social, and display for each enrollment cycle. But when 60-70% of the resulting visits are invisible, you are allocating six-figure recruitment budgets based on which channels happen to have higher consent rates.",
              },
              {
                title: "Program page performance is a blind spot",
                desc: "Which program pages convert researchers into applicants? Which content drives open day registrations? When most visitor journeys are invisible, your content strategy is guided by the consented minority — not your full prospect base.",
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
                title: "Full enrollment funnel attribution",
                desc: "Every visit from first program search to application submission — connected across months and devices without cookies. See which channels, content, and events actually drive applications, not just which ones get last-click credit.",
              },
              {
                title: "Recruitment campaign ROI, measured",
                desc: "100% of conversions attributed to their actual source. Know exactly which campaigns drive open day registrations, information requests, and applications — and allocate recruitment budget with confidence.",
              },
              {
                title: "Complete program page analytics",
                desc: "See how ALL prospective students interact with program pages, compare offerings, and progress toward application. Identify which programs attract the most research, where prospects drop off, and which content drives action.",
              },
              {
                title: "LENS AI for education",
                desc: "Application funnel anomalies, traffic shifts during enrollment periods, program page engagement changes, and campaign performance drops — detected automatically. Spot issues during critical recruitment windows before they impact intake numbers.",
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
            Metrics that matter for education
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Prospective student visits captured" },
              { metric: "12+", label: "Avg. visits before application" },
              { metric: "0", label: "Cookie dependency" },
              { metric: "EU-only", label: "Data infrastructure" },
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
            See the complete enrollment journey.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            30-minute demo with your actual traffic. We show you every
            prospective student visit GA4 is missing — and what it means for
            your recruitment strategy.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            See Your Complete Enrollment Data
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
