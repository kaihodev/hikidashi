import { subtract } from '../../../safe';

describe('safe subtract', () => {
  test('subtract default arg values to equal 0', () => {
    expect(subtract()).toBe(0);
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
