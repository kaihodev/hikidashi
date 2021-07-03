import d from '@/safe/math/divide';
import { divide as d2 } from '@/safe';
import { safe } from '@';

describe.each([d, d2, safe.divide])('%# - safe divide', divide => {
  test('divide default arg values to equal 1', () => {
    expect(divide()).toBe(1);
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
