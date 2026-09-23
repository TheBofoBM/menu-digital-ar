export function crearTarjetaPlatillo(platillo) {
    let botonAR = '';
    
    // El model-viewer ahora toma el tamaño de un botón.
    // El slot="ar-button" le dice a la librería que este botón activa la cámara directamente.
    if (platillo.tieneAR) {
        botonAR = `
            <div style="position: relative; height: 45px; margin-top: 15px;">
                <model-viewer 
                    src="${platillo.modelo3D}" 
                    ar 
                    ar-modes="webxr scene-viewer quick-look" 
                    style="width: 100%; height: 100%; background: transparent;">
                    
                    <button slot="ar-button" class="btn-ver-ar" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; margin: 0;">
                        👁️ Ver en tu mesa
                    </button>
                    
                </model-viewer>
            </div>
        `;
    }

    return `
        <article class="tarjeta-platillo" data-categoria="${platillo.categoria}">
            <h3>${platillo.nombre}</h3>
            <p data-traducir="desc_${platillo.id}">${platillo.descripcion}</p>
            <strong class="precio">${platillo.precio}</strong>
            ${botonAR}
        </article>
    `;
}