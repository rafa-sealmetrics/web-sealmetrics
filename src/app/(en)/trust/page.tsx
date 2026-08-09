import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Trust Center — Sealmetrics",
  description: "Where Sealmetrics' legal and security documentation lives: DPA, Terms, Security overview, Privacy Policy, and documents available on request.",
  openGraph: {
    title: "Trust Center — Sealmetrics",
    description:
      "Sealmetrics legal and security documentation: DPA, Terms, Security, Privacy, compliance docs, and request-only assessments.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    url: "https://sealmetrics.com/trust/",
    siteName: "SealMetrics",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Trust Center — Sealmetrics",
    description: "Sealmetrics legal and security documentation: DPA, Terms, Security, Privacy, compliance docs, and request-only assessments.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/trust/",
    languages: { es: "https://sealmetrics.com/es/trust/" },
  },
};

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-4 mt-12">
      {children}
    </h2>
  );
}

function DocCard({
  title,
  desc,
  href,
  altHref,
  altLabel,
  version,
  external,
}: {
  title: string;
  desc: string;
  href: string;
  altHref?: string;
  altLabel?: string;
  version?: string;
  external?: boolean;
}) {
  return (
    <div className="border border-warm-100 rounded-md p-5 flex flex-col gap-1.5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <a
          href={href}
          className="text-[0.98rem] font-semibold text-text-primary underline"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {title}
        </a>
        {version && (
          <span className="text-[0.75rem] text-text-tertiary whitespace-nowrap">
            {version}
          </span>
        )}
      </div>
      <p className="text-[0.88rem] leading-relaxed text-text-secondary m-0">
        {desc}
      </p>
      {altHref && (
        <p className="text-[0.8rem] text-text-tertiary m-0">
          <a href={altHref} className="underline">
            {altLabel}
          </a>
        </p>
      )}
    </div>
  );
}

export default function TrustPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Trust Center" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Trust Center", url: "/trust" }])} />
      <section className="pt-12 pb-28 bg-white">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
            Legal
          </span>
          <h1 className="headline-hero mb-4">Trust Center</h1>
          <p className="text-[0.9rem] text-text-tertiary mb-10">
            Last updated: July 30, 2026 ·{" "}
            <a href="/es/trust/" className="underline">
              Versión en español
            </a>
          </p>

          <div className="text-[0.95rem] leading-[1.75] text-text-secondary">
            <p>
              This page is the index of Sealmetrics&rsquo; legal and security
              documentation. Every document below is versioned; the version and
              date shown on each entry identify the edition currently in force.
              Documents that are not public are available on request under the
              conditions described in section 2.
            </p>

            <H>1. Public documents</H>
            <div className="space-y-4">
              <DocCard
                title="Data Processing Agreement"
                desc="Article 28 GDPR DPA, including the list of authorised sub-processors as Annex 3."
                href="/dpa/"
                altHref="/es/dpa/"
                altLabel="Versión en español (/es/dpa)"
                version="v2.0 · Jul 2026"
              />
              <DocCard
                title="Terms of Service"
                desc="The contract governing use of the Sealmetrics service."
                href="/terms/"
                altHref="/es/terms/"
                altLabel="Versión en español (/es/terms)"
                version="v2.0 · Jul 2026"
              />
              <DocCard
                title="Security overview"
                desc="Privacy architecture, infrastructure security and EU-only hosting model."
                href="/security/"
                altHref="/es/security/"
                altLabel="Versión en español (/es/security)"
                version="v2.0 · Jul 2026"
              />
              <DocCard
                title="Privacy Policy"
                desc="How Sealmetrics processes personal data as a controller (website, account, billing)."
                href="/privacy/"
                version="v2.0 · Jul 2026"
              />
              <DocCard
                title="Compliance documentation"
                desc="Country-by-country self-assessments, the analytics cookie exemption, and data subject rights — maintained on docs.sealmetrics.com."
                href="https://docs.sealmetrics.com/compliance"
                altHref="https://docs.sealmetrics.com/security-privacy"
                altLabel="Security &amp; privacy section on docs.sealmetrics.com"
                external
              />
            </div>

            <H>2. Available on request</H>
            <p>
              The following documents are shared on request by emailing{" "}
              <a href="mailto:privacy@sealmetrics.com" className="underline">
                privacy@sealmetrics.com
              </a>
              , under a light NDA where applicable:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
                Full Data Protection Impact Assessment (DPIA).
              </li>
              <li>
                Legitimate interest assessment (LIA) for the attribution
                layer.
              </li>
              <li>
                Documented assessment of conformity with the AEPD
                audience-measurement guide (section III.C.2).
              </li>
              <li>Security questionnaires for buyers.</li>
            </ul>

            <H>3. Subscribe to changes</H>
            <p>
              To receive notifications of sub-processor changes and updates to
              the legal documents listed on this page, email{" "}
              <a
                href="mailto:privacy@sealmetrics.com?subject=Subprocessor%20updates"
                className="underline"
              >
                privacy@sealmetrics.com
              </a>{" "}
              with the subject &ldquo;Subprocessor updates&rdquo;.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
