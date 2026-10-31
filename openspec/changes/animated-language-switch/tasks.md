## 1. Estado del idioma

- [ ] 1.1 Crear un cargador de diccionarios en cliente (`import()` dinámico por idioma) tipado con `Locale`
- [ ] 1.2 Convertir `TranslationProvider` a estado `{ lang, dict }` sincronizado con las props y exponer `setLanguage` y `preloadLanguage`
- [ ] 1.3 En `setLanguage`: cargar el diccionario, actualizar el estado, `history.replaceState` conservando query y fragmento, `<html lang>` y `document.title`; recurrir a `location.assign` si falla la carga

## 2. Texto animado

- [ ] 2.1 Crear `AnimatedText` con los modos `letters` y `fade`, las fases out/in, la cancelación de transiciones solapadas, la accesibilidad y el movimiento reducido
- [ ] 2.2 Crear `app/[lang]/_styles/animatedText.css` con las variantes y duraciones del prototipo

## 3. Selector y cabecera

- [ ] 3.1 Adaptar `LanguageSelector` al contexto (sin esperar al subrayado, con precarga al pasar el puntero o el foco) y simplificar `Header`

## 4. Aplicación en la home

- [ ] 4.1 Envolver los textos de Header, Footer, BackToTop y las secciones Home, Work, SideProjects, AiWorkflow, Education, AboutMe y Contact con `AnimatedText`, en `letters` o `fade` según la longitud
- [ ] 4.2 Revisar que ningún componente deriva estado de `dict` sin recalcularlo al cambiar de idioma

## 5. Validación

- [ ] 5.1 `pnpm lint` y `pnpm build` sin errores
- [ ] 5.2 Probar en el navegador: cambio ES↔EN sin recarga, scroll conservado, URL con fragmento, «Atrás», recarga tras el cambio, enlace al CV, formulario con texto escrito, cambios rápidos, Ctrl+clic y movimiento reducido
- [ ] 5.3 Comprobar `/es` y `/en` por acceso directo y el render del CV

## 6. Documentación

- [ ] 6.1 Actualizar `AGENTS.md` y el README si describen el cambio de idioma o el contexto de traducciones
