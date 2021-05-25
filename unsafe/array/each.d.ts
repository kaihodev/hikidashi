import type { ArrayLike, ArrayCB } from '@/shared/generics';
/**
 * A non-spec compliant fast Array forEach.
 *
 * @remarks
 *
 * This implementation loops in reverse order.
 *
 * @param arr - The input array-like to loop through.
 * @param cb  - The callback provided. This iteratee is invoked with three arguments: value, index|key, and arr.
 *
 * @returns void
 */
declare const each: (arr: ArrayLike, cb: ArrayCB) => void;
export default each;
