import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Agent Traffic: The Invisible Analytics Channel",
  description:
    "GPT, Claude, Perplexity, and Google AI Overviews are sending traffic to your site. Traditional analytics cannot see it. Here is why it matters.",
  openGraph: {
    title: "AI Agent Traffic: The Invisible Channel Your Analytics Miss",
    description:
      "AI agents are sending traffic to your site. Your analytics classify it as direct or unknown.",
    type: "article",
  },
  alternates: {
    canonical: "https://sealmetrics.com/blog/ai-agent-traffic-analytics",
  },
};

export default function AIAgentTrafficPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "AI Agent Traffic Analytics" }]} />
      <JsonLd data={articleSchema({ headline: "AI Agent Traffic: The Invisible Channel Your Analytics Miss", description: "AI agents are sending traffic your analytics can't see.", datePublished: "2026-01-18", url: "/blog/ai-agent-traffic-analytics", category: "AI & Analytics", author: { name: "Rafa Jimenez", url: "/about", jobTitle: "Founder, SealMetrics" } })} />
      <JsonLd data={breadcrumbSchema([{ name: "Blog", url: "/blog" }, { name: "AI Agent Traffic" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">

        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            AI & Analytics
          </span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
            AI Agent Traffic: The Invisible Channel Your Analytics Miss
          </h1>
          <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
            <time className="font-mono">January 18, 2026</time>
            <span>5 min read</span>
            <span>By Rafa Jimenez</span>
          </div>
        </header>

        <div className="mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
          <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-disc pl-5">
            <li>AI agents (GPT, Claude, Perplexity, Google AI Overviews) are sending 7-22% of sessions to content-rich sites, but traditional analytics classifies this traffic as "direct" or "unassigned."</li>
            <li>AI crawlers do not execute JavaScript and often omit referrer headers — client-side analytics like GA4 cannot detect these visits at all.</li>
            <li>For a site with 500,000 monthly sessions, 35,000 to 100,000 AI-influenced sessions per month may be invisible to or misclassified by traditional analytics.</li>
            <li>SealMetrics Agent Analytics identifies each AI agent type (GPT, Claude, Perplexity) as a distinct source with pages visited, time on site, and downstream conversions.</li>
          </ul>
        </div>

        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <p>
            A growing percentage of your website traffic comes from AI agents —
            <a href="https://platform.openai.com/docs/bots" target="_blank" rel="noopener noreferrer">GPT browsing</a>, <a href="https://docs.anthropic.com/en/docs/build-with-claude/web-search" target="_blank" rel="noopener noreferrer">Claude web access</a>, Perplexity search, and <a href="https://blog.google/products/search/generative-ai-google-search-may-2024/" target="_blank" rel="noopener noreferrer">Google AI
            Overviews</a>. These systems crawl your pages, extract information, and
            either cite you in their responses or direct users to your site.
          </p>

          <p>
            Your analytics cannot see any of it.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            Why AI traffic is invisible to GA4
          </h2>

          <p>
            Traditional analytics tools identify traffic sources through
            referrer headers, UTM parameters, and cookies. AI agents present
            unique challenges for all three. Unlike{" "}
            <Link href="/glossary/first-party-data-collection" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">first-party</Link>{" "}
            collection methods, client-side scripts cannot detect these visits:
          </p>

          <ul className="space-y-2 pl-0 list-none">
            {[
              "AI agents often do not pass referrer headers, so visits appear as \"direct\" traffic",
              "Users arriving via AI citations rarely have UTM parameters attached",
              "AI crawlers that fetch page content do not execute JavaScript, making them invisible to client-side analytics",
              "Some AI agents use headless browsers that GA4 cannot distinguish from direct visits",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[0.95rem]"
              >
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                {item}
              </li>
            ))}
          </ul>

          <p>
            The result: AI-driven traffic gets classified as
            &ldquo;direct&rdquo; or &ldquo;unassigned&rdquo; in your analytics.
            You know these visits are happening — your server logs show them —
            but your analytics dashboard has no category for them.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            How much AI traffic are we talking about?
          </h2>

          <p>
            The volume varies significantly by industry. Content-rich sites
            (eCommerce product pages, knowledge bases, editorial content) see
            higher AI agent activity. Based on SealMetrics client data from
            2025-2026:
          </p>

          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px] my-6">
            <div className="space-y-4">
              {[
                { type: "GPT (browsing mode)", share: "2-5% of sessions" },
                { type: "Google AI Overviews", share: "3-8% of impressions" },
                { type: "Perplexity", share: "1-3% of sessions" },
                { type: "Claude (web access)", share: "0.5-2% of sessions" },
                { type: "Other AI agents", share: "1-4% of sessions" },
              ].map((item) => (
                <div
                  key={item.type}
                  className="flex justify-between text-[0.9rem]"
                >
                  <span className="text-text-secondary">{item.type}</span>
                  <span className="font-mono text-text-primary font-medium">
                    {item.share}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[0.8rem] text-text-tertiary mt-4">
              Ranges based on SealMetrics Agent Analytics data across 100+
              eCommerce sites, Q4 2025 — Q1 2026.
            </p>
          </div>

          <p>
            For a site with 500,000 monthly sessions, this could mean 35,000 to
            100,000 AI-influenced sessions per month that are invisible to or
            misclassified by traditional analytics.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            Why this matters for marketing strategy
          </h2>

          <p>
            AI agent traffic is not just a measurement curiosity. It has direct
            strategic implications:
          </p>

          <ul className="space-y-2 pl-0 list-none">
            {[
              "SEO strategy: If AI agents are reading and citing your content, optimizing for AI discovery (structured data, clear answers, comprehensive coverage) becomes a channel investment",
              "Content ROI: Content that generates significant AI citations has value beyond traditional organic search — but you cannot measure that value if you cannot see the traffic",
              "Attribution: AI-driven conversions exist. Users who arrive through an AI recommendation have specific behavior patterns. Without tracking, these conversions are misattributed",
              "Competitive intelligence: Understanding which competitors AI agents cite — and which of your pages they prefer — is strategic information",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[0.95rem]"
              >
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            How SealMetrics tracks AI agent traffic
          </h2>

          <p>
            SealMetrics Agent Analytics identifies AI agent sessions through{" "}
            <Link href="/how-it-works" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">first-party</Link>{" "}
            detection — analyzing request patterns, user agent
            strings, and behavioral signatures that distinguish AI agents from
            human visitors and traditional crawlers.
          </p>

          <p>
            Each AI agent type (GPT, Claude, Perplexity, Google AI Overview) is
            tracked as a distinct source with its own session data: pages
            visited, time on site, and downstream conversions. This data appears
            alongside your human traffic in a dedicated Agent Analytics report.
          </p>

          <p>
            The result is visibility into a channel that did not exist two years
            ago and is growing rapidly. You can see which pages AI agents
            prefer, which products they recommend, and whether AI-driven
            visitors convert.{" "}
            <Link
              href="/product"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              See the full product capabilities
            </Link>
            .
          </p>
        </div>

        {/* Related */}
        <div className="mt-16 pt-10 border-t border-warm-100">
          <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">
            Related articles
          </h3>
          <div className="space-y-3">
            <Link
              href="/blog/cookieless-analytics-explained"
              className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              Cookieless Analytics Explained: How to Measure Without Cookies
            </Link>
            <Link
              href="/blog/multi-touch-attribution-complete-data"
              className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              Why Multi-Touch Attribution Fails Without Complete Data
            </Link>
          </div>
        </div>
      </div>
    </article>
    </>
  );
}
