import type { Metadata } from "next";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import { LandingHeader, LandingFooter } from "@/components/landing/LandingChrome";
import {
  Hero,
  Symptoms,
  RoasMath,
  Mechanism,
  WhatWeDo,
  Proof,
  PrivacyByDesign,
  Tradeoff,
  Machine,
  Implementation,
  UseCases,
  PriceDoors,
  Close,
} from "@/components/landing/RoasRealSections";

/* Landing de conversión para tráfico frío de pago (eCommerce ES).
   noindex/follow por decisión: no targetea keyword, no tiene enlaces
   entrantes internos y competiría con /es/ y /es/consentless-analytics.
   Al ir fuera del índice queda exenta de las reglas de cluster e
   interlinking — una sola decisión por página.

   Vive en el grupo (lp) para no heredar el header de navegación ni el
   footer del site: en tráfico de pago cada enlace de salida es una fuga. */
export const metadata: Metadata = {
  title: "Tu ROAS real es mayor del que crees — SealMetrics",
  description:
    "Entre el 25% y el 45% de tus ventas nunca llegan a tu analítica. Mide el 100% sin cookies ni consentimiento y recupera el ROAS que ya estabas generando.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Tu ROAS real es mayor del que crees",
    description:
      "Entre el 25% y el 45% de tus ventas nunca llegan a tu herramienta de analítica. Ocurrieron, las cobraste, y el informe con el que decides no las cuenta.",
    type: "website",
    locale: "es_ES",
    images: ["https://sealmetrics.com/og-image.png"],
  },
};

export default function RoasRealPage() {
  return (
    <>
      <LandingHeader ctaHref="/es/audit/" ctaLabel="Auditoría gratuita" />
      <main id="main-content">
        <Hero />
        <Symptoms />
        {/* La prueba social va justo detrás del síntoma: quien se reconoce en
            las tres frases necesita ver acto seguido quién más lo tenía. */}
        <LogosStripEs />
        <RoasMath />
        <Mechanism />
        <WhatWeDo />
        <Proof />
        <PrivacyByDesign />
        <Tradeoff />
        <Machine />
        <Implementation />
        <UseCases />
        <PriceDoors />
        <Close />
      </main>
      <LandingFooter locale="es" />
    </>
  );
}
