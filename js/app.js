import { platillos } from './datos.js';
import { crearTarjetaPlatillo } from './componentes.js';

document.addEventListener('DOMContentLoaded', () => {
    const contenedorMenu = document.getElementById('contenedor-menu');
    const pantallaMenu = document.getElementById('pantalla-menu');
    const pantallaAR = document.getElementById('pantalla-ar');
    const visorContenedor = document.getElementById('visor-ar-contenedor');
    const btnRegresar = document.getElementById('btn-regresar');

    // 1. Cargar el menú inicial
    function renderizarMenu() {
        let html = '';
        platillos.forEach(p => html += crearTarjetaPlatillo(p));
        contenedorMenu.innerHTML = html;
        asignarEventosAR();
    }

    // 2. Lógica para abrir el visor AR al presionar el ojo
    function asignarEventosAR() {
        const botonesAR = document.querySelectorAll('.btn-ver-ar');
        botonesAR.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const rutaModelo = e.target.getAttribute('data-modelo');
                abrirVisorAR(rutaModelo);
            });
        });
    }

    function abrirVisorAR(rutaModelo) {
        pantallaMenu.style.display = 'none'; // Ocultamos el menú
        pantallaAR.classList.remove('oculto'); // Mostramos la pantalla AR
        
        // Inyectamos el visor limpio
        visorContenedor.innerHTML = `
            <model-viewer 
                src="${rutaModelo}" 
                ar ar-modes="webxr scene-viewer quick-look" 
                camera-controls auto-rotate shadow-intensity="1" 
                style="width: 100%; height: 100%;">
            </model-viewer>
        `;
    }

    // 3. Botón de Regreso (Flecha)
    btnRegresar.addEventListener('click', () => {
        visorContenedor.innerHTML = ''; // Limpiamos la memoria del 3D
        pantallaAR.classList.add('oculto');
        pantallaMenu.style.display = 'block';
    });

    // 4. Lógica de Filtrado por Categorías (Evita el scroll infinito)
    const botonesCategoria = document.querySelectorAll('.btn-categoria');
    botonesCategoria.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Quitar clase activo a todos y ponérsela al clickeado
            botonesCategoria.forEach(b => b.classList.remove('activo'));
            e.target.classList.add('activo');

            const categoriaSeleccionada = e.target.getAttribute('data-categoria');
            const tarjetas = document.querySelectorAll('.tarjeta-platillo');

            tarjetas.forEach(tarjeta => {
                if (categoriaSeleccionada === 'todos' || tarjeta.getAttribute('data-categoria') === categoriaSeleccionada) {
                    tarjeta.style.display = 'block';
                } else {
                    tarjeta.style.display = 'none';
                }
            });
        });
    });

    renderizarMenu();
    
    // Para probar un tema, descomenta la siguiente línea:
    // document.documentElement.setAttribute('data-tema', 'dia-muertos');
});