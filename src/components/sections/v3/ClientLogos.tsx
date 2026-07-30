import { Picture } from "@/components/ui/Picture";

/* ============================================================
   CENSO DE CLIENTES · fuente única
   Las versiones ES e EN de la tira de logos tenían cada una su
   propia lista y su propia rejilla, y habían divergido: 10 logos
   frente a 12, y alturas distintas. Con dos copias, cualquier alta
   o baja de cliente hay que hacerla dos veces y en la práctica se
   hacía una. Aquí viven la lista y la rejilla; cada idioma pone
   solo su titular.
   ============================================================ */

const LOGO_H = 40;

export const CLIENT_LOGOS: { src: string; alt: string; h?: number }[] = [
  // Primera fila — destacados, 50% más grandes
  { src: "/logos/clients/palladium-dark.svg", alt: "Palladium Hotel Group", h: 60 },
  { src: "/logos/clients/dreamplace.svg", alt: "Dreamplace Hotels", h: 60 },
  { src: "/logos/clients/acciona.svg", alt: "Acciona", h: 60 },
  { src: "/logos/clients/crocs.svg", alt: "Crocs", h: 60 },
  // Siguientes filas — altura base
  { src: "/logos/clients/desigual-dark.svg", alt: "Desigual" },
  { src: "/logos/clients/unicef.svg", alt: "UNICEF" },
  { src: "/logos/clients/casabatllo.png", alt: "Casa Batlló" },
  { src: "/logos/clients/juguettos.png", alt: "Juguettos" },
  { src: "/logos/clients/3cat.png", alt: "3Cat" },
  { src: "/logos/clients/fundacion-bankinter.png", alt: "Fundación Bankinter", h: 80 },
  { src: "/logos/clients/dormideo.png", alt: "Dormideo" },
  { src: "/logos/clients/incapto.svg", alt: "Incapto" },
];

/* 4 columnas: con 12 logos dan tres filas llenas. A 5 columnas quedaba una
   fila huérfana de dos y las pistas bajaban tanto que los logos anchos se
   pisaban entre sí. */
export function ClientLogosGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-12 items-center justify-items-center">
      {CLIENT_LOGOS.map((logo) => {
        const h = logo.h ?? LOGO_H;
        return (
          <div
            key={logo.alt}
            className="flex items-center justify-center min-h-20 transition-transform hover:scale-105"
          >
            <Picture
              src={logo.src}
              alt={logo.alt}
              width={220}
              height={h}
              className="object-contain w-auto"
              /* El tope tiene que ser también relativo a la celda: con un
                 maxWidth solo en px, un logo ancho puede salir más ancho que su
                 pista del grid y desbordar sobre la vecina. */
              style={{ height: `${h}px`, maxWidth: "min(200px, 100%)" }}
            />
          </div>
        );
      })}
    </div>
  );
}
