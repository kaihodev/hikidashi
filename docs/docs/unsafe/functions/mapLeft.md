---
id: "mapLeft"
title: "Function: mapLeft"
sidebar_label: "mapLeft"
sidebar_position: 0
custom_edit_url: null
---

▸ **mapLeft**(`arr`, `cb`): `unknown`[]

A non-spec compliant fast Array map.

**`Remarks`**

This implementation loops "normally," in normal order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `any` | The input array-like to map through. |
| `cb` | `ArrayCB` | The callback provided to produce mapped results. This iteratee is invoked with three arguments: value, index\|key, and arr. |

#### Returns

`unknown`[]

unknown[] - The new mapped array.

#### Defined in

[unsafe/array/mapLeft.ts:15](https://github.com/axisiscool/hikidashi/blob/6610d16/src/unsafe/array/mapLeft.ts#L15)
