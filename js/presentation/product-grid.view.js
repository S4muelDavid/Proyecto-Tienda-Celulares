/**
 * ============================================================
 * CAPA DE PRESENTACIÓN (Presentation / View Layer)
 * ============================================================
 * Responsabilidad única: pintar el DOM de la grilla de productos
 * y capturar los clics del usuario, delegando toda la lógica de
 * negocio a ProductService / CartService. Esta capa NO decide
 * precios, ni filtra datos por su cuenta: solo pide y muestra.
 */
const ProductGridView = (() => {
  const gridEl = document.getElementById('productGrid');

  function render(filter = 'all') {
    const list = ProductService.listByFilter(filter);
    renderList(list);
  }

  function renderSearch(term) {
    const list = ProductService.search(term);
    renderList(list, term);
  }

  function renderList(list, term) {
    if (!list.length) {
      const safeTerm = term ? String(term).replace(/[<>&"]/g, '') : '';
      gridEl.innerHTML = `
        <div class="grid-empty">
          <b>No encontramos resultados${safeTerm ? ` para "${safeTerm}"` : ''}</b>
          <span>Prueba con otro modelo, ej: A55, Z Fold, S25.</span>
        </div>`;
      return;
    }
    gridEl.innerHTML = list.map(cardTemplate).join('');
  }

  function cardTemplate(p) {
    const badgeHtml = p.badge
      ? `<span class="badge ${p.badge}">${ProductService.badgeLabel(p)}</span>`
      : '';
    const oldHtml = ProductService.hasDiscount(p)
      ? `<span class="old">${ProductService.formatPrice(p.old)}</span>`
      : '';
    const colorsHtml = p.colors
      .map(c => `<span class="dot-color" style="background:${c};"></span>`)
      .join('');

    return `
      <div class="card">
        ${badgeHtml}
        <button class="fav-btn" aria-label="Favorito">♡</button>
        <div class="card-media" style="background:${p.grad}22;">
          <div class="mockphone" style="background:${p.grad};border-color:#0d0d0f;">
            <div style="position:absolute;inset:6px;border-radius:14px;background:${p.grad};opacity:.85;"></div>
          </div>
        </div>
        <div class="card-cat">Celulares Ss</div>
        <h3>${p.name}</h3>
        <div class="spec">${p.spec}</div>
        <div class="colors">${colorsHtml}</div>
        <div class="price-row">
          <div class="price-block">
            ${oldHtml}
            <span class="now">${ProductService.formatPrice(p.price)}</span>
          </div>
          <button class="add-btn" data-id="${p.id}">+</button>
        </div>
      </div>
    `;
  }

  function bindEvents({ onAddToCart } = {}) {
    gridEl.addEventListener('click', e => {
      if (e.target.classList.contains('fav-btn')) {
        e.target.classList.toggle('active');
        e.target.textContent = e.target.classList.contains('active') ? '♥' : '♡';
      }

      if (e.target.classList.contains('add-btn')) {
        const id = parseInt(e.target.dataset.id, 10);
        if (typeof onAddToCart === 'function') onAddToCart(id);

        e.target.classList.add('added');
        e.target.textContent = '✓';
        setTimeout(() => {
          e.target.classList.remove('added');
          e.target.textContent = '+';
        }, 900);
      }
    });
  }

  return { render, renderSearch, bindEvents };
})();
