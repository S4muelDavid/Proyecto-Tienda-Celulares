/**
 * ============================================================
 * CAPA DE PRESENTACIÓN (Presentation / View Layer)
 * ============================================================
 * Responsabilidad única: abrir/cerrar un modal genérico y pintar
 * el título + HTML que le pasen. No decide QUÉ mostrar (eso lo
 * arma ContentService/TradeInService); solo lo despliega y
 * captura eventos internos vía un callback opcional.
 */
const ModalView = (() => {
  const overlayEl = document.getElementById('modalOverlay');
  const titleEl = document.getElementById('modalTitle');
  const bodyEl = document.getElementById('modalBody');
  const closeBtn = document.getElementById('modalClose');

  function open(title, html, { onRender } = {}) {
    titleEl.textContent = title;
    bodyEl.innerHTML = html;
    overlayEl.classList.add('open');
    if (typeof onRender === 'function') onRender(bodyEl);
  }

  function close() {
    overlayEl.classList.remove('open');
  }

  function bindEvents() {
    closeBtn.addEventListener('click', close);
    overlayEl.addEventListener('click', e => {
      if (e.target === overlayEl) close();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') close();
    });
  }

  return { open, close, bindEvents };
})();
