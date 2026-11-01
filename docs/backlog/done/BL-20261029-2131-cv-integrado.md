---
id: BL-20261029-2131-cv-integrado
title: "CV integrado en el portfolio"
type: feature
status: done
priority: media
created: 2026-10-29
updated: 2026-11-01
refs:
  - "`app/utils/constants.ts` (`CV_URL_DOC`, `CV_URL_PDF`)"
  - "`app/[lang]/_components/Header.tsx`"
  - "`app/i18n/locales/`"
---

# CV integrado en el portfolio

## Resumen

El CV enlazado desde el Header del portfolio era un Google Doc solo en español y desincronizado con la web, y se decidió sustituirlo por un CV generado desde el propio portfolio una vez terminados los textos, el hero y el resto de secciones. Se resolvió el 2026-10-30: `/es/cv` y `/en/cv` salen de la clave `cv` de los diccionarios, sin Header ni Footer, con una barra con «Imprimir» (estilos `@media print`) y «Descargar PDF» (PDF de `public/cv/` generados con `pnpm cv:pdf`), y con una transición de cortina entre la home y el CV. El diseño se aprobó en Claude Design y los enlaces a Google Drive se eliminaron.

## Contexto

El CV vive en un Google Doc enlazado desde el Header, solo en español y desincronizado con la web (años de experiencia, erratas, sin proyectos ni el harness agéntico). Se decidió sustituirlo por un CV generado desde el propio portfolio, pero se pospone hasta terminar los textos, el hero y el resto de secciones, para que el CV salga del contenido ya definitivo.

## Próximo paso

Al retomarlo, decidir con el desarrollador:

- si se hace en un worktree (`feat/cv-page`);
- cómo se genera el PDF: estilos de impresión con botón (sin dependencias) o PDF generado en el build;
- cerrar antes el diseño de `/[lang]/cv` (web, impresión y móvil) en Claude Design;
- dónde viven los datos del CV: ampliar los diccionarios o un archivo de datos propio.

Contenido de partida: la reescritura del CV propuesta en la sesión del 2026-10-29 (perfil «Senior Front-End Engineer · Agentic Engineering & AI DevEx», harness de Mi Cuenta, proyectos Fitnessia, Balanz.io y jdev-ai), adaptada a los textos finales de la web. Sin el número exacto de subagentes y skills del harness de ECI ni la mención a i18n.

## Criterios de cierre

- `/es/cv` y `/en/cv` muestran el CV desde la misma fuente de datos que la web.
- Se puede obtener un PDF con texto seleccionable, en una columna y bien maquetado.
- El Header enlaza al CV del idioma activo y se retiran los enlaces a Google Drive.

## Resolución

Implementado el 2026-10-30. `/es/cv` y `/en/cv` salen de la clave `cv` de los diccionarios, sin Header ni Footer (route group `(home)`). La barra tiene «Imprimir» (`window.print()` con estilos `@media print`) y «Descargar PDF», que sirve los PDF de `public/cv/` generados con `pnpm cv:pdf`. Transición de cortina entre la home y el CV con View Transitions. Diseño aprobado en Claude Design: https://claude.ai/artifact/EYbTSKCvFTV2rtArkGJW5N. Los enlaces a Google Drive se han eliminado.
