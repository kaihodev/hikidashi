import i from '@/unsafe/array/includes';
import { includes as i2, includesLeft as i3 } from '@/unsafe';
import { includes as i4, includesLeft as i5 } from '@/unsafe/array';
import { unsafe } from '@';

describe.each([i, i2, i3, i4, i5, unsafe.includes, unsafe.includesLeft])('%# - unsafe includes', includes => {
  test('includes [11, 22, 33] with 22 should return true', () => {
    expect(includes([11, 22, 33], 22)).toBe(true);
  });

  test('includes sparse array with undefined should return true', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(includes([11,,,,,,])).toBe(true); // eslint-disable-line no-sparse-arrays, comma-spacing
  });

  test('includes [11, 22, 33] with 22 with fromIndex of 3 should return true', () => {
    expect(includes([11, 22, 33, 11, 22, 33], 22, 3)).toBe(true);
  });

  test('indexOf [11, 22, 33] with 44 should return false', () => {
    expect(includes([11, 22, 33], 44)).toBe(false);
  });
});
