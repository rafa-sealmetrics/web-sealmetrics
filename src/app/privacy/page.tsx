import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — SealMetrics",
  description:
    "SealMetrics privacy policy. How we handle data, what we collect, and how we protect your information.",
  alternates: {
    canonical: "https://sealmetrics.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="pt-40 pb-28 bg-white">
      <div className="max-w-[800px] mx-auto px-8">
        <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
          Legal
        </span>
        <h1 className="headline-hero mb-12">Privacy Policy</h1>

        <div className="prose-sm space-y-8 text-[0.95rem] leading-[1.75] text-text-secondary">
          <p>
            <strong className="text-text-primary">Last updated:</strong> March
            1, 2026
          </p>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              1. Who we are
            </h2>
            <p>
              SealMetrics (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a web analytics
              platform headquartered in Spain, EU. We provide cookieless
              analytics services to businesses (&ldquo;Clients&rdquo;). This privacy
              policy covers how we handle data in two contexts: (a) visitors to
              sealmetrics.com, and (b) visitors to our Clients&rsquo; websites
              where SealMetrics analytics is installed.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              2. Data we collect on sealmetrics.com
            </h2>
            <p className="mb-3">
              When you visit sealmetrics.com, we collect:
            </p>
            <ul className="space-y-1 pl-5 list-none">
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                Information you voluntarily provide via forms (name, email,
                company, website URL)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                Anonymous analytics data via our own SealMetrics script (page
                views, session duration, referrer — no PII)
              </li>
            </ul>
            <p className="mt-3">
              We do not use cookies, tracking pixels, or third-party analytics
              tools on sealmetrics.com.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              3. Data we collect on Client websites
            </h2>
            <p className="mb-3">
              When installed on a Client&rsquo;s website, SealMetrics collects:
            </p>
            <ul className="space-y-1 pl-5 list-none">
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                Page URLs and referrer URLs
              </li>
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                Browser type, operating system, screen resolution
              </li>
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                Session behavior (page views, scroll depth, clicks, time on
                page)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                Country-level geolocation (derived from IP, which is immediately
                discarded)
              </li>
            </ul>
            <p className="mt-3">
              <strong className="text-text-primary">
                We do not collect:
              </strong>{" "}
              IP addresses, device fingerprints, names, email addresses, or any
              data that could identify an individual visitor. No cookies or local
              storage are used.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              4. Legal basis for processing
            </h2>
            <p>
              For sealmetrics.com form submissions: consent (Article 6(1)(a)
              GDPR) and legitimate interest in responding to inquiries (Article
              6(1)(f)). For analytics data on Client websites: legitimate
              interest of the Client in understanding website usage (Article
              6(1)(f)), as no personal data is processed.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              5. Data storage and residency
            </h2>
            <p>
              All data is processed and stored exclusively in EU data centers.
              There are no data transfers outside the European Economic Area. We
              do not use sub-processors located outside the EU.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              6. Data retention
            </h2>
            <p>
              Analytics data is retained for the duration of the Client&rsquo;s
              contract plus 30 days. Form submissions on sealmetrics.com are
              retained for 24 months unless you request earlier deletion.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              7. Your rights
            </h2>
            <p>
              Under GDPR, you have the right to access, rectify, erase, port,
              and restrict processing of your personal data. For data you have
              provided via forms, contact us at privacy@sealmetrics.com. Note
              that analytics data collected on Client websites is anonymous and
              cannot be linked to any individual.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              8. Third-party sharing
            </h2>
            <p>
              We do not sell, trade, or share personal data with third parties
              for advertising or marketing purposes. We may share data with
              service providers who assist in operating our platform, under
              strict data processing agreements.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              9. Contact
            </h2>
            <p>
              For privacy-related questions or to exercise your rights, contact
              us at{" "}
              <span className="text-text-primary font-medium">
                privacy@sealmetrics.com
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
