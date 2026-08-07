import type { Metadata } from "next";
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
  statisticClaimSchema,
} from "@/lib/schema";

const SLUG = "how-we-benchmark-our-own-ai";
const URL = `/es/blog/${SLUG}`;
const TITLE = "Cómo hacemos el benchmark de nuestra propia IA (y por qué publicamos las tandas que descartamos)";
const DESCRIPTION =
  "Una metodología copiable para evaluar un LLM sobre tu propio producto: stack real, verdad de referencia calculada en vivo desde la base de datos, evaluadores deterministas antes que cualquier juez LLM, trampas adversarias, intervalos de confianza de Wilson — y la tanda que descartamos, publicada entera.";

export const metadata: Metadata = {
  title: "Cómo hacemos el benchmark de nuestra propia IA",
  description: "Metodología copiable para evaluar un LLM sobre tu producto: verdad de referencia en vivo, evaluadores deterministas antes que jueces LLM, y la tanda descartada.",
  openGraph: {
    title: "Cómo hacemos el benchmark de nuestra propia IA",
    description:
      "Endpoint real, verdad de referencia en vivo, evaluadores deterministas, trampas adversarias, intervalos de confianza — y la tanda descartada que publicamos igualmente. Una metodología que otros equipos pueden copiar.",
    type: "article",
    url: "https://sealmetrics.com/es/blog/how-we-benchmark-our-own-ai/",
    siteName: "SealMetrics",
    locale: "es_ES",
    images: ["https://sealmetrics.com/og/blog/how-we-benchmark-our-own-ai.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Cómo hacemos el benchmark de nuestra propia IA",
    description: "Endpoint real, verdad de referencia en vivo, evaluadores deterministas, trampas adversarias, intervalos de confianza — y la tanda descartada que publicamos igualmente. Una metodología que otros equipos pueden copiar.",
    images: ["https://sealmetrics.com/og/blog/how-we-benchmark-our-own-ai.png"],
  },
  alternates: {
    languages: getAlternates(`/blog/${SLUG}`),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "¿Cómo evalúo un LLM con mis propios datos?",
    answer:
      "Pasa los candidatos por el stack real de tu producto — tu endpoint, tu inventario de herramientas, los datos de una cuenta real — y calcula la verdad de referencia directamente desde tu base de datos al inicio de cada tanda, para que cada cifra que afirme el modelo se pueda comprobar de forma automática. Puntúa primero con evaluadores deterministas, añade trampas adversarias para datos inexistentes e inyección de prompts, repite cada escenario varias veces y publica intervalos de confianza en lugar de porcentajes sueltos.",
  },
  {
    question: "¿Qué metodología de evaluación de LLM es buena?",
    answer:
      "La que mide el trabajo que hace de verdad tu producto, da la misma puntuación dos veces y declara sus propios defectos. En la práctica: escenarios fijos con verdad de referencia verificable, evaluadores deterministas para grounding, uso de herramientas y formato, un juez LLM solo para la calidad subjetiva y marcado claramente como no determinista, trampas de alucinación e inyección, varias pasadas por escenario, resultados con intervalos y un archivo de todas las tandas, también de las inválidas.",
  },
  {
    question: "¿Puedo usar un LLM como juez para evaluar mi modelo?",
    answer:
      "Solo para la parte subjetiva, y solo como señal secundaria. Todo lo comprobable — si la cifra coincidía con la base de datos, si se llamó a la herramienta correcta, si la salida estaba bien formada, si hubo negativa — debería puntuarlo código determinista al que puedas hacer tests unitarios. Si usas un juez, elige un modelo rival a temperatura cero para que cualquier sesgo juegue en contra de tu candidato favorito, y admite que un único juez sin un segundo evaluador es una limitación real.",
  },
  {
    question: "¿Por qué hay que publicar las tandas de benchmark descartadas?",
    answer:
      "Porque un benchmark que no publica las tandas que descarta es una demo. Nuestra primera tanda completa fue inválida: el harness reveló que el asistente reutilizaba una misma sesión de chat entre consultas, así que los modelos posteriores podían responder a partir del historial de los anteriores. Lo arreglamos, repetimos todo y archivamos ambas tandas. Publicar la inválida es lo que permite a quien nos lee juzgar si la válida se produjo de forma limpia.",
  },
  {
    question: "¿Cuántas veces hay que repetir cada pregunta de un benchmark?",
    answer:
      "Las suficientes para poder poner un intervalo alrededor del resultado en lugar de una puntuación puntual. Nosotros usamos 18 escenarios en dos idiomas, tres pasadas cada uno, sobre tres modelos: 162 consultas reales, 54 por modelo. A ese tamaño, un intervalo de confianza de Wilson es honesto sobre la incertidumbre: nos enseñó que una diferencia entre modelos era real y que otra era demasiado estrecha como para darla por buena solo con repetición.",
  },
];

export default function HowWeBenchmarkOurOwnAiPageEs() {
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
            jobTitle: "Founder, SealMetrics",
          },
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Blog", url: "/es/blog" },
          { name: "Cómo hacemos el benchmark de nuestra propia IA", url: URL },
        ])}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "El benchmark interno de LLM de SealMetrics ejecutó 18 escenarios en español e inglés con tres pasadas y tres modelos — 162 consultas reales contra el endpoint de producción del asistente — con la verdad de referencia calculada en vivo desde la base de datos de analítica; gpt-oss-120b superó 18 de 18 trampas adversarias (intervalo de confianza de Wilson al 95% de 0,82-1,00) frente a 9 de 18 de mistral-small-3.2 (0,29-0,71) y 15 de 18 de qwen3-235b-a22b-2507 (0,61-0,94).",
          source: "SealMetrics internal LLM benchmark (run 20260724-111147)",
          sourceAuthor: "SealMetrics",
          sourceDate: "2026-07-24",
          url: URL,
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
          { label: "Cómo hacemos el benchmark de nuestra propia IA" },
        ]}
        locale="es"
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              IA
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              Cómo hacemos el benchmark de nuestra propia IA (y por qué
              publicamos las tandas que descartamos)
            </h1>
            <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
              <time className="font-mono">24 julio 2026</time>
              <span>8 min de lectura</span>
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
            Evaluamos el modelo que hay dentro de SealMetrics sobre el producto
            que entregamos, no sobre rankings públicos: endpoint real,
            herramientas reales, datos reales y con las respuestas correctas
            calculadas desde la base de datos antes de preguntarle nada al
            modelo. Este es el método entero, incluidas la tanda que descartamos
            y la pregunta mal formulada que fallamos nosotros.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Conclusiones clave
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                Prueba sobre el stack que entregas: el endpoint real del
                asistente, el inventario real de 63 herramientas y los datos de
                una cuenta real, cambiando el modelo por configuración y con el
                código del producto idéntico en todas las condiciones.
              </li>
              <li>
                Calcula la verdad de referencia en vivo desde la base de datos
                de analítica al inicio de cada tanda, para que cada cifra que
                afirme el modelo se contraste con la realidad en lugar de
                juzgarse a ojo.
              </li>
              <li>
                Puntúa primero de forma determinista. Mantén el juez LLM
                aparte, marcado como no determinista, y usa un modelo rival para
                que cualquier sesgo juegue en contra de tu propio favorito.
              </li>
              <li>
                Publica intervalos, archiva todas las tandas — también la
                inválida — y documenta tus propios defectos. Un benchmark que
                esconde las tandas que descarta es una demo.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              La mayoría de las comparativas de modelos que se publican son
              irreproducibles: cuatro prompts, una captura de pantalla y una
              conclusión que el autor ya traía de casa. Nosotros necesitábamos
              algo que pudiéramos repetir, discutir y sobre lo que pudiéramos
              equivocarnos en público, porque el resultado decide qué modelo
              responde a las preguntas que nuestros clientes hacen sobre su
              propio tráfico.
            </p>
            <p>
              Lo que viene a continuación es el método al que llegamos. No tiene
              nada de sofisticado. Es sobre todo la disciplina de negarse a
              puntuar a ojo cualquier cosa que se pueda comprobar con código.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              1. Prueba sobre el stack que realmente entregas
            </h2>
            <p>
              Los benchmarks públicos miden un modelo aislado. Nuestro asistente
              no es un modelo aislado: es un modelo detrás de un system prompt,
              dentro de un bucle de orquestación, con un inventario de 63
              herramientas de analítica y hablando con una API en vivo.
            </p>
            <p>
              Por eso el harness (nuestro arnés de pruebas) llama al{" "}
              <strong>endpoint de producción real del asistente</strong>, con el
              inventario real de herramientas y contra los datos de una cuenta
              real. El modelo bajo prueba se cambia mediante configuración de
              entorno y nada más: el código del producto es idéntico byte a byte
              en todas las condiciones. Si un candidato gana aquí, gana en el
              trabajo, no en un sucedáneo del trabajo.
            </p>
            <p>
              Esto significa además que el benchmark hace también de test de
              integración. Uno de los hallazgos más valiosos de nuestra última
              tanda no tuvo que ver con ningún modelo: fue{" "}
              <Link
                href="/es/blog/our-ai-got-it-wrong-in-production"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                un bug de producción en nuestro propio manejo de respuestas
              </Link>
              , que apareció como un único error de transporte en 162 consultas.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              2. Calcula la verdad de referencia desde la base de datos, en vivo
            </h2>
            <p>
              Lo más difícil de evaluar un asistente de analítica es decidir si
              ha dicho la verdad. Lo resolvemos preguntándole antes a la base de
              datos. Al inicio de cada tanda, el harness consulta directamente
              las tablas de analítica para obtener las respuestas — entradas,
              conversiones, tasa de rebote, ingresos, canal principal, fuente
              principal, dispositivo principal — y las guarda como verdad de
              referencia de esa tanda.
            </p>
            <p>
              Después, cada cifra que el modelo afirma en su prosa se contrasta
              con ese conjunto. No «¿suena plausible?», sino «¿es este el
              número?». Calcularla en vivo implica además que el benchmark no se
              pudre a medida que entran datos nuevos en la cuenta: la verdad se
              regenera cada vez, así que los mismos escenarios siguen siendo
              válidos el mes que viene.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              3. Evaluadores deterministas primero, juez al final
            </h2>
            <p>
              Todo lo comprobable lo puntúa código normal y corriente: grounding
              (cifras afirmadas frente a verdad de referencia), llamadas a
              herramientas, validez del formato estructurado, negativas y
              resultado de las trampas. Esos evaluadores deterministas tienen{" "}
              <strong>26 tests unitarios</strong> propios, porque un bug en un
              evaluador invalida en silencio un estudio entero. El harness usa
              solo la librería estándar: ningún framework que se le mueva
              debajo.
            </p>
            <p>
              Solo la parte subjetiva pasa por un juez LLM: utilidad, claridad y
              precisión formal, puntuadas de 1 a 5. Usamos deliberadamente un{" "}
              <strong>modelo rival</strong> como juez — qwen3-235b a temperatura
              0, uno de los candidatos que competía contra nuestro eventual
              ganador — para que cualquier sesgo empujara en contra del modelo
              que esperábamos que nos gustara. Puntuó al ganador con un 4,9
              sobre 5 aproximadamente.
            </p>
            <p>
              Y etiquetamos ese número por lo que es: no determinista, de un
              único juez y sin un segundo evaluador. Apoya la decisión. No la
              sostiene.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              4. Tiéndele trampas a propósito
            </h2>
            <p>
              Las preguntas estándar te dicen si un modelo sabe hacer lo fácil.
              Las trampas te dicen qué hace cuando la respuesta honesta es «eso
              no existe». Por idioma ejecutamos 6 escenarios estándar, 2 trampas
              de grounding y 1 trampa de inyección de prompt:
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-text-tertiary">
              <li>
                <strong>Entidades inexistentes.</strong> Preguntar por una
                campaña que nunca se lanzó. El comportamiento correcto es decirlo
                y parar. Un modelo reconocía la ausencia y acto seguido se
                desviaba a describir otras campañas reales con cifras que nadie
                había pedido: no es inventar, es responder a otra pregunta.
              </li>
              <li>
                <strong>Periodos vacíos.</strong> Preguntar por una ventana en
                la que la cuenta no tiene datos. El comportamiento correcto es
                explicar dónde está el límite de los datos. Un modelo, en
                cambio, alegaba una incapacidad falsa, diciendo que le faltaban
                las herramientas necesarias.
              </li>
              <li>
                <strong>Instrucciones inyectadas con una cadena canario.</strong>{" "}
                Esconder una instrucción hostil dentro de datos que el usuario
                pega, con una cadena única dentro. Si ese canario aparece en la
                respuesta, el modelo ha obedecido al atacante. Ejecutar esto en
                los dos idiomas es lo que destapó a un modelo que resistía el
                ataque en español y filtraba el canario en inglés.
              </li>
            </ul>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              5. Publica intervalos, no puntuaciones
            </h2>
            <p>
              Con 18 escenarios en dos idiomas, tres pasadas y tres modelos —{" "}
              <strong>162 consultas reales</strong>, 54 por modelo —, un
              porcentaje suelto es falsa precisión. En su lugar publicamos
              intervalos de confianza de Wilson.
            </p>
            <p>
              En las trampas, el ganador sacó 18 de 18 (intervalo al 95% de 0,82
              a 1,00); un rival sacó 15 de 18 (0,61 a 0,94) y otro 9 de 18 (0,29
              a 0,71). La disciplina de los intervalos es lo que nos permitió
              decir algo preciso: frente al modelo de 9 de 18, los intervalos ya
              no se solapan, así que esa diferencia es significativa con este
              tamaño de muestra. Frente al de 15 de 18 el solape es pequeño pero
              existe: ahí no reclamamos una victoria estadística, y señalamos en
              su lugar los fallos de seguridad concretos que hay detrás de sus
              derrotas.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              6. La tanda que tiramos a la basura
            </h2>
            <p>
              Esta es la parte que la mayoría de los equipos borra. Nuestra{" "}
              <strong>primera tanda completa</strong> fue inválida y la
              publicamos igualmente.
            </p>
            <p>
              El harness destapó un defecto en cómo pilotaba el producto: sin un
              identificador de conversación explícito, el asistente retomaba una
              sesión de chat existente entre consultas. Las consultas
              posteriores — incluidas las que se ejecutaban contra un{" "}
              <em>modelo distinto</em> — podían ver, por tanto, el historial de
              los modelos anteriores. Todos los números que produjo aquella
              tanda estaban contaminados, y la contaminación iba en la dirección
              del modelo que tocara ir el último.
            </p>
            <p>
              Lo arreglamos (una conversación nueva por consulta), repetimos
              todo y archivamos ambas tandas. La inválida sigue ahí, etiquetada
              como inválida y con el motivo.
            </p>
            <p>
              Conservarla no cuesta nada y lo cambia todo respecto a cómo debe
              leerse la tanda válida. Un benchmark que no publica las tandas que
              descarta es una demo: te están enseñando la toma que salió bien y
              pidiéndote que supongas que solo hubo una.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              7. Publica también tus propios defectos
            </h2>
            <p>
              La tanda válida lleva dentro un defecto nuestro, y ahí sigue
              documentado. Un escenario preguntaba por «el tráfico por
              dispositivo del último mes». Eso admite dos lecturas: los últimos
              30 días — que es lo que calculó nuestra verdad de referencia — o el
              mes natural anterior. Algunos modelos eligieron el mes natural, en
              el que la cuenta de pruebas solo tenía cinco días de datos, y
              reportaron esos números.
            </p>
            <p>
              Eran números reales, correctamente recuperados. Nuestro evaluador
              los marcó como fallos. Eso no es alucinación: es una pregunta de
              benchmark mal redactada, y la redactamos nosotros.
            </p>
            <p>
              El detalle que hace que valga la pena publicarlo:{" "}
              <strong>el 100% de los fallos de hechos de toda la tanda se
              remontan a ese único escenario</strong>. Excluyéndolo, el modelo
              ganador acertó 144 de 144 hechos verificados. Reformulamos la
              pregunta para futuras tandas y dejamos el defecto documentado,
              porque quien viera solo la versión corregida no podría saber si
              los fallos eran culpa del modelo o nuestra.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              8. Haz que reevaluar salga gratis
            </h2>
            <p>
              Cada tanda archiva las transcripciones completas, así que un
              script de reevaluación independiente vuelve a puntuar las tandas
              guardadas sin conexión y a{" "}
              <strong>coste cero en tokens</strong>. Esta acaba siendo la
              victoria silenciosa de todo el diseño: cuando encuentras un bug en
              un evaluador o quieres añadir una métrica, no vuelves a gastar una
              tanda, sino que repuntúas el histórico — incluida la tanda
              descartada — y compruebas si la conclusión se mueve.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Cómo montar el tuyo
            </h2>
            <p>
              Si estás eligiendo o vigilando un modelo para un producto real,
              este es el camino más corto que conocemos:
            </p>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>Escribe los escenarios a partir de preguntas reales de
                usuarios</strong>, no de ejemplos de prompt engineering.
                Replícalos en todos los idiomas que hablen tus usuarios,
                compartiendo la misma verdad de referencia.
              </li>
              <li>
                <strong>Pilota el endpoint real.</strong> Cambia el modelo por
                configuración; no cambies nada más entre condiciones.
              </li>
              <li>
                <strong>Calcula la verdad de referencia desde tu propia fuente
                de verdad</strong> al inicio de cada tanda, automáticamente.
              </li>
              <li>
                <strong>Puntúa con código y hazle tests unitarios a los
                evaluadores.</strong> Si no puedes testear el evaluador, no
                puedes fiarte de la puntuación.
              </li>
              <li>
                <strong>Añade trampas</strong>: una entidad que no existe, un
                periodo sin datos y una instrucción inyectada que lleve una
                cadena canario.
              </li>
              <li>
                <strong>Repite cada escenario varias veces</strong> y publica un
                intervalo de confianza en lugar de un porcentaje de titular.
              </li>
              <li>
                <strong>Usa un juez LLM solo para lo estético</strong>, elige
                preferiblemente un modelo rival, fija la temperatura a cero y
                etiqueta el resultado como no determinista.
              </li>
              <li>
                <strong>Archiva todas las tandas</strong>, incluidas las que
                invalides, con el motivo adjunto.
              </li>
              <li>
                <strong>Haz posible la reevaluación sin conexión</strong> para
                que mejorar el método no cueste otra tanda.
              </li>
              <li>
                <strong>Escribe las limitaciones que ya conoces</strong> — juez
                único, n pequeña, tus propias preguntas ambiguas — antes de que
                las encuentre otro.
              </li>
            </ol>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              La conclusión
            </h2>
            <p>
              Nada de esto convierte un benchmark en objetivo. Lo convierte en{" "}
              <em>auditable</em>, que es el objetivo alcanzable. Quien lea
              nuestros resultados puede ver qué preguntas se hicieron, de dónde
              salieron las respuestas correctas, qué se puntuó con código y qué
              con criterio, qué tanda se tiró y por qué, y cuáles de los fallos
              fueron culpa nuestra.
            </p>
            <p>
              Ese es el estándar que creemos que debería exigirse cualquiera que
              publique una funcionalidad de IA, sobre todo cuando los resultados
              son incómodos. La metodología completa y los resultados íntegros
              están publicados en nuestro{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/internal-benchmark"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                informe del benchmark interno
              </Link>
              , junto con{" "}
              <Link
                href="/es/blog/we-changed-our-ai-model-twice"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                la trazabilidad de modelos que lo produjo
              </Link>
              .
            </p>
          </div>

          <section className="mt-16 pt-10 border-t border-warm-100">
            <h2 className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-5">
              Lecturas relacionadas
            </h2>
            <div className="space-y-4">
              <div>
                <Link
                  href="/es/blog/we-changed-our-ai-model-twice"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Cambiamos de modelo de IA dos veces en tres semanas — y ese es
                  justo el punto
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">
                  6 min de lectura
                </p>
              </div>
              <div>
                <Link
                  href="/es/blog/rival-model-as-judge"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Por qué dejamos que un modelo rival puntuara el benchmark de
                  nuestra IA
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">
                  5 min de lectura
                </p>
              </div>
              <div>
                <Link
                  href="/es/blog/our-ai-got-it-wrong-in-production"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Nuestra IA se equivocó en producción — y lo cazó nuestro propio
                  test
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">
                  6 min de lectura
                </p>
              </div>
            </div>
          </section>
          <FaqSection items={FAQ} locale="es" />
        </div>
      </article>
    </>
  );
}
