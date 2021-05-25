import type { ArrayLike, ArrayCB } from '@/shared/generics';
/**
 * A non-spec compliant fast Array map.
 *
 * @remarks
 *
 * This implementation loops "normally," in normal order.
 *
 * @param arr - The input array-like to map through.
 * @param cb  - The callback provided to produce mapped results. This iteratee is invoked with three arguments: value, index|key, and arr.
 *
 * @returns unknown[] - The new mapped array.
 */
export default function mapLeft(arr: ArrayLike, cb: ArrayCB): unknown[];
