import e from '@/unsafe/array/eachLeft';
import { eachLeft as e2 } from '@/unsafe';
import { eachLeft as e3 } from '@/unsafe/array';
import { unsafe } from '@';

describe.each([e, e2, e3, unsafe.eachLeft])('%# - unsafe eachLeft', eachLeft => {
  test('eachLeft [1, 2, 3] with a pusher should make [1, 2, 3]', () => {
    const a: number[] = [];
    eachLeft([1, 2, 3], (x: number) => a.push(x));
    expect(a).toStrictEqual([1, 2, 3]);
  });

  test('eachLeft sparse array pushing x * 2 should have NaN in pushed array', () => {
    const a: unknown[] = [];
    const fn = jest.fn((x: any) => a.push(x * 2));
    expect(eachLeft([,], fn)).toBe(undefined); // eslint-disable-line no-sparse-arrays, comma-spacing
    expect(fn).toHaveBeenCalledTimes(1);
    expect(a).toStrictEqual([NaN]);
  });

  test('eachLeft [] with x * 2 should not run callback', () => {
    const cb = jest.fn();
    expect(eachLeft([], cb)).toBe(undefined);
    expect(cb).not.toHaveBeenCalled();
  });

  test('eachLeft [1, 2, 3] without function should error out', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fn = () => eachLeft([1, 2, 3]);

    expect(fn).toThrow(TypeError);
  });
});
