---
id: "reduce"
title: "Function: reduce"
sidebar_label: "reduce"
sidebar_position: 0
custom_edit_url: null
---

▸ **reduce**(`arr`, `cb`, `initValue?`): `unknown`[]

A non-spec compliant fast Array map.

**`Remarks`**

This implementation loops in reverse order.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `arr` | `any` | `undefined` | The input array-like to map through. |
| `cb` | `ArrayReduceCB` | `undefined` | The callback provided to produce mapped results. This iteratee is invoked with three arguments: value, index\|key, and arr. |
| `initValue` | `any` | `undefined` | - |

#### Returns

`unknown`[]

unknown[] - The new mapped array.

#### Defined in

[unsafe/array/reduce.ts:15](https://github.com/axisiscool/hikidashi/blob/6610d16/src/unsafe/array/reduce.ts#L15)
