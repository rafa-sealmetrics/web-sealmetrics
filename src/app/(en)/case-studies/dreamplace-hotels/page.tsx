import type { Metadata } from "next";
import { CaseStudySignal } from "@/components/v4/CaseStudySignal";
import { getCaseStudy } from "@/lib/content/case-studies";
import { getAlternates } from "@/lib/i18n/navigation";
import "@/components/v4/case-study-signal.css";
import { ogImage } from "@/lib/seo/og";

const c = getCaseStudy("dreamplace-hotels", "en");
export const metadata: Metadata = {
  title:c.title, description:c.description,
  alternates:{ canonical:"https://sealmetrics.com/case-studies/dreamplace-hotels/", languages:getAlternates("/case-studies/dreamplace-hotels") },
  openGraph:{ title:c.socialTitle, description:c.description, type:"article", images:[ogImage("/case-studies/dreamplace-hotels/")], url:"https://sealmetrics.com/case-studies/dreamplace-hotels/", siteName:"Sealmetrics", locale:"en_US" },
  twitter:{ card:"summary_large_image", site:"@sealmetrics", title:c.socialTitle, description:c.description, images:[ogImage("/case-studies/dreamplace-hotels/")] },
};
export default function Page(){ return <CaseStudySignal slug="dreamplace-hotels" locale="en" />; }
