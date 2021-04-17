import type { NumberLike } from '../shared/generics';

/**
 * Divides two given NumberLikes.
 *
 * @param x - The dividend.
 * @param y - The divisor.
 * @returns number - The resulting quotient.
 */
function divide(x: NumberLike = 1, y: NumberLike = 1): number {
  return +x / +y;
}

export default divide;
