# Emplatados 3D de Restaurante Marce

Se integraron únicamente los tres modelos seleccionados por el usuario de Negocios.zip. Los originales se conservan intactos en `.qa/modelos-marce/`; esa carpeta no se publica.

| Platillo de la carta | Archivo preparado | Medida horizontal máxima | Origen de la medida |
| --- | --- | ---: | --- |
| Surtido de la Casa | assets/models/surtido-marce.glb | 40 cm | Estimación del usuario |
| Orden de chiles chipotle rellenos | assets/models/chipotles-marce.glb | 32,5 cm | Punto medio del rango de 30–35 cm indicado |
| Sopa Azteca | assets/models/sopa-azteca-marce.glb | 20 cm | Estimación del usuario |

Son medidas aproximadas, no mediciones físicas. `escalaConfirmada` permanece en `false`. El visor permite modificar el tamaño al colocar el modelo. La carne especial se excluyó por indicación del usuario.

## Ajustes realizados

Los archivos incluían parte de la mesa y no traían normales de superficie. El script recorta cada malla con un contorno revisado visualmente, interpola sus coordenadas de textura y cierra la parte inferior con una base cerámica neutra. Calcula normales suavizadas, elimina triángulos degenerados, modera materiales y reduce texturas a un máximo de 2048 px. Centra el plato, coloca su base en Y=0 y ajusta la dimensión horizontal en metros.

Se preservan los alimentos del escaneo. La reparación de la base es aproximada; no reconstruye ingredientes o detalles ausentes. Persisten zonas borrosas o deformadas. El sitio describe estos modelos como emplatados de referencia.

Los GLB no requieren un decodificador externo ni un servicio de pago. El conjunto pasa de 37,34 MB a 9,98 MB aproximadamente. Cada modelo se descarga solo al abrir su visor.

## Regenerar las copias

Con Node.js y las dependencias gratuitas del repositorio:

```sh
npm ci
npm run prepare:models
npm test
npm run build
```

El script espera `23_9_2026.glb` dentro de las carpetas `surtido`, `chipotles` y `sopa-azteca` de `.qa/modelos-marce`. También acepta la ruta de esa carpeta como argumento. Los contornos y alturas de recorte están ajustados a estos archivos concretos; otro escaneo necesita revisión visual.

La dimensión se define en `scripts/prepare-dish-models.mjs` y se registra en `js/modelos.js`. Al cambiarla, actualiza ambas, regenera los GLB y ejecuta las pruebas. El reporte de preparación queda en `.qa/modelos-marce/report.json`.

## Verificación antes de entregar al restaurante

La carga y la apariencia se revisaron en escritorio. Las pruebas comprueban formato GLB, índices, normales, centrado, apoyo en Y=0, tamaño y asociación con los platillos de la carta.

Para confirmar la AR física, publica `dist/` con HTTPS y abre la experiencia en Safari de iPhone o Chrome de Android compatible. Coloca cada modelo sobre una mesa bien iluminada y compara su tamaño con un plato real o una regla. Revisa los tres modelos desde arriba y de lado. Quick Look puede generar USDZ en el dispositivo; verifica esa exportación en iPhone. La colocación y la exportación iOS aún no se han probado en un teléfono real durante esta sesión.
