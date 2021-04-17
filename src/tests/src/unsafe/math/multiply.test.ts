import { multiply } from '../../../../unsafe';

describe('unsafe multiply', () => {
  test('multiply default arg values to equal 1', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(multiply()).toBeNaN();
  });

  test('multiples 5 * 2 to equal 10', () => {
    expect(multiply(5, 2)).toBe(10);
  });

  test('multiples 5 * -2 to equal -10', () => {
    expect(multiply(5, -2)).toBe(-10);
  });

  test('multiples -5 * 7 to equal -35', () => {
    expect(multiply(-5, 7)).toBe(-35);
  });

  test('multiples \'5\' * 7 to equal -2', () => {
    expect(multiply('5', 7)).toBe(35);
  });

  test('multiples 5 * \'7\' to equal 35', () => {
    expect(multiply(5, '7')).toBe(35);
  });

  test('multiples \'5\' * \'7\' to equal 35', () => {
    expect(multiply('5', '7')).toBe(35);
  });

  test('multiples \'5\' * \'-7\' to equal -35', () => {
    expect(multiply('5', '-7')).toBe(-35);
  });
});
