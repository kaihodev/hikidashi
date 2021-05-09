import type { ArrayLike, ArrayCB } from '@/shared/generics';

/**
 * A fast Array partitioner.
 *
 * @remakrs
 *
 * This implementation loops "normally," in normal order.
 *
 * @param arr - The input array-like to filter.
 * @param cb  - The callback provided to produce EITHER truthy/falsy OR numberical indices to indicate the correct bucket.
 *              This iteratee is invoked with three arguments: value, index|key, and arr.
 *
 * @returns (typeof arr)[] - The partitioned results.
 */
function partitionLeft(arr: ArrayLike, cb: ArrayCB): (typeof arr)[] {
  const result = [[], []];
  // eslint-disable-next-line callback-return
  for (let a, e, i = arr.length; i--; (a[a.length] as any) = e) a = result[cb(e = arr[i], i, arr) as any] ||= [];
  return result;
}
export default partitionLeft;
