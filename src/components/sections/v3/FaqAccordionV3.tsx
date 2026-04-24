"use client";

import { useState } from "react";
import Link from "next/link";

type Locale = "en" | "es";

interface Item { q: string; a: string; }

interface Props {
  locale?: Locale;
  items: Item[];
  eyebrow?: string;
  titleEn?: React.ReactNode;
  titleEs?: React.ReactNode;
  ledeEn?: string;
  ledeEs?: string;
  bgClass?: string;
}

export function FaqAccordionV3({
  locale = "en",
  items,
  eyebrow = "FAQ",
  titleEn,
  titleEs,
  ledeEn,
  ledeEs,
  bgClass = "bg-warm-50",
}: Props) {
  const [openIdx, setOpenIdx] = useState(0);
  const title = locale === "es" ? (titleEs || titleEn) : titleEn;
  const lede = locale === "es" ? (ledeEs || ledeEn) : ledeEn;

  return (
    <section className={`py-28 border-t border-warm-100 ${bgClass}`}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-14">
          <div>
            <span className="eyebrow mb-5">{eyebrow}</span>
            {title && <h2 className="h-section mt-5">{title}</h2>}
          </div>
          {lede && (
            <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
              {lede}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-[1fr_1.8fr] gap-12 md:gap-20">
          <div>
            <p className="text-[16px] text-ink-soft leading-[1.55] mb-5">
              {locale === "es"
                ? "¿Más preguntas? Nuestro equipo — incluido el founder — está a un mensaje."
                : "Still have questions? Our team — including the founder — is one message away."}
            </p>
            <Link
              href={locale === "es" ? "/es/demo" : "/demo"}
              className="inline-flex items-center gap-2 bg-ink text-white px-7 py-3.5 rounded-md text-[15px] font-semibold no-underline hover:bg-brand transition-colors"
            >
              {locale === "es" ? "Escríbenos" : "Talk to us"} →
            </Link>
          </div>

          <div className="flex flex-col gap-2.5">
            {items.map((item, i) => {
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
                    <h4 className={`text-[16px] font-semibold tracking-[-0.015em] ${isOpen ? "text-white" : "text-ink"}`}>
                      {item.q}
                    </h4>
                    <span
                      className={`w-7 h-7 rounded-md flex items-center justify-center text-[18px] font-normal shrink-0 transition-transform ${
                        isOpen ? "bg-brand text-white rotate-45" : "bg-warm-50 text-ink-soft"
                      }`}
                    >
                      +
                    </span>
                  </div>
                  {isOpen && (
                    <p className="mt-3.5 text-[14.5px] leading-[1.65] text-white/80 max-w-[62ch]">
                      {item.a}
                    </p>
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
