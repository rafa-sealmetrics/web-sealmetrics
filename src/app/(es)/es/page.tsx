import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  organizationSchema,
  softwareApplicationSchema,
  claimReviewSchema,
  quotationSchema,
} from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import {
  HeroV3Es,
  LogosStripEs,
  LogosSecondaryEs,
  ValueProp4MinEs,
  CompareSectionEs,
  FeaturedCaseEs,
} from "@/components/sections/v3/HomeV3Es";
import {
  IndustriesBuiltForEs,
  ComparatorGA4Es,
  HowItWorksV3Es,
  CredentialsV3Es,
  PricingV3Es,
  FinalCtaV3Es,
} from "@/components/sections/v3/HomeV3EsPart2";
import { FaqV3Es } from "@/components/sections/v3/FaqV3Es";
import { WhatIsV3 } from "@/components/sections/v3/WhatIsV3";

export const metadata: Metadata = {
  title: "SealMetrics — Ve el 50% de tu tráfico que GA4 no ve",
  description:
    "SealMetrics es la fuente neutral de verdad que marca, finanzas y agencias firman — capturada sobre el 100% de tus visitantes, no una estimación muestreada.",
  openGraph: {
    title: "SealMetrics — Ve el 50% de tu tráfico que GA4 no ve",
    description:
      "La fuente neutral de verdad que marca, finanzas y agencias aceptan. Sin cookies, 100% capturado, alojado en Dublín.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es",
    languages: getAlternatesEs("/"),
  },
};

export default function HomeEs() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={claimReviewSchema({
        claimReviewed: "El 50% del tráfico era invisible para el stack de medición previo.",
        datePublished: "2026-04-01",
        url: "/es",
        itemReviewedName: "Auditoría interna de grupo hotelero sobre visibilidad de tráfico",
        itemReviewedAuthor: "Grupo hotelero europeo",
      })} />
      <JsonLd data={claimReviewSchema({
        claimReviewed: "El 25% de las reservas reales del CRM no aparecían en los reportes de marketing.",
        datePublished: "2026-04-01",
        url: "/es",
        itemReviewedName: "Hallazgo de auditoría sobre brecha CRM-marketing",
        itemReviewedAuthor: "Grupo hotelero europeo",
      })} />
      <JsonLd data={quotationSchema({
        text: "Los datos que entrega SealMetrics son agnósticos, neutrales y sin sesgo. No hay caja negra.",
        spokenBy: "Equipo de marketing",
        spokenByRole: "Grupo hotelero europeo",
        url: "/es",
      })} />
      <JsonLd data={quotationSchema({
        text: "Ya no es una herramienta que está al lado del proceso. Es la herramienta que nos da el dato real — y con la que tomamos decisiones.",
        spokenBy: "Head of eCommerce",
        spokenByRole: "Cadena hotelera · España",
        url: "/es",
      })} />
      <JsonLd data={quotationSchema({
        text: "Hemos usado SealMetrics como 'vale, nos creemos este dato.' Es nuestra fuente única de verdad.",
        spokenBy: "Founder & CEO",
        spokenByRole: "Marca DTC de café",
        url: "/es",
      })} />
      <HeroV3Es />
      <LogosStripEs />
      <WhatIsV3 locale="es" muted />
      <ValueProp4MinEs />
      <CompareSectionEs />
      <FeaturedCaseEs />
      <IndustriesBuiltForEs />
      <ComparatorGA4Es />
      <HowItWorksV3Es />
      <LogosSecondaryEs />
      <CredentialsV3Es />
      <PricingV3Es />
      <FaqV3Es />
      <FinalCtaV3Es />
    </>
  );
}
