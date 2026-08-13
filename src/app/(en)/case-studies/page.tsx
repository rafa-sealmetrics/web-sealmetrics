import type { Metadata } from "next";
import { CaseStudyIndexSignal } from "@/components/v4/HotelCaseSignal";
import { getAlternates } from "@/lib/i18n/navigation";
import "@/components/v4/hotel-case-signal.css";
import "@/components/v4/case-index-signal.css";
export const metadata:Metadata={title:"Case Studies — SealMetrics",description:"Named European hotel teams show the measurement gaps they found, the method they applied and the commercial decisions that changed.",openGraph:{title:"Case Studies — SealMetrics",description:"Named clients, inspectable figures and the decisions that changed with complete measurement.",type:"website",images:["https://sealmetrics.com/og-image.png"],url:"https://sealmetrics.com/case-studies/",siteName:"SealMetrics",locale:"en_US"},twitter:{card:"summary_large_image",site:"@sealmetrics",title:"Case Studies — SealMetrics",description:"Named clients, inspectable figures and decisions built on complete measurement.",images:["https://sealmetrics.com/og-image.png"]},alternates:{canonical:"https://sealmetrics.com/case-studies/",languages:getAlternates("/case-studies")}};
export default function Page(){return <CaseStudyIndexSignal locale="en"/>}
