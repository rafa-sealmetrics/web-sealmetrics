import type { Metadata } from "next";
import { postDates } from "@/lib/content/blog";
import { PostByline } from "@/components/ui/PostByline";
import { getAlternates } from "@/lib/i18n/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
  speakableWebPageSchema,
} from "@/lib/schema";
import { CommercialModule } from "@/components/ui/CommercialModule";

const SLUG = "audit-your-analytics-ai-privacy";
const URL = `/es/blog/${SLUG}`;
const TITLE =
  "Cómo auditar si la IA de tu analítica es realmente privada (checklist de 5 preguntas)";
const DESCRIPTION =
  "Cinco preguntas que cualquier marketer o DPO puede plantear a un proveedor de analítica con IA: quién es dueño de la inferencia, dónde se ejecuta, qué se conserva, qué entrena y si puedes marcharte. Con las respuestas que deberían tranquilizarte y las que no.";

export const metadata: Metadata = {
  title: "Audita la privacidad de la IA de tu analítica",
  description: "Cinco preguntas para tu proveedor de analítica con IA: quién es dueño de la inferencia, dónde se ejecuta, qué se conserva, qué entrena y si puedes marcharte.",
  openGraph: {
    title: "Audita la IA de tu analítica: checklist de privacidad en 5 preguntas",
    description:
      "Un checklist neutral para comprobar si una función de analítica con IA es realmente privada: propiedad, ubicación, retención, entrenamiento y salida.",
    type: "article",
    url: "https://sealmetrics.com/es/blog/audit-your-analytics-ai-privacy/",
    siteName: "Sealmetrics",
    locale: "es_ES",
    images: ["https://sealmetrics.com/og/blog/audit-your-analytics-ai-privacy.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Audita la IA de tu analítica: checklist de privacidad en 5 preguntas",
    description: "Un checklist neutral para comprobar si una función de analítica con IA es realmente privada: propiedad, ubicación, retención, entrenamiento y salida.",
    images: ["https://sealmetrics.com/og/blog/audit-your-analytics-ai-privacy.png"],
  },
  alternates: {
    languages: getAlternates(`/blog/${SLUG}`),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "¿Cómo sé si la IA de mi herramienta de analítica cumple el RGPD?",
    answer:
      "Empieza por lo que la IA recibe de verdad. Si tu analítica no recoge IPs, cookies ni identificadores de visitante, no hay datos personales en el prompt que proteger. Después revisa la cadena de tratamiento: quién es propietario de la empresa que ejecuta el modelo, si la inferencia se queda en la UE, qué se conserva y durante cuánto tiempo, y si algo se usa para entrenar. Un proveedor que no pueda responder a eso por escrito no puede sostener tu responsabilidad proactiva del artículo 5.2.",
  },
  {
    question: "¿Cómo compruebo si una herramienta de IA entrena con mis datos?",
    answer:
      "Búscalo en el contrato, no en la página de marketing. El compromiso debe figurar en el contrato de encargo del tratamiento o en la lista de subencargados como una afirmación explícita de que las entradas y salidas de cliente no se usan para entrenar ni mejorar modelos, sin que tú tengas que solicitar nada. Fórmulas del tipo «podemos usar datos agregados o desidentificados para mejorar nuestros servicios» son un sí, no un no.",
  },
  {
    question: "¿Un centro de datos en la UE hace que un proveedor de IA cumpla el RGPD?",
    answer:
      "No. La ubicación de un centro de datos te dice dónde reposan los datos, no quién puede exigir acceso a ellos. La CLOUD Act estadounidense obliga a los proveedores sujetos a jurisdicción de EE. UU. a entregar los datos que posean o controlen con independencia de dónde estén almacenados, y sigue a la matriz corporativa, no al servidor. Una región europea operada por una empresa de capital estadounidense es residencia sin soberanía.",
  },
  {
    question: "¿Qué significa realmente retención cero en una API de IA?",
    answer:
      "Debería significar que prompts y respuestas no se escriben en disco una vez completada la petición. Lee las excepciones con atención: casi todos los proveedores mantienen una muy acotada, por ejemplo conservar una petición fallida durante un periodo corto para investigar un error grave del servicio. Una excepción documentada y limitada es ingeniería normal; una ventana de retención sin documentar, no.",
  },
  {
    question: "¿Qué preguntas debo hacer a un proveedor de IA antes de firmar?",
    answer:
      "Cinco: quién es propietario de la entidad que ejecuta la inferencia, dónde se ejecuta esa inferencia en exclusiva, qué se conserva y durante cuánto tiempo, si algo entrena un modelo y si el modelo es portable el día que te marches. La primera respuesta es la que abre o cierra la puerta: si hay una matriz estadounidense, las demás no eliminan la exposición. La última te dice si tu expediente de cumplimiento seguirá siendo reproducible el año que viene.",
  },
];

export default function AuditYourAnalyticsAiPrivacyPageEs() {
  const dates = postDates("audit-your-analytics-ai-privacy", "es");

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: TITLE,
          description: DESCRIPTION,
          ...dates,
          url: URL,
          category: "Privacidad",
          author: {
            name: "Rafa Jiménez",
            url: "/es/authors/rafa-jimenez",
            jobTitle: "Founder, Sealmetrics",
          },
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Blog", url: "/es/blog" },
          { name: "Audita la IA de tu analítica", url: URL },
        ])}
      />
      <JsonLd data={faqPageSchema(FAQ, URL)} />
      <JsonLd
        data={speakableWebPageSchema({
          url: URL,
          name: TITLE,
          selectors: [".key-takeaways", ".tldr"],
        })}
      />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/es/blog" },
          { label: "Audita la IA de tu analítica" },
        ]}
        locale="es"
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Privacidad
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              Cómo auditar si la IA de tu analítica es realmente privada (checklist de 5 preguntas)
            </h1>
            <PostByline
              {...dates}
              readTime="7 min de lectura"
              authorName="Rafa Jiménez"
              authorUrl="/es/authors/rafa-jimenez"
              locale="es"
            />
          </header>

          <p className="tldr mb-12 text-[1.15rem] leading-[1.7] text-text-secondary font-serif italic">
            Casi todas las páginas de privacidad sobre IA están escritas para
            sobrevivir a una lectura en diagonal. Cinco preguntas rompen ese
            truco: quién es dueño de la inferencia, dónde se ejecuta, qué se
            guarda, qué entrena y si puedes marcharte. Hazlas en ese orden y el
            marketing se cae en unos diez minutos.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Conclusiones clave
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                La primera pregunta es la puerta: si la empresa que ejecuta la
                inferencia tiene matriz estadounidense, la CLOUD Act sigue a la
                matriz, no al centro de datos, y las otras cuatro respuestas no
                pueden deshacerlo.
              </li>
              <li>
                &quot;Podemos procesar en la UE&quot; no es lo mismo que
                &quot;solo procesamos en la UE&quot;. Pide exclusividad y
                pregunta si un endpoint global puede enrutar la petición a otro
                sitio.
              </li>
              <li>
                Los compromisos de retención y de no entrenamiento van en el
                contrato de encargo del tratamiento y en la lista de
                subencargados, no en una página de marketing. Una excepción
                acotada y documentada es aceptable; una vaga, no.
              </li>
              <li>
                La portabilidad también es una cuestión de privacidad: un modelo
                de pesos abiertos se puede fijar, inspeccionar y reproducir,
                mientras que una API cerrada puede cambiar bajo tus pies sin
                avisar.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              Hoy toda herramienta de analítica tiene una función de IA, y toda
              función de IA tiene su página de privacidad. Se leen bien. También
              están escritas, en general, para tranquilizar más que para poder
              ser desmentidas: mucho &quot;nivel empresarial&quot; y muy poco
              sobre quién ejecuta exactamente el modelo y qué pasa con la
              petición.
            </p>
            <p>
              No necesitas formación jurídica para comprobarlo. Necesitas cinco
              preguntas hechas en el orden correcto, porque el orden importa: la
              primera puede invalidar las respuestas a todas las demás. Mándalas
              por correo, pide respuestas por escrito y guárdalas. Ese
              intercambio es, además, la prueba que tu expediente de
              responsabilidad proactiva necesita.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Pregunta 1: ¿quién es propietario de la empresa que ejecuta la inferencia?
            </h2>
            <p>
              No quién te vende el producto, sino quién opera la máquina donde
              corre el modelo. Suelen ser empresas distintas, y la que importa es
              la segunda.
            </p>
            <p>
              El motivo es jurisdiccional. La <strong>CLOUD Act</strong>{" "}
              estadounidense (2018) obliga a cualquier proveedor sujeto a
              jurisdicción de EE. UU. a entregar los datos que posea o controle,
              con independencia de en qué punto del mundo estén almacenados. La
              sección 702 de FISA añade un régimen aparte de recopilación de
              inteligencia exterior dirigido a personas no estadounidenses. Ambos
              siguen a la matriz corporativa. A ninguno le afecta qué región
              elegiste en un desplegable.
            </p>
            <p>
              Así que si la respuesta menciona un grupo con sede en EE. UU.,
              estás en el terreno de la residencia, no en el de la soberanía, y
              deberías parar a evaluar esa exposición antes de invertir tiempo en
              el resto del checklist. Desarrollamos esta distinción con más
              detalle en{" "}
              <Link
                href="/es/blog/residency-is-not-sovereignty"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                Residencia no es soberanía
              </Link>
              .
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Pregunta 2: ¿dónde se ejecuta la inferencia, en exclusiva?
            </h2>
            <p>
              La palabra que sostiene la frase es <em>exclusiva</em>. Muchos
              proveedores pueden procesar en Europa. Bastantes menos se
              comprometen a no procesar en ningún otro sitio, y en la distancia
              entre esas dos afirmaciones es donde viven los incidentes.
            </p>
            <p>
              Merece la pena hacer dos repreguntas. Primera: el endpoint al que
              llamas realmente, ¿fija una región o es un endpoint global que
              puede enrutar según capacidad? Vertex AI de Google, por ejemplo,
              permite fijar región en la UE, pero su endpoint global no da
              ningún control sobre dónde ocurre el procesamiento: mismo
              proveedor, dos respuestas muy distintas. Segunda: ¿el failover y la
              capacidad de desbordamiento están en la misma región? Un estado
              estable anclado a una región con un failover sin anclar no es
              procesamiento exclusivo en la UE.
            </p>
            <p>
              También conviene conocer cómo está el mercado. Los proveedores
              estadounidenses han construido opciones europeas reales: OpenAI
              ofrece residencia de datos en la UE configurable por proyecto y con
              retención cero en la región; Azure OpenAI ofrece un tipo de
              despliegue con EU Data Boundary. La API propia de Anthropic no
              tiene opción de residencia en la UE: el procesamiento europeo pasa
              por las regiones UE de AWS Bedrock o por Google Vertex AI. Son
              mejoras auténticas frente a mandar los datos a Virginia. Ninguna
              cambia la respuesta a la primera pregunta.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Pregunta 3: ¿qué se conserva y durante cuánto tiempo?
            </h2>
            <p>
              Pregunta por tres cosas por separado, porque los proveedores suelen
              responder a una y dejar que des por supuestas las demás: el
              contenido del prompt, la salida del modelo y los metadatos de la
              llamada.
            </p>
            <p>
              Una respuesta creíble de retención cero enumera sus excepciones. Un
              proveedor que dice &quot;no conservamos nada, nunca, bajo ninguna
              circunstancia&quot; o no está operando la infraestructura o no la
              está describiendo con precisión: los sistemas reales guardan algo
              cuando algo se rompe. Lo que quieres es el límite escrito: qué
              condición dispara la retención, qué se guarda, durante cuánto
              tiempo y quién puede leerlo.
            </p>
            <p>
              Los metadatos son la parte que todo el mundo olvida. Contar tokens
              para facturar es legítimo y necesario. Almacenar el texto de todas
              las preguntas que ha hecho tu equipo, indefinidamente, para
              &quot;mejorar la experiencia&quot; es otra cosa muy distinta con el
              mismo nombre.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Pregunta 4: ¿hay algo que entrene un modelo?
            </h2>
            <p>
              Tiene una versión limpia y una versión blanda, y tú quieres la
              limpia. Limpia: las entradas y salidas de cliente nunca se usan
              para entrenar, ajustar ni mejorar ningún modelo, sin que tengas que
              hacer nada. Blanda: &quot;no entrenamos con tus datos&quot;
              seguido, varios párrafos después, de una excepción para datos
              agregados, desidentificados o de telemetría.
            </p>
            <p>
              Comprueba dónde vive el compromiso. Si solo está en un post o en
              unas FAQ, es una declaración de intenciones actual. Si está en el
              contrato de encargo del tratamiento, es una obligación. Y si el
              compromiso depende de que alguien haya activado un interruptor en
              un panel de administración, entonces tu postura de privacidad
              depende de la configuración, es decir, de quien la configure la
              próxima vez.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Pregunta 5: ¿puedes marcharte y puedes reproducir lo que pasó?
            </h2>
            <p>
              Es la pregunta que casi nadie hace, y la que decide si tu expediente
              de cumplimiento seguirá significando algo dentro de doce meses.
            </p>
            <p>
              Un modelo detrás de una API cerrada puede cambiar sin avisar. La
              versión que evaluaste, sometiste a red teaming y documentaste en tu
              análisis de riesgos puede no ser la que responda a tus consultas el
              trimestre que viene, y no tendrás forma de demostrar lo contrario.
              Un modelo de pesos abiertos con licencia permisiva se puede fijar a
              una versión exacta, inspeccionar, someter a red teaming y
              reproducir; y si el proveedor de hosting te decepciona, esos mismos
              pesos están disponibles en otros, de modo que cambiar es una
              decisión de infraestructura y no una reconstrucción.
            </p>
            <p>
              La portabilidad suele archivarse en compras. Su sitio está en la
              revisión de privacidad, porque la reproducibilidad es lo que
              convierte una afirmación en prueba.
            </p>

            <CommercialModule
              locale="es"
              hook="¿Quieres oír estas cinco respuestas en directo en lugar de leerlas en un PDF? Haznos las cinco preguntas del checklist en una demo: modelo abierto gpt-oss-120b en Scaleway París, dato en Dublín, nada entrena modelos de terceros."
            />

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Cómo suena una buena respuesta y cómo suena una evasiva
            </h2>
            <p>
              Rara vez recibirás una negativa frontal. Lo que recibirás es una
              respuesta a una pregunta parecida. Esta tabla es un descodificador
              aproximado.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-[0.85rem]">
                <thead>
                  <tr className="border-b border-warm-200">
                    <th className="text-left py-3 pr-6 text-text-tertiary font-medium">
                      Pregunta
                    </th>
                    <th className="text-left py-3 px-6 text-text-secondary font-medium">
                      Respuesta evasiva
                    </th>
                    <th className="text-left py-3 pl-6 text-green-muted font-medium">
                      Respuesta que quieres
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      q: "1. ¿Quién es dueño de la inferencia?",
                      bad: "«Trabajamos con proveedores de nivel empresarial con sólidos compromisos de privacidad.»",
                      good: "Entidad jurídica concreta, país de constitución y matriz última, en la lista de subencargados.",
                    },
                    {
                      q: "2. ¿Dónde se ejecuta?",
                      bad: "«Tus datos pueden procesarse en la UE.»",
                      good: "«La inferencia se ejecuta únicamente en <país concreto>. Sin endpoint global y sin failover entre regiones.»",
                    },
                    {
                      q: "3. ¿Qué se conserva?",
                      bad: "«Conservamos los datos solo el tiempo necesario.»",
                      good: "Retención cero por defecto, con cada excepción nombrada, acotada en el tiempo y documentada.",
                    },
                    {
                      q: "4. ¿Algo entrena un modelo?",
                      bad: "«No entrenamos con tus datos», más una excepción para datos agregados o desidentificados.",
                      good: "Sin entrenamiento con entradas ni salidas, recogido en el contrato de encargo, y sin que tengas que solicitar exclusión.",
                    },
                    {
                      q: "5. ¿Puedes marcharte?",
                      bad: "«El modelo es propietario y mejora de forma continua.»",
                      good: "Modelo de pesos abiertos y licencia con nombre, versión fijada, disponible en más de un proveedor.",
                    },
                  ].map((row) => (
                    <tr
                      key={row.q}
                      className="border-b border-warm-100 last:border-0"
                    >
                      <td className="py-3 pr-6 text-text-body">{row.q}</td>
                      <td className="py-3 px-6 text-text-secondary">{row.bad}</td>
                      <td className="py-3 pl-6 text-text-primary font-medium">
                        {row.good}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Una regla general: una respuesta fácil de verificar vale más que
              una respuesta impresionante. &quot;Scaleway SAS, París,
              Francia&quot; se comprueba en una tarde. &quot;Infraestructura
              europea líder&quot; no se comprueba de ninguna manera.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Un ejemplo real: aplicarnos el checklist a nosotros mismos
            </h2>
            <p>
              Un checklist que nunca te aplicas a ti mismo es un documento
              comercial. Así que aquí van nuestras cinco respuestas, las de{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/private-ai-architecture"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                Seal AI
              </Link>
              , la capa de IA privada dentro de Sealmetrics.
            </p>
            <p>
              <strong>1. Propiedad.</strong> La inferencia se ejecuta en Scaleway
              Generative APIs. Scaleway es una empresa francesa cuya matriz es el
              grupo Iliad, sin capital estadounidense, y declara explícitamente
              que sus servicios de IA no están sujetos a leyes
              extraterritoriales como la CLOUD Act estadounidense. Figura como
              encargado del tratamiento del artículo 28 en nuestra lista de
              subencargados: Scaleway SAS, París, Francia, finalidad inferencia
              LLM.
            </p>
            <p>
              <strong>2. Ubicación.</strong> París, Francia, y nada más. Como los
              datos no salen de la UE y el encargado no tiene matriz
              estadounidense, el Capítulo V del RGPD — el de transferencias
              internacionales — no llega a activarse. Sin cláusulas contractuales
              tipo (SCC), sin evaluación de impacto de las transferencias y sin
              depender de que el Marco de Privacidad de Datos UE-EE. UU.
              sobreviva a su próxima vista.
            </p>
            <p>
              <strong>3. Retención.</strong> Scaleway aplica Zero Data Retention
              por defecto, con una excepción documentada: ante un error grave del
              servicio, la petición fallida puede conservarse hasta dos semanas
              para análisis de causa raíz. Por nuestra parte, la capa de medición
              persiste únicamente contadores de tokens — organización, modelo,
              tokens de entrada y de salida — para cuota y facturación. El
              contenido del prompt y de la respuesta nunca se persiste ahí. El
              transporte es TLS 1.2 o superior con verificación de certificado.
            </p>
            <p>
              <strong>4. Entrenamiento.</strong> Nada. Ni entrenamiento con datos
              de cliente en el proveedor de hosting, ni mecanismo posible: el
              modelo es un conjunto estático de pesos publicados, así que tus
              preguntas no pueden influir en él.
            </p>
            <p>
              <strong>5. Salida.</strong> El modelo es{" "}
              <code className="font-mono text-[0.9em]">gpt-oss-120b</code>, de
              pesos abiertos bajo licencia Apache 2.0. La versión exacta se puede
              fijar, inspeccionar y reproducir, y esos mismos pesos los sirven
              otros proveedores soberanos europeos: OVHcloud AI Endpoints, IONOS
              AI Model Hub con el procesamiento confinado en Alemania, y Nebius
              en Finlandia y Francia, aunque Nebius cotiza en EE. UU., así que
              ahí la gobernanza merece tanta atención como la geografía. Elegimos
              nuestro proveedor; no estamos atados a él.
            </p>
            <p>
              Dos matices honestos, porque un checklist que solo produce
              respuestas favorables no es un checklist. Scaleway tiene ISO/IEC
              27001:2022 y HDS, concedidas en julio de 2024; su cualificación
              SecNumCloud con la ANSSI está en curso desde enero de 2025 y{" "}
              <em>no</em> está concedida: decimos &quot;en cualificación&quot; y
              nada más fuerte. Y los clientes que prefieran otro modelo pueden
              configurar su propia clave de OpenAI, Anthropic, Gemini o DeepSeek,
              en cuyo caso sus prompts van a ese proveedor bajo los términos de
              ese proveedor. Es una decisión deliberada, cliente a cliente, y se
              mantiene claramente separada de Seal AI, que sigue siendo la opción
              por defecto precisamente para que la privacidad no dependa de la
              configuración.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Qué hacer con las respuestas
            </h2>
            <p>
              Puntúalas como lo haría un regulador: no por el tono, sino por si
              cada afirmación está escrita en algún sitio vinculante y
              comprobable. Un proveedor que responde a la primera pregunta con
              una entidad concreta y una matriz concreta te ha dicho más en una
              línea que una página entera de &quot;privacidad de nivel
              empresarial&quot;. Un proveedor que no puede responderla también te
              ha dicho algo.
            </p>
            <p>
              Si quieres el desarrollo técnico completo detrás de nuestras
              propias respuestas, está en la{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/private-ai-architecture"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                documentación de arquitectura de Seal AI
              </Link>
              , y la auditoría de mercado que llevó a la elección del modelo está
              en el{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/model-selection"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                informe de selección de modelo
              </Link>
              .
            </p>
          </div>

          <CommercialModule
            locale="es"
            hook="¿Vas a pasarle este checklist a tu proveedor actual? Pásanoslo a nosotros primero en una demo y compara las respuestas sobre tu propio caso."
          />

          <section className="mt-16 pt-10 border-t border-warm-100">
            <h2 className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-5">
              Lecturas relacionadas
            </h2>
            <div className="space-y-4">
              <div>
                <Link
                  href="/es/blog/residency-is-not-sovereignty"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Residencia no es soberanía: la pregunta que debes hacerle a tu proveedor de analítica con IA
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">6 min de lectura</p>
              </div>
              <div>
                <Link
                  href="/es/blog/the-prompt-is-born-clean"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  El prompt nace limpio: por qué la analítica sin consentimiento hace sencilla la IA privada
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">5 min de lectura</p>
              </div>
              <div>
                <Link
                  href="/es/blog/meet-seal-ai"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Te presentamos Seal AI: el asistente de analítica que nunca envía tus datos a Estados Unidos
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">5 min de lectura</p>
              </div>
            </div>
          </section>
          <FaqSection items={FAQ} locale="es" />
        </div>
      </article>
    </>
  );
}
