import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SealMetrics for eCommerce — Complete Revenue Attribution",
  description:
    "Stop optimizing ROAS on 30% of conversions. SealMetrics captures every add-to-cart, checkout, and purchase — cookieless, 100% attribution.",
  openGraph: {
    title: "SealMetrics for eCommerce",
    description:
      "Complete revenue attribution for eCommerce. 100% of conversions captured, true ROAS by channel, full cart abandonment analysis.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/for/ecommerce",
  },
};

export default function ForEcommercePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For eCommerce" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For eCommerce", url: "/for/ecommerce" }])} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              For eCommerce
            </span>
            <h1 className="headline-hero mb-8">
              You are optimizing ROAS on a fraction of your conversions.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              55% of EU visitors reject cookies entirely, and of those who
              accept, most do so after the landing page. The result: the
              majority of checkout journeys are invisible or misattributed.
              Your best campaigns may look like your worst — because you
              cannot see the{" "}
              <Link href="/glossary/cookieless-analytics" className="text-text-secondary border-b border-warm-200 pb-0.5 no-underline hover:text-text-primary transition-colors">
                cookieless
              </Link>{" "}
              conversions they generate. SealMetrics provides{" "}
              <Link href="/product" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">complete revenue attribution</Link>{" "}
              across every checkout journey.
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
                title: "Revenue attribution is broken",
                desc: "Ad platforms, GA4, and your CRM never agree on revenue numbers. You spend hours reconciling — and the gap only grows as consent rates drop. The problem is not the attribution model. It is the missing conversions.",
              },
              {
                title: "Invisible conversions distort ROAS",
                desc: "55% of visitors reject cookies, and most who accept do so after the landing page — meaning only ~16% have correct traffic source attribution. You are reallocating budget based on which channels happen to have higher consent rates — not which ones actually drive revenue.",
              },
              {
                title: "Cart abandonment data is incomplete",
                desc: "You only see abandonment from consented users. The full picture — where ALL users drop off, which payment methods cause friction, which steps lose the most revenue — is hidden behind the consent wall.",
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
                title: "Full-funnel revenue attribution",
                desc: "Every add-to-cart, checkout step, and purchase is captured — regardless of cookies or consent. See the complete path from first visit to transaction, across every channel and device.",
              },
              {
                title: "True ROAS by channel",
                desc: "100% of conversions attributed to their actual source, not modeled or estimated. When you see that a campaign delivers 4.2x ROAS, that number reflects every conversion it generated — not just the ones cookies happened to track.",
              },
              {
                title: "Complete cart abandonment analysis",
                desc: "See where ALL users drop off — not just the 30-40% who accepted cookies. Identify payment friction, shipping cost surprises, and checkout UX issues with data from every single visitor.",
              },
              {
                title: "LENS AI for eCommerce",
                desc: "60+ anomaly detection rules tuned for eCommerce patterns. Stock availability issues affecting conversion, payment gateway failures, sudden changes in average order value, and campaign performance shifts — detected automatically and explained in plain language.",
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

      {/* Case study */}
      <section className="py-16 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[760px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Real result
            </span>
            <h2 className="headline-section mb-8">
              European fashion retailer. 74% of conversions invisible to GA4.
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { num: "47,200", label: "Real visitors/mo", sub: "vs 12,400 in GA4" },
                { num: "1,290", label: "Tracked conversions", sub: "vs 340 in GA4" },
                { num: "\u20AC342K", label: "Revenue attributed", sub: "vs \u20AC89K in GA4" },
                { num: "+40%", label: "ROAS improvement", sub: "after 60 days" },
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-white border border-warm-100 rounded-[4px]">
                  <div className="font-serif text-[1.5rem] font-medium text-text-primary mb-1">{stat.num}</div>
                  <div className="text-[0.75rem] font-medium text-text-secondary mb-0.5">{stat.label}</div>
                  <div className="text-[0.7rem] text-text-tertiary">{stat.sub}</div>
                </div>
              ))}
            </div>
            <blockquote className="border-l-2 border-warm-200 pl-5 mb-6">
              <p className="text-[0.95rem] text-text-secondary italic leading-relaxed">
                &ldquo;Our entire attribution model was built on incomplete data
                &mdash; every budget decision we made was wrong. SealMetrics
                showed us we were missing 74% of our conversions.&rdquo;
              </p>
              <footer className="text-[0.8rem] text-text-tertiary mt-2">
                Head of Digital Marketing, European Fashion Retailer &mdash;
                45M&euro; revenue
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Metrics that matter */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            Metrics that matter for eCommerce
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Conversions captured" },
              { metric: "+40%", label: "ROAS visibility" },
              { metric: "280%", label: "More attributed revenue" },
              { metric: "0", label: "Consent dependency" },
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
            See your complete revenue data.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            We&rsquo;ll run SealMetrics alongside your GA4 for 30 days.
            You&rsquo;ll see every conversion your current setup is missing
            &mdash; and the revenue it represents.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            See your complete revenue data &rarr;
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
