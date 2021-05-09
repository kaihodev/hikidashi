import type { ArrayLike, ArrayCB } from '@/shared/generics';

/**
 * A non-spec compliant fast Array forEach.
 *
 * @remarks
 *
 * This implementation loops "normally," in normal order.
 *
 * @param arr - The input array-like to loop through.
 * @param cb  - The callback provided. This iteratee is invoked with three arguments: value, index|key, and arr.
 *
 * @returns void
 */
const eachLeft = (arr: ArrayLike, cb: ArrayCB): void => {
  let i = 0, L = arr.length; // eslint-disable-line prefer-const
  while (i !== L) cb(arr[i], i++, arr); // eslint-disable-line callback-return
};
export default eachLeft;
