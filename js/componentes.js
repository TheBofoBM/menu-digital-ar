export function crearTarjetaPlatillo(platillo) {
    let botonAR = '';
    
    // Si tiene AR, agregamos el botón con el icono del ojo
    if (platillo.tieneAR) {
        botonAR = `
            <button class="btn-ver-ar" data-modelo="${platillo.modelo3D}">
                👁️ Ver en 3D
            </button>
        `;
    }

    // El nombre NO lleva el atributo data-traducir para que se quede en su idioma original
    return `
        <article class="tarjeta-platillo" data-categoria="${platillo.categoria}">
            <h3>${platillo.nombre}</h3>
            <p data-traducir="desc_${platillo.id}">${platillo.descripcion}</p>
            <strong class="precio">${platillo.precio}</strong>
            ${botonAR}
        </article>
    `;
}