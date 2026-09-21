/**
 * ============================================================
 * CAPA DE LÓGICA DE NEGOCIO (Business Layer)
 * ============================================================
 * Responsabilidad única: reglas de negocio sobre el catálogo.
 * No sabe nada de HTML/CSS ni de dónde salen los datos: solo usa
 * ProductRepository (capa de acceso a datos) y aplica lógica.
 */
const ProductService = (() => {
  function listByFilter(filter = 'all') {
    if (filter === 'sale') {
      return ProductRepository.getAll().filter(p => p.badge === 'sale');
    }
    return ProductRepository.getByCategory(filter);
  }

  function findProduct(id) {
    return ProductRepository.getById(id);
  }

  function search(term) {
    const clean = (term || '').trim().toLowerCase();
    if (!clean) return ProductRepository.getAll();
    return ProductRepository.getAll().filter(p =>
      p.name.toLowerCase().includes(clean) || p.spec.toLowerCase().includes(clean)
    );
  }

  function formatPrice(amount) {
    return '$' + amount.toLocaleString('es-CO');
  }

  function hasDiscount(product) {
    return Boolean(product.old);
  }

  function badgeLabel(product) {
    if (product.badge === 'sale') return 'Oferta';
    if (product.badge === 'new') return 'Nuevo';
    return '';
  }

  return { listByFilter, findProduct, formatPrice, hasDiscount, badgeLabel };
})();
