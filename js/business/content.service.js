/**
 * ============================================================
 * CAPA DE LÓGICA DE NEGOCIO (Business Layer)
 * ============================================================
 * Responsabilidad única: construir el HTML de contenido (specs
 * técnicas e info de ayuda/empresa) que se mostrará en el modal.
 * No toca el DOM: solo devuelve título + HTML listos para pintar.
 */
const ContentService = (() => {
  function getSpecsContent(productId) {
    const data = ContentRepository.getSpecsByProductId(productId);
    if (!data) return null;

    const rows = data.items
      .map(([label, value]) => `<div class="spec-row"><span>${label}</span><span>${value}</span></div>`)
      .join('');

    return { title: data.title, html: `<div class="spec-list">${rows}</div>` };
  }

  function getInfoContent(key) {
    const data = ContentRepository.getInfoByKey(key);
    if (!data) return null;
    return { title: data.title, html: `<p>${data.body}</p>` };
  }

  return { getSpecsContent, getInfoContent };
})();
