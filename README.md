# AutoData

**Autor:** Miquel Santos Bay  
**Asignatura:** LMSGI · 0373 · ASIX semipresencial  
**Curso:** 2026–2027

## 1. ¿Qué es AutoData?

AutoData es un proyecto educativo de sitio web dedicado a mostrar información sobre diferentes marcas y modelos de coches. La intención es reunir los datos principales de los vehículos en un mismo lugar y presentarlos de forma clara y organizada.

## 2. Objetivo

Crear una primera versión navegable con HTML semántico que permita visitar una página de inicio, consultar un catálogo y acceder a fichas individuales de vehículos.

## 3. Problema que intenta resolver

La información de un vehículo puede estar repartida entre distintas páginas. AutoData propone organizar los datos principales en fichas con campos comunes para facilitar su consulta y, más adelante, su comparación.

## 4. Información de cada vehículo

Las fichas contemplan marca, modelo, tipo de motor, potencia, consumo, combustible y precio. Los valores que dependen de la versión concreta deben verificarse con una fuente fiable antes de utilizarlos como datos definitivos.

## 5. Tecnologías y formatos

- **HTML:** estructura y contenido semántico de las páginas.
- **CSS:** presentación visual, colores, espaciado y adaptación a pantallas pequeñas.
- **XML, JSON y CSV:** formatos que se podrán utilizar para representar o intercambiar los datos de vehículos en futuras ampliaciones.
- **Markdown:** documentación del proyecto en este archivo.
- **TXT:** notas de texto plano, si son necesarias.

## 6. Estructura de carpetas

```text
AutoData/
├── index.html
├── coches.html
├── toyota-corolla.html
├── ford-focus.html
├── seat-leon.html
├── README.md
├── css/
│   └── estilos.css
├── imagenes/
├── dades/
└── evidencies/
```

- `index.html`: página de inicio.
- `coches.html`: catálogo de vehículos.
- `toyota-corolla.html`, `ford-focus.html` y `seat-leon.html`: fichas de ejemplo.
- `css/estilos.css`: estilos visuales.
- `imagenes/`: imágenes locales, si se añaden.
- `dades/`: datos estructurados en futuras versiones.
- `evidencies/`: capturas y resultados de pruebas.

## 7. Decisiones técnicas

1. **Separar el contenido por páginas:** facilita encontrar la información y mantener el sitio.
2. **Usar HTML semántico:** `header`, `nav`, `main`, `section`, `article` y `footer` ayudan a identificar las partes del documento.
3. **Reutilizar una hoja CSS:** todas las páginas comparten el mismo archivo de estilos, para mantener una apariencia coherente.
4. **Utilizar enlaces relativos:** las páginas se conectan con rutas como `coches.html`, por lo que el proyecto puede moverse como una carpeta.
5. **No inventar especificaciones técnicas:** los datos de motor, potencia, consumo y precio deben verificarse para una versión y año concretos.

## 8. Cómo abrir y probar el proyecto

1. Descarga o copia la carpeta completa.
2. Abre `index.html` en un navegador web.
3. Entra en el catálogo y abre las fichas de los coches.
4. Comprueba que los enlaces para volver al catálogo y al inicio funcionan.
5. Cambia el tamaño de la ventana para comprobar la adaptación a pantallas pequeñas.
6. Si se añaden imágenes reales, guárdalas en `imagenes/`, enlázalas con una ruta correcta y utiliza un atributo `alt` descriptivo.

## 9. Estado actual

Esta versión incluye la página de inicio, el catálogo, tres fichas de ejemplo, navegación entre páginas y estilos compartidos. La carpeta `evidencies/` queda preparada para guardar capturas reales de las pruebas realizadas.

## 10. Próximas mejoras

- Completar los datos técnicos con fuentes fiables.
- Añadir imágenes locales con texto alternativo.
- Crear ficheros XML, JSON o CSV con los mismos vehículos.
- Incorporar una comparación de características entre modelos.

## 11. Autor

Miquel Santos Bay
