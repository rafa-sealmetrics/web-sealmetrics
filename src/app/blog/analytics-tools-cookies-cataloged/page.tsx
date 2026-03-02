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
            We cataloged every cookie from 9 analytics tools — name, domain,
            type, expiry, and purpose — using official vendor documentation
            and DevTools verification on clean browser profiles.
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
                  <td className="py-2.5 pr-4 text-text-body">PostHog</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">1</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">1</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">~70</td>
                  <td className="py-2.5 pl-3 text-right font-mono text-text-body">365 days</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Piwik PRO</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">2</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">2</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">~80</td>
                  <td className="py-2.5 pl-3 text-right font-mono text-text-body">13 months</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Mixpanel</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">2</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">2</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">~200</td>
                  <td className="py-2.5 pl-3 text-right font-mono text-text-body">365 days</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Google Analytics 4</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">2</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">2</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">0</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">~120</td>
                  <td className="py-2.5 pl-3 text-right font-mono text-red-alert">2 years</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 text-text-body">Adobe Analytics</td>
                  <td className="py-2.5 px-3 text-right font-mono text-red-alert">6</td>
                  <td className="py-2.5 px-3 text-right font-mono text-text-body">4</td>
                  <td className="py-2.5 px-3 text-right font-mono text-red-alert">2</td>
                  <td className="py-2.5 px-3 text-right font-mono text-red-alert">~450</td>
                  <td className="py-2.5 pl-3 text-right font-mono text-red-alert">2 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Four tools set zero cookies. The rest range from 1 to 6.
            Adobe Analytics leads with{" "}
            <span className="font-mono font-medium text-text-primary">
              6 cookies
            </span>{" "}
            including 2 third-party cookies on external domains. GA4 sets 2
            first-party cookies in its base configuration — fewer than many
            assume, but each one persists for 2 years.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            GA4 cookies in detail
          </h2>

          <p>
            A base GA4 installation (gtag.js, no Google Ads, no Google Signals)
            sets 2 first-party cookies. Both are placed on your domain. No
            third-party cookies are set by GA4 itself.
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
                  <td className="py-2.5 pl-3 text-text-body">Session state (session ID, count, engagement)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Google&apos;s{" "}
            <span className="font-mono text-[0.95rem]">_ga</span> cookie
            persists for 2 years. Once a visitor accepts your consent
            banner, GA4 can recognize them for up to 24 months. If they reject,
            GA4 cannot recognize them at all.
          </p>

          <p>
            A common misconception is that GA4 sets third-party cookies on{" "}
            <span className="font-mono text-[0.95rem]">.doubleclick.net</span>.
            It does not — not in its base configuration. Third-party cookies
            on doubleclick.net (like{" "}
            <span className="font-mono text-[0.95rem]">IDE</span>) only appear
            when Google Signals or Google Ads linking is enabled. With Google
            Ads, GA4 also sets{" "}
            <span className="font-mono text-[0.95rem]">_gac_gb_*</span> and{" "}
            <span className="font-mono text-[0.95rem]">_gcl_*</span> cookies —
            but these are first-party cookies on your domain, not third-party.
            Note: the legacy{" "}
            <span className="font-mono text-[0.95rem]">_gid</span> cookie (24
            hours) no longer appears in Google&apos;s official documentation,
            though it may still be set on some older implementations.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            Adobe Analytics cookies in detail
          </h2>

          <p>
            A typical Adobe Analytics deployment with the Experience Cloud ID
            Service (ECID) sets 6 cookies — the most of any tool we tested.
            Four are first-party. Two are third-party cookies on Adobe&apos;s
            tracking domains:{" "}
            <span className="font-mono text-[0.95rem]">.omtrdc.net</span> and{" "}
            <span className="font-mono text-[0.95rem]">.demdex.net</span>.
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
                  <td className="py-2.5 px-3 text-red-alert">Third-party*</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">2 years</td>
                  <td className="py-2.5 pl-3 text-text-body">Visitor ID</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-text-primary">s_fid</td>
                  <td className="py-2.5 px-3 font-mono text-[0.85rem] text-text-body">.example.com</td>
                  <td className="py-2.5 px-3 text-text-body">First-party</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">2 years</td>
                  <td className="py-2.5 pl-3 text-text-body">Fallback visitor ID (when s_vi fails)</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-text-primary">AMCV_*</td>
                  <td className="py-2.5 px-3 font-mono text-[0.85rem] text-text-body">.example.com</td>
                  <td className="py-2.5 px-3 text-text-body">First-party</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">13 months</td>
                  <td className="py-2.5 pl-3 text-text-body">Experience Cloud visitor ID (ECID)</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-text-primary">AMCVS_*</td>
                  <td className="py-2.5 px-3 font-mono text-[0.85rem] text-text-body">.example.com</td>
                  <td className="py-2.5 px-3 text-text-body">First-party</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">Session</td>
                  <td className="py-2.5 pl-3 text-text-body">Session initialization flag</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-text-primary">s_cc</td>
                  <td className="py-2.5 px-3 font-mono text-[0.85rem] text-text-body">.example.com</td>
                  <td className="py-2.5 px-3 text-text-body">First-party</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">Session</td>
                  <td className="py-2.5 pl-3 text-text-body">Cookie support check</td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-text-primary">demdex</td>
                  <td className="py-2.5 px-3 font-mono text-[0.85rem] text-red-alert">.demdex.net</td>
                  <td className="py-2.5 px-3 text-red-alert">Third-party</td>
                  <td className="py-2.5 px-3 font-mono text-text-body">180 days</td>
                  <td className="py-2.5 pl-3 text-text-body">Cross-domain user ID (ECID infrastructure)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            *The <span className="font-mono text-[0.95rem]">s_vi</span> cookie
            is third-party by default (on{" "}
            <span className="font-mono text-[0.95rem]">.omtrdc.net</span>), but
            becomes first-party when a CNAME record is configured. With CNAME
            on Safari, it is capped to 7 days by Intelligent Tracking
            Prevention.
          </p>

          <p>
            The <span className="font-mono text-[0.95rem]">demdex</span> cookie
            is part of the ECID infrastructure — it appears even without Adobe
            Audience Manager. With Audience Manager enabled, additional
            third-party cookies (<span className="font-mono text-[0.95rem]">dextp</span>,{" "}
            <span className="font-mono text-[0.95rem]">dst</span>) may also
            appear on <span className="font-mono text-[0.95rem]">.demdex.net</span>.
            Safari and Firefox already block these third-party cookies by default.
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
            <span className="font-mono text-[0.95rem]">.omtrdc.net</span>{" "}
            or{" "}
            <span className="font-mono text-[0.95rem]">.demdex.net</span>{" "}
            — face an additional problem beyond consent. Browsers are killing
            them.
          </p>

          <p>
            Safari&apos;s Intelligent Tracking Prevention already blocks all
            third-party cookies by default. Firefox&apos;s Enhanced Tracking
            Protection does the same. Chrome has restricted third-party cookie
            access and continues to tighten controls. Adobe&apos;s{" "}
            <span className="font-mono text-[0.95rem]">s_vi</span> on
            omtrdc.net and{" "}
            <span className="font-mono text-[0.95rem]">demdex</span> on
            demdex.net are already non-functional for a significant share of
            browsers. When Google Signals is enabled, GA4 also relies on
            third-party cookies on doubleclick.net — equally blocked.
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
            We used two sources for each tool:
          </p>

          <ol className="list-decimal pl-6 space-y-2 text-text-body">
            <li>
              Official vendor documentation — cookie names, domains, types,
              and expiry periods as published by each vendor (linked in sources
              below)
            </li>
            <li>
              DevTools verification — clean Chrome profile, no extensions, no
              ad blockers, default settings. Loaded each tool&apos;s default
              installation and checked{" "}
              <span className="font-mono text-[0.95rem]">Application &gt; Cookies</span>
            </li>
          </ol>

          <p>
            Cookie names, domains, types, and expiry periods come from
            official documentation. Byte sizes are approximate. Some tools may
            set additional cookies depending on configuration — GA4 with Google
            Ads adds first-party{" "}
            <span className="font-mono text-[0.95rem]">_gac_*</span> and{" "}
            <span className="font-mono text-[0.95rem]">_gcl_*</span> cookies;
            Adobe with Audience Manager adds{" "}
            <span className="font-mono text-[0.95rem]">dextp</span> and{" "}
            <span className="font-mono text-[0.95rem]">dst</span> on
            demdex.net. The counts above reflect base configurations.
          </p>

          <p className="text-[0.9rem] text-text-tertiary">
            Sources: Google Analytics{" "}
            <span className="font-mono text-[0.85rem]">support.google.com/analytics/answer/11397207</span>,
            Adobe Experience League{" "}
            <span className="font-mono text-[0.85rem]">experienceleague.adobe.com/docs/core-services/interface/data-collection/cookies/analytics</span>,
            Piwik PRO Help{" "}
            <span className="font-mono text-[0.85rem]">help.piwik.pro/support/privacy/cookies-created-for-visitors-by-piwik-pro</span>,
            PostHog Docs{" "}
            <span className="font-mono text-[0.85rem]">posthog.com/docs/libraries/js/persistence</span>,
            Mixpanel Docs{" "}
            <span className="font-mono text-[0.85rem]">docs.mixpanel.com/docs/tracking-methods/sdks/javascript</span>.
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
