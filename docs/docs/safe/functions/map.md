---
id: "map"
title: "Function: map"
sidebar_label: "map"
custom_edit_url: null
hide_title: true
---

# Function: map

▸ **map**<Q, T, R\>(`arr`: Q, `callback?`: *ArrayCBT*<T, R\>, `thisArg?`: *unknown*): R[]

A more-or-less spec-compliant Array map.

**`remarks`** 

Certain steps in the spec have been omitted through the use of es6 features or for performance.
This implementation outperforms built-in .map but runs measurably worse than other non-spec-compliant solutions out there.
If you are looking for raw speed, use the unsafe version of mapip, which outperforms everybody.

**`see`** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

#### Type parameters:

Name | Type | Default | Description |
:------ | :------ | :------ | :------ |
`Q` | *unknown* | *unknown*[] | The type of the array-like being provided.   |
`T` | - | Q[keyof Q] | The type of elements in the array-like being provided.   |
`R` | - | T | The return value of the provided callback, and thus, type of resulting array elements.    |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arr` | Q | The input array-like to map through.   |
`callback` | *ArrayCBT*<T, R\> | The callback provided to produce mapped results.                   This iteratee is invoked with three arguments: value, index\|key, and arr.   |
`thisArg` | *unknown* | The value to use as `this` when executing callback.    |

**Returns:** R[]

R[] - The new mapped array.

Defined in: [safe/array/map.ts:26](https://github.com/kaihodev/hikidashi/blob/47d8382/src/safe/array/map.ts#L26)
