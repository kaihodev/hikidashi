import m from '@/unsafe/array/mapip';
import ml from '@/unsafe/array/mapipLeft';
import { mapip as m2, mapipRight as m3 } from '@/unsafe';
import { mapip as m4, mapipRight as m5, mapipLeft as ml2 } from '@/unsafe/array';
import { unsafe } from '@';

describe.each([m, m2, m3, m4, m5, unsafe.mapip, unsafe.mapipRight, ml, ml2, unsafe.mapipLeft])('%# - unsafe mapip', map => {
  test('mapping [1, 2, 3] with x * 2 should return [2, 4, 6]', () => {
    const a = [1, 2, 3];
    const b = map(a, (x: number) => x * 2);
    expect(b).toStrictEqual([2, 4, 6]);
    expect(b).toBe(a);
  });

  test('mapping sparse array with x * 2 should have NaN values in returning array', () => {
    const a = [,]; // eslint-disable-line no-sparse-arrays, comma-spacing
    const b = map(a, (x: number) => x * 2);
    expect(b).toStrictEqual([NaN]);
    expect(b).toBe(a);
  });

  test('mapping [] with x * 2 should return []', () => {
    const a: unknown[] = [];
    const b = map(a, (x: number) => x * 2);
    expect(b).toStrictEqual([]);
    expect(b).toBe(a);
  });

  test('mapping [1, 2, 3] without function should error out', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fn = () => map([1, 2, 3]);

    expect(fn).toThrow(TypeError);
  });
});
