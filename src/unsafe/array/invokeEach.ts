import type { ArrayLike } from '@/shared/generics';

/**
 * A forEach that calls each element with provided arguments.
 *
 * @remarks
 *
 * This implementation loops in reverse order.
 *
 * @param arr - The input array-like to loop through.
 * @param args  - The arguments to call each element with.
 *
 * @returns void
 */
const invokeEach = (arr: ArrayLike, args: any[] = []): void => {
  let i = arr.length;
  while (i--) arr[i].apply(null, args);
};
export default invokeEach;
