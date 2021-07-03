import s from '@/unsafe/math/subtract';
import { subtract as s2 } from '@/unsafe';
import { unsafe } from '@';

describe.each([s, s2, unsafe.subtract])('%# - unsafe subtract', subtract => {
  test('subtract default arg values to equal 0', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(subtract()).toBeNaN();
  });

  test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('subtracts 5 - +2 to equal 7', () => {
    expect(subtract(5, +2)).toBe(3);
  });

  test('subtracts 5 - -7 to equal 12', () => {
    expect(subtract(5, -7)).toBe(12);
  });

  test('subtracts \'5\' - 7 to equal -2', () => {
    expect(subtract('5', 7)).toBe(-2);
  });

  test('subtracts 5 - \'7\' to equal -2', () => {
    expect(subtract(5, '7')).toBe(-2);
  });

  test('subtracts \'5\' - \'7\' to equal -2', () => {
    expect(subtract('5', '7')).toBe(-2);
  });

  test('subtracts \'5\' - \'-7\' to equal 12', () => {
    expect(subtract('5', '-7')).toBe(12);
  });
});
