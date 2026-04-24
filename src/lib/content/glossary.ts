export interface GlossaryTerm {
  slug: string;
  term: string;
  shortDefinition: string;
  category: string;
  related?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "cookieless-analytics",
    term: "Cookieless Analytics",
    shortDefinition:
      "Web analytics that captures visitor data without using browser cookies, enabling 100% traffic measurement regardless of consent status or browser restrictions.",
    category: "Technology",
    related: ["first-party-data-collection", "server-side-tracking", "gdpr-analytics-compliance", "consent-management-platform", "data-loss-in-analytics"],
  },
  {
    slug: "data-sampling",
    term: "Data Sampling",
    shortDefinition:
      "A technique where analytics tools analyze a subset of data and extrapolate results. GA4 applies sampling when traffic exceeds certain thresholds, introducing estimation error.",
    category: "Data Quality",
    related: ["data-loss-in-analytics", "event-tracking", "bounce-rate", "revenue-attribution"],
  },
  {
    slug: "first-party-data-collection",
    term: "First-Party Data Collection",
    shortDefinition:
      "Collecting analytics data through your own domain infrastructure rather than third-party servers. First-party requests are invisible to ad blockers and not subject to third-party cookie restrictions.",
    category: "Technology",
    related: ["cookieless-analytics", "server-side-tracking", "ad-blocker-analytics-impact", "analytics-data-residency", "intelligent-tracking-prevention"],
  },
  {
    slug: "consent-management-platform",
    term: "Consent Management Platform (CMP)",
    shortDefinition:
      "Software that displays cookie consent banners and manages user preferences. Required under GDPR for websites using cookies or collecting personal data. Typical EU rejection rates: 35%.",
    category: "Privacy",
    related: ["gdpr-analytics-compliance", "cookieless-analytics", "data-loss-in-analytics", "analytics-data-residency"],
  },
  {
    slug: "multi-touch-attribution",
    term: "Multi-Touch Attribution",
    shortDefinition:
      "An analytics model that distributes conversion credit across multiple touchpoints observed for the same identified visitor. Requires per-user tracking and is not part of SealMetrics' last-click, anonymous architecture.",
    category: "Attribution",
    related: ["attribution-model", "revenue-attribution", "event-tracking", "data-loss-in-analytics"],
  },
  {
    slug: "server-side-tracking",
    term: "Server-Side Tracking",
    shortDefinition:
      "Data collection method where events are processed on the server rather than in the browser. Avoids client-side blocking by ad blockers and browser privacy features.",
    category: "Technology",
    related: ["first-party-data-collection", "cookieless-analytics", "ad-blocker-analytics-impact", "event-tracking"],
  },
  {
    slug: "intelligent-tracking-prevention",
    term: "Intelligent Tracking Prevention (ITP)",
    shortDefinition:
      "Apple Safari's privacy feature that limits cookie lifespan and blocks cross-site tracking. ITP reduces first-party cookie life to 7 days (or 24 hours for some) and blocks all third-party cookies.",
    category: "Privacy",
    related: ["cookieless-analytics", "first-party-data-collection", "data-loss-in-analytics", "ad-blocker-analytics-impact"],
  },
  {
    slug: "data-loss-in-analytics",
    term: "Data Loss in Analytics",
    shortDefinition:
      "The gap between actual website traffic and what analytics tools report. Caused by consent rejection, ad blockers, browser restrictions, and data sampling. Typically 70-87% in the EU.",
    category: "Data Quality",
    related: ["ad-blocker-analytics-impact", "consent-management-platform", "intelligent-tracking-prevention", "data-sampling", "cookieless-analytics"],
  },
  {
    slug: "revenue-attribution",
    term: "Revenue Attribution",
    shortDefinition:
      "Connecting revenue events (purchases, subscriptions) to the marketing channels that drove them. SealMetrics uses last-click on 100% of observed events — no per-user journey tracking, no multi-touch models.",
    category: "Attribution",
    related: ["attribution-model", "multi-touch-attribution", "event-tracking", "data-loss-in-analytics"],
  },
  {
    slug: "gdpr-analytics-compliance",
    term: "GDPR Analytics Compliance",
    shortDefinition:
      "Meeting GDPR requirements for web analytics: lawful basis for processing, data minimization, purpose limitation, and — if using cookies — valid consent collection before tracking.",
    category: "Privacy",
    related: ["consent-management-platform", "analytics-data-residency", "cookieless-analytics", "first-party-data-collection"],
  },
  {
    slug: "ad-blocker-analytics-impact",
    term: "Ad Blocker Impact on Analytics",
    shortDefinition:
      "The data loss caused by browser extensions and built-in features that block third-party analytics scripts. Ad blockers affect 40%+ of EU users, making analytics tools like GA4 blind to a significant portion of traffic.",
    category: "Data Quality",
    related: ["data-loss-in-analytics", "first-party-data-collection", "server-side-tracking", "intelligent-tracking-prevention"],
  },
  {
    slug: "bounce-rate",
    term: "Bounce Rate",
    shortDefinition:
      "The percentage of sessions where a visitor views only one page before leaving. In GA4, bounce rate is the inverse of engagement rate — a session is a bounce if it lasts less than 10 seconds, has no conversion, and has no second pageview.",
    category: "Metrics",
    related: ["event-tracking", "data-sampling", "data-loss-in-analytics"],
  },
  {
    slug: "attribution-model",
    term: "Attribution Model",
    shortDefinition:
      "A rule or algorithm that determines how credit for conversions is distributed across marketing touchpoints. Common models include first-touch, last-touch, linear, time-decay, and data-driven attribution.",
    category: "Attribution",
    related: ["multi-touch-attribution", "revenue-attribution", "event-tracking", "data-loss-in-analytics"],
  },
  {
    slug: "event-tracking",
    term: "Event Tracking",
    shortDefinition:
      "The method of recording specific user interactions on a website beyond pageviews — clicks, form submissions, video plays, downloads, and eCommerce actions. GA4 uses an event-based data model where every interaction is an event.",
    category: "Technology",
    related: ["server-side-tracking", "revenue-attribution", "attribution-model", "bounce-rate"],
  },
  {
    slug: "analytics-data-residency",
    term: "Analytics Data Residency",
    shortDefinition:
      "The geographic location where analytics data is processed and stored. Under GDPR, data residency determines which legal frameworks apply and whether cross-border data transfer mechanisms (like SCCs) are required.",
    category: "Privacy",
    related: ["gdpr-analytics-compliance", "first-party-data-collection", "consent-management-platform"],
  },
];

export function getRelatedTerms(slug: string): GlossaryTerm[] {
  const current = glossaryTerms.find((t) => t.slug === slug);
  if (!current?.related?.length) return [];
  return current.related
    .map((s) => glossaryTerms.find((t) => t.slug === s))
    .filter((t): t is GlossaryTerm => t !== undefined);
}
