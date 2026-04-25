export interface BlogAuthor {
  name: string;
  url?: string;
  jobTitle?: string;
}

export const AUTHORS = {
  rafa: {
    name: "Rafa Jiménez",
    url: "/authors/rafa-jimenez",
    jobTitle: "Founder, SealMetrics",
  } satisfies BlogAuthor,
  sealmetrics: {
    name: "SealMetrics Team",
    url: "/about",
  } satisfies BlogAuthor,
};

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  author?: BlogAuthor;
  draft?: boolean;
  related?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cookieless-analytics-for-ecommerce",
    title: "Cookieless Analytics for eCommerce: The 2026 Guide",
    description:
      "How European eCommerce teams measure revenue, attribution and conversion without cookies or consent banners. Shopify, WooCommerce and Magento reconciliation patterns.",
    date: "2026-04-24",
    category: "eCommerce",
    readTime: "10 min",
    author: AUTHORS.rafa,
    related: [
      "why-ga4-shows-13pct-eu-traffic",
      "cookieless-analytics-explained",
      "consentless-analytics-for-dtc",
    ],
  },
  {
    slug: "cookieless-analytics-for-hotels",
    title: "Cookieless Analytics for Hotels: Direct-Booking Attribution in 2026",
    description:
      "How European hotel groups measure direct bookings, meta-search revenue and multi-property portfolios without cookies. PMS reconciliation patterns for Mews, Cloudbeds, Opera.",
    date: "2026-04-24",
    category: "Hotels",
    readTime: "9 min",
    author: AUTHORS.rafa,
    related: [
      "cookieless-analytics-for-ecommerce",
      "cookieless-analytics-explained",
      "why-ga4-shows-13pct-eu-traffic",
    ],
  },
  {
    slug: "cookieless-analytics-for-saas",
    title: "Cookieless Analytics for SaaS: PLG Without Consent Banners",
    description:
      "How European SaaS teams measure trial-to-paid, PQLs and self-serve funnels without cookies. Works alongside Mixpanel/Amplitude, exports to BigQuery.",
    date: "2026-04-24",
    category: "SaaS",
    readTime: "8 min",
    author: AUTHORS.rafa,
    related: [
      "cookieless-analytics-for-ecommerce",
      "cookieless-analytics-explained",
      "multi-touch-attribution-complete-data",
    ],
  },
  {
    slug: "consentless-analytics-for-dtc",
    title: "Consentless Analytics for DTC: What It Is and Why It Matters in 2026",
    description:
      "Consentless analytics captures 100% of DTC traffic without a cookie banner. How it works under GDPR/ePrivacy, and what European DTC teams get from it.",
    date: "2026-04-24",
    category: "eCommerce",
    readTime: "7 min",
    author: AUTHORS.rafa,
    related: [
      "cookieless-analytics-for-ecommerce",
      "gdpr-analytics-without-consent",
      "cookieless-analytics-explained",
    ],
  },
  {
    slug: "best-enterprise-analytics-platforms",
    title: "8 Best Enterprise Analytics Platforms in 2026",
    description:
      "Ranked comparison of GA4, GA360, Adobe Analytics, Piwik PRO, SealMetrics, Amplitude, Mixpanel, and Matomo for enterprise teams.",
    date: "2026-03-16",
    category: "Comparisons",
    readTime: "12 min",
    author: AUTHORS.sealmetrics,
    related: ["ga4-alternatives-enterprise", "ga4-data-sampling-problem", "analytics-tools-data-sampling"],
  },
  {
    slug: "analytics-tools-lighthouse-scores",
    title:
      "We Added 9 Analytics Tools to the Same Page. Here Are the Lighthouse Scores.",
    description:
      "Same HTML page, 9 analytics tools, 5 Lighthouse runs each. GA4 drops your Performance score by 8 points. Adobe by 12. SealMetrics by 0.",
    date: "2026-03-08",
    category: "Performance",
    readTime: "5 min",
    author: AUTHORS.rafa,
    draft: true,
  },
  {
    slug: "analytics-tools-ad-blocker-test",
    title:
      "We Tested 9 Analytics Tools Against Every Major Ad Blocker",
    description:
      "uBlock Origin, AdBlock Plus, Brave, Firefox ETP, Privacy Badger. We tested which analytics tools survive and which lose 30% of visitors.",
    date: "2026-03-07",
    category: "Data Quality",
    readTime: "5 min",
    author: AUTHORS.rafa,
    draft: true,
  },
  {
    slug: "why-ga4-shows-13pct-eu-traffic",
    title: "Why GA4 Shows 13% of Your EU Traffic",
    description:
      "GA4 loses data at three levels: consent rejection, ad blockers, and browser restrictions. The result is roughly 13% of real EU traffic. Here is the math.",
    date: "2026-03-06",
    category: "Data Quality",
    readTime: "8 min",
    author: AUTHORS.rafa,
    related: ["consent-banner-impact-on-analytics", "what-is-data-loss-in-analytics", "ga4-data-sampling-problem"],
  },
  {
    slug: "analytics-tools-http-requests",
    title:
      "How Many HTTP Requests Does Your Analytics Tool Make? We Counted.",
    description:
      "One pageview, one browser. GA4 makes 4 requests to 3 domains. Adobe makes 6 to 4 domains. SealMetrics makes 2 to 1. The network waterfall tells the story.",
    date: "2026-03-06",
    category: "Performance",
    readTime: "4 min",
    author: AUTHORS.rafa,
    draft: true,
  },
  {
    slug: "analytics-tools-cookies-cataloged",
    title:
      "Every Cookie Set by Every Major Analytics Tool, Cataloged",
    description:
      "We cataloged every cookie from 9 analytics tools using vendor docs and DevTools. GA4 sets 2 first-party cookies. Adobe sets 6. SealMetrics sets 0.",
    date: "2026-03-05",
    category: "Privacy",
    readTime: "5 min",
    author: AUTHORS.rafa,
    related: ["analytics-tools-external-domains", "cookieless-analytics-explained", "gdpr-analytics-without-consent"],
  },
  {
    slug: "analytics-tools-external-domains",
    title:
      "Your Analytics Tool Contacts 7 Domains. Here Is Why That Matters.",
    description:
      "Every external domain is a DNS lookup, a privacy risk, and a GDPR liability. We mapped every domain contacted by 9 analytics tools.",
    date: "2026-03-04",
    category: "Privacy",
    readTime: "4 min",
    author: AUTHORS.rafa,
    related: ["analytics-tools-cookies-cataloged", "analytics-scripts-costing-you-sales", "we-measured-every-analytics-script"],
  },
  {
    slug: "analytics-tools-data-sampling",
    title:
      "When Your Analytics Starts Guessing: Data Sampling Thresholds Compared",
    description:
      "GA4 starts sampling at 10M events in Explorations. Adobe varies by contract. Piwik PRO: optional. SealMetrics: never. We documented every threshold.",
    date: "2026-03-03",
    category: "Data Quality",
    readTime: "5 min",
    author: AUTHORS.rafa,
    related: ["ga4-data-sampling-problem", "what-is-data-loss-in-analytics", "best-enterprise-analytics-platforms"],
  },
  {
    slug: "analytics-scripts-costing-you-sales",
    title:
      "The Hidden Conversion Killer: How Analytics Scripts Are Costing You Sales",
    description:
      "Heavy analytics scripts slow your site, consent banners hide visitors, and ad blockers erase data. The compound effect is costing you conversions.",
    date: "2026-02-26",
    category: "Performance",
    readTime: "3 min",
    author: AUTHORS.rafa,
    related: ["we-measured-every-analytics-script", "consent-banner-impact-on-analytics", "analytics-tools-external-domains"],
  },
  {
    slug: "we-measured-every-analytics-script",
    title: "We Measured Every Analytics Script. Here Is What We Found.",
    description:
      "We downloaded major analytics scripts from production CDNs and measured their real size. GA4 is 52x heavier than SealMetrics.",
    date: "2026-02-20",
    category: "Performance",
    readTime: "4 min",
    author: AUTHORS.rafa,
    related: ["analytics-scripts-costing-you-sales", "analytics-tools-external-domains", "analytics-tools-cookies-cataloged"],
  },
  {
    slug: "uk-pecr-analytics-exemption",
    title:
      "UK Analytics Exemption Is Now Live: Our PECR Self-Assessment",
    description:
      "The DUAA 2025 exempts certain analytics from consent requirements in the UK. We published our self-assessment showing how SealMetrics qualifies.",
    date: "2026-02-17",
    category: "Regulation",
    readTime: "2 min",
    author: AUTHORS.rafa,
    related: ["cnil-self-assessment-published", "gdpr-analytics-without-consent", "eu-digital-omnibus-cookie-banners-analytics"],
  },
  {
    slug: "ga4-data-sampling-problem",
    title: "GA4 Data Sampling: Why Your Traffic Numbers Are Wrong",
    description:
      "GA4 applies data sampling when traffic exceeds certain thresholds. Here is how it works, why it matters, and what you can do about it.",
    date: "2026-02-15",
    category: "Data Quality",
    readTime: "7 min",
    author: AUTHORS.rafa,
    related: ["analytics-tools-data-sampling", "why-ga4-shows-13pct-eu-traffic", "ga4-alternatives-enterprise"],
  },
  {
    slug: "eu-digital-omnibus-cookie-banners-analytics",
    title:
      "The EU Digital Omnibus: What It Means for Cookie Banners and Analytics",
    description:
      "The European Commission proposed the biggest change to EU data law since GDPR. Cookie consent moves to GDPR, and first-party analytics may not require consent.",
    date: "2026-02-12",
    category: "Regulation",
    readTime: "2 min",
    author: AUTHORS.rafa,
    related: ["eu-digital-omnibus-marketer-guide-2026", "consent-banner-impact-on-analytics", "gdpr-analytics-without-consent"],
  },
  {
    slug: "eu-digital-omnibus-marketer-guide-2026",
    title:
      "The EU Digital Omnibus Explained: What Every Marketer Needs to Know in 2026",
    description:
      "Cookie banners could vanish for 60% of websites. First-party analytics gets explicit legal authorization. A deep dive into COM(2025) 837 and what to do now.",
    date: "2026-02-12",
    category: "Regulation",
    readTime: "6 min",
    author: AUTHORS.rafa,
    related: ["eu-digital-omnibus-cookie-banners-analytics", "cnil-self-assessment-published", "uk-pecr-analytics-exemption"],
  },
  {
    slug: "cnil-self-assessment-published",
    title: "We Published Our CNIL Self-Assessment",
    description:
      "The French CNIL allows certain analytics tools to operate without cookie banners. We documented how SealMetrics meets all 14 technical criteria.",
    date: "2026-02-10",
    category: "Regulation",
    readTime: "2 min",
    author: AUTHORS.rafa,
    related: ["uk-pecr-analytics-exemption", "gdpr-analytics-without-consent", "eu-digital-omnibus-marketer-guide-2026"],
  },
  {
    slug: "cookieless-analytics-explained",
    title: "Cookieless Analytics Explained: How to Measure Without Cookies",
    description:
      "Cookies are disappearing. Learn how cookieless analytics works, why it captures more data, and what it means for GDPR compliance.",
    date: "2026-02-08",
    category: "Technology",
    readTime: "8 min",
    author: AUTHORS.rafa,
    related: ["what-is-cookieless-tracking", "analytics-tools-cookies-cataloged", "consent-banner-impact-on-analytics"],
  },
  {
    slug: "consent-banner-impact-on-analytics",
    title: "How Consent Banners Destroy Your Analytics Data",
    description:
      "35% of EU visitors reject cookies. That means 35% of your traffic is invisible. Here is the real impact on attribution, conversions, and revenue reporting.",
    date: "2026-01-25",
    category: "Data Quality",
    readTime: "6 min",
    author: AUTHORS.rafa,
    related: ["why-ga4-shows-13pct-eu-traffic", "cookieless-analytics-explained", "eu-digital-omnibus-cookie-banners-analytics"],
  },
  {
    slug: "ai-agent-traffic-analytics",
    title: "AI Agent Traffic: The Invisible Channel Your Analytics Miss",
    description:
      "GPT, Claude, Perplexity, and Google AI Overviews are sending traffic to your site. Traditional analytics cannot see it. Here is why it matters.",
    date: "2026-01-18",
    category: "AI & Analytics",
    readTime: "5 min",
    author: AUTHORS.rafa,
    related: ["what-is-data-loss-in-analytics", "why-ga4-shows-13pct-eu-traffic", "best-enterprise-analytics-platforms"],
  },
  {
    slug: "multi-touch-attribution-complete-data",
    title: "Why Multi-Touch Attribution Fails Without Complete Data",
    description:
      "Your attribution model is only as good as the data feeding it. When 87% of touchpoints are missing, every attribution conclusion is wrong.",
    date: "2026-01-10",
    category: "Attribution",
    readTime: "7 min",
    author: AUTHORS.rafa,
    related: ["consent-banner-impact-on-analytics", "what-is-data-loss-in-analytics", "why-ga4-shows-13pct-eu-traffic"],
  },
  {
    slug: "what-is-cookieless-tracking",
    title:
      "What Is Cookieless Tracking? A Complete Guide for 2026",
    description:
      "Cookieless tracking captures visitor behavior without browser cookies. Learn how it works, why it matters for GDPR compliance, and how it compares to traditional analytics.",
    date: "2026-03-02",
    category: "Technology",
    readTime: "8 min",
    author: AUTHORS.rafa,
    related: ["cookieless-analytics-explained", "gdpr-analytics-without-consent", "consent-banner-impact-on-analytics"],
  },
  {
    slug: "what-is-data-loss-in-analytics",
    title:
      "What Is Data Loss in Analytics? Causes, Impact, and Solutions",
    description:
      "Analytics data loss is the gap between real traffic and reported traffic. Learn the four causes, quantify the impact, and understand how to eliminate it.",
    date: "2026-03-02",
    category: "Data Quality",
    readTime: "7 min",
    author: AUTHORS.rafa,
    related: ["why-ga4-shows-13pct-eu-traffic", "consent-banner-impact-on-analytics", "multi-touch-attribution-complete-data"],
  },
  {
    slug: "ga4-alternatives-enterprise",
    title: "7 GA4 Alternatives for eCommerce Teams in 2026",
    description:
      "Compare 7 GA4 alternatives for eCommerce: pricing, data capture rates, EU compliance, and eCommerce features. From GA360 to cookieless platforms.",
    date: "2026-03-02",
    category: "Comparisons",
    readTime: "10 min",
    author: AUTHORS.rafa,
    related: ["best-enterprise-analytics-platforms", "ga4-data-sampling-problem", "why-ga4-shows-13pct-eu-traffic"],
  },
  {
    slug: "ga4-google-ads-separation",
    title: "GA4 y Google Ads: la separacion que nadie vio venir",
    description:
      "Google elimina Google Signals como control de datos GA4 a Google Ads en junio 2026. Analisis del impacto real en datos y riesgo legal para anunciantes europeos.",
    date: "2026-04-16",
    category: "Privacidad",
    readTime: "8 min",
    author: AUTHORS.rafa,
  },
  {
    slug: "gdpr-analytics-without-consent",
    title:
      "GDPR-Compliant Analytics Without Consent Banners: How It Works",
    description:
      "Consent banners are not always required for analytics. Learn the legal basis, technical requirements, and which analytics tools qualify under GDPR and ePrivacy.",
    date: "2026-03-02",
    category: "Regulation",
    readTime: "7 min",
    author: AUTHORS.rafa,
    related: ["cnil-self-assessment-published", "uk-pecr-analytics-exemption", "cookieless-analytics-explained"],
  },
];
