import type { ArrayLike } from '@/shared/generics';
/**
 * A non-spec compliant utility function to check if an Array includes something.
 *
 * @remarks
 *
 * @param arr - The array-like input to iterate through.
 * @param element - The item to search for in the array.
 * @param fromIndex - The index of the array to start searching from.
 *
 * @returns boolean - true if the element was found in the array.
 */
export default function includes(arr: ArrayLike, element: any, fromIndex?: number): boolean;
