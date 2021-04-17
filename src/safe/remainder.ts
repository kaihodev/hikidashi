import type { NumberLike } from '../shared/generics';

/**
 * Gets the remainder of dividing two given NumberLikes.
 *
 * @param x - The dividend.
 * @param y - The divisor.
 * @returns number - The resulting remainder.
 */
function remainder(x: NumberLike = 1, y: NumberLike = 1): number {
  return +x % +y;
}

export default remainder;
