## Context

- Next.js 16 con App Router, desplegado en Vercel. `proxy.ts` excluye `/api` de la redirección de idioma, así que `/api/mcp` no necesita cambios allí.
- Los datos están en `app/i18n/locales/{es,en}.json` y se cargan con `getDictionary`. La clave `cv` es la más completa y estructurada (perfil, habilidades, experiencia, proyectos, formación, idiomas). `ai` contiene la forma de trabajar con IA. Los enlaces públicos están en `app/utils/constants.ts`.
- El proyecto no tiene tests automatizados. Las validaciones son `pnpm lint`, `pnpm typecheck` y `pnpm build`.

## Goals / Non-Goals

**Goals:**

- Un servidor sin estado y de solo lectura, desplegable como una ruta más, sin infraestructura adicional.
- Que las respuestas sean útiles para un LLM: datos limpios y un resumen en texto.

**Non-Goals:**

- Autenticación, OAuth o claves de API.
- Herramientas con efectos (contacto, formularios).
- Resources o prompts MCP. Se puede valorar más adelante si algún cliente los aprovecha.
- Tests automatizados: el proyecto no los tiene y montar la infraestructura queda fuera de este cambio.

## Decisions

### `mcp-handler` + `@modelcontextprotocol/server` (SDK v2) + `zod`

`mcp-handler` 2.x convierte el servidor del SDK oficial en un handler `(Request) => Response` que se monta directamente en un Route Handler. Sirve la especificación 2026-07-28 de forma nativa y responde a los clientes de la generación 2025 con Streamable HTTP sin estado, desde el mismo handler. Al no tener estado, no necesita Redis ni sesiones. `zod` ^4 es una peer dependency del SDK y lo usaremos para validar `lang`.

Alternativas descartadas:

- **JSON-RPC escrito a mano**: sin dependencias, pero implica reimplementar la negociación de versiones, el formato de errores y la compatibilidad con varias generaciones del protocolo, que además está en plena evolución.
- **`@modelcontextprotocol/sdk` 1.x**: es la línea anterior del SDK; empezar con ella sería empezar con deuda.

### Herramientas en lugar de resources

Los clientes más extendidos (Claude, Cursor) invocan herramientas de forma automática, mientras que los resources suelen requerir que el usuario los adjunte a mano. Cinco herramientas temáticas con buenas descripciones permiten al modelo pedir solo lo que necesita, sin cargar todo el perfil en el contexto. Todas llevan la anotación `readOnlyHint: true`.

### Capa de mapeo desde los diccionarios

Un módulo `app/api/mcp/portfolio-data.ts` recibe un diccionario y devuelve objetos limpios por herramienta. Toma sobre todo la clave `cv`, que ya contiene la información sin textos de interfaz, y `ai` para la forma de trabajar. Las herramientas se definen sobre ese módulo, no sobre el JSON en bruto. Así, si los diccionarios se reorganizan, solo hay que tocar el mapeo y el contrato del MCP no cambia. Las claves del JSON no forman parte del contrato; la forma de salida del mapeo, sí.

Se usa `getDictionary` (marcado como `server-only`), igual que en la web.

### Respuesta doble: `structuredContent` y texto

Cada herramienta devuelve `structuredContent` con los datos tipados y un bloque `text` con un resumen en Markdown. No todos los clientes leen el contenido estructurado y el texto garantiza que el modelo siempre reciba la información.

### Límite de uso con el WAF de Vercel

Una regla de rate limiting sobre la ruta `/api/mcp`, con clave por IP y respuesta 429. Se aplica antes de que se invoque la función, así que tampoco consume tiempo de cómputo. Valor inicial propuesto: 60 peticiones por minuto por IP. Una conversación normal hace unas pocas llamadas, así que deja holgura para el uso legítimo y corta los bucles. La regla se crea con `vercel firewall` o desde el panel y queda documentada en el README.

Alternativas descartadas: un contador en memoria (es distinto en cada instancia y se pierde en cada arranque en frío) y Upstash Redis (añade un servicio y variables de entorno para un endpoint de solo lectura con datos públicos).

### Sin caché de respuestas

El contenido solo cambia al desplegar. Las respuestas se generan en cada petición (MCP usa POST, que el CDN no cachea), pero como el trabajo se reduce a leer un JSON ya importado el coste es mínimo.

## Risks / Trade-offs

- [Contrato público ligado al contenido] Renombrar o quitar campos del CV podría romper a quien use el MCP → la capa de mapeo aísla el contrato; si cambia la forma de salida, se anota en el README.
- [El plan de Vercel podría limitar las reglas de rate limiting] → antes de configurarla, comprobar cuántas reglas permite el plan actual. Si no hubiera ninguna disponible, decidir entonces entre el contador en memoria o Upstash (sería un checkpoint con el desarrollador).
- [En local no hay límite de uso] El WAF solo actúa en Vercel → se acepta; el endpoint solo expone datos públicos.
- [`mcp-handler` es un producto de Vercel Labs y el SDK v2 es reciente] → versiones fijadas en el lockfile; el handler queda aislado en un solo archivo y se podría sustituir sin tocar el mapeo.
- [Abuso como scraping] Los datos ya son públicos en la web, así que el riesgo se limita al coste de las invocaciones, que el WAF acota.

## Migration Plan

1. Desplegar la rama en un preview de Vercel y probar con el MCP Inspector y con Claude.
2. Crear la regla del WAF en el proyecto y comprobar el 429 contra el preview o contra producción.
3. Integrar en `master`. Rollback: revertir el merge, y la ruta desaparece. La regla del WAF se puede dejar o borrar sin efectos secundarios.

## Open Questions

- Si se escribe un post, su contenido y su fecha son independientes de esta implementación.
