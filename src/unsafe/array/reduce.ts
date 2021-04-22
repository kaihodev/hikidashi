import type { ArrayLike, ArrayReduceCB } from '@/shared/generics';

/**
 * A non-spec compliant fast Array map.
 *
 * @remarks
 *
 * This implementation loops in reverse order.
 *
 * @param arr - The input array-like to map through.
 * @param cb  - The callback provided to produce mapped results. This iteratee is invoked with three arguments: value, index|key, and arr.
 *
 * @returns unknown[] - The new mapped array.
 */
const reduce = (arr: ArrayLike, cb: ArrayReduceCB, initValue: any): unknown[] => {
  let i: any = initValue === undefined, L = arr.length, accum = i ? arr[0] : initValue; // eslint-disable-line prefer-const
  while (++i !== L) accum = cb(accum, arr[i], i, arr); // eslint-disable-line callback-return
  return accum;
};
export default reduce;
