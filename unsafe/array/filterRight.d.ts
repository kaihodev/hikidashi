import type { ArrayLike, ArrayCB } from '@/shared/generics';
/**
 * A fast Array filter.
 *
 * @remarks
 *
 * This implementation loops in reverse order.
 *
 * @param arr - The input array-like to filter.
 * @param cb  - The callback provided to produce truthy/falsy. This iteratee is invoked with three arguments: value, index|key, and arr.
 *              It should return false for items to exclude.
 *
 * @returns typeof arr - The filtered results.
 */
export default function filterRight(arr: ArrayLike, cb: ArrayCB): typeof arr;
