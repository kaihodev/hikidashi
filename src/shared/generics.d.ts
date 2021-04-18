export type NumberLike = number | string;
export type ArrayLike = Array | { [n: number]: unknown, length: number };
export type ArrayCB = (e: unknown, i: number, arr: ArrayLike) => unknown;
export type ArrayCBT<T, R> = (currentValue: T, index: number, array: T[]) => R;
