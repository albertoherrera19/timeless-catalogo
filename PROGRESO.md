# Progreso del catálogo web — Timeless Store

**Última sesión:** 1 de octubre de 2026 (primera versión).
**Estado:** funciona en tu computadora con datos de prueba. **No está publicado en ningún lado** y no se creó nada en GitHub.

---

## 1. Qué quedó hecho

- **La página del catálogo**, con la misma paleta oscura del dashboard. Si el celular del cliente está en modo claro, se ve en claro.
- **Productos agrupados por categoría**, con atajos arriba (Cinturones, Collares, Anillos…). En celular se ven de a dos por fila; en computadora, de a tres o cuatro.
- **Ficha de producto** al tocar: fotos que se deslizan con el dedo, descripción y medidas, tallas, nota y precio. Cierra con *"¿No sabes si te queda? Escríbenos por DM y te ayudamos a elegir tu talla"* (la misma frase aparece al final de cada categoría).
- **Agotados**: salen con la etiqueta "Agotado", la foto apagada y el botón bloqueado. No hay forma de meterlos al carrito.
- **Carrito** que se queda guardado aunque el cliente cierre la página y vuelva.
- **Cierre del pedido**: pregunta "¿Coordinamos por WhatsApp o por Instagram?".
  - WhatsApp: abre el chat con el pedido ya escrito.
  - Instagram: copia el pedido, avisa "Tu pedido ya está copiado", explica los 3 pasos y tiene el botón para abrir tu perfil.
- **Ofertas con temporizador**: precio normal tachado, precio de oferta en rojo y cuenta regresiva. Cuando llega la hora, vuelve sola al precio normal (en la grilla, en la ficha y en el carrito), sin recargar.
- **Libro de Reclamaciones**: enlace al pie de la página (1 clic desde el inicio). Por ahora lleva a una página provisional con un aviso de que falta el formato oficial.
- **Se puede "instalar" en el celular** como el dashboard y abre aunque no haya señal (muestra lo último que cargó).
- **Aviso de "Página en modo prueba"** arriba de todo. Te recuerda qué falta configurar y desaparece solo cuando esté todo.

Así se ve el pedido que te llegaría por chat:

```
¡Hola Timeless! Quiero hacer este pedido:

• 1 × Collar Phantom Star — S/24.90 (oferta)
• 2 × Cinturón White Spider — S/75 c/u

Total: S/174.90 (sin envío)

Pedido armado desde el catálogo web.
```

### Los 5 productos de prueba

| Producto | Precio | Para probar qué |
|---|---|---|
| Cinturón Dark Knight | S/40 | Oferta **ya vencida** (S/35 hasta el 28 de setiembre): debe verse a S/40, sin rastro de oferta |
| Cinturón White Spider | S/75 | Ficha completa con medidas, tallas y nota; 3 fotos |
| Collar Demon Cross | S/25 | **Agotado** |
| Collar Phantom Star | S/30 | Oferta **activa** a S/24.90 hasta el domingo 4 de octubre a las 23:59. Pasada esa hora volverá sola a S/30 |
| Anillos Duki | S/25 | Nota "Precio por el par" |

Las fotos son cuadros grises que dicen "FOTO DE PRUEBA". Las descripciones de los collares y los anillos también son de relleno. Las medidas del Dark Knight las tomé del ejemplo del documento de traspaso: confírmalas.

### Qué probé y qué no

Probado en el navegador, en tamaño celular y computadora, en oscuro y en claro: la grilla, la ficha, el agotado bloqueado, sumar y quitar del carrito, que el carrito sobreviva al recargar, el texto del pedido, el enlace de WhatsApp, el copiado para Instagram, y el vencimiento de una oferta (adelanté el reloj de la oferta y el precio pasó solo de S/24.90 a S/30 y el total de S/174.90 a S/180).

**No probado:** en un celular de verdad (solo en la simulación de celular del navegador), ni el envío real por WhatsApp, porque falta tu número.

---

## 2. Cómo verlo

La página **no abre con doble clic** sobre `index.html`: el navegador bloquea la lectura de los productos y sale un mensaje que lo explica. Hay dos formas de verla:

**La fácil:** en un chat de Claude Code sobre esta carpeta, escribe *"muéstrame el catálogo"*.

**A mano:**
1. Abre la carpeta `C:\Users\Windows 10\Downloads\timeless\timeless-catalogo\.claude\worktrees\gallant-borg-e36fc3`.
2. Clic derecho sobre `serve.ps1` → **Ejecutar con PowerShell**. Queda una ventana negra abierta: déjala así.
3. En Chrome entra a `http://localhost:8793`.
4. Al terminar, cierra la ventana negra.

Qué mirar:
1. Toca **Collar Phantom Star**: precio tachado, precio en rojo y la cuenta regresiva corriendo.
2. Toca **Collar Demon Cross**: el botón dice "Agotado" y no hace nada.
3. Agrega dos o tres cosas, toca **Carrito** arriba a la derecha, luego **Cerrar pedido** y prueba los dos caminos.
4. Baja hasta el final y toca **Libro de Reclamaciones**.

Para verla como en celular desde la computadora: en Chrome, F12 y luego el ícono de celular arriba a la izquierda del panel.

**Dónde está el trabajo:** en esa carpeta, en la rama `claude/gallant-borg-e36fc3`, con sus commits locales. No lo junté con `main`. El archivo `serve.ps1` existe solo ahí y a propósito no se guarda en el repositorio.

---

## 3. Lo que tienes que hacer tú

1. **Crear la pestaña nueva en el Sheets** (ponle "Catálogo"), con exactamente estos títulos en la fila 1:
   `Producto` · `Categoría` · `Precio` · `PrecioOferta` · `OfertaHasta` · `Disponible` · `Fotos` · `Descripción` · `Tallas` · `Nota`
   El archivo `productos.csv` del repo es el modelo: ábrelo con Excel y verás cómo va cada columna.
2. **Cargar primero solo 3 o 4 productos reales**, no los 30. Así confirmamos el formato antes de que copies todo el Canva.
3. **Publicar esa pestaña como CSV**: Archivo → Compartir → Publicar en la web → en el primer desplegable elige **la pestaña Catálogo** (no "Todo el documento") → "Valores separados por comas (.csv)" → Publicar. Pásame el enlace.
   **Nunca publiques ni me pases el enlace de Stocks para esto:** tiene tus costos y márgenes, y esta página la ve cualquiera.
4. **Darme tu número de WhatsApp** (el del negocio).
5. **Decidir el usuario de Instagram.** Hoy está `timeless.store._`. Cambiarlo después es tocar una sola línea.
6. **Pasar el contenido del Canva** a la hoja, cuando el formato esté aprobado.
7. **Fotos:** decidir cuáles van por producto y pasármelas. La primera de la lista es la que sale en la grilla.
8. **Libro de Reclamaciones:** generar el formato oficial en https://consumidor.gob.pe/libro-de-reclamaciones/ y pasarme lo que te entregue.
9. **Elegir cuándo publicar** en GitHub Pages. Recomiendo no hacerlo antes de tener los puntos 3, 4 y 8.

### Cómo llenar la hoja

- **Precio y PrecioOferta:** solo el número (`40`, `24,9`). Sin "S/".
- **OfertaHasta:** `2026-10-31 23:59`. También entiende `31/10/2026 23:59`. Si pones solo la fecha, vale hasta el final de ese día. Siempre es hora de Lima.
- **Disponible:** `SI` o `NO`.
- **Fotos:** los enlaces separados por coma.
- **Categoría:** escríbela siempre igual (Cinturones, Collares, Pant chains, Anillos, Lentes). Una categoría nueva aparece sola al final.

### Qué NO hacer

- **No dejar PrecioOferta sin fecha por descuido**: se toma como oferta sin fecha de fin y se queda rebajado hasta que lo borres.
- **No escribir la fecha de otra forma** ("31 de octubre", "viernes"): si la página no la entiende, **no aplica la oferta** y cobra el precio normal.
- **No cambiar el nombre de un producto en plena campaña**: quien lo tenía en el carrito lo pierde.
- **No publicar con el aviso de "modo prueba" a la vista.**

---

## 4. Decisiones que tomé sin consultarte

1. **Instagram en dos toques, no en uno.** Pediste que copie el pedido, avise y abra el perfil. Lo dejé así: al tocar "Instagram" se copia y aparece el aviso con los 3 pasos y el botón "Abrir Instagram". Si abría el perfil en el mismo toque, el cliente llegaba a Instagram sin haber leído que tiene que pegar el mensaje, y en iPhone el copiado puede fallar al cambiar de app. Si prefieres un solo toque, se cambia.
2. **Sin número de WhatsApp**, el botón abre WhatsApp con el pedido escrito pero sin destinatario. Sirve solo para probar.
3. **Oferta sin fecha = oferta permanente; fecha mal escrita = sin oferta.** Ante la duda, cobra el precio normal.
4. **Celda Disponible vacía = disponible.** Solo se marca agotado con un `NO` explícito.
5. **Un agotado que ya estaba en el carrito** aparece tachado con "Se agotó", no suma al total y no entra al pedido.
6. **El carrito no guarda precios**, solo qué y cuántos. El precio siempre es el vigente.
7. **Máximo 20 unidades por producto**, para evitar pedidos por error.
8. **Categorías sin productos no se muestran** (hoy no verás Pant chains ni Lentes).
9. **"Tallas de pantalón"** como título solo en cinturones; en el resto dice "Tallas".
10. **Cada producto tiene su propio enlace**, para mandarlo por chat. El botón "atrás" del celular cierra la ficha en vez de sacar al cliente.
11. **Sin selector de color**: la página sigue el modo claro u oscuro del celular del cliente.
12. **Texto del pie** ("Pagas contraentrega, con Yape o transferencia. Envíos por Shalom y motorizado"): lo saqué del traspaso. Revísalo.
13. **Íconos**: una "T" sobre fondo negro, provisional.

---

## 5. Lo que recomiendo para la siguiente sesión

1. **Conectar la hoja real** con tus 3 o 4 productos y corregir lo que no calce, antes de que copies el resto.
2. **Resolver dónde viven las fotos.** Lo más simple y gratis es guardarlas dentro del mismo repositorio. Los enlaces de Google Drive suelen fallar como imagen en una página, así que no los recomiendo sin probarlos.
3. **Que el agotado se marque solo**: una fórmula en la pestaña Catálogo que mire el stock de la otra pestaña y escriba SI o NO. La página solo ve el resultado, nunca la hoja Stocks.
4. **Probar en tu celular de verdad** los dos caminos de cierre, con tu número ya puesto.
5. **Libro de Reclamaciones oficial.**
6. **Recién ahí, publicar** en GitHub Pages.

Para más adelante: videos en la ficha, buscador, y una sección "Ofertas" arriba para los Shopping Day.

**Recordatorio técnico para quien siga:** en cada cambio hay que subir el número de `timeless-catalogo-v1` en `service-worker.js`, o los celulares siguen viendo la versión vieja.
