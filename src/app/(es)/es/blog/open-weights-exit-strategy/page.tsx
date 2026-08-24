import type { Metadata } from "next";
import { getAlternates } from "@/lib/i18n/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  articleSchema,
  breadcrumbSchema,
  definedTermSchema,
  faqPageSchema,
  speakableWebPageSchema,
} from "@/lib/schema";
import { CommercialModule } from "@/components/ui/CommercialModule";

const SLUG = "open-weights-exit-strategy";
const URL = `/es/blog/${SLUG}`;
const TITLE = "Pesos abiertos como estrategia de salida: no ser rehén de tu proveedor de IA";
const DESCRIPTION =
  "Con una API cerrada alquilas un comportamiento que no puedes inspeccionar, que puede cambiar bajo tus pies sin avisar y a un precio que fija otro. Los pesos abiertos no son una ideología: son la capacidad de irte. Y una garantía de privacidad de la que no puedes marcharte no es una garantía.";

export const metadata: Metadata = {
  title: "Pesos abiertos: tu estrategia de salida en IA",
  description: "Con una API cerrada alquilas un comportamiento que no puedes inspeccionar y a un precio que fija otro. Los pesos abiertos son la capacidad de irte.",
  openGraph: {
    title: "Pesos abiertos como estrategia de salida",
    description:
      "Modelos de pesos abiertos frente a LLM propietarios en la empresa: fijar versiones, evitar la dependencia del proveedor (lock-in) y poder cambiar de host sin cambiar el producto.",
    type: "article",
    url: "https://sealmetrics.com/es/blog/open-weights-exit-strategy/",
    siteName: "Sealmetrics",
    locale: "es_ES",
    images: ["https://sealmetrics.com/og/blog/open-weights-exit-strategy.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Pesos abiertos como estrategia de salida",
    description: "Modelos de pesos abiertos frente a LLM propietarios en la empresa: fijar versiones, evitar la dependencia del proveedor (lock-in) y poder cambiar de host sin cambiar el producto.",
    images: ["https://sealmetrics.com/og/blog/open-weights-exit-strategy.png"],
  },
  alternates: {
    languages: getAlternates(`/blog/${SLUG}`),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "¿Qué diferencia hay entre un modelo de pesos abiertos y uno propietario?",
    answer:
      "En un modelo de pesos abiertos los parámetros entrenados se publican bajo licencia, así que puedes descargarlos, inspeccionarlos, ejecutarlos en el hardware que elijas y fijar una versión exacta para siempre. En un modelo propietario envías peticiones a una API y recibes salidas: los parámetros se quedan con el proveedor, que controla el versionado, el precio, la disponibilidad y la jurisdicción donde corre la inferencia. Lo primero es algo que tienes; lo segundo, algo que alquilas.",
  },
  {
    question: "¿Cómo evito la dependencia de un proveedor de IA?",
    answer:
      "Elige un modelo cuyos pesos puedas llevarte contigo. Fija la versión exacta en lugar de un alias flotante, mantén una batería de evaluación que puedas repetir contra cualquier host y confirma que ese mismo modelo lo sirve más de un proveedor antes de comprometerte. Si cambiar significa los mismos pesos en otro host, tus clientes no notan ningún cambio de comportamiento. Si significa otro modelo, toca reescribir prompts, reajustar herramientas y volver a probarlo todo.",
  },
  {
    question: "¿Puede una API de IA cerrada cambiar de comportamiento sin avisar?",
    answer:
      "Sí. Una versión deprecada o un reajuste discreto por parte del proveedor pueden cambiar la salida de tu producto de la noche a la mañana, y no tienes forma de reproducir el comportamiento anterior porque nunca lo tuviste. No es gestión de riesgos hipotética: es el ciclo de vida normal de un modelo alojado. Fijar una versión de pesos abiertos elimina toda esa categoría de problema, porque el artefacto no cambia salvo que lo cambies tú.",
  },
  {
    question: "¿Sirven los modelos de pesos abiertos para tool-calling en producción?",
    answer:
      "Para la mayoría de cargas de analítica, sí — pero conviene ser honesto con el techo. Los mejores modelos propietarios siguen por delante en el uso agéntico de herramientas multivuelta más difícil, y cerrar esa distancia auto-hospedando tiene un coste operativo real: GPUs, planificación de capacidad, actualizaciones y guardias. La pregunta relevante no es qué modelo gana en abstracto, sino si el abierto supera el listón de tu carga con margen de sobra.",
  },
  {
    question: "¿El Reglamento Europeo de IA (AI Act) favorece a los modelos de pesos abiertos?",
    answer:
      "Concede a los modelos publicados bajo licencias libres y de código abierto exenciones parciales de algunas obligaciones de los proveedores de IA de propósito general, y los pesos abiertos mejoran mucho la auditabilidad: la versión exacta se puede fijar, inspeccionar, someter a red team y reproducir. Para una empresa que despliega una funcionalidad de IA, esa reproducibilidad es la ventaja práctica: puedes acreditar qué hizo tu sistema, en lugar de describir una API cuyo interior nunca viste.",
  },
];

export default function OpenWeightsExitStrategyPageEs() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: TITLE,
          description: DESCRIPTION,
          datePublished: "2026-07-24",
          dateModified: "2026-07-28",
          url: URL,
          category: "IA",
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
          { name: "Pesos abiertos como estrategia de salida", url: URL },
        ])}
      />
      <JsonLd
        data={definedTermSchema({
          name: "Modelo de pesos abiertos",
          description:
            "Modelo de aprendizaje automático cuyos parámetros entrenados se publican bajo una licencia que permite descargarlos, inspeccionarlos, modificarlos y auto-hospedarlos. A diferencia de un modelo propietario accesible solo a través de la API de un proveedor, un modelo de pesos abiertos puede fijarse a una versión exacta, someterse a red team de forma independiente, reproducirse más adelante y servirse desde varios proveedores de infraestructura — lo que convierte la elección de modelo en un activo portable en lugar de una dependencia alquilada.",
          url: URL,
          related: [{ name: "Dependencia del proveedor de IA", url: URL }],
        })}
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
        items={[{ label: "Blog", href: "/es/blog" }, { label: "Pesos abiertos como estrategia de salida" }]}
        locale="es"
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              IA
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              Pesos abiertos como estrategia de salida: no ser rehén de tu proveedor de IA
            </h1>
            <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
              <time className="font-mono">24 julio 2026</time>
              <span>6 min de lectura</span>
              <span>
                Por{" "}
                <Link
                  href="/es/authors/rafa-jimenez"
                  className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Rafa Jiménez
                </Link>
              </span>
            </div>
          </header>

          <p className="tldr mb-12 text-[1.15rem] leading-[1.7] text-text-secondary font-serif italic">
            Los pesos abiertos no son una posición filosófica. Son la capacidad
            de irte: fijar una versión, inspeccionarla, reproducirla y llevártela
            a otro sitio sin que tus clientes lo noten. Una garantía de
            privacidad de la que no puedes marcharte no es una garantía.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Conclusiones clave
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                Una API cerrada significa alquilar un comportamiento que no puedes
                inspeccionar, que pueden reajustar o deprecar bajo tus pies, con precio
                fijado unilateralmente y en una jurisdicción que no elegiste tú.
              </li>
              <li>
                Los pesos abiertos bajo licencia permisiva te permiten fijar la versión
                exacta, hacerle red team, reproducir resultados, cambiar de host o
                auto-hospedarlo: la salida es real, y eso es lo que hace creíble el
                compromiso.
              </li>
              <li>
                El modelo que hay dentro de Seal AI es Apache 2.0 y cabe en una sola GPU
                de 80 GB, y esos mismos pesos los sirven varios proveedores soberanos
                europeos — cambiar de host implica cero migración de comportamiento para
                el cliente.
              </li>
              <li>
                Seamos justos con el contrapeso: los mejores modelos propietarios siguen
                por delante en el uso agéntico de herramientas multivuelta más difícil, y
                auto-hospedar tiene un coste operativo real.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              La mayoría de los debates sobre modelos de pesos abiertos son debates
              sobre valores. Este va de poder de negociación.
            </p>
            <p>
              Cuando construyes una funcionalidad de producto sobre la API de un
              modelo cerrado, no estás comprando software. Estás alquilando un
              comportamiento. Ese comportamiento vive en el hardware de otro, lo
              definen parámetros que nunca verás, puede cambiar sin que tú
              intervengas, lo pone en precio una parte que no tiene obligación de
              consultarte y se ejecuta bajo el ordenamiento jurídico al que esa parte
              pertenezca.
            </p>
            <p>
              Nada de eso es malintencionado. Es simplemente la forma del trato. La
              pregunta que merece la pena hacerse antes de firmarlo es sencilla: si
              este acuerdo deja de funcionarme, ¿qué puedo hacer exactamente al
              respecto?
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Cuatro cosas que no controlas en una API cerrada
            </h2>
            <p>
              <strong>No puedes fijar el comportamiento.</strong> Los endpoints de
              modelo se deprecan y los modelos se reajustan discretamente entre
              versiones. Cualquiera de las dos cosas puede cambiar de la noche a la
              mañana la salida de tu producto — otra redacción, otros hábitos de
              tool-calling, otros límites de rechazo — y no puedes volver atrás,
              porque nunca tuviste el artefacto. Tu suite de regresión se pone en rojo
              y tu único recurso es abrir un ticket de soporte.
            </p>
            <p>
              <strong>No puedes inspeccionarlo.</strong> Puedes probar las salidas de
              la API, que conviene hacerlo, pero no puedes examinar los pesos, hacer tu
              propio red team contra el modelo en sí ni reproducir un resultado de hace
              seis meses para explicarle a un cliente qué pasó. Para cualquier cosa que
              tengas que acreditar más adelante, esa carencia importa.
            </p>
            <p>
              <strong>No puedes fijar el precio.</strong> El precio de la inferencia lo
              pone una sola parte. Si el precio por token se duplica, una funcionalidad
              que era cómodamente rentable puede dejar de serlo, y reconstruirla sobre
              el modelo de otro proveedor no es trabajo de un fin de semana.
            </p>
            <p>
              <strong>No puedes elegir la jurisdicción.</strong> Una región europea es
              una decisión de residencia, no de soberanía. Si la empresa que opera la
              inferencia responde ante la ley estadounidense, también lo hacen los
              datos que custodia — una distinción que desarrollamos en{" "}
              <Link
                href="/es/blog/residency-is-not-sovereignty"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                Residencia no es soberanía
              </Link>
              .
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Qué te compran realmente los pesos abiertos
            </h2>
            <p>
              Un modelo de pesos abiertos publicado bajo una licencia permisiva cambia
              la posición en los cuatro puntos, y lo hace por una razón nada
              glamurosa: el artefacto es un fichero, y puedes tener una copia.
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-text-tertiary">
              <li>
                <strong>Fijar la versión exacta.</strong> El modelo con el que salió tu
                producto es el modelo que tu producto conserva, hasta que decidas lo
                contrario. La deriva de comportamiento pasa a ser un cambio que haces
                tú, no un cambio que te ocurre.
              </li>
              <li>
                <strong>Inspeccionarlo y hacerle red team.</strong> Puedes atacarlo,
                sondearlo y caracterizar sus modos de fallo tú mismo, en lugar de
                inferirlos desde un endpoint.
              </li>
              <li>
                <strong>Reproducir resultados.</strong> Mismos pesos, mismos ajustes de
                muestreo, mismas entradas: una evaluación que hiciste hace un año se
                puede repetir. Esa es la diferencia entre una traza auditable y una
                anécdota.
              </li>
              <li>
                <strong>Cambiar de host, o auto-hospedarlo.</strong> Si las
                condiciones, el precio, la latencia o la gobernanza de un proveedor
                dejan de convenirte, el modelo se va contigo.
              </li>
            </ul>

            <CommercialModule
              locale="es"
              hook="¿Podrías cambiar de proveedor de IA sin cambiar de analítica? En una demo ves cómo LENS corre sobre pesos abiertos — gpt-oss-120b en Scaleway París — y qué pasaría si mañana quisieras llevártelo."
            />

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Nuestro montaje, en concreto
            </h2>
            <p>
              Seal AI funciona sobre <strong>gpt-oss-120b</strong>: pesos abiertos bajo
              licencia <strong>Apache 2.0</strong>, 117B de parámetros totales con 5,1B
              activos por token en un esquema de mezcla de expertos, ventana de
              contexto de 128k y cuantización nativa MXFP4 que le permite caber en una
              <strong> sola GPU de 80 GB</strong> (H100 o MI300X), con soporte de
              primer nivel en vLLM.
            </p>
            <p>
              Ese último detalle es el que hace el trabajo estratégico. Un modelo que
              necesita un rack es un modelo que solo unos pocos operadores pueden
              servir. Un modelo que cabe en un acelerador es un modelo que pueden
              servir muchos — y, en la práctica, muchos lo hacen. Además de nuestro
              host actual, las Generative APIs de Scaleway en París, los mismos pesos
              los sirven otros proveedores soberanos europeos:{" "}
              <strong>OVHcloud AI Endpoints</strong>,{" "}
              <strong>IONOS AI Model Hub</strong> con el procesamiento confinado en
              Alemania, y <strong>Nebius</strong> en Finlandia y Francia — aunque
              Nebius cotiza en Estados Unidos, así que es un caso para evaluar la
              gobernanza y no solo la geografía.
            </p>
            <p>
              La consecuencia práctica para los clientes: cambiar de host es un detalle
              de despliegue. Mismos pesos, mismo comportamiento, mismas respuestas. No
              hay migración de prompts, ni reajuste del inventario de herramientas, ni
              «esta semana el asistente suena distinto». Compáralo con sustituir el
              modelo de un proveedor cerrado por el de otro, que es una reescritura
              disfrazada de cambio de configuración.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Esto es lo que hace sostenible la promesa de privacidad
            </h2>
            <p>
              La posición de privacidad de Seal AI es concreta: inferencia solo en
              París, en una empresa francesa sin matriz estadounidense, cero retención
              de datos por defecto, sin entrenamiento con datos de clientes y — al no
              cruzarse ninguna frontera — sin activar en absoluto el Capítulo V del
              RGPD. Ni cláusulas contractuales tipo, ni evaluación de impacto de
              transferencias, ni depender de que el Marco de Privacidad de Datos
              UE-EE. UU. sobreviva a su próxima cita en los tribunales.
            </p>
            <p>
              Un compromiso así solo dura lo que dure tu capacidad de mantenerlo cuando
              cambien las circunstancias. Si el modelo fuera cerrado y estuviera atado
              a un proveedor, la promesa duraría exactamente lo que duraran las
              condiciones de ese proveedor. Como los pesos son abiertos y portables, la
              promesa es nuestra: si mañana cambiara la postura de un host, podríamos
              llevar el mismo modelo a otro proveedor soberano europeo sin pedir a
              nuestros clientes que acepten un producto distinto.
            </p>
            <p>
              Los pesos abiertos también encajan bien con el Reglamento Europeo de IA
              (AI Act). Los modelos publicados bajo licencias libres y de código
              abierto reciben exenciones parciales de algunas obligaciones de los
              proveedores de IA de propósito general y — más útil en el día a día — los
              pesos abiertos mejoran materialmente la auditabilidad. La versión exacta
              se puede fijar, inspeccionar, someter a red team y reproducir. Una API
              cerrada puede cambiar bajo tus pies sin decir nada.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              El contrapeso honesto
            </h2>
            <p>
              Los pesos abiertos no salen gratis, y no encabezan todas las
              clasificaciones.
            </p>
            <p>
              En el uso agéntico de herramientas multivuelta más exigente, los modelos
              propietarios más potentes siguen por delante. En tau-bench retail,
              gpt-oss-120b obtiene 67,8 frente a una referencia de GPT-4o de 60,4-61,2
              — respetable —, mientras que Claude Sonnet 4 reporta 80,5, medido con
              extended thinking más un añadido al prompt según la propia nota al pie de
              Anthropic. Claude Sonnet 4.5 reporta 86,2 en tau-2-bench, que es un
              benchmark distinto y no directamente comparable. Esas matizaciones
              importan, pero el titular también: en cadenas agénticas largas, los
              modelos cerrados de frontera van por delante.
            </p>
            <p>
              Y la opción de salida tiene su propio precio. Auto-hospedar significa
              GPUs, planificación de capacidad, ciclos de actualización y alguien de
              guardia. La mayoría de los equipos no deberían hacerlo — pero deberían
              poder hacerlo, y saber lo que costaría. Una salida de emergencia que
              nunca has medido es decoración.
            </p>
            <p>
              Lo que inclinó la balanza para nosotros es que esa distancia no aprieta
              en nuestra carga de trabajo. Un asistente de analítica responde preguntas
              ancladas a tus datos con un inventario de herramientas bien definido; no
              está ejecutando cadenas autónomas de veinte pasos. Dentro del universo
              serverless soberano europeo, gpt-oss-120b es el modelo más potente
              disponible, y los mejores modelos abiertos con tool-calling que quedan
              fuera de él no tienen ninguna oferta gestionada soberana europea: usarlos
              de forma limpia implicaría auto-hospedar modelos en el rango de 355B a 1T
              de parámetros.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              La pregunta que hacerle a tu proveedor
            </h2>
            <p>
              No «¿tu modelo es open source?». Eso invita a una respuesta filosófica.
              Haz la operativa:{" "}
              <em>si necesitara irme, ¿cuánto me costaría y qué notarían mis
              clientes?</em>
            </p>
            <p>
              Si la respuesta es «un redespliegue, y nada», la relación es una
              elección. Si es «una reescritura, y todo», es una dependencia del
              proveedor (lock-in) — y las dependencias acaban teniendo precio, antes o
              después.
            </p>
            <p>
              El razonamiento detrás de nuestra elección de modelo está documentado en
              la{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/model-selection"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                auditoría de selección de modelo de Seal AI
              </Link>
              , y la arquitectura que lo rodea, en la{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/private-ai-architecture"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                documentación de arquitectura de IA privada
              </Link>
              .
            </p>
          </div>

          <CommercialModule
            locale="es"
            hook="¿Le has hecho ya a tu proveedor la pregunta de la salida? Háznosla a nosotros en una demo: modelo abierto, tu clave de Anthropic, OpenAI, Gemini o DeepSeek si la prefieres, y tu dato siempre en la UE."
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
                  href="/es/blog/best-llm-for-data-analytics"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  El mejor LLM para analítica de datos no es el que puntúa más alto en los benchmarks
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">7 min de lectura</p>
              </div>
              <div>
                <Link
                  href="/es/blog/eu-ai-act-for-marketers"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  El Reglamento Europeo de IA para marketers, sin jerga
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">7 min de lectura</p>
              </div>
            </div>
          </section>
          <FaqSection items={FAQ} locale="es" />
        </div>
      </article>
    </>
  );
}
