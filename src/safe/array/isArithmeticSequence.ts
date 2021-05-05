import type { NumberLike } from '@/shared/generics';

/**
 * A function that checks whether a provided array contains numbers in an arithmetic sequence.
 *
 * @remarks
 * If the provided array has a length of 0 or 1, true is returned.
 *
 * @param arr - The input array to check.
 *
 * @returns boolean - true or false result.
 */
export default function isArithmeticSequence(a: NumberLike[]): boolean {
  let i = a.length;
  if (!i || !--i) return true;
  const diff = +a[1] - +a[0];
  while (i) if (diff !== +a[i] - +a[--i]) return false;
  return true;
}
