import type { ArrayLike } from '@/shared/generics';

/**
 * A function that checks whether a provided array-like contains numbers in an arithmetic sequence.
 *
 * @remarks
 * This function implicitly assumes that the provided array will contain a length of at least 1.
 *
 * @param arr - The input array-like to check.
 *
 * @returns boolean - true or false result.
 */
export default function isArithmeticSequence(a: ArrayLike): boolean {
  let i = a.length - 1;
  const diff = a[1] - a[0];
  while (i) if (diff !== a[i] - a[--i]) return false;
  return true;
}
