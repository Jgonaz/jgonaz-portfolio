## Why

Cambiar de idioma recarga la página entera: se pierde la posición de scroll, se repiten las animaciones de entrada y el cambio se siente brusco. Cambiar el idioma en el propio navegador, con los textos transformándose letra a letra, hace el cambio instantáneo y lo convierte en un detalle memorable del portfolio.

## What Changes

- El selector de idioma de la home cambia el idioma sin recargar: carga el otro diccionario en el navegador, sustituye el del contexto de traducciones y actualiza la URL (`/es` ↔ `/en`), `<html lang>` y el título del documento. Se conserva la posición de scroll.
- Nuevo componente de texto animado: cuando cambia su texto, las letras se transforman al nuevo idioma con un efecto escalonado (cada letra con su propio retraso). El efecto concreto se elige en el prototipo de Claude Design.
- El efecto letra a letra se aplica a los textos cortos y destacados (menú, frases del hero, títulos de sección, botones y etiquetas). Los párrafos largos cambian con un fundido rápido para no saturar visualmente ni penalizar el rendimiento en móvil.
- Con `prefers-reduced-motion`, el texto cambia al instante sin animación.
- Accesibilidad: los lectores de pantalla leen siempre el texto final, nunca las letras intermedias.
- `/es` y `/en` siguen siendo páginas renderizadas en servidor e indexables: entrar directamente, recargar o compartir la URL funciona igual que hoy.
- El selector del CV (`/[lang]/cv`) y el resto de navegaciones no cambian.

## Capabilities

### New Capabilities

- `language-switch`: cambio de idioma en la home sin recarga, con sincronización de URL, idioma del documento y título, y transición animada de los textos respetando el movimiento reducido y la accesibilidad.

### Modified Capabilities

Ninguna.

## Impact

- Código: `TranslationContext` pasa a guardar el idioma y el diccionario en estado y a exponer una función para cambiarlo; `LanguageSelector` y `Header` la usan en lugar de navegar. Nuevo componente de texto animado, que se aplica en los componentes de la home que pintan textos del diccionario (Header, Footer y secciones).
- Rendimiento: el diccionario del otro idioma (~17 KB sin comprimir) se descarga bajo demanda, con precarga al acercarse al selector. No se añaden dependencias.
- SEO: sin cambios; las rutas por idioma, sus metadatos y su renderizado en servidor se mantienen.
- Analítica: el cambio de idioma deja de ser una carga de página; se revisa cómo lo registran Google Analytics y Vercel Analytics.
- Diseño: prototipo de efectos en Claude Design (https://claude.ai/artifact/4SvPTYYxwQwLU1sKGcdKiH), que será la referencia de la implementación y del QA una vez aprobado.
