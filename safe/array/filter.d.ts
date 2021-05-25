import type { ArrayCBT, ArrayLike } from '@/shared/generics';
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
declare function filter<Q extends ArrayLike = unknown[], T = Q[keyof Q]>(arr: Q, callback?: ArrayCBT<T, boolean>, thisArg?: unknown): T[];
export default filter;
