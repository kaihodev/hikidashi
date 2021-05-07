import { identity } from '@/safe';

describe('safe identity', () => {
  test('identity of 1 should return 1', () => {
    expect(identity(1)).toBe(1);
  });

  test('identity of an array of numbers should return an array of numbers identical to the passed', () => {
    expect(identity([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
