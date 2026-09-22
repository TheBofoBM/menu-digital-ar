export function crearTarjetaPlatillo(platillo) {
    let visorAR = '';
    
    // Si el platillo tiene Realidad Aumentada, preparamos el código del model-viewer
    if (platillo.tieneAR) {
        visorAR = `
            <div class="ar-container">
                <model-viewer 
                    src="${platillo.modelo3D}" 
                    ar 
                    ar-modes="webxr scene-viewer quick-look" 
                    camera-controls 
                    shadow-intensity="1" 
                    auto-rotate
                    style="width: 100%; height: 250px; background-color: #f0f0f0; border-radius: 8px;">
                </model-viewer>
                <p style="text-align:center; color: #ff4500; font-weight: bold;">🌟 Visualízalo en tu mesa</p>
            </div>
        `;
    }

    // Retornamos el HTML final del componente
    return `
        <article class="tarjeta-platillo" style="border: 1px solid #ddd; padding: 15px; margin-bottom: 20px; border-radius: 10px;">
            ${visorAR}
            <h3>${platillo.nombre}</h3>
            <p>${platillo.descripcion}</p>
            <strong class="precio">${platillo.precio}</strong>
        </article>
    `;
}