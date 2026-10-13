import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { modelosAR } from '../js/modelos.js';

function leerGLB(bytes) {
  assert.equal(bytes.readUInt32LE(0), 0x46546c67);
  assert.equal(bytes.readUInt32LE(4), 2);
  assert.equal(bytes.readUInt32LE(8), bytes.length);
  const jsonLength = bytes.readUInt32LE(12);
  const json = JSON.parse(bytes.subarray(20, 20 + jsonLength).toString());
  const binary = bytes.subarray(28 + jsonLength);
  function accesor(id) {
    const a = json.accessors[id], view = json.bufferViews[a.bufferView];
    const columns = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 }[a.type];
    const type = { 5121: ['readUInt8', 1], 5123: ['readUInt16LE', 2], 5125: ['readUInt32LE', 4], 5126: ['readFloatLE', 4] }[a.componentType];
    assert.ok(type && columns);
    const [method, width] = type;
    const offset = (view.byteOffset || 0) + (a.byteOffset || 0);
    const stride = view.byteStride || columns * width;
    return { count: a.count, read: (row, col) => binary[method](offset + row * stride + col * width) };
  }
  return { json, accesor };
}

for (const modelo of modelosAR) {
  test('GLB válido, normales y escala aproximada: ' + modelo.id, async () => {
    const bytes = await readFile(new URL('../' + modelo.archivo, import.meta.url));
    assert.ok(bytes.length < 8 * 1024 * 1024, 'modelo demasiado pesado para esta entrega');
    const { json, accesor } = leerGLB(bytes);
    const bounds = { min: [Infinity, Infinity, Infinity], max: [-Infinity, -Infinity, -Infinity] };
    function walk(id, parentScale = [1, 1, 1], parentTranslation = [0, 0, 0]) {
      const node = json.nodes[id];
      assert.ok(!node.matrix && !node.rotation, 'transformación no contemplada en estos escaneos');
      const scale = parentScale.map((s, i) => s * (node.scale?.[i] ?? 1));
      const translation = parentTranslation.map((v, i) => v + parentScale[i] * (node.translation?.[i] ?? 0));
      if (node.mesh !== undefined) for (const primitive of json.meshes[node.mesh].primitives) {
        const positions = accesor(primitive.attributes.POSITION);
        assert.notEqual(primitive.attributes.NORMAL, undefined);
        const normals = accesor(primitive.attributes.NORMAL);
        const indices = accesor(primitive.indices);
        assert.equal(normals.count, positions.count);
        assert.equal(indices.count % 3, 0);
        for (let row = 0; row < positions.count; row++) {
          const length = Math.hypot(normals.read(row, 0), normals.read(row, 1), normals.read(row, 2));
          assert.ok(Number.isFinite(length) && Math.abs(length - 1) < .001, 'normal inválida');
          for (let axis = 0; axis < 3; axis++) {
            const value = positions.read(row, axis) * scale[axis] + translation[axis];
            assert.ok(Number.isFinite(value));
            bounds.min[axis] = Math.min(bounds.min[axis], value);
            bounds.max[axis] = Math.max(bounds.max[axis], value);
          }
        }
        for (let row = 0; row < indices.count; row++) assert.ok(indices.read(row, 0) < positions.count, 'índice fuera de la malla');
      }
      for (const child of node.children || []) walk(child, scale, translation);
    }
    for (const node of json.scenes[json.scene || 0].nodes) walk(node);
    const width = Math.max(bounds.max[0] - bounds.min[0], bounds.max[2] - bounds.min[2]);
    assert.ok(Math.abs(width - modelo.anchoMetros) < 1e-5);
    assert.ok(Math.abs(bounds.min[1]) < 1e-5, 'el plato debe apoyar sobre la mesa');
    assert.ok(Math.abs(bounds.min[0] + bounds.max[0]) < 1e-5 && Math.abs(bounds.min[2] + bounds.max[2]) < 1e-5);
  });
}

test('solo los tres modelos seleccionados y las medidas aproximadas indicadas', () => {
  assert.deepEqual(modelosAR.map(m => [m.id, m.anchoMetros]), [
    ['surtido', 0.40], ['chipotles', 0.325], ['sopa-azteca', 0.20],
  ]);
  assert.ok(modelosAR.every(m => m.platilloId && !m.escalaConfirmada));
});
