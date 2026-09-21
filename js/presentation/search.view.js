/**
 * ============================================================
 * CAPA DE PRESENTACIÓN (Presentation / View Layer)
 * ============================================================
 * Responsabilidad única: mostrar/ocultar la barra de búsqueda y
 * avisar (callback) cada vez que el texto cambia. No decide qué
 * productos coinciden: eso lo hace ProductService.search desde
 * el orquestador.
 */
const SearchView = (() => {
  const toggleBtn = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClear');
  const statusEl = document.getElementById('searchStatus');

  function openBar() {
    searchBar.classList.add('open');
    input.focus();
  }

  function closeBar() {
    searchBar.classList.remove('open');
    input.value = '';
    statusEl.textContent = '';
  }

  function setStatus(count, term) {
    if (!term) { statusEl.textContent = ''; return; }
    statusEl.textContent = `${count} resultado${count === 1 ? '' : 's'} para "${term}"`;
  }

  function bindEvents({ onSearch } = {}) {
    toggleBtn.addEventListener('click', () => {
      if (searchBar.classList.contains('open')) {
        closeBar();
        if (typeof onSearch === 'function') onSearch('');
      } else {
        openBar();
      }
    });

    clearBtn.addEventListener('click', () => {
      closeBar();
      if (typeof onSearch === 'function') onSearch('');
    });

    input.addEventListener('input', () => {
      if (typeof onSearch === 'function') onSearch(input.value);
    });
  }

  return { openBar, closeBar, setStatus, bindEvents };
})();
