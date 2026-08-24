import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { RelatedGlossaryTerms } from "@/components/ui/RelatedGlossaryTerms";
import { definedTermSchema, breadcrumbSchema } from "@/lib/schema";
import { glossaryHref } from "@/lib/content/glossary-es";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { CommercialModule } from "@/components/ui/CommercialModule";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "¿Qué es el muestreo de datos? — Glosario Sealmetrics",
  description: "El muestreo ocurre cuando la analítica analiza un subconjunto de datos y extrapola. Cómo afecta a los informes de GA4 y a tus decisiones.",
  openGraph: {
    title: "¿Qué es el muestreo de datos en analítica?",
    description: "Analizar un subconjunto de datos y extrapolar. Cómo afecta a los informes de GA4.",
    url: "https://sealmetrics.com/es/glossary/data-sampling/",
    siteName: "Sealmetrics",
    locale: "es_ES",
    type: "article",
    images: [ogImage("/es/glossary/data-sampling/")],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "¿Qué es el muestreo de datos en analítica?",
    description: "Analizar un subconjunto de datos y extrapolar. Cómo afecta a los informes de GA4.",
    images: [ogImage("/es/glossary/data-sampling/")],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/glossary/data-sampling/",
    languages: getAlternatesEs("/glossary/data-sampling"),
  },
};

export default function DataSamplingEsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Glosario", href: "/es/glossary" }, { label: "Muestreo de datos" }]} locale="es" />
      <JsonLd data={definedTermSchema({ name: "Muestreo de datos", description: "Técnica por la que una herramienta de analítica analiza un subconjunto de datos y extrapola el resultado.", url: "/es/glossary/data-sampling", related: [{ name: "Pérdida de datos en analítica", url: glossaryHref("data-loss-in-analytics", "es") }, { name: "Tracking de eventos", url: glossaryHref("event-tracking", "es") }, { name: "Atribución de ingresos", url: glossaryHref("revenue-attribution", "es") }, { name: "Modelo de atribución", url: glossaryHref("attribution-model", "es") }] })} />
      <JsonLd data={breadcrumbSchema([{ name: "Glosario", url: "/es/glossary" }, { name: "Muestreo de datos", url: "/es/glossary/data-sampling" }], "es")} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">Definición</span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">¿Qué es el muestreo de datos en analítica?</h1>
        </header>
        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <p className="text-[1rem] text-text-primary font-medium">
              Técnica por la que una herramienta de analítica analiza un subconjunto de los datos y extrapola el resultado al conjunto completo. Introduce un error de estimación que crece con el grado de muestreo aplicado.
            </p>
          </div>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Cómo funciona el muestreo en GA4</h2>
          <p>
            Cuando creas informes de exploración en GA4 que consultan grandes volúmenes, Google puede analizar solo una parte de los eventos y usar métodos estadísticos para estimar el resultado completo. La versión gratuita de GA4 tiene umbrales de muestreo más bajos que GA360, así que el muestreo se activa antes para la mayoría de negocios.
          </p>
          <p>
            Google indica cuándo el muestreo está activo mediante un icono de escudo en los informes de exploración. Los informes estándar usan una metodología distinta que Google llama «datos combinados», que mezcla dato observado y dato modelado.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Por qué importa</h2>
          <p>
            Para tendencias generales el muestreo puede ser aceptable. Para análisis concretos —rendimiento de campaña por segmento, análisis de rutas de conversión, <Link href={glossaryHref("revenue-attribution", "es")} className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">atribución de ingresos</Link> por creatividad— el margen de error puede llevar a conclusiones equivocadas y a repartir mal el presupuesto.
          </p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">La alternativa: analítica a resolución completa</h2>
          <p>
            Las plataformas de <Link href={glossaryHref("cookieless-analytics", "es")} className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">analítica sin cookies</Link> como Sealmetrics registran cada sesión individualmente y sin aplicar muestreo. Cuando ves 72.847 visitantes, esa cifra representa 72.847 sesiones reales, no una estimación estadística.
          </p>
        </div>

        <CommercialModule locale="es" hook="Sealmetrics nunca muestrea: cada informe se calcula sobre cada sesión, no sobre una estimación estadística. Mira tus informes a resolución completa." />

        <RelatedGlossaryTerms slug="data-sampling" locale="es" />

        <div className="mt-10 pt-6 border-t border-warm-100">
          <p className="text-[0.85rem] text-text-tertiary">
            Más: <Link href="/es/blog/ga4-data-sampling-problem" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">El problema del muestreo en GA4</Link> &middot; <Link href="/es/product" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">La plataforma Sealmetrics</Link>
          </p>
        </div>
      </div>
    </article>
    </>
  );
}
