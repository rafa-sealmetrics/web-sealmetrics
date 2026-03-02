import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms of Service — SealMetrics",
  description:
    "SealMetrics terms of service. Conditions for using the SealMetrics analytics platform.",
  openGraph: {
    title: "Terms of Service — SealMetrics",
    description:
      "Conditions for using the SealMetrics analytics platform.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Terms of Service", url: "/terms" }])} />
      <section className="pt-12 pb-28 bg-white">
      <div className="max-w-[800px] mx-auto px-5 sm:px-8">
        <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
          Legal
        </span>
        <h1 className="headline-hero mb-12">Terms of Service</h1>

        <div className="prose-sm space-y-8 text-[0.95rem] leading-[1.75] text-text-secondary">
          <p>
            <strong className="text-text-primary">Last updated:</strong> March
            1, 2026
          </p>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              1. Agreement
            </h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
              SealMetrics analytics platform (&ldquo;Service&rdquo;) provided by
              SealMetrics (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By accessing or using the Service,
              you agree to be bound by these Terms. If you are using the Service
              on behalf of an organization, you represent that you have authority
              to bind that organization.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              2. Service description
            </h2>
            <p>
              SealMetrics provides cookieless web analytics, including data
              collection, processing, reporting, AI-powered anomaly detection,
              and revenue attribution. The Service collects anonymous behavioral
              data from your website visitors using first-party cookieless
              methods. No personal data is collected by the analytics script.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              3. Your account
            </h2>
            <p>
              You are responsible for maintaining the security of your account
              credentials and for all activity under your account. You must
              provide accurate and complete registration information. You must
              notify us immediately of any unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              4. Acceptable use
            </h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="space-y-1 pl-5 list-none">
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                Use the Service for any unlawful purpose
              </li>
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                Attempt to access other clients&rsquo; data
              </li>
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                Interfere with or disrupt the Service
              </li>
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                Resell or redistribute the Service without authorization
              </li>
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                Use the Service to collect personal data beyond what the script
                captures
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              5. Data ownership
            </h2>
            <p>
              You retain full ownership of all analytics data collected through
              the Service. We do not use your data to train models, improve
              algorithms, or generate insights for other clients. You may export
              your data at any time via our API or BigQuery integration.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              6. Pricing and payment
            </h2>
            <p>
              Pricing is based on your selected plan and monthly human event
              volume. Prices are listed in euros and exclude applicable taxes.
              Payment is due monthly or annually depending on your billing cycle.
              We reserve the right to adjust pricing with 30 days&rsquo; notice.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              7. Service availability
            </h2>
            <p>
              We aim to maintain high availability but do not guarantee
              uninterrupted service. We will notify you of scheduled maintenance
              in advance. Enterprise clients may negotiate SLAs as part of
              custom agreements.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              8. Termination
            </h2>
            <p>
              Either party may terminate the agreement with 30 days&rsquo;
              written notice. Upon termination, you may export your data within
              30 days, after which it will be permanently deleted. We may suspend
              or terminate accounts that violate these Terms immediately.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              9. Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, SealMetrics
              shall not be liable for indirect, incidental, special, or
              consequential damages. Our total liability shall not exceed the
              amount paid by you in the 12 months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              10. Governing law
            </h2>
            <p>
              These Terms are governed by the laws of Spain. Any disputes shall
              be resolved in the courts of Barcelona, Spain, unless otherwise
              required by applicable consumer protection laws.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              11. Contact
            </h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <span className="text-text-primary font-medium">
                legal@sealmetrics.com
              </span>
              .
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-warm-100 flex flex-wrap gap-6 text-[0.85rem]">
            <Link href="/privacy" className="text-text-secondary no-underline hover:text-text-primary transition-colors">Privacy Policy</Link>
            <Link href="/dpa" className="text-text-secondary no-underline hover:text-text-primary transition-colors">Data Processing Agreement</Link>
            <Link href="/security" className="text-text-secondary no-underline hover:text-text-primary transition-colors">Security Architecture</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
