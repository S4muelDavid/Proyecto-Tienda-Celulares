/**
 * ============================================================
 * CAPA DE PRESENTACIÓN (Presentation / View Layer)
 * ============================================================
 * Responsabilidad única: manejar el estado visual de los chips
 * de categoría y avisar (callback) cuándo cambió el filtro.
 */
const CategoryFilterView = (() => {
  function bindEvents({ onFilterChange } = {}) {
    document.querySelectorAll('.cat-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        if (typeof onFilterChange === 'function') onFilterChange(chip.dataset.filter);
      });
    });
  }

  return { bindEvents };
})();
