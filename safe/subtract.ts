import type { NumberLike } from '../shared/generics.d.ts';

/**
 * Subtracts two given NumberLikes.
 *
 * @param x - The minuend.
 * @param y - The subtrahend.
 */
function subtract(x: NumberLike = 0, y: NumberLike = 0): number {
  return +x - +y;
}

export default subtract;
