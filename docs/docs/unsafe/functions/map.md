---
id: "map"
title: "Function: map"
sidebar_label: "map"
sidebar_position: 0
custom_edit_url: null
---

▸ **map**(`arr`, `cb`): `unknown`[]

A non-spec compliant fast Array map.

**`Remarks`**

This implementation loops in reverse order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `any` | The input array-like to map through. |
| `cb` | `ArrayCB` | The callback provided to produce mapped results. This iteratee is invoked with three arguments: value, index\|key, and arr. |

#### Returns

`unknown`[]

unknown[] - The new mapped array.

#### Defined in

[unsafe/array/map.ts:15](https://github.com/axisiscool/hikidashi/blob/6610d16/src/unsafe/array/map.ts#L15)
