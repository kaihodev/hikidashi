import r from '@/safe/math/remainder';
import { remainder as r2 } from '@/safe';
import { safe } from '@';

describe.each([r, r2, safe.remainder])('%# - safe remainder', remainder => {
  test('remainder default arg values to equal 0', () => {
    expect(remainder()).toBe(0);
  });

  test('remainder of 5 and 3 to equal 2', () => {
    expect(remainder(5, 3)).toBe(2);
  });

  test('remainder of -5 and 3 to equal -2', () => {
    expect(remainder(-5, 3)).toBe(-2);
  });

  test('remainder of 5 and -3 to equal 2', () => {
    expect(remainder(5, -3)).toBe(2);
  });

  test('remainder of \'5\' and 3 to equal 2', () => {
    expect(remainder('5', 3)).toBe(2);
  });

  test('remainder of 5 and \'3\' to equal 2', () => {
    expect(remainder(5, '3')).toBe(2);
  });

  test('remainder of \'5\' and \'3\' to equal 2', () => {
    expect(remainder('5', '3')).toBe(2);
  });
});
