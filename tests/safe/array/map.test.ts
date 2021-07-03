import m from '@/safe/array/map';
import { map as m2 } from '@/safe';
import { safe } from '@';

describe.each([m, m2, safe.map])('%# - safe map', map => {
  test('mapping [1, 2, 3] with x * 2 should return [2, 4, 6]', () => {
    expect(map([1, 2, 3], (x: number) => x * 2)).toStrictEqual([2, 4, 6]);
  });

  test('mapping sparse array with x * 2 should return [,,]', () => {
    expect(map([,,], (x: number) => x * 2)).toStrictEqual([,,]); // eslint-disable-line no-sparse-arrays, comma-spacing
  });

  test('mapping [] with x * 2 should return []', () => {
    expect(map([], (x: number) => x * 2)).toStrictEqual([]);
  });

  test('mapping [1, 2, 3] with default function should return [1, 2, 3]', () => {
    expect(map([1, 2, 3])).toStrictEqual([1, 2, 3]);
  });
});
