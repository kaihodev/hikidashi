import { divide } from '../../../../unsafe';

describe('unsafe divide', () => {
  test('divide default arg values to equal 1', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(divide()).toBeNaN();
  });

  test('divides 5 / 2 to equal 2.5', () => {
    expect(divide(5, 2)).toBe(2.5);
  });

  test('divides 5 / -2 to equal -2.5', () => {
    expect(divide(5, -2)).toBe(-2.5);
  });

  test('divides -5 / 7 to equal -0.7142857142857143', () => {
    expect(divide(-5, 7)).toBe(-0.7142857142857143);
  });

  test('divides \'5\' / 2 to equal 2.5', () => {
    expect(divide('5', 2)).toBe(2.5);
  });

  test('divides 5 / \'2\' to equal 2.5', () => {
    expect(divide(5, '2')).toBe(2.5);
  });

  test('divides \'5\' / \'2\' to equal 2.5', () => {
    expect(divide('5', '2')).toBe(2.5);
  });

  test('divides \'5\' / \'-7\' to equal -0.7142857142857143', () => {
    expect(divide('5', '-7')).toBe(-0.7142857142857143);
  });
});
