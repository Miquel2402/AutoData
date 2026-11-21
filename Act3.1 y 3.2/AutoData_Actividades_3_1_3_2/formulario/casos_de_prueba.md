
# Casos de prueba - Formulario AutoData

## Objetivo

Comprobar que el formulario valida correctamente los datos introducidos por el usuario y muestra errores cuando los datos no cumplen los requisitos.

## Caso 1 - Email obligatorio

- **Datos introducidos:** Email vacío.
- **Resultado esperado:** El navegador impide enviar el formulario.
- **Resultado obtenido:** Correcto. El navegador solicita rellenar el email.
- **Estado:** Superado.

## Caso 2 - Email incorrecto

- **Datos introducidos:** usuario123.
- **Resultado esperado:** El navegador rechaza el formato.
- **Resultado obtenido:** Correcto. El navegador indica que el email no es válido.
- **Estado:** Superado.

## Caso 3 - Teléfono incorrecto

- **Datos introducidos:** 666777888.
- **Resultado esperado:** El navegador rechaza el teléfono.
- **Resultado obtenido:** Correcto. El teléfono no cumple el patrón establecido.
- **Estado:** Superado.

## Caso 4 - Fecha de nacimiento incorrecta

- **Datos introducidos:** Fecha posterior al 09/11/2008.
- **Resultado esperado:** El navegador impide seleccionar una fecha posterior al límite.
- **Resultado obtenido:** Correcto. La fecha máxima funciona.
- **Estado:** Superado.

## Caso 5 - Contraseña demasiado corta

- **Datos introducidos:** 123456.
- **Resultado esperado:** El navegador rechaza la contraseña.
- **Resultado obtenido:** Correcto. Se exige un mínimo de 8 caracteres.
- **Estado:** Superado.

## Caso 6 - Contraseña válida

- **Datos introducidos:** 12345678.
- **Resultado esperado:** La contraseña supera la validación de longitud.
- **Resultado obtenido:** Correcto. La longitud mínima se cumple.
- **Estado:** Superado.


## Caso 7 - Todos los campos correctos

- **Datos introducidos:**
  - Email: usuario@gmail.com
  - Teléfono: +34 666 777 888
  - Fecha de nacimiento: 09/11/2000
  - Contraseña: 12345678
- **Resultado esperado:** Todos los campos superan las validaciones del navegador.
- **Resultado obtenido:** Correcto. Todos los datos cumplen los requisitos.
- **Estado:** Superado.


---

## Tabla de requisitos y validaciones

| Requisito | Atributo HTML5 | Caso de prueba |
|---|---|---|
| Email obligatorio | `type="email"` y `required` | Caso 1 |
| Email con formato válido | `type="email"` | Caso 2 |
| Teléfono español | `type="tel"` y `pattern` | Caso 3 |
| Mayor de 18 años y fecha no futura | `type="date"` y `max` | Caso 4 |
| Contraseña de mínimo 8 caracteres | `type="password"` y `minlength="8"` | Casos 5 y 6 |
| Todos los campos correctos | Todos los atributos anteriores | Caso 7 |
