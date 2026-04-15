import { type ReactNode } from "react";
import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";

interface Faq {
  q: string;
  /** Plain text for JSON-LD schema */
  aText: string;
  /** JSX with links for rendering */
  aJsx: ReactNode;
}

const faqs: Faq[] = [
  {
    q: "Why pay for SealMetrics when GA4 is free?",
    aText: "GA4 is free because you are the product — your data trains Google's ad models. More importantly, GA4 relies on cookies that most visitors block or reject. You are making budget decisions on a fraction of your real data. SealMetrics captures 100% of your traffic cookielessly, so every euro you spend is based on complete information. The cost of SealMetrics is a rounding error compared to the cost of misallocated ad spend.",
    aJsx: (
      <>
        GA4 is free because you are the product — your data trains Google&apos;s
        ad models. More importantly, GA4 relies on cookies that most visitors
        block or reject. You are making budget decisions on a fraction of your
        real data. SealMetrics captures 100% of your traffic cookielessly, so
        every euro you spend is based on complete information. The cost of
        SealMetrics is a rounding error compared to the cost of misallocated ad
        spend. See our{" "}
        <Link href="/vs-ga4" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
          full GA4 comparison
        </Link>.
      </>
    ),
  },
  {
    q: "How accurate is cookieless tracking?",
    aText: "SealMetrics uses server-side identification to recognise visitors without cookies. Our clients consistently see 3-4x more conversions tracked compared to cookie-based tools running on the same site. There is no sampling, no modelling, no estimation — every data point is observed, not inferred.",
    aJsx: (
      <>
        SealMetrics uses server-side identification to recognise visitors without
        cookies. Our clients consistently see 3-4x more conversions tracked
        compared to cookie-based tools running on the same site. There is no{" "}
        <Link href="/glossary/data-sampling" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
          sampling
        </Link>
        , no modelling, no estimation — every data point is observed, not
        inferred.
      </>
    ),
  },
  {
    q: "Do I need to remove GA4?",
    aText: "No. Most clients run SealMetrics alongside GA4. In fact, we recommend it for the first 30 days so you can compare the data side by side. After seeing the difference, most teams use SealMetrics as their source of truth and keep GA4 for Google Ads integration.",
    aJsx: (
      <>
        No. Most clients run SealMetrics alongside GA4. In fact, we recommend it
        for the first 30 days so you can compare the data side by side. After
        seeing the difference, most teams use SealMetrics as their source of
        truth and keep GA4 for Google Ads integration.
      </>
    ),
  },
  {
    q: "Is this GDPR compliant without a consent banner?",
    aText: "Yes. SealMetrics is cookieless by architecture — no cookies, no personal data storage, no cross-site tracking. Our infrastructure is 100% EU-hosted (Spain and Germany). We have been audited by independent DPOs and comply with GDPR, ePrivacy, and Schrems II without requiring consent banners. You can remove your cookie banner entirely.",
    aJsx: (
      <>
        Yes. SealMetrics is cookieless by architecture — no cookies, no personal
        data storage, no cross-site tracking. Our infrastructure is 100%
        EU-hosted (Spain and Germany). We comply with GDPR, ePrivacy, and
        Schrems II without requiring{" "}
        <Link href="/glossary/consent-management-platform" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
          consent banners
        </Link>
        . Read more about our{" "}
        <Link href="/security" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
          security and compliance
        </Link>.
      </>
    ),
  },
  {
    q: "How long does implementation take?",
    aText: "5 minutes. You add a single script to your site — same as GA4. No code changes, no tag manager configuration, no developer sprint needed. You see data from the first hour. Our team handles the full onboarding and helps you configure goals, funnels, and reports in the first week.",
    aJsx: (
      <>
        5 minutes. You add a single script to your site — same as GA4. No code
        changes, no tag manager configuration, no developer sprint needed. You
        see data from the first hour. Our team handles the full onboarding and
        helps you configure goals, funnels, and reports in the first week.{" "}
        <Link href="/how-it-works" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
          See how it works
        </Link>.
      </>
    ),
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.aText,
    },
  })),
};

export function FaqFocused() {
  return (
    <section className="py-28 bg-warm-white border-t border-warm-100">
      <JsonLd data={faqSchema} />
      <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <h2 className="headline-section mb-12 text-center">
          Common questions.
        </h2>
        <div className="space-y-0">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border-b border-warm-100 [&:first-child]:border-t"
            >
              <summary className="flex items-center justify-between py-5 cursor-pointer list-none text-[1rem] font-medium text-text-primary hover:text-text-body transition-colors [&::-webkit-details-marker]:hidden">
                {faq.q}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="shrink-0 ml-4 transition-transform group-open:rotate-45"
                >
                  <path d="M8 3v10M3 8h10" />
                </svg>
              </summary>
              <div className="pb-6 pr-8">
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {faq.aJsx}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
