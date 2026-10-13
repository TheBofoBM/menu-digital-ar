# Restaurante Marce · Menú digital y AR

Prototipo estático sin servicios de pago, claves API, backend ni base de datos. HTML, CSS y JavaScript; el sitio publicado no necesita Node.js. La carta incorpora **100 opciones en 13 categorías**, transcritas del PDF proporcionado. Consulta la transcripción en [docs/carta-marce.md](docs/carta-marce.md).

Los alérgenos y las opciones vegetarianas requieren confirmación del restaurante. La foto de portada y la del Surtido de la Casa proceden de la carta original. Los demás platillos se muestran sin fotos genéricas.

## Abrir en tu computadora

Requiere Node.js 22 o posterior, gratuito. En la carpeta del repositorio:

```sh
npm run dev
```

Abre `http://localhost:4173`. No necesitas instalar dependencias para abrir, probar o construir el sitio. Usa un servidor HTTP: los módulos no funcionan abriendo `index.html` con doble clic. Para ver la interfaz desde la red local: `npm run dev -- --host`. La AR en un teléfono necesita una URL pública con **HTTPS**; una IP local con HTTP solo sirve para la vista 3D.

## Lo incluido

- Carta adaptable a celular, tablet y computadora; búsqueda, 13 categorías, detalles y carga progresiva. La búsqueda considera las 100 opciones.
- Español, inglés y francés con traducciones locales sin API ni tarifa por consulta.
- Primavera, verano, otoño, invierno, Día de Muertos y Navidad. Modo automático por fechas de México/hemisferio norte; calendario editable en `js/logica.js`.
- Tres emplatados en 3D: **chipotles rellenos, Surtido de la Casa y Sopa Azteca**. Visor bajo demanda con progreso, reintento y mensajes de compatibilidad.
- AR con WebXR, Scene Viewer (Android) y Quick Look (iOS). El visor puede generar USDZ para iOS; también permite añadir un USDZ específico.
- Diálogos accesibles, cierre con Escape, controles de teclado y opción de reducir movimiento.

## Modelos de los platillos

Se prepararon copias de los GLB aportados en `Negocios.zip`: recorte de la mesa exterior, base cerámica aproximada, normales suavizadas, materiales moderados y texturas de hasta 2048 px. Se conservaron los alimentos escaneados. Los originales permanecen intactos en la carpeta local de revisión.

| Platillo | Medida horizontal aproximada | GLB preparado |
| --- | ---: | ---: |
| Surtido de la Casa | 40 cm | 4,67 MB |
| Orden de chiles chipotle rellenos | 32,5 cm | 3,08 MB |
| Sopa Azteca | 20 cm | 2,23 MB |

Las medidas proceden de tus estimaciones; para los chipotles se utilizó el punto medio de 30–35 cm. La interfaz indica que la representación y el tamaño son aproximados. Algunos detalles permanecen deformados o borrosos porque faltan datos en los escaneos; este proceso no recupera fotografías ni geometría ausentes.

La carne especial se excluyó del sitio y de la entrega. La canasta decorativa que estaba en el repositorio se conserva como archivo local y también queda fuera del sitio publicado.

**Se verificaron carga y renderización en el navegador de escritorio. La colocación física sobre una mesa debe probarse en un iPhone o Android compatible con HTTPS.** En dispositivos sin AR sigue disponible la vista 3D. El sitio no implementa captura, almacenamiento ni envío de imágenes de la cámara. Consulta [docs/modelos-ar.md](docs/modelos-ar.md) para reproducir la preparación y revisar la escala.

## Editar la carta y los modelos

Edita `js/datos.js` para nombres, precios, categorías y textos en los tres idiomas. Cada platillo tiene un `id` único y `fuentePagina`. Las fotografías son opcionales. Las bebidas con vaso/jarra usan `variantes`; los adicionales de cerveza usan `suplemento: true`.

Las asociaciones de los tres modelos están en `js/modelos.js`. Usa rutas relativas, sin `/` inicial, para admitir publicación en subcarpetas. `modeloIOS` es opcional y debe apuntar a un USDZ existente.

Para activar el filtro vegetariano, confirma cada platillo, marca los adecuados con `vegetariano: true` y establece `restaurante.vegetarianosConfirmados: true`. Completa `alergenos` solo con información confirmada por Marce.

## Pruebas y entrega

```sh
npm test
npm run build
```

`dist/` contiene el sitio y sus recursos. Excluye los originales, la carne especial, la canasta de demostración, las herramientas y las pruebas. El empaquetado comprueba que cada archivo no supere 25 MiB. Publica únicamente `dist/`, no la raíz del repositorio.

## Publicación gratuita con HTTPS

Cloudflare Pages permite usar el plan gratuito y un subdominio `pages.dev` con HTTPS. Los tres GLB preparados quedan bajo el límite por archivo de 25 MiB.

1. Ejecuta `npm run build`.
2. En tu cuenta gratuita de Cloudflare, crea un proyecto de Pages con Direct Upload.
3. Sube el contenido de `dist/`. Si conectas GitHub, usa comando `npm run build` y salida `dist`.
4. Abre la URL HTTPS desde Safari en iOS o Chrome en Android y prueba la colocación.
5. Usa esa URL para el QR de las mesas.

Referencia: https://developers.cloudflare.com/pages/platform/limits/

No se creó una cuenta ni se publicó el proyecto desde esta sesión. No se requiere comprar un dominio ni activar servicios de pago para este prototipo.

## Créditos y licencias

- Visor local Google `<model-viewer>` 4.0.0, Apache 2.0; licencia en `assets/vendor/model-viewer.LICENSE`. Documentación: https://modelviewer.dev/examples/augmentedreality/
- glTF Transform (MIT), Meshoptimizer (MIT) y Sharp (Apache 2.0); versiones fijadas en `package-lock.json`.
- Carta, fotografías y escaneos aportados por el usuario.
