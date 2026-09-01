import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { AuditForm } from "@/components/audit/AuditForm";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Auditoría gratuita de medición — Sealmetrics",
  description:
    "Responde 7 preguntas en 3 minutos. Te enviamos un análisis personalizado de la brecha entre lo que mide tu herramienta de medición actual y lo que realmente vende tu comercio electrónico.",
  alternates: {
    canonical: "https://sealmetrics.com/es/audit/",
    languages: getAlternatesEs("/audit"),
  },
  openGraph: {
    title: "Auditoría gratuita de medición — Sealmetrics",
    description:
      "Descubre cuántos ingresos oculta tu medición. Auditoría personalizada en 24h, escrita por una persona, sin secuencias automatizadas.",
    type: "website",
    images: [ogImage("/es/audit/")],
    locale: "es_ES",
    url: "https://sealmetrics.com/es/audit/",
    siteName: "Sealmetrics",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Auditoría gratuita de medición — Sealmetrics",
    description: "Descubre cuántos ingresos oculta tu medición. Auditoría personalizada en 24h, escrita por una persona, sin secuencias automatizadas.",
    images: [ogImage("/es/audit/")],
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
          name: "Auditoría gratuita de medición · Sealmetrics",
          description:
            "Auditoría personalizada de la brecha entre tu herramienta de medición actual y los ingresos reales de tu backend. 7 preguntas, 3 minutos, informe humano en 24h.",
          url: "/es/audit",
          audience: "CMO, Head of Marketing, Director de comercio electrónico",
        })}
      />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-12">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <span className="eyebrow mb-5">Auditoría gratuita de medición</span >
          <h1 className="h-display mt-5">
            Descubre cuántos ingresos oculta <em>tu medición.</em>
          </h1>
          <p
            className="text-ink-soft mt-7 leading-[1.55] max-w-[60ch]"
            style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
          >
            Responde 7 preguntas y te enviamos un análisis personalizado de la brecha
            entre lo que mide tu herramienta de medición actual y lo que realmente vende tu comercio electrónico. Escrito
            por una persona y entregado en 24h — sin secuencias automatizadas.
          </p>
          <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-ink-soft font-semibold mt-6">
            3 minutos · sin instalar nada
          </p>
        </div>
      </section>

      {/* Copy editorial nativa, no traducción del inglés: la página tenía 101
          palabras visibles alrededor de un formulario. */}
      <section className="bg-paper border-t border-hairline py-16 md:py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="text-[32px] md:text-[40px] font-[790] tracking-[-0.045em] leading-[0.95] text-ink">
            Qué recibes
          </h2>
          <p className="text-ink-soft mt-6 font-semibold text-[18px] max-w-[62ch]">
            Resumen: Una estimación de la brecha de ingresos causada por la pérdida de datos en tu herramienta de medición actual.
          </p>
          <p className="text-ink-soft mt-6 leading-[1.6] text-[17px] max-w-[62ch]">
            En Europa, tu herramienta de medición actual reporta en torno al 13% de los visitantes de un sitio,
            y solo un 16% aproximadamente llega con la fuente de tráfico todavía
            asociada. Cada decisión de inversión tomada sobre esa base se toma
            sobre una muestra que nadie eligió. La auditoría pone un número a tu
            versión concreta de esa brecha antes de que instales nada.
          </p>
          <ul className="mt-8 space-y-4 text-[16px] leading-[1.6] text-ink-soft">
            <li className="flex gap-3">
              <span className="text-acid-ink shrink-0">—</span >
              <span >
                Una estimación del tráfico y los ingresos que tu configuración
                actual no atribuye, contrastada con las cifras de backend que nos
                facilites.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-acid-ink shrink-0">—</span >
              <span >
                Qué canal tuyo tiene más papeletas de estar infravalorado, y
                cuánto cuesta eso con tu inversión actual.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-acid-ink shrink-0">—</span >
              <span >
                Una lectura escrita de si tu montaje de consentimiento y píxeles
                está generando exposición legal además de la brecha de medición.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-acid-ink shrink-0">—</span >
              <span >
                Escrito por una persona en 24 horas. Sin secuencia de correos,
                sin scoring automático y sin llamada obligatoria para recibirlo.
              </span>
            </li>
          </ul>
          <p className="mt-8 text-[13px] text-ink-soft/60 italic">
            Fuente: Estudios de medición Sealmetrics
          </p>

          <h2 className="text-[32px] md:text-[40px] font-[790] tracking-[-0.045em] leading-[0.95] text-ink mt-16">
            Qué no es
          </h2>
          <p className="text-ink-soft mt-6 font-semibold text-[18px] max-w-[62ch]">
            Resumen: No es una auditoría técnica de etiquetas ni una demo de producto.
          </p>
          <p className="text-ink-soft mt-6 leading-[1.6] text-[17px] max-w-[62ch]">
            Este proceso requiere 0 minutos de configuración técnica previa.
          </p>
          <ul className="mt-8 space-y-4 text-[16px] leading-[1.6] text-ink-soft">
            <li className="flex gap-3">
              <span className="text-acid-ink shrink-0">—</span >
              <span >
                No es un escaneo técnico de etiquetas: para eso está la{" "}
                <Link href="/free-audit/" className="underline">
                  auditoría gratuita de píxeles y RGPD
                </Link>
                .
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-acid-ink shrink-0">—</span >
              <span >
                No es una demo de producto: si quieres ver la plataforma, reserva una{" "}
                <Link href="/es/demo/" className="underline">
                  demo
                </Link>{" "}
                directamente.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-acid-ink shrink-0">—</span >
              <span >No es una reescritura de tu plan de medición.</span >
            </li>
          </ul>
          <p className="mt-8 text-[13px] text-ink-soft/60 italic">
            Fuente: Servicios Sealmetrics
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
