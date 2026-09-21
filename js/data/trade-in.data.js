/**
 * ============================================================
 * CAPA DE DATOS (Data Layer)
 * ============================================================
 * Tabla base para estimar el descuento por entregar un equipo
 * usado. Valores de referencia simulados para la calculadora del
 * banner de "plan canje".
 */
const TRADE_IN_DATA = {
  baseByCondition: {
    excelente: 800000,
    bueno: 500000,
    regular: 200000,
  },
  brandMultiplier: {
    ss: 1.1,
    otra: 0.85,
  },
};
