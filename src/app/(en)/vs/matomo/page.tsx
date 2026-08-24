import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, comparisonPageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVsData } from "@/components/sections/v3/VsData";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Sealmetrics vs Matomo — Cookieless by design, no devops",
  description:
    "Matomo is open-source and EU-friendly, but cookies are default and self-hosting costs. Sealmetrics is cookieless by design, fully managed and AI-native.",
  openGraph: {
    title: "Sealmetrics vs Matomo — Cookieless by design, no devops",
    description:
      "Matomo's default is cookies + banner. Sealmetrics is cookieless across the whole product, EU-hosted, with native MCP and BigQuery — no devops required.",
    type: "website",
    images: [ogImage("/vs/matomo/")],
    url: "https://sealmetrics.com/vs/matomo/",
    siteName: "Sealmetrics",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Sealmetrics vs Matomo — Cookieless by design, no devops",
    description: "Matomo's default is cookies + banner. Sealmetrics is cookieless across the whole product, EU-hosted, with native MCP and BigQuery — no devops required.",
    images: [ogImage("/vs/matomo/")],
  },
  alternates: {
    canonical: "https://sealmetrics.com/vs/matomo/",
    languages: getAlternates("/vs/matomo"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Matomo" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "vs Matomo", url: "/vs/matomo" }])} />
      <JsonLd
        data={comparisonPageSchema({
          name: "Sealmetrics vs Matomo",
          description:
            "Side-by-side comparison: Sealmetrics versus Matomo on architecture (cookieless by design vs cookies-by-default), self-hosting cost, modern stack (MCP, BigQuery, real-time) and EU compliance.",
          url: "/vs/matomo",
          competitor: { name: "Matomo", url: "https://matomo.org/" },
          datePublished: "2026-05-06",
          dateModified: "2026-05-29",
          author: { name: "Rafa Jiménez", url: "/authors/rafa-jimenez" },
          criteria: [
            "Cookies on by default vs cookieless by design",
            "Self-hosting operational cost (TCO)",
            "Cookieless mode feature parity",
            "EU traffic captured with consent banner",
            "MCP / AI-native interface",
            "BigQuery export availability",
            "Real-time latency",
          ],
        })}
      />
      <VsComparisonV3 data={getVsData("matomo", "en")} dateModified="2026-05-29" />
      <RelatedPagesV3
        locale="en"
        eyebrow="Other comparisons"
        titleEn="See every Sealmetrics comparison"
        titleEs="Ver cada comparativa de Sealmetrics"
        pages={[
          { href: "/vs/piwik-pro", title: "vs Piwik PRO", desc: "Commercial Matomo fork — same cookie origin." },
          { href: "/vs-ga4", title: "vs Google Analytics 4", desc: "The free default — and its EU blind spot." },
          { href: "/vs/ga360", title: "vs Google Analytics 360", desc: "Enterprise data without the $150K invoice." },
        ]}
      />
      <LogosStrip />
      <section className="bg-warm-white border-t border-warm-100 py-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <QuickAnswer>
            <p>
              Sealmetrics vs Matomo: Matomo is an open-source analytics platform, EU-friendly and self-hostable, but cookies remain the default and self-hosting carries real operational cost. Sealmetrics is a fully managed, cookieless analytics platform that captures 100% of inbound traffic without a consent banner and attributes each conversion last-click on observed events, EU-hosted in Dublin, from &euro;499/month billed annually.
            </p>
            <p>
              The trade-off is completeness and overhead. Matomo&rsquo;s cookieless configuration limits what it can measure and still leaves you running infrastructure, updates and scaling; its cookie mode needs a consent banner and loses rejected traffic. Sealmetrics measures the full 100% with a lightweight first-party pixel, nothing to self-host, and a modern AI-native stack — LENS AI and an MCP server — on top of complete data.
            </p>
          </QuickAnswer>
        </div>
      </section>
    </>
  );
}
