# Servidor MCP del portfolio

- ID: BL-20261030-1156-servidor-mcp-portfolio
- Tipo: feature
- Estado: pending
- Prioridad: baja
- Creado: 2026-10-30
- Referencias: `app/i18n/locales/` (fuente de los datos), `app/api/`

## Contexto

Idea surgida al reorientar el portfolio hacia el desarrollo con agentes: exponer un servidor MCP público (por ejemplo `/api/mcp`) con la experiencia, los proyectos, el stack y la forma de trabajar con IA, para que cualquiera pueda conectarlo a Claude, Cursor u otro cliente y preguntar por el perfil. Sirve sobre todo como demostración y para contarlo (post o artículo); no es prioritario frente a LinkedIn o el rediseño de «Sobre mí».

## Próximo paso

Decidir con el desarrollador antes de implementar:

- qué datos expone (solo lectura, desde los diccionarios para no duplicar contenido) y en qué idiomas;
- transporte y librería (comprobar el SDK oficial de MCP y su compatibilidad con Next.js; no añadir dependencias sin justificarlo);
- límites de uso y protección frente a abusos;
- si se acompaña de un post o artículo explicándolo.

## Criterios de cierre

- Un cliente MCP puede conectarse al endpoint público y consultar la información del portfolio en es y en en.
- Los datos salen de la misma fuente que la web.
- El endpoint tiene límites de uso y está documentado en el README.
