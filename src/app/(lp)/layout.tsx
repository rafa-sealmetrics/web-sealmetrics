import {
  LandingRootShell,
  landingMetadata,
  landingViewport,
} from "@/components/landing/LandingRootShell";

/* Root layout de las landings de pago en español. La versión inglesa vive en
   (lp-en) porque <html lang> se fija aquí y no puede variar por página. */
export const viewport = landingViewport;
export const metadata = landingMetadata;

export default function LandingRootLayoutEs({ children }: { children: React.ReactNode }) {
  return <LandingRootShell locale="es">{children}</LandingRootShell>;
}
