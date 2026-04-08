"use client";

import {
  type QuizAnswers,
  buildComparison,
  getLossRate,
  getTrafficVolume,
  getToolName,
  formatNumber,
} from "@/lib/content/diagnostic";

interface ComparisonRevealProps {
  answers: QuizAnswers;
}

export function ComparisonReveal({ answers }: ComparisonRevealProps) {
  const rows = buildComparison(answers);
  const toolName = getToolName(answers.currentTool ?? "ga4");
  const lossRate = getLossRate(answers);
  const traffic = getTrafficVolume(answers);
  const recovered = Math.round(traffic * lossRate);

  return (
    <section className="py-16 bg-warm-white border-t border-warm-100">
      <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <p className="text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-3">
          Your comparison
        </p>
        <h2 className="headline-sub mb-8">
          Today with {toolName} vs. with SealMetrics
        </h2>

        {/* Comparison table */}
        <div className="border border-warm-100 rounded-[4px] overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-3 bg-warm-50 border-b border-warm-100">
            <div className="p-4 text-[0.75rem] font-medium text-text-tertiary uppercase tracking-[0.06em]">
              Metric
            </div>
            <div className="p-4 text-[0.75rem] font-medium text-text-tertiary uppercase tracking-[0.06em]">
              Today
            </div>
            <div className="p-4 text-[0.75rem] font-medium text-text-tertiary uppercase tracking-[0.06em]">
              SealMetrics
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={row.metric}
              className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-warm-100" : ""}`}
            >
              <div className="p-4 text-[0.85rem] text-text-body">
                {row.metric}
              </div>
              <div className="p-4 text-[0.85rem] text-text-secondary font-mono text-[0.8rem]">
                {row.current}
              </div>
              <div
                className={`p-4 text-[0.85rem] font-mono text-[0.8rem] ${row.highlight ? "text-green-muted font-medium" : "text-text-body"}`}
              >
                {row.sealmetrics}
              </div>
            </div>
          ))}
        </div>

        {/* Impact summary */}
        <div className="mt-8 p-6 bg-white border border-warm-100 rounded-[4px]">
          <p className="text-[0.9rem] text-text-body leading-relaxed">
            <span className="font-medium text-text-primary">
              The bottom line:
            </span>{" "}
            SealMetrics would make fully visible and attributable{" "}
            <span className="font-mono font-medium text-green-muted">
              {formatNumber(recovered)}
            </span>{" "}
            sessions per month that are currently invisible to your analytics.
            That is not a marginal improvement — it is the difference between
            optimizing on a fraction of your traffic and scaling on all of it.
          </p>
        </div>

        {/* Social proof */}
        <p className="text-[0.8rem] text-text-secondary text-center mt-6">
          On average, SealMetrics customers discover 42% more sessions than
          their previous analytics tool reported.
        </p>
      </div>
    </section>
  );
}
