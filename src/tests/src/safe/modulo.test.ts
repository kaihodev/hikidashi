import { modulo } from '../../../safe';

describe('safe modulo', () => {
  test('modulo default arg values to equal 0', () => {
    expect(modulo()).toBe(0);
  });

  test('modulo of 5 and 3 to equal 1', () => {
    expect(modulo(5, 3)).toBe(1);
  });

  test('modulo of -5 and 3 to equal -1', () => {
    expect(modulo(-5, 3)).toBe(-1);
  });

  test('modulo of 5 and -3 to equal 1', () => {
    expect(modulo(5, -3)).toBe(1);
  });

  test('modulo of \'5\' and 3 to equal 1', () => {
    expect(modulo('5', 3)).toBe(1);
  });

  test('modulo of 5 and \'3\' to equal 1', () => {
    expect(modulo(5, '3')).toBe(1);
  });

  test('modulo of \'5\' and \'3\' to equal 1', () => {
    expect(modulo('5', '3')).toBe(1);
  });
});
