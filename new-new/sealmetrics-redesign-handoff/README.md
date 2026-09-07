# SealMetrics — paquete de transición

Este paquete contiene el diseño aprobado de la nueva homepage de SealMetrics y las instrucciones para trasladarlo al proyecto real sin perder la arquitectura, las rutas ni el SEO existentes.

## Referencia visual

Versión privada publicada:

https://sealmetrics-signal.sealmetrics.chatgpt.site

## Qué contiene

- `design-source/app/page.tsx`: estructura y contenido de la homepage.
- `design-source/app/globals.css`: sistema visual completo y responsive.
- `design-source/app/layout.tsx`: metadata y tarjeta social de referencia.
- `design-source/public/`: logos reales de clientes, integraciones y tarjeta social.
- `PROMPT-PARA-OTRA-SESION.md`: encargo listo para copiar en otra sesión de Codex.

## Dirección de marca

La personalidad es la de un challenger premium europeo: honesto, preciso, inteligente y ligeramente incómodo. No vende “más dashboards”; vende mejores decisiones basadas en la realidad completa.

La idea verbal central es:

> Nice dashboard. Shame about the missing half.

El territorio de marca es:

> The analytics of reality.

El wordmark es tipográfico y no lleva isotipo:

- `Seal`: negro sólido, como la palabra “Nice”.
- `Metrics`: vacío con contorno, como la idea de “missing”.

No recuperar el símbolo circular descartado.

## Sistema visual

- Negro: `#111412`
- Verde señal: `#CBFF3D`
- Marfil: `#F4F1E8`
- Blanco cálido: `#FFFDF7`
- Gris: `#777B73`
- Tipografía de referencia: Geist + Geist Mono
- Dirección: editorial suiza, alto contraste, retícula visible y geometría precisa.

El verde es señal, no decoración. Debe reservarse para datos completos, estados vivos, decisiones y CTA principales.

## Orden narrativo aprobado

1. Barra de señal y navegación.
2. Hero: problema + promesa + CTA.
3. Logos reales de clientes.
4. Comparación entre medición parcial y realidad completa.
5. Bloques reales de producto: ROAS, Promo Day y LENS.
6. Resultados que compra el cliente.
7. Manifiesto de marca.
8. Caso de éxito y métricas de Palladium.
9. Explicación de la arquitectura sin cookies.
10. Integraciones reales.
11. Oferta y precio Growth.
12. Objeciones frecuentes.
13. CTA final.

## Reglas de migración

El proyecto real es la fuente de verdad para arquitectura, navegación, rutas, idiomas, formularios, analítica, SEO, schema, consentimientos, enlaces y despliegue. El código incluido aquí es una referencia visual y de contenido, no una autorización para sustituir ciegamente el proyecto existente.

Durante la transición:

1. Inspeccionar primero el repositorio real y sus instrucciones locales.
2. Identificar el framework, componentes compartidos, sistema de estilos y proceso de despliegue.
3. Portar la homepage por bloques, usando componentes existentes cuando sea posible.
4. Preservar todas las rutas actuales, especialmente `/es/`, `/pricing/`, `/demo/`, casos de estudio, integraciones, seguridad y recursos.
5. Mantener canonical, hreflang, metadata, JSON-LD, manifest, favicon, `llms.txt` y feeds existentes.
6. Mantener las URL y comportamientos de Book a demo, trial, login, documentación y LENS.
7. Conservar el tracking de SealMetrics y cualquier integración de producción.
8. No publicar ni sustituir la web de producción hasta validar la transición y contar con aprobación expresa del propietario.

## Contenido real incorporado

Los logos de clientes e integraciones se obtuvieron de sealmetrics.com y se incluyen localmente para que el resultado sea evaluable. Los bloques de ROAS, Promo Day y LENS adaptan datos y mensajes ya presentes en la homepage existente.

## Validación mínima antes de producción

- Comparación visual desktop y móvil con la referencia privada.
- Navegación y CTA sin enlaces rotos.
- Header y footer completos en todas las rutas.
- EN/ES y hreflang intactos.
- Metadata, Open Graph, JSON-LD y canonical verificados.
- Rendimiento e imágenes optimizados.
- Accesibilidad de foco, contraste, headings y accordions.
- Formularios de demo/registro probados.
- Tracking y conversiones probados.
- Sin regresiones en páginas fuera de la homepage.

## Nota sobre fidelidad

La prioridad no es copiar píxeles a cualquier coste. Es conservar la narrativa, la jerarquía, el wordmark lleno/vacío, el ritmo editorial y la relación entre promesa, producto y prueba dentro de la arquitectura real.
