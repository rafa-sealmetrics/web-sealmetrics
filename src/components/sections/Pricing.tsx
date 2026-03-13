import Link from "next/link";

const plans = [
  {
    name: "Growth",
    desc: "For teams that need API, LENS AI & BigQuery.",
    price: "€599",
    period: "5M human events/mo",
    cta: "Start Free Trial",
    ctaHref: "/demo",
    featured: false,
  },
  {
    name: "Scale",
    desc: "For multi-brand retailers with Agent Analytics.",
    price: "€1,079",
    period: "15M human events/mo",
    cta: "Talk to Us",
    ctaHref: "/demo",
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "SSO, dedicated support, custom SLA, unlimited events.",
    price: "Custom",
    period: "Unlimited human events/mo",
    cta: "Contact Sales",
    ctaHref: "/demo",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="max-w-[700px] mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Pricing
          </span>
          <h2 className="headline-section mb-4">
            Enterprise analytics. Not enterprise pricing.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
            GA360 starts at $150,000/yr. Adobe Analytics at $100,000/yr.
            SealMetrics delivers complete data from €599/mo&nbsp;&mdash; with AI
            agent tracking included free on every plan.
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
              <div className="text-[0.8rem] text-text-secondary mb-6 leading-snug min-h-[2.5rem]">
                {plan.desc}
              </div>
              <div className="font-serif text-[2.5rem] text-text-primary mb-1">
                {plan.price}
                {plan.price !== "Custom" && (
                  <span className="text-[1rem] text-text-secondary font-normal">
                    {" "}
                    / mo
                  </span>
                )}
              </div>
              <div className="text-[0.8rem] text-text-tertiary mb-8">
                {plan.period}
              </div>
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

        <div className="text-center mt-8">
          <Link
            href="/pricing"
            className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
          >
            See full pricing details, feature comparison, and FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
