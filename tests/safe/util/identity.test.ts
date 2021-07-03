import i from '@/safe/util/identity';
import { identity as i2 } from '@/safe';
import { safe } from '@';

describe.each([i, i2, safe.identity])('%# - safe identity', identity => {
  test('identity of 1 should return 1', () => {
    expect(identity(1)).toBe(1);
  });

  test('identity of an array of numbers should return an array of numbers identical to the passed', () => {
    expect(identity([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
