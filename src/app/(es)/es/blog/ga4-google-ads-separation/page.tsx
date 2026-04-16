import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GA4 y Google Ads: la separacion que nadie vio venir",
  description:
    "Google elimina Google Signals como control de datos GA4 a Google Ads en junio 2026. Analisis del impacto real en datos y riesgo legal para anunciantes europeos.",
  openGraph: {
    title: "GA4 y Google Ads: la separacion que nadie vio venir",
    description:
      "Google elimina Google Signals como control de datos GA4 a Google Ads. Que significa para tu privacidad y tus campanas.",
    type: "article",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/blog/ga4-google-ads-separation",
  },
};

export default function GA4GoogleAdsSeparationPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/es/blog" },
          { label: "GA4 y Google Ads" },
        ]}
      />
      <JsonLd
        data={articleSchema({
          headline:
            "GA4 y Google Ads: la separacion que nadie vio venir",
          description:
            "Google elimina Google Signals como control de datos GA4 a Google Ads en junio 2026. Analisis del impacto real en datos y riesgo legal.",
          datePublished: "2026-04-16",
          url: "/es/blog/ga4-google-ads-separation",
          category: "Privacidad",
          author: {
            name: "Rafa Jimenez",
            url: "/about",
            jobTitle: "Founder, SealMetrics",
          },
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Blog", url: "/es/blog" },
          { name: "GA4 y Google Ads" },
        ])}
      />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Privacidad
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              GA4 y Google Ads: la separacion que nadie vio venir
            </h1>
            <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
              <time className="font-mono">Abril 2026</time>
              <span>8 min</span>
              <span>Por Rafa Jimenez</span>
            </div>
          </header>

          {/* Key Takeaways */}
          <div className="mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Puntos clave
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-disc pl-5">
              <li>
                Google eliminara Google Signals como mecanismo de control del
                flujo de datos de GA4 a Google Ads el 16 de febrero de 2025
                (efectivo 15 de junio de 2026).
              </li>
              <li>
                La proteccion del editor web se reduce de doble llave (Signals +
                Consent Mode) a una sola (Consent Mode). Si tu CMP falla, no hay
                red de seguridad.
              </li>
              <li>
                El impacto en datos es moderado para la mayoria de anunciantes.
                El impacto en riesgo legal es significativo, especialmente en la
                UE.
              </li>
              <li>
                GA4 no es necesario para alimentar Google Ads. El tag de
                conversion de Google Ads, Enhanced Conversions y Offline Import
                funcionan de forma independiente.
              </li>
              <li>
                La alternativa logica: analitica completa con SealMetrics + tag
                propio de Google Ads solo para conversiones.
              </li>
            </ul>
          </div>

          {/* Body */}
          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            {/* 1. La historia */}
            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Google anuncia una &ldquo;simplificacion&rdquo;
            </h2>

            <p>
              El 16 de febrero de 2025, Google publico un anuncio discreto en su
              blog de Google Ads: a partir del 15 de junio de 2026, Google
              Signals dejara de funcionar como control del flujo de datos entre
              GA4 y Google Ads.
            </p>

            <p>
              El lenguaje oficial habla de &ldquo;simplificar la experiencia del
              anunciante&rdquo;. La realidad es mas matizada. Lo que Google esta
              haciendo es eliminar una de las dos cerraduras que el editor web
              tenia para controlar que datos de GA4 llegaban a Google Ads.
            </p>

            <p>
              Para entender el impacto real, necesitas entender que eran esas dos
              cerraduras y como funcionaban juntas.
            </p>

            {/* 2. Matriz antes/despues */}
            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              La matriz antes y despues
            </h2>

            <p>
              Hasta junio de 2026, el flujo de datos de GA4 a Google Ads se
              controla con dos mecanismos independientes:
            </p>

            <ul className="list-none space-y-2 pl-0">
              <li className="text-text-secondary">
                &mdash; <strong className="text-text-primary">Google Signals</strong>: un
                interruptor dentro de GA4 que, al activarlo, permite enviar
                audiencias y datos de conversion a Google Ads. Lo controla el
                editor web.
              </li>
              <li className="text-text-secondary">
                &mdash; <strong className="text-text-primary">Consent Mode</strong>: una
                senyal que el{" "}
                <Link
                  href="/glossary/consent-management-platform"
                  className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  CMP (banner de consentimiento)
                </Link>{" "}
                envia a Google indicando si el usuario acepto o rechazo cookies
                publicitarias.
              </li>
            </ul>

            <h3 className="font-serif text-[1.15rem] font-medium text-text-primary mt-8 mb-3">
              Antes: 4 combinaciones posibles
            </h3>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-[0.9rem] border-collapse">
                <thead>
                  <tr className="border-b border-warm-200">
                    <th className="text-left py-3 pr-4 font-medium text-text-primary">
                      Signals
                    </th>
                    <th className="text-left py-3 pr-4 font-medium text-text-primary">
                      Consent Mode
                    </th>
                    <th className="text-left py-3 font-medium text-text-primary">
                      Datos a Google Ads
                    </th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-warm-100">
                    <td className="py-3 pr-4 font-mono text-green-muted">ON</td>
                    <td className="py-3 pr-4 font-mono text-green-muted">
                      granted
                    </td>
                    <td className="py-3">
                      Flujo completo: audiencias + conversiones
                    </td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="py-3 pr-4 font-mono text-green-muted">ON</td>
                    <td className="py-3 pr-4 font-mono text-red-alert">
                      denied
                    </td>
                    <td className="py-3">
                      Sin datos personales (solo modelizacion)
                    </td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="py-3 pr-4 font-mono text-red-alert">OFF</td>
                    <td className="py-3 pr-4 font-mono text-green-muted">
                      granted
                    </td>
                    <td className="py-3">
                      Bloqueado por Signals &mdash; nada fluye
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-red-alert">OFF</td>
                    <td className="py-3 pr-4 font-mono text-red-alert">
                      denied
                    </td>
                    <td className="py-3">Doble bloqueo &mdash; nada fluye</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              El punto clave: con Signals OFF, no importaba si el CMP fallaba o
              estaba mal configurado. Los datos de GA4 no llegaban a Google Ads
              porque Signals actuaba como segunda cerradura.
            </p>

            <h3 className="font-serif text-[1.15rem] font-medium text-text-primary mt-8 mb-3">
              Despues (junio 2026): 2 combinaciones
            </h3>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-[0.9rem] border-collapse">
                <thead>
                  <tr className="border-b border-warm-200">
                    <th className="text-left py-3 pr-4 font-medium text-text-primary">
                      Consent Mode
                    </th>
                    <th className="text-left py-3 font-medium text-text-primary">
                      Datos a Google Ads
                    </th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-warm-100">
                    <td className="py-3 pr-4 font-mono text-green-muted">
                      granted
                    </td>
                    <td className="py-3">
                      Flujo completo: audiencias + conversiones
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-red-alert">
                      denied
                    </td>
                    <td className="py-3">
                      Sin datos personales (solo modelizacion)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              La cerradura de Signals desaparece. Ahora todo depende de una unica
              senyal: la que envia tu CMP.
            </p>

            {/* 3. Impacto en datos */}
            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Impacto real en los datos: moderado
            </h2>

            <p>
              Para la mayoria de anunciantes europeos, el cambio en los datos
              sera pequenyo. La razon es sencilla: la gran mayoria ya tenia
              Google Signals activado.
            </p>

            <p>
              Google Signals era el mecanismo que permitia el cross-device
              tracking y las audiencias demograficas en GA4. Desactivarlo
              significaba perder esas funcionalidades, asi que la mayoria de
              implementaciones lo tenian encendido.
            </p>

            <p>
              En la practica, el flujo de datos de GA4 a Google Ads ya dependia
              casi exclusivamente de Consent Mode. La eliminacion de Signals como
              control simplemente formaliza lo que ya ocurria en la mayoria de
              instalaciones.
            </p>

            <p>
              Sin embargo, habia un grupo importante de editores web que
              deliberadamente mantenian Signals OFF como medida de proteccion
              adicional frente a transferencias de datos a Google Ads. Para este
              grupo, el cambio es significativo.
            </p>

            {/* 4. Impacto en riesgo legal */}
            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Impacto real en el riesgo legal: significativo
            </h2>

            <p>
              Aqui es donde el cambio importa de verdad.
            </p>

            <p>
              Con dos cerraduras, un fallo en una de ellas no causaba una
              transferencia ilicita de datos. Si tu CMP estaba mal configurado
              pero tenias Signals OFF, los datos no fluian. Si Signals estaba ON
              pero el CMP funcionaba correctamente, solo fluian datos con
              consentimiento.
            </p>

            <p>
              Con una sola cerradura, cada fallo del CMP es una transferencia
              potencialmente ilicita:
            </p>

            <ul className="list-none space-y-2 pl-0">
              <li className="text-text-secondary">
                &mdash; CMP mal configurado que envia{" "}
                <span className="font-mono text-[0.85rem]">granted</span> por
                defecto
              </li>
              <li className="text-text-secondary">
                &mdash; Actualizacion del CMP que rompe la integracion con Consent
                Mode
              </li>
              <li className="text-text-secondary">
                &mdash; Paginas que cargan sin CMP (errores de JavaScript, cacheo
                agresivo)
              </li>
              <li className="text-text-secondary">
                &mdash; Dark patterns en el banner que invalidan el consentimiento
                ante un regulador
              </li>
            </ul>

            <p>
              Cualquiera de estos escenarios, que antes quedaba contenido por
              Signals OFF, ahora resulta en datos personales fluyendo a Google
              Ads sin base legal valida.
            </p>

            <p>
              Para empresas europeas, esto no es un riesgo teorico. Las
              autoridades de proteccion de datos de Austria, Francia e Italia ya
              han sancionado transferencias de datos a Google sin consentimiento
              adecuado.
            </p>

            {/* 5. El dato que nadie cuenta */}
            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              El dato que nadie cuenta
            </h2>

            <p>
              Incluso con{" "}
              <span className="font-mono text-[0.85rem]">ad_storage = denied</span>,
              Google Analytics sigue enviando pings a los servidores de Google.
              Estos pings contienen la IP del usuario, el User-Agent, timestamps
              y la URL visitada.
            </p>

            <p>
              Google usa estos pings para alimentar sus modelos de
              &ldquo;conversion modeling&rdquo; &mdash; estimaciones estadisticas de
              las conversiones que no puede medir directamente. El resultado es
              una asimetria de informacion: el anunciante ve datos modelados
              (estimaciones), pero Google recibe datos reales que usa para
              optimizar sus propios algoritmos de puja.
            </p>

            <p>
              Esta asimetria existia antes del cambio en Signals y seguira
              existiendo despues. Es una caracteristica estructural de usar un
              sistema de medicion propiedad del mismo ecosistema publicitario que
              mides.
            </p>

            {/* 6. GA4 no es necesario para Google Ads */}
            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              GA4 ya no es necesario para Google Ads
            </h2>

            <p>
              Existe una percepcion generalizada de que necesitas GA4 para que
              Google Ads funcione. No es asi. GA4 y Google Ads son productos
              independientes con tracking independiente.
            </p>

            <p>
              Google Ads tiene sus propios mecanismos de medicion de
              conversiones:
            </p>

            <ul className="list-none space-y-2 pl-0">
              <li className="text-text-secondary">
                &mdash;{" "}
                <strong className="text-text-primary">
                  Tag de conversion de Google Ads
                </strong>{" "}
                &mdash; mide conversiones directamente sin pasar por GA4
              </li>
              <li className="text-text-secondary">
                &mdash;{" "}
                <strong className="text-text-primary">
                  Enhanced Conversions
                </strong>{" "}
                &mdash; envia datos hasheados de primer contacto (email, telefono) para
                mejorar la atribucion
              </li>
              <li className="text-text-secondary">
                &mdash;{" "}
                <strong className="text-text-primary">
                  Offline Conversion Import
                </strong>{" "}
                &mdash; importa conversiones desde tu CRM sin ninguna dependencia de
                GA4
              </li>
            </ul>

            <p>
              La vinculacion GA4-Google Ads es util para crear audiencias de
              remarketing basadas en comportamiento en el sitio. Pero para
              medicion de conversiones y optimizacion de campanyass, Google Ads se
              basta solo.
            </p>

            <p>
              Esto significa que puedes desacoplar completamente tu analitica web
              de tu medicion publicitaria. Una herramienta para entender a tus
              usuarios. Otra para medir tus campanyass. Sin que una dependa de la
              otra.
            </p>

            {/* 7. La salida logica */}
            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              La salida logica: SealMetrics + tag de Google Ads
            </h2>

            <p>
              Si GA4 no es necesario para Google Ads, y GA4 introduce riesgos
              legales crecientes por la dependencia de un CMP como unica
              cerradura, la pregunta obvia es: para que seguir usando GA4 como
              herramienta de analitica?
            </p>

            <p>
              La arquitectura que elimina este riesgo es sencilla:
            </p>

            <ul className="list-none space-y-2 pl-0">
              <li className="text-text-secondary">
                &mdash;{" "}
                <strong className="text-text-primary">
                  Analitica web: SealMetrics
                </strong>{" "}
                &mdash; captura el 100% del trafico sin cookies, sin banners de
                consentimiento, sin transferencias de datos a terceros. Datos
                completos para decisiones de negocio.
              </li>
              <li className="text-text-secondary">
                &mdash;{" "}
                <strong className="text-text-primary">
                  Medicion de campanyass: tag de conversion de Google Ads
                </strong>{" "}
                &mdash; mantiene la optimizacion de puja automatica con datos de
                conversion directos, sin pasar por GA4.
              </li>
            </ul>

            <p>
              Con esta configuracion, eliminas la dependencia de GA4, reduces la
              superficie de riesgo legal a un unico tag con un proposito
              especifico (conversion de campanyass), y obtienes datos de analitica
              completos que GA4 nunca podra darte por su dependencia de cookies y
              consentimiento.
            </p>

            <p>
              Puedes{" "}
              <Link
                href="/es/how-it-works"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                ver como funciona SealMetrics
              </Link>{" "}
              y entender por que no necesita cookies ni banners de consentimiento
              para capturar datos completos de trafico.
            </p>
          </div>

          {/* Related articles */}
          <div className="mt-16 pt-10 border-t border-warm-100">
            <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">
              Articulos relacionados
            </h3>
            <div className="space-y-3">
              <Link
                href="/blog/consent-banner-impact-on-analytics"
                className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
              >
                How Consent Banners Destroy Your Analytics Data
              </Link>
              <Link
                href="/blog/gdpr-analytics-without-consent"
                className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
              >
                GDPR-Compliant Analytics Without Consent Banners: How It Works
              </Link>
              <Link
                href="/blog/cookieless-analytics-explained"
                className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
              >
                Cookieless Analytics Explained: How to Measure Without Cookies
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
