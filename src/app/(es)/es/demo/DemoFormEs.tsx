"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const WEBHOOK_URL = "https://n8n.sealmetrics.com/webhook/webform-lead";

const inputClasses =
  "w-full px-4 py-3 text-[0.9rem] border border-warm-200 rounded-[4px] bg-white text-text-primary focus:border-text-body focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-accent focus-visible:outline-offset-2 transition-colors";

export function DemoFormEs() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      source: window.location.href,
    };

    try {
      if (window.sealmetrics) {
        window.sealmetrics.conv("demo_request", 1, { email: data.email });
      }
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      router.push("/demo/thank-you");
    } catch {
      setError("Algo ha ido mal. Por favor, inténtalo de nuevo o escríbenos directamente.");
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-warm-white border border-warm-100 rounded-[4px] p-10">
      <h2 className="font-serif text-[1.35rem] font-medium text-text-primary mb-2">
        Solicita una demo
      </h2>
      <p className="text-[0.85rem] text-text-secondary mb-8">
        Tres campos. Te contactamos el mismo día para confirmar tu hora.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-[0.8rem] font-medium text-text-body mb-1.5">
            Nombre completo
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="block text-[0.8rem] font-medium text-text-body mb-1.5">
            Email profesional
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="website" className="block text-[0.8rem] font-medium text-text-body mb-1.5">
            Tu web
          </label>
          <input id="website" name="website" type="url" placeholder="https://" required className={inputClasses} />
        </div>

        <div className="flex items-start gap-3">
          <input
            id="gdpr"
            name="gdpr"
            type="checkbox"
            required
            className="mt-1 w-4 h-4 rounded-[2px] border border-warm-200 accent-text-primary cursor-pointer flex-shrink-0"
          />
          <label htmlFor="gdpr" className="text-[0.75rem] text-text-secondary leading-relaxed cursor-pointer">
            Acepto el{" "}
            <a href="https://legal.sealmetrics.com/privacy-notice" target="_blank" rel="noopener noreferrer" className="text-text-body underline hover:text-text-primary transition-colors">
              Aviso de Privacidad
            </a>{" "}
            y consiento que SealMetrics procese mis datos para responder a mi solicitud.
          </label>
        </div>

        {error && <p className="text-[0.8rem] text-red-alert">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] hover:bg-[#333] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Enviando..." : "Reservar mi demo de 30 minutos \u2192"}
        </button>
        <p className="text-[0.75rem] text-text-tertiary text-center">
          Sin compromiso. Respondemos en un día laborable.
        </p>
      </form>
    </div>
  );
}
