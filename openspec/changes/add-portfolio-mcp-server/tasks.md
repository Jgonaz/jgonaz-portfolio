## 1. Preparación

- [x] 1.1 Añadir `mcp-handler@^2`, `@modelcontextprotocol/server@^2` y `zod@^4` con pnpm y comprobar que no hay conflictos de peer dependencies
- [x] 1.2 Comprobar en el código instalado de `mcp-handler` la firma de `createMcpHandler`, `registerTool` y las anotaciones de herramientas

## 2. Datos

- [x] 2.1 Crear `app/api/mcp/portfolio-data.ts` con funciones de mapeo tipadas por herramienta (perfil, experiencia, proyectos, habilidades, forma de trabajar con IA) a partir del diccionario y de `app/utils/constants.ts`
- [x] 2.2 Verificar que el mapeo no incluye textos de interfaz (etiquetas, alt, metadatos) en `es` ni en `en`

## 3. Servidor MCP

- [x] 3.1 Crear `app/api/mcp/route.ts` con `createMcpHandler`, `serverInfo` y las cinco herramientas con descripciones, parámetro `lang` validado y `readOnlyHint`
- [x] 3.2 Devolver `structuredContent` y un resumen en texto en cada herramienta
- [x] 3.3 Exportar los métodos HTTP necesarios y confirmar que `proxy.ts` no redirige `/api/mcp`

## 4. Validación

- [x] 4.1 `pnpm lint`, `pnpm typecheck` y `pnpm build` sin errores
- [x] 4.2 Probar en local con un cliente MCP (script con fetch contra `pnpm start`; protocolos 2025-06-18 y 2026-07-28): inicialización, listado de herramientas, cada herramienta en `es` y `en`, y un `lang` inválido
- [x] 4.3 Comprobar que `/es` y `/en` siguen renderizando bien

## 5. Documentación y operación

- [x] 5.1 Documentar en el README el endpoint, la conexión desde Claude, Cursor y `mcp-remote`, las herramientas y el límite de uso
- [x] 5.2 Actualizar `AGENTS.md` (estructura del repositorio: `app/api/mcp/`)
- [ ] 5.3 Comprobar cuántas reglas de rate limiting permite el plan de Vercel y, con visto bueno, crear la regla de 60 peticiones/minuto por IP en `/api/mcp`
- [ ] 5.4 Verificar el 429 en el entorno desplegado
- [ ] 5.5 Mover `BL-20261030-1156-servidor-mcp-portfolio` a `docs/backlog/done/`
