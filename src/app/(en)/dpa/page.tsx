import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Data Processing Agreement — Sealmetrics",
  description:
    "Sealmetrics Data Processing Agreement (DPA-2026-v2.0). Article 28 GDPR, AEPD audience-measurement guarantees, EU-only processing, sub-processors and security measures.",
  openGraph: {
    title: "Data Processing Agreement — Sealmetrics",
    description:
      "Article 28 GDPR DPA: AEPD audience-measurement guarantees, EU-only processing, sub-processors and security measures.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/dpa/",
    languages: { es: "https://sealmetrics.com/es/dpa/" },
  },
};

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3 mt-10">
      {children}
    </h2>
  );
}
function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[1.02rem] font-semibold text-text-primary mt-6 mb-2">
      {children}
    </h3>
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

export default function DpaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "DPA" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "DPA", url: "/dpa" }])} />
      <section className="pt-12 pb-28 bg-white">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
            Legal
          </span>
          <h1 className="headline-hero mb-4">Data Processing Agreement</h1>
          <p className="text-[0.9rem] text-text-tertiary mb-10">
            Reference DPA-2026-v2.0 · Last updated: July 30, 2026 ·{" "}
            <a href="/es/dpa/" className="underline">
              Versión en español
            </a>{" "}
            (the Spanish version is authoritative; this English version is
            provided for convenience)
          </p>

          <div className="space-y-4 text-[0.95rem] leading-[1.75] text-text-secondary">
            <p>
              This Data Processing Agreement is entered into between{" "}
              <strong className="text-text-primary">the Client</strong> (the
              &ldquo;Controller&rdquo;), identified per its account
              registration details, and{" "}
              <strong className="text-text-primary">Sealmetrics S.L.</strong>{" "}
              (the &ldquo;Processor&rdquo; or &ldquo;Sealmetrics&rdquo;),
              Spanish tax ID ESB70933239, Carrer de Tirso de Molina 36, 08940
              Cornellà de Llobregat, Barcelona, Spain. It takes effect upon
              acceptance of the Sealmetrics Terms of Service, which incorporate
              it by reference, and prevails over any conflicting provision
              regarding data protection.
            </p>
            <p>
              The service is built on data protection by design and by default
              (Art. 25 GDPR): no cookies or terminal-equipment storage, no
              persisted IP addresses, and no identifiers capable of cross-site
              tracking. The parties formalise this arrangement under Art. 28
              GDPR, the Spanish LOPDGDD and the criteria of the AEPD Guide on
              cookies for audience-measurement tools (January 2024).
            </p>

            <H>1. Definitions</H>
            <p>
              GDPR terms have their Art. 4 meaning. &ldquo;Service&rdquo; is
              the Sealmetrics analytics platform; &ldquo;Service Data&rdquo; is
              the data processed on the Client&rsquo;s behalf (Annex 1);
              &ldquo;Sub-processor&rdquo; is a third party engaged by
              Sealmetrics processing Service Data; &ldquo;Data Subjects&rdquo;
              are visitors of the Client&rsquo;s websites; &ldquo;BYOK&rdquo;
              is the optional use of the Client&rsquo;s own external AI
              provider key; &ldquo;SCCs&rdquo; are the clauses of Decision (EU)
              2021/914.
            </p>

            <H>2. Subject matter and documented instructions</H>
            <p>
              Sealmetrics processes Service Data solely on behalf of and under
              the documented instructions of the Client, namely: this DPA and
              Annex 1, the Terms of Service, and the configuration the Client
              applies in the platform (conversion events, properties,
              integrations, exports). Sealmetrics will not process Service
              Data for any other purpose, and will promptly inform the Client
              if it considers an instruction infringes applicable data
              protection law, suspending its execution until clarified.
            </p>

            <H>3. Audience-measurement guarantees (AEPD criteria)</H>
            <p>
              In compliance with section III.C of the AEPD audience-measurement
              guide, Sealmetrics undertakes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-text-primary">No reuse.</strong>{" "}
                Service Data is never reused for Sealmetrics&rsquo; own or
                third parties&rsquo; purposes: no model training, no algorithm
                improvement with identifiable data, no cross-client
                benchmarking, no disclosure or sale.
              </li>
              <li>
                <strong className="text-text-primary">
                  Purpose restriction.
                </strong>{" "}
                Processing is limited to (a) the strictly necessary audience
                measurements listed by the AEPD, and (b) the marketing
                attribution features (conversions, amounts, click identifiers,
                conversion properties) expressly instructed by the Client
                through its configuration, whose legal basis the Client
                documents as controller.
              </li>
              <li>
                <strong className="text-text-primary">
                  Multi-publisher independence.
                </strong>{" "}
                Service Data is collected, processed and stored independently
                per client, with per-account isolation across all storage
                layers and per-client technical identifiers unfit for
                cross-referencing or unified reach measurement across sites of
                different controllers.
              </li>
              <li>
                <strong className="text-text-primary">EU location</strong>{" "}
                (clause 7) and a{" "}
                <strong className="text-text-primary">
                  documented assessment
                </strong>{" "}
                of the Service&rsquo;s configuration against the guide
                (section III.C.2), updated at least annually and available to
                the Client on request.
              </li>
            </ul>

            <H>4. Processor obligations</H>
            <H3>4.1 Confidentiality</H3>
            <p>
              Persons authorised to process Service Data are bound by
              confidentiality undertakings surviving the end of their
              engagement; access follows least privilege and is logged.
            </p>
            <H3>4.2 Security (Art. 32)</H3>
            <p>
              Sealmetrics maintains the measures of Annex 2 — encryption in
              transit and at rest, structural minimisation (no persisted IPs,
              no terminal storage), automatic retention enforcement,
              per-account isolation, incident management — and may update them
              provided protection is not reduced.
            </p>
            <H3>4.3 Sub-processors</H3>
            <p>
              The Client grants general authorisation for the sub-processors
              in Annex 3. Additions or replacements are notified reasonably in
              advance so the Client can object on reasonable data protection
              grounds; failing agreement, the Client may terminate the
              affected Service without penalty. Sealmetrics imposes equivalent
              obligations on each sub-processor by contract and remains liable
              for their compliance. Providers connected by the Client (BYOK AI
              providers, export destinations) are not Sealmetrics
              sub-processors.
            </p>
            <H3>4.4 Data subjects&rsquo; rights (Arts. 11, 12-22)</H3>
            <p>
              Sealmetrics cannot identify Data Subjects within Service Data
              (no direct identifiers, no persisted IPs, short-lived
              pseudonymous or aggregated data), so Art. 11 GDPR applies:
              Sealmetrics assists the Client by documenting the processing and
              confirming the impossibility of identification, unless the data
              subject provides information enabling it. Requests received
              directly are forwarded to the Client without undue delay and not
              answered without its instruction.
            </p>
            <H3>4.5 Personal data breaches (Arts. 33-34)</H3>
            <p>
              Sealmetrics notifies the Client without undue delay after
              becoming aware of a breach affecting Service Data — mindful of
              the Client&rsquo;s 72-hour window towards the supervisory
              authority — including, as available, the Art. 33(3) particulars,
              possibly in phases; cooperates with the Client&rsquo;s
              notification duties; and documents every breach per Art. 33(5).
            </p>
            <H3>4.6 DPIAs and prior consultation</H3>
            <p>
              Sealmetrics assists with impact assessments and prior
              consultations and keeps technical documentation of the
              processing (architecture, data inventory, retention, the AEPD
              assessment) at the Client&rsquo;s disposal.
            </p>
            <H3>4.7 Information and audits</H3>
            <p>
              Sealmetrics provides the information necessary to demonstrate
              compliance. The Client (or an independent, non-competitor
              auditor under confidentiality) may audit with 30 days&rsquo;
              notice, at most once per 12-month period save after a breach or
              on a supervisory authority&rsquo;s requirement, during business
              hours and without disproportionate interference; each party
              bears its costs, unless a material breach is found.
            </p>
            <H3>4.8 End of processing</H3>
            <p>
              Upon termination the Client has 30 days to export its data (API
              and/or BigQuery). At the Client&rsquo;s choice, Sealmetrics then
              deletes or returns Service Data and deletes copies within a
              reasonable period, save legal retention duties (data blocked).
            </p>

            <H>5. Controller obligations</H>
            <p>
              The Client ensures the lawfulness of the processing and its
              information duties (Arts. 13-14, with suggested wording provided
              by Sealmetrics);{" "}
              <strong className="text-text-primary">
                does not send direct personal data through free-configuration
                fields
              </strong>{" "}
              (conversion properties, URL parameters, campaign names — e.g.
              emails, phone numbers, ID numbers), Sealmetrics being entitled
              to apply detection and redaction filters as an additional
              safeguard; configures the Service per its own obligations;
              documents the legal basis of the attribution layer when enabled;
              and handles data subjects&rsquo; requests.
            </p>

            <H>6. Client-directed services (BYOK, exports, webhooks)</H>
            <p>
              Under BYOK, prompts are sent to the Client&rsquo;s chosen AI
              provider on the Client&rsquo;s behalf and responsibility, under
              that provider&rsquo;s terms; Sealmetrics acts as a mere conduit.
              The default provider (&ldquo;Seal AI&rdquo;) runs entirely in
              the EU. Data exported to the Client&rsquo;s infrastructure (API,
              BigQuery, webhooks, reports) is, from receipt, the
              Client&rsquo;s own processing, including any international
              transfer it entails.
            </p>

            <H>7. Location and international transfers</H>
            <p>
              Visitor data is processed and stored{" "}
              <strong className="text-text-primary">
                exclusively within the European Union
              </strong>
              , including default AI inference (Scaleway, Paris, zero data
              retention), with no dependence on the EU-US Data Privacy
              Framework or SCCs. Sole exception in Annex 3: service emails to
              the Client&rsquo;s account users via Resend, Inc. (USA), covered
              by SCCs/DPF — with no effect on visitor data. Any future
              non-EEA sub-processor would require prior notice, a valid
              Chapter V instrument and a documented transfer impact
              assessment. Transfers arising from Client-directed services are
              the Client&rsquo;s responsibility.
            </p>

            <H>8. Liability</H>
            <p>
              Each party is liable per Art. 82 GDPR: Sealmetrics only where it
              breaches processor-specific GDPR obligations or acts outside the
              Client&rsquo;s lawful instructions; the Client in all other
              cases. Neither party assumes indemnities beyond mandatory law;
              indirect and consequential damages are excluded to the maximum
              extent permitted. The Client&rsquo;s sole remedy consists of
              credits against or waiver of future Service fees, up to the fees
              of the preceding 12 months; amounts already paid are not
              refunded and Sealmetrics makes no monetary payment. These limits
              do not apply where the law forbids them (wilful misconduct or
              gross negligence, data subjects&rsquo; Art. 82 claims,
              supervisory fines for a party&rsquo;s own non-compliance).
            </p>

            <H>9. Term, law and jurisdiction</H>
            <p>
              This DPA applies from acceptance of the Terms and while
              Sealmetrics processes Service Data; clauses 4.1 and 4.8 survive.
              Amendments are notified reasonably in advance. Spanish law
              governs; the parties submit to the courts of Barcelona; the
              Processor&rsquo;s reference supervisory authority is the AEPD.
              Notices: privacy@sealmetrics.com.
            </p>

            <H>Annex 1 — Description of processing</H>
            <p>
              <strong className="text-text-primary">Subject matter:</strong>{" "}
              consentless web analytics.{" "}
              <strong className="text-text-primary">Purpose A:</strong>{" "}
              aggregated audience measurement (the AEPD strictly necessary
              measurements).{" "}
              <strong className="text-text-primary">
                Purpose B (optional):
              </strong>{" "}
              marketing attribution per the Client&rsquo;s configuration.{" "}
              <strong className="text-text-primary">Data subjects:</strong>{" "}
              visitors of the Client&rsquo;s websites.
            </p>
            <p>
              Data processed: browsing data (URLs, referrer, landing page,
              events, engagement); technical data (device, browser, OS derived
              from the user agent; browser time zone);{" "}
              <strong className="text-text-primary">
                country derived from the browser time zone, not the IP
              </strong>{" "}
              (on accounts with agent detection, an additional IP-derived
              country is used transiently as an anti-fraud signal, without
              persisting the IP); an ephemeral session identifier computed in
              the browser with no device storage, independent per client; UTM
              data and, under Purpose B, click identifiers, conversion types,
              amounts and Client-defined properties. Not processed: persisted
              IPs, cookies or device storage, names or emails of visitors,
              special categories, cross-site identifiers.
            </p>
            <Tbl
              rows={[
                ["Data", "Retention (automatic TTL)"],
                ["Event-level technical log (user agent, full URLs)", "14 days"],
                ["Hourly aggregates", "90 days"],
                ["Daily aggregates, conversions and properties", "24 months"],
                ["Session state (operational memory)", "2 hours"],
                ["After contract termination", "30-day export window + deletion"],
              ]}
            />

            <H>Annex 2 — Security measures</H>
            <p>
              TLS 1.2+ in transit (including AI inference); AES-256 at rest;
              structural minimisation (no IP persistence, no terminal storage,
              URL parameters not parsed on the device); per-client logical
              isolation; database-level TTL retention; RBAC, MFA and least
              privilege with logged access; platform keys only in secret
              managers and content logging prohibited across the AI chain;
              dependency install-script hardening; encrypted backups (30
              days); security monitoring. Organisational: privacy training,
              confidentiality undertakings, documented breach and rights
              procedures, Art. 28 contracts with all sub-processors, periodic
              internal compliance audits.
            </p>

            <H>Annex 3 — Authorised sub-processors</H>
            <Tbl
              rows={[
                ["Sub-processor", "Location", "Service"],
                [
                  "Noraina Limited",
                  "Ireland (EU)",
                  "Infrastructure and database hosting — all Service Data",
                ],
                [
                  "Scaleway SAS (Iliad group)",
                  "Paris, France (EU)",
                  "Managed LLM inference for the default AI provider “Seal AI” (open model, zero data retention; token counters only)",
                ],
                [
                  "Resend (Plus Five Five, Inc.)",
                  "USA — SCCs + EU-US DPF certified",
                  "Service emails to the Client’s account users (verifications, alerts, reports); no visitor data",
                ],
              ]}
            />
            <p>
              AI providers connected by the Client under BYOK are not
              Sealmetrics sub-processors. Billing-side and anti-abuse
              providers (payment gateway, registration anti-bot) process data
              for which Sealmetrics is controller and are documented in the{" "}
              <a href="/privacy/" className="underline">
                Privacy Policy
              </a>
              . Change notifications: subscribe via privacy@sealmetrics.com.
            </p>

            <H>Annex 4 — Transfer framework (conditional)</H>
            <p>
              In the standard flow there are no transfers of visitor data
              outside the EEA. Should a non-EEA sub-processor ever be engaged:
              SCCs under Decision 2021/914 (applicable module), general
              authorisation with list, Spanish governing law, AEPD as
              reference authority, SCC Annexes I/II completed by reference to
              Annexes 1 and 2, and a prior documented transfer impact
              assessment.
            </p>

            <p className="pt-6 border-t border-warm-100 text-[0.85rem] text-text-tertiary">
              This Agreement is deemed accepted upon acceptance of the{" "}
              <a href="/terms/" className="underline">
                Terms of Service
              </a>
              . For individually executed copies, contact
              privacy@sealmetrics.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
