---
id: "map"
title: "Function: map"
sidebar_label: "map"
sidebar_position: 0
custom_edit_url: null
---

▸ **map**<`Q`, `T`, `R`\>(`arr`, `callback?`, `thisArg?`): `R`[]

A more-or-less spec-compliant Array map.

**`Remarks`**

Certain steps in the spec have been omitted through the use of es6 features or for performance.
This implementation outperforms built-in .map but runs measurably worse than other non-spec-compliant solutions out there.
If you are looking for raw speed, use the unsafe version of mapip, which outperforms everybody.

**`See`**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Q` | extends `unknown` = `unknown`[] | The type of the array-like being provided. |
| `T` | `Q`[keyof `Q`] | The type of elements in the array-like being provided. |
| `R` | `T` | The return value of the provided callback, and thus, type of resulting array elements. |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `arr` | `Q` | `undefined` | The input array-like to map through. |
| `callback` | `ArrayCBT`<`T`, `R`\> | `undefined` | The callback provided to produce mapped results.                   This iteratee is invoked with three arguments: value, index\|key, and arr. |
| `thisArg` | `unknown` | `undefined` | The value to use as `this` when executing callback. |

#### Returns

`R`[]

R[] - The new mapped array.

#### Defined in

[safe/array/map.ts:26](https://github.com/axisiscool/hikidashi/blob/6610d16/src/safe/array/map.ts#L26)
