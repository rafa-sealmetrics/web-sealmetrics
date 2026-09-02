import type { Metadata } from "next";
import { CaseStudyIndexSignal } from "@/components/v4/CaseStudySignal";
import { getAlternates } from "@/lib/i18n/navigation";
import "@/components/v4/case-study-signal.css";
import "@/components/v4/case-index-signal.css";
import { ogImage } from "@/lib/seo/og";
export const metadata:Metadata={title:"Case Studies — Sealmetrics",description:"Named European hotel teams show the measurement gaps they found, the method they applied and the commercial decisions that changed.",openGraph:{title:"Case Studies — Sealmetrics",description:"Named clients, inspectable figures and the decisions that changed with complete measurement.",type:"website",images:[ogImage("/case-studies/")],url:"https://sealmetrics.com/case-studies/",siteName:"Sealmetrics",locale:"en_US"},twitter:{card:"summary_large_image",site:"@sealmetrics",title:"Case Studies — Sealmetrics",description:"Named clients, inspectable figures and decisions built on complete measurement.",images:[ogImage("/case-studies/")]},alternates:{canonical:"https://sealmetrics.com/case-studies/",languages:getAlternates("/case-studies")}};
export default function Page(){return <CaseStudyIndexSignal locale="en"/>}
