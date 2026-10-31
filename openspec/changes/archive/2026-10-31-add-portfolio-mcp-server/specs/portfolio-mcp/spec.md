## Purpose

Permite que cualquier cliente MCP consulte, en solo lectura, la información profesional del portfolio (perfil, experiencia, proyectos, habilidades y forma de trabajar con IA) en los idiomas soportados por la web.

## ADDED Requirements

### Requirement: Endpoint MCP público

El sistema SHALL exponer un servidor MCP en la ruta `/api/mcp` mediante el transporte Streamable HTTP, accesible sin autenticación y sin estado de sesión entre peticiones.

#### Scenario: Un cliente se conecta e inicializa

- **WHEN** un cliente MCP compatible con Streamable HTTP se conecta a `/api/mcp` e inicia la sesión
- **THEN** el servidor responde con su nombre, su versión y la capacidad de herramientas
- **AND** el cliente puede listar las herramientas disponibles

#### Scenario: Petición que no es MCP

- **WHEN** se hace una petición a `/api/mcp` que no es un mensaje MCP válido
- **THEN** el servidor responde con un error del protocolo o un código HTTP 4xx, sin exponer trazas internas

### Requirement: Herramientas de consulta del portfolio

El servidor SHALL ofrecer estas herramientas, todas de solo lectura y marcadas como tales:

- `get_profile`: titular, ubicación, resumen profesional, idiomas, formación y enlaces públicos (web, email, LinkedIn y GitHub).
- `get_experience`: puestos con empresa, rol, periodo, ubicación, funciones, tecnologías y logros.
- `get_projects`: proyectos propios con nombre, URL, descripción y tecnologías.
- `get_skills`: habilidades agrupadas por área.
- `get_ai_workflow`: forma de trabajar con IA (flujo de un cambio, principios y casos reales).

Cada herramienta SHALL devolver los datos estructurados y además un texto legible con el mismo contenido.

#### Scenario: Consulta de la experiencia

- **WHEN** un cliente llama a `get_experience`
- **THEN** recibe la lista de puestos en el mismo orden en que aparecen en la web

#### Scenario: Las herramientas no tienen efectos

- **WHEN** un cliente lista las herramientas
- **THEN** todas aparecen marcadas como de solo lectura
- **AND** ninguna envía, crea ni modifica datos

### Requirement: Selección de idioma

Cada herramienta SHALL aceptar un parámetro opcional `lang` con los valores `es` o `en`. Si no se indica, SHALL usar el idioma por defecto de la web (`es`).

#### Scenario: Consulta en inglés

- **WHEN** un cliente llama a una herramienta con `lang: "en"`
- **THEN** recibe el contenido en inglés

#### Scenario: Sin idioma indicado

- **WHEN** un cliente llama a una herramienta sin `lang`
- **THEN** recibe el contenido en español

#### Scenario: Idioma no soportado

- **WHEN** un cliente llama a una herramienta con un `lang` distinto de `es` o `en`
- **THEN** el servidor rechaza la llamada con un error de validación de parámetros

### Requirement: Fuente única de datos

El contenido que devuelven las herramientas SHALL salir de los mismos diccionarios que usa la web, de modo que un cambio de contenido en la web se refleje en el MCP sin tocar el servidor. Los textos exclusivos de la interfaz (etiquetas de botones y navegación, textos alternativos de imágenes, metadatos SEO) MUST NOT incluirse en las respuestas.

#### Scenario: Cambio de contenido en la web

- **WHEN** se modifica un texto del perfil en los diccionarios y se despliega
- **THEN** la herramienta correspondiente devuelve el texto actualizado

### Requirement: Límite de uso

El endpoint SHALL limitar el número de peticiones por dirección IP en producción. Las peticiones que superen el límite MUST recibir una respuesta HTTP 429 sin llegar a ejecutar el servidor MCP.

#### Scenario: Uso dentro del límite

- **WHEN** un cliente hace un número de peticiones por debajo del límite
- **THEN** todas se atienden con normalidad

#### Scenario: Exceso de peticiones

- **WHEN** una misma IP supera el límite configurado dentro de la ventana de tiempo
- **THEN** las peticiones siguientes reciben HTTP 429 hasta que termina la ventana
