export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  draft?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "analytics-tools-lighthouse-scores",
    title:
      "We Added 9 Analytics Tools to the Same Page. Here Are the Lighthouse Scores.",
    description:
      "Same HTML page, 9 analytics tools, 5 Lighthouse runs each. GA4 drops your Performance score by 8 points. Adobe by 12. SealMetrics by 0.",
    date: "2026-03-08",
    category: "Performance",
    readTime: "5 min",
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
    draft: true,
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
    draft: true,
  },
  {
    slug: "analytics-tools-cookies-cataloged",
    title:
      "Every Cookie Set by Every Major Analytics Tool, Cataloged",
    description:
      "We opened DevTools and documented every cookie from 9 analytics tools. Name, type, size, expiration. GA4 sets 4. Adobe sets 6. SealMetrics sets 0.",
    date: "2026-03-05",
    category: "Privacy",
    readTime: "5 min",
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
  },
  {
    slug: "we-measured-every-analytics-script",
    title: "We Measured Every Analytics Script. Here Is What We Found.",
    description:
      "We downloaded major analytics scripts from production CDNs and measured their real size. GA4 is 52x heavier than SealMetrics.",
    date: "2026-02-20",
    category: "Performance",
    readTime: "4 min",
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
  },
  {
    slug: "ga4-data-sampling-problem",
    title: "GA4 Data Sampling: Why Your Traffic Numbers Are Wrong",
    description:
      "GA4 applies data sampling when traffic exceeds certain thresholds. Here is how it works, why it matters, and what you can do about it.",
    date: "2026-02-15",
    category: "Data Quality",
    readTime: "7 min",
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
  },
  {
    slug: "cnil-self-assessment-published",
    title: "We Published Our CNIL Self-Assessment",
    description:
      "The French CNIL allows certain analytics tools to operate without cookie banners. We documented how SealMetrics meets all 14 technical criteria.",
    date: "2026-02-10",
    category: "Regulation",
    readTime: "2 min",
  },
  {
    slug: "cookieless-analytics-explained",
    title: "Cookieless Analytics Explained: How to Measure Without Cookies",
    description:
      "Cookies are disappearing. Learn how cookieless analytics works, why it captures more data, and what it means for GDPR compliance.",
    date: "2026-02-08",
    category: "Technology",
    readTime: "8 min",
  },
  {
    slug: "consent-banner-impact-on-analytics",
    title: "How Consent Banners Destroy Your Analytics Data",
    description:
      "35% of EU visitors reject cookies. That means 35% of your traffic is invisible. Here is the real impact on attribution, conversions, and revenue reporting.",
    date: "2026-01-25",
    category: "Data Quality",
    readTime: "6 min",
  },
  {
    slug: "ai-agent-traffic-analytics",
    title: "AI Agent Traffic: The Invisible Channel Your Analytics Miss",
    description:
      "GPT, Claude, Perplexity, and Google AI Overviews are sending traffic to your site. Traditional analytics cannot see it. Here is why it matters.",
    date: "2026-01-18",
    category: "AI & Analytics",
    readTime: "5 min",
  },
  {
    slug: "multi-touch-attribution-complete-data",
    title: "Why Multi-Touch Attribution Fails Without Complete Data",
    description:
      "Your attribution model is only as good as the data feeding it. When 87% of touchpoints are missing, every attribution conclusion is wrong.",
    date: "2026-01-10",
    category: "Attribution",
    readTime: "7 min",
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
  },
  {
    slug: "ga4-alternatives-enterprise",
    title:
      "GA4 Alternatives for Enterprise: A 2026 Comparison",
    description:
      "GA4 works for small sites. Enterprise needs more. Compare GA360, Adobe Analytics, Piwik PRO, and SealMetrics on data capture, compliance, and cost.",
    date: "2026-03-02",
    category: "Comparisons",
    readTime: "8 min",
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
  },
];
