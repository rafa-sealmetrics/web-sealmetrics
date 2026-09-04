import type { ReactNode } from "react";

/**
 * The answer-first block for a v4 Signal page.
 *
 * WHY A v4 COMPONENT AND NOT `QuickAnswer`
 * `src/components/ui/QuickAnswer.tsx` is v3: rounded corners, brand green. On a
 * Signal page that is the tell that a section was not migrated (CLAUDE.md —
 * radius 0 everywhere). Same job, v4 clothes: hairline rule, ink-on-acid
 * eyebrow, hard offset shadow, square.
 *
 * WHAT IT IS FOR
 * The passage an answer engine lifts, and the `summary` in the page's Markdown
 * twin front matter — `scripts/generate-markdown.mjs` reads the first
 * `data-speakable` element. `speakableWebPageSchema` targets the same
 * attribute. Four commercial pillars shipped without one and were invisible to
 * every one of those surfaces.
 *
 * WRITING THE BODY (the caller's job)
 *   - Open with a definitional sentence: "X is a <category> that <does what>."
 *   - 134-167 words. Long enough to stand alone, short enough to be quoted.
 *   - Carry one or two specific numbers.
 *   - Close on a limit or a fact, never a call to action. A CTA is the one
 *     part of the page that means nothing once the passage is quoted
 *     elsewhere, and `markdown-twin-cta-leak` will reject it.
 */
export function SignalAnswer({
  label,
  children,
}: {
  /** Short eyebrow. Defaults to the English label. */
  label?: string;
  children: ReactNode;
}) {
  return (
    <section className="sig-answer" aria-label={label ?? "Quick answer"}>
      <div className="sig-answer-inner">
        <p className="sig-answer-eyebrow">
          <span>{label ?? "Quick answer"}</span>
        </p>
        <div className="sig-answer-body" data-speakable>
          {children}
        </div>
      </div>
    </section>
  );
}
