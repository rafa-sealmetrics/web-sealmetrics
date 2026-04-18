import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "SealMetrics para CTOs — Sin cookies, en la UE",
  description:
    "Script de 846 bytes, carga <50ms, infraestructura 100% UE, sin cookies ni PII. La plataforma de analítica que tu equipo de ingeniería sí aprobará.",
  openGraph: {
    title: "SealMetrics para CTOs",
    description:
      "Script de 846 bytes, infraestructura 100% UE, sin cookies. Analítica que tu equipo de ingeniería aprobará.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/for/cto",
    languages: getAlternatesEs("/for/cto"),
  },
};

export default function ForCTOPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para CTOs" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Para CTOs", url: "/es/for/cto" }], "es")} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics para CTOs", description: "Script de 846 bytes, carga <50ms, infraestructura 100% UE, sin cookies ni PII. La plataforma de analítica que tu equipo de ingeniería sí aprobará.", url: "/es/for/cto", audience: "Directores de Tecnología (CTOs)" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Para CTOs
            </span>
            <h1 className="headline-hero mb-8">
              Analítica que tu equipo de ingeniería no va a rechazar.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Un script de 846 bytes. Carga por debajo de 50ms. Infraestructura
              exclusivamente en la UE. Sin cookies, sin PII, sin dolores de
              cabeza de gestión de consentimiento. Una línea de código para
              instalarlo, cero mantenimiento continuo por parte de ingeniería.
            </p>
          </div>
        </div>
      </section>

      {/* Technical specs */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Especificaciones técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                title: "Huella mínima",
                specs: [
                  "Tamaño del script: 846 bytes gzipped",
                  "Tiempo de carga: <50ms en 3G",
                  "Sin dependencias externas",
                  "Sin impacto en Core Web Vitals",
                  "Carga asíncrona, no bloqueante",
                ],
              },
              {
                title: "Arquitectura first-party",
                specs: [
                  "Funciona en tu dominio como first-party",
                  "Recogida first-party sin cookies",
                  "Sin peticiones de terceros",
                  "Invisible para los bloqueadores de anuncios",
                  "Sin almacenamiento de cookies en el cliente",
                ],
              },
              {
                title: "Infraestructura",
                specs: [
                  "Procesamiento y almacenamiento exclusivamente en la UE",
                  "Sin subencargados fuera de la UE",
                  "Sin necesidad de mecanismos de transferencia UE-EE.UU.",
                  "Procesamiento en tiempo real, sin retrasos por lotes",
                  "SLA de 99,9% de uptime en Scale y Enterprise",
                ],
              },
              {
                title: "Integración",
                specs: [
                  "Instalación con un script de una línea",
                  "API REST para integraciones personalizadas",
                  "Webhooks para reenvío de eventos en tiempo real",
                  "Integraciones nativas: GA4, Shopify, WooCommerce",
                  "Sin mantenimiento continuo de ingeniería",
                ],
              },
            ].map((section) => (
              <div
                key={section.title}
                className="p-8 bg-warm-white border border-warm-100 rounded-[4px]"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-1.5">
                  {section.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-3 text-[0.85rem] text-text-body"
                    >
                      <span className="text-text-tertiary shrink-0">
                        &mdash;
                      </span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CTOs approve */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            Por qué los equipos de ingeniería aprueban SealMetrics
          </h2>
          <div className="space-y-12 max-w-[750px]">
            {[
              {
                title: "Cero complejidad de gestión de consentimiento",
                desc: "SealMetrics no utiliza cookies ni recoge datos personales. Tu equipo no necesita construir, mantener ni depurar plataformas de gestión de consentimiento. Sin banners de cookies que implementar, sin estado de consentimiento que sincronizar entre servicios.",
              },
              {
                title: "Sin regresión de rendimiento",
                desc: "Con 846 bytes gzipped y un tiempo de carga inferior a 50ms, SealMetrics no tiene impacto medible en Core Web Vitals. Compáralo con GA4 (45KB+ con gtag.js) o Adobe Analytics (100KB+). Tus puntuaciones de Lighthouse se mantienen exactamente donde están.",
              },
              {
                title: "Sin pipeline de datos que mantener",
                desc: "La analítica enterprise tradicional requiere pipelines ETL, exportaciones a BigQuery, consultas programadas e integración con data warehouse. SealMetrics procesa y sirve datos completos directamente. Cero tiempo de ingeniería dedicado a mantener infraestructura de analítica.",
              },
              {
                title: "Cumplimiento por arquitectura",
                desc: "El cumplimiento de privacidad no es una opción de configuración — es cómo funciona el sistema. Sin recogida de PII, sin cookies almacenadas, sin salida de datos de la UE. Tu DPO lo aprueba una vez y no tiene que volver a revisarlo.",
              },
            ].map((item) => (
              <div key={item.title} className="pb-8 border-b border-warm-100 last:border-0">
                <h3 className="font-serif text-[1.15rem] font-medium text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.7] text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick comparison */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-10">Comparativa de carga para ingeniería</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[0.85rem]">
              <thead>
                <tr className="border-b border-warm-200">
                  <th className="text-left py-3 pr-6 text-text-tertiary font-medium">
                    Aspecto
                  </th>
                  <th className="text-left py-3 px-6 text-green-muted font-medium">
                    SealMetrics
                  </th>
                  <th className="text-left py-3 px-6 text-text-secondary font-medium">
                    GA4 / GA360
                  </th>
                  <th className="text-left py-3 pl-6 text-text-secondary font-medium">
                    Adobe Analytics
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    concern: "Tamaño del script",
                    sm: "846B",
                    ga: "45KB+",
                    adobe: "100KB+",
                  },
                  {
                    concern: "Instalación",
                    sm: "1 línea",
                    ga: "Varios pasos + consentimiento",
                    adobe: "Días de configuración",
                  },
                  {
                    concern: "Gestión de consentimiento",
                    sm: "No es necesaria",
                    ga: "Requerida (CMP)",
                    adobe: "Requerida (CMP)",
                  },
                  {
                    concern: "Pipeline de datos",
                    sm: "Ninguno",
                    ga: "Exportación a BigQuery + ETL",
                    adobe: "Data feeds + ETL",
                  },
                  {
                    concern: "Mantenimiento continuo",
                    sm: "Cero",
                    ga: "Mensual",
                    adobe: "Semanal",
                  },
                  {
                    concern: "Impacto en Core Web Vitals",
                    sm: "Sin impacto medible",
                    ga: "Moderado",
                    adobe: "Significativo",
                  },
                ].map((row) => (
                  <tr
                    key={row.concern}
                    className="border-b border-warm-100 last:border-0"
                  >
                    <td className="py-3 pr-6 text-text-body">{row.concern}</td>
                    <td className="py-3 px-6 text-text-primary font-medium">
                      {row.sm}
                    </td>
                    <td className="py-3 px-6 text-text-secondary">{row.ga}</td>
                    <td className="py-3 pl-6 text-text-secondary">
                      {row.adobe}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-warm-white text-center border-t border-warm-100">
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Revisa la implementación técnica.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Sesión técnica de 30 minutos. Cubrimos arquitectura, implementación
            y flujos de datos.
          </p>
          <Link
            href="/es/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Solicitar Demo Técnica
          </Link>
          <p className="mt-4 text-[0.8rem] text-text-tertiary">
            O{" "}
            <Link
              href="/es/security"
              className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors"
            >
              revisa nuestra arquitectura de seguridad
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
