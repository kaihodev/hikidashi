import f from '@/unsafe/array/filterRight';
import { filterRight as f2 } from '@/unsafe';
import { filterRight as f3 } from '@/unsafe/array';
import { unsafe } from '@';

describe.each([f, f2, f3, unsafe.filterRight])('%# - unsafe filterRight', filterRight => {
  test('filterRight [0, 1, 0, 0, 2, 3, 0] with x => x should return [3, 2, 1]', () => {
    expect(filterRight([0, 1, 0, 0, 2, 3, 0], (x: boolean) => x)).toStrictEqual([3, 2, 1]);
  });

  test('filterRight sparse array with x => x should remove empty values', () => {
    // eslint-disable-next-line no-sparse-arrays, comma-spacing
    expect(filterRight([1,,,,,,,,,,,,,,,,1], (x: boolean) => x)).toStrictEqual([1, 1]);
  });

  test('filterRight with NaN should return [NaN, "a", NaN]', () => {
    expect(filterRight([NaN, 0, 'a', '1', 0 / 0, 2], isNaN)).toStrictEqual([NaN, 'a', NaN]);
  });
  test('filtering [1, 2, 3] without function should error out', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fn = () => filterRight([1, 2, 3]);

    expect(fn).toThrow(TypeError);
  });
});
