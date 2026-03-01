import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "The EU Digital Omnibus: What It Means for Cookie Banners and Analytics",
  description:
    "The European Commission proposed the biggest change to EU data law since GDPR. Cookie consent moves to GDPR, and first-party analytics may not require consent.",
  openGraph: {
    title: "The EU Digital Omnibus: What It Means for Cookie Banners and Analytics",
    description:
      "COM(2025) 837 could eliminate cookie banners for first-party analytics. Here is what changed.",
    type: "article",
  },
  alternates: {
    canonical: "https://sealmetrics.com/blog/eu-digital-omnibus-cookie-banners-analytics",
  },
};

export default function OmnibusShortPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "EU Digital Omnibus and Analytics" }]} />
      <JsonLd data={articleSchema({ headline: "The EU Digital Omnibus: What It Means for Cookie Banners and Analytics", description: "The European Commission proposed the biggest change to EU data law since GDPR.", datePublished: "2026-02-12", url: "/blog/eu-digital-omnibus-cookie-banners-analytics", category: "Regulation" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Blog", url: "/blog" }, { name: "EU Digital Omnibus and Analytics" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">

        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Regulation
          </span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
            The EU Digital Omnibus: What It Means for Cookie Banners and Analytics
          </h1>
          <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
            <time className="font-mono">February 12, 2026</time>
            <span>2 min read</span>
          </div>
        </header>

        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <p>
            On November 19, 2025, the European Commission released proposal
            COM(2025) 837 — the Digital Omnibus. If adopted, it would be the
            biggest change to EU data law since GDPR came into force in 2018.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            Five laws become two
          </h2>

          <p>
            Currently, EU data operations require navigating GDPR, the
            ePrivacy Directive, the Data Act, the Data Governance Act, the
            Open Data Directive, the Free Flow of Data Regulation, and the
            Platform-to-Business Regulation. The Omnibus proposes
            consolidating these into two instruments: an amended GDPR and a
            consolidated Data Act. The P2B Regulation would be repealed
            entirely.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            Cookie consent moves to GDPR
          </h2>

          <p>
            The proposal would repeal Article 5(3) of the ePrivacy Directive
            — the legal basis for cookie consent banners. Cookie rules would
            move into GDPR itself, with a crucial modification:{" "}
            <Link
              href="/glossary/cookieless-analytics"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              first-party analytics
            </Link>{" "}
            for your own use would not require consent if the data is
            aggregated. Third-party tracking still requires consent.
          </p>

          <p>
            Additionally, the proposal mandates single-click refuse buttons
            (equal prominence to &ldquo;accept&rdquo;) and prohibits
            re-asking for consent for six months after a user declines.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            Browser signals are coming
          </h2>

          <p>
            Article 88b introduces mandatory support for browser-based
            consent signals. Websites must respect these signals within 24
            months, and browsers must implement them within 48 months. This
            functions similarly to Global Privacy Control, but with legal
            enforcement behind it.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            Timeline
          </h2>

          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px] text-[0.9rem] my-6 space-y-3">
            <p>
              <span className="font-medium text-text-primary">Final adoption:</span>{" "}
              Late 2026 or early 2027
            </p>
            <p>
              <span className="font-medium text-text-primary">Cookie rules apply:</span>{" "}
              ~6 months post-entry
            </p>
            <p>
              <span className="font-medium text-text-primary">Website browser signals:</span>{" "}
              24 months post-entry
            </p>
            <p>
              <span className="font-medium text-text-primary">Browser implementation:</span>{" "}
              48 months post-entry
            </p>
          </div>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            Why this matters
          </h2>

          <p>
            If you use first-party, aggregated analytics — and nothing else
            that requires consent — you may not need a cookie banner at all.
            France and the UK already permit this approach. The EU proposal
            would standardize it across all member states.
          </p>

          <p>
            For a deeper analysis of every provision and what to do now, read
            our{" "}
            <Link
              href="/blog/eu-digital-omnibus-marketer-guide-2026"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              complete marketer&apos;s guide to the Digital Omnibus
            </Link>
            .
          </p>
        </div>

        {/* Related */}
        <div className="mt-16 pt-10 border-t border-warm-100">
          <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">
            Related articles
          </h3>
          <div className="space-y-3">
            <Link
              href="/blog/eu-digital-omnibus-marketer-guide-2026"
              className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              The EU Digital Omnibus Explained: What Every Marketer Needs to Know in 2026
            </Link>
            <Link
              href="/blog/uk-pecr-analytics-exemption"
              className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              UK Analytics Exemption Is Now Live: Our PECR Self-Assessment
            </Link>
            <Link
              href="/blog/cnil-self-assessment-published"
              className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              We Published Our CNIL Self-Assessment
            </Link>
          </div>
        </div>
      </div>
    </article>
    </>
  );
}
