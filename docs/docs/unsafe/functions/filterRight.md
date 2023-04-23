---
id: "filterRight"
title: "Function: filterRight"
sidebar_label: "filterRight"
sidebar_position: 0
custom_edit_url: null
---

▸ **filterRight**(`arr`, `cb`): typeof `arr`

A fast Array filter.

**`Remarks`**

This implementation loops in reverse order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `any` | The input array-like to filter. |
| `cb` | `ArrayCB` | The callback provided to produce truthy/falsy. This iteratee is invoked with three arguments: value, index\|key, and arr.              It should return false for items to exclude. |

#### Returns

typeof `arr`

typeof arr - The filtered results.

#### Defined in

[unsafe/array/filterRight.ts:16](https://github.com/axisiscool/hikidashi/blob/6610d16/src/unsafe/array/filterRight.ts#L16)
