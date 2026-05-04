export const PRICING = {
  growth: { monthly: 599, annual: 499, eventsMillions: 5 },
  scale: { monthly: 1079, annual: 899, eventsMillions: 15 },
} as const;

export type PlanId = keyof typeof PRICING;

const LOCALE_FORMATTERS = {
  en: new Intl.NumberFormat("en-US"),
  es: new Intl.NumberFormat("es-ES"),
} as const;

export function fmtPrice(value: number, locale: "en" | "es" = "en"): string {
  return `€${LOCALE_FORMATTERS[locale].format(value)}`;
}

export function annualTotal(monthly: number): number {
  return monthly * 12;
}
