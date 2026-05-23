# AGENTS.md

Esta guía define la forma estándar de trabajo para agentes en este repositorio.

## Resumen del proyecto
- Proyecto: Portafolio personal.
- Framework: Next.js (App Router).
- Lenguaje: TypeScript.
- Estilos: Tailwind CSS + archivos CSS por sección/componente.
- i18n: Rutas por idioma en `app/[lang]` con diccionarios en `app/i18n/locales`.
- API de contacto: `app/api/send/route.ts` con SMTP mediante Nodemailer.

## Estructura del repositorio
- `app/[lang]/`: Ruta principal localizada.
- `app/[lang]/_components/`: Componentes compartidos y secciones.
- `app/[lang]/_styles/`: Estilos CSS por bloques visuales.
- `app/i18n/`: Carga de diccionarios y archivos de traducción.
- `app/api/send/route.ts`: Endpoint para envío de correo.
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
