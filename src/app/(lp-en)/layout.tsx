import {
  LandingRootShell,
  landingMetadata,
  landingViewport,
} from "@/components/landing/LandingRootShell";

/* Root layout de las landings de pago en inglés. Grupo separado de (lp) porque
   <html lang> se fija en el layout raíz y no puede variar por página. */
export const viewport = landingViewport;
export const metadata = landingMetadata;

export default function LandingRootLayoutEn({ children }: { children: React.ReactNode }) {
  return <LandingRootShell locale="en">{children}</LandingRootShell>;
}
