/**
 * Noop function that does nothing.
 *
 * @param args - optional params
 * @returns void
 */
function noop<T = unknown[]>(...args: T[]): void { return void args; } // eslint-disable-line no-void
export default noop;
