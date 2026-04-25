import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import {
  breadcrumbSchema,
  faqSchema,
  verticalSoftwareApplicationSchema,
} from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { VerticalPageV3 } from "@/components/sections/v3/VerticalPageV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVerticalData } from "@/components/sections/v3/VerticalsData";

export const metadata: Metadata = {
  title: "Cookieless Analytics for Hotels — SealMetrics",
  description:
    "Cookieless analytics for hotels: match direct-booking attribution to your PMS, recover 25% of invisible reservations, roll up multi-property portfolios. EU-hosted, GDPR-safe.",
  openGraph: {
    title: "Cookieless Analytics for Hotels — SealMetrics",
    description:
      "Consentless, first-party analytics for hotel groups. Reconcile direct bookings with your PMS and attribute revenue from meta-search without OTA black boxes.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/for/hotels",
    languages: getAlternates("/for/hotels"),
  },
};

const seoFaqs = [
  {
    question: "What is cookieless analytics for hotels?",
    answer:
      "Cookieless analytics for hotels counts booking-path events — meta-search landings, OTA referrals, booking confirmations — without cookies, consent banners or personal identifiers. Each booking is attributed last-click to the source on that page load, aggregate totals reconcile with the PMS (Mews, Cloudbeds, Opera), and no individual guest is tracked.",
  },
  {
    question: "How does cookieless analytics help recover invisible hotel bookings?",
    answer:
      "On average 25% of direct bookings recorded in hotel PMS systems do not appear correctly attributed in GA4 because of consent rejection on mobile (Safari), ITP-induced cookie expiry and OTA path breaks. Cookieless analytics counts every pageview anonymously on the server, captures the traffic source on each booking pageview and aggregates bookings per channel — no per-guest tracking required.",
  },
  {
    question: "Does SealMetrics work across multiple hotel properties?",
    answer:
      "Yes. Portfolio rollups are included in every plan. Each property runs its own tracking and data consolidates at brand/group level — ideal for hotel chains with 5+ properties across multiple countries.",
  },
  {
    question: "Can cookieless analytics integrate with a hotel PMS?",
    answer:
      "Yes. Native integrations with Mews, Cloudbeds and Opera; any other PMS or custom booking engine integrates via REST API. Booking revenue flows back automatically for true revenue-linked attribution.",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For Hotels" }]} />
      <JsonLd
        data={breadcrumbSchema([{ name: "For Hotels", url: "/for/hotels" }])}
      />
      <JsonLd
        data={verticalSoftwareApplicationSchema({
          vertical: "Hotels",
          audienceType: "Hotel groups and travel brands in Europe",
          description:
            "Cookieless analytics for hotels and travel: direct-booking attribution reconciled with the PMS, multi-property rollups and meta-search touchpoint tracking without cookies.",
          url: "/for/hotels",
        })}
      />
      <JsonLd data={faqSchema(seoFaqs)} />

      <VerticalPageV3 data={getVerticalData("hotels", "en")} />

      <TldrBlock
        label="Cookieless analytics for hotels"
        answer={
          <>
            <strong>Cookieless analytics for hotels</strong> lets hotel groups
            reconcile aggregate direct-booking totals with the PMS without cookies,
            consent banners or ad-blocker gaps. SealMetrics counts every
            meta-search landing, every mobile Safari visit and every booking event
            anonymously — each booking attributed last-click at channel level and
            rolled up across properties for portfolio-level revenue reporting.
          </>
        }
        bullets={[
          <>Recovers ~25% of CRM bookings typically invisible to GA4.</>,
          <>Aggregate channel totals for meta-search (Google Hotel Ads, Trivago) without OTA black-box dependency.</>,
          <>Native PMS integrations: Mews, Cloudbeds, Opera; REST API for any other stack.</>,
          <>No per-guest journey tracking — aggregate counts only, defensible under GDPR.</>,
        ]}
      />

      <RelatedPagesV3
        locale="en"
        eyebrow="Also explore"
        titleEn="Related roles and industries"
        titleEs="Roles e industrias relacionadas"
        pages={[
          {
            href: "/blog/cookieless-analytics-for-hotels",
            title: "Guide: Cookieless analytics for hotels",
            desc: "How European hotel groups measure direct bookings in 2026.",
          },
          {
            href: "/glossary/cookieless-analytics",
            title: "What is cookieless analytics",
            desc: "Definition, how it works, why it matters.",
          },
          {
            href: "/for/ecommerce",
            title: "For eCommerce",
            desc: "Shopify, Magento and DTC checkout attribution.",
          },
        ]}
      />
      <LogosStrip />
    </>
  );
}
