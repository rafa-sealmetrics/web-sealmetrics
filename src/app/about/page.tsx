import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About SealMetrics — European Complete Analytics Platform",
  description:
    "SealMetrics is a European analytics company building complete-data analytics for eCommerce teams. Founded in Spain, EU-first by design.",
  openGraph: {
    title: "About SealMetrics — European Complete Analytics Platform",
    description:
      "SealMetrics is a European analytics company building decision infrastructure for eCommerce teams.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "About", url: "/about" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About SealMetrics",
          url: "https://sealmetrics.com/about",
          mainEntity: {
            "@type": "Organization",
            name: "SealMetrics",
            url: "https://sealmetrics.com",
            founders: [
              {
                "@type": "Person",
                name: "Rafa Jimenez",
                jobTitle: "Founder, SealMetrics",
                url: "https://sealmetrics.com/about",
                worksFor: {
                  "@type": "Organization",
                  name: "SealMetrics",
                },
                knowsAbout: [
                  "Web Analytics",
                  "GDPR Compliance",
                  "Cookieless Tracking",
                  "eCommerce Analytics",
                  "Privacy Engineering",
                ],
              },
            ],
          },
        }}
      />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              About SealMetrics
            </span>
            <h1 className="headline-hero mb-8">
              We build the base of reality for business decisions.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              SealMetrics is a European analytics company. We believe that the
              decisions shaping a business should be based on complete
              data&nbsp;&mdash; not on the fraction that cookie-based tools
              happen to capture.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="headline-section mb-6">Why we exist</h2>
              <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
                In 2020, we started asking a question that seemed simple: what
                percentage of web traffic does a typical European business
                actually measure?
              </p>
              <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
                The answer was alarming. Between GDPR consent rejection, browser
                privacy features, and ad blockers, the average EU website was
                measuring about 13% of its real visitors. Every marketing
                decision, every attribution model, every board report was built
                on a fraction of what actually happened.
              </p>
              <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
                We built SealMetrics to close that gap&nbsp;&mdash; not by
                fighting privacy regulation, but by designing analytics that
                work without cookies, without consent dependency, and without
                personal data collection. Privacy and complete data are not
                trade-offs. They are both possible.
              </p>
            </div>
            <div className="bg-warm-white border border-warm-100 rounded-[4px] p-9">
              <h3 className="font-serif text-[1.15rem] font-medium text-text-primary mb-6">
                Company facts
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Founded", value: "2020" },
                  { label: "Headquarters", value: "Spain, EU" },
                  { label: "Data residency", value: "EU-only" },
                  { label: "Focus", value: "eCommerce and agency analytics" },
                  {
                    label: "Approach",
                    value: "Cookieless, privacy-first, complete data",
                  },
                  {
                    label: "Clients",
                    value: "Enterprise eCommerce across Europe",
                  },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    className="flex justify-between items-baseline py-2 border-b border-warm-100/60 last:border-0"
                  >
                    <span className="text-[0.85rem] text-text-tertiary">
                      {fact.label}
                    </span>
                    <span className="text-[0.85rem] text-text-primary font-medium text-right">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">What we believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                title: "Complete data is infrastructure",
                desc: "Analytics is not a dashboard you check. It is the foundation on which every marketing decision rests. If the foundation captures only 13% of reality, every decision built on top is compromised.",
              },
              {
                title: "Privacy and measurement coexist",
                desc: "The analytics industry treated privacy as an obstacle. We treat it as a design constraint. SealMetrics collects zero personal data and captures 100% of traffic. Both statements are true simultaneously.",
              },
              {
                title: "Boring infrastructure is a feature",
                desc: "The best analytics platform is one that works reliably, quietly, and completely. We do not optimize for engagement with our product. We optimize for the quality of decisions our clients make.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="p-8 bg-white border border-warm-100 rounded-[4px]"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {p.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* European-first */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <h2 className="headline-section mb-6">European-first by design</h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              SealMetrics is headquartered in Spain and operates exclusively
              within EU infrastructure. This is not a feature added for
              compliance&nbsp;&mdash; it is a foundational architectural
              decision.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              All data processing, storage, and backup happens in EU data
              centers. There are no sub-processors outside Europe, no data
              transfers under Standard Contractual Clauses, and no reliance on
              US-EU framework adequacy decisions that may change.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
              For European businesses navigating an increasingly complex
              regulatory landscape, this simplicity matters. Your DPO does not
              need to evaluate data transfer mechanisms. Your legal team does not
              need to monitor framework adequacy decisions. The data stays in
              Europe because the infrastructure is in Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Who builds SealMetrics</h2>
          <div className="max-w-[700px]">
            <div className="p-8 bg-white border border-warm-100 rounded-[4px]">
              <div className="mb-4">
                <h3 className="font-serif text-[1.25rem] font-medium text-text-primary">
                  Rafa Jimenez
                </h3>
                <p className="text-[0.85rem] text-text-tertiary mt-1">
                  Founder, SealMetrics
                </p>
              </div>
              <div className="space-y-4 text-[0.95rem] leading-[1.75] text-text-secondary">
                <p>
                  Before founding SealMetrics in 2020, Rafa spent over a decade
                  working at the intersection of analytics, privacy, and
                  eCommerce. He saw firsthand how GDPR consent requirements were
                  eroding the data that marketing teams relied on — and how the
                  industry&apos;s response was to model the gaps rather than
                  close them.
                </p>
                <p>
                  SealMetrics was built on a contrarian premise: that privacy
                  regulation and complete data are not trade-offs. By designing
                  analytics infrastructure that collects zero personal data, the
                  consent question disappears entirely — and with it, the 87% of
                  traffic that cookie-based tools lose.
                </p>
                <p>
                  Rafa writes most of the content on this site and leads the
                  product and engineering teams. He is based in Spain.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/rafajimenez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.8rem] text-text-tertiary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary hover:border-text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-white text-center border-t border-warm-100">
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Want to see what complete data looks like?
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            We will run SealMetrics on your site and show you the difference
            between 13% and 100%.
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
