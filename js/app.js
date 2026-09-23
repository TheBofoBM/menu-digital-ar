import { platillos } from './datos.js';
import { crearTarjetaPlatillo } from './componentes.js';

document.addEventListener('DOMContentLoaded', () => {
    const contenedorMenu = document.getElementById('contenedor-menu');

    // 1. Cargar el menú inicial
    function renderizarMenu() {
        let html = '';
        platillos.forEach(p => html += crearTarjetaPlatillo(p));
        contenedorMenu.innerHTML = html;
    }

    // 2. Lógica de Filtrado por Categorías
    const botonesCategoria = document.querySelectorAll('.btn-categoria');
    botonesCategoria.forEach(boton => {
        boton.addEventListener('click', (e) => {
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
});