import { ArrayLike } from '@/shared/generics';

/**
 * Noop function that does nothing.
 *
 * @param args - optional params
 * @returns void
 */
function noop(...args: ArrayLike): void { return void args; } // eslint-disable-line no-void
export default noop;
