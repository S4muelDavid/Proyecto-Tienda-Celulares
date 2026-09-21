/**
 * ============================================================
 * CAPA DE PRESENTACIÓN (Presentation / View Layer)
 * ============================================================
 * Responsabilidad única: dar funcionalidad real a los botones y
 * enlaces "sueltos" del sitio que no tienen una vista propia:
 * el botón de specs del hero, "ver catálogo completo", la
 * calculadora de plan canje del banner, y los enlaces de
 * categoría/información del nav y del footer.
 */
const SiteActionsView = (() => {
  const FEATURED_PRODUCT_ID = 1; // Ss S25 Ultra, protagonista del hero

  function bindEvents() {
    bindBuyNowButton();
    bindSpecsButton();
    bindSeeAllButton();
    bindTradeInButton();
    bindFilterLinks();
    bindInfoLinks();
  }

  function bindBuyNowButton() {
    const btn = document.getElementById('btnBuyNow');
    if (!btn) return;
    // El href="#serie-s" ya hace el scroll; solo dejamos resaltada
    // la Serie S en el catálogo, que es donde vive el equipo del hero.
    btn.addEventListener('click', () => {
      CategoryFilterView.setActive('s');
      ProductGridView.render('s');
    });
  }

  function bindSpecsButton() {
    const btn = document.getElementById('btnSpecs');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const content = ContentService.getSpecsContent(FEATURED_PRODUCT_ID);
      if (content) ModalView.open(content.title, content.html);
    });
  }

  function bindSeeAllButton() {
    const btn = document.getElementById('btnSeeAll');
    if (!btn) return;
    btn.addEventListener('click', () => {
      CategoryFilterView.setActive('all');
      ProductGridView.render('all');
    });
  }

  function bindTradeInButton() {
    const btn = document.getElementById('btnTradeIn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const formHtml = `
        <p>Cuéntanos de tu equipo actual y te damos un estimado inmediato de descuento.</p>
        <div class="modal-form">
          <label for="tradeBrand">Marca de tu equipo actual</label>
          <select id="tradeBrand">
            <option value="ss">Ss</option>
            <option value="otra">Otra marca</option>
          </select>
          <label for="tradeCondition">Estado del equipo</label>
          <select id="tradeCondition">
            <option value="excelente">Excelente</option>
            <option value="bueno">Bueno</option>
            <option value="regular">Regular</option>
          </select>
          <button class="modal-btn" id="tradeCalcBtn">Calcular descuento</button>
        </div>
        <div id="tradeResult"></div>
      `;
      ModalView.open('Calcula tu descuento por plan canje', formHtml, {
        onRender: (bodyEl) => {
          bodyEl.querySelector('#tradeCalcBtn').addEventListener('click', () => {
            const brand = bodyEl.querySelector('#tradeBrand').value;
            const condition = bodyEl.querySelector('#tradeCondition').value;
            const amount = TradeInService.calculate(brand, condition);
            bodyEl.querySelector('#tradeResult').innerHTML = `
              <div class="discount-result">
                <div class="amount">${ProductService.formatPrice(amount)}</div>
                <div class="note">Descuento estimado sobre tu próximo Ss. Sujeto a evaluación final del equipo.</div>
              </div>`;
          });
        },
      });
    });
  }

  function bindFilterLinks() {
    document.querySelectorAll('[data-nav-filter]').forEach(link => {
      link.addEventListener('click', () => {
        const filter = link.dataset.navFilter;
        CategoryFilterView.setActive(filter);
        ProductGridView.render(filter);
      });
    });
  }

  function bindInfoLinks() {
    document.querySelectorAll('[data-nav-info]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const content = ContentService.getInfoContent(link.dataset.navInfo);
        if (content) ModalView.open(content.title, content.html);
      });
    });
  }

  return { bindEvents };
})();
