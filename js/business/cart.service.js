/**
 * ============================================================
 * CAPA DE LÓGICA DE NEGOCIO (Business Layer)
 * ============================================================
 * Responsabilidad única: reglas del carrito (agregar, quitar,
 * calcular cantidades y totales). Mantiene el ESTADO del carrito,
 * pero no toca el DOM en ningún momento: eso es trabajo de la
 * capa de presentación.
 */
const CartService = (() => {
  let items = [];

  function addItem(productId) {
    const product = ProductService.findProduct(productId);
    if (!product) return;

    const existing = items.find(i => i.id === productId);
    if (existing) {
      existing.qty++;
    } else {
      items.push({ ...product, qty: 1 });
    }
  }

  function removeItem(productId) {
    items = items.filter(i => i.id !== productId);
  }

  function getItems() {
    return [...items];
  }

  function getTotalQty() {
    return items.reduce((acc, i) => acc + i.qty, 0);
  }

  function getTotalPrice() {
    return items.reduce((acc, i) => acc + i.price * i.qty, 0);
  }

  function isEmpty() {
    return items.length === 0;
  }

  function clear() {
    items = [];
  }

  return { addItem, removeItem, getItems, getTotalQty, getTotalPrice, isEmpty, clear };
})();
