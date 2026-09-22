// Importamos los datos y el componente
import { platillos } from './datos.js';
import { crearTarjetaPlatillo } from './componentes.js';

// Esperamos a que el HTML cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    const contenedorMenu = document.getElementById('contenedor-menu');
    let contenidoHTML = '';

    // Recorremos cada platillo y generamos su tarjeta
    platillos.forEach(platillo => {
        contenidoHTML += crearTarjetaPlatillo(platillo);
    });

    // Inyectamos todo el HTML generado en nuestro contenedor
    contenedorMenu.innerHTML = contenidoHTML;
});