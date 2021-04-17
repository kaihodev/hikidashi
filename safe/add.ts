import type { NumberLike } from '../shared/generics.d.ts';

/**
 * Adds two given NumberLikes.
 *
 * @param x - The augend.
 * @param y - The addend.
 */
function add(x: NumberLike = 0, y: NumberLike = 0): number {
  return +x + +y;
}

export default add;
