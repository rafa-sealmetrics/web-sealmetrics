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
  definedTermSchema,
  faqPageSchema,
  speakableWebPageSchema,
} from "@/lib/schema";
import { CommercialModule } from "@/components/ui/CommercialModule";

const SLUG = "eu-ai-act-for-marketers";
const URL = `/es/blog/${SLUG}`;
const TITLE = "El Reglamento Europeo de IA para marketers, sin jerga";
const DESCRIPTION =
  "La mayoría de los equipos de marketing son responsables del despliegue de una IA de riesgo limitado, no proveedores. Eso significa una obligación principal — la transparencia del artículo 50 desde el 2 de agosto de 2026 — y muchos deberes que se quedan aguas arriba, en quien publica el modelo.";

export const metadata: Metadata = {
  title: TITLE,
  description: "Los equipos de marketing suelen ser responsables del despliegue de IA de riesgo limitado, no proveedores: una obligación, la transparencia del artículo 50.",
  openGraph: {
    title: "El Reglamento Europeo de IA para marketers, sin jerga",
    description:
      "¿Proveedor o responsable del despliegue? Qué exige realmente la transparencia del artículo 50, qué recae en quien publica el modelo y un checklist para el 2 de agosto de 2026.",
    type: "article",
    url: "https://sealmetrics.com/es/blog/eu-ai-act-for-marketers/",
    siteName: "Sealmetrics",
    locale: "es_ES",
    images: ["https://sealmetrics.com/og/blog/eu-ai-act-for-marketers.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "El Reglamento Europeo de IA para marketers, sin jerga",
    description: "¿Proveedor o responsable del despliegue? Qué exige realmente la transparencia del artículo 50, qué recae en quien publica el modelo y un checklist para el 2 de agosto de 2026.",
    images: ["https://sealmetrics.com/og/blog/eu-ai-act-for-marketers.png"],
  },
  alternates: {
    languages: getAlternates(`/blog/${SLUG}`),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "¿Cómo afecta el AI Act a los equipos de marketing y analítica?",
    answer:
      "A la mayoría de equipos, mucho menos de lo que sugieren los titulares. Un equipo de marketing que usa un asistente de analítica con IA es normalmente responsable del despliegue de un sistema de riesgo limitado, no proveedor de uno de alto riesgo. El deber operativo es la transparencia del artículo 50 — la gente debe saber cuándo está interactuando con una IA — aplicable desde el 2 de agosto de 2026. Las obligaciones pesadas sobre IA de propósito general recaen aguas arriba, en quien publica y aloja el modelo.",
  },
  {
    question: "¿Qué dice el artículo 50 del AI Act?",
    answer:
      "El artículo 50 es el artículo de transparencia. Su exigencia central es que se informe a las personas cuando están interactuando con un sistema de IA y no con un humano, junto con deberes de marcado de determinados contenidos generados por IA. Se aplica desde el 2 de agosto de 2026, y la Comisión Europea adoptó sus directrices sobre el artículo 50 el 20 de julio de 2026. Los sistemas ya introducidos en el mercado antes del 2 de agosto de 2026 tienen hasta el 2 de diciembre de 2026 para el deber de marcado.",
  },
  {
    question: "¿Soy proveedor o responsable del despliegue según el AI Act?",
    answer:
      "Si construiste el sistema de IA y lo introdujiste en el mercado con tu propio nombre, eres proveedor. Si utilizas un sistema de IA suministrado por otro en el marco de tu actividad profesional, eres responsable del despliegue. Un equipo de marketing que usa una función de IA dentro de una plataforma de analítica es responsable del despliegue. Ojo: modificar sustancialmente un sistema, o rebautizarlo como propio, puede llevarte al papel de proveedor.",
  },
  {
    question: "¿El AI Act se aplica a los modelos de IA de código abierto?",
    answer:
      "Los modelos publicados bajo licencias libres y de código abierto reciben exenciones parciales de algunas obligaciones sobre IA de propósito general. Más allá del tratamiento jurídico, los pesos abiertos son útiles en la práctica para el cumplimiento: puedes fijar una versión exacta, inspeccionarla, someterla a red teaming y reproducir resultados más tarde. Una API cerrada puede cambiar bajo tus pies sin avisar, y eso hace difícil defender cualquier evaluación que hubieras escrito sobre ella.",
  },
  {
    question: "¿Qué tengo que hacer antes del 2 de agosto de 2026 con el AI Act?",
    answer:
      "Inventariar las funciones de IA que ya hay en tu stack, confirmar para cada una si eres responsable del despliegue o proveedor, comprobar que las interfaces de IA están claramente etiquetadas como tales, pedir a cada proveedor que confirme por escrito cómo cumple sus obligaciones aguas arriba, y asignar el expediente a una persona con nombre y apellidos. Para la mayoría de equipos de marketing es un proyecto corto, no un programa.",
  },
];

export default function EuAiActForMarketersPageEs() {
  const dates = postDates("eu-ai-act-for-marketers", "es");

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: TITLE,
          description: DESCRIPTION,
          ...dates,
          url: URL,
          category: "Regulación",
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
          { name: "El AI Act para marketers", url: URL },
        ])}
      />
      <JsonLd
        data={definedTermSchema({
          name: "Responsable del despliegue de IA",
          description:
            "Según el Reglamento Europeo de IA (AI Act), el responsable del despliegue es cualquier organización que utiliza un sistema de IA suministrado por un tercero en el marco de su actividad profesional, frente al proveedor, que desarrolla un sistema de IA y lo introduce en el mercado con su propio nombre. Un equipo de marketing que usa un asistente de IA integrado en una plataforma de analítica es responsable del despliegue; el proveedor de la plataforma y quien publica el modelo cargan con los deberes del lado del proveedor.",
          url: URL,
          related: [{ name: "Proveedor de IA", url: URL }],
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
          { label: "El AI Act para marketers" },
        ]}
        locale="es"
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Regulación
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              El Reglamento Europeo de IA para marketers, sin jerga
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
            El Reglamento Europeo de IA (AI Act) es largo y casi nada de él va
            dirigido a ti. Si tu equipo usa una función de IA dentro de una
            herramienta que construyó otro, eres responsable del despliegue de un
            sistema de riesgo limitado y tu obligación práctica cabe en un
            párrafo. Los deberes pesados son de quien publica y aloja el modelo.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Conclusiones clave
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                La mayoría de los equipos de marketing son{" "}
                <strong>responsables del despliegue</strong> de una IA de riesgo
                limitado, no proveedores: el papel que ocupas decide qué
                obligaciones te aplican siquiera.
              </li>
              <li>
                El deber operativo es la{" "}
                <strong>transparencia del artículo 50</strong>, aplicable desde
                el <strong>2 de agosto de 2026</strong>. La Comisión adoptó sus
                directrices sobre el artículo 50 el 20 de julio de 2026.
              </li>
              <li>
                Los sistemas ya introducidos en el mercado antes del 2 de agosto
                de 2026 tienen hasta el <strong>2 de diciembre de 2026</strong>{" "}
                para el deber de marcado de contenidos.
              </li>
              <li>
                Las obligaciones sobre IA de propósito general recaen aguas
                arriba, en quien publica el modelo y en quien aloja la
                inferencia; y los modelos de pesos abiertos hacen más fácil
                defender tu propio expediente, porque la versión exacta se puede
                fijar y reproducir.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              El AI Act ha generado muchísima ansiedad en los equipos de
              marketing y muy poca claridad. En parte es por la extensión del
              texto. Sobre todo es porque la cobertura mediática casi nunca separa
              las dos preguntas que de verdad te importan: qué papel ocupas y en
              qué categoría de riesgo cae el sistema que usas.
            </p>
            <p>
              Responde a esas dos y la lista de cosas que tienes que hacer se
              acorta muy deprisa.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Proveedor o responsable del despliegue: la única pregunta que te cambia la vida
            </h2>
            <p>
              El reglamento reparte deberes por papel. Aquí importan dos.
            </p>
            <p>
              Un <strong>proveedor</strong> desarrolla un sistema de IA y lo
              introduce en el mercado con su propio nombre. Un{" "}
              <strong>responsable del despliegue</strong> utiliza un sistema de
              IA suministrado por otro en el marco de su actividad profesional.
              Si escribes preguntas en un asistente de IA integrado en tu
              plataforma de analítica, eres responsable del despliegue. El
              proveedor de la plataforma está más cerca del lado del proveedor, y
              la empresa que publicó el modelo subyacente está todavía más aguas
              arriba.
            </p>
            <p>
              Un matiz que conviene conocer: los papeles no son fijos para
              siempre. Si modificas sustancialmente un sistema, o le pones tu
              marca al de otro y lo vendes, puedes acabar con deberes de
              proveedor que no habías previsto. Conectar un asistente estándar a
              tu flujo de reporting no hace eso. Reconstruirlo y revenderlo,
              quizá sí.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Riesgo limitado, en cristiano
            </h2>
            <p>
              El reglamento clasifica los sistemas por el daño que podrían
              causar. Una IA que lee tu propia base de datos de analítica y
              escribe un párrafo sobre por qué bajó el tráfico orgánico no está
              decidiendo sobre el empleo, el crédito ni la libertad de nadie. Es
              un sistema de <strong>riesgo limitado</strong>, y el régimen para
              los sistemas de riesgo limitado va esencialmente de transparencia,
              no de evaluaciones de conformidad, expedientes técnicos y
              auditorías.
            </p>
            <p>
              Esta es la parte que se pierde por el camino. Mucho análisis del AI
              Act describe obligaciones de alto riesgo — sistemas de gestión de
              riesgos, documentación de gobernanza del dato, diseño de la
              supervisión humana, vigilancia poscomercialización — y el lector da
              por hecho que le caen encima. A un equipo de marketing que usa un
              asistente de analítica, por lo general no.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              La obligación que sí te cae: el artículo 50
            </h2>
            <p>
              El artículo 50 es el artículo de transparencia, y su idea central es
              simple: la gente debe saber cuándo está tratando con una IA. Se
              aplica desde el <strong>2 de agosto de 2026</strong>. La Comisión
              Europea adoptó sus directrices sobre el artículo 50 el{" "}
              <strong>20 de julio de 2026</strong>, que es el documento a leer si
              quieres la interpretación de la propia Comisión sobre el alcance y
              los casos límite.
            </p>
            <p>
              Hay además un detalle transitorio que conviene anotar. Los sistemas
              ya introducidos en el mercado antes del 2 de agosto de 2026 tienen
              hasta el <strong>2 de diciembre de 2026</strong> para cumplir el
              deber de marcado de contenidos. Si tienes una función de IA
              funcionando desde hace un año, es posible que le aplique ese
              periodo de gracia, lo que es una razón para saber cuándo se lanzó
              realmente cada función de tu stack.
            </p>
            <p>
              En la práctica, para un equipo de marketing el trabajo es poco
              glamuroso: asegurarte de que las superficies de IA con las que
              tocan tus clientes, tus prospectos o tu plantilla están visiblemente
              etiquetadas como IA, que el contenido generado por IA destinado a
              publicación se trata conforme a las reglas de marcado, y que alguien
              ha dejado por escrito qué sistemas están dentro del alcance.
            </p>

            <CommercialModule
              locale="es"
              hook="¿Ya sabes qué te exige el artículo 50 como responsable del despliegue? En una demo ves cómo queda tu expediente cuando la IA de tu analítica corre sobre pesos abiertos en la UE."
            />

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Qué queda aguas arriba y por qué es una buena noticia
            </h2>
            <p>
              Las obligaciones sobre modelos de IA de propósito general — del
              artículo 53 en adelante — se aplican desde el{" "}
              <strong>2 de agosto de 2025</strong>, y los poderes de ejecución de
              la Comisión llegan el <strong>2 de agosto de 2026</strong>. Cubren
              cosas como documentación técnica, información para los proveedores
              posteriores, política de derechos de autor y resúmenes de los datos
              de entrenamiento.
            </p>
            <p>
              Son de quien publica el modelo y de quien aloja la inferencia. No
              del responsable del despliegue. Es un diseño deliberado del
              reglamento: la parte que tiene visibilidad sobre cómo se construyó
              un modelo carga con los deberes que exigen esa visibilidad.
            </p>
            <p>
              Lo que esto significa para ti como comprador es que buena parte de
              tu diligencia es en realidad una pregunta que puedes trasladar.
              Pregunta a tu proveedor qué modelo usa, quién lo publica, quién
              aloja la inferencia y cómo cumplen esas partes sus obligaciones
              aguas arriba. Un proveedor que no sabe nombrar el modelo es un
              proveedor que no puede responder.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Por qué los pesos abiertos hacen tu expediente más defendible
            </h2>
            <p>
              Los modelos publicados bajo licencias libres y de código abierto
              obtienen exenciones parciales de algunas de esas obligaciones de
              propósito general. Ese es el ángulo jurídico, y es real. Pero hay
              una razón más práctica por la que un responsable del despliegue
              debería fijarse en los pesos abiertos, y no tiene nada que ver con
              las exenciones.
            </p>
            <p>
              La auditabilidad. Con los pesos publicados puedes fijar una versión
              exacta, inspeccionarla, someterla a red teaming y reproducir un
              resultado meses después. Cada afirmación que hagas en una
              evaluación interna sigue siendo comprobable. Con una API cerrada, el
              modelo que hay detrás del endpoint puede cambiar bajo tus pies en
              silencio, y entonces la evaluación que escribiste en marzo describe
              algo que ya no existe, sin manera de demostrar qué cambió y qué no.
            </p>
            <p>
              Esa es una de las razones por las que{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/model-selection"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                Seal AI funciona con un modelo de pesos abiertos
              </Link>
              :{" "}
              <code className="font-mono text-[0.9em]">gpt-oss-120b</code>, bajo
              licencia Apache 2.0, alojado en Scaleway Generative APIs en París,
              Francia. Scaleway es una empresa francesa cuya matriz es el grupo
              Iliad, sin capital estadounidense. Como plataforma, Sealmetrics es
              responsable del despliegue de un sistema de IA de riesgo limitado,
              y lo decimos con claridad en lugar de insinuar que el asistente es
              algo distinto de un modelo leyendo tus informes. El desarrollo
              completo de la arquitectura está en la{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/private-ai-architecture"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                documentación de Seal AI
              </Link>
              .
            </p>
            <p>
              La reproducibilidad también tiene una recompensa interna. Es lo que
              nos permitió ejecutar una comparación controlada de modelos
              candidatos contra nuestro propio asistente y publicar{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/internal-benchmark"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                el benchmark
              </Link>
              , incluida la ronda que descartamos por inválida. Eso no se puede
              hacer con un modelo que no te dejan mantener quieto.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Qué hacer antes del 2 de agosto de 2026
            </h2>
            <p>
              Una lista corta y concreta. Nada de esto necesita ayuda externa en
              una organización de marketing típica.
            </p>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>Inventaría la IA que ya usas.</strong> Incluye las
                funciones que aparecieron dentro de herramientas que tienes desde
                hace años. Anota aproximadamente cuándo se lanzó cada una, por la
                fecha transitoria del 2 de diciembre de 2026.
              </li>
              <li>
                <strong>Asigna un papel a cada sistema.</strong> Responsable del
                despliegue en casi todo. Marca lo que hayas modificado
                sustancialmente o comercializado con tu marca, porque ahí es
                donde el papel puede cambiar.
              </li>
              <li>
                <strong>Revisa el etiquetado.</strong> Allí donde una persona
                interactúa con una IA — asistentes, widgets de chat, respuestas
                automáticas — debe resultar evidente que es una IA. Lee las
                directrices de la Comisión del 20 de julio de 2026 para el
                detalle.
              </li>
              <li>
                <strong>Trata el contenido generado por IA con criterio.</strong>{" "}
                Decide dónde aplica el marcado a lo que publicas y deja la
                decisión por escrito, en lugar de dejarla al criterio de cada
                persona.
              </li>
              <li>
                <strong>
                  Pide a los proveedores su posición aguas arriba por escrito.
                </strong>{" "}
                Qué modelo, publicado por quién, alojado dónde y cómo se cumplen
                las obligaciones de propósito general. Archiva las respuestas.
              </li>
              <li>
                <strong>Ponle un responsable.</strong> Una persona con nombre y
                apellidos que tenga el inventario y las respuestas de los
                proveedores. Casi todos los fallos aquí son organizativos, no
                jurídicos.
              </li>
            </ol>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              En resumen
            </h2>
            <p>
              El AI Act es una norma enorme con una huella pequeña sobre un
              equipo de marketing típico. Conoce tu papel, conoce tu categoría de
              riesgo, etiqueta la IA, mantén un inventario y traslada las
              preguntas de nivel de modelo aguas arriba, a quienes pueden
              responderlas de verdad.
            </p>
            <p>
              Los equipos que lo van a pasar mal no son los que tienen una IA
              complicada. Son los que no saben enumerar qué están usando ni
              nombrar el modelo que hay detrás. Es un problema resoluble, y ahora
              es bastante mejor momento para resolverlo que después del 2 de
              agosto.
            </p>
            <p className="text-[0.9rem] text-text-tertiary italic">
              Este artículo es información general sobre cómo está estructurado el
              Reglamento Europeo de IA, no asesoramiento jurídico. Las
              obligaciones dependen de tus sistemas concretos, de tu papel y de
              tu jurisdicción: consulta con un profesional cualificado antes de
              apoyarte en nada de esto.
            </p>
          </div>

          <CommercialModule
            locale="es"
            hook="¿Preparando el expediente antes del 2 de agosto de 2026? Ve en una demo qué preguntas del AI Act responde por ti una analítica con IA sobre modelo abierto — gpt-oss-120b en Scaleway París — con el dato en Dublín."
          />

          <section className="mt-16 pt-10 border-t border-warm-100">
            <h2 className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-5">
              Lecturas relacionadas
            </h2>
            <div className="space-y-4">
              <div>
                <Link
                  href="/es/blog/analytics-if-data-privacy-framework-falls"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Qué pasa con tu analítica si cae el Marco de Privacidad de Datos UE-EE. UU.
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">6 min de lectura</p>
              </div>
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
                  href="/es/blog/open-weights-exit-strategy"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Pesos abiertos como estrategia de salida: no ser rehén de tu proveedor de IA
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
