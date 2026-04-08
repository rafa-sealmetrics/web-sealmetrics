"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { type QuizAnswers, isQuizComplete } from "@/lib/content/diagnostic";
import { ScoreBanner } from "@/components/homepage/ScoreBanner";
import { DataGapSection } from "@/components/homepage/DataGapSection";
import { ComparisonReveal } from "@/components/homepage/ComparisonReveal";
import { DemoAccessCTA } from "@/components/homepage/DemoAccessCTA";

export default function DiagnosticResultPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<QuizAnswers | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("diagnostic_answers");
    if (!stored) {
      router.replace("/#quiz");
      return;
    }
    try {
      const parsed = JSON.parse(stored) as QuizAnswers;
      if (!isQuizComplete(parsed)) {
        router.replace("/#quiz");
        return;
      }
      setAnswers(parsed);
    } catch {
      router.replace("/#quiz");
    }
  }, [router]);

  if (!answers) {
    return (
      <div className="pt-40 pb-20 text-center">
        <p className="text-text-secondary">Loading your results...</p>
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
