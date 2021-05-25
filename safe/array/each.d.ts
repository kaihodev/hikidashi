import type { ArrayCBT, ArrayLike } from '@/shared/generics';
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
declare function each<Q extends ArrayLike = unknown[], T = Q[keyof Q]>(arr: Q, callback?: ArrayCBT<T>, thisArg?: unknown): void;
export default each;
