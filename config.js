// ==================== CONFIGURACIÓN DEL CATÁLOGO ====================
//
// Todo lo que cambia sin tocar el resto del código vive aquí.
// OJO: este archivo es PÚBLICO (cualquiera puede verlo desde el navegador).
// Aquí NO va ninguna URL del dashboard, ni la de Stocks, ni el Apps Script.

const CATALOGO_CONFIG = {

  // De dónde se leen los productos. Hoy: el archivo de prueba del repo.
  // Cuando exista la pestaña nueva "Catálogo" en el Sheets, se publica como CSV
  // (Archivo → Compartir → Publicar en la web → esa pestaña → .csv) y se pega
  // aquí el enlace. No hay que tocar nada más.
  //
  // 🚨 NUNCA pegar aquí el enlace de la pestaña "Stocks": tiene costos y márgenes.
  CSV_PRODUCTOS: 'productos.csv',

  // TODO(Alberto): falta el número de WhatsApp. Va con código de país y sin
  // espacios ni "+": por ejemplo '51987654321'. Mientras esté vacío, WhatsApp
  // se abre con el pedido escrito pero sin destinatario (el cliente tendría
  // que elegir el contacto), y la página muestra el aviso de "modo prueba".
  WHATSAPP_NUMERO: '',

  // TODO(Alberto): confirmar el usuario de Instagram. Hoy es 'timeless.store._'
  // pero está pensando cambiarlo. Este es el ÚNICO lugar donde se escribe:
  // sin "@" y sin la dirección completa.
  INSTAGRAM_USUARIO: 'timeless.store._',

  // Orden en que aparecen las categorías. Si en la hoja aparece una categoría
  // que no está en esta lista, igual se muestra, al final.
  CATEGORIAS: ['Cinturones', 'Collares', 'Pant chains', 'Anillos', 'Lentes'],

  // Frase con la que cierra cada categoría y cada ficha (la misma del Canva).
  FRASE_TALLA: '¿No sabes si te queda? Escríbenos por DM y te ayudamos a elegir tu talla',
};
