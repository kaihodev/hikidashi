import i from '@/unsafe/array/indexOf';
import { indexOf as i2, indexOfLeft as i3 } from '@/unsafe';
import { indexOf as i4, indexOfLeft as i5 } from '@/unsafe/array';
import { unsafe } from '@';

describe.each([i, i2, i3, i4, i5, unsafe.indexOf, unsafe.indexOfLeft])('%# - unsafe indexOf', indexOf => {
  test('indexOf [11, 22, 33] with 22 should return 1', () => {
    expect(indexOf([11, 22, 33], 22)).toBe(1);
  });

  test('indexOf sparse array with undefined should return 1, the location of first empty', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(indexOf([11,,,,,,])).toBe(1); // eslint-disable-line no-sparse-arrays, comma-spacing
  });

  test('indexOf [11, 22, 33] with 22 with fromIndex of 3 should return 4', () => {
    expect(indexOf([11, 22, 33, 11, 22, 33], 22, 3)).toBe(4);
  });

  test('indexOf [11, 22, 33] with 44 should return -1', () => {
    expect(indexOf([11, 22, 33], 44)).toBe(-1);
  });
});
