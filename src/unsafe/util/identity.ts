/**
 * Passthrough function returns the first parameter.
 *
 * @param e - The item to be returned.
 * @returns T - The parameter input.
 */
const identity = (e: any): typeof e => e;
export default identity;
