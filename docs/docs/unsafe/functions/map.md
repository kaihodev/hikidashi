---
id: "map"
title: "Function: map"
sidebar_label: "map"
custom_edit_url: null
hide_title: true
---

# Function: map

▸ `Const`**map**(`arr`: *any*, `cb`: ArrayCB): *unknown*[]

A non-spec compliant fast Array map.

**`remarks`** 

This implementation loops in reverse order.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arr` | *any* | The input array-like to map through.   |
`cb` | ArrayCB | The callback provided to produce mapped results. This iteratee is invoked with three arguments: value, index\|key, and arr.    |

**Returns:** *unknown*[]

unknown[] - The new mapped array.

Defined in: [unsafe/array/map.ts:15](https://github.com/diced/hikidashi/blob/b1cdd54/src/unsafe/array/map.ts#L15)
