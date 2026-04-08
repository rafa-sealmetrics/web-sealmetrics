"use client";

import {
  type QuizAnswers,
  calculateDimensions,
  calculateTotalScore,
  getScoreLevel,
  getScoreLevelLabel,
  getLossRate,
} from "@/lib/content/diagnostic";

interface ScoreBannerProps {
  answers: QuizAnswers;
}

function MiniBar({ label, value }: { label: string; value: number }) {
  const barColor =
    value >= 75
      ? "var(--color-red-alert)"
      : value >= 50
        ? "#C4883B"
        : "var(--color-green-muted)";

  return (
    <div className="flex-1 min-w-[100px]">
      <div className="flex justify-between text-[0.7rem] mb-1">
        <span className="text-dark-text-secondary">{label}</span>
        <span className="font-mono text-dark-text-tertiary">{value}</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${value}%`, backgroundColor: barColor }}
        />
      </div>
    </div>
  );
}

export function ScoreBanner({ answers }: ScoreBannerProps) {
  const dimensions = calculateDimensions(answers);
  const score = calculateTotalScore(dimensions);
  const level = getScoreLevel(score);
  const levelLabel = getScoreLevelLabel(level);
  const lossRate = getLossRate(answers);
  const lossPct = Math.round(lossRate * 100);

  const levelColor =
    level === "critical"
      ? "text-red-alert"
      : level === "high"
        ? "text-[#C4883B]"
        : level === "moderate"
          ? "text-dark-text-secondary"
          : "text-green-muted";

  return (
    <section className="pt-28 pb-12 bg-warm-900 section-dark">
      <div className="max-w-[960px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          {/* Score */}
          <div className="flex items-end gap-3 flex-shrink-0">
            <span className="font-mono text-[3.5rem] leading-none text-dark-text">
              {score}
            </span>
            <div className="mb-1.5">
              <span className="text-[0.75rem] text-dark-text-tertiary block">
                / 100
              </span>
              <span className={`text-[0.85rem] font-medium ${levelColor}`}>
                {levelLabel}
              </span>
            </div>
          </div>

          {/* Dimension bars */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <MiniBar label="Opportunity" value={dimensions.data} />
            <MiniBar label="Investment" value={dimensions.investment} />
            <MiniBar label="Impact" value={dimensions.impact} />
            <MiniBar label="Urgency" value={dimensions.urgency} />
          </div>

          {/* Loss headline */}
          <p className="text-[0.95rem] text-dark-text-secondary flex-shrink-0 md:max-w-[200px] md:text-right">
            ~{lossPct}% of your traffic is unmeasured
          </p>
        </div>
      </div>
    </section>
  );
}
