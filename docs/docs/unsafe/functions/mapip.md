---
id: "mapip"
title: "Function: mapip"
sidebar_label: "mapip"
sidebar_position: 0
custom_edit_url: null
---

▸ **mapip**(`arr`, `cb`): `any`

A non-spec compliant fast Array map that *modifies the input array* and maps in-place.

**`Remarks`**

This implementation loops in reverse order.
The mapip function should be used with caution due to its destructive nature.
We see promising use cases where you may iterate a map that is not used for any other purpose.
Consider the following: const users = [111, 112, 113, 114].map(id => database.fetchById(id));
The user ID array is not used, but all other traditional map implementations make an unnecessary allocation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `any` | The input array-like to map through. |
| `cb` | `ArrayCB` | The callback provided to produce mapped results. This iteratee is invoked with three arguments: value, index\|key, and arr. |

#### Returns

`any`

typeof arr - The modified input.

#### Defined in

[unsafe/array/mapip.ts:19](https://github.com/axisiscool/hikidashi/blob/6610d16/src/unsafe/array/mapip.ts#L19)
