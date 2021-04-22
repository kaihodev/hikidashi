---
id: "filter"
title: "Function: filter"
sidebar_label: "filter"
custom_edit_url: null
hide_title: true
---

# Function: filter

▸ `Const`**filter**(`arr`: *any*, `cb`: ArrayCB): *any*

A fast Array filter.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arr` | *any* | The input array-like to filter.   |
`cb` | ArrayCB | The callback provided to produce truthy/falsy. This iteratee is invoked with three arguments: value, index\|key, and arr.              It should return false for items to exclude.    |

**Returns:** *any*

typeof arr - The filtered results.

Defined in: [unsafe/array/filter.ts:12](https://github.com/kaihodev/hikidashi/blob/ef3ca16/src/unsafe/array/filter.ts#L12)
