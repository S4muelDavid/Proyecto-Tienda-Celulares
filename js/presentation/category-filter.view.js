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
        setActive(chip.dataset.filter);
        if (typeof onFilterChange === 'function') onFilterChange(chip.dataset.filter);
      });
    });
  }

  // Permite que otros enlaces del sitio (footer, nav, hero) marquen visualmente
  // el chip correspondiente cuando cambian el filtro por su cuenta.
  function setActive(filter) {
    document.querySelectorAll('.cat-chip').forEach(c => {
      c.classList.toggle('active', c.dataset.filter === filter);
    });
  }

  return { bindEvents, setActive };
})();
