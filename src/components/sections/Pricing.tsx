import Link from "next/link";

const plans = [
  {
    name: "Growth",
    desc: "For growing businesses establishing data-driven marketing.",
    price: "€390",
    period: "Up to 500K pageviews",
    features: [
      "Full cookieless tracking",
      "9 analytics reports",
      "3 domains",
      "Email support",
      "Standard integrations",
    ],
    cta: "Get started",
    ctaHref: "/demo",
    featured: false,
  },
  {
    name: "Business",
    desc: "For established teams that need attribution and intelligence.",
    price: "€790",
    period: "Up to 2M pageviews",
    features: [
      "Everything in Growth",
      "Revenue attribution",
      "LENS AI anomaly detection",
      "10 domains",
      "Priority support + onboarding",
    ],
    cta: "Book a Demo",
    ctaHref: "/demo",
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
    ],
    cta: "Contact Sales",
    ctaHref: "/demo",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="max-w-[600px] mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Pricing
          </span>
          <h2 className="headline-section mb-4">
            Transparent pricing. No hidden costs.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
            Based on monthly tracked pageviews. All plans include full data
            capture and compliance features.
          </p>
        </div>

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
                    <span className="text-text-tertiary shrink-0">&mdash;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaHref}
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
  );
}
