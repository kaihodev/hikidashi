import a from '@/unsafe/math/add';
import { add as a2 } from '@/unsafe';
import { unsafe } from '@';

describe.each([a, a2, unsafe.add])('%# - unsafe add', add => {
  test('add default arg values to be NaN', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(add()).toBeNaN();
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
    expect(add('5', 7)).not.toBe(12);
  });

  test('adds 5 + \'7\' to equal 12', () => {
    expect(add(5, '7')).not.toBe(12);
  });

  test('adds \'5\' + \'7\' to equal 12', () => {
    expect(add('5', '7')).not.toBe(12);
  });

  test('adds \'5\' + \'-7\' to equal -2', () => {
    expect(add('5', '-7')).not.toBe(-2);
  });
});
