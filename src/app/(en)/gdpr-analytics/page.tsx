import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { breadcrumbSchema, collectionPageSchema, itemListSchema } from "@/lib/schema";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";
import { getAlternates } from "@/lib/i18n/navigation";
import { ogImage } from "@/lib/seo/og";

const TITLE = "GDPR analytics by country — regulator guidance";
const DESCRIPTION =
  "How analytics runs lawfully without a cookie banner in France, Germany and Spain. CNIL, DSK/TDDDG and AEPD guidance, criterion by criterion.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: "GDPR analytics by country — regulator guidance",
    description:
      "CNIL, DSK/§25 TDDDG and AEPD: what each regulator requires for consent-exempt audience measurement, and which architectures meet it.",
    url: "https://sealmetrics.com/gdpr-analytics/",
    siteName: "Sealmetrics",
    locale: "en_US",
    type: "website",
    images: [ogImage("/gdpr-analytics/")],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "GDPR analytics by country — regulator guidance",
    description:
      "CNIL, DSK/§25 TDDDG and AEPD guidance on consent-exempt analytics, criterion by criterion.",
    images: [ogImage("/gdpr-analytics/")],
  },
  alternates: {
    canonical: "https://sealmetrics.com/gdpr-analytics/",
    languages: getAlternates("/gdpr-analytics"),
  },
};

const countries = [
  {
    href: "/gdpr-analytics/france",
    country: "France",
    authority: "CNIL",
    tagline:
      "The CNIL exemption for analytics: five criteria, a 14-point self-assessment, and the Digital Omnibus impact.",
  },
  {
    href: "/gdpr-analytics/germany",
    country: "Germany",
    authority: "DSK / BfDI",
    tagline:
      "§25 TDDDG, the DSK orientation paper and BfDI guidance — and how a cookieless architecture meets the exemption by design.",
  },
  {
    href: "/gdpr-analytics/spain",
    country: "Spain",
    authority: "AEPD",
    tagline:
      "The AEPD 2024 cookies guide and LSSI-CE Art. 22.2 — the conditions for anonymous audience measurement without consent.",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "GDPR analytics" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "GDPR analytics", url: "/gdpr-analytics" }])} />
      <JsonLd
        data={collectionPageSchema({
          name: TITLE,
          description: DESCRIPTION,
          url: "/gdpr-analytics",
        })}
      />
      <JsonLd
        data={itemListSchema({
          name: "GDPR analytics guidance by country",
          description:
            "Country-level analysis of consent-exempt web analytics under GDPR and ePrivacy, per national supervisory authority.",
          url: "/gdpr-analytics",
          items: countries.map((c) => ({
            name: `GDPR analytics in ${c.country} — ${c.authority}`,
            url: `https://sealmetrics.com${c.href}/`,
          })),
        })}
      />

      <section className="relative overflow-hidden bg-warm-white pt-10 md:pt-12 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <span className="eyebrow mb-5">Compliance by country</span>
          <h1 className="h-display mt-5" style={{ maxWidth: "24ch" }}>
            GDPR analytics, <em>regulator by regulator.</em>
          </h1>

          <QuickAnswer>
            <p>
              GDPR is a single regulation, but the rule that decides whether an
              analytics tag needs a consent banner is ePrivacy, and ePrivacy is
              transposed nationally. That is why the same setup can be
              consent-exempt in France and contested in Germany. Each page below
              works through one national supervisory authority — CNIL, the DSK
              under §25 TDDDG, and the AEPD — and states the criteria that
              authority actually published, then which architectures satisfy
              them. These pages describe regulator guidance and how Sealmetrics
              is built against it. They are not legal advice, and none of them
              claims a certification Sealmetrics does not hold.
            </p>
          </QuickAnswer>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {countries.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group block bg-white border border-warm-100 rounded-xl p-8 no-underline transition-all hover:border-warm-200 hover:-translate-y-0.5"
              >
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-brand">
                  {c.authority}
                </span>
                <h2 className="text-[21px] font-semibold tracking-[-0.015em] text-ink leading-[1.25] mt-3 mb-3 group-hover:text-brand transition-colors">
                  GDPR analytics in {c.country}
                </h2>
                <p className="text-[15px] leading-[1.55] text-ink-soft">{c.tagline}</p>
                <span className="inline-flex items-center gap-1.5 mt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-brand">
                  Read the analysis →
                </span>
              </Link>
            ))}
          </div>

          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-ink leading-[1.2] mt-16 mb-4">
            Which countries are not covered here?
          </h2>
          <p className="text-[15px] leading-[1.65] text-ink-soft max-w-[70ch]">
            Only France, Germany and Spain have dedicated pages today, because
            those are the three authorities that published analytics-specific
            criteria detailed enough to audit against. The UK is covered
            separately in{" "}
            <Link href="/blog/uk-pecr-analytics-exemption" className="text-brand">
              the PECR analytics exemption
            </Link>
            , and the EU-wide direction of travel in{" "}
            <Link
              href="/blog/eu-digital-omnibus-marketer-guide-2026"
              className="text-brand"
            >
              the Digital Omnibus guide
            </Link>
            . For the legal reasoning that applies across the EU regardless of
            member state, start with{" "}
            <Link href="/consentless-analytics" className="text-brand">
              consentless analytics
            </Link>{" "}
            or run the{" "}
            <Link href="/reg-gap-analysis" className="text-brand">
              regulatory gap analysis
            </Link>{" "}
            against your current stack.
          </p>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="en"
        titleEn={
          <>
            Compliance your DPO{" "}
            <em
              className="italic font-medium"
              style={{ color: "#E8B84B", fontStyle: "italic" }}
            >
              can actually sign.
            </em>
          </>
        }
        titleEs={
          <>
            Cumplimiento que tu DPO{" "}
            <em
              className="italic font-medium"
              style={{ color: "#E8B84B", fontStyle: "italic" }}
            >
              puede firmar.
            </em>
          </>
        }
        ledeEn="Book a demo and we'll walk your DPO through the architecture, the DPA and the regulator criteria for your market."
        ledeEs="Pide una demo y repasamos con tu DPO la arquitectura, el DPA y los criterios del regulador de tu mercado."
      />
    </>
  );
}
