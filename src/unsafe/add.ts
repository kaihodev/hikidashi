/**
 * Adds two given inputs using the built-in operator+.
 *
 * @remarks
 *
 * The function makes no assumptions about the input types.
 * Number casting is not performed on the augend, so operations including string concatenations will work perfectly, unlike in the safe version.
 *
 * @param x - The augend.
 * @param y - The addend.
 */
const add = (x: any, y: any): unknown => { return x + y; }
export default add;
