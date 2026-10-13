import { mkdir, copyFile, readdir, stat, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
const excludedModels = ['platillo_especial.glb', 'platillo_especial.optimizado.glb', 'carne-especial-marce.glb'].map(name => path.join('assets', 'models', name));
const files = ['index.html', '_headers'];
async function collect(folder) {
  for (const item of await readdir(path.join(root, folder), { withFileTypes: true })) {
    const relative = path.join(folder, item.name);
    if (item.isDirectory()) await collect(relative);
    else if (!excludedModels.includes(relative)) files.push(relative);
  }
}
for (const folder of ['css', 'js', 'assets']) await collect(folder);
// Retira únicamente recursos excluidos de compilaciones anteriores; conserva los originales.
for (const file of excludedModels) await rm(path.join(output, file), { force: true });
for (const file of files) {
  if ((await stat(path.join(root, file))).size > 25 * 1024 * 1024) throw new Error(`${file} excede 25 MiB.`);
  await mkdir(path.dirname(path.join(output, file)), { recursive: true });
  await copyFile(path.join(root, file), path.join(output, file));
}
console.log(`Sitio estático listo en dist/: ${files.length} archivos. Incluye los tres modelos seleccionados por Marce.`);
