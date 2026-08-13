import type { Metadata } from "next";
import { OperationalLeadPage } from "../components/operational-lead-page";

export const metadata: Metadata = {
  title: "Request demo access | SealMetrics",
  description: "Request controlled access to the SealMetrics demonstration environment.",
  robots: { index: false, follow: false },
  openGraph: { title: "Request demo access | SealMetrics", description: "Request controlled access to the SealMetrics demonstration environment.", type: "website" },
};

export default function DemoAccessPage() { return <OperationalLeadPage locale="en" />; }
