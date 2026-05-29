import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, comparisonPageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVsData } from "@/components/sections/v3/VsData";

export const metadata: Metadata = {
  title: "SealMetrics vs Matomo — Cookieless by design, no devops",
  description:
    "Matomo is open-source and EU-friendly, but cookies are still default and self-hosting has real ops cost. SealMetrics is cookieless by design, fully managed, with a modern AI-native stack.",
  openGraph: {
    title: "SealMetrics vs Matomo — Cookieless by design, no devops",
    description:
      "Matomo's default is cookies + banner. SealMetrics is cookieless across the whole product, EU-hosted, with native MCP and BigQuery — no devops required.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/vs/matomo",
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
          name: "SealMetrics vs Matomo",
          description:
            "Side-by-side comparison: SealMetrics versus Matomo on architecture (cookieless by design vs cookies-by-default), self-hosting cost, modern stack (MCP, BigQuery, real-time) and EU compliance.",
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
        titleEn="See every SealMetrics comparison"
        titleEs="Ver cada comparativa de SealMetrics"
        pages={[
          { href: "/vs/piwik-pro", title: "vs Piwik PRO", desc: "Commercial Matomo fork — same cookie origin." },
          { href: "/vs-ga4", title: "vs Google Analytics 4", desc: "The free default — and its EU blind spot." },
          { href: "/vs/ga360", title: "vs Google Analytics 360", desc: "Enterprise data without the $150K invoice." },
        ]}
      />
      <LogosStrip />
    </>
  );
}
