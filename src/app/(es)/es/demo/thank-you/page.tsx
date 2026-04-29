import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ThankYouVariantsEs } from "./ThankYouVariantsEs";

export const metadata: Metadata = {
  title: "Gracias — SealMetrics",
  description:
    "Tu solicitud de audit ha sido recibida. Respondemos en un día laborable.",
  robots: { index: false, follow: false },
};

export default function ThankYouPageEs() {
  return (
    <>
      <Breadcrumbs
        locale="es"
        items={[
          { label: "Pide una demo", href: "/es/demo" },
          { label: "Gracias" },
        ]}
      />
      <section className="pt-12 pb-28 bg-warm-white min-h-[70vh]">
        <Suspense fallback={<div className="max-w-[640px] mx-auto px-5 sm:px-8" />}>
          <ThankYouVariantsEs />
        </Suspense>
      </section>
    </>
  );
}
