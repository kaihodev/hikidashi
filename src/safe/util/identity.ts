/**
 * Passthrough function returns the first parameter.
 *
 * @param e - The item to be returned.
 * @returns T - The parameter input.
 */
function identity<T>(e: T): T {
  return e as T;
}

export default identity;
