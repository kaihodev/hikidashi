import type { ArrayCBT, ArrayLike } from '@/shared/generics';
import identity from '@/safe/util/identity';

/**
 * A more-or-less spec-compliant Array filter.
 *
 * @remarks
 *
 * The publicly available polyfill on MDN as of mid-April, 2021 differs dramatically from the map polyfill.
 * This implementation attempts to bridge the two.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * @template Q - The type of the array-like being provided.
 * @template T - The type of elements in the array-like being provided.
 *
 * @param arr      - The input array-like to filter.
 * @param callback - The callback provided to produce booleans.
 *                   This iteratee is invoked with three arguments: value, index|key, and arr.
 *                   It should return false for items to exclude.
 * @param thisArg  - The value to use as `this` when executing callback.
 *
 * @returns T[] - The filtered results.
 */
function filter
  <Q extends ArrayLike = unknown[], T = Q[keyof Q]>(
  arr: Q, callback: ArrayCBT<T, boolean> = identity as ArrayCBT<T, boolean>, thisArg: unknown = undefined,
): T[] {
  if (arr == null) throw new TypeError('arr is null or not defined');
  const O = Object(arr);
  const L = O.length >>> 0;
  const A = Array(L) as T[];
  if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`);
  for (var c = 0, k = 0; k !== L; ++k) if (k in O) { // eslint-disable-line curly, no-var
    const kValue = O[k];
    if (callback.call(thisArg, kValue, k, O)) A[c++] = kValue;
  }
  A.length = c;
  return A;
}
export default filter;
