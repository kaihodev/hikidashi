import type { ArrayLike, ArrayCB } from '@/shared/generics';
/**
 * A non-spec compliant fast Array map that *modifies the input array* and maps in-place.
 *
 * @remarks
 *
 * This implementation loops in reverse order.
 * The mapip function should be used with caution due to its destructive nature.
 * We see promising use cases where you may iterate a map that is not used for any other purpose.
 * Consider the following: const users = [111, 112, 113, 114].map(id => database.fetchById(id));
 * The user ID array is not used, but all other traditional map implementations make an unnecessary allocation.
 *
 * @param arr - The input array-like to map through.
 * @param cb  - The callback provided to produce mapped results. This iteratee is invoked with three arguments: value, index|key, and arr.
 *
 * @returns typeof arr - The modified input.
 */
declare const mapip: (arr: ArrayLike, cb: ArrayCB) => any;
export default mapip;
