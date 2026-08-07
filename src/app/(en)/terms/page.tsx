import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms of Service — Sealmetrics",
  description: "Sealmetrics Terms of Service (v2.0): plans, billing, acceptable use, data ownership, liability and termination.",
  openGraph: {
    title: "Terms of Service — Sealmetrics",
    description:
      "Conditions for using the Sealmetrics web analytics platform: plans, billing, acceptable use, data ownership, liability and termination.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    url: "https://sealmetrics.com/terms/",
    siteName: "SealMetrics",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Terms of Service — Sealmetrics",
    description: "Conditions for using the Sealmetrics web analytics platform: plans, billing, acceptable use, data ownership, liability and termination.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/terms/",
    languages: { es: "https://sealmetrics.com/es/terms/" },
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

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />
      <JsonLd
        data={breadcrumbSchema([{ name: "Terms of Service", url: "/terms" }])}
      />
      <section className="pt-12 pb-28 bg-white">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
            Legal
          </span>
          <h1 className="headline-hero mb-4">Terms of Service</h1>
          <p className="text-[0.9rem] text-text-tertiary mb-10">
            Version 2.0 · Last updated and effective: July 30, 2026 ·{" "}
            <a href="/es/terms/" className="underline">
              Versión en español
            </a>{" "}
            (the Spanish version is authoritative; this English version is
            provided for convenience)
          </p>

          <div className="space-y-4 text-[0.95rem] leading-[1.75] text-text-secondary">
            <H>1. Introduction and acceptance</H>
            <p>
              These Terms of Service (the &ldquo;Terms&rdquo;) constitute a
              legally binding agreement between{" "}
              <strong className="text-text-primary">you</strong> (the
              &ldquo;Client&rdquo;, &ldquo;User&rdquo; or &ldquo;You&rdquo;)
              and{" "}
              <strong className="text-text-primary">Sealmetrics S.L.</strong>,
              with registered office at Carrer de Tirso de Molina 36, 08940
              Cornellà de Llobregat, Barcelona, Spain, Spanish tax ID
              ESB70933239 (&ldquo;Sealmetrics&rdquo;, &ldquo;We&rdquo; or
              &ldquo;the Company&rdquo;). By accessing, registering for or
              using the Sealmetrics services, you agree to be bound by these
              Terms, our{" "}
              <a href="/privacy/" className="underline">
                Privacy Policy
              </a>{" "}
              and the{" "}
              <a href="/dpa/" className="underline">
                Data Processing Agreement
              </a>
              .{" "}
              <strong className="text-text-primary">
                If you do not agree to these Terms, do not use the Service.
              </strong>
            </p>
            <p>
              By accepting these Terms you represent that you have the legal
              capacity to enter into binding contracts, that you are at least
              18 years of age, that if you act on behalf of a company you have
              the authority to bind that company, and that you will comply
              with all applicable laws in your use of the Service.
            </p>
            <p>
              The entire agreement between the parties consists of: (1) these
              Terms of Service; (2) the Privacy Policy; (3) the Data
              Processing Agreement (DPA); (4) the specific terms of the
              contracted Plan; and (5) any additional agreement signed between
              the parties. In the event of conflict, the order indicated above
              shall prevail, with one exception: in matters of data
              protection, the DPA always prevails. A subsequently signed
              agreement may expressly modify the preceding documents.
            </p>

            <H>2. Definitions</H>
            <Tbl
              rows={[
                ["Term", "Definition"],
                [
                  "Service",
                  "The Sealmetrics web analytics platform, including the software, APIs, dashboard, documentation and associated functionalities",
                ],
                [
                  "Client",
                  "The natural or legal person who contracts the Service",
                ],
                [
                  "User",
                  "Any person authorized by the Client to access the Service",
                ],
                [
                  "Account",
                  "The Client's registration on the platform enabling access to the Service",
                ],
                [
                  "Client Website",
                  "The Client's website(s) on which the tracking code is installed",
                ],
                [
                  "Analytics Data",
                  "The browsing data collected by the Service on the Client Website",
                ],
                ["Visitor", "A person browsing the Client Website"],
                [
                  "Tracking Code",
                  "The JavaScript code snippet installed on the Client Website",
                ],
                [
                  "Dashboard",
                  "The web interface where the Client views their analytics data",
                ],
                [
                  "API",
                  "The programming interface allowing programmatic access to the data",
                ],
                [
                  "Plan",
                  "The contracted service tier (Agentic, Growth, Scale, Enterprise)",
                ],
                [
                  "Billing Period",
                  "The billing cycle (monthly or annual)",
                ],
                ["LENS", "The artificial intelligence-based insights engine"],
                [
                  "Client Content",
                  "Any data, information or material provided by the Client",
                ],
              ]}
            />

            <H>3. Description of the Service</H>
            <p>
              Sealmetrics provides a web analytics platform that includes:
              visitor tracking (collection of browsing data via JavaScript
              code); an analytics dashboard (visualization of metrics, charts
              and reports); conversion tracking (recording of configurable
              events and conversions); traffic source analysis; LENS (AI
              insights: automatic generation of insights and recommendations);
              a conversational chat assistant for querying data in natural
              language; API access; and data export in various formats. The
              available functionalities vary depending on the contracted Plan;
              up-to-date details are available at sealmetrics.com/pricing.
            </p>
            <p>
              Sealmetrics reserves the right to add new functionalities at no
              additional cost, modify existing functionalities with prior
              notice, discontinue functionalities with at least 30 days&rsquo;
              notice, and perform scheduled maintenance with prior notice. We
              will notify significant changes by email and/or in the
              Dashboard.
            </p>

            <H>4. Registration and accounts</H>
            <p>
              To use the Service you must create an Account providing a valid
              email address, first and last name or company name, a secure
              password and, for paid plans, billing information. You agree to
              provide truthful, current and complete information, keep your
              account information up to date, and not impersonate any other
              person or entity.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your
              credentials, for all activities carried out under your Account,
              and for immediately notifying any unauthorized use. Sealmetrics
              shall not be liable for losses arising from unauthorized use of
              your Account if you have not adequately protected your
              credentials.
            </p>
            <p>
              Depending on your Plan, you may invite other Users to your
              Account: the Client is responsible for the actions of all their
              Users, must assign appropriate roles and permissions, and must
              revoke access when a User should no longer have it. Each Client
              must have a single Account; creating multiple accounts to
              circumvent Plan limits, or for any other reason, is not
              permitted.
            </p>

            <H>5. Plans and pricing</H>
            <p>
              Available plans:{" "}
              <strong className="text-text-primary">Agentic</strong> (free,
              self-serve, total human-events cap),{" "}
              <strong className="text-text-primary">Growth</strong> (monthly
              human-events cap; MCP, BigQuery, full API, LENS with your own
              key),{" "}
              <strong className="text-text-primary">Scale</strong> (higher cap;
              managed private AI with tokens included, webhooks, priority
              support) and{" "}
              <strong className="text-text-primary">Enterprise</strong>
              {" "}(custom annual plan: unlimited events, exclusive private AI,
              isolated processing). A Private AI add-on is available for plans
              that do not include it. Up-to-date details of
              each Plan are available at sealmetrics.com/pricing.
            </p>
            <p>
              Each Plan has limits on the number of websites, monthly events
              (pageviews, conversions, etc.), Users with access, historical
              data retention and access to functionalities (LENS, API, etc.).
              If you exceed your Plan&rsquo;s limits, we will notify you of
              the overage and you may upgrade to a higher Plan; continued
              overage may result in restrictions of the Service.
            </p>
            <p>
              Plan changes: an upgrade is effective immediately with prorated
              cost; a downgrade is effective at the start of the next billing
              period; for cancellation see Section 16. Prices are published on
              our website and may vary by Plan; they do not include applicable
              taxes (VAT, etc.). We reserve the right to modify prices with 30
              days&rsquo; notice; price changes do not affect the period
              already paid for.
            </p>

            <H>6. Billing and payments</H>
            <p>
              Billing is monthly (on the same day of each month) or annual
              (once per year, with applicable discount). We accept
              credit/debit card (Visa, Mastercard, American Express), SEPA
              direct debit (annual plans, Enterprise) and bank transfer
              (Enterprise, subject to prior approval). Payments are
              automatically charged to the registered payment method; you will
              receive an invoice by email after each charge, and invoices are
              available in the Dashboard.
            </p>
            <H3>6.4 Non-payment</H3>
            <Tbl
              rows={[
                ["Day", "Action"],
                ["0", "Failed payment attempt, email notification"],
                ["3", "Second payment attempt, reminder"],
                ["7", "Third payment attempt, suspension warning"],
                ["14", "Suspension of the Service (read-only access)"],
                ["30", "Termination of the Account and deletion of data"],
              ]}
            />
            <H3>6.5 Billing disputes</H3>
            <p>
              If you believe a charge is incorrect, contact
              billing@sealmetrics.com within 30 days with details of the
              disputed charge. We will investigate and respond within 10
              business days; if warranted, we will issue credit against future
              fees.
            </p>
            <H3>6.6 Refunds and taxes</H3>
            <p>
              No refunds are offered: amounts paid are non-refundable.
              Billing errors: incorrect charges are compensated by way of
              credit against subsequent Service fees. Prices do not include
              VAT or other taxes; VAT will be applied according to the
              Client&rsquo;s location, and Clients with a valid
              intra-Community VAT number may request exemption.
            </p>

            <H>7. Use of the Service</H>
            <p>
              Sealmetrics grants you a limited, non-exclusive,
              non-transferable and revocable license to access and use the
              Service in accordance with these Terms, install the Tracking
              Code on your Websites, view and export your Analytics Data, and
              use the API in accordance with the documentation.
            </p>
            <p>
              You may NOT: sublicense, sell or transfer access to the
              Service; modify, decompile or reverse engineer the software; use
              the Service for unlawful purposes; interfere with the operation
              of the Service; access other Clients&rsquo; data; circumvent
              security measures or Plan limits; or use the Service to compete
              directly with Sealmetrics.
            </p>
            <p>
              You are responsible for correctly installing the Tracking Code,
              must have the legal right to install code on the Website, must
              inform Visitors in accordance with applicable laws (cookies,
              privacy), and must install the Code in accordance with our
              documentation. Use of the API is subject to rate limits
              depending on your Plan; you must protect your API credentials
              and may not use the API to create a competing service. We
              reserve the right to modify the API with prior notice.
            </p>

            <H>8. Acceptable use</H>
            <p>
              You agree to: comply with all applicable laws, including the
              GDPR and ePrivacy; obtain the necessary consents from Visitors;
              maintain a privacy policy that informs about the use of
              analytics; not collect special-category data (health, ethnic
              origin, etc.) without a legal basis; not use the Service to
              track minors in an identifiable manner; and maintain the
              security of your Account and credentials.
            </p>
            <p>
              It is prohibited to use the Service for: unlawful or fraudulent
              activities; infringing third-party rights (privacy, intellectual
              property); distributing malware, spam or malicious content;
              attacking the infrastructure (DDoS, etc.); collecting data
              without consent where required; sending sensitive personal data
              through the Service; or any activity that may harm Sealmetrics
              or third parties.
            </p>
            <p>
              You may not use the Service on websites that promote unlawful
              activities, contain child abuse material, distribute malware,
              promote hatred, violence or discrimination, or systematically
              infringe intellectual property rights. In the event of a breach
              of acceptable use, we may suspend access temporarily or
              permanently, delete the Account without refund, take legal
              action where appropriate, and report to the authorities where
              required by law.
            </p>
            <p>
              Mirroring clause 5.2 of the{" "}
              <a href="/dpa/" className="underline">
                DPA
              </a>
              , you agree not to send personal data to the Service through
              conversion properties, URL parameters, campaign names or any
              other freely configurable tracker field (e.g. emails, phone
              numbers, identity documents). Sealmetrics may delete any such
              detected information and, in the event of persistent
              non-compliance, suspend data ingestion for the affected site.
            </p>
            <p>
              By connecting your own AI-provider keys or export destinations
              (BYOK), you assume the corresponding safeguards under clause 6
              of the DPA and the BYOK boundary document.
            </p>

            <H>9. Intellectual property</H>
            <p>
              Sealmetrics owns all rights in the software, code and
              technology of the Service; the trademarks, logos and trade
              names; the documentation and marketing materials; the algorithms
              and technical innovations; and the design and interface of the
              Dashboard. These Terms do not grant you ownership of the
              Service, only a limited license of use as described.
            </p>
            <p>
              The Client retains all rights in the Content of their Website,
              their business data and their custom configurations. The
              Analytics Data collected is the property of the Client;
              Sealmetrics acts as Processor and does not use your data for
              its own purposes: no model training, no cross-client
              benchmarking, no disclosure (clause 3.1 of the DPA).
            </p>
            <p>
              If you provide us with suggestions, ideas or feedback about the
              Service, you grant us a free and irrevocable license to use
              them; we may implement them without any obligation of
              compensation, and you are not obliged to provide feedback. You
              may not use Sealmetrics trademarks without authorization; you
              may state that you use Sealmetrics as a client, but may not
              imply sponsorship or affiliation without an agreement.
            </p>

            <H>10. Data and privacy</H>
            <p>
              The processing of personal data is governed by our{" "}
              <a href="/privacy/" className="underline">
                Privacy Policy
              </a>
              , which forms part of these Terms. Sealmetrics acts as
              Processor of the Analytics Data and the Client acts as
              Controller; the{" "}
              <a href="/dpa/" className="underline">
                DPA
              </a>{" "}
              sets out the obligations of each party and forms an integral
              part of these Terms.
            </p>
            <p>
              As Controller, the Client must: have a legal basis for
              collecting Visitor data; inform Visitors about the use of
              analytics; obtain consent where required (cookies); respond to
              Visitors&rsquo; data subject rights requests; and notify us of
              any instructions regarding the data.
            </p>
            <H3>10.4 Use of artificial intelligence (LENS)</H3>
            <p>
              The default AI provider is &ldquo;Seal AI&rdquo;, operated
              entirely within the European Union (inference at Scaleway,
              Paris, with no content retention and no training on Client
              data). It only processes aggregated statistical data, never
              identifiable visitor data. If the Client connects their own key
              from an external provider (BYOK), that provider acts by direct
              designation of the Client (clause 6.1 of the DPA). Further
              information in the Privacy Policy and the DPA.
            </p>
            <H3>10.5 Sub-processors and international transfers</H3>
            <p>
              We use sub-processors to provide the Service; the up-to-date
              list is published at{" "}
              <a href="/dpa/" className="underline">
                sealmetrics.com/dpa
              </a>
              , and we give notice of changes with reasonable advance notice
              enabling the exercise of the right to object (clause 4.3 of the
              DPA). Visitor data is processed exclusively within the European
              Union; the only transfers (account users&rsquo; emails) are
              protected by SCCs/DPF. More details in clause 7 of the DPA.
            </p>
            <H3>10.7 Security and breaches</H3>
            <p>
              We implement technical and organizational security measures,
              including encryption in transit (TLS 1.2+) and at rest
              (AES-256), role-based access control, security monitoring and
              logging, and regular backups (see also our{" "}
              <a href="/security/" className="underline">
                security architecture
              </a>
              ). In the event of a security breach, we will notify you
              without undue delay , provide information to
              enable you to comply with your GDPR obligations, and cooperate
              in the management of the incident.
            </p>

            <H>11. Confidentiality</H>
            <p>
              Each party undertakes to keep confidential: technical,
              commercial or financial information of the other party; specific
              terms of Enterprise agreements; any information marked as
              confidential; and the Client&rsquo;s Analytics Data. Information
              shall not be considered confidential where it is in the public
              domain (without breach), was already known to the receiving
              party, is lawfully received from a third party, is independently
              developed, or must be disclosed under a legal obligation. The
              confidentiality obligations remain in force for the duration of
              the contractual relationship and for{" "}
              <strong className="text-text-primary">3 years</strong> after its
              termination.
            </p>

            <H>12. Availability and support</H>
            <p>
              Availability target:{" "}
              <strong className="text-text-primary">99.9%</strong> (excluding
              scheduled maintenance). Scheduled maintenance is notified with reasonable notice; emergency maintenance may be
              performed without prior notice. For Business and Enterprise
              plans, specific SLAs may apply (availability commitments,
              credits for non-compliance, support response times),
              established in separate agreements.
            </p>
            <Tbl
              rows={[
                ["Plan", "Channel"],
                ["Agentic", "Documentation (self-serve)"],
                ["Growth", "Email"],
                ["Scale", "Email, priority support"],
                ["Enterprise", "Email, dedicated account manager"],
              ]}
            />
            <p>
              Support does not include custom development, integration with
              Client systems, on-site training (unless agreed), issues caused
              by incorrect use, or issues on the Client Website.
            </p>

            <H>13. Warranties and disclaimers</H>
            <H3>13.1 Sealmetrics warranties</H3>
            <p>
              Sealmetrics warrants that: the Service will operate
              substantially in accordance with the documentation; we implement
              reasonable security measures; we comply with applicable laws in
              the provision of the Service; and we have the right to grant the
              license of the Service.
            </p>
            <H3>13.2 Disclaimer of warranties</H3>
            <p>
              EXCEPT AS EXPRESSLY STATED, THE SERVICE IS PROVIDED &ldquo;AS
              IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;. Sealmetrics does NOT
              warrant that: the Service will be uninterrupted or error-free;
              the results obtained will be accurate or complete; the Service
              will meet all of your specific requirements; or that all errors
              will be corrected.
            </p>
            <H3>13.3 Exclusion of implied warranties</H3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE EXCLUDE ALL IMPLIED
              WARRANTIES, INCLUDING: merchantability, fitness for a
              particular purpose, non-infringement, and accuracy of the data.
            </p>
            <H3>13.4 Use of AI</H3>
            <p>
              Insights generated by LENS (AI) are indicative only: they do
              not replace professional judgment, may contain inaccuracies,
              and should be verified before making important decisions.
              Sealmetrics does not warrant the accuracy of AI insights.
            </p>

            <H>14. Limitation of liability</H>
            <H3>14.1 Exclusion of indirect damages</H3>
            <p>
              IN NO EVENT SHALL SEALMETRICS BE LIABLE FOR: LOSS OF PROFITS OR
              REVENUE; LOSS OF DATA (BEYOND RESTORATION FROM BACKUP); LOSS OF
              BUSINESS OR GOODWILL; INDIRECT, INCIDENTAL, SPECIAL OR
              CONSEQUENTIAL DAMAGES; OR COSTS OF PROCURING SUBSTITUTE
              SERVICES — EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <H3>14.2 Liability cap</H3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE CLIENT&rsquo;S SOLE
              REMEDY AGAINST SEALMETRICS SHALL CONSIST OF CREDITS AGAINST, OR
              WAIVER OF, FUTURE SERVICE FEES, UP TO AN AGGREGATE MAXIMUM
              EQUAL TO THE FEES FOR THE 12 MONTHS PRECEDING THE EVENT GIVING
              RISE TO LIABILITY. IN NO EVENT SHALL THERE BE ANY REFUND OF
              AMOUNTS ALREADY PAID OR ANY MONETARY PAYMENT WHATSOEVER. This
              regime coincides with clause 8 of the DPA.
            </p>
            <H3>14.3 Exceptions</H3>
            <p>
              The above limitations do NOT apply to: willful misconduct or
              gross negligence (Art. 1102 of the Spanish Civil Code); death
              or personal injury caused by negligence; or any liability that
              cannot be excluded or limited by law.
            </p>
            <H3>14.4 Basis of the bargain</H3>
            <p>
              The limitations of liability are an essential element of the
              agreement and reflect the allocation of risk between the
              parties. The prices of the Service have been set taking these
              limitations into account.
            </p>

            <H>15. Indemnification</H>
            <H3>15.1 Indemnification by the Client</H3>
            <p>
              The Client agrees to indemnify and hold Sealmetrics harmless
              from any claim, damage, loss, liability and expense (including
              legal fees) arising from: breach of these Terms by the Client;
              use of the Service by the Client or their Users; violation of
              third-party rights; breach of data protection laws by the
              Client; or the content of the Client Website.
            </p>
            <H3>15.2 No indemnification by Sealmetrics</H3>
            <p>
              Sealmetrics assumes no indemnification obligations towards the
              Client other than those mandatorily imposed by law (clause
              14.3). If the Service becomes the subject of a third-party
              intellectual property claim, Sealmetrics may, at its option:
              obtain a license to continue providing it, modify it so that it
              is non-infringing, replace it with a functionally equivalent
              service, or terminate it with waiver of future fees not
              enjoyed. These are the Client&rsquo;s sole remedies in such a
              case.
            </p>

            <H>16. Term and termination</H>
            <p>
              The Agentic Plan runs indefinitely until terminated by either
              party; paid plans run for the contracted period
              (monthly/annual) and renew automatically for equal periods
              unless the Client cancels before the end of the period or
              Sealmetrics gives notice of non-renewal 30 days in advance.
            </p>
            <p>
              Cancellation by the Client: on a monthly plan you may cancel at
              any time, effective at the end of the current month; on an
              annual plan you may cancel at any time, effective at the end of
              the current year, with no refund of remaining months (except
              within the first 30 days). To cancel: Settings &gt;
              Subscription &gt; Cancel, or email billing@sealmetrics.com.
            </p>
            <Tbl
              rows={[
                ["Reason", "Notice", "Effect"],
                ["Uncured material breach", "15 days to cure", "Termination"],
                ["Prohibited use", "Immediate", "Suspension/Termination"],
                ["Non-payment (30+ days)", "Per Section 6.4", "Termination"],
                ["Unlawful activity", "Immediate", "Termination"],
                ["Discontinuation of the Service", "90 days", "Termination"],
              ]}
            />
            <p>
              Upon termination: access is revoked immediately (or at the end
              of the paid period); data remains available for export for 30
              days and is deleted after 30-60 days (see Retention Policy);
              services are billed up to the termination date; and outstanding
              obligations survive termination (payments due, confidentiality,
              indemnification). Before deletion, you may export data from the
              Dashboard, request a full export at support@sealmetrics.com, or
              use the API to extract data. The following sections survive
              termination: Definitions, Intellectual Property,
              Confidentiality, Limitation of Liability, Indemnification,
              Governing Law.
            </p>

            <H>17. Modifications</H>
            <p>
              We may modify these Terms from time to time. When we do, we
              will publish the updated Terms on our website, update the
              &ldquo;Last updated&rdquo; date and, for material changes,
              notify you by email at least{" "}
              <strong className="text-text-primary">30 days in advance</strong>
              . Continued use of the Service after notification constitutes
              acceptance; if you do not agree, you may cancel before the
              changes take effect. Changes do not retroactively affect
              periods already paid for. We may make immediate changes without
              prior notice where necessary to comply with the law or respond
              to security emergencies.
            </p>

            <H>18. General provisions</H>
            <p>
              <strong className="text-text-primary">Entire agreement:</strong>{" "}
              these Terms, together with the Privacy Policy and the DPA,
              constitute the entire agreement between the parties and
              supersede any prior agreement or communication.{" "}
              <strong className="text-text-primary">Severability:</strong> if
              any clause is found to be invalid or unenforceable, it shall be
              limited or removed to the minimum extent necessary and the
              remaining clauses shall remain in full force.{" "}
              <strong className="text-text-primary">Waiver:</strong> failure
              to enforce any provision shall not constitute a waiver of the
              right to enforce it subsequently.
            </p>
            <p>
              <strong className="text-text-primary">Assignment:</strong> the
              Client may not assign these Terms without prior written
              consent; Sealmetrics may assign freely in the event of a
              merger, acquisition or sale of assets, and will notify any
              assignment.{" "}
              <strong className="text-text-primary">
                Relationship of the parties:
              </strong>{" "}
              nothing in these Terms creates a relationship of employment,
              agency, joint venture or partnership; each party acts as an
              independent contractor.{" "}
              <strong className="text-text-primary">Force majeure:</strong>{" "}
              neither party shall be liable for failures to perform due to
              causes beyond its reasonable control (natural disasters, wars,
              pandemics, third-party failures, etc.), provided it gives
              prompt notice and takes reasonable steps to mitigate.
            </p>
            <Tbl
              rows={[
                ["Notice type", "Valid method"],
                [
                  "Legal notices to Sealmetrics",
                  "Email to legal@sealmetrics.com or certified mail",
                ],
                ["Notices to the Client", "Email registered on the account"],
                ["Service notices", "Email or message in the Dashboard"],
              ]}
            />
            <p>
              <strong className="text-text-primary">Language:</strong> in the
              event of any discrepancy between versions in different
              languages, the Spanish version shall prevail.
            </p>

            <H>19. Governing law and jurisdiction</H>
            <p>
              These Terms shall be governed by and construed in accordance
              with the laws of{" "}
              <strong className="text-text-primary">Spain</strong>, without
              prejudice to conflict-of-laws rules. For any dispute arising
              from these Terms, the parties submit to the exclusive
              jurisdiction of the courts of{" "}
              <strong className="text-text-primary">Barcelona, Spain</strong>.
              If you are a consumer residing in the EU, nothing in this
              section limits your statutory rights as a consumer or the
              jurisdiction of the courts of your place of residence.
            </p>
            <p>
              For minor disputes, both parties agree to attempt an amicable
              resolution before going to court; you may contact us at
              legal@sealmetrics.com. If you are a consumer in the EU, you may
              use the online dispute resolution platform:
              https://ec.europa.eu/consumers/odr
            </p>

            <H>20. Contact</H>
            <Tbl
              rows={[
                ["Subject", "Contact"],
                ["General", "info@sealmetrics.com"],
                ["Technical support", "support@sealmetrics.com"],
                ["Billing", "billing@sealmetrics.com"],
                ["Privacy", "privacy@sealmetrics.com"],
                ["Legal", "legal@sealmetrics.com"],
              ]}
            />
            <p>
              <strong className="text-text-primary">Sealmetrics S.L.</strong>{" "}
              — Carrer de Tirso de Molina 36, 08940 Cornellà de Llobregat,
              Barcelona, Spain.
            </p>

            <p className="pt-6 border-t border-warm-100 text-[0.85rem] text-text-tertiary">
              By using Sealmetrics, you accept these Terms of Service. ©
              2026 Sealmetrics S.L. All rights reserved.
            </p>

            <div className="mt-12 pt-8 border-t border-warm-100 flex flex-wrap gap-6 text-[0.85rem]">
              <Link
                href="/privacy"
                className="text-text-secondary no-underline hover:text-text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/dpa"
                className="text-text-secondary no-underline hover:text-text-primary transition-colors"
              >
                Data Processing Agreement
              </Link>
              <Link
                href="/security"
                className="text-text-secondary no-underline hover:text-text-primary transition-colors"
              >
                Security Architecture
              </Link>
              <Link
                href="/es/terms"
                className="text-text-secondary no-underline hover:text-text-primary transition-colors"
              >
                Versión en español
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
