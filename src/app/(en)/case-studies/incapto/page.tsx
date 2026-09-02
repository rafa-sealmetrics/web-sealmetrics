import type { Metadata } from "next";
import { CaseStudySignal } from "@/components/v4/CaseStudySignal";
import { getCaseStudy } from "@/lib/content/case-studies";
import { getAlternates } from "@/lib/i18n/navigation";
import "@/components/v4/case-study-signal.css";
import { ogImage } from "@/lib/seo/og";

const c = getCaseStudy("incapto", "en");
export const metadata: Metadata = {
  title:c.title, description:c.description,
  alternates:{ canonical:"https://sealmetrics.com/case-studies/incapto/", languages:getAlternates("/case-studies/incapto") },
  openGraph:{ title:c.socialTitle, description:c.description, type:"article", images:[ogImage("/case-studies/incapto/")], url:"https://sealmetrics.com/case-studies/incapto/", siteName:"Sealmetrics", locale:"en_US" },
  twitter:{ card:"summary_large_image", site:"@sealmetrics", title:c.socialTitle, description:c.description, images:[ogImage("/case-studies/incapto/")] },
};
export default function Page(){ return <CaseStudySignal slug="incapto" locale="en" />; }
