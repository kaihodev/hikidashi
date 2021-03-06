---
id: "filter"
title: "Function: filter"
sidebar_label: "filter"
custom_edit_url: null
hide_title: true
---

# Function: filter

▸ **filter**<Q, T\>(`arr`: Q, `callback?`: *ArrayCBT*<T, boolean\>, `thisArg?`: *unknown*): T[]

A more-or-less spec-compliant Array filter.

**`remarks`** 

The publicly available polyfill on MDN as of mid-April, 2021 differs dramatically from the map polyfill.
This implementation attempts to bridge the two.

**`see`** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

#### Type parameters:

Name | Type | Default | Description |
:------ | :------ | :------ | :------ |
`Q` | *unknown* | *unknown*[] | The type of the array-like being provided.   |
`T` | - | Q[keyof Q] | The type of elements in the array-like being provided.    |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arr` | Q | The input array-like to filter.   |
`callback` | *ArrayCBT*<T, boolean\> | The callback provided to produce booleans.                   This iteratee is invoked with three arguments: value, index\|key, and arr.                   It should return false for items to exclude.   |
`thisArg` | *unknown* | The value to use as `this` when executing callback.    |

**Returns:** T[]

T[] - The filtered results.

Defined in: [safe/array/filter.ts:25](https://github.com/kaihodev/hikidashi/blob/ef3ca16/src/safe/array/filter.ts#L25)
