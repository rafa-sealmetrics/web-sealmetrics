import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Processing Agreement — SealMetrics",
  description:
    "SealMetrics Data Processing Agreement (DPA). Details on data processing, sub-processors, security measures, and GDPR compliance.",
  openGraph: {
    title: "Data Processing Agreement — SealMetrics",
    description:
      "Details on data processing, sub-processors, security measures, and GDPR compliance.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/dpa",
  },
};

export default function DpaPage() {
  return (
    <section className="pt-40 pb-28 bg-white">
      <div className="max-w-[800px] mx-auto px-5 sm:px-8">
        <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
          Legal
        </span>
        <h1 className="headline-hero mb-12">Data Processing Agreement</h1>

        <div className="prose-sm space-y-8 text-[0.95rem] leading-[1.75] text-text-secondary">
          <p>
            <strong className="text-text-primary">Last updated:</strong> March
            1, 2026
          </p>

          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <p className="text-[0.9rem] text-text-secondary">
              <strong className="text-text-primary">Note:</strong> SealMetrics
              analytics does not collect personal data as defined under GDPR. Our
              cookieless technology captures anonymous behavioral data only (page
              URLs, browser type, session behavior) without IP addresses, device
              fingerprints, or any identifiable information. In most cases, a DPA
              is not legally required for SealMetrics analytics data. However, we
              provide this agreement for clients whose internal governance
              requires one.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              1. Scope and purpose
            </h2>
            <p>
              This Data Processing Agreement (&ldquo;DPA&rdquo;) supplements the Terms of
              Service between SealMetrics (&ldquo;Processor&rdquo;) and the Client
              (&ldquo;Controller&rdquo;). It governs the processing of any data that
              may be considered personal data under applicable data protection
              laws in connection with the SealMetrics analytics service.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              2. Data processed
            </h2>
            <p className="mb-3">
              The SealMetrics analytics script collects the following categories
              of data from Client website visitors:
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
                Country-level geolocation (IP address is used for derivation
                only and immediately discarded)
              </li>
            </ul>
            <p className="mt-3">
              No IP addresses, device fingerprints, names, emails, or any
              directly identifiable information is collected or stored.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              3. Processing locations
            </h2>
            <p>
              All data processing and storage occurs exclusively within the
              European Economic Area (EEA). SealMetrics does not transfer data
              outside the EEA. All sub-processors are located within the EEA.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              4. Security measures
            </h2>
            <ul className="space-y-1 pl-5 list-none">
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                Encryption: TLS 1.3 in transit, AES-256 at rest
              </li>
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                Data isolation: logical separation at database level per client
              </li>
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                Access control: principle of least privilege, all access logged
              </li>
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                Infrastructure: redundant EU availability zones with 24/7
                monitoring
              </li>
              <li className="flex items-start gap-3">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                No cross-customer data access or model training
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              5. Data retention and deletion
            </h2>
            <p>
              Analytics data is retained for the duration of the service
              agreement plus 30 days. Upon termination or request, all data is
              permanently deleted within 30 days. The Client may export data at
              any time via the API or BigQuery integration prior to deletion.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              6. Sub-processors
            </h2>
            <p>
              SealMetrics uses a limited number of sub-processors, all located
              within the EEA. We will notify the Client of any changes to
              sub-processors with at least 30 days&rsquo; notice. A current list
              of sub-processors is available upon request.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              7. Data subject rights
            </h2>
            <p>
              As SealMetrics does not collect personal data, data subject
              requests (access, deletion, portability) generally do not apply to
              analytics data. Should a request be received, SealMetrics will
              assist the Client in responding to the extent technically
              feasible.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              8. Audit rights
            </h2>
            <p>
              The Client has the right to audit SealMetrics&rsquo; compliance
              with this DPA. Audits may be conducted once per year with
              reasonable notice. SealMetrics will provide relevant documentation
              and facilitate reasonable access to systems and processes.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
              9. Contact
            </h2>
            <p>
              For DPA-related questions or to request a signed copy, contact{" "}
              <span className="text-text-primary font-medium">
                dpo@sealmetrics.com
              </span>
              .
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-warm-100 flex flex-wrap gap-6 text-[0.85rem]">
            <Link href="/privacy" className="text-text-secondary no-underline hover:text-text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-text-secondary no-underline hover:text-text-primary transition-colors">Terms of Service</Link>
            <Link href="/security" className="text-text-secondary no-underline hover:text-text-primary transition-colors">Security Architecture</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
