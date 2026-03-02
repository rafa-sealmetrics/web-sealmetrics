import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "We Measured Every Analytics Script. Here Is What We Found.",
  description:
    "We downloaded major analytics scripts from production CDNs and measured their real size. GA4 is 99x heavier than SealMetrics.",
  openGraph: {
    title: "We Measured Every Analytics Script. Here Is What We Found.",
    description:
      "Real measurements of analytics script sizes from production CDNs. The results are stark.",
    type: "article",
  },
  alternates: {
    canonical: "https://sealmetrics.com/blog/we-measured-every-analytics-script",
  },
};

export default function MeasuredScriptsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "We Measured Every Analytics Script" }]} />
      <JsonLd data={articleSchema({ headline: "We Measured Every Analytics Script. Here Is What We Found.", description: "We downloaded major analytics scripts from production CDNs and measured their real size.", datePublished: "2026-02-20", url: "/blog/we-measured-every-analytics-script", category: "Performance" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Blog", url: "/blog" }, { name: "We Measured Every Analytics Script" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">

        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Performance
          </span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
            We Measured Every Analytics Script. Here Is What We Found.
          </h1>
          <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
            <time className="font-mono">February 20, 2026</time>
            <span>4 min read</span>
          </div>
        </header>

        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <p>
            We downloaded the main analytics scripts from every major provider
            — directly from their production CDNs. Not from documentation
            pages. Not from marketing claims. The actual minified, gzipped
            files that load on your visitors&apos; browsers.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            The raw numbers
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-[0.9rem] border-collapse">
              <thead>
                <tr className="border-b border-warm-200">
                  <th className="text-left py-2.5 pr-4 text-text-secondary font-medium">Tool</th>
                  <th className="text-right py-2.5 text-text-secondary font-medium">Size (gzipped)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-medium text-text-primary">SealMetrics</td>
                  <td className="py-2.5 text-right font-mono text-green-muted">1.3 KB</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Plausible</td>
                  <td className="py-2.5 text-right font-mono text-text-body">1.3 KB</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Fathom</td>
                  <td className="py-2.5 text-right font-mono text-text-body">1.9 KB</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Simple Analytics</td>
                  <td className="py-2.5 text-right font-mono text-text-body">3.8 KB</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Mixpanel</td>
                  <td className="py-2.5 text-right font-mono text-text-body">29.8 KB</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">PostHog</td>
                  <td className="py-2.5 text-right font-mono text-text-body">56.4 KB</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Matomo</td>
                  <td className="py-2.5 text-right font-mono text-text-body">65.2 KB</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Google Analytics 4</td>
                  <td className="py-2.5 text-right font-mono text-red-alert">129.6 KB</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Adobe Analytics</td>
                  <td className="py-2.5 text-right font-mono text-red-alert">150.7 KB</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            GA4 is{" "}
            <span className="font-mono font-medium text-text-primary">
              99x heavier
            </span>{" "}
            than SealMetrics. Adobe Analytics is 115x heavier.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            What these numbers actually mean
          </h2>

          <p>
            For a site with 100,000 monthly visitors, GA4&apos;s script alone
            consumes 12.9 GB of bandwidth per month. SealMetrics consumes
            130 MB. That is not a rounding error — it is a 99x difference in
            network resources, battery drain, and page load time.
          </p>

          <p>
            53% of mobile users abandon sites that take more than 3 seconds
            to load. Heavy analytics scripts contribute directly to that
            latency through Total Blocking Time, Interaction to Next Paint
            delays, and bandwidth competition with your actual content.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            Why are enterprise scripts so heavy?
          </h2>

          <p>
            Enterprise analytics tools carry legacy code for features that are
            now either illegal under GDPR or blocked by browsers. Cross-site
            tracking, third-party cookie management, fingerprinting modules —
            your visitors pay the performance cost for features you can not
            legally use.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            The environmental cost
          </h2>

          <p>
            At 1 million pageviews per month, GA4&apos;s script generates
            approximately 30 kg of CO&#x2082; annually — equivalent to driving
            120 km. SealMetrics&apos; equivalent: 0.3 kg, or about 1.2 km.
          </p>

          <p>
            Data transfer consumes energy. The lighter the script, the lower
            the environmental footprint. At scale, the difference is
            significant.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            How we measured
          </h2>

          <p>
            We downloaded scripts directly from production CDNs — the same
            files that load on real visitor browsers. We measured minified
            file sizes and applied standard gzip compression for consistency
            across all tools. No marketing claims, no documentation numbers.
            Just the actual bytes.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            The bottom line
          </h2>

          <p>
            The script that measures your site performance is itself degrading
            your site performance. A 1.3 KB script captures 100% of traffic
            through{" "}
            <Link href="/how-it-works" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">cookieless first-party collection</Link>
            , complies with{" "}
            <Link
              href="/glossary/gdpr-analytics-compliance"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              GDPR by design
            </Link>
            , and loads in under 50ms. The question is not whether you can
            afford to switch — it is whether you can afford not to.{" "}
            <Link
              href="/data-loss-calculator"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              Calculate how much data you are losing
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
              href="/blog/analytics-scripts-costing-you-sales"
              className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              The Hidden Conversion Killer: How Analytics Scripts Are Costing You Sales
            </Link>
            <Link
              href="/blog/cookieless-analytics-explained"
              className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              Cookieless Analytics Explained: How to Measure Without Cookies
            </Link>
          </div>
        </div>
      </div>
    </article>
    </>
  );
}
