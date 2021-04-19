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
const map = (arr: ArrayLike, cb: ArrayCB): unknown[] => {
  let i = arr.length, result = Array(i); // eslint-disable-line prefer-const
  while (--i) result[i] = cb(arr[i], i, arr); // eslint-disable-line callback-return
  return result;
};
export default map;
