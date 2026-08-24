import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Service Level Agreement — Sealmetrics",
  description:
    "Sealmetrics SLA (v1.1): availability commitments per service plane, service credits and support response times for Scale and Enterprise plans.",
  openGraph: {
    title: "Service Level Agreement — Sealmetrics",
    description:
      "Availability commitments per service plane, service credits and support response times for Scale and Enterprise plans.",
    type: "website",
    images: [ogImage("/sla/")],
    url: "https://sealmetrics.com/sla/",
    siteName: "Sealmetrics",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Service Level Agreement — Sealmetrics",
    description:
      "Availability commitments per service plane, service credits and support response times for Scale and Enterprise plans.",
    images: [ogImage("/sla/")],
  },
  alternates: {
    canonical: "https://sealmetrics.com/sla/",
    languages: { es: "https://sealmetrics.com/es/sla/" },
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

export default function SlaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "SLA" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "SLA", url: "/sla" }])} />
      <section className="pt-12 pb-28 bg-white">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
            Legal
          </span>
          <h1 className="headline-hero mb-4">Service Level Agreement</h1>
          <p className="text-[0.9rem] text-text-tertiary mb-10">
            Version 1.1 · Last updated: August 24, 2026 ·{" "}
            <a href="/es/sla/" className="underline">
              Versión en español
            </a>{" "}
            (the Spanish version is authoritative; this English version is
            provided for convenience)
          </p>

          <div className="space-y-4 text-[0.95rem] leading-[1.75] text-text-secondary">
            <p>
              This Service Level Agreement applies to the{" "}
              <strong className="text-text-primary">Scale and Enterprise</strong>{" "}
              plans and forms part of the{" "}
              <a href="/terms/" className="underline">
                Terms of Service
              </a>{" "}
              (§12.2). The Agentic and Growth plans are governed by the
              operational availability target in §12.1 of the Terms, with no
              entitlement to credits. With respect to remedies, this SLA is
              construed consistently with Section 14 of the Terms and clause
              8.3 of the{" "}
              <a href="/dpa/" className="underline">
                DPA
              </a>
              : the service credit is the sole remedy.
            </p>

            <H>1. The two planes of the Service</H>
            <p>
              The Service has two planes with distinct risk profiles, and this
              SLA treats them separately — because losing data is not the same
              as waiting for a report:
            </p>
            <Tbl
              rows={[
                ["Plane", "What it is", "Consequence of an outage"],
                [
                  "Measurement plane (pixel ingestion)",
                  "The receipt of events from the Customer's sites, served with replica redundancy",
                  "Loss of data for the outage period — unrecoverable. This is the critical plane",
                ],
                [
                  "Query plane (dashboard, API, exports)",
                  "Access to reports and already-processed data",
                  "Waiting — no data is lost: received events are queued in a persistent messaging system and processed once the service recovers",
                ],
              ]}
            />
            <p>
              This asymmetry is a design property: unavailability of the
              processing or query components delays reports but does not lose
              events already ingested.
            </p>

            <H>2. Availability commitments</H>
            <Tbl
              rows={[
                ["Plane", "Monthly commitment", "Max. equivalent unavailability/month"],
                ["Measurement plane (ingestion)", "99.5%", "~3 h 39 min"],
                ["Query plane (dashboard + API)", "99.0%", "~7 h 18 min"],
              ]}
            />
            <p>
              Monthly availability (%) = (minutes in the month − minutes of
              Unavailability) / minutes in the month × 100, as measured by
              Sealmetrics&rsquo; internal monitoring (continuous health checks
              of the public endpoints, with automated alerting). The Customer
              may request the measurement details for a specific incident.
            </p>
            <p>
              <strong className="text-text-primary">Unavailability</strong>: a
              continuous period of 15 minutes or longer (rounded to the
              minute) during which the relevant plane fails to respond or
              returns errors for customers generally, as confirmed by
              Sealmetrics&rsquo; monitoring. Partial degradation that does not
              prevent the essential function of the plane (e.g. elevated
              latency with correct ingestion) does not constitute
              Unavailability. Interruptions shorter than 15 consecutive
              minutes do not count.
            </p>

            <H>3. Exclusions</H>
            <p>The following do not count as Unavailability:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Scheduled maintenance: notified at least 24 hours in advance,
                in a low-traffic window, up to a cumulative 8 h/month.
              </li>
              <li>
                Emergency maintenance reasonably necessary for the security or
                integrity of the Service (notified as soon as practicable).
              </li>
              <li>
                Failures of the Customer&rsquo;s or third parties&rsquo;
                networks or infrastructure beyond Sealmetrics&rsquo; reasonable
                control (the Customer&rsquo;s DNS, its CDN, its hosting
                provider, regional Internet outages).
              </li>
              <li>
                Customer instrumentation or configuration errors (misinstalled
                tracker, blocking on the Customer&rsquo;s site, exceeded plan
                limits).
              </li>
              <li>Force majeure.</li>
              <li>
                Features marked as beta or experimental, and the AI component
                to the extent it depends on the inference provider&rsquo;s
                capacity (degradation of the AI assistant does not affect
                measurement or reporting).
              </li>
              <li>
                Suspensions pursuant to the Terms of Service (non-payment,
                abuse, legal requirement).
              </li>
            </ul>

            <H>4. Service credits</H>
            <Tbl
              rows={[
                [
                  "Monthly availability of the affected plane",
                  "Credit against the monthly Service fee*",
                ],
                ["< 99.5% (measurement) / < 99.0% (query) and ≥ 98.0%", "5%"],
                ["< 98.0% and ≥ 95.0%", "10%"],
                ["< 95.0%", "20%"],
              ]}
            />
            <p className="text-[0.85rem] text-text-tertiary">
              * For annual plans, one twelfth of the annual fee. If both planes
              fall short in the same month, the higher credit applies (credits
              do not stack).
            </p>
            <p>
              The Customer requests the credit by email to support within 15
              days following the end of the affected month, stating the dates
              and times of the incident. Credits are applied against future
              fees, are not redeemable for cash, and their annual total will
              not exceed the equivalent of one month&rsquo;s fees. The credit
              is the sole and exclusive remedy for availability shortfalls.
            </p>

            <H>5. Technical support — response times</H>
            <p>
              Support hours: business days (Barcelona calendar), 9:00–18:00
              CET/CEST. The Enterprise plan may agree extended coverage
              (including 24×7 for S1) in its individual agreement.
            </p>
            <Tbl
              rows={[
                [
                  "Severity",
                  "Definition",
                  "First response — Scale",
                  "First response — Enterprise",
                ],
                [
                  "S1 — Critical",
                  "Measurement plane down or data loss in progress",
                  "8 business hours",
                  "4 business hours",
                ],
                [
                  "S2 — High",
                  "Query plane down; essential functionality inoperative with no workaround",
                  "8 business hours",
                  "4 business hours",
                ],
                [
                  "S3 — Medium",
                  "Degradation with a reasonable workaround; non-blocking errors",
                  "1 business day",
                  "8 business hours",
                ],
                [
                  "S4 — Low",
                  "Inquiries, enhancement requests, usage questions",
                  "2 business days",
                  "1 business day",
                ],
              ]}
            />
            <p>
              These times refer to the first qualified response, not to
              resolution. Sealmetrics keeps the incident updated until closure.
            </p>

            <H>6. Incident communication</H>
            <p>
              Confirmed S1/S2 incidents are communicated to affected Customers
              by email without undue delay, with periodic updates until
              resolution and a post-incident summary for S1. If a
              measurement-plane incident involves data loss, the communication
              will state this expressly, together with the affected interval.
            </p>

            <H>7. Continuity and data protection (informational)</H>
            <p>
              Internal recovery objectives, stated for information only (they
              do not by themselves give rise to credits): encrypted daily
              backups with 30-day retention — with the session-pseudonymisation
              cryptographic material excluded from backups by design, because
              continuity is never bought at the expense of privacy; an RPO of
              24 h for configuration data (already-ingested measurement events
              are additionally protected by the persistent queue); an RTO of
              24 business hours after a major disaster; and active redundancy
              on the measurement plane.
            </p>

            <H>8. Review</H>
            <p>
              This SLA is reviewed at least annually. Amendments are
              communicated with reasonable notice; amendments that reduce the
              commitments take effect only upon the Customer&rsquo;s next
              renewal.
            </p>

            <p className="pt-6 border-t border-warm-100 text-[0.85rem] text-text-tertiary">
              This SLA forms part of the{" "}
              <a href="/terms/" className="underline">
                Terms of Service
              </a>
              . Questions: support@sealmetrics.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
