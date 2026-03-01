export interface GlossaryTerm {
  slug: string;
  term: string;
  shortDefinition: string;
  category: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "cookieless-analytics",
    term: "Cookieless Analytics",
    shortDefinition:
      "Web analytics that captures visitor data without using browser cookies, enabling 100% traffic measurement regardless of consent status or browser restrictions.",
    category: "Technology",
  },
  {
    slug: "data-sampling",
    term: "Data Sampling",
    shortDefinition:
      "A technique where analytics tools analyze a subset of data and extrapolate results. GA4 applies sampling when traffic exceeds certain thresholds, introducing estimation error.",
    category: "Data Quality",
  },
  {
    slug: "first-party-data-collection",
    term: "First-Party Data Collection",
    shortDefinition:
      "Collecting analytics data through your own domain infrastructure rather than third-party servers. First-party requests are invisible to ad blockers and not subject to third-party cookie restrictions.",
    category: "Technology",
  },
  {
    slug: "consent-management-platform",
    term: "Consent Management Platform (CMP)",
    shortDefinition:
      "Software that displays cookie consent banners and manages user preferences. Required under GDPR for websites using cookies or collecting personal data. Typical EU rejection rates: 35%.",
    category: "Privacy",
  },
  {
    slug: "multi-touch-attribution",
    term: "Multi-Touch Attribution",
    shortDefinition:
      "An analytics model that distributes conversion credit across multiple touchpoints in a customer journey, rather than giving all credit to the first or last interaction.",
    category: "Attribution",
  },
  {
    slug: "server-side-tracking",
    term: "Server-Side Tracking",
    shortDefinition:
      "Data collection method where events are processed on the server rather than in the browser. Avoids client-side blocking by ad blockers and browser privacy features.",
    category: "Technology",
  },
  {
    slug: "intelligent-tracking-prevention",
    term: "Intelligent Tracking Prevention (ITP)",
    shortDefinition:
      "Apple Safari's privacy feature that limits cookie lifespan and blocks cross-site tracking. ITP reduces first-party cookie life to 7 days (or 24 hours for some) and blocks all third-party cookies.",
    category: "Privacy",
  },
  {
    slug: "data-loss-in-analytics",
    term: "Data Loss in Analytics",
    shortDefinition:
      "The gap between actual website traffic and what analytics tools report. Caused by consent rejection, ad blockers, browser restrictions, and data sampling. Typically 70-87% in the EU.",
    category: "Data Quality",
  },
  {
    slug: "revenue-attribution",
    term: "Revenue Attribution",
    shortDefinition:
      "The process of connecting revenue events (purchases, subscriptions) to the marketing channels and campaigns that influenced them. Requires complete visitor journey data for accuracy.",
    category: "Attribution",
  },
  {
    slug: "gdpr-analytics-compliance",
    term: "GDPR Analytics Compliance",
    shortDefinition:
      "Meeting GDPR requirements for web analytics: lawful basis for processing, data minimization, purpose limitation, and — if using cookies — valid consent collection before tracking.",
    category: "Privacy",
  },
];
