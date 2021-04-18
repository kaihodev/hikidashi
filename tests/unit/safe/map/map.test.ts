import { map } from '@/safe';

describe('safe map', () => {
  test('mapping [1, 2, 3] with x * 2 should return [2, 4, 6]', () => {
    expect(map([1, 2, 3], (x: number) => x * 2)).toStrictEqual([2, 4, 6]);
  });

  test('mapping sparse array with x * 2 should return [,]', () => {
    expect(map([,], (x: number) => x * 2)).toStrictEqual([,]);
  });

  test('mapping [] with x * 2 should return []', () => {
    expect(map([], (x: number) => x * 2)).toStrictEqual([]);
  });

  test('mapping [1, 2, 3] with default function should return [1, 2, 3]', () => {
    expect(map([1, 2, 3])).toStrictEqual([1, 2, 3]);
  });
});
