import type { ReactNode } from "react";

export type HowToStep = {
  /** Short imperative label. Becomes the HowToStep name. */
  name: string;
  /** The instruction, in one or two sentences. Becomes the HowToStep text. */
  text: string;
  /** Optional per-client commands or config, rendered as code blocks. */
  code?: { label: string; language?: string; body: string }[];
  /** Optional extra prose under the code. */
  note?: ReactNode;
};

/**
 * A numbered, executable procedure.
 *
 * WHY NUMBERED, WHEN CLAUDE.md SAYS BULLETS ARE DASHES
 * The dash rule is about lists whose order carries no meaning. This is a
 * sequence: you cannot verify the connection before you have added the server.
 * The numbering is information, not decoration.
 *
 * The `steps` array is the single source for both the rendered markup and the
 * `howToSchema()` call on the page, so the schema can never claim a step the
 * reader cannot see — which is what `howto-schema-not-visible` enforces.
 */
export function HowToSteps({
  steps,
  className = "",
}: {
  steps: HowToStep[];
  className?: string;
}) {
  return (
    <ol className={`list-none p-0 m-0 space-y-8 ${className}`}>
      {steps.map((step, i) => (
        <li
          key={step.name}
          id={`step-${i + 1}`}
          className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 gap-y-3 items-baseline scroll-mt-24"
        >
          <span
            className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand tabular-nums"
            aria-hidden
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-[19px] font-semibold text-ink leading-[1.3] m-0">{step.name}</h3>
          <div className="col-start-2 space-y-4">
            <p className="text-[15.5px] leading-[1.65] text-ink-soft m-0 max-w-[62ch]">{step.text}</p>
            {step.code?.length ? (
              <div className="space-y-3">
                {step.code.map((block) => (
                  <div key={block.label}>
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-soft/80 mb-1.5 m-0">
                      {block.label}
                    </p>
                    <div className="overflow-x-auto border border-warm-100 bg-warm-50">
                      <pre className="m-0 p-4 text-[13px] leading-[1.6] text-ink">
                        <code className={block.language ? `language-${block.language}` : undefined}>
                          {block.body}
                        </code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
            {step.note ? (
              <p className="text-[14.5px] leading-[1.6] text-ink-soft m-0 max-w-[62ch]">{step.note}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
