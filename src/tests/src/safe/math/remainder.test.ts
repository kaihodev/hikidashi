import { remainder } from '../../../../safe';

describe('safe remainder', () => {
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
