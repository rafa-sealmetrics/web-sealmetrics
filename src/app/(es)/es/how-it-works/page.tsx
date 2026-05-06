import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import { breadcrumbSchema, speakableWebPageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import { WhatIsV3 } from "@/components/sections/v3/WhatIsV3";
import {
  HowItWorksHeroV3,
  ArchitectureV3,
  ImplementationStepsV3,
  HowItWorksFaqV3,
} from "@/components/sections/v3/HowItWorksV3Sections";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Cómo funciona SealMetrics — Sin cookies y UE",
  description:
    "Pixel first-party de 846 bytes. Conteo de eventos anónimo en servidor. Almacenamiento en Dublín. RGPD por arquitectura, no por capa de compliance.",
  openGraph: {
    title: "Cómo funciona SealMetrics — Sin cookies y UE",
    description:
      "Tres capas. Un pipeline. Cómo SealMetrics cuenta el 100% de tu tráfico de forma anónima, sin cookies ni seguimiento de usuarios.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/how-it-works",
    languages: getAlternatesEs("/how-it-works"),
  },
};

export default function HowItWorksPageEs() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Cómo funciona" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Cómo funciona", url: "/es/how-it-works" }])} />
      <JsonLd data={speakableWebPageSchema({ url: "/es/how-it-works", name: "Cómo funciona — SealMetrics" })} />

      <HowItWorksHeroV3 locale="es" />
      <TldrBlock
        label="En resumen"
        answer={
          <>SealMetrics funciona en tres capas: un <strong>pixel first-party de 846 bytes</strong> registra cada pageview directamente desde tu dominio (sin cookies de terceros, sin impacto de ad-blockers); un <strong>pipeline server-side en Dublín</strong> cuenta eventos de forma anónima y atribuye cada conversión last-click a nivel de canal; una <strong>capa de reporting + API</strong> expone totales agregados a dashboards, warehouses y agentes IA. Instalación en 15 minutos, calibración completa en una semana.</>
        }
        bullets={[
          <>Un tag JavaScript — funciona en cualquier CMS, SPA o headless.</>,
          <>Conteos agregados y anónimos — sin identificadores de usuario, sin journeys por visitante, sin session stitching.</>,
          <>RGPD por arquitectura (sin cookies, sin PII, procesamiento sólo en UE).</>,
          <>En paralelo con GA4 desde el día 1 — no requiere migración.</>,
        ]}
      />
      <LogosStripEs />
      <WhatIsV3 locale="es" muted />
      <ArchitectureV3 locale="es" />
      <ImplementationStepsV3 locale="es" />
      <HowItWorksFaqV3 locale="es" />
      <FinalCtaSharedV3
        locale="es"
        titleEn={<>Ready to see your <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>complete data?</em></>}
        titleEs={<>¿Listo para ver tus <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>datos completos?</em></>}
        ledeEn="Book a 30-minute walkthrough with the founder."
        ledeEs="Reserva 30 min con el founder. Pasamos tu web por la calculadora de gap en directo."
      />
    </>
  );
}
