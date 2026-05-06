import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { AccessFormEs } from "./AccessFormEs";

export const metadata: Metadata = {
  title: "Acceso a la cuenta demo — SealMetrics",
  description:
    "Solicita credenciales para la cuenta demo en directo de SealMetrics. Email corporativo requerido. Credenciales por email en minutos.",
  openGraph: {
    title: "Acceso a la cuenta demo — SealMetrics",
    description:
      "Solicita credenciales para la cuenta demo en directo de SealMetrics. Email corporativo requerido.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/demo-access",
  },
  robots: { index: false, follow: true },
};

export default function DemoAccessPageEs() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Acceso cuenta demo" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Acceso cuenta demo", url: "/es/demo-access" }])} />

      <section className="pt-24 md:pt-28 pb-24 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-start">
            <div>
              <span className="eyebrow mb-5" style={{ display: "inline-flex" }}>
                Acceso cuenta demo
              </span>
              <h1
                className="h-display mt-5"
                style={{ maxWidth: "20ch", fontSize: "clamp(40px, 5.4vw, 72px)" }}
              >
                Prueba la demo en directo — <em>con datos reales.</em>
              </h1>
              <p
                className="text-ink-soft mt-7 leading-[1.55] max-w-[52ch]"
                style={{ fontSize: "clamp(16px, 1.3vw, 19px)" }}
              >
                Consigue credenciales para entrar a un dashboard real de SealMetrics. Tráfico real, atribución de ingresos real, reports reales — para que toques y pruebes a tu ritmo antes de hablar con nadie.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {[
                  {
                    t: "Cuenta real, no un sandbox",
                    d: "Un dataset de eCommerce real anonimizado. Ves exactamente cómo se ve el producto en producción.",
                  },
                  {
                    t: "Email corporativo requerido",
                    d: "No enviamos credenciales a proveedores gratuitos (Gmail, Hotmail, Outlook, etc.). Tu email de trabajo mantiene la demo para evaluadores reales.",
                  },
                  {
                    t: "Credenciales por email",
                    d: "Si tu dominio pasa la validación, recibes usuario y contraseña en minutos. No hace falta llamada para empezar.",
                  },
                ].map((item) => (
                  <div
                    key={item.t}
                    className="flex gap-4 pb-4 border-b border-warm-100 last:border-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                    <div>
                      <h3 className="text-[16px] font-semibold text-ink tracking-[-0.01em] mb-1">
                        {item.t}
                      </h3>
                      <p className="text-[14px] text-ink-soft leading-[1.55]">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 p-6 bg-white rounded-xl"
                style={{ borderLeft: "3px solid #2E5C8A" }}
              >
                <p className="text-[15px] text-ink-2 leading-[1.6] italic">
                  &ldquo;¿Quieres un walkthrough guiado sobre tus propios datos? Reserva una sesión de 30 minutos y pasamos la calculadora de gap por tu sitio real.&rdquo;
                </p>
                <p className="font-mono text-[11px] text-ink-soft uppercase tracking-[0.08em] font-semibold mt-3">
                  <Link
                    href="/es/demo"
                    className="text-ink hover:text-brand transition-colors"
                  >
                    Reservar demo guiada →
                  </Link>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[13.5px]">
                <Link
                  href="/es/how-it-works"
                  className="text-ink-soft no-underline border-b border-warm-200 pb-0.5 hover:text-ink transition-colors"
                >
                  Cómo funciona
                </Link>
                <Link
                  href="/es/product"
                  className="text-ink-soft no-underline border-b border-warm-200 pb-0.5 hover:text-ink transition-colors"
                >
                  Producto completo
                </Link>
                <Link
                  href="/es/pricing"
                  className="text-ink-soft no-underline border-b border-warm-200 pb-0.5 hover:text-ink transition-colors"
                >
                  Precios
                </Link>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="mb-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-brand">
                  Solicitar acceso
                </span>
                <h2
                  className="font-semibold text-ink leading-[1.15] tracking-[-0.02em] mt-2"
                  style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}
                >
                  Rellena 4 campos — <em className="italic-accent">credenciales por email.</em>
                </h2>
                <p className="text-[14px] text-ink-soft leading-[1.55] mt-2">
                  Tu dominio de email debe coincidir con tu web. Proveedores de email gratuitos no se aceptan.
                </p>
              </div>
              <AccessFormEs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
