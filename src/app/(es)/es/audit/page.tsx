import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { AuditForm } from "@/components/audit/AuditForm";

export const metadata: Metadata = {
  title: "Auditoría gratuita de medición — SealMetrics",
  description:
    "Responde 7 preguntas en 3 minutos. Te enviamos un análisis personalizado del gap entre lo que mide GA4 y lo que realmente vende tu eCommerce.",
  alternates: {
    canonical: "https://sealmetrics.com/es/audit",
    languages: getAlternatesEs("/audit"),
  },
  openGraph: {
    title: "Auditoría gratuita de medición — SealMetrics",
    description:
      "Descubre cuánto revenue oculta tu analytics. Auditoría personalizada en 24h, escrita por una persona, sin secuencias automatizadas.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    locale: "es_ES",
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Auditoría gratuita" }]}
        locale="es"
      />
      <JsonLd
        data={breadcrumbSchema(
          [{ name: "Auditoría gratuita", url: "/es/audit" }],
          "es"
        )}
      />
      <JsonLd
        data={servicePageSchema({
          name: "Auditoría gratuita de medición · SealMetrics",
          description:
            "Auditoría personalizada del gap entre GA4 y los ingresos reales de tu backend. 7 preguntas, 3 minutos, informe humano en 24h.",
          url: "/es/audit",
          audience: "CMO, Head of Marketing, Director eCommerce",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Auditoría gratuita de medición — SealMetrics",
          description:
            "Responde 7 preguntas en 3 minutos. Te enviamos un análisis personalizado del gap entre lo que mide GA4 y lo que realmente vende tu eCommerce.",
          url: "https://sealmetrics.com/es/audit",
          author: {
            "@type": "Organization",
            name: "SealMetrics",
            url: "https://sealmetrics.com",
          },
          publisher: {
            "@type": "Organization",
            name: "SealMetrics",
            url: "https://sealmetrics.com",
          },
        }}
      />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-12">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <span className="eyebrow mb-5">Auditoría gratuita de medición</span>
          <h1 className="h-display mt-5">
            Descubre cuánto revenue oculta <em>tu analytics.</em>
          </h1>
          <p
            className="text-ink-soft mt-7 leading-[1.55] max-w-[60ch]"
            style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
          >
            Responde 7 preguntas y te enviamos un análisis personalizado del gap
            entre lo que mide GA4 y lo que realmente vende tu eCommerce. Escrito
            por una persona y entregado en 24h — sin secuencias automatizadas.
          </p>
          <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-ink-soft font-semibold mt-6">
            3 minutos · sin instalar nada
          </p>
          <p className="text-[13px] text-ink-soft mt-4">
            Por el equipo de <span itemProp="author">SealMetrics</span>
          </p>
        </div>
      </section>

      <section className="bg-white border-t border-warm-100 py-16 md:py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <AuditForm locale="es" />
          <p className="text-center text-[13px] text-ink-soft mt-6">
            Tus datos se quedan en la UE. No compartimos los envíos con
            terceros.
          </p>
        </div>
      </section>
    </>
  );
}
