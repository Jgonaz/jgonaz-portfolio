# CV integrado en el portfolio

- ID: BL-20261029-2131-cv-integrado
- Tipo: feature
- Estado: pending
- Prioridad: media
- Creado: 2026-10-29
- Referencias: `app/utils/constants.ts` (`CV_URL_DOC`, `CV_URL_PDF`), `app/[lang]/_components/Header.tsx`, `app/i18n/locales/`

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
