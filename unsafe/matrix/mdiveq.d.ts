import type { ArrayLike } from '@/shared/generics';
/**
 * Divides two arrays back into and *modifying the first array* as if a /= b.
 *
 * @remarks
 *
 * This implementation loops in reverse order.
 * The mdiveq function should be used with caution due to its destructive nature.
 * We implicitly assume that the second array contains at least as many elements as the first.
 *
 * @param a - The dividend, first input array-like to divide and modify.
 * @param b - The divisor, second input array-like to divide.
 *
 * @returns typeof a - The modified input.
 */
declare const mdiveq: (a: ArrayLike, b: ArrayLike) => any;
export default mdiveq;
