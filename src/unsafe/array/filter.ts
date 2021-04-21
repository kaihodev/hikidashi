import type { ArrayLike, ArrayCB } from '@/shared/generics';

/**
 * A fast Array filter.
 *
 * @param arr - The input array-like to filter.
 * @param cb  - The callback provided to produce truthy/falsy. This iteratee is invoked with three arguments: value, index|key, and arr.
 *              It should return false for items to exclude.
 *
 * @returns typeof arr - The filtered results.
 */
const filter = (arr: ArrayLike, cb: ArrayCB): typeof arr => {
  const L = arr.length, result = Array(L);
  for (var e, c = -1, i = 0; i !== L; ++i) { // eslint-disable-line no-var
    e = arr[i];
    if (cb(e, i, arr)) result[++c] = e; // eslint-disable-line callback-return
  }
  result.length = c;
  return result;
};
export default filter;
