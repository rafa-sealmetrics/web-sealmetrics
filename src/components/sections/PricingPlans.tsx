"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Growth",
    desc: "For teams that need API, LENS AI & BigQuery",
    monthlyPrice: "€599",
    annualPrice: "€499",
    annualTotal: "€5,988 billed annually",
    annualSave: "€499/mo if billed annually",
    period: "5M human events/mo",
    roiContext: "Less than the cost of one misattributed campaign decision.",
    cta: "Start Free Trial",
    ctaNote: "14-day free trial · No credit card required",
    featured: false,
    href: "/demo",
  },
  {
    name: "Scale",
    desc: "For growing eCommerce teams that need complete attribution",
    monthlyPrice: "€1,079",
    annualPrice: "€899",
    annualTotal: "€10,788 billed annually",
    annualSave: "€899/mo if billed annually",
    period: "15M human events/mo",
    roiContext: "For teams spending \u20AC20K+/mo in paid media.",
    cta: "Start Free Trial",
    ctaNote: "14-day free trial \u00b7 No credit card required",
    featured: true,
    href: "/demo",
  },
  {
    name: "Enterprise",
    desc: "SSO, dedicated support, custom SLA",
    roiContext: "",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    annualTotal: "",
    annualSave: "",
    period: "Unlimited human events/mo",
    cta: "Contact Sales",
    ctaNote: "",
    featured: false,
    href: "/demo",
  },
];

export function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  return (
    <section className="pb-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center border border-warm-200 rounded-[4px] p-1 bg-warm-white">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 text-[0.85rem] font-medium rounded-[3px] transition-colors ${
                billing === "monthly"
                  ? "bg-text-primary text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-5 py-2 text-[0.85rem] font-medium rounded-[3px] transition-colors flex items-center gap-2 ${
                billing === "annual"
                  ? "bg-text-primary text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Annual
              <span
                className={`text-[0.7rem] font-medium ${
                  billing === "annual"
                    ? "text-green-muted"
                    : "text-green-muted"
                }`}
              >
                2 months free
              </span>
            </button>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {plans.map((plan) => {
            const isCustom = plan.monthlyPrice === "Custom";
            const displayPrice =
              billing === "monthly" ? plan.monthlyPrice : plan.annualPrice;
            const subPrice =
              billing === "monthly"
                ? plan.annualSave
                : plan.annualTotal;

            return (
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
                  {displayPrice}
                  {!isCustom && (
                    <span className="text-[1rem] text-text-secondary font-normal">
                      {" "}
                      / mo
                    </span>
                  )}
                </div>
                <div className="text-[0.75rem] mb-2 min-h-[1.1rem]">
                  {isCustom ? (
                    <span className="text-text-tertiary">{plan.annualTotal}</span>
                  ) : subPrice ? (
                    <span className="text-green-muted">{subPrice}</span>
                  ) : null}
                </div>
                {plan.roiContext && (
                  <p className="text-[0.72rem] text-text-tertiary italic mb-2 leading-snug">
                    {plan.roiContext}
                  </p>
                )}
                <div className="text-[0.85rem] font-medium text-text-primary mb-1">
                  {plan.period}
                </div>
                <div className="text-[0.75rem] text-text-tertiary mb-8 flex items-center gap-2">
                  AI agents{" "}
                  <span className="inline-block px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-text-tertiary border border-warm-200 rounded-[2px]">
                    Coming Soon
                  </span>
                </div>
                <Link
                  href={plan.href}
                  className={`block w-full py-3 text-center text-[0.9rem] font-medium rounded-[4px] no-underline transition-colors ${
                    plan.featured
                      ? "bg-text-primary text-white hover:bg-[#333]"
                      : "border border-warm-200 text-text-primary bg-white hover:bg-warm-white hover:border-text-body"
                  }`}
                >
                  {plan.cta}
                </Link>
                {plan.ctaNote && (
                  <p className="text-[0.7rem] text-text-tertiary text-center mt-3">
                    {plan.ctaNote}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
