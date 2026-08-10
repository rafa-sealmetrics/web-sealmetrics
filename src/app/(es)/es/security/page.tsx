import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import { breadcrumbSchema, speakableWebPageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "Visión General de Seguridad — Sealmetrics",
  description:
    "Cómo protege Sealmetrics los datos de analítica: privacidad por diseño, cifrado, aislamiento por cuenta, retención automática por TTL e infraestructura 100% UE.",
  openGraph: {
    title: "Visión General de Seguridad — Sealmetrics",
    description:
      "Privacidad por diseño, cifrado, aislamiento por cuenta, retención automática por TTL e infraestructura 100% UE.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    url: "https://sealmetrics.com/es/security/",
    siteName: "SealMetrics",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Visión General de Seguridad — Sealmetrics",
    description: "Privacidad por diseño, cifrado, aislamiento por cuenta, retención automática por TTL e infraestructura 100% UE.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/security/",
    languages: getAlternatesEs("/security"),
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

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Seguridad" }]} locale="es" />
      <JsonLd
        data={breadcrumbSchema([{ name: "Seguridad", url: "/es/security" }])}
      />
      <JsonLd
        data={speakableWebPageSchema({
          url: "/es/security",
          name: "Visión General de Seguridad — Sealmetrics",
        })}
      />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span
            className="eyebrow mb-5"
            style={{ display: "inline-flex", justifyContent: "center" }}
          >
            Trust Center
          </span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            Visión general de <em>seguridad.</em>
          </h1>
          <p
            className="text-ink-soft mt-8 mx-auto max-w-[62ch] leading-[1.55]"
            style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
          >
            Las medidas técnicas y organizativas detrás de la analítica sin
            consentimiento de Sealmetrics — escritas para evaluadores técnicos,
            equipos de seguridad y DPDs.
          </p>
        </div>
      </section>

      <TldrBlock
        label="En resumen"
        answer={
          <>
            El primer control de seguridad de Sealmetrics es estructural:{" "}
            <strong>
              el dato que no se recoge ni se persiste no puede filtrarse
            </strong>
            . El píxel no usa cookies ni almacenamiento en el dispositivo, la IP
            del visitante no tiene columna en ninguna base de datos de analítica
            y el país se deriva de la zona horaria del navegador — no de la IP.
            El resto sigue las medidas del Anexo 2 del{" "}
            <a href="/es/dpa/" className="underline">DPA</a>: TLS 1.2+ en
            tránsito (incluida la inferencia de IA), AES-256 en reposo,
            aislamiento lógico por cuenta en todas las capas, RBAC con MFA y
            mínimo privilegio, y retención aplicada por TTL automático de base
            de datos (1 día / 90 días / 24 meses / 2 horas). Los datos de
            visitantes se tratan íntegramente en la UE.
          </>
        }
        bullets={[
          <>
            Sin cookies, sin almacenamiento en el terminal, sin IP persistida —
            verificado sobre el código servido en producción.
          </>,
          <>
            Retención fija aplicada por TTL automático de base de datos, no por
            procesos manuales.
          </>,
          <>
            Flujo de visitantes 100% UE (Irlanda + París); única transferencia
            extra-EEE: emails de servicio a usuarios de cuenta vía Resend
            (EE.UU., SCCs + DPF).
          </>,
        ]}
      />

      <section className="pt-12 pb-28 bg-white">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <p className="text-[0.9rem] text-text-tertiary mb-10">
            Versión 1.0 · Última actualización: 30 de julio de 2026 ·{" "}
            <a href="/security/" className="underline">
              English version
            </a>{" "}
            · La versión española es la auténtica.
          </p>

          <div className="space-y-4 text-[0.95rem] leading-[1.75] text-text-secondary">
            <p>
              Esta página es el companion de seguridad del Trust Center de
              Sealmetrics. Resume las medidas técnicas y organizativas reales
              que protegen el servicio, en coherencia con el Anexo 2 (Art. 32
              RGPD) del{" "}
              <a href="/es/dpa/" className="underline">
                Acuerdo de Encargo de Tratamiento (DPA)
              </a>
              ; en caso de discrepancia, prevalece el DPA.
            </p>

            <H>1. Arquitectura de privacidad por diseño</H>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-text-primary">
                  Sin cookies ni almacenamiento en el terminal.
                </strong>{" "}
                El píxel de medición no usa cookies, localStorage,
                sessionStorage, IndexedDB ni ningún otro almacenamiento en el
                dispositivo del visitante — verificado sobre el código servido
                en producción, no solo declarado.
              </li>
              <li>
                <strong className="text-text-primary">
                  Sin direcciones IP persistidas.
                </strong>{" "}
                La IP del visitante no tiene columna en ninguna base de datos de
                analítica: la columna se eliminó explícitamente mediante una
                migración de esquema dedicada, como decisión de minimización por
                diseño. El uso de la IP es transitorio, en memoria, durante el
                procesamiento del evento.
              </li>
              <li>
                <strong className="text-text-primary">
                  País por zona horaria, no por IP.
                </strong>{" "}
                La dimensión geográfica de los informes se deriva de la zona
                horaria del navegador mediante una tabla estática — el
                componente que la resuelve ni siquiera recibe la IP como
                parámetro.
              </li>
              <li>
                <strong className="text-text-primary">
                  Identificadores efímeros.
                </strong>{" "}
                El identificador de sesión se calcula en el navegador a partir
                de características técnicas, sin escribir nada en el
                dispositivo. Vida efectiva máxima: 2 horas en sesión activa, 1
                día en el registro técnico. Las tablas de reporting son 100%
                agregadas y no lo contienen.
              </li>
              <li>
                <strong className="text-text-primary">
                  Sin identificadores directos de visitantes.
                </strong>{" "}
                Sin nombres, sin emails, sin identificadores aptos para
                seguimiento entre sitios; aislamiento por cuenta en claves y
                tablas. Los parámetros de campaña (UTMs, identificadores de
                clic) se procesan server-side en la UE, nunca se extraen en el
                dispositivo.
              </li>
            </ul>

            <H>2. Cifrado</H>
            <Tbl
              rows={[
                ["Ámbito", "Medida"],
                [
                  "En tránsito",
                  "TLS 1.2+ en todas las comunicaciones, incluida la inferencia de IA (Seal AI)",
                ],
                ["En reposo", "AES-256 en las bases de datos del servicio"],
                [
                  "Copias de seguridad",
                  "Cifradas, retención de 30 días con rotación automática",
                ],
                [
                  "Claves BYOK de clientes",
                  "AES-256-GCM (cifrado autenticado); las respuestas de la API exponen solo los últimos 4 caracteres, nunca el material cifrado",
                ],
              ]}
            />

            <H>3. Aislamiento y control de acceso</H>
            <p>
              Cada tabla y cada clave llevan el identificador de cuenta, y las
              consultas se validan contra la cuenta del solicitante: los datos
              de cada cliente se recopilan, tratan y almacenan de forma
              independiente (independencia multi-editor, cláusula 3.3 del DPA).
              El acceso a la plataforma usa control basado en roles (roles de
              organización y de sitio), MFA — disponible para usuarios (TOTP) y
              requerida al personal de Sealmetrics —, principio de mínimo
              privilegio con compromisos de confidencialidad que subsisten tras
              la relación laboral, y accesos administrativos registrados. El
              cliente puede además restringir el acceso a la API con una
              allowlist de IPs por cuenta y excluir sus propias IPs de la
              medición.
            </p>

            <H>4. Retención automática</H>
            <p>
              Los plazos de conservación de los datos de analítica son fijos, no
              configurables, y se aplican por TTL automático a nivel de base de
              datos — el cumplimiento no depende de procesos manuales. Cumplen
              el máximo orientativo de 25 meses de la Guía de la AEPD sobre
              medición de audiencia (enero 2024).
            </p>
            <Tbl
              rows={[
                ["Datos", "Plazo"],
                [
                  "Registro técnico a nivel de evento (user agent, URLs completas)",
                  "1 día",
                ],
                ["Agregados horarios", "90 días"],
                [
                  "Agregados diarios, conversiones y sus propiedades",
                  "24 meses",
                ],
                ["Estado de sesión (memoria operativa)", "2 horas"],
              ]}
            />

            <H>5. Infraestructura en la Unión Europea</H>
            <Tbl
              rows={[
                ["Componente", "Proveedor", "Ubicación"],
                [
                  "Infraestructura y bases de datos del servicio",
                  "Noraina Limited",
                  "Irlanda (UE)",
                ],
                [
                  "Inferencia de IA (Seal AI, proveedor por defecto)",
                  "Scaleway SAS (grupo Iliad)",
                  "París, Francia (UE) — zero data retention: el proveedor de inferencia no conserva prompts ni respuestas",
                ],
                [
                  "Monitorización (métricas y alertas)",
                  "Autoalojada en infraestructura propia",
                  "UE — sin subencargado",
                ],
              ]}
            />
            <p>
              El flujo de datos de visitantes es íntegramente UE y no depende
              del EU-US Data Privacy Framework ni de SCCs.{" "}
              <strong className="text-text-primary">
                Única transferencia fuera del EEE:
              </strong>{" "}
              los emails del servicio (verificaciones, alertas, informes con
              métricas agregadas) a los usuarios de la cuenta vía Resend, Inc.
              (EE.UU.), amparados en SCCs y su certificación EU-US DPF — sin
              afectar a ningún dato de visitantes. Lista completa de
              subencargados:{" "}
              <a href="/es/dpa/" className="underline">
                sealmetrics.com/es/dpa
              </a>
              .
            </p>

            <H>6. Gestión de secretos y cadena de suministro</H>
            <p>
              Las claves de plataforma viven exclusivamente en gestores de
              secretos — nunca en código ni repositorios. El registro de
              contenido está prohibido en la cadena de IA: los prompts y
              respuestas de Seal AI no se escriben en logs, y Sealmetrics
              persiste únicamente contadores de tokens para facturación y
              capacidad. Los scripts de instalación de dependencias de terceros
              están bloqueados por defecto con una lista de permitidos
              explícita, reduciendo la superficie de ataques de cadena de
              suministro. El píxel está protegido contra inyección de datos con
              tokens firmados HMAC con caducidad, validación de dominio y firma
              de mensajes entre servicios.
            </p>

            <H>7. Gestión de incidentes y brechas</H>
            <p>
              Sealmetrics mantiene un procedimiento documentado de gestión de
              violaciones de seguridad (clasificación, contención, análisis,
              comunicación). Los clientes son notificados{" "}
              <strong className="text-text-primary">
                sin dilación indebida
              </strong>{" "}
              desde que Sealmetrics tenga conocimiento de una violación que
              afecte a Datos del Servicio — teniendo en cuenta el plazo de 72
              horas del que dispone el cliente frente a la autoridad de control
              (cláusula 4.5 del DPA) — con la información del Art. 33.3 RGPD en
              la medida disponible, por fases si es necesario. Se mantiene un
              registro interno de violaciones conforme al Art. 33.5 RGPD,
              conservado 5 años desde el cierre.
            </p>

            <H>8. Cumplimiento</H>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-text-primary">RGPD:</strong> Sealmetrics
                trata los datos de analítica bajo un{" "}
                <a href="/es/dpa/" className="underline">
                  DPA
                </a>{" "}
                conforme al Art. 28, con compromisos de no reutilización,
                restricción de finalidad e independencia multi-editor.
              </li>
              <li>
                <strong className="text-text-primary">Criterios AEPD:</strong>{" "}
                diseñado conforme a la Guía de la AEPD sobre el uso de cookies
                para herramientas de medición de audiencia (enero 2024),
                incluidas las garantías contractuales de su sección III.C.
              </li>
              <li>
                <strong className="text-text-primary">DPIA vigente</strong>,
                revisada tras cambios significativos de arquitectura, más
                auditoría interna periódica que verifica el comportamiento real
                del código frente a la documentación pública.
              </li>
              <li>
                <strong className="text-text-primary">
                  Evaluación de configuración previa solicitud:
                </strong>{" "}
                los clientes pueden solicitar la evaluación documentada de la
                configuración del servicio frente a la guía AEPD (cláusula 3.5
                del DPA), actualizada al menos anualmente. Derecho de auditoría
                del cliente conforme a la cláusula 4.7 del DPA.
              </li>
            </ul>
            <p>
              Sealmetrics no dispone actualmente de certificaciones formales de
              terceros (p. ej. ISO 27001 o SOC 2); las garantías de esta página
              se sustentan en las medidas contractuales del DPA y en la
              verificación técnica interna descrita.
            </p>

            <p className="pt-6 border-t border-warm-100 text-[0.85rem] text-text-tertiary">
              Relacionados:{" "}
              <a href="/privacy/" className="underline">
                Política de Privacidad
              </a>{" "}
              ·{" "}
              <a href="/es/dpa/" className="underline">
                DPA
              </a>{" "}
              ·{" "}
              <a href="/es/terms/" className="underline">
                Términos del Servicio
              </a>
              . Consultas de seguridad o privacidad: privacy@sealmetrics.com.
            </p>
          </div>
        </div>
      </section>

      {/* CTA de cierre — a esta página llegan DPOs y CTOs en plena
          due diligence; un email no es un siguiente paso. */}
      <section className="py-16 bg-white border-t border-warm-100">
        <div className="max-w-[900px] mx-auto px-5 sm:px-10">
          <div className="bg-ink text-white rounded-[20px] px-10 py-12 text-center">
            <h2 className="text-white font-semibold leading-[1.15] tracking-[-0.02em] text-[28px] sm:text-[34px] mx-auto max-w-[24ch]">
              ¿Pasa esto vuestro comité de seguridad?
            </h2>
            <p className="text-white/70 text-[15px] leading-[1.55] mt-4 mb-7 mx-auto max-w-[52ch]">
              Repasa este documento con quien firma el DPA — TTLs de retención,
              subencargados, la evaluación AEPD. 30 minutos, respondido en la
              fuente.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/es/demo"
                className="inline-flex items-center justify-center gap-2 bg-white text-ink px-7 py-3.5 rounded-md text-[15px] font-semibold no-underline hover:brightness-95"
              >
                Reserva una revisión de seguridad →
              </Link>
              <Link
                href="/es/for/dpo"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-7 py-3.5 rounded-md text-[15px] font-semibold no-underline hover:bg-white/5"
              >
                Lee el briefing para DPOs
              </Link>
            </div>
            <p className="text-[13px] text-white/50 mt-6">
              ¿Evalúas como ingeniero?{" "}
              <Link href="/es/for/cto" className="text-white/80 underline">
                La página para CTOs
              </Link>{" "}
              cubre el píxel, la API y el esquema de BigQuery. Postura completa
              en el{" "}
              <Link href="/es/trust" className="text-white/80 underline">
                Trust Center
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
