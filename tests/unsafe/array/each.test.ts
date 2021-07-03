import e from '@/unsafe/array/each';
import { each as e2, eachRight as e3, forEach as e4 } from '@/unsafe';
import { each as e5, eachRight as e6, forEach as e7 } from '@/unsafe/array';
import { unsafe } from '@';

describe.each([e, e2, e3, e4, e5, e6, e7, unsafe.each, unsafe.eachRight, unsafe.forEach])('%# - unsafe each', each => {
  test('each [1, 2, 3] with a pusher should make [3, 2, 1]', () => {
    const a: number[] = [];
    each([1, 2, 3], (x: number) => a.push(x));
    expect(a).toStrictEqual([3, 2, 1]);
  });

  test('each sparse array pushing x * 2 should have NaN in pushed array', () => {
    const a: unknown[] = [];
    const fn = jest.fn((x: any) => a.push(x * 2));
    expect(each([,], fn)).toBe(undefined); // eslint-disable-line no-sparse-arrays, comma-spacing
    expect(fn).toHaveBeenCalledTimes(1);
    expect(a).toStrictEqual([NaN]);
  });

  test('each [] with x * 2 should not run callback', () => {
    const cb = jest.fn();
    expect(each([], cb)).toBe(undefined);
    expect(cb).not.toHaveBeenCalled();
  });

  test('each [1, 2, 3] without function should error out', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fn = () => each([1, 2, 3]);

    expect(fn).toThrow(TypeError);
  });
});
