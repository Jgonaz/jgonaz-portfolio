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


## Servidor MCP

`https://www.jgonaz.dev/api/mcp` es un servidor [MCP](https://modelcontextprotocol.io) público y de solo lectura: cualquiera puede conectarlo a Claude, Cursor u otro cliente y preguntar por mi perfil. No necesita autenticación, no guarda estado y no tiene herramientas con efectos.

### Conectarlo

- **Claude Code**: `claude mcp add --transport http jgonaz https://www.jgonaz.dev/api/mcp`
- **Claude (web y escritorio)**: Ajustes → Conectores → Añadir conector personalizado, con esa URL.
- **Cursor y otros clientes con Streamable HTTP**:

  ```json
  { "mcpServers": { "jgonaz": { "url": "https://www.jgonaz.dev/api/mcp" } } }
  ```

- **Clientes que solo admiten stdio**: `npx -y mcp-remote https://www.jgonaz.dev/api/mcp`

### Herramientas

Todas aceptan `lang` (`es` por defecto, o `en`) y devuelven `structuredContent` y un resumen en Markdown.

| Herramienta | Contenido |
| --- | --- |
| `get_profile` | Titular, ubicación, resumen, idiomas, formación y enlaces públicos |
| `get_experience` | Puestos con empresa, rol, periodo, tecnologías y logros |
| `get_projects` | Proyectos propios con URL, descripción y tecnologías |
| `get_skills` | Habilidades agrupadas por área |
| `get_ai_workflow` | Flujo de un cambio, principios y casos reales de trabajo con IA |

### Cómo funciona

- `app/api/mcp/route.ts` monta el servidor con `mcp-handler` y el SDK oficial (`@modelcontextprotocol/server` v2). Sirve la especificación 2026-07-28 y, para los clientes de 2025, Streamable HTTP sin estado.
- `app/api/mcp/portfolio-data.ts` transforma los diccionarios (`cv` y `ai`) en las respuestas. Los datos salen de la misma fuente que la web, así que un cambio de contenido llega al MCP sin tocar el servidor. Las formas de salida de ese módulo son el contrato público: si cambian, documéntalo aquí.

### Límite de uso

En producción, una regla del firewall (WAF) del proyecto en Vercel limita `/api/mcp` a 60 peticiones por minuto por IP y responde `429` a las que la superan. La regla vive en Vercel, no en el repositorio. En local no hay límite.

### Probarlo en local

Con `pnpm dev` o `pnpm start`, conecta el [MCP Inspector](https://github.com/modelcontextprotocol/inspector) a `http://localhost:3000/api/mcp`.
