---
id: BL-20261030-1156-servidor-mcp-portfolio
title: "Servidor MCP del portfolio"
type: feature
status: done
priority: baja
created: 2026-10-30
updated: 2026-11-01
refs:
  - "`app/i18n/locales/` (fuente de los datos)"
  - "`app/api/`"
---

# Servidor MCP del portfolio

## Resumen

Idea de exponer un servidor MCP público del portfolio con la experiencia, los proyectos, el stack y la forma de trabajar con IA, para que cualquiera lo conecte a Claude, Cursor u otro cliente y pregunte por el perfil. Servía sobre todo como demostración y no era prioritario. Se resolvió el 2026-10-31 con el cambio OpenSpec `add-portfolio-mcp-server` (rama `feat/portfolio-mcp`): el endpoint `/api/mcp`, sin estado y de solo lectura, ofrece cinco herramientas en `es` y `en`, construido con `mcp-handler` y el SDK oficial v2, con datos tomados de los diccionarios. El límite de uso es una regla del WAF de Vercel (60 peticiones por minuto por IP) y está documentado en el README. El post o artículo queda fuera del alcance.

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

## Resolución

Implementado el 2026-10-31 con el cambio OpenSpec `add-portfolio-mcp-server`, en la rama `feat/portfolio-mcp`. Endpoint `/api/mcp` sin estado y de solo lectura, con cinco herramientas (`get_profile`, `get_experience`, `get_projects`, `get_skills`, `get_ai_workflow`) en `es` y `en`, construido con `mcp-handler` y el SDK oficial v2. Los datos salen de las claves `cv` y `ai` de los diccionarios. El límite de uso es la regla «Rate limit MCP» del WAF de Vercel (60 peticiones/minuto por IP, respuesta 429), verificada contra un preview. Documentado en el README. El post o artículo queda fuera de este alcance.
