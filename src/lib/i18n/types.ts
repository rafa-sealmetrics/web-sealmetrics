export type Locale = "en" | "es";
export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "es"];
export const SITE_URL = "https://sealmetrics.com";
export const localePrefix: Record<Locale, string> = { en: "", es: "/es" };
