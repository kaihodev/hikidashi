---
id: "each"
title: "Function: each"
sidebar_label: "each"
sidebar_position: 0
custom_edit_url: null
---

▸ **each**<`Q`, `T`\>(`arr`, `callback?`, `thisArg?`): `void`

A more-or-less spec-compliant Array forEach.

**`Remarks`**

This implementation loops in reverse order.

**`See`**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Q` | extends `unknown` = `unknown`[] | The type of the array-like being provided. |
| `T` | `Q`[keyof `Q`] | The type of elements in the array-like being provided. |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `arr` | `Q` | `undefined` | The input array-like to loop through. |
| `callback` | `ArrayCBT`<`T`, `T`\> | `undefined` | The callback provided.                   This iteratee is invoked with three arguments: value, index\|key, and arr. |
| `thisArg` | `unknown` | `undefined` | The value to use as `this` when executing callback. |

#### Returns

`void`

void

#### Defined in

[safe/array/each.ts:23](https://github.com/axisiscool/hikidashi/blob/6610d16/src/safe/array/each.ts#L23)
