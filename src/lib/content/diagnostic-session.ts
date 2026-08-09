import type { QuizAnswers } from "./diagnostic";

/**
 * In-memory handoff for the homepage diagnostic quiz.
 *
 * Replaces a `sessionStorage` read that violated the project's no-client-side-
 * storage rule — a rule that is hard to defend breaking on a site whose
 * /security page tells visitors nothing is written to their device.
 *
 * A module-level variable survives client-side navigation, which is the only
 * case this handoff needs: the visitor answers the quiz and is routed to the
 * result view without a full page load. A hard reload or a pasted URL starts
 * over, which is correct — there is nothing persisted to resume from.
 *
 * NOTE (7 Aug 2026): nothing in the codebase currently calls `setQuizAnswers`.
 * The quiz that fed this handoff is not wired up, so /diagnostic-result always
 * takes its empty branch. Kept rather than deleted because the result
 * components (ScoreBanner, DataGapSection, ComparisonReveal, DemoAccessCTA)
 * are complete and look intended for use. If the quiz is not coming back,
 * deleting the route and those components is the cleanup.
 */
let answers: QuizAnswers | null = null;

export function setQuizAnswers(next: QuizAnswers): void {
  answers = next;
}

export function getQuizAnswers(): QuizAnswers | null {
  return answers;
}

export function clearQuizAnswers(): void {
  answers = null;
}
