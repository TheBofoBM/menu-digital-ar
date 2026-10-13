import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { platillos, categoriasMenu } from '../js/datos.js';
import { filtrarPlatillos, idiomas, normalizar, temaAutomatico, formatoPrecio } from '../js/logica.js';
import { traducciones, traducir } from '../js/traducciones.js';
import { crearTarjetaPlatillo, crearDetalle } from '../js/componentes.js';

test('catálogo completo: 100 opciones y 13 secciones de la carta', () => {
  assert.equal(platillos.length, 100);
  assert.equal(categoriasMenu.length, 13);
  assert.equal(new Set(platillos.map(p => p.id)).size, platillos.length);
  const esperados = { 2: 28, 3: 12, 4: 17, 5: 15, 6: 28 };
  for (const [pagina, cantidad] of Object.entries(esperados)) assert.equal(platillos.filter(p => p.fuentePagina === Number(pagina)).length, cantidad);
  assert.deepEqual(platillos.filter(p => p.especial).map(p => p.id), ['chipotles-rellenos']);
  assert.equal(platillos.find(p => p.id === 'chipotles-rellenos').precio, 88);
  assert.equal(platillos.find(p => p.id === 'surtido-casa').precio, 250);
  assert.ok(!platillos.some(p => ['especial-chef', 'pasta', 'pastel', 'huerta'].includes(p.id)));
});

test('categorías y búsqueda se combinan sin perder los nombres de la carta', () => {
  assert.equal(filtrarPlatillos(platillos, { categoria: 'carnes' }).length, 27);
  assert.deepEqual(filtrarPlatillos(platillos, { busqueda: '  CESAR  ' }).map(p => p.id), ['ensalada-cesar']);
  assert.equal(filtrarPlatillos(platillos, { categoria: 'postres', busqueda: 'arrachera' }).length, 0);
  assert.equal(normalizar(' CÉSAR '), 'cesar');
  // El documento no certifica opciones vegetarianas.
  assert.equal(filtrarPlatillos(platillos, { vegetariano: true }).length, 0);
});

test('la búsqueda utiliza las descripciones del idioma visible', () => {
  assert.ok(filtrarPlatillos(platillos, { idioma: 'en', busqueda: 'skirt steak' }).some(p => p.id === 'arrachera'));
  assert.deepEqual(filtrarPlatillos(platillos, { idioma: 'fr', busqueda: 'citronnade' }).map(p => p.id), ['limonada-naranjada']);
});

test('se distinguen presentaciones y suplementos de cerveza', () => {
  const fruta = platillos.find(p => p.id === 'agua-frutas');
  assert.deepEqual(fruta.variantes.map(v => v.precio), [37, 99]);
  assert.deepEqual(platillos.find(p => p.id === 'horchata').variantes.map(v => v.precio), [44, 109]);
  assert.deepEqual(platillos.find(p => p.id === 'limonada-naranjada').variantes.map(v => v.precio), [40, 115]);
  const t = clave => traducir('es', clave);
  assert.ok(crearTarjetaPlatillo(fruta, 'es', t).includes('Desde $37'));
  const detalle = crearDetalle(fruta, 'es', t);
  assert.ok(detalle.includes('Vaso') && detalle.includes('Jarra') && detalle.includes('$99'));
  assert.ok(crearTarjetaPlatillo(platillos.find(p => p.id === 'michelada'), 'es', t).includes('+$17'));
  assert.ok(crearDetalle(platillos.find(p => p.id === 'naolinqueno-1'), 'es', t).includes('12:00'));
  assert.ok(detalle.includes('La carta no detalla todos los alérgenos'));
});

test('el tema automático respeta estaciones y límites de festividades', () => {
  for (const [fecha, esperado] of [['2026-03-01', 'primavera'], ['2026-08-31', 'verano'], ['2026-10-24', 'otono'], ['2026-10-25', 'dia-muertos'], ['2026-11-03', 'dia-muertos'], ['2026-11-04', 'otono'], ['2026-12-01', 'navidad'], ['2027-01-01', 'invierno']]) {
    assert.equal(temaAutomatico(new Date(fecha + 'T12:00:00')), esperado);
  }
});

test('todos los textos, categorías y nombres tienen traducción', async () => {
  const claves = Object.keys(traducciones.es).sort();
  for (const idioma of idiomas) {
    assert.deepEqual(Object.keys(traducciones[idioma]).sort(), claves);
    for (const p of platillos) assert.ok(p.textos[idioma]?.nombre && typeof p.textos[idioma]?.descripcion === 'string');
    for (const categoria of categoriasMenu) assert.ok(traducciones[idioma][categoria]);
  }
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  for (const match of html.matchAll(/data-i18n(?:-aria|-alt|-placeholder)?="([^"]+)"/g)) assert.ok(traducciones.es[match[1]], match[1]);
  assert.ok(formatoPrecio(88, 'en').includes('88'));
});

test('recursos existentes y modelos asociados a los platillos correctos', async () => {
  assert.deepEqual(platillos.filter(p => p.modelo3D).map(p => p.id).sort(), ['chipotles-rellenos', 'sopa-azteca', 'surtido-casa']);
  for (const p of platillos) {
    assert.ok(categoriasMenu.includes(p.categoria));
    assert.ok(Number.isFinite(p.precio) && p.precio >= 0);
    assert.equal(p.alergenos, null);
    if (p.modelo3D) {
      assert.ok((await stat(new URL('../' + p.modelo3D, import.meta.url))).size > 0);
      assert.ok(p.modeloReferencial);
      assert.ok(!p.modeloPrueba);
      for (const idioma of idiomas) assert.ok(p.modeloTextos[idioma].nota);
      const html = crearTarjetaPlatillo(p, 'es', clave => traducir('es', clave));
      assert.ok(html.includes('data-ar-id="' + p.id + '"'));
      assert.ok(html.includes('data-detail-id="' + p.id + '"'));
    }
    if (p.imagen) assert.ok((await stat(new URL('../' + p.imagen, import.meta.url))).size > 0);
  }
});

test('la carta no precarga modelos ni muestra imágenes inexistentes', () => {
  const p = { ...platillos[0], textos: { es: { nombre: '<img onerror="evil()">', descripcion: '<script>evil()</script>' } } };
  const html = crearTarjetaPlatillo(p, 'es', clave => traducir('es', clave));
  assert.ok(html.includes('&lt;img'));
  assert.ok(!html.includes('<script>') && !html.includes('<model-viewer') && !html.includes('<img '));
});
