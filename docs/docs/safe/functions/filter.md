---
id: "filter"
title: "Function: filter"
sidebar_label: "filter"
sidebar_position: 0
custom_edit_url: null
---

▸ **filter**<`Q`, `T`\>(`arr`, `callback?`, `thisArg?`): `T`[]

A more-or-less spec-compliant Array filter.

**`Remarks`**

The publicly available polyfill on MDN as of mid-April, 2021 differs dramatically from the map polyfill.
This implementation attempts to bridge the two.

**`See`**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Q` | extends `unknown` = `unknown`[] | The type of the array-like being provided. |
| `T` | `Q`[keyof `Q`] | The type of elements in the array-like being provided. |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `arr` | `Q` | `undefined` | The input array-like to filter. |
| `callback` | `ArrayCBT`<`T`, `boolean`\> | `undefined` | The callback provided to produce booleans.                   This iteratee is invoked with three arguments: value, index\|key, and arr.                   It should return false for items to exclude. |
| `thisArg` | `unknown` | `undefined` | The value to use as `this` when executing callback. |

#### Returns

`T`[]

T[] - The filtered results.

#### Defined in

[safe/array/filter.ts:25](https://github.com/axisiscool/hikidashi/blob/6610d16/src/safe/array/filter.ts#L25)
