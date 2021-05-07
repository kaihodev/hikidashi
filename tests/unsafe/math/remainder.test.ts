import { remainder } from '@/unsafe';

describe('unsafe remainder', () => {
  test('remainder default arg values to equal 0', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(remainder()).toBeNaN();
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
