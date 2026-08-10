import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Términos del Servicio — Sealmetrics",
  description: "Términos del Servicio de Sealmetrics (v2.0): planes, facturación, uso aceptable, propiedad de los datos, responsabilidad y terminación.",
  openGraph: {
    title: "Términos del Servicio — Sealmetrics",
    description: "Condiciones de uso de la plataforma: planes, facturación, uso aceptable, propiedad de los datos, responsabilidad y terminación.",
    url: "https://sealmetrics.com/es/terms/",
    siteName: "Sealmetrics",
    type: "website",
    locale: "es_ES",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Términos del Servicio — Sealmetrics",
    description: "Condiciones de uso de la plataforma: planes, facturación, uso aceptable, propiedad de los datos, responsabilidad y terminación.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/terms/",
    languages: { en: "https://sealmetrics.com/terms/" },
  },
};

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-3 mt-10">
      {children}
    </h2>
  );
}
function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[1.02rem] font-semibold text-text-primary mt-6 mb-2">
      {children}
    </h3>
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

export default function TermsEsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Términos del Servicio" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Términos del Servicio", url: "/es/terms" }], "es")} />
    <section className="pt-12 pb-28 bg-white">
      <div className="max-w-[800px] mx-auto px-5 sm:px-8">
        <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
          Legal
        </span>
        <h1 className="headline-hero mb-4">Términos del Servicio</h1>
        <p className="text-[0.9rem] text-text-tertiary mb-10">
          Versión 2.0 · Última actualización y entrada en vigor: 30 de julio de
          2026 ·{" "}
          <a href="/terms/" className="underline">
            English version
          </a>{" "}
          · La versión española es la auténtica.
        </p>

        <div className="space-y-4 text-[0.95rem] leading-[1.75] text-text-secondary">
          <H>1. Introducción y aceptación</H>
          <p>
            Estos Términos del Servicio (los &laquo;Términos&raquo;)
            constituyen un acuerdo legal vinculante entre{" "}
            <strong className="text-text-primary">usted</strong> (el
            &laquo;Cliente&raquo;, &laquo;Usuario&raquo; o
            &laquo;Usted&raquo;) y{" "}
            <strong className="text-text-primary">Sealmetrics S.L.</strong>,
            con domicilio en Carrer de Tirso de Molina 36, 08940 Cornellà de
            Llobregat, Barcelona, España, CIF ESB70933239
            (&laquo;Sealmetrics&raquo;, &laquo;Nosotros&raquo; o &laquo;la
            Empresa&raquo;). Al acceder, registrarse o utilizar los servicios
            de Sealmetrics, usted acepta quedar vinculado por estos Términos,
            nuestra{" "}
            <a href="/privacy/" className="underline">
              Política de Privacidad
            </a>{" "}
            y el{" "}
            <a href="/es/dpa/" className="underline">
              Acuerdo de Encargo de Tratamiento (DPA)
            </a>
            .{" "}
            <strong className="text-text-primary">
              Si no está de acuerdo con estos Términos, no utilice el
              Servicio.
            </strong>
          </p>
          <p>
            Al aceptar estos Términos, usted declara que tiene capacidad legal
            para celebrar contratos vinculantes, que tiene al menos 18 años de
            edad, que si actúa en nombre de una empresa tiene autoridad para
            vincular a dicha empresa, y que cumplirá con todas las leyes
            aplicables en su uso del Servicio.
          </p>
          <p>
            El contrato completo entre las partes está compuesto por: (1)
            estos Términos del Servicio; (2) la Política de Privacidad; (3) el
            Acuerdo de Encargo de Tratamiento (DPA); (4) los términos
            específicos del Plan contratado; y (5) cualquier acuerdo adicional
            firmado entre las partes. En caso de conflicto, prevalecerá el
            orden indicado, con una excepción: en materia de protección de
            datos prevalece siempre el DPA. Un acuerdo posterior firmado puede
            modificar expresamente a los anteriores.
          </p>

          <H>2. Definiciones</H>
          <Tbl
            rows={[
              ["Término", "Definición"],
              [
                "Servicio",
                "La plataforma de analítica web Sealmetrics, incluyendo el software, APIs, dashboard, documentación y funcionalidades asociadas",
              ],
              [
                "Cliente",
                "La persona física o jurídica que contrata el Servicio",
              ],
              [
                "Usuario",
                "Cualquier persona autorizada por el Cliente para acceder al Servicio",
              ],
              [
                "Cuenta",
                "El registro del Cliente en la plataforma que permite acceder al Servicio",
              ],
              [
                "Sitio Web del Cliente",
                "El/los sitio(s) web del Cliente donde se instala el código de tracking",
              ],
              [
                "Datos de Analytics",
                "Los datos de navegación recopilados por el Servicio en el Sitio Web del Cliente",
              ],
              ["Visitante", "Persona que navega por el Sitio Web del Cliente"],
              [
                "Código de Tracking",
                "El fragmento de código JavaScript que se instala en el Sitio Web del Cliente",
              ],
              [
                "Dashboard",
                "La interfaz web donde el Cliente visualiza sus datos de analytics",
              ],
              [
                "API",
                "La interfaz de programación que permite acceder a los datos programáticamente",
              ],
              [
                "Plan",
                "El nivel de servicio contratado (Agentic, Growth, Scale, Enterprise)",
              ],
              [
                "Período de Facturación",
                "El ciclo de facturación (mensual o anual)",
              ],
              [
                "LENS",
                "El motor de insights basado en inteligencia artificial",
              ],
              [
                "Contenido del Cliente",
                "Cualquier dato, información o material proporcionado por el Cliente",
              ],
            ]}
          />

          <H>3. Descripción del Servicio</H>
          <p>
            Sealmetrics proporciona una plataforma de analítica web que
            incluye: tracking de visitantes (recopilación de datos de
            navegación mediante código JavaScript); dashboard de analytics
            (visualización de métricas, gráficos e informes); seguimiento de
            conversiones (registro de eventos y conversiones configurables);
            análisis de fuentes de tráfico; LENS (insights con IA: generación
            automática de insights y recomendaciones); chat conversacional
            para consultar datos en lenguaje natural; API de acceso; y
            exportación de datos en diversos formatos. Las funcionalidades
            disponibles varían según el Plan contratado; el detalle
            actualizado está disponible en sealmetrics.com/pricing.
          </p>
          <p>
            Sealmetrics se reserva el derecho de añadir nuevas funcionalidades
            sin coste adicional, modificar funcionalidades existentes con
            previo aviso, descontinuar funcionalidades con al menos 30 días de
            antelación y realizar mantenimientos programados con aviso previo.
            Notificaremos los cambios significativos por email y/o en el
            Dashboard.
          </p>

          <H>4. Registro y cuentas</H>
          <p>
            Para utilizar el Servicio debe crear una Cuenta proporcionando una
            dirección de email válida, nombre y apellidos o razón social, una
            contraseña segura y, para planes de pago, información de
            facturación. Usted se compromete a proporcionar información veraz,
            actual y completa, mantener actualizada su información de cuenta y
            no suplantar la identidad de otra persona o entidad.
          </p>
          <p>
            Usted es responsable de mantener la confidencialidad de sus
            credenciales, de todas las actividades realizadas bajo su Cuenta y
            de notificar inmediatamente cualquier uso no autorizado.
            Sealmetrics no será responsable de pérdidas derivadas del uso no
            autorizado de su Cuenta si usted no ha protegido adecuadamente sus
            credenciales.
          </p>
          <p>
            Según su Plan, puede invitar a otros Usuarios a su Cuenta: el
            Cliente es responsable de las acciones de todos sus Usuarios, debe
            asignar roles y permisos apropiados y debe revocar accesos cuando
            un Usuario ya no deba tenerlo. Cada Cliente debe tener una única
            Cuenta; no está permitido crear múltiples cuentas para eludir
            límites del Plan o por cualquier otro motivo.
          </p>

          <H>5. Planes y precios</H>
          <p>
            Planes disponibles:{" "}
            <strong className="text-text-primary">Agentic</strong> (gratuito,
            autoservicio, con límite total de eventos humanos),{" "}
            <strong className="text-text-primary">Growth</strong> (límite
            mensual de eventos humanos; MCP, BigQuery, API completa y LENS con
            clave propia),{" "}
            <strong className="text-text-primary">Scale</strong> (mayor
            límite; IA privada gestionada con tokens incluidos, webhooks y
            soporte prioritario) y{" "}
            <strong className="text-text-primary">Enterprise</strong> (plan
            anual personalizado: eventos ilimitados, IA privada exclusiva,
            procesamiento aislado). Existe un add-on de Private AI para los
            planes que no lo incluyen. Los detalles actualizados de
            cada Plan están en sealmetrics.com/pricing.
          </p>
          <p>
            Cada Plan tiene límites de número de sitios web, eventos mensuales
            (pageviews, conversiones, etc.), usuarios con acceso, retención de
            datos históricos y acceso a funcionalidades (LENS, API, etc.). Si
            excede los límites de su Plan, le notificaremos del exceso y podrá
            actualizar a un Plan superior; el exceso continuado puede resultar
            en restricciones del Servicio.
          </p>
          <p>
            Cambios de Plan: el upgrade es efectivo inmediatamente con coste
            prorrateado; el downgrade es efectivo al inicio del siguiente
            período de facturación; para la cancelación, ver la Sección 16.
            Los precios están publicados en nuestra web y pueden variar según
            el Plan; no incluyen impuestos aplicables (IVA, etc.). Nos
            reservamos el derecho de modificar precios con 30 días de
            antelación; los cambios de precio no afectan al período ya pagado.
          </p>

          <H>6. Facturación y pagos</H>
          <p>
            La facturación es mensual (el mismo día de cada mes) o anual (una
            vez al año, con descuento aplicable). Aceptamos tarjeta de
            crédito/débito (Visa, Mastercard, American Express), domiciliación
            bancaria SEPA (planes anuales, Enterprise) y transferencia
            bancaria (Enterprise, previa aprobación). Los pagos se cargan
            automáticamente al método de pago registrado; recibirá factura por
            email tras cada cargo y las facturas están disponibles en el
            Dashboard.
          </p>
          <H3>6.4 Impagos</H3>
          <Tbl
            rows={[
              ["Día", "Acción"],
              ["0", "Intento de cobro fallido, notificación por email"],
              ["3", "Segundo intento de cobro, recordatorio"],
              ["7", "Tercer intento de cobro, aviso de suspensión"],
              ["14", "Suspensión del Servicio (acceso solo lectura)"],
              ["30", "Terminación de la Cuenta y eliminación de datos"],
            ]}
          />
          <H3>6.5 Disputas de facturación</H3>
          <p>
            Si considera que un cargo es incorrecto, contacte con
            billing@sealmetrics.com en un plazo de 30 días con los detalles
            del cargo disputado. Investigaremos y responderemos en 10 días
            hábiles; si procede, emitiremos crédito en cuotas futuras.
          </p>
          <H3>6.6 Reembolsos e impuestos</H3>
          <p>
            No se ofrecen reembolsos: los importes abonados no son
            reembolsables. Errores de facturación: los cargos incorrectos se
            compensan mediante crédito en las siguientes cuotas del Servicio.
            Los precios no incluyen IVA u otros impuestos; se aplicará el IVA
            según la ubicación del Cliente, y los Clientes con NIF-IVA
            intracomunitario válido pueden solicitar exención.
          </p>

          <H>7. Uso del Servicio</H>
          <p>
            Sealmetrics le otorga una licencia limitada, no exclusiva, no
            transferible y revocable para acceder y utilizar el Servicio según
            estos Términos, instalar el Código de Tracking en sus Sitios Web,
            visualizar y exportar sus Datos de Analytics y utilizar la API
            según la documentación.
          </p>
          <p>
            Usted NO puede: sublicenciar, vender o transferir el acceso al
            Servicio; modificar, descompilar o realizar ingeniería inversa del
            software; utilizar el Servicio para fines ilegales; interferir con
            el funcionamiento del Servicio; acceder a datos de otros Clientes;
            eludir medidas de seguridad o límites del Plan; ni utilizar el
            Servicio para competir directamente con Sealmetrics.
          </p>
          <p>
            Usted es responsable de instalar correctamente el Código de
            Tracking, debe tener derecho legal a instalar código en el Sitio
            Web, debe informar a los Visitantes según las leyes aplicables
            (cookies, privacidad) y debe instalar el Código según nuestra
            documentación. El uso de la API está sujeto a límites de rate
            según su Plan; debe proteger sus credenciales de API y no puede
            utilizar la API para crear un servicio competidor. Nos reservamos
            el derecho de modificar la API con previo aviso.
          </p>

          <H>8. Uso aceptable</H>
          <p>
            Usted se compromete a: cumplir todas las leyes aplicables,
            incluyendo RGPD y ePrivacy; obtener los consentimientos necesarios
            de los Visitantes; tener una política de privacidad que informe
            sobre el uso de analytics; no recopilar datos de categorías
            especiales (salud, origen étnico, etc.) sin base legal; no
            utilizar el Servicio para rastrear menores de forma identificable;
            y mantener la seguridad de su Cuenta y credenciales.
          </p>
          <p>
            Está prohibido utilizar el Servicio para: actividades ilegales o
            fraudulentas; infringir derechos de terceros (privacidad,
            propiedad intelectual); distribuir malware, spam o contenido
            malicioso; realizar ataques a la infraestructura (DDoS, etc.);
            recopilar datos sin consentimiento donde sea requerido; enviar
            datos personales sensibles a través del Servicio; o cualquier
            actividad que pueda dañar a Sealmetrics o a terceros.
          </p>
          <p>
            No puede utilizar el Servicio en sitios que promuevan actividades
            ilegales, contengan material de abuso de menores, distribuyan
            malware, promuevan odio, violencia o discriminación, o infrinjan
            derechos de propiedad intelectual sistemáticamente. Ante un
            incumplimiento del uso aceptable, podemos suspender el acceso
            temporal o permanentemente, eliminar la Cuenta sin reembolso,
            tomar acciones legales si procede y reportar a las autoridades si
            es requerido por ley.
          </p>
          <p>
            En espejo de la cláusula 5.2 del{" "}
            <a href="/es/dpa/" className="underline">
              DPA
            </a>
            , usted se obliga a no enviar datos personales al Servicio a
            través de las propiedades de conversión, los parámetros de URL,
            los nombres de campaña ni cualquier otro campo de libre
            configuración del tracker (p. ej. emails, teléfonos, documentos
            de identidad). Sealmetrics podrá eliminar la información
            detectada en contravención de esta cláusula y, en caso de
            incumplimiento persistente, suspender el envío de datos del sitio
            afectado.
          </p>
          <p>
            Al conectar claves de proveedores de IA o destinos de exportación
            propios (BYOK), usted asume las salvaguardas correspondientes
            conforme a la cláusula 6 del DPA y al documento de frontera BYOK.
          </p>

          <H>9. Propiedad intelectual</H>
          <p>
            Sealmetrics es titular de todos los derechos sobre el software,
            código y tecnología del Servicio; las marcas, logos y nombres
            comerciales; la documentación y materiales de marketing; los
            algoritmos e innovaciones técnicas; y el diseño y la interfaz del
            Dashboard. Estos Términos no le otorgan propiedad sobre el
            Servicio, solo una licencia de uso limitada según lo descrito.
          </p>
          <p>
            El Cliente mantiene todos los derechos sobre el Contenido de su
            Sitio Web, sus datos de negocio y sus configuraciones
            personalizadas. Los Datos de Analytics recopilados son propiedad
            del Cliente; Sealmetrics actúa como Encargado del Tratamiento y no
            utiliza sus datos para fines propios: ni entrenamiento de modelos,
            ni benchmarking entre clientes, ni cesión (cláusula 3.1 del DPA).
          </p>
          <p>
            Si nos proporciona sugerencias, ideas o feedback sobre el
            Servicio, nos otorga licencia gratuita e irrevocable para
            utilizarlas; podemos implementarlas sin obligación de compensación
            y usted no está obligado a proporcionar feedback. No puede
            utilizar las marcas de Sealmetrics sin autorización; puede indicar
            que utiliza Sealmetrics como cliente, pero no puede implicar
            patrocinio o afiliación sin acuerdo.
          </p>

          <H>10. Datos y privacidad</H>
          <p>
            El tratamiento de datos personales se rige por nuestra{" "}
            <a href="/privacy/" className="underline">
              Política de Privacidad
            </a>
            , que forma parte de estos Términos. Sealmetrics actúa como
            Encargado del Tratamiento de los Datos de Analytics y el Cliente
            actúa como Responsable del Tratamiento; el{" "}
            <a href="/es/dpa/" className="underline">
              DPA
            </a>{" "}
            establece las obligaciones de cada parte y forma parte integrante
            de estos Términos.
          </p>
          <p>
            Como Responsable del Tratamiento, el Cliente debe: tener base
            legal para recopilar datos de Visitantes; informar a los
            Visitantes sobre el uso de analytics; obtener consentimiento donde
            sea requerido (cookies); responder a solicitudes de derechos de
            los Visitantes; y notificarnos cualquier instrucción respecto a
            los datos.
          </p>
          <H3>10.4 Uso de inteligencia artificial (LENS)</H3>
          <p>
            El proveedor de IA por defecto es &laquo;Seal AI&raquo;, operado
            íntegramente en la Unión Europea (inferencia en Scaleway, París,
            sin retención de contenido ni entrenamiento con datos del
            Cliente). Solo procesa datos estadísticos agregados; nunca datos
            identificables de visitantes. Si el Cliente conecta su propia
            clave de un proveedor externo (BYOK), ese proveedor actúa por
            designación directa del Cliente (cláusula 6.1 del DPA). Más
            información en la Política de Privacidad y el DPA.
          </p>
          <H3>10.5 Subencargados y transferencias internacionales</H3>
          <p>
            Utilizamos subencargados para prestar el Servicio; la lista
            actualizada está publicada en{" "}
            <a href="/es/dpa/" className="underline">
              sealmetrics.com/es/dpa
            </a>{" "}
            y notificamos los cambios con antelación razonable que permite
            ejercer la oposición (cláusula 4.3 del DPA). Los datos de
            visitantes se tratan exclusivamente en la Unión Europea; las
            únicas transferencias (emails de usuarios de cuenta) están
            protegidas por SCCs/DPF. Más detalles en la cláusula 7 del DPA.
          </p>
          <H3>10.7 Seguridad y brechas</H3>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas,
            incluyendo cifrado en tránsito (TLS 1.2+) y en reposo (AES-256),
            control de acceso basado en roles, monitorización y logging de
            seguridad y copias de seguridad regulares (ver también nuestra{" "}
            <a href="/security/" className="underline">
              arquitectura de seguridad
            </a>
            ). En caso de brecha de seguridad, le notificaremos sin dilación
            indebida, proporcionaremos información para
            cumplir sus obligaciones RGPD y colaboraremos en la gestión del
            incidente.
          </p>

          <H>11. Confidencialidad</H>
          <p>
            Cada parte se compromete a mantener confidencial: la información
            técnica, comercial o financiera de la otra parte; los términos
            específicos de acuerdos Enterprise; cualquier información marcada
            como confidencial; y los Datos de Analytics del Cliente. No se
            considera confidencial la información que sea de dominio público
            (sin incumplimiento), ya fuera conocida por la parte receptora,
            sea recibida legítimamente de un tercero, sea desarrollada
            independientemente o deba divulgarse por obligación legal. Las
            obligaciones de confidencialidad permanecen vigentes durante la
            relación contractual y durante{" "}
            <strong className="text-text-primary">3 años</strong> después de
            su terminación.
          </p>

          <H>12. Disponibilidad y soporte</H>
          <p>
            Objetivo de disponibilidad:{" "}
            <strong className="text-text-primary">99.9%</strong> (excluido
            mantenimiento programado). Los mantenimientos programados se
            notifican con antelación razonable; los mantenimientos
            de emergencia pueden realizarse sin previo aviso. Para planes
            Scale y Enterprise pueden aplicar SLAs específicos (compromisos
            de disponibilidad, créditos por incumplimiento, tiempos de
            respuesta de soporte), establecidos en acuerdos separados.
          </p>
          <Tbl
            rows={[
              ["Plan", "Canal"],
              ["Agentic", "Documentación (autoservicio)"],
              ["Growth", "Email"],
              ["Scale", "Email, soporte prioritario"],
              ["Enterprise", "Email, gestor de cuenta dedicado"],
            ]}
          />
          <p>
            El soporte no incluye desarrollo personalizado, integración con
            sistemas del Cliente, formación presencial (salvo acuerdo),
            problemas causados por uso incorrecto ni problemas en el Sitio Web
            del Cliente.
          </p>

          <H>13. Garantías y exenciones</H>
          <H3>13.1 Garantías de Sealmetrics</H3>
          <p>
            Sealmetrics garantiza que: el Servicio funcionará sustancialmente
            según la documentación; implementamos medidas de seguridad
            razonables; cumplimos con las leyes aplicables en la prestación
            del Servicio; y tenemos derecho a otorgar la licencia del
            Servicio.
          </p>
          <H3>13.2 Exención de garantías</H3>
          <p>
            SALVO LO EXPRESAMENTE INDICADO, EL SERVICIO SE PROPORCIONA
            &laquo;TAL CUAL&raquo; Y &laquo;SEGÚN DISPONIBILIDAD&raquo;.
            Sealmetrics NO garantiza que: el Servicio será ininterrumpido o
            libre de errores; los resultados obtenidos serán precisos o
            completos; el Servicio cumplirá todos sus requisitos específicos;
            ni que todos los errores serán corregidos.
          </p>
          <H3>13.3 Exclusión de garantías implícitas</H3>
          <p>
            EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, EXCLUIMOS TODAS LAS
            GARANTÍAS IMPLÍCITAS, INCLUYENDO: comerciabilidad, idoneidad para
            un propósito particular, no infracción y exactitud de los datos.
          </p>
          <H3>13.4 Uso de IA</H3>
          <p>
            Los insights generados por LENS (IA) son orientativos: no
            sustituyen el juicio profesional, pueden contener inexactitudes y
            deben verificarse antes de tomar decisiones importantes.
            Sealmetrics no garantiza la precisión de los insights de IA.
          </p>

          <H>14. Limitación de responsabilidad</H>
          <H3>14.1 Exclusión de daños indirectos</H3>
          <p>
            EN NINGÚN CASO SEALMETRICS SERÁ RESPONSABLE DE: PÉRDIDA DE
            BENEFICIOS O INGRESOS; PÉRDIDA DE DATOS (MÁS ALLÁ DE LA
            RESTAURACIÓN DESDE BACKUP); PÉRDIDA DE NEGOCIO O CLIENTELA; DAÑOS
            INDIRECTOS, INCIDENTALES, ESPECIALES O CONSECUENTES; NI COSTES DE
            ADQUISICIÓN DE SERVICIOS SUSTITUTOS — INCLUSO SI SE HA ADVERTIDO
            DE LA POSIBILIDAD DE TALES DAÑOS.
          </p>
          <H3>14.2 Límite de responsabilidad</H3>
          <p>
            EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, EL ÚNICO REMEDIO DEL
            CLIENTE FRENTE A SEALMETRICS CONSISTE EN CRÉDITOS O CONDONACIÓN DE
            CUOTAS FUTURAS DEL SERVICIO, HASTA UN MÁXIMO AGREGADO EQUIVALENTE
            A LAS CUOTAS DE LOS 12 MESES ANTERIORES AL HECHO CAUSANTE. EN
            NINGÚN CASO PROCEDERÁ LA DEVOLUCIÓN DE IMPORTES YA ABONADOS NI
            PAGO DINERARIO ALGUNO. Este régimen coincide con la cláusula 8 del
            DPA.
          </p>
          <H3>14.3 Excepciones</H3>
          <p>
            Las limitaciones anteriores NO aplican a: dolo o culpa grave (Art.
            1102 CC); muerte o lesiones personales por negligencia; ni a
            cualquier responsabilidad que la ley no permita excluir o limitar.
          </p>
          <H3>14.4 Base del acuerdo</H3>
          <p>
            Las limitaciones de responsabilidad son un elemento esencial del
            acuerdo y reflejan la asignación de riesgos entre las partes. Los
            precios del Servicio se han establecido considerando estas
            limitaciones.
          </p>

          <H>15. Indemnización</H>
          <H3>15.1 Indemnización por el Cliente</H3>
          <p>
            El Cliente se compromete a indemnizar y mantener indemne a
            Sealmetrics de cualquier reclamación, daño, pérdida,
            responsabilidad y gasto (incluyendo honorarios legales) derivados
            de: el incumplimiento de estos Términos por el Cliente; el uso del
            Servicio por el Cliente o sus Usuarios; la violación de derechos
            de terceros; el incumplimiento de leyes de protección de datos por
            el Cliente; o el contenido del Sitio Web del Cliente.
          </p>
          <H3>15.2 Sin indemnizaciones de Sealmetrics</H3>
          <p>
            Sealmetrics no asume frente al Cliente obligaciones de
            indemnización distintas de las que resulten imperativamente de la
            ley (cláusula 14.3). Si el Servicio fuese objeto de una
            reclamación de terceros por propiedad intelectual, Sealmetrics
            podrá, a su elección: obtener licencia para continuar prestándolo,
            modificarlo para que no infrinja, sustituirlo por un servicio
            funcionalmente equivalente, o terminarlo con condonación de las
            cuotas futuras no disfrutadas. Estos son los únicos recursos del
            Cliente en tal caso.
          </p>

          <H>16. Duración y terminación</H>
          <p>
            El Plan Agentic tiene duración indefinida hasta su terminación por
            cualquiera de las partes; los planes de pago duran el período
            contratado (mensual/anual) y se renuevan automáticamente por
            períodos iguales salvo que el Cliente cancele antes del fin del
            período o Sealmetrics notifique la no renovación con 30 días de
            antelación.
          </p>
          <p>
            Cancelación por el Cliente: en el plan mensual puede cancelar en
            cualquier momento, con efecto al fin del mes en curso; en el plan
            anual puede cancelar en cualquier momento, con efecto al fin del
            año en curso, sin reembolso de los meses restantes (salvo los
            primeros 30 días). Para cancelar: Configuración &gt; Suscripción
            &gt; Cancelar, o email a billing@sealmetrics.com.
          </p>
          <Tbl
            rows={[
              ["Motivo", "Aviso", "Efecto"],
              [
                "Incumplimiento material no subsanado",
                "15 días para subsanar",
                "Terminación",
              ],
              ["Uso prohibido", "Inmediato", "Suspensión/Terminación"],
              ["Impago (30+ días)", "Según Sección 6.4", "Terminación"],
              ["Actividad ilegal", "Inmediato", "Terminación"],
              ["Cese del Servicio", "90 días", "Terminación"],
            ]}
          />
          <p>
            Tras la terminación: el acceso se revoca inmediatamente (o al fin
            del período pagado); los datos quedan disponibles para exportación
            durante 30 días y se eliminan tras 30-60 días (ver Política de
            Retención); se facturan los servicios hasta la fecha de
            terminación; y las obligaciones pendientes sobreviven a la
            terminación (pagos debidos, confidencialidad, indemnización).
            Antes de la eliminación, puede exportar datos desde el Dashboard,
            solicitar una exportación completa a support@sealmetrics.com o
            utilizar la API para extraer los datos. Las siguientes secciones
            sobreviven a la terminación: Definiciones, Propiedad Intelectual,
            Confidencialidad, Limitación de Responsabilidad, Indemnización,
            Ley Aplicable.
          </p>

          <H>17. Modificaciones</H>
          <p>
            Podemos modificar estos Términos ocasionalmente. Cuando lo
            hagamos, publicaremos los Términos actualizados en nuestra web,
            actualizaremos la fecha de &laquo;Última actualización&raquo; y,
            para cambios materiales, notificaremos por email con al menos{" "}
            <strong className="text-text-primary">
              30 días de antelación
            </strong>
            . El uso continuado del Servicio tras la notificación constituye
            aceptación; si no está de acuerdo, puede cancelar antes de que los
            cambios entren en vigor. Los cambios no afectan retroactivamente a
            períodos ya pagados. Podemos realizar cambios inmediatos sin
            previo aviso cuando sean necesarios para cumplir con la ley o
            responder a emergencias de seguridad.
          </p>

          <H>18. Disposiciones generales</H>
          <p>
            <strong className="text-text-primary">Acuerdo completo:</strong>{" "}
            estos Términos, junto con la Política de Privacidad y el DPA,
            constituyen el acuerdo completo entre las partes y sustituyen
            cualquier acuerdo o comunicación anterior.{" "}
            <strong className="text-text-primary">
              Independencia de las cláusulas:
            </strong>{" "}
            si alguna cláusula se considera inválida o inaplicable, se
            limitará o eliminará en la medida mínima necesaria y las demás
            permanecerán en pleno vigor.{" "}
            <strong className="text-text-primary">Renuncia:</strong> la no
            exigencia del cumplimiento de cualquier disposición no constituye
            renuncia al derecho de exigirlo posteriormente.
          </p>
          <p>
            <strong className="text-text-primary">Cesión:</strong> el Cliente
            no puede ceder estos Términos sin consentimiento previo por
            escrito; Sealmetrics puede ceder libremente en caso de fusión,
            adquisición o venta de activos, y notificará cualquier cesión.{" "}
            <strong className="text-text-primary">
              Relación entre las partes:
            </strong>{" "}
            nada en estos Términos crea una relación de empleo, agencia, joint
            venture o sociedad; cada parte actúa como contratista
            independiente.{" "}
            <strong className="text-text-primary">Fuerza mayor:</strong>{" "}
            ninguna parte será responsable por incumplimientos debidos a
            causas fuera de su control razonable (desastres naturales,
            guerras, pandemias, fallos de terceros, etc.), siempre que
            notifique prontamente y tome medidas razonables para mitigar.
          </p>
          <Tbl
            rows={[
              ["Tipo de notificación", "Método válido"],
              [
                "Notificaciones legales a Sealmetrics",
                "Email a legal@sealmetrics.com o correo certificado",
              ],
              ["Notificaciones al Cliente", "Email registrado en la cuenta"],
              [
                "Notificaciones del Servicio",
                "Email o mensaje en el Dashboard",
              ],
            ]}
          />
          <p>
            <strong className="text-text-primary">Idioma:</strong> en caso de
            discrepancia entre versiones en diferentes idiomas, prevalecerá la
            versión en español.
          </p>

          <H>19. Ley aplicable y jurisdicción</H>
          <p>
            Estos Términos se regirán e interpretarán de acuerdo con las leyes
            de <strong className="text-text-primary">España</strong>, sin
            perjuicio de las normas sobre conflicto de leyes. Para cualquier
            disputa derivada de estos Términos, las partes se someten a la
            jurisdicción exclusiva de los tribunales de{" "}
            <strong className="text-text-primary">Barcelona, España</strong>.
            Si usted es consumidor residente en la UE, nada en esta sección
            limita sus derechos legales como consumidor ni la jurisdicción de
            los tribunales de su lugar de residencia.
          </p>
          <p>
            Para disputas menores, ambas partes acuerdan intentar una
            resolución amistosa antes de acudir a los tribunales; puede
            contactarnos en legal@sealmetrics.com. Si es consumidor en la UE,
            puede utilizar la plataforma de resolución de litigios en línea:
            https://ec.europa.eu/consumers/odr
          </p>

          <H>20. Contacto</H>
          <Tbl
            rows={[
              ["Asunto", "Contacto"],
              ["General", "info@sealmetrics.com"],
              ["Soporte técnico", "support@sealmetrics.com"],
              ["Facturación", "billing@sealmetrics.com"],
              ["Privacidad", "privacy@sealmetrics.com"],
              ["Legal", "legal@sealmetrics.com"],
            ]}
          />
          <p>
            <strong className="text-text-primary">Sealmetrics S.L.</strong> —
            Carrer de Tirso de Molina 36, 08940 Cornellà de Llobregat,
            Barcelona, España.
          </p>

          <p className="pt-6 border-t border-warm-100 text-[0.85rem] text-text-tertiary">
            Al utilizar Sealmetrics, usted acepta estos Términos del Servicio.
            © 2026 Sealmetrics S.L. Todos los derechos reservados. También
            disponible:{" "}
            <a href="/terms/" className="underline">
              English version
            </a>{" "}
            ·{" "}
            <a href="/privacy/" className="underline">
              Política de Privacidad
            </a>{" "}
            ·{" "}
            <a href="/es/dpa/" className="underline">
              DPA
            </a>{" "}
            ·{" "}
            <a href="/security/" className="underline">
              Seguridad
            </a>
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
