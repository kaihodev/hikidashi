---
id: "reduce"
title: "Function: reduce"
sidebar_label: "reduce"
custom_edit_url: null
hide_title: true
---

# Function: reduce

▸ `Const`**reduce**(`arr`: *any*, `cb`: ArrayReduceCB, `initValue`: *any*): *unknown*[]

A non-spec compliant fast Array map.

**`remarks`** 

This implementation loops in reverse order.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arr` | *any* | The input array-like to map through.   |
`cb` | ArrayReduceCB | The callback provided to produce mapped results. This iteratee is invoked with three arguments: value, index\|key, and arr.    |
`initValue` | *any* | - |

**Returns:** *unknown*[]

unknown[] - The new mapped array.

Defined in: [unsafe/array/reduce.ts:15](https://github.com/kaihodev/hikidashi/blob/ef3ca16/src/unsafe/array/reduce.ts#L15)
