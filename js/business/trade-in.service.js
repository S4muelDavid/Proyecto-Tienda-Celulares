/**
 * ============================================================
 * CAPA DE LÓGICA DE NEGOCIO (Business Layer)
 * ============================================================
 * Responsabilidad única: calcular el descuento estimado por
 * entregar un equipo usado, a partir de la marca y el estado
 * que indica el cliente. No conoce el DOM ni de dónde viene el
 * formulario: solo recibe strings y devuelve un número.
 */
const TradeInService = (() => {
  function calculate(brand, condition) {
    const base = TRADE_IN_DATA.baseByCondition[condition] || 0;
    const multiplier = TRADE_IN_DATA.brandMultiplier[brand] || 1;
    return Math.round((base * multiplier) / 1000) * 1000;
  }

  return { calculate };
})();
