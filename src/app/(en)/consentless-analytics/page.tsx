import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import {
  articleSchema,
  breadcrumbSchema,
  speakableWebPageSchema,
} from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

const PILLAR_DATE_PUBLISHED = "2026-05-28";
const PILLAR_DATE_MODIFIED = "2026-05-28";

export const metadata: Metadata = {
  title: "Consentless analytics — lawful measurement without banners",
  description:
    "Consentless analytics: the legal route to web measurement without cookie banners. GDPR, ePrivacy, CNIL exemption — what makes it lawful, by architecture.",
  openGraph: {
    title: "Consentless analytics — lawful by architecture",
    description:
      "How analytics can be lawful under GDPR and ePrivacy without a consent banner — the architectural path, the authority guidance, the limits.",
    type: "article",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/consentless-analytics",
    languages: getAlternates("/consentless-analytics"),
  },
};

const faqs = [
  {
    q: "Is consentless analytics actually legal under GDPR?",
    a: "Yes, when the architecture meets the exemption criteria. GDPR applies to processing of personal data. ePrivacy Art. 5(3) governs storage/access to terminal-device information. If a measurement system stores no cookie, sets no identifier and processes no personal data, both rules are satisfied without a consent dialog. The CNIL has published explicit exemption criteria for analytics; the German DSK, Italian Garante, UK ICO and Dutch AP have all issued aligned guidance. This is not a workaround — it is the original carve-out the regulations contemplated.",
  },
  {
    q: "What changed with the EU Digital Omnibus 2026?",
    a: "The Omnibus tightened banner-design rules (dark-pattern enforcement), formalised reject-all parity, and gave national authorities sharper teeth on Art. 5(3) violations. The net effect: consent rejection rates rose another 5–10 points in the markets where it has landed, and the cost of running cookie-based analytics legally went up. Consentless architecture is unaffected — there is no banner to design and no consent to record.",
  },
  {
    q: "Do I still need a cookie banner for other reasons?",
    a: "Possibly — for Google Ads pixels, Meta pixels, A/B testing tools or any third-party script that does set cookies. SealMetrics removes the analytics-specific reason for the banner, not every reason. Many teams reduce the banner's scope (or eliminate it on pages without ad pixels) once analytics moves to a consentless layer.",
  },
  {
    q: "How does this differ from \"consent-light\" or \"privacy-friendly\" tools?",
    a: "Most lightweight analytics tools still set a first-party cookie or a randomised visitor ID — they are consent-light, not consentless. The CNIL exemption is specific: no identifier, no cross-session linkage, no profiling. SealMetrics is built to that bar. The trade-off is honest — no returning-visitor identification — and it is the deliberate design choice that produces the legal exemption.",
  },
  {
    q: "What about Schrems II and US transfers?",
    a: "Processing is exclusively in Dublin, Ireland, on EU-owned infrastructure. There are no US sub-processors in the data path. A Schrems II transfer impact assessment is not required because no transfer occurs. The DPA, SCCs (where needed for ancillary services), and TPSR package are available for legal review.",
  },
  {
    q: "Can the legal basis change if I add CRM or marketing tools later?",
    a: "The legal basis for the analytics layer does not change. What changes is the overall surface: if you add a tool that stores cookies or processes personal data, that tool brings its own consent requirement. SealMetrics' status is determined by its own architecture, not by the other tools running alongside it.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const authorities = [
  {
    country: "France",
    body: "CNIL",
    summary:
      "Issued explicit analytics exemption criteria in 2020, reaffirmed 2024: no per-user identifier, no cross-session tracking, aggregate reporting, EU-only processing. SealMetrics meets every criterion.",
  },
  {
    country: "Germany",
    body: "DSK / BfDI",
    summary:
      "Datenschutzkonferenz guidance: analytics tools without cookies and without device fingerprinting do not require consent under §25 TTDSG. Aligned with CNIL position.",
  },
  {
    country: "Spain",
    body: "AEPD",
    summary:
      "Guía sobre el uso de cookies (2024): explicitly carves out anonymous aggregate measurement from the consent obligation. Aligns with EDPB Opinion 5/2019.",
  },
  {
    country: "Italy",
    body: "Garante",
    summary:
      "Post-Google-Analytics 2022 ruling: tools that anonymise at collection and host in the EU do not trigger the same restrictions. SealMetrics' Dublin processing and zero-identifier design fit the exemption shape.",
  },
  {
    country: "United Kingdom",
    body: "ICO (PECR)",
    summary:
      "PECR Regulation 6(4) carves out cookies and similar technologies \"strictly necessary\" or used for analytics that do not identify users. Aligned post-Brexit with EDPB reasoning.",
  },
  {
    country: "Netherlands",
    body: "Autoriteit Persoonsgegevens",
    summary:
      "AP guidance follows the EDPB position: privacy-friendly analytics — no cookies, no identifiers, EU processing — are exempt from the consent requirement.",
  },
];

export default function ConsentlessAnalyticsPillar() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Consentless analytics" }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Consentless analytics", url: "/consentless-analytics" },
        ])}
      />
      <JsonLd
        data={speakableWebPageSchema({
          url: "/consentless-analytics",
          name: "Consentless analytics — lawful web measurement without banners",
        })}
      />
      <JsonLd
        data={articleSchema({
          headline:
            "Consentless analytics — the legal route to web measurement without cookie banners",
          description:
            "How analytics can be lawful under GDPR and ePrivacy without a consent banner. The architectural exemption, authority guidance from six EU regulators, and the compliance stack.",
          datePublished: PILLAR_DATE_PUBLISHED,
          dateModified: PILLAR_DATE_MODIFIED,
          url: "/consentless-analytics",
          category: "Privacy",
          author: {
            name: "Rafa Jiménez",
            url: "/authors/rafa-jimenez",
            jobTitle: "Founder, SealMetrics",
          },
        })}
      />
      <JsonLd data={faqPageSchema} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 text-center">
          <span
            className="eyebrow mb-5"
            style={{ display: "inline-flex", justifyContent: "center" }}
          >
            Pillar — Consentless analytics
          </span>
          <h1
            className="h-display mx-auto mt-5"
            style={{ maxWidth: "24ch" }}
          >
            Analytics without consent banners.{" "}
            <em
              className="italic font-medium"
              style={{ color: "#E8B84B", fontStyle: "italic" }}
            >
              Lawful by architecture, not by paperwork.
            </em>
          </h1>
          <p
            className="text-ink-soft mt-8 mx-auto max-w-[64ch] leading-[1.55]"
            style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
          >
            The legal route to web measurement without a cookie dialog is not
            a workaround — it is the carve-out GDPR and ePrivacy contemplated
            from day one. Six European data-protection authorities have
            described what the carve-out requires. This is what it looks
            like in practice, and where the limits are.
          </p>
        </div>
      </section>

      <TldrBlock
        answer={
          <>
            Consentless analytics is web measurement that does not require a
            cookie banner because it sets no cookie, stores no personal
            identifier and creates no per-user profile. The lawful basis is
            architectural: with no personal data processed, GDPR&apos;s
            material scope does not apply; with no terminal-device storage,
            ePrivacy Art. 5(3) consent requirement does not trigger. The
            CNIL, German DSK, AEPD, Garante, ICO and AP have all published
            aligned exemption guidance. The trade-off is concrete:
            aggregate, anonymous measurement only — no returning-visitor
            identification, no cross-session tracking.
          </>
        }
        bullets={[
          <>
            <strong>GDPR Art. 6</strong> — no personal data processed, so no
            lawful-basis selection is required.
          </>,
          <>
            <strong>ePrivacy Art. 5(3)</strong> — no terminal-device storage
            or access, so no consent dialog required.
          </>,
          <>
            <strong>Six EU authorities</strong> have published explicit
            exemption guidance (CNIL, DSK, AEPD, Garante, ICO, AP).
          </>,
          <>
            <strong>EU-only processing</strong> in Dublin, Ireland — Schrems
            II transfer assessment moot because no transfer occurs.
          </>,
        ]}
      />

      {/* WHY BANNERS FAILED */}
      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[840px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">Why cookie banners stopped working</h2>
          <p className="mt-6 text-[17px] leading-[1.75] text-ink-soft">
            Consent banners were never a measurement strategy — they were a
            compliance instrument bolted onto a measurement strategy that
            assumed everyone said yes. Three things broke that assumption,
            and one regulation in 2026 broke it further.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-[18px] font-semibold text-ink mb-2">
                Rejection rates climbed past the break-even line
              </h3>
              <p className="text-[16px] leading-[1.7] text-ink-soft">
                When the average European visitor said yes 80% of the time,
                cookie analytics could absorb the 20% loss. Today the
                consumer brand average sits between 40% and 60% rejection.
                Decisions made on the remaining 40% are decisions made on a
                self-selected sample — typically older, less mobile, less
                privacy-aware. The bias is silent and structural.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-ink mb-2">
                Dark-pattern enforcement closed the gaming loophole
              </h3>
              <p className="text-[16px] leading-[1.7] text-ink-soft">
                The CNIL fined Google and Amazon for asymmetric banner
                design in 2023. The Italian Garante followed. The 2026
                Digital Omnibus formalised reject-all parity at the EU
                level: the &ldquo;reject&rdquo; button must be as prominent
                as &ldquo;accept&rdquo;, no pre-ticked boxes, no nudging
                copy. The brief window in which clever banner design lifted
                consent rates is closed.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-ink mb-2">
                Banner fatigue is now a documented user-experience cost
              </h3>
              <p className="text-[16px] leading-[1.7] text-ink-soft">
                A 2025 University of Amsterdam study measured a 14% drop in
                first-page engagement when a consent banner was the first
                interaction. For an eCommerce site running paid acquisition
                at €5–30 CPC, the abandonment cost on the banner alone now
                exceeds the value of the analytics data it gates.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-ink mb-2">
                The Digital Omnibus 2026 sharpened authority enforcement
              </h3>
              <p className="text-[16px] leading-[1.7] text-ink-soft">
                The Omnibus harmonised national approaches under one
                enforcement framework and gave authorities clearer power
                over Art. 5(3) breaches. Read the practical implications in{" "}
                <Link
                  href="/blog/eu-digital-omnibus-cookie-banners-analytics"
                  className="text-brand underline decoration-1 underline-offset-2"
                >
                  the marketer&apos;s guide
                </Link>
                . Net effect: the legal cost of running cookie-based
                analytics rose; the legal cost of running consentless
                analytics is zero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE LEGAL ROUTE */}
      <section className="py-20 bg-warm-white border-t border-warm-100">
        <div className="max-w-[840px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">The architectural route to lawfulness</h2>
          <p className="mt-6 text-[17px] leading-[1.75] text-ink-soft">
            The exemption is not a clever interpretation; it is the original
            wording. Three regulatory anchors define the path, and a
            measurement system either sits inside them by design or it does
            not.
          </p>

          <div className="mt-10 space-y-6">
            <div className="border border-warm-100 rounded-2xl p-7 bg-white">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-2">
                Anchor 1
              </h3>
              <h4 className="text-[18px] font-semibold text-ink mb-3">
                GDPR Article 2 — material scope
              </h4>
              <p className="text-[16px] leading-[1.7] text-ink-soft">
                GDPR applies to &ldquo;the processing of personal
                data.&rdquo; Personal data is any information that relates
                to an identified or identifiable natural person. If a
                measurement system processes only aggregate counts — never
                an identifier, never a fingerprint, never a behavioural
                profile — the system does not process personal data. The
                Regulation does not apply to its measurement output. The
                EDPB confirmed this reasoning in Opinion 5/2019.
              </p>
            </div>

            <div className="border border-warm-100 rounded-2xl p-7 bg-white">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-2">
                Anchor 2
              </h3>
              <h4 className="text-[18px] font-semibold text-ink mb-3">
                ePrivacy Article 5(3) — terminal-device storage
              </h4>
              <p className="text-[16px] leading-[1.7] text-ink-soft">
                ePrivacy requires consent before storing or accessing
                information on the user&apos;s terminal device. The classic
                example is a cookie. If the measurement system writes no
                cookie, reads no localStorage, and uses no device
                fingerprint, there is nothing on the terminal device to
                trigger Art. 5(3). No consent dialog is required for that
                processing path.
              </p>
            </div>

            <div className="border border-warm-100 rounded-2xl p-7 bg-white">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-2">
                Anchor 3
              </h3>
              <h4 className="text-[18px] font-semibold text-ink mb-3">
                The CNIL analytics exemption criteria
              </h4>
              <p className="text-[16px] leading-[1.7] text-ink-soft">
                The CNIL published five concrete criteria that an analytics
                system must meet to qualify for the exemption: a strictly
                limited purpose, no cross-site tracking, anonymised IP
                addresses or none stored, no merging with personal data
                from other sources, and aggregate reporting only. SealMetrics
                meets each criterion by design — not by configuration.
                Other authorities have aligned around the same five points.
              </p>
            </div>
          </div>

          <p className="mt-10 text-[17px] leading-[1.75] text-ink-soft">
            The technical implementation — first-party server-side
            collection without identifiers — is documented at{" "}
            <Link
              href="/cookieless-analytics"
              className="text-brand underline decoration-1 underline-offset-2"
            >
              cookieless analytics
            </Link>
            . The architecture diagram and pipeline detail live at{" "}
            <Link
              href="/how-it-works"
              className="text-brand underline decoration-1 underline-offset-2"
            >
              How it works
            </Link>
            .
          </p>
        </div>
      </section>

      {/* COUNTRY AUTHORITIES */}
      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <h2 className="h-section text-center">
            Authority guidance, by country
          </h2>
          <p className="mt-6 text-[17px] leading-[1.75] text-ink-soft text-center max-w-[64ch] mx-auto">
            Six European data-protection authorities have published explicit
            exemption guidance for analytics meeting the architectural
            criteria. The wording differs; the conclusion converges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {authorities.map((a) => (
              <div
                key={a.country}
                className="border border-warm-100 rounded-xl p-6 bg-warm-white"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-[16px] font-semibold text-ink">
                    {a.country}
                  </h3>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                    {a.body}
                  </span>
                </div>
                <p className="text-[14px] leading-[1.6] text-ink-soft">
                  {a.summary}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-[15px] leading-[1.7] text-ink-soft text-center max-w-[60ch] mx-auto">
            Country-specific deep-dives — including the CNIL
            self-assessment, the UK PECR exemption walkthrough, and the
            Digital Omnibus marketer guide — live on the{" "}
            <Link
              href="/blog"
              className="text-brand underline decoration-1 underline-offset-2"
            >
              blog
            </Link>
            . Dedicated country pages (
            <code className="font-mono text-[13px] bg-warm-100 px-1.5 py-0.5 rounded">
              /gdpr-analytics/france
            </code>
            ,
            <code className="font-mono text-[13px] bg-warm-100 px-1.5 py-0.5 rounded ml-1">
              /germany
            </code>
            ,
            <code className="font-mono text-[13px] bg-warm-100 px-1.5 py-0.5 rounded ml-1">
              /spain
            </code>
            ) are part of the Q3 2026 content roadmap.
          </p>
        </div>
      </section>

      {/* CONSENTLESS VS CONSENT-LIGHT */}
      <section className="py-20 bg-warm-white border-t border-warm-100">
        <div className="max-w-[840px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">
            &ldquo;Consentless&rdquo; vs &ldquo;consent-light&rdquo; — the
            distinction that matters for DPOs
          </h2>
          <p className="mt-6 text-[17px] leading-[1.75] text-ink-soft">
            A common confusion: lightweight analytics tools that claim
            &ldquo;no cookie banner needed&rdquo; while still setting a
            first-party cookie or a randomised visitor ID. From a CMP-
            integration perspective the experience is similar. From a
            regulatory perspective the two are not in the same category.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-warm-100 rounded-2xl p-7 bg-white">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: "#B5423B" }}>
                Consent-light
              </h3>
              <ul className="space-y-2 text-[15px] leading-[1.6] text-ink list-none pl-0">
                {[
                  "Sets a first-party cookie or visitor ID (often randomised).",
                  "Justifies under &ldquo;legitimate interest&rdquo; — a position several authorities have rejected for cross-session tracking.",
                  "Stores the identifier on the terminal device → ePrivacy Art. 5(3) still triggers.",
                  "Argument depends on banner-free interpretation that authorities can challenge case-by-case.",
                ].map((s) => (
                  <li key={s} className="flex gap-3">
                    <span style={{ color: "#B5423B" }} aria-hidden>—</span>
                    <span dangerouslySetInnerHTML={{ __html: s }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-warm-100 rounded-2xl p-7 bg-white">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-3">
                Consentless (SealMetrics)
              </h3>
              <ul className="space-y-2 text-[15px] leading-[1.6] text-ink list-none pl-0">
                {[
                  "Sets no cookie, writes no localStorage, no visitor ID generated.",
                  "GDPR material scope not engaged — no personal data processed.",
                  "ePrivacy Art. 5(3) not triggered — nothing stored on the terminal device.",
                  "Aligns with the CNIL exemption criteria, the AEPD guidance, the DSK position, the AP and ICO statements.",
                ].map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="text-brand" aria-hidden>—</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 text-[15px] leading-[1.7] text-ink-soft">
            For a DPO reviewing vendor risk, the practical question is:
            does the tool&apos;s defence rely on regulatory interpretation,
            or on the absence of triggering conditions? Consentless
            architecture is the second answer.
          </p>
        </div>
      </section>

      {/* COMPLIANCE STACK */}
      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[840px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">What ships with the platform</h2>
          <p className="mt-6 text-[17px] leading-[1.75] text-ink-soft">
            The architectural exemption removes the consent burden. The
            following documentation supports the rest of a vendor review:
          </p>

          <div className="mt-10 space-y-5">
            {[
              {
                name: "DPA",
                detail:
                  "Data Processing Agreement, GDPR Art. 28 compliant, signed by SealMetrics S.L. as processor. Pre-filled, ready to counter-sign.",
              },
              {
                name: "TPSR package",
                detail:
                  "Transfer, Privacy and Security Review document. Covers data flows, sub-processors (zero outside the EU), retention, encryption at rest and in transit, access controls, breach procedure.",
              },
              {
                name: "Sub-processor list",
                detail:
                  "Full list of sub-processors with their roles, jurisdictions and DPAs ships inside the TPSR package. All EU-only by policy.",
              },
              {
                name: "Hosting & residency",
                detail:
                  "All processing in Dublin, Ireland, on EU-owned infrastructure. No US sub-processors in the analytics data path. Schrems II transfer assessment unnecessary — no transfer occurs.",
              },
              {
                name: "Retention",
                detail:
                  "Configurable per customer. Default: aggregate counts retained 25 months. No raw individual-level data is stored beyond the millisecond-level aggregation window.",
              },
            ].map((row) => (
              <div
                key={row.name}
                className="flex gap-5 pb-5 border-b border-warm-100 last:border-0"
              >
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand whitespace-nowrap pt-1 min-w-[120px]">
                  {row.name}
                </span>
                <p className="text-[15px] leading-[1.7] text-ink">
                  {row.detail}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-[15px] leading-[1.7] text-ink-soft">
            Full security and architecture documentation lives at{" "}
            <Link
              href="/security"
              className="text-brand underline decoration-1 underline-offset-2"
            >
              Security
            </Link>
            . We are not currently certified to ISO 27001 or SOC 2 — the
            roadmap and the controls we already operate are documented in
            full.
          </p>
        </div>
      </section>

      {/* BY SECTOR */}
      <section className="py-20 bg-warm-white border-t border-warm-100">
        <div className="max-w-[960px] mx-auto px-5 sm:px-8">
          <h2 className="h-section text-center">
            Deep-dives by jurisdiction and scenario
          </h2>
          <p className="mt-6 text-[17px] leading-[1.75] text-ink-soft text-center max-w-[60ch] mx-auto">
            The legal pattern is portable. The friction points are local.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {[
              {
                href: "/blog/gdpr-analytics-without-consent",
                tag: "GDPR",
                title: "GDPR analytics without consent",
                lede: "The full Art. 6 / Art. 5(3) reasoning, with worked examples from CNIL, DSK, AEPD enforcement files.",
              },
              {
                href: "/blog/cnil-self-assessment-published",
                tag: "France · CNIL",
                title: "The CNIL self-assessment, published",
                lede: "Walk through the five exemption criteria with SealMetrics' actual answers, side by side.",
              },
              {
                href: "/blog/uk-pecr-analytics-exemption",
                tag: "UK · PECR",
                title: "UK PECR analytics exemption",
                lede: "Post-Brexit position. ICO guidance. Reg. 6(4) walkthrough for a UK-only deployment.",
              },
              {
                href: "/blog/eu-digital-omnibus-cookie-banners-analytics",
                tag: "Digital Omnibus 2026",
                title: "The marketer's guide to the Digital Omnibus",
                lede: "What changed for banners, what changed for analytics, and what to action this quarter.",
              },
              {
                href: "/blog/consent-banner-impact-on-analytics",
                tag: "Measurement loss",
                title: "How banners destroy 40–60% of your data",
                lede: "Industry-by-industry rejection rates and the cost of decisions made on the survivor sample.",
              },
              {
                href: "/blog/eu-digital-omnibus-marketer-guide-2026",
                tag: "Compliance roadmap",
                title: "Digital Omnibus marketer roadmap",
                lede: "Quarter-by-quarter actions for marketing leaders in EU-regulated markets.",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block border border-warm-100 rounded-xl p-7 bg-white no-underline transition-all hover:border-warm-200 hover:-translate-y-0.5"
              >
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                  {s.tag}
                </span>
                <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.01em] text-ink leading-[1.3] group-hover:text-brand transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-soft">
                  {s.lede}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-5 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-brand">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[840px] mx-auto px-5 sm:px-8">
          <h2 className="h-section text-center">Common DPO questions</h2>
          <dl className="mt-12 divide-y divide-warm-100 border-y border-warm-100">
            {faqs.map((f) => (
              <div key={f.q} className="py-7">
                <dt className="text-[17px] font-semibold text-ink mb-3">
                  {f.q}
                </dt>
                <dd
                  data-speakable
                  className="faq-answer text-[15.5px] leading-[1.7] text-ink-soft max-w-[68ch]"
                >
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="en"
        titleEn={
          <>
            One <em
              className="italic font-medium"
              style={{ color: "#E8B84B", fontStyle: "italic" }}
            >
              compliance review
            </em>. Done.
          </>
        }
        titleEs={
          <>
            Una <em
              className="italic font-medium"
              style={{ color: "#E8B84B", fontStyle: "italic" }}
            >
              revisión legal
            </em>. Resuelta.
          </>
        }
        ledeEn="Book a 30-minute walkthrough with the founder. Bring your DPO. We answer the architecture questions and hand over the DPA + TPSR package on the call."
        ledeEs="Reserva 30 min con el founder. Trae a tu DPO. Resolvemos las preguntas de arquitectura y te entregamos el DPA + TPSR en la llamada."
      />
    </>
  );
}
