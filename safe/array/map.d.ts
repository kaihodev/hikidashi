import type { ArrayCBT, ArrayLike } from '@/shared/generics';
/**
 * A more-or-less spec-compliant Array map.
 *
 * @remarks
 *
 * Certain steps in the spec have been omitted through the use of es6 features or for performance.
 * This implementation outperforms built-in .map but runs measurably worse than other non-spec-compliant solutions out there.
 * If you are looking for raw speed, use the unsafe version of mapip, which outperforms everybody.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * @template Q - The type of the array-like being provided.
 * @template T - The type of elements in the array-like being provided.
 * @template R - The return value of the provided callback, and thus, type of resulting array elements.
 *
 * @param arr      - The input array-like to map through.
 * @param callback - The callback provided to produce mapped results.
 *                   This iteratee is invoked with three arguments: value, index|key, and arr.
 * @param thisArg  - The value to use as `this` when executing callback.
 *
 * @returns R[] - The new mapped array.
 */
declare function map<Q extends ArrayLike = unknown[], T = Q[keyof Q], R = T>(arr: Q, callback?: ArrayCBT<T, R>, thisArg?: unknown): R[];
export default map;
