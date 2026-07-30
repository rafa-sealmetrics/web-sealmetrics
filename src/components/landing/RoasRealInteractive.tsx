"use client";

import { useEffect, useRef, useState } from "react";

/* ============================================================
   ROAS REAL · piezas interactivas
   Landing /es/roas-real — tráfico frío de pago, noindex.
   Sin almacenamiento en cliente: todo el estado es de sesión.
   ============================================================ */

const TOTAL = 480;
const LOST_RATE = 0.45;

/* PRNG con semilla fija: el mismo reparto en servidor y cliente,
   así que no hay desajuste de hidratación. */
function lostMap(): boolean[] {
  let seed = 7;
  const out: boolean[] = [];
  for (let i = 0; i < TOTAL; i++) {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    out.push(seed / 2147483648 < LOST_RATE);
  }
  return out;
}
const LOST = lostMap();

function prefersReduced() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/* ---------- Contador animado ---------- */
function useCountTo(target: number) {
  const [shown, setShown] = useState(target);
  const raf = useRef<number | undefined>(undefined);
  const cur = useRef(target);

  useEffect(() => {
    if (prefersReduced()) {
      cur.current = target;
      setShown(target);
      return;
    }
    const step = () => {
      cur.current += (target - cur.current) * 0.16;
      if (Math.abs(target - cur.current) < 0.6) {
        cur.current = target;
        setShown(target);
        return;
      }
      setShown(Math.round(cur.current));
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target]);

  return shown;
}

/* Único texto del widget. La pieza es idéntica en ambos idiomas, así que se
   parametriza en vez de duplicar el componente. Ojo al separador de millares:
   1.000 en español, 1,000 en inglés. */
const COPY = {
  es: {
    groupLabel: "Comparar herramienta de medición",
    readout: "de tus sesiones atribuidas",
    footGa: ["1.000 sesiones reales. ", "450 sin consentimiento", ": sin origen, sin campaña, sin canal."],
    footSeal: ["1.000 sesiones reales. ", "1.000 medidas", ": canal, campaña, keyword, landing y venta."],
  },
  en: {
    groupLabel: "Compare measurement tool",
    readout: "of your sessions attributed",
    footGa: ["1,000 real sessions. ", "450 without consent", ": no source, no campaign, no channel."],
    footSeal: ["1,000 real sessions. ", "1,000 measured", ": channel, campaign, keyword, landing page and sale."],
  },
} as const;

/* ---------- El osciloscopio: 1.000 sesiones, dos herramientas ---------- */
export function ScopeToggle({ locale = "es" }: { locale?: "es" | "en" }) {
  const t = COPY[locale];
  const [mode, setMode] = useState<"seal" | "ga">("seal");
  const [touched, setTouched] = useState(false);
  const pct = useCountTo(mode === "ga" ? 55 : 100);
  const gridRef = useRef<HTMLDivElement>(null);
  const played = useRef(false);

  /* Secuencia de entrada: se ve el dato completo (todo negro) y a los 1,5 s
     se desmorona al pasar a GA4. Se dispara cuando el grid entra en pantalla,
     no al montar: el widget está bajo el pliegue y con un timer desde la carga
     el visitante llegaba scrolleando cuando ya había terminado. Una sola vez,
     y se cancela si toca los botones antes. */
  useEffect(() => {
    if (touched || played.current) return;
    const el = gridRef.current;
    if (!el) return;

    let timer: number | undefined;
    const play = () => {
      if (played.current) return;
      played.current = true;
      if (prefersReduced()) {
        setMode("ga");
        return;
      }
      timer = window.setTimeout(() => setMode("ga"), 1500);
    };

    if (!("IntersectionObserver" in window)) {
      play();
      return () => window.clearTimeout(timer);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            play();
            io.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, [touched]);

  const pick = (m: "seal" | "ga") => {
    setTouched(true);
    setMode(m);
  };

  const isGa = mode === "ga";

  return (
    <div className="mt-16 border border-warm-100 rounded-2xl bg-white overflow-hidden">
      <div className="flex flex-wrap gap-4 items-center justify-between px-5 py-4 border-b border-warm-100">
        <div
          className="inline-flex rounded-md border border-ink overflow-hidden"
          role="group"
          aria-label={t.groupLabel}
        >
          <button
            type="button"
            onClick={() => pick("ga")}
            aria-pressed={isGa}
            className={`font-mono text-[12px] tracking-[0.06em] px-4 py-2.5 transition-colors ${
              isGa ? "bg-ink text-white" : "bg-transparent text-ink hover:bg-warm-50"
            }`}
          >
            GA4
          </button>
          <button
            type="button"
            onClick={() => pick("seal")}
            aria-pressed={!isGa}
            className={`font-mono text-[12px] tracking-[0.06em] px-4 py-2.5 transition-colors ${
              !isGa ? "bg-ink text-white" : "bg-transparent text-ink hover:bg-warm-50"
            }`}
          >
            SEALMETRICS
          </button>
        </div>

        <div className="flex items-baseline gap-2.5">
          <span
            className={`font-mono font-semibold text-[34px] leading-none tracking-[-0.03em] tabular-nums transition-colors ${
              isGa ? "text-red-alert" : "text-brand"
            }`}
          >
            {pct}%
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
            {t.readout}
          </span>
        </div>
      </div>

      <div
        ref={gridRef}
        /* Las columnas suben con el ancho para que el bloque siga leyéndose como
           una banda de datos y no como un muro: 30→16 filas, 40→12, 48→10. */
        className="grid gap-[2px] sm:gap-[3px] lg:gap-[4px] px-5 py-6 grid-cols-[repeat(30,minmax(0,1fr))] sm:grid-cols-[repeat(40,minmax(0,1fr))] lg:grid-cols-[repeat(48,minmax(0,1fr))]"
        aria-hidden="true"
      >
        {LOST.map((isLost, i) => {
          const hidden = isGa && isLost;
          return (
            <span
              key={i}
              className={`aspect-square rounded-[1px] transition-[background-color,box-shadow] duration-300 ${
                hidden
                  ? "bg-transparent shadow-[inset_0_0_0_1.5px_var(--color-red-alert)] opacity-85"
                  : "bg-ink shadow-none"
              }`}
              /* Barrido en orden de lectura (~460 ms de principio a fin). Se
                 calcula sobre el índice, no sobre filas/columnas, porque el
                 número de columnas cambia por breakpoint y una fórmula atada a
                 48 rompía el barrido en móvil. */
              style={{ transitionDelay: `${i * 0.95}ms` }}
            />
          );
        })}
      </div>

      <p className="px-5 py-3.5 border-t border-warm-100 font-mono text-[11.5px] text-ink-soft">
        {isGa ? (
          <>
            {t.footGa[0]}
            <b className="text-red-alert font-medium">{t.footGa[1]}</b>
            {t.footGa[2]}
          </>
        ) : (
          <>
            {t.footSeal[0]}
            <b className="text-brand font-medium">{t.footSeal[1]}</b>
            {t.footSeal[2]}
          </>
        )}
      </p>
    </div>
  );
}

/* ---------- Barra que se rellena al entrar en pantalla ---------- */
export function RevealBar({
  pct,
  tone = "them",
  delay = 0,
  dark = false,
}: {
  pct: number;
  tone?: "us" | "them" | "muted";
  delay?: number;
  dark?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [w, setW] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced() || !("IntersectionObserver" in window)) {
      setW(pct);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            window.setTimeout(() => setW(pct), delay);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pct, delay]);

  /* En oscuro el gris tiene que despegarse del ink o las barras largas de
     GA4/Adobe se leen como llenas y se pierde la comparación. */
  const fill =
    tone === "us" ? "bg-brand" : tone === "muted" ? "bg-warm-200" : dark ? "bg-warm-400" : "bg-warm-300";

  return (
    <span
      ref={ref}
      className={`block h-6 overflow-hidden rounded-[2px] ${dark ? "bg-white/[0.06]" : "bg-warm-50"}`}
    >
      <span
        className={`block h-full ${fill}`}
        style={{
          width: `${w}%`,
          /* Los valores nuestros son fracciones de punto porcentual (0,64%):
             sin suelo la barra desaparece y se lee como «sin dato». */
          minWidth: w > 0 ? 3 : 0,
          transition: "width 1.1s cubic-bezier(.2,.7,.2,1)",
        }}
      />
    </span>
  );
}
