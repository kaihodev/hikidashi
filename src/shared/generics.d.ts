export type NumberLike = number | string;
export type ObjArrayLike<T> = { [n: number]: T, length: number };
export type ArrayLike = Array | Array<unknown> | ObjArrayLike<unknown>;

export type ArrayCB =
  ((e: any, i: number, arr: ArrayLike) => unknown) | // eslint-disable-line @typescript-eslint/no-explicit-any
  ((e: any, i: number) => unknown) | // eslint-disable-line @typescript-eslint/no-explicit-any
  ((e: any) => unknown) | // eslint-disable-line @typescript-eslint/no-explicit-any
  (() => unknown);

export type ArrayCBT<T, R = T> =
  ((currentValue: T, index: number, array: T[] | ObjArrayLike<T>) => R) |
  ((currentValue: T, index: number) => R) |
  ((currentValue: T) => R) |
  (() => R);
