import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { RelatedReading } from "@/components/ui/RelatedReading";

export const metadata: Metadata = {
  title: "We Published Our CNIL Self-Assessment",
  description:
    "The French CNIL allows certain analytics tools to operate without cookie banners. We documented how SealMetrics meets all 14 technical criteria.",
  openGraph: {
    title: "We Published Our CNIL Self-Assessment",
    description:
      "SealMetrics meets all 14 CNIL technical criteria for consent-exempt analytics in France.",
    type: "article",
  },
  alternates: {
    canonical: "https://sealmetrics.com/blog/cnil-self-assessment-published",
  },
};

export default function CnilAssessmentPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "CNIL Self-Assessment Published" }]} />
      <JsonLd data={articleSchema({ headline: "We Published Our CNIL Self-Assessment", description: "SealMetrics meets all 14 CNIL technical criteria for consent-exempt analytics.", datePublished: "2026-02-10", url: "/blog/cnil-self-assessment-published", category: "Regulation", author: { name: "Rafa Jiménez", url: "/authors/rafa-jimenez", jobTitle: "Founder, SealMetrics" } })} />
      <JsonLd data={breadcrumbSchema([{ name: "Blog", url: "/blog" }, { name: "CNIL Self-Assessment Published" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">

        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Regulation
          </span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
            We Published Our CNIL Self-Assessment
          </h1>
          <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
            <time className="font-mono">February 10, 2026</time>
            <span>2 min read</span>
            <span>By <Link href="/authors/rafa-jimenez" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">Rafa Jiménez</Link></span>
          </div>
        </header>

        <div className="mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
          <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-disc pl-5">
            <li>The French CNIL allows certain cookieless analytics tools to operate without consent banners if they meet 5 permitted objectives and 14 technical criteria.</li>
            <li>SealMetrics meets all 14 CNIL criteria and exceeds several — it does not collect IP addresses at all (CNIL only requires last-octet removal) and uses no persistent cookies (CNIL permits up to 13 months).</li>
            <li>This is compliance documentation, not official CNIL certification — the authority explicitly prohibits such claims, but the self-assessment is publicly available.</li>
            <li>The regulatory trend across Europe (France, UK, EU Omnibus) is moving toward consent exemption for first-party, aggregated analytics.</li>
          </ul>
        </div>

        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <p>
            If you operate a website in France, you know the challenge: the
            French data protection authority (<a href="https://www.cnil.fr/en/cookies-and-other-tracking-devices" target="_blank" rel="noopener noreferrer">CNIL</a>) allows certain{" "}
            <Link href="/glossary/cookieless-analytics" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">cookieless</Link>{" "}
            audience
            measurement tools to operate without cookie banners — but only if
            they meet strict technical and operational criteria. Rather than
            simply claiming compliance, we published a comprehensive
            self-assessment.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            What we did
          </h2>

          <p>
            The CNIL released an <a href="https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience" target="_blank" rel="noopener noreferrer">auto-evaluation tool</a> in July 2025 covering 5
            permitted objectives and 14 technical criteria. We documented how
            SealMetrics addresses each requirement — covering data retention
            limits, cross-site tracking prevention, and every other criterion
            — without marketing language. Just technical documentation against
            regulatory requirements.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            The short version
          </h2>

          <p>
            SealMetrics meets all 14 technical criteria. In several cases, we
            exceed the requirements:
          </p>

          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px] text-[0.9rem] my-6 space-y-3">
            <p>
              — CNIL requires last-octet IP removal.{" "}
              <span className="font-medium text-text-primary">
                We do not collect IP addresses at all.
              </span>
            </p>
            <p>
              — CNIL permits cookies with a 13-month maximum.{" "}
              <span className="font-medium text-text-primary">
                We do not use persistent cookies at all.
              </span>
            </p>
          </div>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
            What this means for you
          </h2>

          <p>
            If you operate a website targeting French users and use
            SealMetrics with the standard configuration, you can measure
            audiences without requesting consent. Your privacy policy must
            still mention the analytics tool (transparency is required), but
            a cookie banner is not necessary for SealMetrics specifically.
          </p>

          <p>
            To be clear: this is compliance documentation, not official
            &ldquo;CNIL certification.&rdquo; The authority explicitly
            prohibits such claims. What we have done is document, criterion
            by criterion, how SealMetrics meets the requirements for the
            consent exemption.
          </p>

          <p>
            The approach mirrors what we did for{" "}
            <Link href="/glossary/gdpr-analytics-compliance" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">GDPR compliance</Link>{" "}
            documentation and the{" "}
            <Link
              href="/blog/uk-pecr-analytics-exemption"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              UK PECR exemption
            </Link>{" "}
            and aligns with the direction of the{" "}
            <Link
              href="/blog/eu-digital-omnibus-cookie-banners-analytics"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              EU Digital Omnibus
            </Link>
            . The regulatory trend is clear: first-party, aggregated
            analytics is moving toward consent exemption across Europe.{" "}
            <Link
              href="/how-it-works"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              Learn how cookieless analytics works
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
              href="/blog/uk-pecr-analytics-exemption"
              className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              UK Analytics Exemption Is Now Live: Our PECR Self-Assessment
            </Link>
            <Link
              href="/blog/eu-digital-omnibus-marketer-guide-2026"
              className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              The EU Digital Omnibus Explained: What Every Marketer Needs to Know in 2026
            </Link>
          </div>
        </div>
      </div>
        <RelatedReading currentSlug="cnil-self-assessment-published" />
    </article>
    </>
  );
}
