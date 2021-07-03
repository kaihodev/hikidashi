import e from '@/unsafe/array/invokeEach';
import { invokeEach as e2, invokeEachRight as e3 } from '@/unsafe';
import { invokeEach as e4, invokeEachRight as e5 } from '@/unsafe/array';
import { unsafe } from '@';

describe.each([e, e2, e3, e4, e5, unsafe.invokeEach, unsafe.invokeEachRight])('%# - unsafe each', each => {
  test('invokeEach on a trivial case to generate [3, 2, 1] from [1, 1, 1]', () => {
    const a: number[] = [];
    each([(x: number) => a.push(x), (x: number) => a.push(x * 2), (x: number) => a.push(x * 3)], [1, 1, 1]);
    expect(a).toStrictEqual([3, 2, 1]);
  });

  test('invokeEach should call each function separately, with no arguments provided leading to NaN from x * 2', () => {
    const N = 5;
    const a: unknown[] = [];
    const fn = jest.fn((x: any) => a.push(x * 2));
    expect(each(Array(N).fill(fn))).toBe(undefined);
    expect(fn).toHaveBeenCalledTimes(5);
    expect(a).toStrictEqual(Array(N).fill(NaN));
  });

  test('invokeEach with [] should not error', () => {
    expect(each([])).toBe(undefined);
  });

  test('invokeEach without array should error out', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fn = () => each();

    expect(fn).toThrow(TypeError);
  });
});
