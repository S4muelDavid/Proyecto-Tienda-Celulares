/**
 * ============================================================
 * CAPA DE DATOS (Data Layer)
 * ============================================================
 * Contenido estático informativo: fichas de especificaciones y
 * textos de las páginas de ayuda/empresa que se muestran en el
 * modal. Igual que PRODUCTS_DATA, en una app real vendría de una
 * API/CMS; aquí se deja como objeto estático.
 */
const CONTENT_DATA = {
  specs: {
    1: {
      title: 'Ss S25 Ultra — Especificaciones',
      items: [
        ['Pantalla', '6.9" Dynamic AMOLED 2X, 120Hz'],
        ['Procesador', 'Chip Ss de última generación'],
        ['Cámara principal', '200MP + zoom óptico 5x'],
        ['Memoria', '256GB · 12GB RAM'],
        ['Batería', '5000mAh, carga rápida 45W'],
        ['Inteligencia artificial', 'Ss AI integrada'],
        ['Resistencia', 'IP68 agua y polvo'],
      ],
    },
  },
  info: {
    accessories: {
      title: 'Accesorios',
      body: 'Muy pronto vas a poder comprar fundas, cargadores, cristales templados y audífonos originales para tu Ss directamente aquí. Por ahora, escríbenos a soporte@celularesss.co y te ayudamos a conseguir el accesorio que necesitas.',
    },
    orderStatus: {
      title: 'Estado del pedido',
      body: 'Ingresa el número de orden que recibiste por correo al confirmar tu compra en la sección "Mis pedidos" de tu cuenta. Allí verás en tiempo real si tu equipo está en preparación, en camino o ya fue entregado.',
    },
    shipping: {
      title: 'Envíos',
      body: 'Hacemos envíos a todo el país. Las ciudades principales reciben su pedido en 24-48 horas hábiles; para el resto del país el tiempo estimado es de 3 a 5 días hábiles. El envío es gratis en compras de cualquier celular de nuestro catálogo.',
    },
    warranty: {
      title: 'Garantía',
      body: 'Todos los equipos cuentan con 12 meses de garantía oficial contra defectos de fábrica. Si tu Ss presenta una falla, puedes llevarlo a cualquier centro de servicio autorizado o coordinar la recolección con nosotros sin costo adicional.',
    },
    contact: {
      title: 'Contacto',
      body: 'Escríbenos a soporte@celularesss.co o al WhatsApp +57 300 000 0000, de lunes a sábado de 8:00 a.m. a 6:00 p.m. También puedes visitarnos en nuestras tiendas físicas en Medellín.',
    },
    about: {
      title: 'Sobre nosotros',
      body: 'Celulares Ss es una tienda independiente especializada en celulares de la línea Ss: Serie S, plegables, Serie A y Serie M. Llevamos equipos originales con garantía oficial y financiación a tu ciudad desde Medellín, Colombia.',
    },
    stores: {
      title: 'Tiendas físicas',
      body: 'Nuestra tienda principal está ubicada en Medellín, Colombia. Estamos trabajando en abrir nuevos puntos de venta en otras ciudades del país — síguenos en redes para enterarte primero cuando abramos cerca de ti.',
    },
    careers: {
      title: 'Trabaja con nosotros',
      body: 'Estamos creciendo y siempre buscamos gente apasionada por la tecnología y el buen servicio. Envíanos tu hoja de vida a empleo@celularesss.co contándonos en qué área te gustaría trabajar.',
    },
  },
};
