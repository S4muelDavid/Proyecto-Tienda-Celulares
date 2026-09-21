/**
 * ============================================================
 * CAPA DE DATOS (Data Layer)
 * ============================================================
 * Responsabilidad única: contener el origen crudo de los datos.
 * No conoce el DOM, no conoce reglas de negocio, no conoce la UI.
 * En una app real, esto sería un JSON venido de una API/DB;
 * aquí se deja como arreglo estático para simular esa fuente.
 */
const PRODUCTS_DATA = [
  { id: 1,  cat: 's',    name: 'Ss S25 Ultra', spec: '256GB · 12GB RAM · Titanio',            price: 5499000, old: 5999000, badge: 'sale', grad: 'linear-gradient(160deg,#3a3f4d,#111318)', colors: ['#1b1c20', '#5c6470', '#8a7350'] },
  { id: 2,  cat: 's',    name: 'Ss S25+',      spec: '256GB · 12GB RAM · 6.7"',               price: 4299000, old: null,    badge: 'new',  grad: 'linear-gradient(160deg,#e8e9ee,#b9bdca)', colors: ['#e8e9ee', '#1b1c20', '#7d95c9'] },
  { id: 3,  cat: 's',    name: 'Ss S25',       spec: '128GB · 8GB RAM · 6.2"',                price: 3599000, old: null,    badge: '',     grad: 'linear-gradient(160deg,#8fa6ff,#3b5bff)', colors: ['#3b5bff', '#1b1c20', '#e8e9ee'] },
  { id: 4,  cat: 'fold', name: 'Ss Z Fold6',   spec: '512GB · Pantalla plegable 7.6"',        price: 8999000, old: 9999000, badge: 'sale', grad: 'linear-gradient(160deg,#4a4d55,#1a1b1f)', colors: ['#1a1b1f', '#c9cdda'] },
  { id: 5,  cat: 'fold', name: 'Ss Z Flip6',   spec: '256GB · Plegable compacto',             price: 5799000, old: null,    badge: 'new',  grad: 'linear-gradient(160deg,#f6c9d6,#e59cb5)', colors: ['#e59cb5', '#1a1b1f', '#c9cdda'] },
  { id: 6,  cat: 'a',    name: 'Ss A55 5G',    spec: '256GB · 8GB RAM · 6.6"',                price: 1699000, old: null,    badge: '',     grad: 'linear-gradient(160deg,#a8e6cf,#5cb99a)', colors: ['#5cb99a', '#1b1c20', '#e8e9ee'] },
  { id: 7,  cat: 'a',    name: 'Ss A35 5G',    spec: '128GB · 6GB RAM · 6.6"',                price: 1299000, old: 1449000, badge: 'sale', grad: 'linear-gradient(160deg,#d4c9f0,#a794d9)', colors: ['#a794d9', '#1b1c20'] },
  { id: 8,  cat: 'a',    name: 'Ss A25 5G',    spec: '128GB · 6GB RAM · Super AMOLED',        price: 999000,  old: null,    badge: '',     grad: 'linear-gradient(160deg,#ffd8a8,#f0a959)', colors: ['#f0a959', '#1b1c20', '#e8e9ee'] },
  { id: 9,  cat: 'm',    name: 'Ss M15 5G',    spec: '128GB · 6GB RAM · Batería 6000mAh',     price: 749000,  old: 849000,  badge: 'sale', grad: 'linear-gradient(160deg,#bcd4f5,#7fa6dd)', colors: ['#7fa6dd', '#1b1c20'] },
  { id: 10, cat: 'm',    name: 'Ss M35 5G',    spec: '256GB · 8GB RAM · 6.6"',                price: 1099000, old: null,    badge: 'new',  grad: 'linear-gradient(160deg,#c8e6a0,#8fc45c)', colors: ['#8fc45c', '#1b1c20', '#e8e9ee'] },
  { id: 11, cat: 's',    name: 'Ss S24 FE',    spec: '128GB · 8GB RAM · Exynos',              price: 2699000, old: 2999000, badge: 'sale', grad: 'linear-gradient(160deg,#f5b5b5,#dd7f7f)', colors: ['#dd7f7f', '#1b1c20', '#e8e9ee'] },
  { id: 12, cat: 'a',    name: 'Ss A15 5G',    spec: '128GB · 4GB RAM · 6.5"',                price: 849000,  old: null,    badge: '',     grad: 'linear-gradient(160deg,#cfd3e0,#9aa0b8)', colors: ['#9aa0b8', '#1b1c20'] },
];
