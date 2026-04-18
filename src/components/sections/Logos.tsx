import Image from "next/image";

const logos = [
  { name: "Acciona", src: "/logos/clients/acciona.svg", width: 120, height: 32 },
  { name: "Crocs", src: "/logos/clients/crocs.svg", width: 100, height: 32 },
  { name: "Desigual", src: "/logos/clients/desigual-dark.svg", width: 130, height: 24 },
  { name: "UNICEF", src: "/logos/clients/unicef.svg", width: 90, height: 28 },
  { name: "Palladium Hotel Group", src: "/logos/clients/palladium-dark.svg", width: 120, height: 36 },
  { name: "Casa Batlló", src: "/logos/clients/casabatllo.png", width: 110, height: 28 },
  { name: "Juguettos", src: "/logos/clients/juguettos.png", width: 110, height: 24 },
];

export function Logos({ colorful = false, locale = "en" }: { colorful?: boolean; locale?: "en" | "es" }) {
  const tagline =
    locale === "es"
      ? "Equipos de marketing de toda Europa confían en nosotros"
      : "Trusted by marketing teams across Europe";
  return (
    <section className="py-14 border-t border-b border-warm-100">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <p className="text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary text-center mb-8">
          {tagline}
        </p>
        <div className={`flex items-center justify-center gap-12 flex-wrap ${colorful ? "opacity-70" : "opacity-40 grayscale"}`}>
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="h-7 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
