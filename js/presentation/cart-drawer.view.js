/**
 * ============================================================
 * CAPA DE PRESENTACIÓN (Presentation / View Layer)
 * ============================================================
 * Responsabilidad única: mostrar el estado del carrito (que vive
 * en CartService) en el drawer, abrir/cerrar el panel y reaccionar
 * a clics de "eliminar". No calcula totales aquí: eso lo hace
 * CartService.
 */
const CartDrawerView = (() => {
  const overlayEl = document.getElementById('overlay');
  const drawerEl = document.getElementById('drawer');
  const cartCountEl = document.getElementById('cartCount');
  const drawerBodyEl = document.getElementById('drawerBody');
  const drawerFootEl = document.getElementById('drawerFoot');
  const drawerTotalEl = document.getElementById('drawerTotal');

  function render() {
    cartCountEl.textContent = CartService.getTotalQty();

    if (CartService.isEmpty()) {
      drawerBodyEl.innerHTML = `
        <div class="drawer-empty">
          <div class="emoji">🛍️</div>
          <div>Tu carrito está vacío</div>
          <div style="font-size:12.5px;">Agrega un Ss para empezar</div>
        </div>`;
      drawerFootEl.style.display = 'none';
      return;
    }

    drawerFootEl.style.display = 'block';
    drawerBodyEl.innerHTML = CartService.getItems().map(itemTemplate).join('');
    drawerTotalEl.textContent = ProductService.formatPrice(CartService.getTotalPrice());

    drawerBodyEl.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        CartService.removeItem(parseInt(btn.dataset.id, 10));
        render();
      });
    });
  }

  function itemTemplate(i) {
    return `
      <div class="cart-item">
        <div class="cart-item-media" style="background:${i.grad};border-radius:10px;"></div>
        <div class="cart-item-info">
          <h4>${i.name}</h4>
          <span>Cantidad: ${i.qty}</span>
          <div class="cart-item-price">${ProductService.formatPrice(i.price * i.qty)}</div>
          <div class="remove-item" data-id="${i.id}">Eliminar</div>
        </div>
      </div>`;
  }

  function open() {
    overlayEl.classList.add('open');
    drawerEl.classList.add('open');
  }

  function close() {
    overlayEl.classList.remove('open');
    drawerEl.classList.remove('open');
  }

  function bindEvents({ onCheckout } = {}) {
    document.getElementById('cartToggle').addEventListener('click', open);
    document.getElementById('closeDrawer').addEventListener('click', close);
    overlayEl.addEventListener('click', close);

    document.getElementById('checkoutBtn').addEventListener('click', () => {
      if (CartService.isEmpty()) return;
      if (typeof onCheckout === 'function') onCheckout();
    });
  }

  return { render, open, close, bindEvents };
})();
