import m from '@/safe/math/modulo';
import { modulo as m2 } from '@/safe';
import { safe } from '@';

describe.each([m, m2, safe.modulo])('%# - safe modulo', modulo => {
  test('modulo default arg values to equal 0', () => {
    expect(modulo()).toBe(0);
  });

  test('modulo of 5 and 3 to equal 2', () => {
    expect(modulo(5, 3)).toBe(2);
  });

  test('modulo of -5 and 3 to equal 1', () => {
    expect(modulo(-5, 3)).toBe(1);
  });

  test('modulo of 5 and -3 to equal -1', () => {
    expect(modulo(5, -3)).toBe(-1);
  });

  test('modulo of \'5\' and 3 to equal 2', () => {
    expect(modulo('5', 3)).toBe(2);
  });

  test('modulo of 5 and \'3\' to equal 2', () => {
    expect(modulo(5, '3')).toBe(2);
  });

  test('modulo of \'5\' and \'3\' to equal 2', () => {
    expect(modulo('5', '3')).toBe(2);
  });
});
