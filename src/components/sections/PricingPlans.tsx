"use client";

import { useState } from "react";
import Link from "next/link";

type Locale = "en" | "es";

interface Plan {
  name: string;
  desc: string;
  monthlyPrice: string;
  annualPrice: string;
  annualTotal: string;
  annualSave: string;
  period: string;
  roiContext: string;
  cta: string;
  ctaNote: string;
  featured: boolean;
  href: string;
}

const plansEn: Plan[] = [
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

const plansEs: Plan[] = [
  {
    name: "Growth",
    desc: "Para equipos que necesitan API, LENS AI y BigQuery",
    monthlyPrice: "€599",
    annualPrice: "€499",
    annualTotal: "€5.988 facturados anualmente",
    annualSave: "€499/mes con facturación anual",
    period: "5M eventos humanos/mes",
    roiContext: "Menos que el coste de una decisión de campaña mal atribuida.",
    cta: "Solicitar Demo",
    ctaNote: "14 días gratis · Sin tarjeta de crédito",
    featured: false,
    href: "/es/demo",
  },
  {
    name: "Scale",
    desc: "Para equipos eCommerce en crecimiento que necesitan atribución completa",
    monthlyPrice: "€1.079",
    annualPrice: "€899",
    annualTotal: "€10.788 facturados anualmente",
    annualSave: "€899/mes con facturación anual",
    period: "15M eventos humanos/mes",
    roiContext: "Para equipos que invierten \u20AC20K+/mes en paid media.",
    cta: "Solicitar Demo",
    ctaNote: "14 días gratis \u00b7 Sin tarjeta de crédito",
    featured: true,
    href: "/es/demo",
  },
  {
    name: "Enterprise",
    desc: "SSO, soporte dedicado, SLA personalizado",
    roiContext: "",
    monthlyPrice: "Personalizado",
    annualPrice: "Personalizado",
    annualTotal: "",
    annualSave: "",
    period: "Eventos humanos ilimitados/mes",
    cta: "Contactar Ventas",
    ctaNote: "",
    featured: false,
    href: "/es/demo",
  },
];

const copy = {
  en: {
    monthly: "Monthly",
    annual: "Annual",
    annualBadge: "2 months free",
    mostPopular: "Most popular",
    perMonth: "/ mo",
    aiAgents: "AI agents",
    comingSoon: "Coming Soon",
    customLabel: "Custom",
  },
  es: {
    monthly: "Mensual",
    annual: "Anual",
    annualBadge: "2 meses gratis",
    mostPopular: "Más popular",
    perMonth: "/ mes",
    aiAgents: "Agentes IA",
    comingSoon: "Próximamente",
    customLabel: "Personalizado",
  },
} as const;

export function PricingPlans({ locale = "en" }: { locale?: Locale }) {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const plans = locale === "es" ? plansEs : plansEn;
  const t = copy[locale];

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
              {t.monthly}
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-5 py-2 text-[0.85rem] font-medium rounded-[3px] transition-colors flex items-center gap-2 ${
                billing === "annual"
                  ? "bg-text-primary text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {t.annual}
              <span
                className={`text-[0.7rem] font-medium ${
                  billing === "annual"
                    ? "text-green-muted"
                    : "text-green-muted"
                }`}
              >
                {t.annualBadge}
              </span>
            </button>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {plans.map((plan) => {
            const isCustom = plan.monthlyPrice === "Custom" || plan.monthlyPrice === "Personalizado";
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
                    {t.mostPopular}
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
                      {t.perMonth}
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
                  {t.aiAgents}{" "}
                  <span className="inline-block px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-text-tertiary border border-warm-200 rounded-[2px]">
                    {t.comingSoon}
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
