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
export default function mapLeft(arr: ArrayLike, cb: ArrayCB): unknown[] {
  let i = 0, L = arr.length, result = Array(i); // eslint-disable-line prefer-const
  while (i !== L) result[i] = cb(arr[i], i++, arr); // eslint-disable-line callback-return
  return result;
}
