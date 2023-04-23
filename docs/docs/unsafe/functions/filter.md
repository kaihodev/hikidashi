---
id: "filter"
title: "Function: filter"
sidebar_label: "filter"
sidebar_position: 0
custom_edit_url: null
---

▸ **filter**(`arr`, `cb`): `any`

A fast Array filter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `any` | The input array-like to filter. |
| `cb` | `ArrayCB` | The callback provided to produce truthy/falsy. This iteratee is invoked with three arguments: value, index\|key, and arr.              It should return false for items to exclude. |

#### Returns

`any`

typeof arr - The filtered results.

#### Defined in

[unsafe/array/filter.ts:12](https://github.com/axisiscool/hikidashi/blob/6610d16/src/unsafe/array/filter.ts#L12)
