/**
 * Passthrough function returns the first parameter.
 *
 * @param e - The item to be returned.
 * @returns T - The parameter input.
 */
declare function identity<T>(e: T): T;
export default identity;
