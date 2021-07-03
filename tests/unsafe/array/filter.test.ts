import f from '@/unsafe/array/filter';
import { filter as f2, filterLeft as f3 } from '@/unsafe';
import { filter as f4, filterLeft as f5 } from '@/unsafe/array';
import { unsafe } from '@';

describe.each([f, f2, f3, f4, f5, unsafe.filter, unsafe.filterLeft])('%# - unsafe filter', filter => {
  test('filter [0, 1, 0, 0, 2, 3, 0] with x => x should return [1, 2, 3]', () => {
    expect(filter([0, 1, 0, 0, 2, 3, 0], (x: boolean) => x)).toStrictEqual([1, 2, 3]);
  });

  test('filter sparse array with x => x should remove empty values', () => {
    expect(filter([1,,,,,,,,,,,,,,,,1], (x: boolean) => x)).toStrictEqual([1, 1]); // eslint-disable-line no-sparse-arrays, comma-spacing
  });

  test('filter with NaN should return [NaN, "a", NaN]', () => {
    expect(filter([NaN, 0, 'a', '1', 0 / 0, 2], isNaN)).toStrictEqual([NaN, 'a', NaN]);
  });
  test('filtering [1, 2, 3] without function should error out', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fn = () => filter([1, 2, 3]);

    expect(fn).toThrow(TypeError);
  });
});
