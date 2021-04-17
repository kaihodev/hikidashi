import { modulo } from '../../../../unsafe';

describe('unsafe modulo', () => {
  test('modulo default arg values to equal 0', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(modulo()).toBeNaN();
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
