import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { definedTermSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "What Is Analytics Data Residency? — SealMetrics Glossary",
  description:
    "Analytics data residency defines where visitor data is stored and processed. EU residency is required for GDPR compliance after Schrems II.",
  openGraph: {
    title: "What Is Analytics Data Residency?",
    description: "Data residency defines where analytics data is stored. EU residency is key for GDPR compliance.",
    type: "article",
  },
  alternates: { canonical: "https://sealmetrics.com/glossary/analytics-data-residency" },
};

export default function AnalyticsDataResidencyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Glossary", href: "/glossary" }, { label: "Analytics Data Residency" }]} />
      <JsonLd data={definedTermSchema({ name: "Analytics Data Residency", description: "The geographic location where analytics data is processed and stored, determining the applicable legal framework.", url: "/glossary/analytics-data-residency" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Glossary", url: "/glossary" }, { name: "Analytics Data Residency" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">

        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">Definition</span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">Analytics Data Residency</h1>
        </header>

        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <p className="text-[1rem] text-text-primary font-medium">
              The geographic location where analytics data is processed and stored. Data residency determines which legal framework governs the data, what transfer mechanisms are required, and whether the processing meets regional compliance standards such as GDPR.
            </p>
          </div>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Why data residency matters</h2>
          <p>
            Analytics data &mdash; even aggregated, pseudonymized web traffic data &mdash; is subject to the data protection laws of the jurisdiction where it is processed. When a European company uses Google Analytics, visitor data is transmitted to Google&rsquo;s servers in the United States. This creates a cross-border data transfer that must comply with specific legal mechanisms under GDPR Chapter V.
          </p>
          <p>
            The practical consequences of non-compliance are significant. Since 2022, Data Protection Authorities (DPAs) in Austria, France, Italy, Denmark, Finland, and Norway have all issued rulings against the use of Google Analytics, citing inadequate transfer safeguards. The French CNIL ordered organizations to stop using GA within one month of its February 2022 decision. Fines under GDPR Article 83 can reach 4% of global annual turnover or 20 million EUR &mdash; whichever is higher.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">EU data residency under GDPR</h2>
          <p>
            <Link href="/glossary/gdpr-analytics-compliance" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">GDPR-compliant analytics</Link> requires that personal data of EU residents is either processed within the EU/EEA, or transferred to a third country under an approved mechanism (adequacy decision, Standard Contractual Clauses, or Binding Corporate Rules).
          </p>
          <p>
            EU data residency eliminates the transfer question entirely. When data never leaves the EU, there is no third-country transfer to justify, no supplementary measures to implement, and no risk of an adequacy decision being invalidated &mdash; as happened with Privacy Shield in 2020.
          </p>
          <p>
            For analytics specifically, the cleanest compliance path is processing data on EU-based infrastructure operated by an EU-headquartered company. This avoids the reach of foreign surveillance laws (such as US FISA 702 and Executive Order 12333) that were central to the Schrems II ruling.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Schrems II implications</h2>
          <p>
            The July 2020 Schrems II ruling by the Court of Justice of the European Union (CJEU) invalidated the EU-US Privacy Shield and raised the bar for Standard Contractual Clauses (SCCs). The court found that US surveillance laws do not provide EU citizens with equivalent data protection, and that SCCs alone cannot bridge this gap without &ldquo;supplementary measures.&rdquo;
          </p>
          <p>
            For analytics, this created a practical dilemma: Google Analytics transmits data to US servers where it is accessible under FISA 702. Google&rsquo;s subsequent attempts to address this &mdash; including server-side tagging via EU-based proxy servers &mdash; were deemed insufficient by multiple DPAs because Google retains the ability to access the data and remains subject to US law.
          </p>
          <p>
            The EU-US Data Privacy Framework (DPF), adopted in July 2023, provides a new adequacy basis. However, legal experts widely expect a &ldquo;Schrems III&rdquo; challenge, and the European Data Protection Board has flagged concerns about the DPF&rsquo;s durability. Organizations prioritizing long-term compliance are choosing EU-resident analytics solutions that are structurally immune to transfer rulings.
          </p>
          <p>
            <Link href="/glossary/first-party-data-collection" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">First-party data collection</Link> with EU-only infrastructure, combined with <Link href="/glossary/cookieless-analytics" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">cookieless analytics</Link> that collects no personal data, provides the strongest compliance posture &mdash; no consent required, no transfers, no dependency on shifting adequacy decisions.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-warm-100">
          <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">Related terms</h3>
          <div className="space-y-3">
            <Link href="/glossary/gdpr-analytics-compliance" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">GDPR Analytics Compliance</Link>
            <Link href="/glossary/server-side-tracking" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Server-Side Tracking</Link>
            <Link href="/glossary/consent-management-platform" className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors">Consent Management Platform</Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-warm-100">
          <p className="text-[0.85rem] text-text-tertiary">
            Learn more: <Link href="/blog/gdpr-analytics-without-consent" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">GDPR Analytics Without Consent</Link> &middot; <Link href="/security" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">SealMetrics Security &amp; Compliance</Link>
          </p>
        </div>
      </div>
    </article>
    </>
  );
}
