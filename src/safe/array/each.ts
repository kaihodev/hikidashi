import type { ArrayCBT, ArrayLike } from '@/shared/generics';
import identity from '@/safe/util/identity';

/**
 * A more-or-less spec-compliant Array forEach.
 *
 * @remarks
 *
 * This implementation loops in reverse order.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * @template Q - The type of the array-like being provided.
 * @template T - The type of elements in the array-like being provided.
 *
 * @param arr      - The input array-like to loop through.
 * @param callback - The callback provided.
 *                   This iteratee is invoked with three arguments: value, index|key, and arr.
 * @param thisArg  - The value to use as `this` when executing callback.
 *
 * @returns void
 */
function each
  <Q extends ArrayLike = unknown[], T = Q[keyof Q]>(
  arr: Q, callback: ArrayCBT<T> = identity as ArrayCBT<T>, thisArg: unknown = undefined,
): void {
  if (arr == null) throw new TypeError('arr is null or not defined');
  const O = Object(arr);
  const L = O.length >>> 0;
  if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`);
  for (let k = 0; k !== L; ++k) if (k in O) { // eslint-disable-line curly
    const kValue = O[k];
    callback.call(thisArg, kValue, k, O);
  }
}
export default each;
