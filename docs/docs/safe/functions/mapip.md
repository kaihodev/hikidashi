---
id: "mapip"
title: "Function: mapip"
sidebar_label: "mapip"
custom_edit_url: null
hide_title: true
---

# Function: mapip

▸ **mapip**<Q, T\>(`arr`: Q, `callback?`: *ArrayCBT*<T\>, `thisArg?`: *unknown*): Q

A non-spec compliant fast Array map that *modifies the input array.*

**`remarks`** 

This implementation loops in reverse order.
The mapip function should be used with caution due to its destructive nature.
We see promising use cases where you may iterate a map that is not used for any other purpose.
Consider the following: const users = [111, 112, 113, 114].map(id => database.fetchById(id));
The user ID array is not used, but all other traditional map implementations make an unnecessary allocation.

If you are looking for raw speed, use the unsafe version, which outperforms everybody.

**`see`** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

#### Type parameters:

Name | Type | Default | Description |
:------ | :------ | :------ | :------ |
`Q` | *unknown* | *unknown*[] | The type of the array-like being provided.   |
`T` | - | Q[keyof Q] | The type of elements in the array-like being provided.    |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arr` | Q | The input array-like to map through.   |
`callback` | *ArrayCBT*<T\> | The callback provided to produce mapped results.                   This iteratee is invoked with three arguments: value, index\|key, and arr.   |
`thisArg` | *unknown* | The value to use as `this` when executing callback.    |

**Returns:** Q

Q - The modified input

Defined in: [safe/array/mapip.ts:29](https://github.com/diced/hikidashi/blob/4f12be0/src/safe/array/mapip.ts#L29)
