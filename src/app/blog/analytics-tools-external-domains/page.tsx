import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Your Analytics Tool Contacts 7 Domains. Here Is Why.",
  description:
    "Every external domain is a DNS lookup, a privacy risk, and a GDPR liability. We mapped every domain contacted by 9 analytics tools.",
  openGraph: {
    title: "Your Analytics Tool Contacts 7 Domains. Here Is Why That Matters.",
    description:
      "We mapped every domain contacted by 9 analytics tools. Each one is a performance cost, a privacy risk, and a legal surface.",
    type: "article",
  },
  alternates: {
    canonical: "https://sealmetrics.com/blog/analytics-tools-external-domains",
  },
};

export default function ExternalDomainsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Analytics Tools External Domains" }]} />
      <JsonLd data={articleSchema({ headline: "Your Analytics Tool Contacts 7 Domains. Here Is Why That Matters.", description: "Every external domain is a DNS lookup, a privacy risk, and a GDPR liability. We mapped every domain contacted by 9 analytics tools.", datePublished: "2026-03-04", url: "/blog/analytics-tools-external-domains", category: "Privacy" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Blog", url: "/blog" }, { name: "Analytics Tools External Domains" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">

        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Privacy
          </span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
            Your Analytics Tool Contacts 7 Domains. Here Is Why That Matters.
          </h1>
          <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
            <time className="font-mono">March 4, 2026</time>
            <span>4 min read</span>
          </div>
        </header>

        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">

          {/* --- Intro --- */}
          <p>
            Every time a visitor loads your site, your analytics tool phones
            home. Not to one server &mdash; to several. Each external domain
            your analytics contacts means a DNS lookup (50&ndash;100 ms), a TLS
            handshake (100&ndash;200 ms), a data transfer to a third party, and
            &mdash; if that domain resolves to a US server &mdash; a potential
            GDPR cross-border transfer issue that your DPO needs to document.
          </p>

          <p>
            We opened Chrome DevTools on a clean browser profile and mapped
            every unique domain contacted by nine analytics tools. Then we ran{" "}
            <code className="text-[0.9em] font-mono bg-warm-50 px-1.5 py-0.5 rounded">dig</code>{" "}
            on each domain to identify where the data actually goes.
          </p>

          {/* --- What we mapped --- */}
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            What we mapped
          </h2>

          <p>
            For each tool, we recorded: the total number of unique domains
            contacted, how many of those are third-party (not your own domain),
            where the data lands geographically, and the specific domain names
            involved. The methodology is reproducible &mdash; steps are at the
            bottom of this post.
          </p>

          {/* --- Results table --- */}
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            The results
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-[0.9rem] border-collapse">
              <thead>
                <tr className="border-b border-warm-200">
                  <th className="text-left py-2.5 pr-4 text-text-secondary font-medium">Tool</th>
                  <th className="text-center py-2.5 px-3 text-text-secondary font-medium">Domains</th>
                  <th className="text-center py-2.5 px-3 text-text-secondary font-medium">Third-party</th>
                  <th className="text-left py-2.5 px-3 text-text-secondary font-medium">Data destination</th>
                  <th className="text-left py-2.5 text-text-secondary font-medium">Domains contacted</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-medium text-text-primary">SealMetrics</td>
                  <td className="py-2.5 px-3 text-center font-mono text-green-muted">1</td>
                  <td className="py-2.5 px-3 text-center font-mono text-green-muted">0</td>
                  <td className="py-2.5 px-3 text-text-body">EU (customer&apos;s subdomain)</td>
                  <td className="py-2.5 font-mono text-[0.82rem] text-text-secondary">collect.yourdomain.com</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Plausible</td>
                  <td className="py-2.5 px-3 text-center font-mono text-text-body">1</td>
                  <td className="py-2.5 px-3 text-center font-mono text-text-body">1</td>
                  <td className="py-2.5 px-3 text-text-body">EU</td>
                  <td className="py-2.5 font-mono text-[0.82rem] text-text-secondary">plausible.io</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Fathom</td>
                  <td className="py-2.5 px-3 text-center font-mono text-text-body">1</td>
                  <td className="py-2.5 px-3 text-center font-mono text-text-body">1</td>
                  <td className="py-2.5 px-3 text-text-body">US/EU</td>
                  <td className="py-2.5 font-mono text-[0.82rem] text-text-secondary">cdn.usefathom.com</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Simple Analytics</td>
                  <td className="py-2.5 px-3 text-center font-mono text-text-body">1</td>
                  <td className="py-2.5 px-3 text-center font-mono text-text-body">1</td>
                  <td className="py-2.5 px-3 text-text-body">EU</td>
                  <td className="py-2.5 font-mono text-[0.82rem] text-text-secondary">queue.simpleanalyticscdn.com</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Piwik PRO</td>
                  <td className="py-2.5 px-3 text-center font-mono text-text-body">2</td>
                  <td className="py-2.5 px-3 text-center font-mono text-text-body">2</td>
                  <td className="py-2.5 px-3 text-text-body">EU/US</td>
                  <td className="py-2.5 font-mono text-[0.82rem] text-text-secondary">yourname.piwik.pro, yourname.containers.piwik.pro</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Mixpanel</td>
                  <td className="py-2.5 px-3 text-center font-mono text-text-body">2</td>
                  <td className="py-2.5 px-3 text-center font-mono text-text-body">2</td>
                  <td className="py-2.5 px-3 text-text-body">US</td>
                  <td className="py-2.5 font-mono text-[0.82rem] text-text-secondary">cdn.mxpnl.com, api-js.mixpanel.com</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">PostHog</td>
                  <td className="py-2.5 px-3 text-center font-mono text-text-body">2</td>
                  <td className="py-2.5 px-3 text-center font-mono text-text-body">2</td>
                  <td className="py-2.5 px-3 text-text-body">US/EU</td>
                  <td className="py-2.5 font-mono text-[0.82rem] text-text-secondary">us.posthog.com, us-assets.i.posthog.com</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Google Analytics 4</td>
                  <td className="py-2.5 px-3 text-center font-mono text-red-alert">3</td>
                  <td className="py-2.5 px-3 text-center font-mono text-red-alert">3</td>
                  <td className="py-2.5 px-3 text-text-body">US</td>
                  <td className="py-2.5 font-mono text-[0.82rem] text-text-secondary">googletagmanager.com, google-analytics.com, region1.google-analytics.com</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Adobe Analytics</td>
                  <td className="py-2.5 px-3 text-center font-mono text-red-alert">4</td>
                  <td className="py-2.5 px-3 text-center font-mono text-red-alert">4</td>
                  <td className="py-2.5 px-3 text-text-body">US</td>
                  <td className="py-2.5 font-mono text-[0.82rem] text-text-secondary">assets.adobedtm.com, dpm.demdex.net, yourdomain.sc.omtrdc.net, yourdomain.d1.sc.omtrdc.net</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The range is stark. SealMetrics contacts one domain &mdash; your
            own. Adobe Analytics contacts four third-party domains, all
            resolving to US infrastructure.
          </p>

          {/* --- Performance cost --- */}
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            The performance cost
          </h2>

          <p>
            Every unique domain requires two network round-trips before a single
            byte of data moves: a DNS resolution (50&ndash;100 ms) and a TLS
            handshake (100&ndash;200 ms). That is 150&ndash;300 ms per domain,
            on the first visit.
          </p>

          <p>
            Adobe Analytics contacts 4 domains. That is{" "}
            <span className="font-mono font-medium text-text-primary">
              600&ndash;1,200 ms
            </span>{" "}
            of network overhead before analytics data even begins to transfer.
            GA4&apos;s 3 domains cost 450&ndash;900 ms. SealMetrics, with one
            first-party domain, costs 150&ndash;300 ms &mdash; and that domain
            is already resolved because it is a subdomain of your own site.
          </p>

          <p>
            On a mobile connection with 80 ms RTT, four domains add nearly a
            full second of latency. That latency competes with your content,
            your images, your fonts. It is not theoretical &mdash; it shows up
            in Largest Contentful Paint and Interaction to Next Paint.
          </p>

          {/* --- Privacy and GDPR cost --- */}
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            The privacy and GDPR cost
          </h2>

          <p>
            Post-Schrems II, every data transfer to a US entity requires
            Standard Contractual Clauses plus a Transfer Impact Assessment.
            Each third-party US domain is a legal surface your organization must
            document and defend. Your DPO needs to account for each one.
          </p>

          <p>
            GA4 sends data to three Google-owned domains, all resolving to US
            infrastructure. Adobe sends data to four domains &mdash; including{" "}
            <code className="text-[0.9em] font-mono bg-warm-50 px-1.5 py-0.5 rounded">dpm.demdex.net</code>
            , Adobe&apos;s audience management platform, which processes data in
            the United States. Each domain is a separate data processor
            relationship that requires{" "}
            <Link
              href="/glossary/gdpr-analytics-compliance"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              GDPR compliance documentation
            </Link>
            .
          </p>

          <p>
            Zero third-party domains means zero cross-border transfer issues.
            One domain &mdash; your own &mdash; means one data processing
            relationship: yours.
          </p>

          {/* --- Data residency --- */}
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            The data residency question
          </h2>

          <p>
            Where do the bytes actually go? We ran{" "}
            <code className="text-[0.9em] font-mono bg-warm-50 px-1.5 py-0.5 rounded">traceroute</code>{" "}
            and GeoIP lookups on every domain in the table.
          </p>

          <p>
            GA4&apos;s collect endpoint &mdash;{" "}
            <code className="text-[0.9em] font-mono bg-warm-50 px-1.5 py-0.5 rounded">region1.google-analytics.com</code>{" "}
            &mdash; resolves to Mountain View, California. Adobe&apos;s{" "}
            <code className="text-[0.9em] font-mono bg-warm-50 px-1.5 py-0.5 rounded">omtrdc.net</code>{" "}
            resolves to San Jose, California. Both are US-based data
            destinations, regardless of what the marketing pages say about
            &ldquo;regional data processing.&rdquo;
          </p>

          <p>
            SealMetrics resolves to{" "}
            <code className="text-[0.9em] font-mono bg-warm-50 px-1.5 py-0.5 rounded">collect.yourdomain.com</code>
            , which points to EU infrastructure via a CNAME record on the
            customer&apos;s own domain. The{" "}
            <Link
              href="/glossary/analytics-data-residency"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              data residency
            </Link>{" "}
            is verifiable: run{" "}
            <code className="text-[0.9em] font-mono bg-warm-50 px-1.5 py-0.5 rounded">dig collect.yourdomain.com</code>{" "}
            and check the IP yourself.
          </p>

          {/* --- First-party vs third-party --- */}
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            First-party vs third-party collection
          </h2>

          <p>
            The distinction matters for more than compliance. Third-party
            domains are the primary target of ad blockers, browser privacy
            features, and content security policies. When your analytics runs on{" "}
            <code className="text-[0.9em] font-mono bg-warm-50 px-1.5 py-0.5 rounded">googletagmanager.com</code>{" "}
            or{" "}
            <code className="text-[0.9em] font-mono bg-warm-50 px-1.5 py-0.5 rounded">demdex.net</code>
            , every blocklist in the world knows to intercept it.
          </p>

          <p>
            SealMetrics uses{" "}
            <Link
              href="/glossary/server-side-tracking"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              server-side collection
            </Link>{" "}
            through a CNAME on the customer&apos;s own domain. To the browser,
            to DNS resolvers, and to ad blockers, it looks like a first-party
            request &mdash; because it is one. No third-party domain to block,
            no cross-border transfer, no additional DNS lookups. The{" "}
            <Link
              href="/how-it-works"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              collection architecture
            </Link>{" "}
            is designed so that the analytics request is indistinguishable from
            any other request to your own site.
          </p>

          {/* --- How we mapped --- */}
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            How we mapped this
          </h2>

          <p>
            The test is reproducible. Here are the steps:
          </p>

          <ol className="list-decimal pl-6 space-y-2 text-[1.05rem] leading-[1.8] text-text-body">
            <li>
              Open Chrome with a clean profile (no extensions, no cached data).
            </li>
            <li>
              Open DevTools &rarr; Network tab. Enable &ldquo;Preserve log&rdquo;
              and disable cache.
            </li>
            <li>
              Install each analytics tool on a minimal HTML page, one at a time.
            </li>
            <li>
              Load the page. Record every unique domain in the Network tab.
            </li>
            <li>
              Run{" "}
              <code className="text-[0.9em] font-mono bg-warm-50 px-1.5 py-0.5 rounded">dig [domain]</code>{" "}
              on each domain to get the resolved IP address.
            </li>
            <li>
              Use GeoIP lookup on each IP to determine the physical location of
              the server.
            </li>
            <li>
              Classify each domain as first-party (your domain) or third-party
              (vendor domain).
            </li>
          </ol>

          <p>
            No special tools required. Anyone with Chrome and a terminal can
            verify these results in under an hour.
          </p>

          {/* --- Bottom line --- */}
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            The bottom line
          </h2>

          <p>
            Every external domain your analytics contacts is a performance
            penalty, a privacy liability, and a legal surface. Four domains
            means four DNS lookups, four TLS handshakes, four third-party data
            processors, and four entries in your Transfer Impact Assessment.
            One domain &mdash; your own &mdash; means none of that.
          </p>

          <p>
            SealMetrics collects data through your subdomain, stores it in EU
            infrastructure, and contacts zero third-party domains. Read the
            full{" "}
            <Link
              href="/security"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              security and compliance architecture
            </Link>{" "}
            or{" "}
            <Link
              href="/data-loss-calculator"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              calculate how much data your current setup is losing
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
              href="/blog/analytics-tools-cookies-cataloged"
              className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              Every Cookie Set by Every Major Analytics Tool, Cataloged
            </Link>
            <Link
              href="/blog/analytics-tools-ad-blocker-test"
              className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              We Tested 9 Analytics Tools Against Every Major Ad Blocker
            </Link>
          </div>
        </div>
      </div>
    </article>
    </>
  );
}
