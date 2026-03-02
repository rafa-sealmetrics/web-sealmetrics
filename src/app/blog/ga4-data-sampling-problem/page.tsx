import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GA4 Data Sampling: Why Your Numbers Are Wrong",
  description:
    "GA4 applies data sampling when traffic exceeds certain thresholds. Here is how it works, why it matters, and what you can do about it.",
  openGraph: {
    title: "GA4 Data Sampling: Why Your Traffic Numbers Are Wrong",
    description:
      "GA4 applies data sampling at high traffic volumes. Here is how it affects your data and decisions.",
    type: "article",
  },
  alternates: {
    canonical: "https://sealmetrics.com/blog/ga4-data-sampling-problem",
  },
};

export default function GA4DataSamplingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "GA4 Data Sampling Problem" }]} />
      <JsonLd data={articleSchema({ headline: "GA4 Data Sampling: Why Your Traffic Numbers Are Wrong", description: "GA4 applies data sampling that distorts your analytics.", datePublished: "2026-02-15", url: "/blog/ga4-data-sampling-problem", category: "Data Quality" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Blog", url: "/blog" }, { name: "GA4 Data Sampling" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">

        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Data Quality
          </span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
            GA4 Data Sampling: Why Your Traffic Numbers Are Wrong
          </h1>
          <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
            <time className="font-mono">February 15, 2026</time>
            <span>7 min read</span>
          </div>
        </header>

        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <p>
            If your website receives significant traffic, GA4 is not showing you
            all of it. It is showing you a statistical estimate based on a
            sample. This is called{" "}
            <Link
              href="/glossary/data-sampling"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              data sampling
            </Link>
            , and it is one of the most misunderstood aspects of Google
            Analytics.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            What is data sampling in GA4?
          </h2>

          <p>
            Data sampling occurs when GA4 analyzes a subset of your data and
            extrapolates the results to represent the full dataset. Instead of
            processing every event, GA4 takes a statistical sample and applies
            mathematical models to estimate what the full picture would look
            like.
          </p>

          <p>
            In GA4, sampling is triggered when you create exploration reports
            that exceed certain data thresholds. Google does not publicly
            disclose the exact thresholds, but the sampling icon appears in your
            reports when it is active. The free version of GA4 has lower
            thresholds than GA360, which means sampling kicks in sooner for most
            businesses.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            Why sampling matters for decision-making
          </h2>

          <p>
            Sampling introduces a margin of error. For high-level traffic
            trends, this might be acceptable. But for specific analyses —
            campaign performance by segment, conversion path analysis, revenue
            attribution by creative — even small margins of error compound into
            unreliable conclusions.
          </p>

          <p>Consider a scenario:</p>

          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px] text-[0.9rem] my-6">
            <p className="mb-3">
              Your actual data shows Campaign A generated 342 conversions and
              Campaign B generated 298. After sampling, GA4 estimates Campaign A
              at 310 and Campaign B at 320. You increase budget for Campaign B.
            </p>
            <p className="text-text-tertiary">
              The decision was based on sampled data. The reality was the
              opposite.
            </p>
          </div>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            Sampling is only part of the problem
          </h2>

          <p>
            Sampling reduces the accuracy of data you do have. But the larger
            problem is the data you never collect in the first place. Before
            sampling even begins, GA4 has already lost visitors to{" "}
            <Link
              href="/blog/consent-banner-impact-on-analytics"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              consent banner rejection
            </Link>
            , ad blockers, and browser cookie restrictions.
          </p>

          <p>
            In a typical European website, GA4 captures roughly 13% of actual
            traffic. Of that 13%, sampling further degrades the accuracy. You are
            making decisions based on an estimate of a fraction.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            The alternative: full-resolution analytics
          </h2>

          <p>
            <Link
              href="/glossary/cookieless-analytics"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              Cookieless analytics
            </Link>{" "}
            platforms like SealMetrics take a fundamentally different approach.
            By collecting data through first-party cookieless methods, every
            session is captured regardless of consent banner status, ad blocker
            usage, or browser restrictions. And because the data volume is
            managed at the infrastructure level, there is no need for statistical
            sampling.
          </p>

          <p>
            When you see 72,847 visitors in SealMetrics, that number represents
            72,847 actual sessions. Not a sample. Not an estimate. Not a
            projection from the subset that happened to accept cookies.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            What you can do about it
          </h2>

          <p>
            If you are using GA4, check your exploration reports for the sampling
            indicator. If you see it, your data is approximate. For standard
            reports, GA4 uses modeled data (Google calls it &ldquo;blended
            data&rdquo;), which introduces its own estimation layer.
          </p>

          <p>
            The most reliable way to understand the gap is to run a complete
            analytics tool alongside GA4 and compare the numbers. You can{" "}
            <Link
              href="/data-loss-calculator"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              estimate your data loss here
            </Link>{" "}
            or{" "}
            <Link
              href="/how-it-works"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              learn how cookieless analytics works
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
              href="/blog/consent-banner-impact-on-analytics"
              className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              How Consent Banners Destroy Your Analytics Data
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
