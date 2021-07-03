import r from '@/unsafe/array/reduce';
import { reduce as r2, reduceLeft as r3 } from '@/unsafe';
import { reduce as r4, reduceLeft as r5 } from '@/unsafe/array';
import { unsafe } from '@';

describe.each([r, r2, r3, r4, r5, unsafe.reduce, unsafe.reduceLeft])('%# - unsafe reduce', reduce => {
  test('reduce [1, 2, 3] with add should return 6', () => {
    expect(reduce([1, 2, 3], (a: number, b: number) => a + b)).toBe(6);
  });

  test('reduce [1, 2, 3] with add and initial value should return 106', () => {
    expect(reduce([1, 2, 3], (a: number, b: number) => a + b, 100)).toBe(106);
  });

  test('reduce [100, 25, 30] with subtract should return 45', () => {
    expect(reduce([100, 25, 30], (a: number, b: number) => a - b)).toBe(45);
  });

  test('reduce [] should not run callback', () => {
    const cb = jest.fn();
    expect(reduce([], cb)).toBe(undefined);
    expect(cb).not.toHaveBeenCalled();
  });

  test('reduce [1, 2, 3] without function should error out', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fn = () => reduce([1, 2, 3]);

    expect(fn).toThrow(TypeError);
  });
});
