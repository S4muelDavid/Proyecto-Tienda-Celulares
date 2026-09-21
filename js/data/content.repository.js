/**
 * ============================================================
 * CAPA DE ACCESO A DATOS (Data Access Layer - Repositorio)
 * ============================================================
 * Responsabilidad única: exponer una API para OBTENER el
 * contenido informativo (fichas de specs y textos de ayuda),
 * ocultando de dónde viene (aquí, un objeto en memoria).
 */
const ContentRepository = (() => {
  function getSpecsByProductId(id) {
    return CONTENT_DATA.specs[id] || null;
  }

  function getInfoByKey(key) {
    return CONTENT_DATA.info[key] || null;
  }

  return { getSpecsByProductId, getInfoByKey };
})();
