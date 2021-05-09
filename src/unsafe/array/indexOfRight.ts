import type { ArrayLike } from '@/shared/generics';

/**
 * @todo
 */
export default function indexOfRight(arr: ArrayLike, element: any, fromIndex = arr.length - 1): number {
  for (var i = fromIndex; i--;) if (arr[i] === element) return i; // eslint-disable-line no-var
  return i;
}
