## Why

El portfolio se ha reorientado hacia el desarrollo con agentes, y la mejor forma de demostrarlo es que el propio perfil se pueda consultar desde un agente. Un servidor MCP público permite conectar el portfolio a Claude, Cursor u otro cliente y preguntar por la experiencia, los proyectos o la forma de trabajar con IA, y sirve de base para un post o artículo. Origen: backlog `BL-20261030-1156-servidor-mcp-portfolio`.

## What Changes

- Nuevo endpoint público `/api/mcp` que habla MCP sobre Streamable HTTP, sin autenticación y sin estado.
- Herramientas de solo lectura para consultar el perfil, la experiencia, los proyectos, las habilidades y la forma de trabajar con IA, en `es` y en `en`.
- Los datos se leen de los diccionarios existentes (`app/i18n/locales/`), los mismos que usa la web; no se duplica contenido. Se omiten los textos puramente de interfaz (etiquetas de botones, textos alternativos de imágenes…).
- Sin acciones con efectos: no se expone el formulario de contacto ni nada que escriba o envíe datos.
- Límite de peticiones por IP en `/api/mcp` mediante una regla del firewall (WAF) de Vercel.
- Nuevas dependencias: `mcp-handler`, `@modelcontextprotocol/server` y `zod`.
- Documentación en el README: URL del endpoint, cómo conectarlo desde los clientes habituales, herramientas disponibles y límites.

## Capabilities

### New Capabilities

- `portfolio-mcp`: servidor MCP público de solo lectura que expone la información profesional del portfolio a clientes MCP, en los idiomas soportados y con límites de uso.

### Modified Capabilities

Ninguna.

## Impact

- Código: nueva ruta `app/api/mcp/route.ts` y un módulo que transforma los diccionarios en datos para las herramientas. `proxy.ts` ya excluye `/api` y no cambia.
- API: nuevo contrato público (nombres de herramientas, parámetros y forma de las respuestas). Una vez publicado, cambiarlo puede romper a quien lo use.
- Dependencias: tres paquetes de runtime nuevos (ver `design.md`).
- Operación: una regla de rate limiting en el firewall del proyecto en Vercel, que se configura fuera del repositorio.
- Contenido: cualquier cambio en los diccionarios se refleja automáticamente en el MCP. Las claves que use el MCP pasan a formar parte de su contrato.
