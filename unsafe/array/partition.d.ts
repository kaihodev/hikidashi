import type { ArrayLike, ArrayCB } from '@/shared/generics';
/**
 * A fast Array partitioner.
 *
 * @remakrs
 *
 * This implementation loops in reverse order.
 *
 * @param arr - The input array-like to filter.
 * @param cb  - The callback provided to produce EITHER truthy/falsy OR numberical indices to indicate the correct bucket.
 *              This iteratee is invoked with three arguments: value, index|key, and arr.
 *
 * @returns (typeof arr)[] - The partitioned results.
 */
declare function partition(arr: ArrayLike, cb: ArrayCB): (typeof arr)[];
export default partition;
