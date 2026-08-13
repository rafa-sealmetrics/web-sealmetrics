import type { Metadata } from "next";
import { OperationalLeadPage } from "../../components/operational-lead-page";

export const metadata: Metadata = {
  title: "Solicitar acceso a la demo | SealMetrics",
  description: "Solicita acceso controlado al entorno de demostración de SealMetrics.",
  robots: { index: false, follow: false },
  openGraph: { title: "Solicitar acceso a la demo | SealMetrics", description: "Solicita acceso controlado al entorno de demostración de SealMetrics.", type: "website" },
};

export default function DemoAccessPageEs() { return <OperationalLeadPage locale="es" />; }
