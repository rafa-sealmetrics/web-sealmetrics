"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions, type QuizAnswers } from "@/lib/content/diagnostic";

export function InlineQuiz() {
  const router = useRouter();
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const selectedValue = answers[currentQuestion.key];
  const insight = selectedValue
    ? currentQuestion.getInsight(selectedValue)
    : null;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  // Progress based on current position (fills as you advance)
  const progressPercent = (currentIndex / totalQuestions) * 100;

  function handleSelect(value: string) {
    setAnswers((prev) => ({ ...prev, [currentQuestion.key]: value }));
  }

  function handleNext() {
    if (!selectedValue) return;

    if (isLastQuestion) {
      const final = { ...answers };
      sessionStorage.setItem("diagnostic_answers", JSON.stringify(final));
      router.push("/diagnostic-result");
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  return (
    <section id="quiz" className="py-20 bg-warm-white border-t border-warm-100">
      <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <p className="text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary text-center mb-2">
          2-minute diagnostic
        </p>
        <h2 className="text-[1.6rem] sm:text-[1.8rem] font-normal text-text-primary text-center leading-snug mb-12">
          How much of your marketing potential is currently visible?
        </h2>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[0.8rem] text-text-secondary">
              {currentIndex + 1} of {totalQuestions}
            </span>
            <span className="text-[0.75rem] text-text-tertiary">
              Takes about 2 minutes
            </span>
          </div>
          <div className="h-1 bg-warm-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-text-primary rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <h3 className="text-[1.25rem] sm:text-[1.4rem] font-normal text-text-primary leading-snug mb-2">
            {currentQuestion.title}
          </h3>
          <p className="text-[0.9rem] text-text-secondary">
            {currentQuestion.subtitle}
          </p>
        </div>

        {/* Pill options */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {currentQuestion.options.map((opt) => {
            const isSelected = selectedValue === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleSelect(opt.value)}
                className={`px-6 py-3 text-[0.95rem] rounded-[4px] border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-text-primary text-white border-text-primary"
                    : "bg-white text-text-body border-warm-200 hover:border-warm-400 hover:bg-warm-50"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Insight */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            insight ? "max-h-40 opacity-100 mb-8" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-5 bg-white border-l-2 border-warm-300 text-[0.85rem] text-text-body leading-relaxed">
            {insight}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentIndex === 0}
            className={`px-5 py-2.5 text-[0.9rem] rounded-[4px] transition-colors cursor-pointer ${
              currentIndex === 0
                ? "text-text-tertiary cursor-not-allowed"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            &larr; Back
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={!selectedValue}
            className={`px-7 py-2.5 text-[0.9rem] font-medium rounded-[4px] transition-colors cursor-pointer ${
              selectedValue
                ? "bg-text-primary text-white hover:bg-[#333]"
                : "bg-warm-100 text-text-tertiary cursor-not-allowed"
            }`}
          >
            {isLastQuestion ? "See my results" : "Next \u2192"}
          </button>
        </div>
      </div>
    </section>
  );
}
