---
id: "each"
title: "Function: each"
sidebar_label: "each"
custom_edit_url: null
hide_title: true
---

# Function: each

▸ **each**<Q, T\>(`arr`: Q, `callback?`: *ArrayCBT*<T\>, `thisArg?`: *unknown*): *void*

A more-or-less spec-compliant Array forEach.

**`remarks`** 

This implementation loops in reverse order.

**`see`** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

#### Type parameters:

Name | Type | Default | Description |
:------ | :------ | :------ | :------ |
`Q` | *unknown* | *unknown*[] | The type of the array-like being provided.   |
`T` | - | Q[keyof Q] | The type of elements in the array-like being provided.    |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arr` | Q | The input array-like to loop through.   |
`callback` | *ArrayCBT*<T\> | The callback provided.                   This iteratee is invoked with three arguments: value, index\|key, and arr.   |
`thisArg` | *unknown* | The value to use as `this` when executing callback.    |

**Returns:** *void*

void

Defined in: [safe/array/each.ts:23](https://github.com/kaihodev/hikidashi/blob/ee44aa9/src/safe/array/each.ts#L23)
