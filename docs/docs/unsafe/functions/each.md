---
id: "each"
title: "Function: each"
sidebar_label: "each"
custom_edit_url: null
hide_title: true
---

# Function: each

▸ `Const`**each**(`arr`: *any*, `cb`: ArrayCB): *void*

A non-spec compliant fast Array forEach.

**`remarks`** 

This implementation loops in reverse order.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arr` | *any* | The input array-like to loop through.   |
`cb` | ArrayCB | The callback provided. This iteratee is invoked with three arguments: value, index\|key, and arr.    |

**Returns:** *void*

void

Defined in: [unsafe/array/each.ts:15](https://github.com/kaihodev/hikidashi/blob/ef3ca16/src/unsafe/array/each.ts#L15)
