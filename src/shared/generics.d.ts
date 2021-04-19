export type NumberLike = number | string;
export type ObjArrayLike<T> = { [n: number]: T, length: number };
export type ArrayLike = Array | ObjArrayLike<unknown>;

export type ArrayCB = (e: any, i: number, arr: ArrayLike) => unknown; // eslint-disable-line @typescript-eslint/no-explicit-any
export type ArrayCB = (e: any, i: number) => unknown; // eslint-disable-line @typescript-eslint/no-explicit-any
export type ArrayCB = (e: any) => unknown; // eslint-disable-line @typescript-eslint/no-explicit-any
export type ArrayCB = () => unknown;

export type ArrayCBT<T, R = T> = (currentValue: T, index: number, array: T[] | ObjArrayLike<T>) => R;
export type ArrayCBT<T, R = T> = (currentValue: T, index: number) => R;
export type ArrayCBT<T, R = T> = (currentValue: T) => R;
export type ArrayCBT<T, R = T> = () => R;
