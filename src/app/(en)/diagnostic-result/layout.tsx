import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Diagnostic Results — SealMetrics",
  description:
    "See your personalized analytics diagnostic results and discover how much data your current setup is missing.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://sealmetrics.com/diagnostic-result",
  },
};

export default function DiagnosticResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
