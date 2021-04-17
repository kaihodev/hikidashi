import type { NumberLike } from '@/shared/generics';

/**
 * Adds two given NumberLikes.
 *
 * @param x - The augend.
 * @param y - The addend.
 * @returns number - The resulting sum.
 */
function add(x: NumberLike = 0, y: NumberLike = 0): number {
  return +x + +y;
}

export default add;
