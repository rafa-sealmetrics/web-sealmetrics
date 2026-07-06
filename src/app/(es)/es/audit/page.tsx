import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { AuditForm } from "@/components/audit/AuditForm";

export const metadata: Metadata = {
  title: "Consentless Analytics: auditoría gratuita de medición — SealMetrics",
  description:
    "¿GA4 te oculta el 25-40% del revenue? Auditoría consentless analytics en 3 min: detectamos el gap entre tus pedidos reales y lo que mide tu analytics. Informe en 24h.",
  alternates: {
    canonical: "https://sealmetrics.com/es/audit",
    languages: getAlternatesEs("/audit"),
  },
  openGraph: {
    title: "Consentless Analytics: auditoría gratuita de medición — SealMetrics",
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

      <section className="bg-warm-white border-t border-warm-100 py-16 md:py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-semibold text-ink mb-8">¿Por qué GA4 oculta revenue?</h2>
          <p className="text-ink-soft leading-[1.6] mb-4">
            GA4 se basa en JavaScript del lado del cliente. Cada vez que un
            usuario bloquea cookies, usa un ad-blocker o simplemente cierra el
            navegador antes de que se dispare el evento, la conversión
            desaparece de tus informes. Estudios internos con eCommerce europeos
            muestran que entre el 25 % y el 40 % de los pedidos nunca llegan a
            registrarse en GA4.
          </p>
          <p className="text-ink-soft leading-[1.6] mb-4">
            El problema no es tu configuración: es estructural. GA4 fue diseñado
            para medir audiencias, no para auditar ingresos. Cuando lo usas como
            fuente de verdad para decisiones de inversión en paid media, estás
            tomando decisiones sobre datos incompletos.
          </p>
          <p className="text-ink-soft leading-[1.6]">
            Nuestra auditoría cruza los eventos de GA4 con los pedidos reales de
            tu backend y te muestra el gap exacto: cuántos pedidos se pierden,
            en qué canales es mayor la brecha y qué campañas están siendo
            penalizadas injustamente por falta de atribución.
          </p>
        </div>
      </section>

      <section className="bg-white border-t border-warm-100 py-16 md:py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-semibold text-ink mb-8">Preguntas frecuentes</h2>
          <dl className="space-y-8">
            <div>
              <dt className="font-semibold text-ink mb-2">¿Necesito instalar algún código o dar acceso a mi tienda?</dt>
              <dd className="text-ink-soft leading-[1.6]">
                No. El formulario recoge información sobre tu stack de analytics
                y tu plataforma de eCommerce. No pedimos acceso a GA4, ni a tu
                back-office, ni instalas ningún script. Con las respuestas que
                nos das podemos identificar los puntos de fuga más habituales en
                tu configuración.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink mb-2">¿Qué recibo exactamente?</dt>
              <dd className="text-ink-soft leading-[1.6]">
                En menos de 24 horas recibes un informe escrito por una persona
                —no una plantilla automática— con los principales gaps detectados
                en tu setup, una estimación del porcentaje de pedidos no
                atribuidos y recomendaciones concretas para recuperar esa
                visibilidad.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink mb-2">¿Funciona si no uso GA4?</dt>
              <dd className="text-ink-soft leading-[1.6]">
                Sí. La auditoría cubre también setups basados en Google Analytics
                Universal (ya descontinuado), Matomo, Mixpanel o medición
                exclusiva por servidor. Indicarlo en el formulario nos permite
                ajustar el análisis a tu caso concreto.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink mb-2">¿Tienen acceso a mis datos de pedidos?</dt>
              <dd className="text-ink-soft leading-[1.6]">
                No. El análisis se basa únicamente en las respuestas del
                formulario. No conectamos con tu plataforma de eCommerce ni
                procesamos datos de tus clientes. Todos los envíos se almacenan
                en servidores dentro de la UE.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
