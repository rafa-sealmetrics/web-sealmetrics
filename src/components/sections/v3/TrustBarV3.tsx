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

const stats = [
  { value: "100%", label: "EU data capture" },
  { value: "612%", label: "more conversions tracked" },
  { value: "<2 min", label: "setup time" },
  { value: "€599/mo", label: "starting price" },
];

export function TrustBarV3() {
  return (
    <section className="border-t border-warm-100 py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Logos row */}
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-warm-300 text-center mb-6">
          Trusted by marketing teams across Europe
        </p>
        <div className="flex items-center justify-center gap-10 flex-wrap opacity-70 mb-12">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="h-6 w-auto object-contain"
              unoptimized
            />
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-warm-100 border border-warm-100 rounded-[4px] overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-5 text-center">
              <p className="font-mono text-xl font-medium text-warm-900 mb-0.5">
                {s.value}
              </p>
              <p className="text-xs text-warm-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
