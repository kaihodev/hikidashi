import p from '@/unsafe/array/partition';
import { partition as p2, partitionRight as p3 } from '@/unsafe';
import { partition as p4, partitionRight as p5 } from '@/unsafe/array';
import { unsafe } from '@';

describe.each([p, p2, p3, p4, p5, unsafe.partition, unsafe.partitionRight])('%# - unsafe partition', partition => {
  test('partition [0, 1, 0, 0, 2, 3, 0] with x => x % 2 should split by even/odd and return [0, 2, 0, 0, 0] and [3, 1]', () => {
    expect(partition([0, 1, 0, 0, 2, 3, 0], (x: number) => x % 2)).toStrictEqual([[0, 2, 0, 0, 0], [3, 1]]);
  });

  test('partition sparse array with x => x should group empty values into undefined', () => {
    type T = any[] & { undefined: any[] };
    // eslint-disable-next-line no-sparse-arrays, comma-spacing
    const result = partition([1,,,,,,,,,,,,,,,,1, 0], (x: boolean) => x) as T;
    const expected = [[0], [1, 1]] as T;
    expected.undefined = Array(15).fill(undefined);
    expect(result[0]).toStrictEqual(expected[0]);
    expect(result[1]).toStrictEqual(expected[1]);
    expect(result.undefined).toStrictEqual(expected.undefined);
    expect(result).toStrictEqual(expected);
  });

  test('partition [0, 1, 2, 3, ... , 17] into equal sized chunks up to N', () => {
    const N = 4;
    const cb = (_: number, i: number) => 0 | i / N;
    const a = Array(18).fill(0).map((_: number, i: number) => i);
    expect(partition(a, cb)).toStrictEqual([[3, 2, 1, 0], [7, 6, 5, 4], [11, 10, 9, 8], [15, 14, 13, 12], [17, 16]]);
  });

  test('partition [1, 2, 3] without function should error out', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fn = () => partition([1, 2, 3]);

    expect(fn).toThrow(TypeError);
  });
});
