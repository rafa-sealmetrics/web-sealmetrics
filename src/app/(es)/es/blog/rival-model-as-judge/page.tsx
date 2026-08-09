import type { Metadata } from "next";
import Link from "next/link";
import { getAlternates } from "@/lib/i18n/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  articleSchema,
  breadcrumbSchema,
  definedTermSchema,
  faqPageSchema,
  speakableWebPageSchema,
  statisticClaimSchema,
} from "@/lib/schema";
import { CommercialModule } from "@/components/ui/CommercialModule";

const SLUG = "rival-model-as-judge";
const URL = `/es/blog/${SLUG}`;
const TITLE = "Por qué dejamos que un modelo rival puntúe nuestro benchmark";
const DESCRIPTION =
  "Los jueces LLM favorecen a su propia familia. Así que nombramos juez al candidato que perdió, a temperatura cero, y dejamos toda la puntuación objetiva en código determinista. Así se usa el LLM-as-a-judge sin engañarse a uno mismo.";

export const metadata: Metadata = {
  title: TITLE,
  description: "Los jueces LLM favorecen a su propia familia. Nombramos juez al candidato perdedor, a temperatura cero, y dejamos la puntuación objetiva en código.",
  openGraph: {
    title: "Por qué dejamos que un modelo rival puntúe nuestro benchmark",
    description:
      "El sesgo de autopreferencia existe. La solución no es un prompt mejor: es un juez con motivos para bajarte la nota y evaluadores deterministas haciendo el trabajo objetivo.",
    type: "article",
    url: "https://sealmetrics.com/es/blog/rival-model-as-judge/",
    siteName: "SealMetrics",
    locale: "es_ES",
    images: ["https://sealmetrics.com/og/blog/rival-model-as-judge.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Por qué dejamos que un modelo rival puntúe nuestro benchmark",
    description: "El sesgo de autopreferencia existe. La solución no es un prompt mejor: es un juez con motivos para bajarte la nota y evaluadores deterministas haciendo el trabajo objetivo.",
    images: ["https://sealmetrics.com/og/blog/rival-model-as-judge.png"],
  },
  alternates: {
    languages: getAlternates(`/blog/${SLUG}`),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "¿Qué es LLM-as-a-judge?",
    answer:
      "LLM-as-a-judge (LLM como juez) es la práctica de usar un modelo de lenguaje para puntuar las respuestas de otro, normalmente en cualidades difíciles de comprobar de forma mecánica: utilidad, claridad, tono o calidad general de la respuesta. Es rápido y barato comparado con evaluadores humanos, y por eso se ha vuelto estándar al evaluar modelos. También es no determinista y tiene sesgos conocidos y medibles, así que debe complementar a las comprobaciones deterministas, no sustituirlas.",
  },
  {
    question: "¿Cómo se evita el sesgo cuando usas un LLM como juez?",
    answer:
      "Reduce el alcance del juez y luego juega con las cartas en tu contra. Puntúa en código determinista todo lo objetivo —cifras contra la verdad de referencia, llamadas a herramientas, formato de salida, negativas— para que el juez solo valore lo genuinamente subjetivo. Después elige un juez con motivos para bajarle la nota a tu candidato preferido, por ejemplo un modelo competidor, ejecútalo a temperatura cero y etiqueta su puntuación como señal, nunca como veredicto.",
  },
  {
    question: "¿Los modelos prefieren sus propias respuestas cuando hacen de jueces?",
    answer:
      "Sí: el sesgo de autopreferencia está bien documentado. Los modelos tienden a puntuar sus propias respuestas, y las de modelos de su misma familia, con más generosidad de la que aplicaría un evaluador neutral. Los jueces muestran además sesgo de posición (favorecen la respuesta presentada en un hueco concreto) y sesgo de verbosidad (premian las respuestas largas al margen de su calidad). Ninguno se arregla con un prompt mejor: se mitigan con decisiones de diseño como la elección del juez, el orden aleatorio y un alcance más estrecho.",
  },
  {
    question: "¿Puede un juez LLM decidir qué modelo pones en producción?",
    answer:
      "No debería ser el voto decisivo. La puntuación de un juez es una opinión no determinista sobre calidad subjetiva. Las decisiones sobre corrección —si el modelo dijo una cifra verdadera, si llamó a la herramienta adecuada, si siguió una instrucción inyectada— corresponden a evaluadores deterministas que comparan la salida con la verdad de referencia. En nuestro benchmark, las puntuaciones del juez se publican junto al veredicto, nunca como el veredicto.",
  },
  {
    question: "¿Qué limitaciones tiene usar un solo juez LLM?",
    answer:
      "Con un único juez no hay forma de medir el acuerdo entre evaluadores. Con dos o más anotadores independientes puedes calcular la fiabilidad entre evaluadores y detectar cuándo una puntuación refleja la manía de un juez concreto y no la calidad de la respuesta. Nuestro benchmark usó un solo juez y, por tanto, no tiene medida de acuerdo: es una limitación real que declaramos abiertamente en lugar de esconderla detrás del titular.",
  },
];

export default function RivalModelAsJudgePageEs() {
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
          { name: "Por qué dejamos que un modelo rival puntúe nuestro benchmark", url: URL },
        ])}
      />
      <JsonLd
        data={definedTermSchema({
          name: "LLM-as-a-judge",
          description:
            "Método de evaluación en el que un gran modelo de lenguaje puntúa las respuestas de otro modelo, normalmente en cualidades subjetivas como la utilidad, la claridad o el tono. Es más barato y rápido que la evaluación humana, pero es no determinista y arrastra sesgos conocidos —autopreferencia por su propia familia de modelos, sesgo de posición y sesgo de verbosidad—, así que conviene usarlo para las dimensiones subjetivas y acompañarlo de evaluadores deterministas que verifiquen la corrección objetiva.",
          url: URL,
          related: [
            { name: "Prompt injection", url: "/es/blog/prompt-injection-is-language-dependent" },
            { name: "Benchmark de LLM", url: "/es/blog/best-llm-for-data-analytics" },
          ],
        })}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "En un benchmark interno de 162 consultas, un juez deliberadamente adversario —el rival directo del modelo seleccionado, ejecutado a temperatura cero— puntuó al modelo seleccionado, gpt-oss-120b, con aproximadamente 4,9 sobre 5,0 en utilidad, claridad y precisión formal.",
          source: "Benchmark interno de LLM de SealMetrics (tanda 20260724-111147)",
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
          { label: "Un modelo rival como juez" },
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
              Por qué dejamos que un modelo rival puntúe nuestro benchmark
            </h1>
            <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
              <time className="font-mono">24 julio 2026</time>
              <span>5 min de lectura</span>
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
            Los modelos puntúan con generosidad a los de su propia familia. Así
            que le dimos el boli rojo al candidato al que nuestro ganador había
            batido, lo pusimos a temperatura cero y lo limitamos a las
            preguntas que el código no puede comprobar. Cualquier sesgo residual
            jugaría en nuestra contra. Aun así, puntuó a nuestro modelo con
            alrededor de 4,9 sobre 5.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Conclusiones clave
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                Los jueces LLM arrastran <strong>sesgo de autopreferencia</strong> —favorecen
                sus propias respuestas y las de su familia de modelos— además de
                sesgo de posición y de verbosidad. Un prompt mejor no los
                elimina.
              </li>
              <li>
                Recorta el trabajo del juez: los evaluadores deterministas
                comprueban las cifras contra la verdad de referencia de la base
                de datos, las llamadas a herramientas, el formato de salida, las
                negativas y las trampas. El juez solo valora lo que el código no
                puede.
              </li>
              <li>
                Nombra un <strong>juez adversario</strong>. Usamos al rival directo del
                ganador a temperatura cero, para que cualquier sesgo restante
                contase en contra del modelo que queríamos llevar a producción.
              </li>
              <li>
                Declara lo que falta. En nuestro caso, un único juez, sin segundo
                anotador y, por tanto, sin medida de acuerdo entre evaluadores.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              Todo benchmark interno de modelos tiene el mismo problema de
              credibilidad. Elegiste tú al ganador. Escribiste tú las pruebas. Y
              cada vez con más frecuencia, usaste un LLM para puntuar las
              respuestas. Llegados a ese punto, quien lee tiene todo el derecho
              a preguntar qué impidió exactamente que el montaje entero
              acabara halagando la conclusión a la que ya habías llegado.
            </p>
            <p>
              Así intentamos responder a esa pregunta al seleccionar el modelo
              que hay detrás de{" "}
              <Link
                href="/es/blog/meet-seal-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                Seal AI
              </Link>
              .
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              El problema del LLM-as-a-judge
            </h2>
            <p>
              Usar un modelo de lenguaje para puntuar las respuestas de otro
              modelo es barato, rápido y escala a cientos de salidas. También
              está sesgado de maneras que se han documentado una y otra vez:
            </p>
            <ul className="space-y-2 pl-6 list-disc marker:text-text-tertiary">
              <li>
                <strong>Sesgo de autopreferencia.</strong> Los jueces valoran
                sus propias respuestas —y las de modelos de su misma familia—
                con más generosidad de la que aplicaría un evaluador neutral.
              </li>
              <li>
                <strong>Sesgo de posición.</strong> Cuando se les muestran dos
                respuestas, los jueces favorecen sistemáticamente uno de los dos
                huecos, con independencia del contenido.
              </li>
              <li>
                <strong>Sesgo de verbosidad.</strong> Las respuestas largas
                puntúan más alto, aunque lo que añaden no aporte nada.
              </li>
            </ul>
            <p>
              Nada de esto es un problema de ingeniería de prompts. No puedes
              instruir a un juez para que deje de preferirse a sí mismo, igual
              que no puedes instruir a un testigo para que deje de ser el
              hermano del acusado. Se resuelve por estructura.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Paso uno: dejar al juez casi sin trabajo
            </h2>
            <p>
              La primera mitigación es recortar las competencias del juez hasta
              que lo que quede sea de verdad una cuestión de criterio.
            </p>
            <p>
              En nuestro benchmark, todo lo objetivo lo puntúa código
              determinista antes de que ningún juez vea nada. Al empezar cada
              tanda calculamos la verdad de referencia directamente desde la
              base de datos de analítica —entradas, conversiones, tasa de
              rebote, ingresos, canal principal, fuente principal, dispositivo
              principal—, de modo que cada cifra que afirme el asistente pueda
              compararse con la realidad. Después, los evaluadores deterministas
              comprueban:
            </p>
            <ul className="space-y-2 pl-6 list-disc marker:text-text-tertiary">
              <li>
                <strong>Grounding</strong> (anclaje al dato): ¿cada número que
                se dice es el número real?
              </li>
              <li>
                <strong>Tool-calling</strong>: ¿llamó el modelo a las
                herramientas correctas del inventario de 63?
              </li>
              <li>
                <strong>Formato estructurado</strong>: ¿la respuesta valida
                contra el esquema que espera el producto?
              </li>
              <li>
                <strong>Negativas</strong>: ¿se negó el modelo a hacer algo que
                era perfectamente capaz de hacer?
              </li>
              <li>
                <strong>Trampas</strong>: entidades inexistentes, periodos
                vacíos y el canario de la instrucción inyectada.
              </li>
            </ul>
            <p>
              Esos evaluadores tienen 26 tests unitarios propios, y un script
              aparte vuelve a puntuar tandas archivadas offline sin gastar un
              solo token, así que un cambio en la evaluación puede aplicarse de
              forma retroactiva sin volver a consultar a ningún modelo. Los
              evaluadores deciden el resultado.
            </p>
            <p>
              Lo que le queda al juez es el residuo que el código realmente no
              puede medir: si la respuesta es <em>útil</em>, si es{" "}
              <em>clara</em>, si es <em>formalmente precisa</em>. Puntuado de 1
              a 5, entre modelos, y etiquetado en el informe como una señal no
              determinista. Nunca como el veredicto.
            </p>

            <CommercialModule
              locale="es"
              hook="¿Cuánto trabajo le dejas al juez en tu evaluación de IA? En una demo ves las comprobaciones deterministas que LENS ejecuta antes de que ningún modelo opine sobre tus cifras."
            />

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Paso dos: nombrar un juez con motivos
            </h2>
            <p>
              La segunda mitigación es la que recomendaríamos a cualquiera que
              publique un benchmark interno, porque no cuesta nada y elimina una
              categoría entera de objeciones.
            </p>
            <p>
              Pusimos de juez a qwen3-235b: uno de los dos modelos candidatos
              contra los que competía nuestro ganador, y el más fuerte de ellos
              en varias evaluaciones públicas. No un tercero neutral. El rival
              directo del modelo que acabamos poniendo en producción, ejecutado
              a temperatura cero para que fuera reproducible.
            </p>
            <p>
              La lógica es sencilla. Si el sesgo de autopreferencia es real,
              ahora apunta en dirección contraria a nuestra conclusión. Un juez
              rival tiene todas las razones estructurales para valorar muy alto
              las respuestas de su propia familia y peor las del ganador.
              Cualquier sesgo que quede en el sistema trabaja{" "}
              <em>en contra</em> del resultado que esperábamos.
            </p>
            <p>
              Puntuó a gpt-oss-120b con alrededor de 4,9 sobre 5,0 en utilidad,
              claridad y precisión formal. Ese número vale más que un 5,0 de un
              juez amistoso, precisamente por quién lo dio.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Lo que aun así no podemos afirmar
            </h2>
            <p>
              Un juez es una opinión. Con un único anotador no hay manera de
              calcular el acuerdo entre evaluadores, lo que significa que no
              podemos distinguir entre «esta respuesta era clara» y «a este juez
              en concreto le parece claro este estilo». Un segundo anotador
              independiente —otro modelo, o un panel humano sobre una muestra—
              nos permitiría publicar una medida de acuerdo en vez de pedirte
              que te fíes de la palabra de un solo modelo.
            </p>
            <p>
              No lo hicimos. Es una limitación real, está declarada en la
              documentación del benchmark y es lo primero que arreglaríamos en
              la siguiente revisión.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Reglas para usar el LLM-as-a-judge con honestidad
            </h2>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>Primero, lo determinista.</strong> Todo lo que se pueda
                comprobar contra la verdad de referencia hay que comprobarlo
                contra la verdad de referencia. Al juez le tocan las sobras, no
                el núcleo.
              </li>
              <li>
                <strong>Nunca juzgues a tu propia familia.</strong> Como mínimo,
                usa un modelo de un linaje distinto al del modelo evaluado.
                Mejor todavía: usa el candidato contra el que compite.
              </li>
              <li>
                <strong>Temperatura cero.</strong> Un juez cuya puntuación
                cambia entre tandas no es un instrumento de medida.
              </li>
              <li>
                <strong>Aleatoriza el orden y vigila la longitud.</strong> El
                sesgo de posición y el de verbosidad son baratos de mitigar y
                bochornosos de ignorar.
              </li>
              <li>
                <strong>Etiqueta la puntuación como señal.</strong> Publícala al
                lado de los resultados deterministas, nunca como titular y nunca
                como desempate en una cuestión de corrección.
              </li>
              <li>
                <strong>Di cuántos evaluadores has usado.</strong> Un juez, sin
                medida de acuerdo: dilo. Quien te lee puede ponderar una
                limitación declarada. No puede ponderar la que te has callado.
              </li>
            </ol>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              En resumen
            </h2>
            <p>
              Un benchmark interno vale exactamente lo que valgan sus
              incentivos. Los nuestros estaban dispuestos para que la manera más
              fácil de obtener un resultado halagador fuera merecerlo de verdad:
              puntuación objetiva en código contra la verdad de referencia de la
              base de datos en vivo, puntuación subjetiva a cargo del modelo con
              más que ganar si nos bajaba la nota, y las carencias escritas
              dentro del informe en lugar de fuera.
            </p>
            <p>
              El diseño completo, los evaluadores y las tandas archivadas están
              documentados en el{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/internal-benchmark"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                informe de nuestro benchmark interno
              </Link>
              , incluida la primera tanda completa que tiramos a la basura por
              inválida.
            </p>
          </div>

          <CommercialModule
            locale="es"
            hook="¿Evaluando la fiabilidad de un asistente de IA para tu equipo? Compara en una demo las respuestas de LENS con tus propias cifras — el evaluador más barato sigue siendo tu dato real."
          />

          <section className="mt-16 pt-10 border-t border-warm-100">
            <h2 className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-5">
              Lecturas relacionadas
            </h2>
            <div className="space-y-4">
              <div>
                <Link
                  href="/es/blog/how-we-benchmark-our-own-ai"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Cómo hacemos el benchmark de nuestra propia IA (y por qué
                  publicamos las tandas que descartamos)
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">
                  8 min de lectura
                </p>
              </div>
              <div>
                <Link
                  href="/es/blog/public-llm-benchmarks-vs-your-use-case"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Los benchmarks públicos de LLM no te dicen qué modelo poner en
                  producción
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">
                  7 min de lectura
                </p>
              </div>
              <div>
                <Link
                  href="/es/blog/prompt-injection-is-language-dependent"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  El fallo de seguridad que solo aparece si pruebas tu IA en dos
                  idiomas
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
