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
 * @param t   - The value to use as `this` when executing callback.
 *
 * @returns unknown[] - The new mapped array.
 */
const map = (arr: ArrayLike, cb: ArrayCB, t: unknown = undefined): unknown[] => {
  // eslint-disable-next-line no-var
  for (var i = arr.length, result = Array(i); i--; result[i] = cb.call(t, arr[i], i, arr));
  return result;
};
export default map;
