import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { FreeAuditForm } from "./FreeAuditForm";

export const metadata: Metadata = {
  title: "Free Pixel & GDPR Audit — SealMetrics",
  description:
    "Get a free audit of your website's tracking implementation. We check pixel firing pre-consent, Consent Mode v2, and GDPR compliance signals. Report delivered by email in 2–3 minutes.",
  openGraph: {
    title: "Free Pixel & GDPR Audit — SealMetrics",
    description:
      "Find out if your GA4, Meta, TikTok, and Google Ads pixels fire before consent. Free audit, full PDF report by email.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/free-audit",
  },
};

export default function FreeAuditPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Free Audit" }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Free Audit", url: "/free-audit" },
        ])}
      />

      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
        {/* Hero */}
        <header className="max-w-[760px] mb-12 sm:mb-16">
          <p className="text-[0.75rem] font-medium tracking-[0.06em] uppercase text-text-tertiary mb-4">
            Free tool
          </p>
          <h1 className="font-serif text-[2.4rem] sm:text-[3rem] leading-[1.1] text-text-primary mb-5">
            Are your pixels firing before consent?
          </h1>
          <p className="text-[1.05rem] text-text-secondary leading-relaxed">
            Most ecommerce sites unknowingly fire GA4, Meta, and Google Ads
            tracking before users accept cookies. That is a GDPR violation —
            and a reason for CNIL, AEPD, and other EU regulators to fine you.
            Audit your site in 2–3 minutes. Free PDF report.
          </p>
        </header>

        {/* Two-column layout: form left, what-you-get right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
          <FreeAuditForm />

          {/* Right column: what's inside the report */}
          <aside>
            <div className="bg-white border border-warm-100 rounded-[4px] p-7 sm:p-8">
              <h3 className="font-serif text-[1.1rem] text-text-primary mb-5">
                What is in your report
              </h3>
              <ul className="space-y-4 text-[0.85rem] text-text-secondary leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-text-tertiary flex-shrink-0">—</span>
                  <span>
                    <span className="font-medium text-text-primary">
                      Pixel fire timeline
                    </span>
                    : every GA4, Meta, TikTok, Google Ads, Clarity, LinkedIn,
                    Pinterest, and Hotjar request, classified as pre-consent
                    or post-consent.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-tertiary flex-shrink-0">—</span>
                  <span>
                    <span className="font-medium text-text-primary">
                      Consent Mode v2 audit
                    </span>
                    : whether your site declares it, and whether the defaults
                    (ad_storage, analytics_storage) are denied or granted on
                    arrival.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-tertiary flex-shrink-0">—</span>
                  <span>
                    <span className="font-medium text-text-primary">
                      Cookie banner check
                    </span>
                    : detection of Cookiebot, OneTrust, and other CMPs;
                    behavior before and after consent acceptance.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-tertiary flex-shrink-0">—</span>
                  <span>
                    <span className="font-medium text-text-primary">
                      GDPR risk summary
                    </span>
                    : written explanation of what regulators would flag and
                    why, in plain language.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-tertiary flex-shrink-0">—</span>
                  <span>
                    <span className="font-medium text-text-primary">
                      Remediation guidance
                    </span>
                    : concrete steps to fix the issues your team can act on
                    this week.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-5 p-5 border border-warm-100 rounded-[4px] bg-warm-50">
              <p className="text-[0.75rem] text-text-tertiary uppercase tracking-wider mb-2">
                How it works
              </p>
              <ol className="space-y-2 text-[0.8rem] text-text-secondary leading-relaxed">
                <li>
                  <span className="font-mono text-text-tertiary mr-1.5">
                    01
                  </span>{" "}
                  We open your URL in a headless browser.
                </li>
                <li>
                  <span className="font-mono text-text-tertiary mr-1.5">
                    02
                  </span>{" "}
                  Capture every network request and consent state.
                </li>
                <li>
                  <span className="font-mono text-text-tertiary mr-1.5">
                    03
                  </span>{" "}
                  Click your cookie banner and capture again.
                </li>
                <li>
                  <span className="font-mono text-text-tertiary mr-1.5">
                    04
                  </span>{" "}
                  Generate the PDF and email it to you.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-warm-100 bg-warm-white">
        <div className="max-w-[760px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
          <h2 className="font-serif text-[1.8rem] sm:text-[2.2rem] text-text-primary mb-10">
            Common questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-[1.1rem] text-text-primary mb-2">
                Is this really free?
              </h3>
              <p className="text-[0.9rem] text-text-secondary leading-relaxed">
                Yes. One audit per email per day. We send the PDF to your inbox
                and keep your email to occasionally share content on tracking
                and compliance — you can unsubscribe with one click.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-[1.1rem] text-text-primary mb-2">
                What data do you collect about my site?
              </h3>
              <p className="text-[0.9rem] text-text-secondary leading-relaxed">
                Only metadata about network requests (URLs, methods, timing)
                and the consent state at each request. We do not store the HTML
                of your page or any personal data of visitors that might appear
                in the DOM.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-[1.1rem] text-text-primary mb-2">
                My site has Cloudflare. Will it work?
              </h3>
              <p className="text-[0.9rem] text-text-secondary leading-relaxed">
                Cloudflare sometimes blocks automated browsers. If that
                happens, the report explicitly says &quot;audit
                inconclusive&quot; rather than reporting false findings.
                Contact us if you want a manual audit through a different
                method.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-[1.1rem] text-text-primary mb-2">
                Does the audit click &quot;buy&quot; on my site?
              </h3>
              <p className="text-[0.9rem] text-text-secondary leading-relaxed">
                No. We navigate up to the checkout page and stop before any
                payment step. We never submit forms with real customer data or
                trigger real orders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
