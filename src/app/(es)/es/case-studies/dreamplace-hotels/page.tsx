import type { Metadata } from "next";
import { HotelCaseSignal } from "@/components/v4/HotelCaseSignal";
import { getHotelCase } from "@/lib/content/hotel-cases";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import "@/components/v4/hotel-case-signal.css";
import { ogImage } from "@/lib/seo/og";

const c = getHotelCase("dreamplace-hotels", "es");
export const metadata: Metadata = {
  title:c.title, description:c.description,
  alternates:{ canonical:"https://sealmetrics.com/es/case-studies/dreamplace-hotels/", languages:getAlternatesEs("/case-studies/dreamplace-hotels") },
  openGraph:{ title:c.socialTitle, description:c.description, type:"article", images:[ogImage("/es/case-studies/dreamplace-hotels/")], url:"https://sealmetrics.com/es/case-studies/dreamplace-hotels/", siteName:"SealMetrics", locale:"es_ES" },
  twitter:{ card:"summary_large_image", site:"@sealmetrics", title:c.socialTitle, description:c.description, images:[ogImage("/es/case-studies/dreamplace-hotels/")] },
};
export default function Page(){ return <HotelCaseSignal slug="dreamplace-hotels" locale="es" />; }
