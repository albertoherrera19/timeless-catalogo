# Progreso del catálogo web — Timeless Store

**Última sesión:** 8 de octubre de 2026.
**Estado:** en línea (en pruebas, no anunciado) en `albertoherrera19.github.io/timeless-catalogo`. Con los productos del Canva, sin fotos todavía.

---

## 1. Qué hay hecho

- Inicio con presentación, botón "Ver catálogo" y botón "Escríbenos" (WhatsApp).
- Productos por categoría; dentro de cada una van primero los que hay, luego los "Próximamente" y al final los agotados.
- **Cinturones separados en Línea premium y Línea clásica**, con una frase que explica la premium.
- **Variantes de color**: Collar Gengar es un solo producto con selector Morado / Plateado, cada color con su propio agotado y su propia foto.
- **Videos**: en la columna Fotos se pueden poner enlaces a videos (.mp4); salen deslizando junto a las fotos.
- **Próximamente**: estado para lo que aún no llega (hoy el Black Spider). Tiene su propio "Avísame cuando llegue".
- **Etiquetas** Nuevo, Oferta, Próximamente y Agotado; "Envío gratis" por producto.
- **Más vendidos**: fila al inicio; aparece sola cuando marcas productos con BestSeller = SI.
- **Carrito con promociones automáticas** (hoja `promos.csv`): se aplican y se descuentan solas, y salen en el mensaje del pedido.
- **Envío en el carrito**: el cliente elige recojo, motorizado o Shalom (opcional) y ve un costo aproximado. Si el pedido tiene envío gratis, todo cuesta 0.
- "Avísame cuando vuelva" solo en agotados, por WhatsApp o Instagram.
- Envíos y pagos al final, botón de Instagram y TikTok, Libro de Reclamaciones provisional.
- Se puede instalar en el celular. Versión del caché: `timeless-catalogo-v6`.

## 2. Las hojas

**`productos.csv`** — columnas, en este orden:
`Producto` · `Categoría` · `Precio` · `PrecioOferta` · `OfertaHasta` · `Disponible` · `Fotos` · `Descripción` · `Tallas` · `Nota` · `Nuevo` · `EnvioGratis` · `Grupo` · `Variante` · `BestSeller` · `Linea`

- **Disponible:** `SI`, `NO` (agotado) o `PRONTO` (todavía no llega).
- **Nuevo, EnvioGratis, BestSeller:** `SI` o vacío.
- **Grupo y Variante:** para juntar productos en uno con colores. Dos filas con el mismo Grupo ("Collar Gengar") y distinta Variante ("Morado", "Plateado"). La primera foto de la primera fila es la de portada: ahí va la que muestra ambos colores.
- **Linea:** `Premium` o `Clásica` (solo se usa en cinturones).
- **Fotos:** enlaces separados por coma, fotos y videos mezclados.

**`promos.csv`** — una fila por promoción:
`Nombre` · `Tipo` · `Productos` · `Cantidad` · `Valor` · `Hasta` · `Activa` · `Texto`

- **combo:** lleva todos los productos listados (separados con `|`) por un precio total en `Valor`.
- **paquete:** `Cantidad` unidades del alcance por `Valor` total (ej. 3 por S/110).
- **descuento:** por cada `Cantidad` unidades del alcance, se descuenta `Valor` soles.
- **Productos:** nombres separados con `|`, el nombre de un grupo ("Collar Gengar" cuenta ambos colores) o `categoria:Collares`.
- **Activa:** `SI` / `NO`. **Hasta:** fecha y hora de fin, opcional.
- **Texto:** lo que se muestra en la ficha del producto.
- Una unidad entra en una sola promo (la primera de la lista), para que los descuentos nunca se sumen por error.
- Hoy: combo Dark Knight + Demon Cross a S/60, Ameri Duki 2 por S/75 y 3 por S/110, Gengar 2 por S/55 (se activan cuando haya stock) y "segundo collar −S/5" **apagado** como ejemplo.

## 3. Cómo verlo en la computadora

1. Clic derecho sobre `serve.ps1` (en la carpeta del proyecto) → **Ejecutar con PowerShell**; déjalo abierto.
2. En Chrome entra a `http://localhost:8793`.

## 4. Pendientes de Alberto

1. **Organización de GitHub** para que el enlace no lleve tu nombre (pasos en el chat). Después me pasas el nombre y yo reconecto.
2. **Decir cuáles son tus más vendidos** para armar la fila de Más vendidos.
3. **Fotos y videos** en las carpetas de `Escritorio\Alberto\Timeless\fotos de productos`.
4. **Revisar** el texto de la línea premium y los costos de envío mostrados (motorizado "desde S/10", Shalom "aprox. S/8"): están en `config.js`.
5. **Avisar** cuando cambies el usuario de Instagram/TikTok y cuando llegue el Black Spider.
6. **Libro de Reclamaciones oficial** (el prompt para armarlo lo preparo cuando lo pidas).
7. **Seguridad del dashboard** (chat del dashboard, antes de anunciar).

## 5. Lo que viene

- Hoja de Google propia del catálogo (archivo aparte) con la fórmula que marca agotado solo.
- Contador de visitas (GoatCounter) y medir cuántos tocan "Cerrar pedido" y "Avísame cuando vuelva". Antes de anunciar, no ahora.
- Banner / logo más profesional (cuando Alberto tenga el material actualizado).
- Revisión de seguridad completa y quitar el `noindex` antes de anunciar.
- Prompt para el Libro de Reclamaciones.

## 6. Decisiones y avisos importantes

- **Este repositorio es público.** No va nada interno del negocio (costos, márgenes, traspaso, enlaces del dashboard).
- **La hoja del catálogo irá en un archivo de Google Sheets aparte**, no en el del dashboard.
- **Instagram y TikTok** usan `timeless.store._` hasta que Alberto avise el cambio.
- **Oferta sin fecha = permanente; fecha mal escrita = sin oferta** (también en las promos).
- **El costo de envío del carrito es aproximado**; la página lo dice y el valor exacto se confirma por chat. Si el pedido lleva un producto con envío gratis, todo es gratis.
- **Un agotado no muestra "Nuevo" ni "Oferta"**; un "Próximamente" tampoco.
- Los productos de las páginas ocultas del Canva están como agotados; Bullcore y White Chrome Hearts no están.

**Recordatorio técnico:** en cada cambio hay que subir el número de `timeless-catalogo-vN` en `service-worker.js`.
