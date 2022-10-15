import type { ArrayLike } from '@/shared/generics';
/**
 * Adds two arrays together, but *modifies the first array* as if a += b.
 *
 * @remarks
 *
 * This implementation loops in reverse order.
 * The maddeq function should be used with caution due to its destructive nature.
 * We implicitly assume that the second array contains at least as many elements as the first.
 *
 * @param a - The augend, first input array-like to add and modify.
 * @param b - The addend, second input array-like to add.
 *
 * @returns typeof a - The modified input.
 */
declare const maddeq: (a: ArrayLike, b: ArrayLike) => any;
export default maddeq;
