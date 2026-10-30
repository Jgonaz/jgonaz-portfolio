Repositorio de mi porfolio personal. Jorge González Azpillaga - ©️ 2026

Made with NextJS, Tailwind & TypeScript


## CV integrado

La ruta `/[lang]/cv` (`/es/cv` y `/en/cv`) muestra el currículum dentro de la web y sustituye al antiguo CV de Google Drive. Todo su contenido sale de la clave `cv` de `app/i18n/locales/{es,en}.json` (la forma está tipada en `app/[lang]/_interfaces/cvInterface.ts`), así que para actualizarlo basta con editar ambos diccionarios con la misma estructura.

La barra tiene dos acciones. «Imprimir» llama a `window.print()`: los estilos `@media print` de `app/[lang]/_styles/cv.css` ocultan la barra y maquetan el CV en A4 (márgenes de 15 mm × 16 mm, sin cortar puestos ni proyectos). «Descargar PDF» descarga `public/cv/jorge-gonzalez-azpillaga-cv-{es,en}.pdf`, generados con esos mismos estilos.

**Cada vez que cambie la clave `cv`, regenera los PDF** con el servidor arrancado (`pnpm dev` o `pnpm build && pnpm start`) y súbelos en el mismo commit:

```bash
pnpm cv:pdf                        # usa http://localhost:3000
pnpm cv:pdf http://localhost:3001  # otra URL base
```

El script (`scripts/generate-cv-pdf.mjs`) imprime `/es/cv` y `/en/cv` con Chrome headless; usa `CHROME_BIN` o, si no, `google-chrome`/`chromium` del `PATH`. Mejor contra `pnpm start`: en `pnpm dev` el indicador de desarrollo de Next podría colarse en el PDF.
