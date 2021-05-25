import type { ArrayLike, ArrayCB } from '@/shared/generics';
/**
 * A non-spec compliant fast Array map.
 *
 * @remarks
 *
 * This implementation loops in reverse order.
 *
 * @param arr - The input array-like to map through.
 * @param cb  - The callback provided to produce mapped results. This iteratee is invoked with three arguments: value, index|key, and arr.
 *
 * @returns unknown[] - The new mapped array.
 */
declare const map: (arr: ArrayLike, cb: ArrayCB) => unknown[];
export default map;
