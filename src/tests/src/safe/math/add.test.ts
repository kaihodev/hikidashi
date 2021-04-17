import { add } from '../../../../safe';

describe('safe add', () => {
  test('add default arg values to equal 0', () => {
    expect(add()).toBe(0);
  });

  test('adds 5 + 2 to equal 7', () => {
    expect(add(5, 2)).toBe(7);
  });

  test('adds 5 + -2 to equal 3', () => {
    expect(add(5, -2)).toBe(3);
  });

  test('adds 5 + -7 to equal -2', () => {
    expect(add(5, -7)).toBe(-2);
  });

  test('adds \'5\' + 7 to equal 12', () => {
    expect(add('5', 7)).toBe(12);
  });

  test('adds 5 + \'7\' to equal 12', () => {
    expect(add(5, '7')).toBe(12);
  });

  test('adds \'5\' + \'7\' to equal 12', () => {
    expect(add('5', '7')).toBe(12);
  });

  test('adds \'5\' + \'-7\' to equal -2', () => {
    expect(add('5', '-7')).toBe(-2);
  });
});
