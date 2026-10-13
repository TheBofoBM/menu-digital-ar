import { platillos, restaurante, categoriasMenu } from './datos.js';
import { crearTarjetaPlatillo, crearDetalle } from './componentes.js';
import { traducir } from './traducciones.js';
import { filtrarPlatillos, idiomas, temas, temaAutomatico } from './logica.js';

const $ = selector => document.querySelector(selector);
function leerPreferencia(clave) { try { return localStorage.getItem(clave); } catch { return null; } }
function guardarPreferencia(clave, valor) { try { localStorage.setItem(clave, valor); } catch { /* La carta funciona también sin almacenamiento. */ } }
const parametros = new URLSearchParams(location.search);
const idiomaInicial = parametros.get('lang') || leerPreferencia('marce-idioma') || 'es';
const temaInicial = parametros.get('theme') || leerPreferencia('marce-tema') || 'automatico';
const estado = { idioma: idiomas.includes(idiomaInicial) ? idiomaInicial : 'es', tema: temas.includes(temaInicial) ? temaInicial : 'automatico', categoria: 'todos', busqueda: '', vegetariano: false };
const t = (clave, valores) => traducir(estado.idioma, clave, valores);
const categorias = ['todos', ...categoriasMenu];
const pasoPagina = 16;
let limiteResultados = pasoPagina;
const detalleDialog = $('#detalle-dialog');
const arDialog = $('#ar-dialog');
let platilloDetalle = null;
let platilloAR = null;
let visor = null;
let revisionAR = 0;
let temporizadorModelo;
let estadoAR = 'arLoading';
let estadoModelo = 'loadingModel';
let progresoModelo = null;

function bloquearScroll() { document.body.style.overflow = detalleDialog.open || arDialog.open ? 'hidden' : ''; }
function aplicarTextos() {
  document.documentElement.lang = estado.idioma;
  document.title = t('pageTitle');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  for (const [atributo, destino] of [['i18nAria', 'aria-label'], ['i18nPlaceholder', 'placeholder'], ['i18nAlt', 'alt']]) {
    document.querySelectorAll('[data-' + atributo.replace(/[A-Z]/g, c => '-' + c.toLowerCase()) + ']').forEach(el => el.setAttribute(destino, t(el.dataset[atributo])));
  }
  $('#idioma').value = estado.idioma;
  $('#tema').replaceChildren(...temas.map(tema => {
    const option = document.createElement('option');
    option.value = tema; option.textContent = t(tema); return option;
  }));
  $('#tema').value = estado.tema;
  aplicarTema();
  if (detalleDialog.open && platilloDetalle) $('#detalle-contenido').innerHTML = crearDetalle(platilloDetalle, estado.idioma, t);
  if (arDialog.open && platilloAR) {
    actualizarTextosModelo();
    if (visor) visor.alt = t('modelAlt', { name: $('#ar-titulo').textContent });
    actualizarMensajesAR();
  }
}
function aplicarTema() {
  const temporada = estado.tema === 'automatico' ? temaAutomatico() : estado.tema;
  document.documentElement.dataset.tema = temporada;
  document.querySelectorAll('[data-season-name]').forEach(el => { el.textContent = t(temporada); });
}
function renderizarCategorias() {
  $('#categorias').replaceChildren(...categorias.map(categoria => {
    const boton = document.createElement('button');
    boton.type = 'button'; boton.className = 'category-button'; boton.dataset.categoria = categoria;
    boton.setAttribute('aria-pressed', String(estado.categoria === categoria)); boton.textContent = t(categoria); return boton;
  }));
}
function renderizarMenu() {
  const resultados = filtrarPlatillos(platillos, estado).sort((a, b) => Number(Boolean(b.especial)) - Number(Boolean(a.especial)));
  const visibles = resultados.slice(0, limiteResultados);
  $('#contenedor-menu').innerHTML = visibles.map(p => crearTarjetaPlatillo(p, estado.idioma, t)).join('');
  $('#sin-resultados').hidden = resultados.length > 0;
  $('#resultados').textContent = t('showingResults', { visible: visibles.length, total: resultados.length });
  $('#mostrar-mas').hidden = visibles.length >= resultados.length;
  $('#demo-note').hidden = false;
  $('.vegetarian-filter').hidden = !restaurante.vegetarianosConfirmados;
  if (!$('#categorias').childElementCount) renderizarCategorias();
  else $('#categorias').querySelectorAll('[data-categoria]').forEach(boton => boton.setAttribute('aria-pressed', String(estado.categoria === boton.dataset.categoria)));
}
function mostrarDetalle(platillo) {
  platilloDetalle = platillo;
  $('#detalle-contenido').innerHTML = crearDetalle(platillo, estado.idioma, t);
  if (!detalleDialog.open) detalleDialog.showModal();
  bloquearScroll();
}
function actualizarMensajesAR() {
  $('#ar-status').textContent = t(estadoAR);
  $('#model-message').textContent = t(estadoModelo, { progress: progresoModelo });
}
function actualizarTextosModelo() {
  const modeloTexto = platilloAR.modeloTextos?.[estado.idioma] || platilloAR.modeloTextos?.es;
  $('#ar-titulo').textContent = modeloTexto?.nombre || (platilloAR.textos[estado.idioma] || platilloAR.textos.es).nombre;
  $('#model-demo-note p').textContent = modeloTexto?.nota || t('testModelDescription');
  $('#model-demo-note strong').textContent = t(platilloAR.modeloPrueba ? 'testModel' : 'referenceModel');
  $('.ar-information > .tag').textContent = t(platilloAR.modeloPrueba ? 'testModel' : platilloAR.especial ? 'special' : platilloAR.categoria);
}
function comprobarAR() {
  const disponible = Boolean(visor?.loaded && visor.canActivateAR && window.isSecureContext);
  $('#activar-ar').disabled = !disponible;
  estadoAR = !window.isSecureContext ? 'arInsecure' : disponible ? 'arReady' : 'arUnsupported';
  actualizarMensajesAR();
}
function errorModelo(clave = 'modelError') {
  clearTimeout(temporizadorModelo);
  estadoModelo = clave;
  $('#model-state').hidden = false;
  $('#model-state .spinner').hidden = true;
  $('#reintentar-modelo').hidden = false;
  $('#activar-ar').disabled = true;
  estadoAR = clave === 'modelSlow' ? 'arLoading' : 'arFailed';
  actualizarMensajesAR();
}
async function mostrarAR(platillo) {
  if (!platillo?.modelo3D) return;
  if (detalleDialog.open) detalleDialog.close();
  platilloAR = platillo;
  const revision = ++revisionAR;
  clearTimeout(temporizadorModelo);
  actualizarTextosModelo();
  $('#model-demo-note').hidden = !platillo.modeloPrueba && !platillo.modeloReferencial;
  $('#model-state').hidden = false;
  $('#model-state .spinner').hidden = false;
  $('#reintentar-modelo').hidden = true;
  $('#activar-ar').disabled = true;
  $('#visor-ar-contenedor').replaceChildren();
  visor = null; estadoModelo = 'loadingModel'; estadoAR = 'arLoading'; progresoModelo = null;
  actualizarMensajesAR();
  if (!arDialog.open) arDialog.showModal();
  bloquearScroll();
  temporizadorModelo = setTimeout(() => { if (revision === revisionAR && arDialog.open) errorModelo('modelSlow'); }, 60000);
  try {
    // El visor y el GLB se descargan solo al solicitar la experiencia.
    if (!customElements.get('model-viewer')) await import('../assets/vendor/model-viewer.min.js?attempt=' + revision);
    if (revision !== revisionAR || !arDialog.open) return;
    const modelo = document.createElement('model-viewer');
    visor = modelo;
    modelo.setAttribute('ar', '');
    modelo.setAttribute('ar-modes', 'webxr scene-viewer quick-look');
    modelo.setAttribute('ar-placement', 'floor');
    modelo.setAttribute('ar-scale', 'auto');
    modelo.setAttribute('camera-controls', '');
    modelo.setAttribute('touch-action', 'pan-y');
    modelo.setAttribute('disable-pan', '');
    modelo.setAttribute('interaction-prompt', 'none');
    modelo.setAttribute('shadow-intensity', '1');
    modelo.setAttribute('exposure', '1');
    modelo.setAttribute('camera-orbit', '0deg 45deg auto');
    modelo.setAttribute('min-camera-orbit', 'auto 0deg auto');
    modelo.setAttribute('max-camera-orbit', 'auto 85deg auto');
    modelo.setAttribute('alt', t('modelAlt', { name: $('#ar-titulo').textContent }));
    // Sin ios-src, model-viewer genera USDZ para Quick Look de iOS.
    if (platillo.modeloIOS) modelo.setAttribute('ios-src', platillo.modeloIOS);
    // La acción se muestra en el panel, con explicación en dispositivos sin AR.
    const botonInterno = document.createElement('span');
    botonInterno.setAttribute('slot', 'ar-button');
    modelo.append(botonInterno);
    modelo.addEventListener('load', () => {
      if (revision !== revisionAR) return;
      clearTimeout(temporizadorModelo);
      $('#model-state').hidden = true;
      comprobarAR();
    });
    modelo.addEventListener('progress', e => {
      if (revision !== revisionAR || modelo.loaded) return;
      estadoModelo = 'loadingProgress'; progresoModelo = Math.round(e.detail.totalProgress * 100); actualizarMensajesAR();
    });
    modelo.addEventListener('error', () => { if (revision === revisionAR) errorModelo(); });
    modelo.addEventListener('ar-status', e => {
      if (revision !== revisionAR) return;
      if (e.detail.status === 'failed') estadoAR = 'arFailed';
      else if (e.detail.status === 'object-placed') estadoAR = 'arPlaced';
      else if (e.detail.status === 'session-started') estadoAR = 'arReady';
      else comprobarAR();
      actualizarMensajesAR();
    });
    modelo.src = platillo.modelo3D;
    $('#visor-ar-contenedor').append(modelo);
  } catch { if (revision === revisionAR && arDialog.open) errorModelo(); }
}

$('#idioma').addEventListener('change', e => {
  estado.idioma = e.target.value; guardarPreferencia('marce-idioma', estado.idioma);
  aplicarTextos(); renderizarCategorias(); renderizarMenu();
});
$('#tema').addEventListener('change', e => {
  estado.tema = e.target.value; guardarPreferencia('marce-tema', estado.tema); aplicarTema();
});
$('#categorias').addEventListener('click', e => {
  const boton = e.target.closest('[data-categoria]'); if (!boton) return;
  estado.categoria = boton.dataset.categoria; limiteResultados = pasoPagina; renderizarMenu();
});
$('#buscar').addEventListener('input', e => { estado.busqueda = e.target.value; limiteResultados = pasoPagina; renderizarMenu(); });
$('#vegetariano').addEventListener('change', e => { estado.vegetariano = e.target.checked; renderizarMenu(); });
$('#limpiar-filtros').addEventListener('click', () => {
  estado.categoria = 'todos'; estado.busqueda = ''; estado.vegetariano = false;
  $('#buscar').value = ''; $('#vegetariano').checked = false; limiteResultados = pasoPagina; renderizarMenu(); $('#buscar').focus();
});
$('#mostrar-mas').addEventListener('click', () => { limiteResultados += pasoPagina; renderizarMenu(); });
document.addEventListener('click', e => {
  const cerrar = e.target.closest('[data-close-dialog]');
  if (cerrar) { cerrar.closest('dialog').close(); return; }
  const botonAR = e.target.closest('[data-ar-id], [data-open-special]');
  if (botonAR) {
    const p = botonAR.dataset.arId ? platillos.find(p => p.id === botonAR.dataset.arId) : platillos.find(p => p.especial && p.modelo3D);
    mostrarAR(p); return;
  }
  const botonDetalle = e.target.closest('[data-detail-id]');
  if (botonDetalle) { const p = platillos.find(p => p.id === botonDetalle.dataset.detailId); if (p) mostrarDetalle(p); }
});
for (const dialog of [detalleDialog, arDialog]) {
  dialog.addEventListener('close', bloquearScroll);
  dialog.addEventListener('click', e => {
    if (e.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (e.clientX < bounds.left || e.clientX > bounds.right || e.clientY < bounds.top || e.clientY > bounds.bottom) dialog.close();
  });
}
arDialog.addEventListener('close', () => {
  ++revisionAR; clearTimeout(temporizadorModelo);
  $('#visor-ar-contenedor').replaceChildren(); visor = null;
});
$('#reintentar-modelo').addEventListener('click', () => mostrarAR(platilloAR));
$('#activar-ar').addEventListener('click', async () => {
  if (!visor?.canActivateAR || !visor.loaded) return;
  estadoAR = 'arStarting'; actualizarMensajesAR();
  try { await visor.activateAR(); } catch { estadoAR = 'arFailed'; actualizarMensajesAR(); }
});
window.addEventListener('pageshow', () => { if (visor?.loaded) comprobarAR(); });
document.querySelectorAll('[data-open-special]').forEach(el => { el.hidden = !platillos.some(p => p.especial && p.modelo3D); });
aplicarTextos();
renderizarMenu();
