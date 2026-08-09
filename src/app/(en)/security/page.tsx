import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import { breadcrumbSchema, speakableWebPageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "Security Overview — Sealmetrics",
  description:
    "How Sealmetrics protects analytics data: privacy-by-design architecture, encryption, per-account isolation, automatic retention TTLs and EU-only infrastructure.",
  openGraph: {
    title: "Security Overview — Sealmetrics",
    description:
      "Privacy-by-design architecture, encryption, per-account isolation, automatic retention TTLs and EU-only infrastructure.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    url: "https://sealmetrics.com/security/",
    siteName: "SealMetrics",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Security Overview — Sealmetrics",
    description: "Privacy-by-design architecture, encryption, per-account isolation, automatic retention TTLs and EU-only infrastructure.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/security/",
    languages: getAlternates("/security"),
  },
};

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3 mt-10">
      {children}
    </h2>
  );
}
function Tbl({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-[0.88rem] border border-warm-100">
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className={
                i === 0
                  ? "bg-warm-white font-medium text-text-primary"
                  : "border-t border-warm-100"
              }
            >
              {r.map((c, j) => (
                <td key={j} className="px-3 py-2 align-top">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Security" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Security", url: "/security" }])} />
      <JsonLd
        data={speakableWebPageSchema({
          url: "/security",
          name: "Security Overview — Sealmetrics",
        })}
      />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span
            className="eyebrow mb-5"
            style={{ display: "inline-flex", justifyContent: "center" }}
          >
            Trust Center
          </span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            Security <em>overview.</em>
          </h1>
          <p
            className="text-ink-soft mt-8 mx-auto max-w-[62ch] leading-[1.55]"
            style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
          >
            The technical and organizational measures behind Sealmetrics&rsquo;
            consentless analytics — written for technical evaluators, security
            teams and DPOs.
          </p>
        </div>
      </section>

      <TldrBlock
        answer={
          <>
            Sealmetrics&rsquo; first security control is structural:{" "}
            <strong>data that is never collected or persisted cannot leak</strong>.
            The pixel uses no cookies or device storage, visitor IP addresses
            have no column in any analytics database, and the country dimension
            is derived from the browser timezone — not the IP. Everything else
            follows the measures in Annex 2 of the{" "}
            <a href="/dpa/" className="underline">DPA</a>: TLS 1.2+ in transit
            (including AI inference), AES-256 at rest, per-account logical
            isolation across all storage layers, RBAC with MFA and least
            privilege, and retention enforced by automatic database-level TTLs
            (14 days / 90 days / 24 months / 2 hours). Visitor data is processed
            entirely within the EU.
          </>
        }
        bullets={[
          <>
            No cookies, no device storage, no persisted IPs — verified against
            the code served in production.
          </>,
          <>
            Retention is fixed and enforced by automatic database TTLs, not
            manual processes.
          </>,
          <>
            EU-only visitor data flow (Ireland + Paris); the sole non-EEA
            transfer is account-user service emails via Resend (USA, SCCs + DPF).
          </>,
        ]}
      />

      <section className="pt-12 pb-28 bg-white">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <p className="text-[0.9rem] text-text-tertiary mb-10">
            Version 1.0 · Last updated: July 30, 2026 ·{" "}
            <a href="/es/security/" className="underline">
              Versión en español
            </a>{" "}
            (the Spanish version of this document is the authoritative text;
            this English version is provided for convenience)
          </p>

          <div className="space-y-4 text-[0.95rem] leading-[1.75] text-text-secondary">
            <p>
              This page is the security companion to the Sealmetrics Trust
              Center. It summarizes the actual technical and organizational
              measures protecting the service, consistent with Annex 2 (Art. 32
              GDPR) of the{" "}
              <a href="/dpa/" className="underline">
                Data Processing Agreement
              </a>
              ; in case of discrepancy, the DPA prevails.
            </p>

            <H>1. Privacy-by-design architecture</H>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-text-primary">
                  No cookies, no device storage.
                </strong>{" "}
                The measurement pixel uses no cookies, localStorage,
                sessionStorage, IndexedDB or any other storage on the
                visitor&rsquo;s device — verified against the code served in
                production, not merely declared.
              </li>
              <li>
                <strong className="text-text-primary">
                  No persisted IP addresses.
                </strong>{" "}
                The visitor&rsquo;s IP has no column in any analytics database:
                the column was explicitly removed through a dedicated schema
                migration as a minimization-by-design decision. IP use is
                transient, in memory, during event processing.
              </li>
              <li>
                <strong className="text-text-primary">
                  Country from timezone, not from IP.
                </strong>{" "}
                The geographic dimension in reports is derived from the browser
                timezone via a static lookup table — the component resolving it
                does not even receive the IP as a parameter.
              </li>
              <li>
                <strong className="text-text-primary">
                  Ephemeral identifiers.
                </strong>{" "}
                The session identifier is computed in the browser from technical
                characteristics, writing nothing to the device. Maximum
                effective lifetime: 2 hours in the active session, 14 days in
                the technical log. Reporting tables are 100% aggregated and do
                not contain it.
              </li>
              <li>
                <strong className="text-text-primary">
                  No direct visitor identifiers.
                </strong>{" "}
                No names, no emails, no cross-site identifiers; per-account
                isolation in keys and tables. Campaign parameters (UTMs, click
                IDs) are processed server-side within the EU, never extracted on
                the device.
              </li>
            </ul>

            <H>2. Encryption</H>
            <Tbl
              rows={[
                ["Scope", "Measure"],
                [
                  "In transit",
                  "TLS 1.2+ on all communications, including AI inference (Seal AI)",
                ],
                ["At rest", "AES-256 on the service databases"],
                [
                  "Backups",
                  "Encrypted, 30-day retention with automatic rotation",
                ],
                [
                  "Customer BYOK keys",
                  "AES-256-GCM (authenticated encryption); API responses expose only the last 4 characters, never the encrypted material",
                ],
              ]}
            />

            <H>3. Isolation and access control</H>
            <p>
              Every table and key carries the account identifier, and queries
              are validated against the requester&rsquo;s account: each
              customer&rsquo;s data is collected, processed and stored
              independently (multi-publisher independence, DPA clause 3.3).
              Platform access uses role-based access control (organization and
              site roles), MFA — available to users (TOTP) and required for
              Sealmetrics personnel — the least-privilege principle with
              confidentiality undertakings that survive the working
              relationship, and logged administrative access. Customers can
              additionally restrict API access with a per-account IP allowlist
              and exclude their own IPs from measurement.
            </p>

            <H>4. Automatic retention</H>
            <p>
              Retention periods for analytics data are fixed, non-configurable
              and applied via automatic database-level TTL — compliance does not
              depend on manual processes. They meet the indicative 25-month
              maximum of the AEPD audience-measurement guidance (January 2024).
            </p>
            <Tbl
              rows={[
                ["Data", "Period"],
                [
                  "Event-level technical log (user agent, full URLs)",
                  "14 days",
                ],
                ["Hourly aggregates", "90 days"],
                [
                  "Daily aggregates, conversions and their properties",
                  "24 months",
                ],
                ["Session state (operational memory)", "2 hours"],
              ]}
            />

            <H>5. EU infrastructure</H>
            <Tbl
              rows={[
                ["Component", "Provider", "Location"],
                [
                  "Service infrastructure and databases",
                  "Noraina Limited",
                  "Ireland (EU)",
                ],
                [
                  "AI inference (Seal AI, default provider)",
                  "Scaleway SAS (Iliad group)",
                  "Paris, France (EU) — zero data retention: the inference provider retains no prompts or responses",
                ],
                [
                  "Monitoring (metrics and alerts)",
                  "Self-hosted on own infrastructure",
                  "EU — no sub-processor",
                ],
              ]}
            />
            <p>
              The visitor data flow is entirely within the EU and does not rely
              on the EU-US Data Privacy Framework or SCCs.{" "}
              <strong className="text-text-primary">
                Sole transfer outside the EEA:
              </strong>{" "}
              service emails (verifications, alerts, reports with aggregated
              metrics) to the account&rsquo;s users via Resend, Inc. (USA),
              covered by SCCs and its EU-US DPF certification — affecting no
              visitor data. Full sub-processor list:{" "}
              <a href="/dpa/" className="underline">
                sealmetrics.com/dpa
              </a>
              .
            </p>

            <H>6. Secrets management and supply chain</H>
            <p>
              Platform keys live exclusively in secret managers — never in code
              or repositories. Content logging is prohibited across the AI
              chain: Seal AI prompts and responses are not written to logs, and
              Sealmetrics persists only token counters for billing and capacity.
              Third-party dependency install scripts are blocked by default with
              an explicit allowlist, reducing the supply-chain attack surface.
              The pixel is protected against data injection with HMAC-signed
              expiring tokens, domain validation and inter-service message
              signing.
            </p>

            <H>7. Incident and breach management</H>
            <p>
              Sealmetrics maintains a documented breach-management procedure
              (classification, containment, analysis, communication). Customers
              are notified{" "}
              <strong className="text-text-primary">without undue delay</strong>{" "}
              once Sealmetrics becomes aware of a breach affecting Service Data
              — mindful of the customer&rsquo;s 72-hour window towards the
              supervisory authority (DPA clause 4.5) — with the Art. 33(3) GDPR
              particulars as available, in phases where necessary. An internal
              breach register is kept per Art. 33(5) GDPR, retained 5 years from
              closure.
            </p>

            <H>8. Compliance</H>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-text-primary">GDPR:</strong> Sealmetrics
                processes analytics data under an Art. 28-compliant{" "}
                <a href="/dpa/" className="underline">
                  DPA
                </a>{" "}
                with commitments of no data reuse, purpose restriction and
                multi-publisher independence.
              </li>
              <li>
                <strong className="text-text-primary">AEPD criteria:</strong>{" "}
                designed in accordance with the AEPD guidance on cookies for
                audience-measurement tools (January 2024), including the
                contractual guarantees of its section III.C.
              </li>
              <li>
                <strong className="text-text-primary">Current DPIA</strong>,
                reviewed after significant architecture changes, plus periodic
                internal audits verifying actual code behavior against public
                documentation.
              </li>
              <li>
                <strong className="text-text-primary">
                  Configuration assessment on request:
                </strong>{" "}
                customers may request the documented assessment of the service
                configuration against the AEPD guidance (DPA clause 3.5),
                updated at least annually. Customer audit rights per DPA clause
                4.7.
              </li>
            </ul>
            <p>
              Sealmetrics does not currently hold formal third-party
              certifications (e.g. ISO 27001 or SOC 2); the assurances on this
              page rest on the contractual measures of the DPA and the internal
              technical verification described above.
            </p>

            <p className="pt-6 border-t border-warm-100 text-[0.85rem] text-text-tertiary">
              Related:{" "}
              <a href="/privacy/" className="underline">
                Privacy Policy
              </a>{" "}
              ·{" "}
              <a href="/dpa/" className="underline">
                DPA
              </a>{" "}
              ·{" "}
              <a href="/terms/" className="underline">
                Terms of Service
              </a>
              . Security or privacy inquiries: privacy@sealmetrics.com.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA — this page receives DPOs and CTOs mid-procurement; an
          email address alone is not a next step. */}
      <section className="py-16 bg-white border-t border-warm-100">
        <div className="max-w-[900px] mx-auto px-5 sm:px-10">
          <div className="bg-ink text-white rounded-[20px] px-10 py-12 text-center">
            <h2 className="text-white font-semibold leading-[1.15] tracking-[-0.02em] text-[28px] sm:text-[34px] mx-auto max-w-[24ch]">
              Does this pass your security review?
            </h2>
            <p className="text-white/70 text-[15px] leading-[1.55] mt-4 mb-7 mx-auto max-w-[52ch]">
              Walk through this document with the person who signs the DPA —
              retention TTLs, sub-processors, the AEPD assessment. 30 minutes,
              answered at the source.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 bg-white text-ink px-7 py-3.5 rounded-md text-[15px] font-semibold no-underline hover:brightness-95"
              >
                Book a security walkthrough →
              </Link>
              <Link
                href="/for/dpo"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-7 py-3.5 rounded-md text-[15px] font-semibold no-underline hover:bg-white/5"
              >
                Read the DPO briefing
              </Link>
            </div>
            <p className="text-[13px] text-white/50 mt-6">
              Evaluating as an engineer?{" "}
              <Link href="/for/cto" className="text-white/80 underline">
                The CTO page
              </Link>{" "}
              covers the pixel, API and BigQuery schema. Full posture on the{" "}
              <Link href="/trust" className="text-white/80 underline">
                Trust Center
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
