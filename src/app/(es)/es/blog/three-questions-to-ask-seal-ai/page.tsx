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

const SLUG = "three-questions-to-ask-seal-ai";
const URL = `/es/blog/${SLUG}`;
const TITLE = "Tres preguntas que hacerle hoy a tu IA de analítica";
const DESCRIPTION =
  "Tres ejemplos resueltos para un asistente de analítica con IA: una comparación de periodos, un desglose con razonamiento y una pregunta de interacción. Qué preguntar, qué pasa por dentro y cómo comprobar que la respuesta salió de tus datos.";

export const metadata: Metadata = {
  title: TITLE,
  description: "Tres ejemplos resueltos con un asistente de analítica: comparación de periodos, desglose con razonamiento y una pregunta de interacción. Y cómo verificarlos.",
  openGraph: {
    title: "Tres preguntas que hacerle hoy a tu IA de analítica",
    description:
      "¿Qué se le puede preguntar de verdad a un asistente de analítica con IA? Tres preguntas que merece la pena probar y cómo leer las respuestas.",
    type: "article",
    url: "https://sealmetrics.com/es/blog/three-questions-to-ask-seal-ai/",
    siteName: "SealMetrics",
    locale: "es_ES",
    images: ["https://sealmetrics.com/og/blog/three-questions-to-ask-seal-ai.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Tres preguntas que hacerle hoy a tu IA de analítica",
    description: "¿Qué se le puede preguntar de verdad a un asistente de analítica con IA? Tres preguntas que merece la pena probar y cómo leer las respuestas.",
    images: ["https://sealmetrics.com/og/blog/three-questions-to-ask-seal-ai.png"],
  },
  alternates: {
    languages: getAlternates(`/blog/${SLUG}`),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "¿Qué le puedo preguntar a un asistente de analítica con IA?",
    answer:
      "Cualquier cosa para la que, si no, tendrías que montar un informe: comparaciones entre periodos, desgloses por canal y por fuente, caídas en el embudo, rendimiento de landing pages, resultados de campañas y métricas de interacción. Las tres mejores preguntas para empezar son una comparación de tendencia entre dos periodos, un desglose de tus fuentes de tráfico principales con el razonamiento detrás del ranking y una pregunta de interacción, como la tasa de rebote frente al periodo anterior.",
  },
  {
    question: "¿Cómo sé si la respuesta de una IA de analítica es correcta?",
    answer:
      "Pregúntale por qué. Un asistente con grounding recupera las cifras mediante llamadas a herramientas contra tus datos y puede nombrar la métrica, el periodo y el desglose que hay detrás de cada número que afirma. Si no puede enseñarte esa evidencia, trata la cifra como una afirmación y no como una medición. Como prueba puntual, pregúntale por una campaña que nunca lanzaste: la respuesta correcta es que no hay datos de eso.",
  },
  {
    question: "¿Cómo se calcula la tasa de rebote en SealMetrics?",
    answer:
      "La tasa de rebote son las entradas menos las entradas con interacción, dividido entre las entradas y expresado en porcentaje. Una sesión con interacción es la que tiene más de una página vista. No es lo mismo que la tasa de interacción, y tampoco es la definición que usan todas las herramientas de analítica: compara la tasa de rebote de SealMetrics con tu propio histórico, no con una cifra de otra plataforma.",
  },
  {
    question: "¿Cómo debo formular las preguntas a una IA de analítica?",
    answer:
      "Nombra el periodo de forma explícita en lugar de fiarte del valor por defecto, pide el razonamiento dentro de la misma pregunta y di qué desglose quieres ver. «Compara mis entradas de los últimos 7 días con los 7 anteriores y muéstrame el desglose por canal» da una respuesta mucho más útil que «¿cómo va el tráfico?». Las preguntas concretas obligan al asistente a apoyarse en evidencia concreta.",
  },
  {
    question: "¿Tengo que configurar algo para usar el asistente de IA?",
    answer:
      "No. Seal AI es la capa de IA por defecto dentro de SealMetrics: no hay clave de API que pegar ni cuenta con un proveedor de IA que crear. La inferencia se ejecuta solo en la UE, no se retiene nada por defecto y nada se usa para entrenar. Si prefieres usar tu propio modelo, puedes conectar la clave de tu proveedor, pero no necesitas configurar nada para empezar a preguntar.",
  },
];

export default function ThreeQuestionsToAskSealAiPageEs() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: TITLE,
          description: DESCRIPTION,
          datePublished: "2026-07-24",
          dateModified: "2026-07-28",
          url: URL,
          category: "Producto",
          author: {
            name: "Rafa Jiménez",
            url: "/es/authors/rafa-jimenez",
            jobTitle: "Founder, SealMetrics",
          },
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Blog", url: "/es/blog" },
          { name: "Tres preguntas que hacerle a tu IA de analítica", url: URL },
        ])}
      />
      <JsonLd
        data={definedTermSchema({
          name: "Tasa de rebote (definición de SealMetrics)",
          description:
            "Proporción de entradas que no llegaron a ser sesiones con interacción, calculada como las entradas menos las entradas con interacción, dividido entre las entradas. Una sesión con interacción es la que tiene más de una página vista. La tasa de rebote es la vista inversa de la interacción, no la misma cifra que la tasa de interacción, y las definiciones difieren entre plataformas de analítica — por eso debe compararse contra el histórico propio y no entre herramientas.",
          url: URL,
          related: [{ name: "Entradas", url: URL }],
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
        items={[
          { label: "Blog", href: "/es/blog" },
          { label: "Tres preguntas para tu IA de analítica" },
        ]}
        locale="es"
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Producto
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              Tres preguntas que hacerle hoy a tu IA de analítica
            </h1>
            <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
              <time className="font-mono">24 julio 2026</time>
              <span>4 min de lectura</span>
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
            Lo más difícil de un asistente de analítica con IA es la caja de
            texto en blanco. Aquí tienes tres preguntas que merece la pena
            escribir ahora mismo: qué hace el asistente con cada una y cómo saber
            si la respuesta salió de tus datos o del aire.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Conclusiones clave
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                Empieza con una <strong>comparación de periodos</strong>: ejercita la
                lógica de tendencia y te enseña las llamadas a herramientas que hay
                detrás de la respuesta.
              </li>
              <li>
                Después, un <strong>desglose con razonamiento</strong>: añadir «¿y por
                qué lo dices?» obliga al asistente a enseñar su evidencia.
              </li>
              <li>
                Después, una <strong>pregunta de interacción</strong>. En SealMetrics la
                tasa de rebote son las entradas menos las entradas con interacción,
                dividido entre las entradas; una sesión con interacción tiene más de una
                página vista.
              </li>
              <li>
                Pide siempre el <em>porqué</em>. Es la forma más rápida de verificar que
                los números salieron de tus datos y no de las conjeturas del modelo.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              Seal AI responde preguntas sobre tu analítica en lenguaje natural. No hay
              constructor de consultas que aprender ni nada que configurar — pero sí
              hay una técnica, y la técnica consiste sobre todo en preguntar con
              precisión.
            </p>
            <p>
              Estas tres preguntas son una buena primera sesión. Cada una ejercita una
              parte distinta del asistente, y cada una te da una forma de comprobar la
              respuesta.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              1. La comparación de periodos
            </h2>
            <p className="pl-4 border-l-2 border-warm-200 italic text-text-secondary">
              «Compara mis entradas de los últimos 7 días con los 7 anteriores.»
            </p>
            <p>
              <strong>Qué hace por dentro.</strong> El asistente resuelve las dos
              ventanas en la zona horaria de tu sitio, después llama dos veces a las
              herramientas de visión general — una por periodo — y calcula la
              diferencia con lo que vuelve. No recuerda el dato de la semana pasada: lo
              consulta.
            </p>
            <p>
              <strong>Cómo leer la respuesta.</strong> Comprueba que las dos ventanas
              son las que querías. Después mira juntas la dirección y la magnitud del
              cambio: una variación porcentual pequeña en una semana de poco tráfico es
              ruido, y una buena respuesta lo dirá en lugar de dramatizarlo. Si el
              asistente ofrece un gráfico junto al texto, gráfico y prosa deben
              coincidir; si no coinciden, vuelve a preguntar.
            </p>
            <p>
              Es también la forma más barata de ver la mecánica. Una comparación de
              periodos obliga a hacer al menos dos recuperaciones de datos distintas,
              así que es una demostración limpia de que el asistente funciona
              consultando.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              2. El desglose que pide razonamiento
            </h2>
            <p className="pl-4 border-l-2 border-warm-200 italic text-text-secondary">
              «¿Cuál de mis 3 fuentes principales convierte mejor, y por qué lo dices?»
            </p>
            <p>
              <strong>Qué hace por dentro.</strong> Esta es una pregunta de varios
              pasos. El asistente tiene que ordenar tus fuentes de tráfico, sacar las
              conversiones de cada una en el mismo periodo, dividir unas entre otras y
              después ordenar el resultado. Son varias llamadas a herramientas
              encadenadas, donde la salida de una alimenta la entrada de la siguiente.
            </p>
            <p>
              <strong>Por qué importa el «por qué».</strong> Esas cinco palabras de más
              cambian lo que recibes. Sin ellas obtienes una conclusión. Con ellas
              obtienes una conclusión más las cifras en las que se apoya: qué fuente,
              cuántas entradas, cuántas conversiones y en qué ventana. Ese es el
              material que necesitas para contrastar la afirmación, y es el hábito más
              útil que puedes coger trabajando con un asistente de analítica.
            </p>
            <p>
              <strong>Cómo leer la respuesta.</strong> Mira los volúmenes antes que las
              tasas. Una fuente con una tasa de conversión espectacular sobre un puñado
              de visitas es una curiosidad, no una estrategia. Una buena respuesta saca
              ambas cosas; si solo te da porcentajes, pide los números absolutos.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              3. La pregunta de interacción
            </h2>
            <p className="pl-4 border-l-2 border-warm-200 italic text-text-secondary">
              «¿Cuál es mi tasa de rebote este mes y cómo se compara con el mes
              anterior?»
            </p>
            <p>
              <strong>Qué hace por dentro.</strong> El asistente recupera las entradas y
              las entradas con interacción del mes en curso y de la ventana de
              comparación, y deriva la tasa a partir de ellas.
            </p>
            <p>
              <strong>La definición que conviene conocer.</strong> En SealMetrics, la
              tasa de rebote es:
            </p>
            <p className="pl-4 border-l-2 border-warm-200 font-mono text-[0.9rem] text-text-secondary">
              (entradas − entradas con interacción) ÷ entradas × 100
            </p>
            <p>
              Una sesión <strong>con interacción</strong> es la que tiene más de una
              página vista. De ahí se siguen dos consecuencias. Primera: aquí la tasa de
              rebote es la vista inversa de la interacción, no el mismo número que la
              tasa de interacción — responden a preguntas distintas y no deben usarse
              indistintamente. Segunda: como cada plataforma de analítica define el
              rebote a su manera, esta cifra no es comparable con la tasa de rebote de
              otra herramienta. Compárala con tu propio histórico y te dirá algo real.
            </p>
            <p>
              <strong>Cómo leer la respuesta.</strong> Importa más el movimiento que el
              nivel. Una tasa de rebote alta en una página cuyo único trabajo es
              responder a una pregunta está bien. Esa misma tasa apareciendo de repente
              en una página de categoría es una señal.
            </p>

            <CommercialModule
              locale="es"
              hook="¿Ya tienes tus propias tres preguntas? Hazlas en una demo contra tu tráfico real y compara lo que responde Seal AI con lo que tardaría tu equipo en sacarlas a mano."
            />

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Cómo preguntar mejor
            </h2>
            <ul className="space-y-3 pl-6 list-disc marker:text-text-tertiary">
              <li>
                <strong>Nombra el periodo de forma explícita.</strong> «El mes pasado»
                es ambiguo: puede ser el mes natural anterior o los últimos 30 días. Di
                cuál. Esto lo sabemos por experiencia: una pregunta de nuestro benchmark
                redactada exactamente así concentró todos los fallos factuales de una
                ejecución entera.
              </li>
              <li>
                <strong>Pide el razonamiento en la misma frase.</strong> Añade «¿y por
                qué lo dices?» o «enséñame los números en los que te basas».
              </li>
              <li>
                <strong>Pide el desglose que quieres.</strong> Por canal, por
                dispositivo, por landing page, por campaña. Nombrar la dimensión elimina
                una conjetura.
              </li>
              <li>
                <strong>Pregunta una cosa cada vez.</strong> Tres preguntas en un mismo
                mensaje suelen dar una buena respuesta y dos flojas.
              </li>
              <li>
                <strong>Continúa la conversación en lugar de empezar de cero.</strong>{" "}
                «Ahora desglósalo por dispositivo» es mejor segundo mensaje que volver a
                escribir la pregunta entera.
              </li>
            </ul>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Una advertencia
            </h2>
            <p>
              Pide siempre el <em>porqué</em>. No porque el asistente no sea de fiar,
              sino porque la evidencia es la parte que puedes comprobar y la prosa no.
              Cada cifra que afirme el asistente debería poder rastrearse hasta una
              métrica, un periodo y un desglose que acaba de recuperar de tus datos.
              Cuando puede enseñarte esa cadena, puedes actuar sobre la respuesta.
              Cuando no puede, lo que tienes es una opinión dicha con mucha seguridad.
            </p>
            <p>
              Para una prueba puntual del mismo principio, pregúntale por una campaña
              que nunca lanzaste. La respuesta correcta es que no hay datos de eso — que
              es exactamente el comportamiento que{" "}
              <Link
                href="/es/blog/grounding-analytics-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                comprobamos con trampas de grounding
              </Link>
              .
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Dónde probarlo
            </h2>
            <p>
              El asistente ya está en tu cuenta de SealMetrics: no hay clave que pegar
              ni cuenta con un proveedor de IA que crear, y la inferencia se ejecuta
              solo en la UE sin retener nada por defecto. Abre un sitio, abre el
              asistente y empieza por la primera pregunta.
            </p>
            <p>
              Si prefieres ver antes el detalle de lo que hay debajo, la{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/private-ai-architecture"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                documentación de arquitectura de Seal AI
              </Link>{" "}
              explica cómo trata tus datos, y en{" "}
              <Link
                href="/es/blog/meet-seal-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                la presentación de Seal AI
              </Link>{" "}
              tienes la introducción breve.
            </p>
          </div>

          <CommercialModule
            locale="es"
            hook="¿Quieres pasar de las preguntas de ejemplo a las tuyas? Reserva una demo y lanza tus tres preguntas sobre tu propio dato, con los datos del día listos antes de las 6 AM."
          />

          <section className="mt-16 pt-10 border-t border-warm-100">
            <h2 className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-5">
              Lecturas relacionadas
            </h2>
            <div className="space-y-4">
              <div>
                <Link
                  href="/es/blog/meet-seal-ai"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Te presentamos Seal AI: el asistente de analítica que nunca envía tus datos a Estados Unidos
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">5 min de lectura</p>
              </div>
              <div>
                <Link
                  href="/es/blog/seal-ai-vs-bring-your-own-key"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Seal AI o clave propia (BYOK): cuándo usar cada opción
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">5 min de lectura</p>
              </div>
              <div>
                <Link
                  href="/es/blog/grounding-analytics-ai"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Grounding: por qué una buena IA de analítica no debe saber nada, sino consultar
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">6 min de lectura</p>
              </div>
            </div>
          </section>
          <FaqSection items={FAQ} locale="es" />
        </div>
      </article>
    </>
  );
}
