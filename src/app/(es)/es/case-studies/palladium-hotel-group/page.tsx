import type { Metadata } from "next";
import { HotelCaseSignal } from "@/components/v4/HotelCaseSignal";
import { getHotelCase } from "@/lib/content/hotel-cases";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import "@/components/v4/hotel-case-signal.css";

const c = getHotelCase("palladium-hotel-group", "es");
export const metadata: Metadata = {
  title:c.title, description:c.description,
  alternates:{ canonical:"https://sealmetrics.com/es/case-studies/palladium-hotel-group/", languages:getAlternatesEs("/case-studies/palladium-hotel-group") },
  openGraph:{ title:c.socialTitle, description:c.description, type:"article", images:["https://sealmetrics.com/og-image.png"], url:"https://sealmetrics.com/es/case-studies/palladium-hotel-group/", siteName:"SealMetrics", locale:"es_ES" },
  twitter:{ card:"summary_large_image", site:"@sealmetrics", title:c.socialTitle, description:c.description, images:["https://sealmetrics.com/og-image.png"] },
};
export default function Page(){ return <HotelCaseSignal slug="palladium-hotel-group" locale="es" />; }
