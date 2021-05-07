import type { ArrayLike } from '@/shared/generics';

/**
 * @todo
 */
export default function indexOf(arr: ArrayLike, element: any, fromIndex = 0): number {
  for (let i = fromIndex, L = arr.length; i !== L; ++i) if (arr[i] === element) return i;
  return -1;
}
