import { Hero } from "@/components/sections/Hero";
import { Logos } from "@/components/sections/Logos";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Comparison } from "@/components/sections/Comparison";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Compliance } from "@/components/sections/Compliance";
import { Integrations } from "@/components/sections/Integrations";
import { Pricing } from "@/components/sections/Pricing";
import { CtaFinal } from "@/components/sections/CtaFinal";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "SealMetrics",
      url: "https://sealmetrics.com",
      description:
        "Cookieless web analytics platform that captures 100% of website traffic without cookies, consent banners, or personal data collection.",
      foundingDate: "2020",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ES",
      },
    },
    {
      "@type": "WebSite",
      name: "SealMetrics",
      url: "https://sealmetrics.com",
    },
    {
      "@type": "SoftwareApplication",
      name: "SealMetrics",
      applicationCategory: "AnalyticsApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "199",
        priceCurrency: "EUR",
        description: "Starter plan — 1M human events/mo",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ACT 1 — Connect */}
      <Hero />
      <Logos />

      {/* ACT 2 — Educate */}
      <Problem />
      <HowItWorks />

      {/* ACT 3 — Demonstrate */}
      <ProductShowcase />
      <Comparison />

      {/* ACT 4 — Convince */}
      <CaseStudy />
      <Testimonials />
      <Compliance />
      <Integrations />
      <Pricing />

      {/* Close */}
      <CtaFinal />
    </>
  );
}
