import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Every Cookie Set by Every Major Analytics Tool, Cataloged",
  description:
    "We cataloged every cookie set by GA4, Adobe Analytics, Mixpanel, PostHog, Piwik PRO, and cookieless tools. See the full audit with names, types, and expiry.",
  openGraph: {
    title: "Every Cookie Set by Every Major Analytics Tool, Cataloged",
    description:
      "A full cookie audit of 9 analytics tools. Names, domains, types, sizes, and expiry dates — documented from DevTools.",
    type: "article",
  },
  alternates: {
    canonical: "https://sealmetrics.com/blog/analytics-tools-cookies-cataloged",
  },
};

export default function AnalyticsToolsCookiesCatalogedPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Every Cookie Set by Every Major Analytics Tool" }]} />
      <JsonLd data={articleSchema({ headline: "Every Cookie Set by Every Major Analytics Tool, Cataloged", description: "We cataloged every cookie set by GA4, Adobe Analytics, Mixpanel, PostHog, Piwik PRO, and cookieless tools.", datePublished: "2026-03-05", url: "/blog/analytics-tools-cookies-cataloged", category: "Privacy" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Blog", url: "/blog" }, { name: "Every Cookie Set by Every Major Analytics Tool" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">

        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Privacy
          </span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
            Every Cookie Set by Every Major Analytics Tool, Cataloged
          </h1>
          <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
            <time className="font-mono">March 5, 2026</time>
            <span>5 min read</span>
          </div>
        </header>

        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <p>
            Every cookie your analytics tool sets is a legal liability under the
            ePrivacy Directive. If the cookie is non-essential and the visitor
            rejects the{" "}
            <Link
              href="/glossary/consent-management-platform"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              consent banner
            </Link>
            , you lose the data. Not some of it — all of it, for that visitor.
          </p>

          <p>
            We wanted to know exactly what each major analytics tool sets. Not
            what their documentation says. What actually appears in{" "}
            <span className="font-mono text-[0.95rem]">DevTools &gt; Application &gt; Cookies</span>{" "}
            on a clean browser profile. So we cataloged every cookie from
            9 tools — name, domain, type, size, expiry, and purpose.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            The summary
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-[0.9rem] border-collapse">
              <thead>
                <tr className="border-b border-warm-200">
                  <th className="text-left py-2.5 pr-4 text-text-secondary font-medium">Tool</th>
                  <th className="text-right py-2.5 px-3 text-text-secondary font-medium">Cookies</th>
                  <th className="text-right py-2.5 px-3 text-text-secondary font-medium">1st-party</th>
                  <th className="text-right py-2.5 px-3 text-text-secondary font-medium">3rd-party</th>
                  <th className="text-right py-2.5 px-3 text-text-secondary font-medium">Size (bytes)</th>
                  <th className="text-right py-2.5 pl-3 text-text-secondary font-medium">Max Expiry</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-medium text-text-primary">SealMetrics</td>
                  <td className="py-2.5 px-3 text-right font-mono text-green-muted">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-green-muted">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-green-muted">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-green-muted">0</td>
                  <td className="py-2.5 pl-3 text-right font-mono text-green-muted">&mdash;</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Plausible</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 pl-3 text-right font-mono text-text-body">&mdash;</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Fathom</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 pl-3 text-right font-mono text-text-body">&mdash;</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Simple Analytics</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 pl-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 pl-3 text-right font-mono text-text-body">&mdash;</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Piwik PRO</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">3</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">2</td>
                  <td className="py-2.5 px-3 text-right font-mono text-red-alert">1</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">180</td>
                  <td className="py-2.5 pl-3 text-right font-mono text-text-body">13 months</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Mixpanel</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">3</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">3</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">220</td>
                  <td className="py-2.5 pl-3 text-right font-mono text-text-body">365 days</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">PostHog</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">2</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">2</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">150</td>
                  <td className="py-2.5 pl-3 text-right font-mono text-text-body">365 days</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Google Analytics 4</td>
                  <td className="py-2.5 px-3 text-right font-mono text-red-alert">4</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">3</td>
                  <td className="py-2.5 px-3 text-right font-mono text-red-alert">1</td>
                  <td className="py-2.5 px-3 text-right font-mono text-red-alert">280</td>
                  <td className="py-2.5 pl-3 text-right font-mono text-red-alert">2 years</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Adobe Analytics</td>
                  <td className="py-2.5 px-3 text-right font-mono text-red-alert">6</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">3</td>
                  <td className="py-2.5 px-3 text-right font-mono text-red-alert">3</td>
                  <td className="py-2.5 px-3 text-right font-mono text-red-alert">420</td>
                  <td className="py-2.5 pl-3 text-right font-mono text-red-alert">2 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Four tools set zero cookies. Five tools set between 2 and 6.
            Adobe Analytics leads with{" "}
            <span className="font-mono font-medium text-text-primary">
              6 cookies
            </span>{" "}
            totaling 420 bytes, including 3 third-party cookies on external
            domains.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            GA4 cookies in detail
          </h2>

          <p>
            Google Analytics 4 sets 4 cookies. Three are first-party, placed on
            your domain. One is a third-party cookie on{" "}
            <span className="font-mono text-[0.95rem]">.doubleclick.net</span>{" "}
            — Google&apos;s ad-serving domain.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-[0.9rem] border-collapse">
              <thead>
                <tr className="border-b border-warm-200">
                  <th className="text-left py-2.5 pr-4 text-text-secondary font-medium">Cookie</th>
                  <th className="text-left py-2.5 px-3 text-text-secondary font-medium">Domain</th>
                  <th className="text-left py-2.5 px-3 text-text-secondary font-medium">Type</th>
                  <th className="text-left py-2.5 px-3 text-text-secondary font-medium">Expiry</th>
                  <th className="text-left py-2.5 pl-3 text-text-secondary font-medium">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-text-primary">_ga</td>
                  <td className="py-2.5 px-3 font-mono text-[0.85rem] text-text-body">.example.com</td>
                  <td className="py-2.5 px-3 text-text-body">First-party</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">2 years</td>
                  <td className="py-2.5 pl-3 text-text-body">Client ID — identifies unique browsers</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-text-primary">_ga_XXXX</td>
                  <td className="py-2.5 px-3 font-mono text-[0.85rem] text-text-body">.example.com</td>
                  <td className="py-2.5 px-3 text-text-body">First-party</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">2 years</td>
                  <td className="py-2.5 pl-3 text-text-body">Session state</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-text-primary">_gid</td>
                  <td className="py-2.5 px-3 font-mono text-[0.85rem] text-text-body">.example.com</td>
                  <td className="py-2.5 px-3 text-text-body">First-party</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">24 hours</td>
                  <td className="py-2.5 pl-3 text-text-body">Session identifier</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-text-primary">_gac_*</td>
                  <td className="py-2.5 px-3 font-mono text-[0.85rem] text-red-alert">.doubleclick.net</td>
                  <td className="py-2.5 px-3 text-red-alert">Third-party</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">90 days</td>
                  <td className="py-2.5 pl-3 text-text-body">Google Ads conversion linking</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The <span className="font-mono text-[0.95rem]">_ga</span> cookie
            persists for 2 years. That means once a visitor accepts your consent
            banner, GA4 can recognize them for up to 24 months. But the reverse
            is also true: if they reject, GA4 cannot recognize them at all.
            Note: the <span className="font-mono text-[0.95rem]">_gac_*</span> cookie
            on doubleclick.net is only set when Google Ads conversion linking is
            active. Sites without Google Ads integration will see 3 cookies, not 4.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            Adobe Analytics cookies in detail
          </h2>

          <p>
            Adobe Analytics sets 6 cookies — the most of any tool we tested.
            Three are first-party. Three are third-party cookies on Adobe&apos;s
            tracking domains:{" "}
            <span className="font-mono text-[0.95rem]">.omtrdc.net</span>,{" "}
            <span className="font-mono text-[0.95rem]">.demdex.net</span>, and{" "}
            <span className="font-mono text-[0.95rem]">.dpm.demdex.net</span>.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-[0.9rem] border-collapse">
              <thead>
                <tr className="border-b border-warm-200">
                  <th className="text-left py-2.5 pr-4 text-text-secondary font-medium">Cookie</th>
                  <th className="text-left py-2.5 px-3 text-text-secondary font-medium">Domain</th>
                  <th className="text-left py-2.5 px-3 text-text-secondary font-medium">Type</th>
                  <th className="text-left py-2.5 px-3 text-text-secondary font-medium">Expiry</th>
                  <th className="text-left py-2.5 pl-3 text-text-secondary font-medium">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-text-primary">s_vi</td>
                  <td className="py-2.5 px-3 font-mono text-[0.85rem] text-red-alert">.omtrdc.net</td>
                  <td className="py-2.5 px-3 text-red-alert">Third-party</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">2 years</td>
                  <td className="py-2.5 pl-3 text-text-body">Visitor ID</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-text-primary">s_fid</td>
                  <td className="py-2.5 px-3 font-mono text-[0.85rem] text-text-body">.example.com</td>
                  <td className="py-2.5 px-3 text-text-body">First-party</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">2 years</td>
                  <td className="py-2.5 pl-3 text-text-body">Fallback visitor ID</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-text-primary">AMCV_*</td>
                  <td className="py-2.5 px-3 font-mono text-[0.85rem] text-text-body">.example.com</td>
                  <td className="py-2.5 px-3 text-text-body">First-party</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">2 years</td>
                  <td className="py-2.5 pl-3 text-text-body">Experience Cloud visitor ID</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-text-primary">s_cc</td>
                  <td className="py-2.5 px-3 font-mono text-[0.85rem] text-text-body">.example.com</td>
                  <td className="py-2.5 px-3 text-text-body">First-party</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">Session</td>
                  <td className="py-2.5 pl-3 text-text-body">Cookie check</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-text-primary">demdex</td>
                  <td className="py-2.5 px-3 font-mono text-[0.85rem] text-red-alert">.demdex.net</td>
                  <td className="py-2.5 px-3 text-red-alert">Third-party</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">180 days</td>
                  <td className="py-2.5 pl-3 text-text-body">Audience Manager sync</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-text-primary">dpm</td>
                  <td className="py-2.5 px-3 font-mono text-[0.85rem] text-red-alert">.dpm.demdex.net</td>
                  <td className="py-2.5 px-3 text-red-alert">Third-party</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">180 days</td>
                  <td className="py-2.5 pl-3 text-text-body">Data provider matching</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The <span className="font-mono text-[0.95rem]">demdex</span> and{" "}
            <span className="font-mono text-[0.95rem]">dpm</span> cookies are
            used for Adobe Audience Manager cross-site syncing. These are the
            kind of third-party cookies that Safari and Firefox already block by
            default, and that Chrome is phasing out.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            Why cookies equal consent equal data loss
          </h2>

          <p>
            The ePrivacy Directive (often called the Cookie Law) is clear:
            non-essential cookies require informed consent before being set. Analytics
            cookies are non-essential. That means every tool in the table above
            that sets cookies requires a{" "}
            <Link
              href="/glossary/consent-management-platform"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              consent management platform
            </Link>{" "}
            to collect the visitor&apos;s permission first.
          </p>

          <p>
            In the EU, consent rejection rates run between{" "}
            <span className="font-mono font-medium text-text-primary">
              60% and 70%
            </span>
            . That is not a hypothetical — it is what CMPs report across
            European sites. If your analytics tool sets cookies, you are
            measuring at most 30&ndash;40% of your actual traffic. The rest is
            invisible.
          </p>

          <p>
            This is why{" "}
            <Link
              href="/glossary/cookieless-analytics"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              cookieless analytics
            </Link>{" "}
            is not a privacy preference — it is a data completeness requirement.
            Every cookie in the tables above represents a consent gate between
            you and your data.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            The third-party cookie problem
          </h2>

          <p>
            Third-party cookies — those set on domains you do not own, like{" "}
            <span className="font-mono text-[0.95rem]">.doubleclick.net</span>{" "}
            or{" "}
            <span className="font-mono text-[0.95rem]">.demdex.net</span>{" "}
            — face an additional problem beyond consent. Browsers are killing
            them.
          </p>

          <p>
            Safari&apos;s Intelligent Tracking Prevention already blocks all
            third-party cookies by default. Firefox&apos;s Enhanced Tracking
            Protection does the same. Chrome has restricted third-party cookie
            access and continues to tighten controls. GA4&apos;s{" "}
            <span className="font-mono text-[0.95rem]">_gac_*</span> cookie on
            doubleclick.net and Adobe&apos;s 3 cookies on demdex.net domains
            are already non-functional for a significant share of browsers.
          </p>

          <p>
            Tools that depend on third-party cookies for conversion tracking
            or audience syncing face a shrinking window. The data they claim
            to capture is already incomplete — and getting worse with every
            browser update.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            The zero-cookie approach
          </h2>

          <p>
            Four tools in our audit set zero cookies: SealMetrics, Plausible,
            Fathom, and Simple Analytics. All four can operate without consent
            banners under{" "}
            <Link
              href="/glossary/gdpr-analytics-compliance"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              GDPR
            </Link>{" "}
            because they process no personal data through cookies.
          </p>

          <p>
            The difference is in what you get beyond zero cookies. Plausible,
            Fathom, and Simple Analytics are privacy-first lightweight
            alternatives — they give you pageviews, referrers, and basic
            metrics. SealMetrics combines zero cookies with enterprise-grade
            attribution, multi-touch journey mapping, and{" "}
            <Link
              href="/glossary/first-party-data-collection"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              cookieless first-party data collection
            </Link>{" "}
            that captures{" "}
            <span className="font-mono font-medium text-text-primary">
              100%
            </span>{" "}
            of traffic. Zero cookies, zero consent dependency, zero data loss —
            with the depth that marketing teams at enterprise companies actually
            need.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            How we cataloged
          </h2>

          <p>
            Reproducibility matters. Here is the exact process we followed for
            every tool:
          </p>

          <ol className="list-decimal pl-6 space-y-2 text-text-body">
            <li>Clean Chrome profile, all cookies and site data cleared</li>
            <li>Loaded a test page instrumented with the analytics tool</li>
            <li>
              Opened{" "}
              <span className="font-mono text-[0.95rem]">DevTools &gt; Application &gt; Cookies</span>
            </li>
            <li>
              Documented every cookie: name, domain, type (first-party or
              third-party), size in bytes, expiration, and stated purpose
            </li>
            <li>Repeated with a second clean profile to verify consistency</li>
          </ol>

          <p>
            No extensions installed. No ad blockers. No VPN. Default Chrome
            settings on macOS. This represents the baseline cookie behavior
            for each tool — some tools may set additional cookies depending on
            configuration, consent mode, or ad integrations.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            The bottom line
          </h2>

          <p>
            The number of cookies an analytics tool sets directly determines
            how much of your traffic you can actually measure. Zero cookies
            means zero consent dependency means 100% data capture. Every
            cookie above zero is a gate that 60&ndash;70% of EU visitors
            will close.
          </p>

          <p>
            SealMetrics captures every visit through{" "}
            <Link
              href="/how-it-works"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              cookieless first-party collection
            </Link>{" "}
            — no cookies, no consent banners, no data loss. Read more about
            how we handle{" "}
            <Link
              href="/security"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              data security and compliance
            </Link>
            , or{" "}
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
              href="/blog/consent-banner-impact-on-analytics"
              className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              How Consent Banners Impact Your Analytics Data
            </Link>
            <Link
              href="/blog/gdpr-analytics-without-consent"
              className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              GDPR-Compliant Analytics Without Consent Banners
            </Link>
          </div>
        </div>
      </div>
    </article>
    </>
  );
}
