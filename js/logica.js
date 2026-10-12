export const idiomas = ['es', 'en', 'fr'];
export const temas = ['automatico', 'primavera', 'verano', 'otono', 'invierno', 'dia-muertos', 'navidad'];
export function temaAutomatico(fecha = new Date()) {
  const mes = fecha.getMonth() + 1;
  const dia = fecha.getDate();
  if ((mes === 10 && dia >= 25) || (mes === 11 && dia <= 3)) return 'dia-muertos';
  if (mes === 12) return 'navidad';
  if (mes >= 3 && mes <= 5) return 'primavera';
  if (mes >= 6 && mes <= 8) return 'verano';
  if (mes >= 9 && mes <= 11) return 'otono';
  return 'invierno';
}
export function normalizar(texto) {
  return String(texto).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
export function filtrarPlatillos(platillos, { categoria = 'todos', busqueda = '', vegetariano = false, idioma = 'es' } = {}) {
  const termino = normalizar(busqueda);
  return platillos.filter(p => {
    const texto = p.textos[idioma] || p.textos.es;
    return (categoria === 'todos' || p.categoria === categoria) && (!vegetariano || p.vegetariano) && normalizar(`${texto.nombre} ${texto.descripcion}`).includes(termino);
  });
}
export function formatoPrecio(precio, idioma = 'es', moneda = 'MXN') {
  return new Intl.NumberFormat({ es: 'es-MX', en: 'en-US', fr: 'fr-FR' }[idioma] || 'es-MX', { style: 'currency', currency: moneda, maximumFractionDigits: 0 }).format(precio);
}
