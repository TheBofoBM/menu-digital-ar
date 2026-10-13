import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, weld } from '@gltf-transform/functions';
import sharp from 'sharp';
import { mkdir, stat, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const input = process.argv[2] || path.join(root, '.qa', 'modelos-marce');
const specifications = [
  { id: 'surtido', output: 'surtido-marce.glb', width: 0.40, baseHeight: 0.12, polygon: [[-.60,.76],[-.48,.81],[.62,.42],[.74,.31],[.78,.19],[.55,-.51],[.46,-.61],[.33,-.65],[-.70,-.34],[-.83,-.22],[-.86,-.10],[-.66,.64]] },
  { id: 'chipotles', output: 'chipotles-marce.glb', width: 0.325, baseHeight: 0.28, ellipse: [-.07,.07,.75,.74,-.02] },
  { id: 'sopa-azteca', output: 'sopa-azteca-marce.glb', width: 0.20, baseHeight: 0.055, ellipse: [-.04,.07,.74,.67,.17] },
];

// Contornos revisados visualmente en las vistas cenitales de estos tres archivos.
// Recorta exclusivamente la mesa exterior; interpola posición y UV en cada corte.
function plateContour(spec) {
  const polygon = spec.polygon || Array.from({ length: 96 }, (_, i) => {
    const [cx, cz, rx, rz, angle] = spec.ellipse;
    const phase = i * Math.PI * 2 / 96;
    const x = rx * Math.cos(phase), z = rz * Math.sin(phase);
    return [cx + x * Math.cos(angle) - z * Math.sin(angle), cz + x * Math.sin(angle) + z * Math.cos(angle)];
  });
  const area = polygon.reduce((sum, p, i) => { const q = polygon[(i + 1) % polygon.length]; return sum + p[0] * q[1] - q[0] * p[1]; }, 0);
  return area < 0 ? polygon.slice().reverse() : polygon;
}
function cropTable(document, primitive, contour, minimumY) {
  const positions = primitive.getAttribute('POSITION');
  const source = positions.getArray();
  const uv = primitive.getAttribute('TEXCOORD_0').getArray();
  const indices = primitive.getIndices().getArray();
  const croppedPositions = [], croppedUV = [], croppedIndices = [];
  for (let i = 0; i < indices.length; i += 3) {
    let triangle = [indices[i], indices[i + 1], indices[i + 2]].map(v => [source[v * 3], source[v * 3 + 1], source[v * 3 + 2], uv[v * 2], uv[v * 2 + 1]]);
    for (let side = 0; side <= contour.length && triangle.length; side++) {
      const a = contour[side], b = contour[(side + 1) % contour.length];
      const distance = side === contour.length ? p => p[1] - minimumY : p => (b[0] - a[0]) * (p[2] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
      const output = [];
      for (let j = 0; j < triangle.length; j++) {
        const start = triangle[j], end = triangle[(j + 1) % triangle.length];
        const ds = distance(start), de = distance(end);
        if (ds >= -1e-9) output.push(start);
        if ((ds >= 0) !== (de >= 0)) {
          const t = ds / (ds - de);
          output.push(start.map((v, component) => v + t * (end[component] - v)));
        }
      }
      triangle = output;
    }
    if (triangle.length < 3) continue;
    const offset = croppedPositions.length / 3;
    for (const v of triangle) { croppedPositions.push(v[0], v[1], v[2]); croppedUV.push(v[3], v[4]); }
    for (let v = 1; v < triangle.length - 1; v++) croppedIndices.push(offset, offset + v, offset + v + 1);
  }
  const buffer = positions.getBuffer();
  primitive.setAttribute('POSITION', document.createAccessor().setType('VEC3').setArray(Float32Array.from(croppedPositions)).setBuffer(buffer));
  primitive.setAttribute('TEXCOORD_0', document.createAccessor().setType('VEC2').setArray(Float32Array.from(croppedUV)).setBuffer(buffer));
  primitive.setIndices(document.createAccessor().setType('SCALAR').setArray(Uint32Array.from(croppedIndices)).setBuffer(buffer));
  return { originalTriangles: indices.length / 3, croppedTriangles: croppedIndices.length / 3 };
}

// Cierra la parte inferior del plato recortado con una base cerámica neutra.
// Es una reparación aproximada del soporte; conserva los alimentos escaneados.
function addPlateBase(document, contour, height) {
  const scene = document.getRoot().listScenes()[0];
  const buffer = document.getRoot().listBuffers()[0];
  const material = document.createMaterial('repaired-ceramic-base').setBaseColorFactor([.92, .91, .86, 1]).setMetallicFactor(0).setRoughnessFactor(.76);
  const center = contour.reduce((c, v) => [c[0] + v[0] / contour.length, c[1] + v[1] / contour.length], [0, 0]);
  const vertices = [], indices = [];
  const thickness = .018;
  for (const p of contour) vertices.push(p[0], height, p[1]);
  for (const p of contour) vertices.push(center[0] + (p[0] - center[0]) * .97, height - thickness, center[1] + (p[1] - center[1]) * .97);
  const n = contour.length;
  vertices.push(center[0], height, center[1], center[0], height - thickness, center[1]);
  for (let i = 0; i < n; i++) {
    const next = (i + 1) % n;
    indices.push(n * 2, next, i, n * 2 + 1, n + i, n + next);
    indices.push(i, next, n + next, i, n + next, n + i);
  }
  const primitive = document.createPrimitive().setAttribute('POSITION', document.createAccessor().setType('VEC3').setArray(Float32Array.from(vertices)).setBuffer(buffer));
  primitive.setIndices(document.createAccessor().setType('SCALAR').setArray(Uint16Array.from(indices)).setBuffer(buffer)).setMaterial(material);
  smoothNormals(document, primitive);
  const mesh = document.createMesh('plate-base').addPrimitive(primitive);
  scene.addChild(document.createNode('plate-base').setMesh(mesh));
}

// Normales ponderadas por el área de los triángulos. Se comparten en costuras UV
// coincidentes para suavizar la iluminación sin modificar la forma del platillo.
function smoothNormals(document, primitive) {
  const positions = primitive.getAttribute('POSITION');
  const vertices = positions.getArray();
  const indices = primitive.getIndices()?.getArray() || Uint32Array.from({ length: positions.getCount() }, (_, i) => i);
  const normals = new Float32Array(vertices.length);
  const validIndices = [];
  let degenerate = 0;
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i] * 3, b = indices[i + 1] * 3, c = indices[i + 2] * 3;
    const ux = vertices[b] - vertices[a], uy = vertices[b + 1] - vertices[a + 1], uz = vertices[b + 2] - vertices[a + 2];
    const vx = vertices[c] - vertices[a], vy = vertices[c + 1] - vertices[a + 1], vz = vertices[c + 2] - vertices[a + 2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    if (!Number.isFinite(nx + ny + nz) || nx * nx + ny * ny + nz * nz < 1e-20) { degenerate++; continue; }
    validIndices.push(indices[i], indices[i + 1], indices[i + 2]);
    for (const index of [a, b, c]) { normals[index] += nx; normals[index + 1] += ny; normals[index + 2] += nz; }
  }
  const groups = new Map();
  for (let i = 0; i < vertices.length; i += 3) {
    const key = Math.round(vertices[i] * 1e6) + ',' + Math.round(vertices[i + 1] * 1e6) + ',' + Math.round(vertices[i + 2] * 1e6);
    const group = groups.get(key) || { normal: [0, 0, 0], vertices: [] };
    for (let j = 0; j < 3; j++) group.normal[j] += normals[i + j];
    group.vertices.push(i); groups.set(key, group);
  }
  for (const { normal, vertices: group } of groups.values()) {
    const length = Math.hypot(...normal);
    const unit = length > 0 ? normal.map(v => v / length) : [0, 1, 0];
    for (const offset of group) for (let j = 0; j < 3; j++) normals[offset + j] = unit[j];
  }
  const buffer = positions.getBuffer();
  primitive.setAttribute('NORMAL', document.createAccessor().setType('VEC3').setArray(normals).setBuffer(buffer));
  if (degenerate) primitive.setIndices(document.createAccessor().setType('SCALAR').setArray(positions.getCount() < 65536 ? Uint16Array.from(validIndices) : Uint32Array.from(validIndices)).setBuffer(buffer));
  return { triangles: validIndices.length / 3, removedDegenerate: degenerate };
}

await mkdir(path.join(root, 'assets', 'models'), { recursive: true });
const report = [];
for (const spec of specifications) {
  const source = path.join(input, spec.id, '23_9_2026.glb');
  const document = await io.read(source);
  const bounds = { min: [Infinity, Infinity, Infinity], max: [-Infinity, -Infinity, -Infinity] };
  const geometry = [];
  for (const mesh of document.getRoot().listMeshes()) for (const primitive of mesh.listPrimitives()) {
    const crop = cropTable(document, primitive, plateContour(spec), spec.baseHeight);
    geometry.push({ ...crop, ...smoothNormals(document, primitive) });
    const vertices = primitive.getAttribute('POSITION').getArray();
    for (let i = 0; i < vertices.length; i += 3) for (let axis = 0; axis < 3; axis++) {
      bounds.min[axis] = Math.min(bounds.min[axis], vertices[i + axis]);
      bounds.max[axis] = Math.max(bounds.max[axis], vertices[i + axis]);
    }
  }
  addPlateBase(document, plateContour(spec), spec.baseHeight);
  bounds.min = [Infinity, Infinity, Infinity]; bounds.max = [-Infinity, -Infinity, -Infinity];
  for (const mesh of document.getRoot().listMeshes()) for (const primitive of mesh.listPrimitives()) {
    const vertices = primitive.getAttribute('POSITION').getArray();
    for (let i = 0; i < vertices.length; i += 3) for (let axis = 0; axis < 3; axis++) {
      bounds.min[axis] = Math.min(bounds.min[axis], vertices[i + axis]);
      bounds.max[axis] = Math.max(bounds.max[axis], vertices[i + axis]);
    }
  }
  // Evita reflejos metálicos o excesivos de materiales exportados automáticamente.
  for (const material of document.getRoot().listMaterials()) {
    material.setMetallicFactor(0).setRoughnessFactor(0.82).setMetallicRoughnessTexture(null);
    material.setNormalScale(0.35);
    material.setOcclusionStrength(0.35);
  }
  await document.transform(dedup(), weld(), prune());
  const textures = [];
  for (const texture of document.getRoot().listTextures()) {
    const metadata = await sharp(texture.getImage()).metadata();
    const bytes = await sharp(texture.getImage()).resize({ width: 2048, height: 2048, fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 90, chromaSubsampling: '4:4:4' }).toBuffer();
    texture.setImage(bytes).setMimeType('image/jpeg');
    textures.push({ originalWidth: metadata.width, originalHeight: metadata.height, bytes: bytes.length });
  }
  const scene = document.getRoot().listScenes()[0];
  const horizontal = Math.max(bounds.max[0] - bounds.min[0], bounds.max[2] - bounds.min[2]);
  const scale = spec.width / horizontal;
  const transform = document.createNode('approximate-plate-scale').setScale([scale, scale, scale]).setTranslation([
    -(bounds.min[0] + bounds.max[0]) / 2 * scale, -bounds.min[1] * scale, -(bounds.min[2] + bounds.max[2]) / 2 * scale,
  ]);
  for (const child of scene.listChildren()) { scene.removeChild(child); transform.addChild(child); }
  scene.addChild(transform);
  const destination = path.join(root, 'assets', 'models', spec.output);
  await io.write(destination, document);
  const result = { model: spec.id, originalBytes: (await stat(source)).size, outputBytes: (await stat(destination)).size, croppedBounds: bounds, approximateWidthMeters: spec.width, contour: plateContour(spec), geometry, textures };
  report.push(result);
  console.log(JSON.stringify({ model: spec.id, originalBytes: result.originalBytes, outputBytes: result.outputBytes, triangles: geometry.reduce((n, g) => n + g.triangles, 0) }));
}
await writeFile(path.join(root, '.qa', 'modelos-marce', 'report.json'), JSON.stringify(report, null, 2));
