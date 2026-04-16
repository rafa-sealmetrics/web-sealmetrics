import type { Locale } from "./types";
import en from "./dictionaries/en.json";
import es from "./dictionaries/es.json";

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return locale === "es" ? es : en;
}
