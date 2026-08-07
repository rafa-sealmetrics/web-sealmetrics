"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { type QuizAnswers, isQuizComplete } from "@/lib/content/diagnostic";
import { getQuizAnswers } from "@/lib/content/diagnostic-session";
import { ScoreBanner } from "@/components/homepage/ScoreBanner";
import { DataGapSection } from "@/components/homepage/DataGapSection";
import { ComparisonReveal } from "@/components/homepage/ComparisonReveal";
import { DemoAccessCTA } from "@/components/homepage/DemoAccessCTA";

export function DiagnosticResultClient() {
  const router = useRouter();
  const [answers, setAnswers] = useState<QuizAnswers | null>(null);

  useEffect(() => {
    // In-memory handoff, not sessionStorage — see lib/content/diagnostic-session.
    const stored = getQuizAnswers();
    if (!stored || !isQuizComplete(stored)) {
      router.replace("/");
      return;
    }
    setAnswers(stored);
  }, [router]);

  if (!answers) {
    // This branch is what a static export actually ships, so it carries the
    // page's only <h1>. Without it the delivered HTML had no heading at all.
    return (
      <div className="pt-40 pb-20 text-center">
        <h1
          className="font-semibold text-ink leading-[1.1] tracking-[-0.025em]"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
        >
          Your analytics diagnostic
        </h1>
        <p className="text-text-secondary mt-5">Loading your results…</p>
      </div>
    );
  }

  return (
    <>
      <ScoreBanner answers={answers} />
      <DataGapSection answers={answers} />
      <ComparisonReveal answers={answers} />
      <DemoAccessCTA answers={answers} />
    </>
  );
}
