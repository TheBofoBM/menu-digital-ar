import { restaurante } from './datos.js';
import { formatoPrecio } from './logica.js';

export function escapar(texto = '') {
  return String(texto).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}
export function icono(nombre) {
  return '<svg class="icon" aria-hidden="true"><use href="#i-' + nombre + '"></use></svg>';
}
function precioVisible(platillo, idioma, t) {
  const prefijo = platillo.suplemento ? '+' : platillo.variantes?.length ? t('fromPrice') + ' ' : '';
  return prefijo + formatoPrecio(platillo.precio, idioma, restaurante.moneda);
}
export function crearTarjetaPlatillo(platillo, idioma, t) {
  const texto = platillo.textos[idioma] || platillo.textos.es;
  const id = escapar(platillo.id);
  const destacado = Boolean(platillo.especial);
  const etiqueta = '<span class="tag">' + (destacado ? icono('spark') : '') + escapar(t(destacado ? 'special' : platillo.categoria)) + '</span>';
  const vegetariano = platillo.vegetariano === true ? '<span class="vegetarian-tag">' + icono('leaf') + escapar(t('vegetarian')) + '</span>' : '';
  const accion = platillo.modelo3D
    ? '<button class="button primary" data-ar-id="' + id + '">' + icono('cube') + escapar(t(platillo.modeloPrueba ? 'tryExperience' : 'explore3d')) + '</button>'
    : '<button class="details-button" data-detail-id="' + id + '">' + escapar(t('details')) + icono('arrow') + '</button>';
  const imagen = platillo.imagen ? '<button class="dish-image-button" data-detail-id="' + id + '" aria-label="' + escapar(t('details') + ': ' + texto.nombre) + '">' +
    '<img src="' + escapar(platillo.imagen) + '" alt="' + escapar(texto.nombre) + '" loading="lazy" width="818" height="277">' +
    (platillo.imagenDeCarta ? '<span class="photo-label">' + escapar(t('menuPhoto')) + '</span>' : '') + '</button>' : '';
  const notaModelo = platillo.modeloPrueba ? '<span class="model-availability">' + escapar(t('testModel') + ': ' + (platillo.modeloTextos?.[idioma] || platillo.modeloTextos?.es)?.nombre) + '</span>' : '';
  return '<article class="dish-card' + (destacado ? ' featured' : '') + (!platillo.imagen ? ' text-only' : '') + '" data-dish-id="' + id + '">' + imagen +
    '<div class="dish-content">' + etiqueta + '<h3>' + escapar(texto.nombre) + '</h3>' +
    (texto.descripcion ? '<p class="dish-description">' + escapar(texto.descripcion) + '</p>' : '') + vegetariano + notaModelo +
    (platillo.disponibilidad === 'desayuno' ? '<span class="dish-notice">' + escapar(t('breakfastHours')) + '</span>' : '') +
    (platillo.suplemento ? '<span class="dish-notice">' + escapar(t('supplement')) + '</span>' : '') +
    '<div class="dish-bottom"><span class="dish-price">' + escapar(precioVisible(platillo, idioma, t)) + '</span>' + accion + '</div></div></article>';
}
export function crearDetalle(platillo, idioma, t) {
  const texto = platillo.textos[idioma] || platillo.textos.es;
  const ingredientes = Array.isArray(platillo.alergenos) && platillo.alergenos.length ? platillo.alergenos.map(a => t(a)).join(', ') : t('allergensUnknown');
  const variantes = platillo.variantes?.length ? '<div class="price-variants"><strong>' + escapar(t('variantPrices')) + '</strong><dl>' +
    platillo.variantes.map(v => '<div><dt>' + escapar(v.textos[idioma] || v.textos.es) + '</dt><dd>' + escapar(formatoPrecio(v.precio, idioma, restaurante.moneda)) + '</dd></div>').join('') + '</dl></div>' : '';
  return (platillo.imagen ? '<img class="detail-image" src="' + escapar(platillo.imagen) + '" alt="' + escapar(texto.nombre) + '">' : '') +
    '<div class="detail-copy"><span class="tag">' + escapar(t(platillo.especial ? 'special' : platillo.categoria)) + '</span>' +
    '<h2 id="detalle-titulo">' + escapar(texto.nombre) + '</h2>' + (texto.descripcion ? '<p>' + escapar(texto.descripcion) + '</p>' : '') +
    '<strong class="detail-price">' + escapar(precioVisible(platillo, idioma, t)) + '</strong>' + variantes +
    (platillo.disponibilidad === 'desayuno' ? '<p class="dish-notice">' + escapar(t('breakfastHours')) + '</p>' : '') +
    (platillo.suplemento ? '<p class="dish-notice">' + escapar(t('supplement')) + '</p>' : '') +
    '<div class="allergens"><strong>' + escapar(t('allergensTitle')) + '</strong>' + escapar(ingredientes) + '</div>' +
    (platillo.modelo3D ? '<button class="button primary" data-ar-id="' + escapar(platillo.id) + '">' + icono('cube') + escapar(t('explore3d')) + '</button>' : '') + '</div>';
}
