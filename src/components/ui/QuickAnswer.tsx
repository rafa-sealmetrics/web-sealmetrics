import type { ReactNode } from "react";

/**
 * AI-citation-optimized answer block. Targets the 134-167 word "sweet spot"
 * AI engines (Google AIO, ChatGPT, Perplexity, Bing Copilot) extract verbatim
 * for direct answers.
 *
 * Design rules for the `body` content (caller's responsibility):
 *   - Open with a definitional pattern: "X is a [category] that [does what] [for whom]."
 *   - Include 1-2 specific numbers with sources where possible
 *   - End with a single call-out sentence (NOT a CTA — CTAs pollute the citable passage)
 *   - 134-167 words is the optimal range; 100-200 still works
 *
 * The block carries `data-speakable` and `.faq-answer` so SpeakableSpecification
 * targets it. Visually it sits above the page body as an editorial pull-quote
 * style block, not a banner.
 */
export function QuickAnswer({
  label = "Quick answer",
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <aside
      className="my-10 p-6 sm:p-8 bg-warm-50 border-l-[3px] border-brand rounded-r-md"
      role="note"
      aria-label={label}
    >
      <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-brand font-semibold mb-3.5">
        {label}
      </p>
      <div
        data-speakable
        className="faq-answer text-[16px] leading-[1.65] text-ink space-y-3 max-w-[68ch]"
      >
        {children}
      </div>
    </aside>
  );
}
