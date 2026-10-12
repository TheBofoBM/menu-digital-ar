import { mkdir, copyFile, readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
const files = ['index.html', '_headers'];
async function collect(folder) {
  for (const item of await readdir(path.join(root, folder), { withFileTypes: true })) {
    const relative = path.join(folder, item.name);
    if (item.isDirectory()) await collect(relative);
    else if (relative !== path.join('assets', 'models', 'platillo_especial.glb')) files.push(relative);
  }
}
for (const folder of ['css', 'js', 'assets']) await collect(folder);
for (const file of files) {
  if ((await stat(path.join(root, file))).size > 25 * 1024 * 1024) throw new Error(`${file} excede 25 MiB.`);
  await mkdir(path.dirname(path.join(output, file)), { recursive: true });
  await copyFile(path.join(root, file), path.join(output, file));
}
console.log(`Sitio estático listo en dist/: ${files.length} archivos. El modelo original se conserva fuera de la entrega.`);
