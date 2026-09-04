/**
 * The competitors the comparison pages name, as entities rather than strings.
 *
 * WHY THIS FILE EXISTS
 * Each `/vs/*` and `/alternatives/*` page used to pass its competitor inline to
 * `comparisonPageSchema()`, so the same product was described slightly
 * differently on each page and there was nowhere to record what it *is*. One
 * record per competitor means an engine reading two of our pages sees the same
 * entity twice, not two similar-looking strings.
 *
 * ON `wikidata`
 * Only present where an item actually exists, checked against the Wikidata
 * search API on 4 September 2026. **Adobe Analytics and Piwik PRO have no
 * Wikidata item** — Adobe has only `Q7090416` (Omniture, the business it
 * acquired) and `Q16927817` (Adobe for Business, the umbrella), neither of
 * which is the product. Leaving the field out is correct: a `sameAs` pointing
 * at an approximately-related entity is a false statement about identity, and
 * costs more than saying nothing. Add one the day the item exists.
 *
 * Analytics 360 is a tier of Google Analytics, not a separate product, so it
 * carries the same identity as GA4.
 */

export type Competitor = {
  /** Product name as the pages write it. */
  name: string;
  /** The vendor's own page for the product. */
  url: string;
  /** Wikidata item URI, when the product has one. */
  wikidata?: string;
};

export const COMPETITORS = {
  "google-analytics": {
    name: "Google Analytics",
    url: "https://marketingplatform.google.com/about/analytics/",
    wikidata: "https://www.wikidata.org/wiki/Q220577",
  },
  "google-analytics-4": {
    name: "Google Analytics 4",
    url: "https://marketingplatform.google.com/about/analytics/",
    wikidata: "https://www.wikidata.org/wiki/Q220577",
  },
  ga360: {
    name: "Google Analytics 360",
    url: "https://marketingplatform.google.com/about/analytics-360/",
    wikidata: "https://www.wikidata.org/wiki/Q220577",
  },
  matomo: {
    name: "Matomo",
    url: "https://matomo.org/",
    wikidata: "https://www.wikidata.org/wiki/Q34162",
  },
  "adobe-analytics": {
    name: "Adobe Analytics",
    url: "https://business.adobe.com/products/analytics/adobe-analytics.html",
    // No Wikidata item for the product. See the note above.
  },
  "piwik-pro": {
    name: "Piwik PRO",
    url: "https://piwik.pro/",
    // No Wikidata item. See the note above.
  },
} as const satisfies Record<string, Competitor>;

export type CompetitorKey = keyof typeof COMPETITORS;

export const competitor = (key: CompetitorKey): Competitor => COMPETITORS[key];
