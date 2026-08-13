import type { Metadata } from "next";
import { CaseStudyIndexSignal } from "@/components/v4/HotelCaseSignal";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import "@/components/v4/hotel-case-signal.css";
import "@/components/v4/case-index-signal.css";
export const metadata:Metadata={title:"Casos de éxito — SealMetrics",description:"Hoteles europeos con nombre muestran los gaps que encontraron, el método aplicado y las decisiones comerciales que cambiaron.",openGraph:{title:"Casos de éxito — SealMetrics",description:"Clientes con nombre, cifras inspeccionables y decisiones construidas sobre medición completa.",type:"website",images:["https://sealmetrics.com/og-image.png"],url:"https://sealmetrics.com/es/case-studies/",siteName:"SealMetrics",locale:"es_ES"},twitter:{card:"summary_large_image",site:"@sealmetrics",title:"Casos de éxito — SealMetrics",description:"Clientes con nombre, cifras inspeccionables y decisiones basadas en medición completa.",images:["https://sealmetrics.com/og-image.png"]},alternates:{canonical:"https://sealmetrics.com/es/case-studies/",languages:getAlternatesEs("/case-studies")}};
export default function Page(){return <CaseStudyIndexSignal locale="es"/>}
