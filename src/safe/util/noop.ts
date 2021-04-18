/**
 * Noop function that does nothing.
 *
 * @param unknown[] - optional params
 * @returns void
 */
function noop<T = unknown[]>(...args: T): void { return void args; } // eslint-disable-line no-void
export default noop;
