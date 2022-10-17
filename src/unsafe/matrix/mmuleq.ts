import type { ArrayLike } from '@/shared/generics';

/**
 * Multiplies two arrays back into and *modifying the first array* as if a -= b.
 *
 * @remarks
 *
 * This implementation loops in reverse order.
 * The mmuleq function should be used with caution due to its destructive nature.
 * We implicitly assume that the second array contains at least as many elements as the first.
 *
 * @param a - The minuend, first input array-like to subtract and modify.
 * @param b - The subtrahend, second input array-like to subtract.
 *
 * @returns typeof a - The modified input.
 */
const mmuleq = (a: ArrayLike, b: ArrayLike): typeof a => {
  let i = a.length;
  while (i--) a[i] *= b[i];
  return a;
};
export default mmuleq;
