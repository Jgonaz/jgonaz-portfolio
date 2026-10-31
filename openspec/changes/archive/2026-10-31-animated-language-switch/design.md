## Context

La home es un conjunto de componentes cliente que leen los textos de `TranslationContext`. El layout raíz (`app/[lang]/layout.tsx`) carga el diccionario en servidor según el segmento `[lang]` y lo pasa al proveedor. Hoy el selector navega con `window.location.href`, lo que recarga la página. Diseño de referencia: https://claude.ai/artifact/4SvPTYYxwQwLU1sKGcdKiH (artboard «Efectos letra a letra», efecto «Mezcla», orden «A destiempo»).

## Goals / Non-Goals

**Goals:**

- Cambiar de idioma en la home sin recarga, sincronizando la URL, `<html lang>` y el título.
- Transición letra a letra en los textos cortos y fundido en los párrafos, fiel al prototipo.
- Cero dependencias nuevas, DOM ligero fuera de la transición y respeto de `prefers-reduced-motion`.

**Non-Goals:**

- Cambiar el selector del CV ni la navegación entre la home y el CV.
- Animar atributos (`alt`, `placeholder`, `aria-label`), que cambian sin transición.
- Cambiar la metadata de servidor u Open Graph, que siguen dependiendo de la ruta.

## Decisions

### Estado del idioma en el proveedor

`TranslationProvider` guarda `{ lang, dict }` en estado, inicializado con las props del servidor, y expone `setLanguage(lang)` y `preloadLanguage(lang)`. Si las props cambian (una navegación de Next que vuelve a renderizar el layout), el estado se sincroniza con ellas. Los diccionarios se cargan en cliente con `import()` dinámico de `app/i18n/locales/<lang>.json`, de modo que el bundler genera un chunk por idioma que solo se descarga al usarlo. La precarga se dispara al pasar el puntero o el foco por el selector.

Alternativa descartada: `router.push('/en')`. Volvería a renderizar el layout en servidor y sustituiría el diccionario de golpe, sin poder animar el texto anterior, y además requiere una petición RSC por cambio.

### URL con `history.replaceState`

Se usa `window.history.replaceState` con la nueva ruta, conservando la query y el fragmento. El App Router de Next integra las llamadas nativas a `pushState`/`replaceState` con `usePathname`, así que las navegaciones posteriores parten de la URL correcta. Se usa `replace` y no `push` para que «Atrás» no deshaga el cambio de idioma (decisión del usuario). `document.documentElement.lang` y `document.title` se actualizan desde el diccionario (`metadata.title`).

Si el `import()` falla, se navega con `window.location.assign` a la URL del idioma, como hasta ahora.

### Componente `AnimatedText`

`AnimatedText` recibe `text` y un modo (`letters` por defecto o `fade`):

- En reposo renderiza el texto tal cual, sin dividirlo. El SSR y la primera hidratación no cambian y el DOM se mantiene ligero.
- Cuando `text` cambia tras el montaje: la fase `out` anima las letras del texto anterior, luego se sustituye el texto, la fase `in` anima las letras del nuevo y vuelve a reposo. Los temporizadores se cancelan si el texto cambia a mitad de la transición, de modo que siempre termina en el último valor.
- Las letras se agrupan por palabra en `inline-block` con `white-space: nowrap`, para que las líneas solo se partan entre palabras.
- Durante la transición, el texto completo vigente va en un `span` visualmente oculto y las letras llevan `aria-hidden`.
- Variante y retraso por letra deterministas (hash del índice): variante entre subida, caída, volteo, desenfoque y giro, y retraso aleatorio de hasta ~220 ms. Duraciones: salida ~240 ms y entrada ~320–360 ms, como en el prototipo.
- El modo `fade` hace la misma secuencia sobre el bloque completo con opacidad.
- Con `prefers-reduced-motion` sustituye el texto sin fases.

Los estilos y keyframes van en `app/[lang]/_styles/animatedText.css`, siguiendo el patrón de CSS por componente.

Alternativa descartada: GSAP SplitText o Motion. El efecto es acotado y no justifica añadir una dependencia de 25–40 KB.

### Aplicación en la home

Se envuelven con `AnimatedText` los textos visibles del diccionario: menú, botones, títulos, etiquetas y frases cortas en modo `letters`, y párrafos o descripciones largas (más de ~80 caracteres) en modo `fade`. Las claves usadas solo en atributos o en `sr-only` se quedan como están. La frase rotativa del hero mantiene su `key` por índice: la rotación remonta el componente con su animación actual y el cambio de idioma la anima con `AnimatedText`.

### Selector

`LanguageSelector` lee `lang`, `setLanguage` y `preloadLanguage` del contexto y deja de recibir props de navegación. Ya no espera al subrayado antes de cambiar: el subrayado y las letras se animan a la vez. Los clics con modificadores o con botón central siguen el enlace nativo.

## Risks / Trade-offs

- [Analítica] El cambio deja de ser una carga de página. Google Analytics con medición mejorada y Vercel Analytics pueden registrar el `replaceState` como vista de página o ignorarlo → se comprueba en producción y se documenta el comportamiento. No es bloqueante.
- [Componentes con estado derivado del diccionario] Algún componente podría calcular datos con `useMemo` o `useState` a partir de `dict` sin recalcular al cambiar → se revisa cada sección en `es` y `en` durante la implementación.
- [Saltos de layout] Las longitudes de los textos difieren entre idiomas y el bloque cambia de tamaño al sustituirse → aceptable; la sustitución ocurre en el punto intermedio, cuando las letras salientes ya no se ven.
- [Rendimiento en móvil] Muchas letras animadas a la vez → solo se animan `transform`, `opacity` y `filter` en textos cortos, y los párrafos usan un fundido.
- [Desajuste mínimo al volver a reposo] Pasar de letras en `inline-block` a texto plano puede mover un píxel el kerning → aceptable.
