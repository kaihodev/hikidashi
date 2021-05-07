import type { ArrayLike } from '@/shared/generics';
import indexOf from './indexOf';

/**
 * @todo
 */
export default function includes(arr: ArrayLike, element: any, fromIndex = 0): boolean { return indexOf(arr, element, fromIndex) !== -1; }
