import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, weld, simplify } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import sharp from 'sharp';
import { stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const original = fileURLToPath(new URL('../assets/models/platillo_especial.glb', import.meta.url));
const output = fileURLToPath(new URL('../assets/models/platillo_especial.optimizado.glb', import.meta.url));
await MeshoptSimplifier.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const document = await io.read(original);
// Conserva el modelo y la insignia de su creador; reduce la malla para móviles.
await document.transform(dedup(), weld(), simplify({ simplifier: MeshoptSimplifier, ratio: 0.08, error: 0.002 }), prune());
for (const texture of document.getRoot().listTextures()) {
  const compressed = await sharp(texture.getImage()).resize({ width: 1024, height: 1024, fit: 'inside', withoutEnlargement: true }).png().toBuffer();
  texture.setImage(compressed).setMimeType('image/png');
}
// Escala de demostración: ancho aproximado de 28 cm; confirmar con el restaurante.
const scene = document.getRoot().listScenes()[0];
const parent = document.createNode('demo-plate-28cm').setScale([0.311, 0.311, 0.311]);
for (const node of scene.listChildren()) { scene.removeChild(node); parent.addChild(node); }
scene.addChild(parent);
await io.write(output, document);
console.log(JSON.stringify({ originalBytes: (await stat(original)).size, optimizedBytes: (await stat(output)).size }));
