# Misiones de matemáticas · 5.º de primaria (México) · v1.04

Fichas imprimibles y gratuitas de matemáticas para 5.º de primaria en México: 15 temas, 90 fichas y 270 ejercicios, con solucionario en la mitad inferior de cada hoja.

**Usarlo en línea:** https://vic-akd.github.io/misiones-matematicas-5/

**Contestar en pantalla:** cada ejercicio tiene casillas y el botón «Comprobar». Si te equivocas aparece una pista; al segundo error puedes ver la respuesta. Nada se guarda.

**Usarlo sin internet:** descarga `index.html` y ábrelo en cualquier navegador. Elige una ficha, muestra las respuestas e imprime una ficha, un tema o todo, en tamaño carta. Para PDF, elige «Guardar como PDF» al imprimir.

Los temas se basan en los contenidos de matemáticas de 5.º de la SEP (Fase 5, Plan 2022). Compáralos con el libro de texto de tu grupo.

## Modificarlo

| Ruta | Qué contiene |
|---|---|
| `src/nucleo/config.js` | Nombre, grado, versión, autor, licencia, Donar y funciones por versión. |
| `src/nucleo/modelo-temas.js` | Ejercicios de los temas generales: `E(pregunta, figuras, respuesta, pista, opciones)`. |
| `src/nucleo/modelo-fracciones.js` | Los tres temas de fracciones. |
| `src/nucleo/modelo-respuestas.js` | Respuestas que se comprueban en pantalla (tipo de casilla por ejercicio). |
| `src/nucleo/logica-respuestas.js` | Cómo se leen y califican las respuestas. |
| `src/nucleo/figuras-base.js`, `figuras.js` | Aritmética y dibujos SVG. |
| `src/nucleo/vistas-base.js`, `vistas.js` | Armado de cada ficha. |
| `src/nucleo/eventos.js` | Navegación, respuestas, impresión, Donar y Acerca de. |
| `src/nucleo/plantilla-cabeza.html`, `cuerpo.html` | Estilos y estructura de la página. |
| `src/plataformas/html/adaptador.js` | Enlaces, impresión y descarga de la versión HTML. |
| `herramientas/construir.py` | Une todo en un solo HTML. |
| `pruebas/probar.js` | Pruebas automáticas. |

**Regenerar** (Python 3): `python3 herramientas/construir.py` → `index.html` y `web/misiones-matematicas-v1.04-html.html`.

**Probar** (Node y Playwright): `node pruebas/probar.js index.html`.

## Privacidad
Esta aplicación no recaba, guarda, envía ni comparte datos personales. Los botones de Donar abren Mercado Pago o PayPal en tu navegador.

## Autor y licencia
Víctor Arellano · contacto@victorarellano.com · [CC BY-NC-SA 4.0](LICENCIA.md): puedes usarlo, imprimirlo y adaptarlo dando crédito, sin venderlo y compartiendo tus cambios con la misma licencia.

**Cómo dar crédito** si lo usas o lo modificas:

> Basado en *Misiones de matemáticas* de Víctor Arellano, https://vic-akd.github.io/misiones-matematicas-5/, CC BY-NC-SA 4.0.

Si lo modificaste, agrega «Modificado por <tu nombre>».

Esta herramienta es gratuita. Si te sirve, puedes apoyar de forma voluntaria: [Donar con Mercado Pago](https://link.mercadopago.com.mx/victorcursos) · [Donar con PayPal](https://paypal.me/donar369)
