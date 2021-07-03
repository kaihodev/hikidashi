import p from '@/unsafe/array/partitionLeft';
import { partitionLeft as p2 } from '@/unsafe';
import { partitionLeft as p3 } from '@/unsafe/array';
import { unsafe } from '@';

describe.each([p, p2, p3, unsafe.partitionLeft])('%# - unsafe partitionLeft', partitionLeft => {
  test('partitionLeft [0, 1, 0, 0, 2, 3, 0] with x => x % 2 should split by even/odd and return [0, 0, 0, 2, 0] and [1, 3]', () => {
    expect(partitionLeft([0, 1, 0, 0, 2, 3, 0], (x: number) => x % 2)).toStrictEqual([[0, 0, 0, 2, 0], [1, 3]]);
  });

  test('partitionLeft sparse array with x => x should group empty values into undefined', () => {
    type T = any[] & { undefined: any[] };
    // eslint-disable-next-line no-sparse-arrays, comma-spacing
    const result = partitionLeft([1,,,,,,,,,,,,,,,,1, 0], (x: boolean) => x) as T;
    const expected = [[0], [1, 1]] as T;
    expected.undefined = Array(15).fill(undefined);
    expect(result[0]).toStrictEqual(expected[0]);
    expect(result[1]).toStrictEqual(expected[1]);
    expect(result.undefined).toStrictEqual(expected.undefined);
    expect(result).toStrictEqual(expected);
  });

  test('partitionLeft [0, 1, 2, 3, ... , 17] into equal sized chunks up to N', () => {
    const N = 4;
    const cb = (_: number, i: number) => 0 | i / N;
    const a = Array(18).fill(0).map((_: number, i: number) => i);
    expect(partitionLeft(a, cb)).toStrictEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], [16, 17]]);
  });

  test('partitionLeft [1, 2, 3] without function should error out', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fn = () => partitionLeft([1, 2, 3]);

    expect(fn).toThrow(TypeError);
  });
});
