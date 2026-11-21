# AutoData — Actividades 3.1 y 3.2

## Contenido
- `tablas/tabla.html`: tabla semántica de comparación de coches.
- `galeria/galeria.html`: galería responsive con alt y JSON-LD.
- `drafts/`: borradores iniciales.
- `docs/`: decisiones técnicas, caso de prueba y ficha de licencias.
- `assets/images/`: coloca aquí las imágenes exportadas.
- `evidencias/`: guarda aquí capturas reales de las validaciones.

## Antes de entregar
1. Revisa los datos de coches. La tabla usa ejemplos orientativos, no datos oficiales verificados.
2. Añade nueve archivos de imagen: coche-1, coche-2 y coche-3 en versiones 480w, 768w y 1920w. Mantén los nombres exactos o actualiza las rutas HTML.
3. Para que el HTML local funcione, las imágenes deben estar en `assets/images/`. Como `galeria.html` está en la carpeta `galeria`, las rutas actuales suben un nivel (`../assets/images/`).
4. En `galeria/galeria.html`, sustituye las URL `https://example.com/...` del JSON-LD por URL absolutas reales cuando publiques el proyecto. No uses `example.com` en la entrega final.
5. Completa `docs/licencias_recursos.md` con los datos reales de cada recurso.
6. Valida `tabla.html` en https://validator.w3.org/ y el JSON-LD en https://validator.schema.org/.
7. Prueba los tamaños en DevTools. Los archivos 480w, 768w y 1920w deben tener realmente esas anchuras; el navegador puede elegir recursos según el ancho, la densidad y el tamaño mostrado.
8. Guarda las capturas reales en `evidencias/`.

## Importante sobre las pruebas
No se han incluido capturas ni se afirma que los validadores hayan dado cero errores, porque deben generarse al ejecutar las pruebas en tu ordenador.
