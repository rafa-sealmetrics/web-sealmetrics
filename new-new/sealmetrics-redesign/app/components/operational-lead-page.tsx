import { FunctionalSurface } from "./site-forms";
import { SiteFooter, SiteHeader } from "./site-shell";

export function OperationalLeadPage({ locale }: { locale: "en" | "es" }) {
  const route = locale === "es" ? "/es/demo-access/" : "/demo-access/";
  return <>
    <div className="signal-bar inner-signal" aria-hidden="true"><span /> {locale === "es" ? "ACCESO CONTROLADO" : "CONTROLLED ACCESS"} <b>{locale === "es" ? "SOLICITUD" : "REQUEST"}</b></div>
    <SiteHeader locale={locale} currentPath="demo-access" />
    <main className="editorial-page" lang={locale}>
      <section className="editorial-hero">
        <nav className="editorial-breadcrumbs" aria-label={locale === "es" ? "Migas de pan" : "Breadcrumbs"}><a href={locale === "es" ? "/es/" : "/"}>{locale === "es" ? "Inicio" : "Home"}</a><span><i>/</i><b>{locale === "es" ? "Acceso a la demo" : "Demo access"}</b></span></nav>
        <p className="editorial-eyebrow">{locale === "es" ? "ENTORNO DE PRODUCTO" : "PRODUCT ENVIRONMENT"}</p>
        <h1>{locale === "es" ? "Mira los datos. Después, juzga el sistema." : "See the data. Then judge the system."}</h1>
        <p className="editorial-deck">{locale === "es" ? "Solicita acceso al entorno de demostración. Validamos cada petición para proteger la integridad de la cuenta y sus datos." : "Request access to the demonstration environment. We validate every request to protect the account and its data."}</p>
      </section>
      <FunctionalSurface route={route} locale={locale} />
    </main>
    <SiteFooter locale={locale} />
  </>;
}
