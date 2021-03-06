import type { ArrayLike } from '@/shared/generics';

/**
 * Joins elements in an array via a separator string.
 *
 * @param arr - The input array-like to join.
 * @param sep - The separator to join with.
 *
 * @returns string - The joined array.
 */
const join = (arr: ArrayLike, sep: string): string => arr.join(sep);
export default join;
