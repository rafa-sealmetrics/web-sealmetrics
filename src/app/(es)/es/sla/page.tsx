import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Acuerdo de Nivel de Servicio (SLA) — Sealmetrics",
  description:
    "SLA de Sealmetrics (v1.1): compromisos de disponibilidad por plano de servicio, créditos y tiempos de respuesta de soporte para los planes Scale y Enterprise.",
  openGraph: {
    title: "Acuerdo de Nivel de Servicio (SLA) — Sealmetrics",
    description:
      "Compromisos de disponibilidad por plano de servicio, créditos y tiempos de respuesta de soporte para los planes Scale y Enterprise.",
    url: "https://sealmetrics.com/es/sla/",
    siteName: "Sealmetrics",
    type: "website",
    locale: "es_ES",
    images: [ogImage("/es/sla/")],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Acuerdo de Nivel de Servicio (SLA) — Sealmetrics",
    description:
      "Compromisos de disponibilidad por plano de servicio, créditos y tiempos de respuesta de soporte para los planes Scale y Enterprise.",
    images: [ogImage("/es/sla/")],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/sla/",
    languages: { en: "https://sealmetrics.com/sla/" },
  },
};

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3 mt-10">
      {children}
    </h2>
  );
}
function Tbl({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-[0.88rem] border border-warm-100">
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className={
                i === 0
                  ? "bg-warm-white font-medium text-text-primary"
                  : "border-t border-warm-100"
              }
            >
              {r.map((c, j) => (
                <td key={j} className="px-3 py-2 align-top">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SlaPageEs() {
  return (
    <>
      <Breadcrumbs items={[{ label: "SLA" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "SLA", url: "/es/sla" }])} />
      <section className="pt-12 pb-28 bg-white">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
            Legal
          </span>
          <h1 className="headline-hero mb-4">Acuerdo de Nivel de Servicio</h1>
          <p className="text-[0.9rem] text-text-tertiary mb-10">
            Versión 1.1 · Última actualización: 24 de agosto de 2026 ·{" "}
            <a href="/sla/" className="underline">
              English version
            </a>{" "}
            (la versión española es la auténtica)
          </p>

          <div className="space-y-4 text-[0.95rem] leading-[1.75] text-text-secondary">
            <p>
              Este Acuerdo de Nivel de Servicio aplica a los planes{" "}
              <strong className="text-text-primary">Scale y Enterprise</strong>{" "}
              y forma parte de los{" "}
              <a href="/es/terms/" className="underline">
                Términos del Servicio
              </a>{" "}
              (§12.2). Los planes Agentic y Growth se rigen por el objetivo
              operativo de disponibilidad del §12.1 de los Términos, sin
              derecho a créditos. En materia de remedios, este SLA se
              interpreta en coherencia con la Sección 14 de los Términos y la
              cláusula 8.3 del{" "}
              <a href="/es/dpa/" className="underline">
                DPA
              </a>
              : el crédito de servicio es el remedio único.
            </p>

            <H>1. Los dos planos del Servicio</H>
            <p>
              El Servicio tiene dos planos con perfiles de riesgo distintos, y
              este SLA los trata por separado — porque no es lo mismo perder
              datos que esperar por un informe:
            </p>
            <Tbl
              rows={[
                ["Plano", "Qué es", "Consecuencia de una caída"],
                [
                  "Plano de medición (ingesta del pixel)",
                  "La recepción de los eventos de los sitios del Cliente, servida con redundancia de réplicas",
                  "Pérdida de los datos del periodo caído — irrecuperable. Es el plano crítico",
                ],
                [
                  "Plano de consulta (panel, API, exportaciones)",
                  "El acceso a los informes y datos ya procesados",
                  "Espera — ningún dato se pierde: los eventos recibidos se encolan en un sistema de mensajería persistente y se procesan al recuperarse el servicio",
                ],
              ]}
            />
            <p>
              Esta asimetría es una propiedad de diseño: una indisponibilidad
              de los componentes de procesamiento o consulta retrasa los
              informes pero no pierde eventos ya ingeridos.
            </p>

            <H>2. Compromisos de disponibilidad</H>
            <Tbl
              rows={[
                ["Plano", "Compromiso mensual", "Indisponibilidad máx. equivalente/mes"],
                ["Plano de medición (ingesta)", "99,5 %", "~3 h 39 min"],
                ["Plano de consulta (panel + API)", "99,0 %", "~7 h 18 min"],
              ]}
            />
            <p>
              Disponibilidad mensual (%) = (minutos del mes − minutos de
              Indisponibilidad) / minutos del mes × 100, medida por la
              monitorización interna de Sealmetrics (comprobaciones continuas
              de salud de los endpoints públicos, con alertado automático). El
              Cliente puede solicitar el detalle de medición de un incidente
              concreto.
            </p>
            <p>
              <strong className="text-text-primary">Indisponibilidad</strong>:
              periodo continuado de 15 minutos o más (redondeado al minuto) en
              que el plano correspondiente no responde o devuelve errores para
              el conjunto de los clientes, confirmado por la monitorización de
              Sealmetrics. La degradación parcial que no impida la función
              esencial del plano (p. ej. latencia elevada con ingesta
              correcta) no constituye Indisponibilidad. Las interrupciones
              inferiores a 15 minutos consecutivos no computan.
            </p>

            <H>3. Exclusiones</H>
            <p>No computan como Indisponibilidad:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Mantenimiento programado: notificado con ≥24 h de antelación,
                en ventana de bajo tráfico, máximo 8 h/mes acumuladas.
              </li>
              <li>
                Mantenimiento de emergencia razonablemente necesario para la
                seguridad o integridad del Servicio (notificado tan pronto como
                sea posible).
              </li>
              <li>
                Fallos de redes o infraestructura del Cliente o de terceros
                fuera del control razonable de Sealmetrics (DNS del Cliente, su
                CDN, su proveedor de hosting, cortes de Internet regionales).
              </li>
              <li>
                Errores de instrumentación o configuración del Cliente (tracker
                mal instalado, bloqueos en el sitio del Cliente, límites de
                plan excedidos).
              </li>
              <li>Fuerza mayor.</li>
              <li>
                Funcionalidades beta o experimentales, y el componente de IA en
                su parte dependiente de la capacidad del proveedor de
                inferencia (la degradación del asistente de IA no afecta a la
                medición ni a los informes).
              </li>
              <li>
                Suspensiones conforme a los Términos del Servicio (impago,
                abuso, requerimiento legal).
              </li>
            </ul>

            <H>4. Créditos de servicio</H>
            <Tbl
              rows={[
                [
                  "Disponibilidad mensual del plano afectado",
                  "Crédito sobre la cuota mensual del Servicio*",
                ],
                ["< 99,5 % (medición) / < 99,0 % (consulta) y ≥ 98,0 %", "5 %"],
                ["< 98,0 % y ≥ 95,0 %", "10 %"],
                ["< 95,0 %", "20 %"],
              ]}
            />
            <p className="text-[0.85rem] text-text-tertiary">
              * En planes anuales, la doceava parte de la cuota anual. Si ambos
              planos incumplen en el mismo mes, se aplica el crédito mayor (no
              se acumulan).
            </p>
            <p>
              El Cliente solicita el crédito por email a soporte en los 15 días
              siguientes al fin del mes afectado, indicando fechas y horas del
              incidente. Los créditos se aplican a cuotas futuras, no son
              canjeables por dinero, y su total anual no superará el
              equivalente a un mes de cuota. El crédito es el remedio único y
              exclusivo por incumplimientos de disponibilidad.
            </p>

            <H>5. Soporte técnico — tiempos de respuesta</H>
            <p>
              Horario de soporte: días laborables (calendario de Barcelona),
              9:00–18:00 CET/CEST. El plan Enterprise puede pactar cobertura
              ampliada (incluido 24×7 para S1) en su acuerdo particular.
            </p>
            <Tbl
              rows={[
                [
                  "Severidad",
                  "Definición",
                  "Primera respuesta — Scale",
                  "Primera respuesta — Enterprise",
                ],
                [
                  "S1 — Crítica",
                  "Plano de medición caído o pérdida de datos en curso",
                  "8 h laborables",
                  "4 h laborables",
                ],
                [
                  "S2 — Alta",
                  "Plano de consulta caído; funcionalidad esencial inoperativa sin alternativa",
                  "8 h laborables",
                  "4 h laborables",
                ],
                [
                  "S3 — Media",
                  "Degradación con alternativa razonable; errores no bloqueantes",
                  "1 día laborable",
                  "8 h laborables",
                ],
                [
                  "S4 — Baja",
                  "Consultas, mejoras, dudas de uso",
                  "2 días laborables",
                  "1 día laborable",
                ],
              ]}
            />
            <p>
              Los tiempos son de primera respuesta cualificada, no de
              resolución. Sealmetrics mantiene el incidente informado hasta su
              cierre.
            </p>

            <H>6. Comunicación de incidentes</H>
            <p>
              Los incidentes S1/S2 confirmados se comunican a los Clientes
              afectados por email sin dilación indebida, con actualizaciones
              periódicas hasta la resolución y un resumen post-incidente para
              S1. Si un incidente del plano de medición implica pérdida de
              datos, la comunicación lo indicará expresamente con el intervalo
              afectado.
            </p>

            <H>7. Continuidad y protección de datos (informativo)</H>
            <p>
              Objetivos internos de recuperación, declarados a título
              informativo (no generan créditos por sí mismos): copias de
              seguridad cifradas diarias con retención de 30 días — con el
              material criptográfico de seudonimización de sesiones excluido
              de las copias por diseño, porque la continuidad nunca se compra
              a costa de la privacidad —; RPO de 24 h para datos de
              configuración (los eventos de medición ya ingeridos están
              protegidos adicionalmente por la cola persistente); RTO de 24 h
              laborables ante desastre mayor; y redundancia activa en el plano
              de medición.
            </p>

            <H>8. Revisión</H>
            <p>
              Este SLA se revisa al menos anualmente. Las modificaciones se
              comunican con antelación razonable; las que reduzcan los
              compromisos solo surten efecto en la siguiente renovación del
              Cliente.
            </p>

            <p className="pt-6 border-t border-warm-100 text-[0.85rem] text-text-tertiary">
              Este SLA forma parte de los{" "}
              <a href="/es/terms/" className="underline">
                Términos del Servicio
              </a>
              . Consultas: support@sealmetrics.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
