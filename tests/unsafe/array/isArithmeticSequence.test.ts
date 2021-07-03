import i from '@/unsafe/array/isArithmeticSequence';
import { isArithmeticSequence as i2 } from '@/unsafe';
import { isArithmeticSequence as i3 } from '@/unsafe/array';
import { unsafe } from '@';

describe.each([i, i2, i3, unsafe.isArithmeticSequence])('%# - unsafe isArithmeticSequence', isArithmeticSequence => {
  test('isArithmeticSequence on a trivial cases', () => {
    const a = [1, 2, 3, 4, 5];
    expect(isArithmeticSequence(a)).toBe(true);
    const b = [5, 4, 3, 2, 1];
    expect(isArithmeticSequence(b)).toBe(true);
  });

  test('isArithmeticSequence on arrays with |increment| > 1', () => {
    const a = [11, 22, 33, 44, 55];
    expect(isArithmeticSequence(a)).toBe(true);
    const b = [55, 44, 33, 22, 11];
    expect(isArithmeticSequence(b)).toBe(true);
  });

  test('isArithmeticSequence on a non-arithmetic sequence', () => {
    const a = [1, 45, 645, 64, 56, 45, 6, 45, 6, 45, 64, 56];
    expect(isArithmeticSequence(a)).toBe(false);
  });

  test('isArithmeticSequence without array should error out', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fn = () => isArithmeticSequence();

    expect(fn).toThrow(TypeError);
  });
});
