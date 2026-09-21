/**
 * ============================================================
 * CAPA DE APLICACIÓN / ORQUESTACIÓN (Composition Root)
 * ============================================================
 * Este es el único archivo que "conoce" todas las capas y las
 * conecta entre sí (Presentación ⇄ Negocio ⇄ Acceso a Datos ⇄ Datos).
 * Ninguna capa inferior conoce a las superiores: la dependencia
 * siempre apunta hacia abajo.
 *
 *   Presentación  →  Negocio  →  Acceso a Datos  →  Datos
 */
document.addEventListener('DOMContentLoaded', () => {
  ProductGridView.bindEvents({
    onAddToCart: (productId) => {
      CartService.addItem(productId);
      CartDrawerView.render();
      CartDrawerView.open();
    }
  });

  CategoryFilterView.bindEvents({
    onFilterChange: (filter) => ProductGridView.render(filter)
  });

  CartDrawerView.bindEvents();

  // Estado inicial
  ProductGridView.render('all');
  CartDrawerView.render();
});
