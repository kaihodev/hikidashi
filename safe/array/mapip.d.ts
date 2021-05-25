import type { ArrayCBT, ArrayLike } from '@/shared/generics';
/**
 * A non-spec compliant fast Array map that *modifies the input array* and maps in-place.
 *
 * @remarks
 *
 * The mapip function should be used with caution due to its destructive nature.
 * We see promising use cases where you may iterate a map that is not used for any other purpose.
 * Consider the following: const users = [111, 112, 113, 114].map(id => database.fetchById(id));
 * The user ID array is not used, but all other traditional map implementations make an unnecessary allocation.
 *
 * If you are looking for raw speed, use the unsafe version, which outperforms everybody.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * @template Q - The type of the array-like being provided.
 * @template T - The type of elements in the array-like being provided.
 *
 * @param arr      - The input array-like to map through.
 * @param callback - The callback provided to produce mapped results.
 *                   This iteratee is invoked with three arguments: value, index|key, and arr.
 * @param thisArg  - The value to use as `this` when executing callback.
 *
 * @returns Q - The modified input
 */
declare function mapip<Q extends ArrayLike = unknown[], T = Q[keyof Q]>(arr: Q, callback?: ArrayCBT<T>, thisArg?: unknown): Q;
export default mapip;
