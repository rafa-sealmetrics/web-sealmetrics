export type DemoTier = "A" | "B" | "C";

export interface DemoAnswers {
  business: string;
  revenue: string;
  role: string;
  paidSpend: string;
  ga4Gap: string;
  pressure: string;
}

export const SCORING: Record<keyof DemoAnswers, Record<string, number>> = {
  business: { ecommerce: 3, hotel: 2, travel: 2, saas: 1, other: 0 },
  revenue: { lt500k: 0, "500k-1m": 2, "1m-50m": 3, gt50m: 2 },
  role: { decisor: 3, recommends: 2, implements: 1, other: 0 },
  paidSpend: { lt5k: 0, "5k-20k": 2, "20k-100k": 3, gt100k: 3, none: 0 },
  ga4Gap: { never: 0, lt10: 1, "10-30": 2, "30-50": 3, gt50: 4 },
  pressure: { nobody: 0, me: 1, team: 2, board: 3, cfo: 4 },
};

const MAX_RAW = 3 + 3 + 3 + 3 + 4 + 4;

export function scoreAnswers(answers: DemoAnswers): { raw: number; normalized: number; tier: DemoTier } {
  const raw =
    (SCORING.business[answers.business] ?? 0) +
    (SCORING.revenue[answers.revenue] ?? 0) +
    (SCORING.role[answers.role] ?? 0) +
    (SCORING.paidSpend[answers.paidSpend] ?? 0) +
    (SCORING.ga4Gap[answers.ga4Gap] ?? 0) +
    (SCORING.pressure[answers.pressure] ?? 0);

  const normalized = Math.max(1, Math.round((raw / MAX_RAW) * 10));
  const tier: DemoTier = normalized >= 8 ? "A" : normalized >= 5 ? "B" : "C";

  return { raw, normalized, tier };
}
