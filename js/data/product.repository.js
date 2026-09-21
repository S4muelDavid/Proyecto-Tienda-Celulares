/**
 * ============================================================
 * CAPA DE ACCESO A DATOS (Data Access Layer - Repositorio)
 * ============================================================
 * Responsabilidad única: exponer una API para OBTENER datos,
 * ocultando de dónde vienen (arreglo en memoria, localStorage,
 * una API REST, etc.). La capa de negocio SOLO habla con este
 * repositorio, nunca con PRODUCTS_DATA directamente.
 *
 * Si mañana los productos vienen de un backend, solo se cambia
 * este archivo (por ejemplo, usando fetch()) y ninguna otra capa
 * se entera del cambio.
 */
const ProductRepository = (() => {
  function getAll() {
    // Se devuelve una copia para que nadie mute la fuente original.
    return [...PRODUCTS_DATA];
  }

  function getById(id) {
    return PRODUCTS_DATA.find(p => p.id === id) || null;
  }

  function getByCategory(cat) {
    if (cat === 'all') return getAll();
    return PRODUCTS_DATA.filter(p => p.cat === cat);
  }

  return { getAll, getById, getByCategory };
})();
