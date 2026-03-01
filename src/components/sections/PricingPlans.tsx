"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for growing eCommerce teams",
    monthlyPrice: "€199",
    annualPrice: "€166",
    annualTotal: "€1,990 billed annually",
    annualSave: "€166/mo if billed annually",
    period: "1M human events/mo",
    cta: "Start Free Trial",
    ctaNote: "14-day free trial · No credit card required",
    featured: false,
    href: "/demo",
  },
  {
    name: "Growth",
    desc: "For growing teams that need BigQuery",
    monthlyPrice: "€499",
    annualPrice: "€416",
    annualTotal: "€4,990 billed annually",
    annualSave: "€416/mo if billed annually",
    period: "5M human events/mo",
    cta: "Start Free Trial",
    ctaNote: "14-day free trial · No credit card required",
    featured: false,
    href: "/demo",
  },
  {
    name: "Scale",
    desc: "For multi-brand retailers",
    monthlyPrice: "€899",
    annualPrice: "€749",
    annualTotal: "€8,990 billed annually",
    annualSave: "€749/mo if billed annually",
    period: "15M human events/mo",
    cta: "Talk to Us",
    ctaNote: "",
    featured: true,
    href: "/demo",
  },
  {
    name: "Enterprise",
    desc: "SSO, dedicated support, custom SLA",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    annualTotal: "From €3,000/mo",
    annualSave: "",
    period: "Unlimited human events/mo",
    cta: "Contact Sales",
    ctaNote: "",
    featured: false,
    href: "/demo",
  },
];

export function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
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
                <div className="text-[0.85rem] font-medium text-text-primary mb-1">
                  {plan.period}
                </div>
                <div className="text-[0.75rem] text-text-tertiary mb-8">
                  AI agents: unlimited (free)
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
