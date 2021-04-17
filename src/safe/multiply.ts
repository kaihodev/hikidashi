import type { NumberLike } from '../shared/generics';

/**
 * Multiplies two given NumberLikes.
 *
 * @param x - The multiplier.
 * @param y - The multiplicand.
 * @returns number - The resulting product.
 */
function multiply(x: NumberLike = 1, y: NumberLike = 1): number {
  return +x * +y;
}

export default multiply;
