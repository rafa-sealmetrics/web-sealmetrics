import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { breadcrumbSchema, comparisonPageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVsData } from "@/components/sections/v3/VsData";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Sealmetrics vs Piwik PRO — Hosting UE más captura completa",
  description: "Piwik PRO está alojado en UE pero sigue con cookies. Sealmetrics resuelve la arquitectura de raíz, no solo el hosting.",
  openGraph: {
    title: "Sealmetrics vs Piwik PRO — Hosting UE más captura completa",
    description: "Piwik PRO está alojado en UE pero sigue con cookies. Sealmetrics resuelve la arquitectura de raíz, no solo el hosting.",
    type: "website",
    images: [ogImage("/es/vs/piwik-pro/")],
    url: "https://sealmetrics.com/es/vs/piwik-pro/",
    siteName: "Sealmetrics",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Sealmetrics vs Piwik PRO — Hosting UE más captura completa",
    description: "Piwik PRO está alojado en UE pero sigue con cookies. Sealmetrics resuelve la arquitectura de raíz, no solo el hosting.",
    images: [ogImage("/es/vs/piwik-pro/")],
  },
  alternates: { canonical: "https://sealmetrics.com/es/vs/piwik-pro/", languages: getAlternatesEs("/vs/piwik-pro") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Piwik PRO" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "vs Piwik PRO", url: "/es/vs/piwik-pro" }])} />
      <JsonLd data={comparisonPageSchema({
        name: "Sealmetrics vs Piwik PRO",
        description: "Comparativa lado a lado: Sealmetrics vs Piwik PRO en arquitectura, hosting UE y dependencia de consentimiento.",
        url: "/es/vs/piwik-pro",
        competitor: { name: "Piwik PRO", url: "https://piwik.pro/" },
        datePublished: "2026-04-15",
        dateModified: "2026-08-27",
        author: { name: "Rafa Jiménez", url: "/es/authors/rafa-jimenez" },
        criteria: [
          "Cookies vs arquitectura sin cookies",
          "Banner de consentimiento requerido",
          "Tráfico UE capturado (con banner vs sin banner)",
          "Residencia y postura Schrems II",
          "Pricing para eCommerce enterprise",
          "Interfaz MCP / IA nativa",
          "Export BigQuery / warehouse",
        ],
      })} />
      <VsComparisonV3 data={getVsData("piwik-pro", "es")} dateModified="2026-08-27" />
      <RelatedPagesV3
        locale="es"
        eyebrow="Otras comparativas"
        titleEn="See every Sealmetrics comparison"
        titleEs="Ver cada comparativa de Sealmetrics"
        pages={[
        { href: "/es/vs-ga4", title: "vs Google Analytics 4", desc: "El default gratis — y su punto ciego UE." },
        { href: "/es/vs/ga360", title: "vs Google Analytics 360", desc: "Datos enterprise sin factura de 150K$." },
        { href: "/es/vs/adobe-analytics", title: "vs Adobe Analytics", desc: "Potencia enterprise, cero overhead." }
      ]}
      />
      <LogosStripEs />
      
      <section className="bg-warm-white border-t border-warm-100 py-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <QuickAnswer label="Respuesta rápida">
            <p>
              Sealmetrics vs Piwik PRO: Piwik PRO es una plataforma de analítica enterprise con sede en la UE y una governance de privacidad sólida, pero sigue siendo basada en cookies por defecto — así que depende de un banner de consentimiento y pierde el tráfico que lo rechaza. Sealmetrics es cookieless por diseño: mide el 100% del tráfico entrante sin banner y atribuye cada conversión last-click sobre eventos observados, alojada en la UE (Dublín), desde 499€/mes con facturación anual.
            </p>
            <p>
              Ambas son GDPR-first y alojadas en la UE, así que la decisión real es la completitud de la medición. En modo consentimiento, Piwik PRO mide solo la parte consentida — típicamente el 40–60% del tráfico UE — mientras Sealmetrics mide el 100% completo porque no almacena datos personales y no necesita consentimiento. Para equipos que ya eligieron Piwik PRO por compliance, Sealmetrics cierra el gap de pérdida de dato restante sin añadir dependencia de banner de cookies.
            </p>
          </QuickAnswer>
        </div>
      </section>
    </>
  );
}
