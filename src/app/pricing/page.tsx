import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — SealMetrics",
  description:
    "Transparent pricing based on monthly pageviews. All plans include full cookieless data capture and GDPR compliance.",
};

const plans = [
  {
    name: "Growth",
    desc: "For growing businesses establishing data-driven marketing.",
    price: "€390",
    period: "Up to 500K pageviews / month",
    features: [
      "Full cookieless tracking",
      "9 analytics reports",
      "3 domains",
      "Email support",
      "Standard integrations",
      "30-day data retention",
    ],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Business",
    desc: "For established teams that need attribution and intelligence.",
    price: "€790",
    period: "Up to 2M pageviews / month",
    features: [
      "Everything in Growth",
      "Revenue attribution",
      "LENS AI anomaly detection",
      "10 domains",
      "Priority support + onboarding",
      "12-month data retention",
      "Custom dashboards",
    ],
    cta: "Book a Demo",
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "For large organizations with custom infrastructure and compliance needs.",
    price: "Custom",
    period: "Unlimited pageviews",
    features: [
      "Everything in Business",
      "Unlimited domains",
      "Custom integrations",
      "Dedicated account manager",
      "SLA + dedicated infrastructure",
      "Unlimited data retention",
      "SSO / SAML",
      "Custom data residency",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

const faqs = [
  {
    q: "Can I run SealMetrics alongside Google Analytics?",
    a: "Yes. Many clients run both in parallel during the transition period. This lets you compare the data and see exactly what GA4 is missing before making any changes.",
  },
  {
    q: "Do I need to remove my consent banner?",
    a: "SealMetrics does not require a consent banner for analytics because it does not collect personal data or use cookies. However, if you use other tools that require consent, your banner can remain in place — SealMetrics works independently of consent status.",
  },
  {
    q: "Where is the data stored?",
    a: "All data is processed and stored exclusively in European infrastructure. We do not transfer data outside the EU under any circumstances.",
  },
  {
    q: "What counts as a pageview?",
    a: "Every page load by a visitor on your tracked domains counts as one pageview. Single-page application navigations are counted as separate pageviews when the URL changes.",
  },
  {
    q: "Can I upgrade or downgrade at any time?",
    a: "Yes. You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a free trial?",
    a: "We offer a personalized demo where we can show you the platform with your own data. Book a demo and we will walk you through everything in 30 minutes.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[600px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Pricing
            </span>
            <h1 className="headline-hero mb-6">
              Transparent pricing. No hidden costs.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Based on monthly tracked pageviews. All plans include full
              cookieless data capture, GDPR compliance, and EU data residency.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-9 rounded-[4px] relative ${
                  plan.featured
                    ? "border-2 border-text-primary"
                    : "border border-warm-100"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-8 px-3 py-1 bg-text-primary text-white text-[0.7rem] font-medium uppercase tracking-[0.04em] rounded-[2px]">
                    Most popular
                  </span>
                )}
                <div className="font-serif text-[1.25rem] font-medium text-text-primary mb-2">
                  {plan.name}
                </div>
                <div className="text-[0.85rem] text-text-secondary mb-6 leading-snug">
                  {plan.desc}
                </div>
                <div className="font-serif text-[2.5rem] text-text-primary mb-1">
                  {plan.price}
                  {plan.price !== "Custom" && (
                    <span className="text-[1rem] text-text-secondary font-normal">
                      {" "}
                      / month
                    </span>
                  )}
                </div>
                <div className="text-[0.8rem] text-text-tertiary mb-8">
                  {plan.period}
                </div>
                <ul className="space-y-1.5 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-[0.9rem] text-text-secondary"
                    >
                      <span className="text-text-tertiary shrink-0">
                        &mdash;
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/demo"
                  className={`block w-full py-3 text-center text-[0.9rem] font-medium rounded-[4px] no-underline transition-colors ${
                    plan.featured
                      ? "bg-text-primary text-white hover:bg-[#333]"
                      : "border border-warm-200 text-text-primary bg-white hover:bg-warm-white hover:border-text-body"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-8">
          <h2 className="headline-section mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="pb-8 border-b border-warm-100 last:border-0"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {faq.q}
                </h3>
                <p className="text-[0.95rem] leading-[1.7] text-text-secondary">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-24 bg-dark-bg text-center relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,127,0.05), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[500px] mx-auto px-8">
          <h2 className="headline-section mb-4">Not sure which plan?</h2>
          <p className="text-[1rem] leading-[1.7] text-dark-text-secondary mb-8">
            Book a demo and we will help you find the right fit for your
            business.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-dark-bg bg-green rounded-[4px] no-underline hover:shadow-[0_0_50px_-5px_rgba(0,255,127,0.4)] transition-shadow"
            style={{ boxShadow: "0 0 40px -10px rgba(0,255,127,0.3)" }}
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
