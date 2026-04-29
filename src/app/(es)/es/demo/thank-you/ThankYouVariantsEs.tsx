"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { DemoTier } from "@/lib/demo-scoring";

interface Variant {
  eyebrow: string;
  headline: React.ReactNode;
  lede: React.ReactNode;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string };
  next: { title: string; desc: string }[];
}

const variants: Record<DemoTier, Variant> = {
  A: {
    eyebrow: "Slot prioritario reservado",
    headline: <>Tu audit está en la cola del founder.</>,
    lede: (
      <>
        Por tus respuestas, esto lo montamos directamente con el founder. Reserva un hueco de 30 minutos abajo — preparamos el audit con tu data real antes de la llamada.
      </>
    ),
    primaryCta: {
      label: "Reservar walkthrough de 30 min →",
      href: "https://cal.com/sealmetrics",
      external: true,
    },
    secondaryCta: { label: "Volver al inicio", href: "/es" },
    next: [
      {
        title: "Reserva tu hueco",
        desc: "Cal.com directo con el founder. Sin handoff a comercial.",
      },
      {
        title: "Preparamos tu audit",
        desc: "Pasamos tu web por la calculadora de gap y llevamos cifras reales a la llamada.",
      },
      {
        title: "Walkthrough de 30 minutos",
        desc: "GA4 lado a lado con tus propios datos. Si no encaja, te lo decimos.",
      },
    ],
  },
  B: {
    eyebrow: "Audit confirmado",
    headline: <>Tu audit lo escribimos a mano.</>,
    lede: (
      <>
        Te enviamos un report personalizado en 24 horas con el gap entre GA4 y los ingresos reales de tu backend. Sin secuencia automatizada.
      </>
    ),
    primaryCta: {
      label: "Crear cuenta gratis",
      href: "https://my.sealmetrics.com/register",
      external: true,
    },
    secondaryCta: { label: "Volver al inicio", href: "/es" },
    next: [
      {
        title: "Audit en 24h",
        desc: "Análisis escrito a mano de tu gap GA4. Llega a tu inbox.",
      },
      {
        title: "Opcional: instala el píxel ya",
        desc: "Crea cuenta gratis y capturamos data real antes de que llegue el audit.",
      },
      {
        title: "Llamada de seguimiento si tiene sentido",
        desc: "Si el audit muestra un gap relevante, proponemos un walkthrough de 30 min.",
      },
    ],
  },
  C: {
    eyebrow: "Gracias por dedicar el tiempo",
    headline: <>Te mantenemos en el radar.</>,
    lede: (
      <>
        Tu situación no es el mejor encaje para SealMetrics ahora, pero el panorama de analítica se mueve rápido. Te enviaremos puntualmente piezas sobre analítica cookieless y privacidad UE.
      </>
    ),
    primaryCta: {
      label: "Calcula tu pérdida de datos",
      href: "/es/data-loss-calculator",
    },
    secondaryCta: { label: "Leer el blog", href: "/es/blog" },
    next: [
      {
        title: "Usa la calculadora de data loss",
        desc: "Herramienta gratis. Estima tu punto ciego de GA4 con tres inputs.",
      },
      {
        title: "Lee el primer sobre analítica cookieless",
        desc: "Cómo está cambiando la medición en UE — y qué hacer al respecto.",
      },
      {
        title: "Aquí estaremos cuando encaje",
        desc: "Si tu contexto cambia, el formulario sigue abierto.",
      },
    ],
  },
};

function isTier(value: string | null): value is DemoTier {
  return value === "A" || value === "B" || value === "C";
}

export function ThankYouVariantsEs() {
  const params = useSearchParams();
  const tierParam = params.get("tier");
  const tier: DemoTier = isTier(tierParam) ? tierParam : "B";
  const v = variants[tier];

  return (
    <div className="max-w-[640px] mx-auto px-5 sm:px-8">
      <div className="w-14 h-14 mx-auto mb-7 rounded-full flex items-center justify-center" style={{ background: "rgba(45,139,109,0.12)" }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2D8B6D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <span className="eyebrow mx-auto mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>
        {v.eyebrow}
      </span>
      <h1
        className="font-semibold text-ink leading-[1.1] tracking-[-0.025em] text-center mt-4"
        style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
      >
        {v.headline}
      </h1>
      <p className="text-[16px] leading-[1.6] text-ink-soft text-center mt-5 mx-auto max-w-[54ch]">
        {v.lede}
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-9">
        {v.primaryCta.external ? (
          <a
            href={v.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-semibold text-white bg-ink rounded-md no-underline hover:bg-brand transition-colors"
          >
            {v.primaryCta.label}
          </a>
        ) : (
          <Link
            href={v.primaryCta.href}
            className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-semibold text-white bg-ink rounded-md no-underline hover:bg-brand transition-colors"
          >
            {v.primaryCta.label}
          </Link>
        )}
        {v.secondaryCta && (
          <Link
            href={v.secondaryCta.href}
            className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-semibold text-ink border border-warm-200 rounded-md no-underline hover:bg-warm-50 transition-colors"
          >
            {v.secondaryCta.label}
          </Link>
        )}
      </div>

      <div className="mt-14 text-left">
        <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft mb-5">
          Qué pasa ahora
        </h3>
        <div className="flex flex-col gap-4">
          {v.next.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 pb-4 border-b border-warm-100 last:border-0 last:pb-0"
            >
              <span className="font-mono text-[12px] font-semibold text-brand mt-0.5 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-[14.5px] font-semibold text-ink leading-[1.4]">
                  {item.title}
                </p>
                <p className="text-[13.5px] text-ink-soft mt-1 leading-[1.55]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
