"use client";

import { useState } from "react";
import Link from "next/link";

const ITEMS = [
  {
    q: "¿Por qué pagar SealMetrics si GA4 es gratis?",
    a: "GA4 es gratis porque tú eres el producto — tus datos entrenan los modelos publicitarios de Google. Más importante: GA4 depende de cookies que la mayoría de visitantes europeos rechazan. Tomas decisiones de presupuesto sobre una fracción del dato real. El coste de SealMetrics es un error de redondeo comparado con el coste de mal asignar inversión publicitaria.",
  },
  {
    q: "¿Por qué la «neutralidad» es una feature?",
    a: "Meta reporta con el sesgo de Meta. Google reporta con el de Google. GA vive dentro del ecosistema Google. SealMetrics no vende inventario publicitario ni tiene canal al que favorecer — por eso marca, agencias y finanzas pueden firmar el mismo número sin sentir que firman contra un rival.",
  },
  {
    q: "¿Qué tan preciso es el tracking sin cookies?",
    a: "Una cadena hotelera española midió +30% más tráfico vs GA y 15–20% más venta atribuida — acercándose a la realidad del CRM. Un grupo hotelero europeo descubrió que el 50% de su tráfico era invisible en su stack anterior. Sin muestreo, sin modelado — cada dato observado.",
  },
  {
    q: "¿Tengo que quitar GA4?",
    a: "No. La mayoría de clientes corren SealMetrics junto a GA4 los primeros 30 días para comparar en paralelo. Después, la mayoría usa SealMetrics como fuente de verdad y mantiene GA4 para integraciones específicas del ecosistema Google.",
  },
  {
    q: "¿Cumple RGPD sin banner de consentimiento?",
    a: "Sí. Sin cookies por arquitectura — sin cookies, sin almacenamiento de datos personales, sin tracking cross-site. 100% alojado en UE, Dublín, Irlanda. Cumple RGPD, ePrivacy y Schrems II sin banners de consentimiento.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Cinco minutos para instalar. Primer dato en la primera hora. Nuestro equipo gestiona todo el onboarding y configura objetivos, embudos y reportes en la primera semana.",
  },
];

export function FaqV3Es() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-28 bg-white border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-14">
          <div>
            <span className="eyebrow mb-5">FAQ</span>
            <h2 className="h-section mt-5">
              Lo que todo <em>CMO pregunta.</em>
            </h2>
          </div>
          <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
            Respuestas directas. Sin relleno.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.8fr] gap-12 md:gap-20">
          <div>
            <p className="text-[16px] text-ink-soft leading-[1.55] mb-5">
              ¿Más preguntas? Nuestro equipo — incluido el founder — está a un mensaje.
            </p>
            <Link href="#audit" className="inline-flex items-center gap-2 bg-ink text-white px-7 py-3.5 rounded-md text-[15px] font-semibold no-underline hover:bg-brand transition-colors">
              Escríbenos →
            </Link>
          </div>

          <div className="flex flex-col gap-2.5">
            {ITEMS.map((item, i) => {
              const isOpen = i === openIdx;
              return (
                <button
                  key={item.q}
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className={`w-full text-left border rounded-xl px-7 py-5 transition-all ${
                    isOpen ? "bg-ink text-white border-ink" : "bg-white border-warm-100 hover:border-warm-200"
                  }`}
                >
                  <div className="flex justify-between items-center gap-6">
                    <h4 className={`text-[17px] font-semibold tracking-[-0.015em] ${isOpen ? "text-white" : "text-ink"}`}>{item.q}</h4>
                    <span className={`w-7 h-7 rounded-md flex items-center justify-center text-[18px] font-normal shrink-0 transition-transform ${isOpen ? "bg-brand text-white rotate-45" : "bg-warm-50 text-ink-soft"}`}>+</span>
                  </div>
                  {isOpen && (
                    <p className="mt-3.5 text-[14.5px] leading-[1.6] text-white/75 max-w-[62ch]">{item.a}</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
