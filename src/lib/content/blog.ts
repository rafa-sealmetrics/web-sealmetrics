export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
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
];
