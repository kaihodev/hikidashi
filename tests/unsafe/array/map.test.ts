import m from '@/unsafe/array/map';
import ml from '@/unsafe/array/mapLeft';
import { map as m2, mapRight as m3 } from '@/unsafe';
import { map as m4, mapRight as m5, mapLeft as ml2 } from '@/unsafe/array';
import { unsafe } from '@';

describe.each([m, m2, m3, m4, m5, unsafe.map, unsafe.mapRight, ml, ml2, unsafe.mapLeft])('%# - unsafe map', map => {
  test('mapping [1, 2, 3] with x * 2 should return [2, 4, 6]', () => {
    expect(map([1, 2, 3], (x: number) => x * 2)).toStrictEqual([2, 4, 6]);
  });

  test('mapping sparse array with x * 2 should have NaN values in returning array', () => {
    expect(map([,], (x: number) => x * 2)).toStrictEqual([NaN]); // eslint-disable-line no-sparse-arrays, comma-spacing
  });

  test('mapping [] with x * 2 should return []', () => {
    expect(map([], (x: number) => x * 2)).toStrictEqual([]);
  });

  test('mapping [1, 2, 3] without function should error out', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fn = () => map([1, 2, 3]);

    expect(fn).toThrow(TypeError);
  });
});
