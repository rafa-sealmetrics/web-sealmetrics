import { buildRedirectMetadata, RedirectStub } from "@/components/ui/Redirect";

// La comparativa canónica vive en /es/vs-ga4/. Esta ruta sobrevive para las
// URLs ya indexadas. Usar el stub compartido mantiene noindex, canonical,
// tarjeta OG/Twitter y <h1> coherentes con el resto de redirecciones.
export const metadata = buildRedirectMetadata("/es/vs-ga4/");

export default function Page() {
  return <RedirectStub to="/es/vs-ga4/" />;
}
