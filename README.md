# Restaurante Marce · Menú digital y AR

Prototipo estático sin servicios de pago, claves API, backend ni base de datos. HTML, CSS y JavaScript; el sitio publicado no necesita Node.js. La carta incorpora **100 opciones en 13 categorías**, transcritas del PDF proporcionado por el usuario. Nombres, variantes, precios y acompañamientos se revisaron contra las seis páginas. Consulta la transcripción en `docs/carta-marce.md`.

Los alérgenos y las opciones vegetarianas **no se dedujeron**: la carta no los certifica. El filtro vegetariano permanece oculto hasta que Marce confirme esas opciones. La foto de portada y la del Surtido de la Casa se extrajeron del PDF original; los demás platillos se muestran sin fotografías para no atribuirles imágenes genéricas.

## Abrir en tu computadora

Requiere Node.js 22 o posterior, gratuito. En la carpeta del repositorio:

```sh
npm run dev
```

Abre `http://localhost:4173`. No necesitas instalar dependencias para abrir, probar o construir el sitio. Usa un servidor HTTP: los módulos no funcionan abriendo `index.html` con doble clic. Para ver la interfaz desde la red local: `npm run dev -- --host`. La AR en un teléfono necesita una URL pública con **HTTPS**; una IP local con HTTP solo sirve para la vista 3D.

## Lo incluido

- Carta adaptable a celular, tablet y computadora; búsqueda por nombre y acompañamientos indicados, 13 categorías, detalles y carga progresiva de 16 opciones. La búsqueda considera las 100 opciones, incluso las todavía no mostradas.
- Español, inglés y francés. Traducciones locales sin API ni tarifa por consulta. El idioma y el tema se recuerdan en ese navegador.
- Primavera, verano, otoño, invierno, Día de Muertos y Navidad. Modo automático para México/hemisferio norte: estaciones por mes, Día de Muertos del 25 de octubre al 3 de noviembre y Navidad durante diciembre. Cambia el calendario en `js/logica.js`. Los temas modifican la presentación; no inventan promociones ni alteran el menú.
- Visor 3D bajo demanda, con progreso, reintento y mensajes de compatibilidad. AR mediante WebXR, Scene Viewer (Android) y Quick Look (iOS); se genera USDZ automáticamente si no se especifica un archivo iOS.
- Diálogos accesibles, cierre con Escape, controles de teclado y opción de reducir movimiento.

## El modelo que ya estaba en el repositorio

`platillo_especial.glb` **muestra una canasta decorativa de temporada**, con una insignia de SupaVoxel. No es un corte de carne. Se conserva intacto (72.443.976 bytes); la copia `platillo_especial.optimizado.glb` pesa 9.351.732 bytes. Se simplificó la malla y se redujeron texturas a 1024 px, conservando la insignia. Tiene una escala aproximada de demostración. La interfaz lo identifica como modelo de prueba, para no atribuirlo al platillo real.

La carga y renderización del modelo se verificaron en el navegador de escritorio. **La colocación física sobre una mesa aún debe probarse en un iPhone o Android compatible después de publicar con HTTPS.** No todos los teléfonos admiten AR; en esos casos queda disponible la vista 3D. El sitio solicita la cámara únicamente al activar la experiencia y no implementa captura, almacenamiento ni envío de imágenes.

## Incorporar el menú y tus otros modelos

Edita `js/datos.js`. Cada platillo tiene `id` único, una categoría de `categoriasMenu`, precio numérico, `fuentePagina` y textos en los tres idiomas. Las fotografías son opcionales. Las bebidas con vaso/jarra usan `variantes`, y los adicionales de cerveza usan `suplemento: true`. Coloca fotos y modelos en `assets/` y usa rutas relativas, sin `/` inicial, para admitir publicación en una subcarpeta.

Para un platillo con modelo añade `modelo3D: 'assets/models/nombre.glb'`. La carta señala los chiles chipotle rellenos como especialidad de la casa (`especial: true`). `modeloIOS` es opcional; úsalo **solo si existe** un USDZ correspondiente. La canasta queda en `modeloDemostracion`, separada de los platos reales. Si añades otro modelo de prueba, usa `modeloPrueba: true` y `modeloTextos` con nombre y explicación por idioma. Confirma tamaño real, posición y orientación en un teléfono antes de describirlo como emplatado fiel.

`restaurante.menuProvisional` ya es `false` para los nombres y precios de la carta aportada. Las traducciones son locales; conserva los nombres propios de platillos y marcas. Para activar el filtro vegetariano, confirma cada platillo con el restaurante, marca únicamente los adecuados con `vegetariano: true` y establece `restaurante.vegetarianosConfirmados: true`. Completa `alergenos` solo con información confirmada por Marce. Los desayunos mantienen el aviso «antes de las 12:00 p. m.».

## Pruebas y entrega

```sh
npm test
npm run build
```

`dist/` contiene únicamente el sitio y sus recursos; excluye el modelo original de 72 MB, herramientas y pruebas. El empaquetado comprueba que cada archivo no supere 25 MiB. **No publiques la raíz del repositorio en Cloudflare Pages**, porque contiene el modelo original demasiado grande. Usa `dist/`.

## Publicación gratuita con HTTPS

Cloudflare Pages ofrece un plan gratuito y subdominio `pages.dev` con HTTPS. El límite por archivo es 25 MiB; la copia optimizada cabe. No hace falta comprar un dominio ni activar servicios de pago.

1. Ejecuta `npm run build`.
2. En tu cuenta gratuita de Cloudflare, abre Workers & Pages y crea un proyecto de Pages con Direct Upload.
3. Sube el contenido de `dist/` y publica. También puedes conectar tu repositorio de GitHub: comando de construcción `npm run build`, salida `dist`.
4. Abre la URL `https://…pages.dev` desde Safari en iOS y Chrome en un Android compatible. Prueba el visor, permisos y colocación sobre una mesa bien iluminada.
5. Esa URL puede convertirse en un QR para imprimir en las mesas, sin contratar servicios de QR.

Referencia de cuotas: https://developers.cloudflare.com/pages/platform/limits/

No se creó una cuenta ni se publicó el proyecto desde esta sesión. No se necesita ninguna tarjeta para el código y la preparación local; selecciona únicamente el plan gratuito al alojarlo.

## Regenerar la copia optimizada (opcional)

Solo esta tarea necesita las dependencias de desarrollo, todas de código abierto:

```sh
npm ci
npm run optimize:model
npm test
npm run build
```

El optimizador está configurado para el modelo existente. Para otra malla ajusta la ruta, simplificación y escala en `scripts/optimize-model.mjs`; evita volver a optimizar la copia ya reducida.

## Créditos y licencias

- Visor local: Google `<model-viewer>` 4.0.0, Apache 2.0; licencia incluida en `assets/vendor/model-viewer.LICENSE`. Documentación: https://modelviewer.dev/examples/augmentedreality/
- Optimización: glTF Transform (MIT), Meshoptimizer (MIT), Sharp (Apache 2.0). Versiones fijadas en `package-lock.json`. No tienen costo de uso.
- Fotos genéricas gratuitas de Unsplash, uso bajo https://unsplash.com/license (incluye uso comercial). Sustituir por las fotos reales del restaurante cuando estén disponibles:
  - Corte: https://images.unsplash.com/photo-1598930230137-27b0b22154fc
  - Ensalada: https://images.unsplash.com/photo-1512621776951-a57141f2eefd
  - Pasta: https://images.unsplash.com/photo-1473093295043-cdd812d0e601
  - Pastel: https://images.unsplash.com/photo-1578985545062-69928b1d9587
  - Limonada (Pixzolo Photography): https://unsplash.com/photos/cLmCH3aygHk
  - Ambiente: https://images.unsplash.com/photo-1414235077428-338989a2e8c0
- El modelo fue aportado por el repositorio del usuario. Se conserva su insignia de SupaVoxel.
