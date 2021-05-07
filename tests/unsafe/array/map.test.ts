import { map } from '@/unsafe';

describe('unsafe map', () => {
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
    const fn = () => map([1, 2, 3]);

    expect(fn).toThrow(TypeError);
  });
});
