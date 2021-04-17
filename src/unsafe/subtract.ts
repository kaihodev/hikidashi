/**
 * Subtracts two given inputs using the built-in operator-.
 *
 * @remarks
 *
 * The function makes no assumptions about the input types.
 * Number casting is not performed on the augend, so operations including string concatenations will work perfectly, unlike in the safe version.
 *
 * @param x - The minuend.
 * @param y - The subtrahend.
 */
const subtract = (x: any, y: any): unknown => {
  return x - y;
};
export default subtract;
