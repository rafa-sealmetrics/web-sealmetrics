# Prompt para la sesión que hará la transición

Quiero migrar el diseño actual de sealmetrics.com al rediseño incluido en este paquete.

Referencia visual aprobada:

https://sealmetrics-signal.sealmetrics.chatgpt.site

Lee primero `README.md` y revisa todo `design-source/`. Después inspecciona completamente el repositorio real de sealmetrics.com, sus instrucciones locales y su arquitectura antes de editar.

Tu objetivo es trasladar la nueva homepage al proyecto real con alta fidelidad visual y narrativa, pero preservando lo que ya funciona:

- Framework, arquitectura, gestor de paquetes y componentes compartidos.
- Todas las rutas actuales y su contenido.
- Navegación, footer, idiomas EN/ES y hreflang.
- SEO, canonical, metadata, JSON-LD, manifest, favicon y `llms.txt`.
- Formularios y enlaces de demo, registro, login, documentación y LENS.
- Tracking, conversiones, analítica e integraciones de producción.
- Casos de estudio, recursos, seguridad, pricing e integraciones.

Dirección creativa obligatoria:

- Personalidad: challenger premium europeo, honesto, preciso e inteligente.
- Hero: “Nice dashboard. Shame about the missing half.”
- Territorio: “The analytics of reality.”
- Wordmark sin símbolo: `Seal` sólido y `Metrics` vacío con contorno.
- No uses el antiguo círculo; fue descartado.
- Paleta: negro `#111412`, verde `#CBFF3D`, marfil `#F4F1E8`, blanco cálido `#FFFDF7`.
- El verde debe funcionar como señal y no como decoración.
- Mantén los logos reales de clientes y las integraciones.
- Conserva los bloques de producto reales: ROAS, Promo Day y LENS.

Forma de trabajo:

1. Haz una auditoría del proyecto actual y enumera brevemente qué conservarás y qué sustituirás.
2. Implementa la transición por bloques dentro de la arquitectura existente; no reemplaces el repositorio por el prototipo.
3. Reutiliza componentes y activos nativos cuando den el mismo resultado.
4. Adapta el rediseño a todas las anchuras y respeta accesibilidad.
5. Comprueba todas las rutas y SEO relevantes tras la integración.
6. Enséñame un preview o entorno de staging antes de tocar producción.
7. No publiques en producción sin mi aprobación expresa.

La homepage debe sentirse como el rediseño aprobado, pero el sitio completo debe seguir comportándose como sealmetrics.com.
