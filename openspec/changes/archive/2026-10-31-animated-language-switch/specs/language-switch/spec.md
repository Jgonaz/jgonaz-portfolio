## Purpose

Permite cambiar el idioma de la home del portfolio sin recargar la página, con una transición animada de los textos que conserva el contexto del visitante, la accesibilidad y la indexación de cada idioma.

## ADDED Requirements

### Requirement: Cambio de idioma sin recarga

El selector de idioma de la home SHALL cambiar todos los textos de la página al idioma elegido sin recargarla y conservando la posición de scroll y el estado de la página, como el contenido escrito en el formulario de contacto.

#### Scenario: Cambio desde la home

- **WHEN** un visitante en `/es` pulsa `EN` en el selector
- **THEN** los textos de la home pasan a inglés sin recarga, la posición de scroll se mantiene y el selector marca `EN` como activo

#### Scenario: El formulario conserva lo escrito

- **WHEN** un visitante ha escrito en el formulario de contacto y cambia de idioma
- **THEN** los campos conservan su contenido y sus etiquetas aparecen en el nuevo idioma

#### Scenario: Error al cargar el idioma

- **WHEN** no se puede obtener el contenido del idioma elegido
- **THEN** la página navega de forma tradicional a la URL de ese idioma

### Requirement: URL, idioma del documento y título sincronizados

Tras un cambio de idioma sin recarga, la URL SHALL apuntar a la ruta del nuevo idioma, conservando el fragmento (`#seccion`) y la query, sin añadir una entrada al historial. El atributo `lang` del documento y el título de la pestaña SHALL corresponder al nuevo idioma.

#### Scenario: URL tras el cambio

- **WHEN** un visitante en `/es#work` cambia a inglés
- **THEN** la barra de direcciones muestra `/en#work` y el botón «Atrás» del navegador lleva a la página visitada antes de la home, no a `/es`

#### Scenario: Recargar o compartir tras el cambio

- **WHEN** un visitante recarga o comparte la URL tras cambiar a inglés
- **THEN** la página se sirve en inglés desde el servidor, igual que hoy

#### Scenario: Navegación posterior coherente

- **WHEN** tras cambiar a inglés el visitante abre el CV desde la cabecera
- **THEN** llega a `/en/cv`

### Requirement: Transición animada de los textos

Al cambiar de idioma, los textos cortos y destacados (menú, frases del hero, títulos de sección, botones y etiquetas) SHALL transformarse letra a letra: las letras del texto anterior salen y las del nuevo entran, cada una con su propio retraso y una animación elegida entre varias, siguiendo el prototipo aprobado de Claude Design («Mezcla», orden «A destiempo»). Los párrafos largos SHALL cambiar con un fundido. La transición completa SHALL durar alrededor de un segundo o menos. Entrar en la página no SHALL disparar esta transición.

#### Scenario: Textos cortos

- **WHEN** un visitante cambia de idioma
- **THEN** los textos del menú y los títulos de sección se transforman letra a letra a destiempo hasta mostrar el nuevo idioma

#### Scenario: Párrafos

- **WHEN** un visitante cambia de idioma
- **THEN** los párrafos largos se funden al texto del nuevo idioma sin animación por letras

#### Scenario: Cambios rápidos

- **WHEN** un visitante cambia de idioma de nuevo antes de que acabe la transición
- **THEN** la página termina mostrando el último idioma elegido, sin textos mezclados

### Requirement: Movimiento reducido

Con la preferencia del sistema de reducir el movimiento, el cambio de idioma SHALL mostrar los nuevos textos al instante, sin animaciones.

#### Scenario: Preferencia activada

- **WHEN** un visitante con `prefers-reduced-motion: reduce` cambia de idioma
- **THEN** los textos cambian al instante sin animación

### Requirement: Accesibilidad durante la transición

Las tecnologías de asistencia SHALL recibir siempre el texto completo del idioma vigente, nunca letras sueltas ni caracteres intermedios de la animación.

#### Scenario: Lector de pantalla

- **WHEN** un lector de pantalla recorre un texto mientras se anima
- **THEN** lee el texto completo en el nuevo idioma

### Requirement: Rutas por idioma intactas

Las rutas `/es` y `/en` SHALL seguir sirviéndose renderizadas en servidor con su contenido, metadatos e idioma, y el selector SHALL seguir siendo un enlace válido a la ruta de cada idioma, que se abre de forma nativa con clic central o con teclas modificadoras.

#### Scenario: Acceso directo

- **WHEN** un buscador o un visitante pide `/en`
- **THEN** recibe la página en inglés renderizada en servidor, igual que antes del cambio

#### Scenario: Abrir en otra pestaña

- **WHEN** un visitante pulsa `EN` con Ctrl o Cmd
- **THEN** se abre `/en` en una pestaña nueva y la página actual no cambia
