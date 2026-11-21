# Decisiones técnicas — Tabla de AutoData

## Objetivo
Comparar modelos de coches con una tabla que sea comprensible visualmente y mediante tecnologías de asistencia.

## Decisiones
- Uso `<caption>` para dar un título descriptivo a la tabla.
- Uso `<thead>`, `<tbody>` y `<tfoot>` para separar encabezados, datos y resumen cuando sea necesario.
- Uso `scope="col"` en cada encabezado de columna, porque describe los datos que hay debajo.
- Uso `scope="row"` en la celda de marca y modelo, porque identifica cada fila.
- Los datos de ejemplo están marcados como orientativos; antes de publicar una ficha real hay que comprobarlos en fuentes fiables.
- La tabla está dentro de un contenedor con desplazamiento horizontal para pantallas estrechas.
- El enfoque de teclado tiene un contorno visible.

## Alternativa no elegida
No añadí `id` y `headers` a cada celda porque la tabla tiene una estructura sencilla con un único nivel de encabezados. `scope` es suficiente para expresar estas relaciones.

## Validación pendiente
Abrir `tablas/tabla.html` en el navegador y comprobar el HTML en https://validator.w3.org/. Guardar una captura real del resultado en `evidencias/`.
