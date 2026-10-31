# AGENTS.md

Esta guía define la forma estándar de trabajo para agentes en este repositorio.

## Resumen del proyecto
- Proyecto: Portafolio personal.
- Framework: Next.js (App Router).
- Lenguaje: TypeScript.
- Estilos: Tailwind CSS v4 + archivos CSS por sección/componente.
- i18n: Rutas por idioma en `app/[lang]` con diccionarios en `app/i18n/locales`.
- API de contacto: `app/api/send/route.ts` con SMTP mediante Nodemailer.
- Servidor MCP público de solo lectura: `app/api/mcp/` (ver «Servidor MCP» en el README).

## Estructura del repositorio
- `app/[lang]/`: Ruta principal localizada. El layout raíz (`layout.tsx`) solo contiene lo común (html/body, fuente, proveedor de traducciones, analytics y metadatos).
- `app/[lang]/(home)/`: Route group de la home; su `layout.tsx` añade Header y Footer.
- `app/[lang]/cv/`: CV integrado (`/es/cv`, `/en/cv`), sin Header ni Footer. Datos en la clave `cv` de los diccionarios; «Imprimir» usa la impresión del navegador (`_styles/cv.css`, `@media print`) y «Descargar PDF» sirve los PDF de `public/cv/`, que hay que regenerar con `pnpm cv:pdf` siempre que cambie la clave `cv`.
- `app/[lang]/_components/`: Componentes compartidos y secciones.
- `app/[lang]/_styles/`: Estilos CSS por bloques visuales.
- `app/[lang]/globals.css`: Import de Tailwind, tokens de tema y variantes CSS-first.
- `app/i18n/`: Carga de diccionarios (`get-dictionary.ts` en servidor, `load-dictionary.ts` en cliente) y archivos de traducción.
- `app/api/send/route.ts`: Endpoint para envío de correo.
- `app/api/mcp/`: Servidor MCP (`route.ts`) y mapeo de los diccionarios a sus respuestas (`portfolio-data.ts`). Las formas de salida son contrato público.
- `public/images/`: Recursos estáticos.
- `proxy.ts`: Redirección y control de locale.

## Desarrollo local
- Instalar dependencias: `pnpm install`
- Levantar entorno de desarrollo: `pnpm dev`
- Ejecutar linter: `pnpm lint`
- Compilar: `pnpm build`
- Ejecutar build de producción: `pnpm start`

## Variables de entorno
- `SMTP_HOST`: Obligatoria para el envío de correos desde el formulario.
- `SMTP_PORT`: Opcional, usa `587` por defecto.
- `SMTP_SECURE`: Opcional, usar `true` para SMTP sobre TLS directo. También se activa automáticamente con puerto `465`.
- `SMTP_USER`: Obligatoria para autenticación SMTP.
- `SMTP_PASS`: Obligatoria para autenticación SMTP.
- `SMTP_FROM`: Opcional, remitente verificado para los correos salientes. Si no se define, se usa `SMTP_USER`.
- `CONTACT_TO`: Opcional, destinatario del formulario. Si no se define, se usa el email público del portfolio.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Opcional, usada en producción para Google Analytics.

## Convenciones de código
- Mantener TypeScript en modo estricto y tipado explícito cuando aporte claridad.
- Usar alias `@/*` (definido en `tsconfig.json`) para imports internos.
- Respetar la estructura i18n actual (`es`, `en`) al crear nuevas rutas o componentes.
- Evitar textos hardcodeados en UI: usar diccionarios de idioma cuando corresponda.
- Mantener el patrón de estilos actual (`_styles/*.css`) salvo refactor explícito.

## Reglas de i18n
- Los idiomas soportados están definidos en `i18n-config.ts`.
- Cualquier nueva clave traducible debe añadirse en:
  - `app/i18n/locales/es.json`
  - `app/i18n/locales/en.json`
- En la home, el selector cambia el idioma sin recargar: `TranslationContext` carga el otro diccionario en cliente, sustituye el texto y actualiza la URL con `history.replaceState`, `<html lang>` y el título. Los componentes de la home deben leer los textos del contexto (nunca guardarlos ya traducidos en estado) y pintarlos con `AnimatedText` (`letters` para textos cortos, `fade` para párrafos); los atributos (`alt`, `placeholder`, `aria-label`) y los `sr-only` van sin envolver. No uses claves de React derivadas del texto ni `key={lang}`: remontan el nodo y rompen la animación o el estado.
- Verificar que las rutas sigan funcionando con la lógica de `proxy.ts`.

## API y seguridad
- No exponer secretos en código fuente.
- Validar payloads en rutas API antes de utilizarlos.
- Mantener contratos de respuesta estables para no romper el frontend.

## Flujo de cambios para agentes
1. Revisar primero los archivos relevantes.
2. Aplicar cambios mínimos y enfocados.
3. Ejecutar validaciones (`lint`/`build`) cuando sea posible.
4. Documentar cambios de comportamiento en `README.md` o este archivo.

## Checklist de validación
- `pnpm lint` sin errores.
- `pnpm build` sin errores.
- Render correcto en `/es` y `/en`.
- Endpoint de contacto funcional con credenciales SMTP configuradas.

## Politica de commits
- En cada commit, la primera linea del mensaje debe seguir Conventional Commits (por ejemplo: `fix: ...`, `feat: ...`, `docs: ...`).
- El cuerpo del commit debe explicar claramente que se ha modificado y por que.
