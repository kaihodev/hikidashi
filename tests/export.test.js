let unsafe;
try {
  unsafe = require('../dist/unsafe.js');
} catch {
  unsafe = require('../../dist/unsafe.js');
}

test('properties on unsafe', () => {
  const fns = ['add', 'divide', 'each', 'eachLeft', 'eachRight'];
  for (let i = fns.length; i--; expect(unsafe[fns[i]]).toBeTruthy());
});
