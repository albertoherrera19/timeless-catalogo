# Progreso del catálogo web — Timeless Store

**Última sesión:** 2 de octubre de 2026.
**Estado:** funciona en la computadora con los productos reales del Canva (sin fotos todavía). Listo para subirse a GitHub; falta que Alberto cree el repositorio vacío.

---

## 1. Qué hay hecho

- Catálogo con la paleta del dashboard; sigue el modo claro u oscuro del celular.
- Productos agrupados por categoría, ficha con fotos, medidas, tallas y nota.
- Agotados marcados y bloqueados para el carrito.
- Carrito que se conserva al cerrar la página.
- Cierre del pedido por WhatsApp (ya con el número del negocio) o por Instagram (copia el pedido y abre el perfil).
- Ofertas con precio tachado; si tienen fecha, cuenta regresiva y vuelta sola al precio normal.
- **Etiqueta "Nuevo"** y **"Envío gratis"** por producto. Si el pedido lleva al menos un producto con envío gratis, todo el pedido sale con envío gratis (en el carrito y en el mensaje).
- Libro de Reclamaciones a un clic, con página provisional.
- Se puede instalar en el celular; versión del caché: `timeless-catalogo-v4`.
- Mientras está en pruebas, la página le pide a Google que no la muestre en búsquedas.

## 2. De dónde salen los productos hoy

Del archivo `productos.csv`, que se llenó copiando las páginas **visibles** del Canva (2 de octubre): 30 productos. Los que tienen la X en el Canva, los de las páginas ocultas y el Black Spider (que aún no llega) salen como agotados.

La promo "Cinturón Dark Knight + Collar Demon Cross a S/60" no está: es un combo, no un producto. Tampoco Bullcore ni White Chrome Hearts (decisión de Alberto).

Columnas de la hoja, en este orden:
`Producto` · `Categoría` · `Precio` · `PrecioOferta` · `OfertaHasta` · `Disponible` · `Fotos` · `Descripción` · `Tallas` · `Nota` · `Nuevo` · `EnvioGratis`

- **Precio y PrecioOferta:** solo el número (`40`, `24,9`).
- **OfertaHasta:** `2026-10-31 23:59` (hora de Lima). Vacío = oferta sin fecha de fin.
- **Disponible, Nuevo, EnvioGratis:** `SI` o `NO` (vacío cuenta como disponible / no nuevo / sin envío gratis).
- **Fotos:** enlaces separados por coma; la primera sale en la grilla.

## 3. Cómo verlo en la computadora

1. Abre la carpeta `C:\Users\Windows 10\Downloads\timeless\timeless-catalogo\.claude\worktrees\gallant-borg-e36fc3`.
2. Clic derecho sobre `serve.ps1` → **Ejecutar con PowerShell** (deja la ventana abierta).
3. En Chrome entra a `http://localhost:8793`.

## 4. Pendientes de Alberto

1. **Crear el repositorio vacío en GitHub** llamado `timeless-catalogo` (público, sin README). Después Claude sube el código y activa la página.
2. **Fotos** de cada producto.
3. **Cambiar el usuario de Instagram** y avisar el mismo día, para cambiarlo en la página.
4. **Decidir** si los productos de las páginas ocultas del Canva se muestran.
5. **Hoja de Google para el catálogo**, en un archivo aparte del que usa el dashboard (ver punto 6).
6. **Libro de Reclamaciones oficial.**
7. Publicar al público: después de la quincena de octubre.

## 5. Lo que viene (pedido por Alberto, todavía no hecho)

- Costo de envío aproximado en el carrito (Shalom S/8 a casi todo el Perú), ajustable por chat.
- Promociones que se aplican solas en el carrito (por ejemplo, "segundo collar −S/5", o el combo cinturón + collar).
- Línea clásica y línea premium en cinturones, con la explicación de por qué son premium.
- Guía "¿Cómo saber tu talla?" del Canva dentro de la categoría Cinturones.
- Que el agotado se marque solo desde el stock.

## 6. Decisiones y avisos importantes

- **Este repositorio va a ser público.** Por eso el documento de traspaso se sacó del repositorio y de todo su historial: tenía margen, ticket promedio y costos de publicidad. El original sigue en `C:\Users\Windows 10\Downloads\timeless\traspaso-catalogo-web.md`.
- **La hoja del catálogo debe ir en un archivo de Google Sheets aparte**, no como pestaña del Sheets del dashboard. El enlace publicado de una pestaña deja ver el identificador de todo el archivo, y con él se pueden abrir las demás pestañas publicadas (Stocks, Ventas, Gastos). En un archivo aparte eso no puede pasar.
- **Instagram en dos toques:** se copia el pedido, se muestran los pasos y el botón "Abrir Instagram".
- **Oferta sin fecha = permanente; fecha mal escrita = sin oferta.**
- **Un agotado no muestra "Nuevo" ni "Oferta"**, solo "Agotado".
- El usuario de Instagram sigue siendo `timeless.store._` hasta que el cambio esté hecho en Instagram.

**Recordatorio técnico:** en cada cambio hay que subir el número de `timeless-catalogo-vN` en `service-worker.js`.
