import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Política de Privacidad — Sealmetrics",
  description:
    "Política de privacidad de Sealmetrics: qué datos tratamos, cómo los protegemos y qué no recogemos nunca.",
  openGraph: {
    title: "Política de Privacidad — Sealmetrics",
    description:
      "Qué datos trata Sealmetrics, cómo los protege y qué no recoge nunca.",
    url: "https://sealmetrics.com/es/privacy/",
    siteName: "Sealmetrics",
    type: "website",
    locale: "es_ES",
    images: [ogImage("/es/privacy/")],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Política de Privacidad — Sealmetrics",
    description:
      "Qué datos trata Sealmetrics, cómo los protege y qué no recoge nunca.",
    images: [ogImage("/es/privacy/")],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/privacy/",
    languages: { en: "https://sealmetrics.com/privacy/" },
  },
};

export default function PrivacyPageEs() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Política de Privacidad" }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Política de Privacidad", url: "/es/privacy" },
        ])}
      />
      <section className="pt-12 pb-28 bg-white">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
            Legal
          </span>
          <h1 className="headline-hero mb-12">Política de Privacidad</h1>

          <div className="prose-sm space-y-8 text-[0.95rem] leading-[1.75] text-text-secondary">
            <p>
              <strong className="text-text-primary">
                Última actualización:
              </strong>{" "}
              4 de septiembre de 2026 ·{" "}
              <a href="/privacy/" className="underline">
                English version
              </a>
            </p>

            <div>
              <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
                1. Quiénes somos
              </h2>
              <p>
                Sealmetrics (&laquo;nosotros&raquo;) es una plataforma de
                analítica web con sede en España, UE. Prestamos servicios de
                analítica sin cookies a empresas (&laquo;Clientes&raquo;). Esta
                política de privacidad cubre cómo tratamos los datos en dos
                contextos: (a) los visitantes de sealmetrics.com, y (b) los
                visitantes de los sitios web de nuestros Clientes donde está
                instalada la analítica de Sealmetrics.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
                2. Datos que recogemos en sealmetrics.com
              </h2>
              <p className="mb-3">Cuando visitas sealmetrics.com, recogemos:</p>
              <ul className="space-y-1 pl-5 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-text-tertiary shrink-0">&mdash;</span>
                  La información que nos facilitas voluntariamente mediante
                  formularios (nombre, email, empresa, URL del sitio web)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-text-tertiary shrink-0">&mdash;</span>
                  Datos de analítica anónimos mediante nuestro propio script de
                  Sealmetrics (páginas vistas, duración de la sesión, referente
                  &mdash; sin datos personales)
                </li>
              </ul>
              <p className="mt-3">
                No utilizamos cookies, píxeles de seguimiento ni herramientas de
                analítica de terceros en sealmetrics.com.
              </p>
              <p className="mt-3">
                Al iniciar sesión en la plataforma{" "}
                <span className="text-text-primary font-medium">
                  my.sealmetrics.com
                </span>{" "}
                sí se instalan tres cookies estrictamente necesarias:{" "}
                <span className="text-text-primary font-medium">
                  sm_access_token
                </span>{" "}
                (15 minutos),{" "}
                <span className="text-text-primary font-medium">
                  sm_refresh_token
                </span>{" "}
                (7 días) y{" "}
                <span className="text-text-primary font-medium">sm_csrf</span>{" "}
                (7 días). Sirven únicamente para mantener tu sesión abierta y
                protegerla frente a la falsificación de peticiones en sitios
                cruzados. No tienen finalidad analítica, publicitaria ni de
                perfilado, se transmiten solo por conexión cifrada y se
                eliminan al cerrar sesión. Al ser estrictamente necesarias para
                un servicio que solicitas expresamente, están exentas del deber
                de consentimiento del art. 5.3 de la Directiva ePrivacy y del
                art. 22.2 de la LSSI, y por eso no verás un banner. Puedes
                bloquearlas desde tu navegador, pero entonces no podrás iniciar
                sesión; bloquearlas no afecta a tu navegación por
                sealmetrics.com, que no instala ninguna.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
                3. Datos que recogemos en los sitios web de los Clientes
              </h2>
              <p className="mb-3">
                Instalado en el sitio web de un Cliente, Sealmetrics recoge:
              </p>
              <ul className="space-y-1 pl-5 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-text-tertiary shrink-0">&mdash;</span>
                  URLs de página y URLs de referente
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-text-tertiary shrink-0">&mdash;</span>
                  Tipo de navegador, sistema operativo, resolución de pantalla
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-text-tertiary shrink-0">&mdash;</span>
                  Comportamiento de la sesión (páginas vistas, profundidad de
                  scroll, clics, tiempo en página)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-text-tertiary shrink-0">&mdash;</span>
                  Geolocalización a nivel de país derivada de la zona horaria
                  del navegador del visitante (Intl.DateTimeFormat). En cuentas
                  con la detección de bots/agentes activada, se realiza además
                  una consulta de país basada en la IP (base de datos offline
                  MaxMind GeoLite2) solo en la entrada de sesión, usada
                  exclusivamente como señal de detección de bots.
                </li>
              </ul>
              <p className="mt-3">
                <strong className="text-text-primary">
                  Sobre las direcciones IP:
                </strong>{" "}
                no persistimos direcciones IP en nuestra base de datos de
                analítica. La IP se usa de forma transitoria en el servidor
                para: (i) el contraste con listas de bloqueo anti-abuso, (ii) la
                consulta GeoLite2 descrita arriba cuando aplica, y (iii)
                registro operativo con retención limitada. La IP nunca está
                disponible para los Clientes en sus informes.
              </p>
              <p className="mt-3">
                <strong className="text-text-primary">
                  Sobre los identificadores de sesión:
                </strong>{" "}
                Sealmetrics usa un identificador de sesión de vida corta
                calculado en el navegador del visitante a partir de
                características generales del dispositivo. No es único por
                persona &mdash; muchos visitantes distintos pueden producir el
                mismo valor &mdash;, por lo que no puede identificar a un
                individuo. Nunca se almacena en el dispositivo del visitante, y
                los datos de cada sitio cliente se procesan de forma aislada.
                Sealmetrics no lo usa para correlacionar visitas a lo largo del
                tiempo: cada nueva entrada se cuenta como un dato nuevo e
                independiente, y no se construye ningún historial ni perfil de
                visitante entre sesiones. Desde agosto de 2026, el
                identificador se seudonimiza además en nuestros servidores con
                una clave secreta y un salt aleatorio diario que se destruye en
                la rotación (y se excluye de los backups): ni Sealmetrics puede
                reconectar la actividad de un dispositivo entre dos días
                distintos ni entre sitios distintos.
              </p>
              <p className="mt-3">
                <strong className="text-text-primary">
                  Sobre los identificadores de clic publicitarios:
                </strong>{" "}
                cuando un visitante llega desde un anuncio, el identificador de
                clic presente en la URL de aterrizaje (p. ej. gclid, msclkid)
                se procesa al vuelo únicamente para determinar la red
                publicitaria del clic, a efectos de atribución y deduplicación.
                Su valor{" "}
                <strong className="text-text-primary">
                  no se almacena nunca
                </strong>{" "}
                — solo se conserva el tipo de red —, por lo que no es accesible
                en informes, API ni exportaciones.
              </p>
              <p className="mt-3">
                <strong className="text-text-primary">No recogemos:</strong>{" "}
                huellas digitales de dispositivo, nombres, direcciones de email
                ni ningún dato que pueda identificar a un visitante individual.
                No se usan cookies, local storage, session storage ni IndexedDB.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
                4. Base jurídica del tratamiento
              </h2>
              <p>
                Para los formularios de sealmetrics.com: consentimiento (art.
                6.1.a RGPD) e interés legítimo en responder a las consultas
                (art. 6.1.f). Para los datos de analítica en los sitios de los
                Clientes: interés legítimo del Cliente en comprender el uso de
                su sitio web (art. 6.1.f), dado que no se tratan datos
                personales.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
                5. Almacenamiento y residencia de los datos
              </h2>
              <p>
                Los datos de analítica de visitantes se procesan y almacenan
                exclusivamente en centros de datos de la UE, sin subencargados
                fuera de la UE en esa ruta de datos. La única transferencia
                fuera del Espacio Económico Europeo es el email de servicio a
                los propios usuarios de la cuenta (verificaciones, alertas,
                informes) a través de Resend, Inc. (EE.UU.), amparada en
                Cláusulas Contractuales Estándar y su certificación EU-US Data
                Privacy Framework. No incluye ningún dato de visitantes. La
                lista completa de subencargados es el Anexo 3 del{" "}
                <a href="/es/dpa/" className="underline">
                  DPA
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
                6. Retención de datos
              </h2>
              <p>
                El registro técnico de eventos en bruto se conserva{" "}
                <strong className="text-text-primary">1 día</strong> y después
                se elimina automáticamente; a partir de ahí solo permanece la
                analítica agregada. Los datos agregados de analítica de los
                sitios de los Clientes se conservan un máximo de{" "}
                <strong className="text-text-primary">24 meses</strong>{" "}
                (aplicado automáticamente mediante TTL de base de datos), en
                línea con la guía de medición de audiencia de la AEPD (enero de
                2024). Los informes horarios agregados se conservan 90 días. Los
                envíos de formularios de sealmetrics.com se conservan 24 meses,
                salvo que solicites su eliminación antes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
                7. Tus derechos
              </h2>
              <p>
                Bajo el RGPD tienes derecho a acceder, rectificar, suprimir,
                portar y limitar el tratamiento de tus datos personales. Para
                los datos que hayas facilitado mediante formularios, escríbenos
                a privacy@sealmetrics.com. Ten en cuenta que los datos de
                analítica recogidos en los sitios de los Clientes son anónimos y
                no pueden vincularse a ningún individuo.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
                8. Compartición con terceros
              </h2>
              <p>
                No vendemos, intercambiamos ni compartimos datos personales con
                terceros con fines publicitarios o de marketing. Podemos
                compartir datos con proveedores de servicios que nos ayudan a
                operar la plataforma, bajo estrictos acuerdos de encargo de
                tratamiento.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3">
                9. Contacto
              </h2>
              <p>
                Para cualquier consulta sobre privacidad o para ejercer tus
                derechos, escríbenos a{" "}
                <span className="text-text-primary font-medium">
                  privacy@sealmetrics.com
                </span>
                .
              </p>
              <p className="mt-3">
                Responsable del tratamiento: Sealmetrics S.L. (CIF
                ESB70933239), Carrer de Tirso de Molina 36, 08940 Cornellà de
                Llobregat, Barcelona, España. No estamos obligados a designar
                Delegado de Protección de Datos; las cuestiones de privacidad
                se atienden en el contacto anterior. También puedes presentar
                una reclamación ante la Agencia Española de Protección de Datos
                (www.aepd.es).
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-warm-100 flex flex-wrap gap-6 text-[0.85rem]">
              <Link
                href="/es/terms"
                className="text-text-secondary no-underline hover:text-text-primary transition-colors"
              >
                Términos del Servicio
              </Link>
              <Link
                href="/es/security"
                className="text-text-secondary no-underline hover:text-text-primary transition-colors"
              >
                Arquitectura de Seguridad
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
