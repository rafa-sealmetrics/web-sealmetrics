import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import {
  breadcrumbSchema,
  faqSchema,
  verticalSoftwareApplicationSchema,
} from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import { VerticalPageV3 } from "@/components/sections/v3/VerticalPageV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVerticalData } from "@/components/sections/v3/VerticalsData";

export const metadata: Metadata = {
  title: "Analítica sin cookies para hoteles — SealMetrics",
  description:
    "Analítica sin cookies para hoteles: cuadra la atribución de reservas directas con tu PMS, recupera el 25% de reservas invisibles, consolida portfolios multi-propiedad. Alojado en UE.",
  openGraph: {
    title: "Analítica sin cookies para hoteles — SealMetrics",
    description:
      "Analítica first-party sin consentimiento para grupos hoteleros. Reconcilia reservas directas con tu PMS y atribuye ingresos de meta-search sin cajas negras de OTAs.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/for/hotels",
    languages: getAlternatesEs("/for/hotels"),
  },
};

const seoFaqs = [
  {
    question: "¿Qué es analítica sin cookies para hoteles?",
    answer:
      "La analítica sin cookies para hoteles cuenta los eventos del recorrido de reserva — landings de meta-search, referrals de OTAs, confirmaciones de booking — sin cookies, banners de consentimiento ni identificadores personales. Cada reserva se atribuye last-click a la fuente en esa pageview, los totales agregados cuadran con el PMS (Mews, Cloudbeds, Opera), y no se trackea a ningún huésped individual.",
  },
  {
    question: "¿Cómo ayuda la analítica sin cookies a recuperar reservas invisibles?",
    answer:
      "De media, el 25% de las reservas directas registradas en el PMS no aparecen bien atribuidas en GA4 por rechazo de consentimiento en móvil (Safari), expiración de cookies por ITP y rupturas de ruta en OTAs. La analítica sin cookies cuenta cada pageview de forma anónima en servidor, captura la fuente de tráfico en cada pageview de reserva y agrega las reservas por canal — sin tracking por huésped.",
  },
  {
    question: "¿SealMetrics funciona con múltiples propiedades hoteleras?",
    answer:
      "Sí. La vista de portfolio está incluida en cada plan. Cada propiedad corre su propio tracking y los datos se consolidan a nivel de marca/grupo — ideal para cadenas con 5+ propiedades en varios países.",
  },
  {
    question: "¿La analítica sin cookies integra con mi PMS?",
    answer:
      "Sí. Integraciones nativas con Mews, Cloudbeds y Opera; cualquier otro PMS o booking engine custom integra vía REST API. Los ingresos de reservas fluyen automáticamente para atribución real ligada a ingresos.",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para hoteles" }]} locale="es" />
      <JsonLd
        data={breadcrumbSchema(
          [{ name: "Para hoteles", url: "/es/for/hotels" }],
          "es"
        )}
      />
      <JsonLd
        data={verticalSoftwareApplicationSchema({
          vertical: "Hoteles",
          audienceType: "Grupos hoteleros y marcas de viaje europeas",
          description:
            "Analítica sin cookies para hoteles y viaje: atribución de reservas directas cuadrada con el PMS, consolidación multi-propiedad y tracking de touchpoints de meta-search sin cookies.",
          url: "/es/for/hotels",
        })}
      />
      <JsonLd data={faqSchema(seoFaqs)} />

      <VerticalPageV3 data={getVerticalData("hotels", "es")} />

      <TldrBlock
        label="Analítica sin cookies para hoteles"
        answer={
          <>
            La <strong>analítica sin cookies para hoteles</strong> permite a los
            grupos hoteleros cuadrar los totales agregados de reservas directas
            con el PMS sin cookies, banners de consentimiento ni gaps de
            ad-blockers. SealMetrics cuenta de forma anónima cada landing de
            meta-search, cada visita móvil Safari y cada evento de reserva —
            cada reserva atribuida last-click a nivel de canal y consolidada
            entre propiedades para reporting de ingresos de portfolio.
          </>
        }
        bullets={[
          <>Recupera ~25% de reservas del CRM normalmente invisibles a GA4.</>,
          <>Totales agregados por canal para meta-search (Google Hotel Ads, Trivago) sin dependencia de cajas negras de OTAs.</>,
          <>Integraciones PMS nativas: Mews, Cloudbeds, Opera; REST API para cualquier otro stack.</>,
          <>Sin tracking de journey por huésped — solo conteos agregados, defendibles bajo RGPD.</>,
        ]}
      />

      <RelatedPagesV3
        locale="es"
        eyebrow="Explora también"
        titleEn="Related roles and industries"
        titleEs="Roles e industrias relacionadas"
        pages={[
          {
            href: "/glossary/cookieless-analytics",
            title: "Qué es la analítica sin cookies",
            desc: "Definición, cómo funciona, por qué importa.",
          },
          {
            href: "/es/for/ecommerce",
            title: "Para eCommerce",
            desc: "Shopify, Magento y atribución de checkout DTC.",
          },
          {
            href: "/es/for/media",
            title: "Para medios",
            desc: "Audiencias con alto uso de ad-blockers.",
          },
        ]}
      />
      <LogosStripEs />
    </>
  );
}
