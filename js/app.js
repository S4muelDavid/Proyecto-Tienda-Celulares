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
  ModalView.bindEvents();

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

  SearchView.bindEvents({
    onSearch: (term) => {
      ProductGridView.renderSearch(term);
      const count = ProductService.search(term).length;
      SearchView.setStatus(count, term.trim());
    }
  });

  SiteActionsView.bindEvents();

  CartDrawerView.bindEvents({
    onCheckout: () => {
      const total = ProductService.formatPrice(CartService.getTotalPrice());
      CartService.clear();
      CartDrawerView.render();
      CartDrawerView.close();
      ModalView.open('¡Compra confirmada!', `
        <div class="checkout-success">
          <div class="emoji">✅</div>
          <p>Gracias por tu compra en Celulares Ss. Procesamos tu pedido por un total de <b>${total}</b> y te enviaremos la confirmación y el número de guía a tu correo.</p>
        </div>
      `);
    }
  });

  // Estado inicial
  ProductGridView.render('all');
  CartDrawerView.render();
});
