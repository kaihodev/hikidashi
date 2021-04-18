import type { ArrayCBT, ArrayLike } from '@/shared/generics';
import identity from '@/safe/util/identity';

/**
 * A more-or-less spec-compliant Array map.
 *
 * @remarks
 *
 * Certain steps in the spec have been omitted through the use of es6 features or for performance.
 * This implementation outperforms built-in .map but runs measurably worse than other non-spec-compliant solutions out there.
 * If you are looking for raw speed, use the unsafe version, which outperforms everybody.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * @template T - The type of array-like being provided.
 * @template R - The return value of the provided callback, and thus, type of resulting array elements.
 *
 * @param arr      - The input array-like to map through.
 * @param callback - The callback provided to produce mapped results.
 *                   This iteratee is invoked with three arguments: value, index|key, and arr.
 * @param thisArg  - The value to use as `this` when executing callback.
 *
 * @returns R[] - The new mapped array.
 */
function map
  <T extends ArrayLike = unknown[], R = unknown>(arr: T, callback: ArrayCBT<T[keyof T], R> = identity, thisArg: unknown = undefined): R[] {
  if (arr == null) throw new TypeError('arr is null or not defined');
  const O = Object(arr);
  const L = O.length >>> 0;
  const A = Array(L);
  if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`);
  for (let k = 0; k !== L; ++k) if (k in arr) { // eslint-disable-line curly
    const kValue = O[k];
    const mappedValue = callback.call(thisArg, kValue, k, O);
    A[k] = mappedValue;
  }
  return A;
}
export default map;
