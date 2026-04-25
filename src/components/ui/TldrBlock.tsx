import type { ReactNode } from "react";

type TldrBlockProps = {
  label?: string;
  answer: ReactNode;
  bullets?: ReactNode[];
};

/**
 * Answer-first block rendered above the fold on pillar pages.
 * Designed for LLM citability: short declarative answer + optional bullets.
 * Semantic aside with ARIA labelling so assistants can recognise it as a summary.
 */
export function TldrBlock({ label = "TL;DR", answer, bullets }: TldrBlockProps) {
  return (
    <aside
      aria-label="Summary"
      data-speakable="true"
      className="tldr max-w-[880px] mx-auto px-5 sm:px-8 -mt-4 mb-16"
    >
      <div className="relative rounded-2xl border border-warm-100 bg-white p-7 sm:p-8 shadow-[0_1px_0_rgba(14,14,12,0.02)]">
        <div className="flex items-baseline gap-3 mb-3">
          <span
            className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand"
            style={{ letterSpacing: "0.14em" }}
          >
            {label}
          </span>
          <span className="h-px flex-1 bg-warm-100" />
        </div>
        <p className="text-[17px] leading-[1.55] text-ink" data-speakable="true">{answer}</p>
        {bullets && bullets.length > 0 ? (
          <ul className="mt-4 space-y-2 text-[15px] leading-[1.55] text-ink-soft">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-ink-soft/60" aria-hidden>—</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </aside>
  );
}
