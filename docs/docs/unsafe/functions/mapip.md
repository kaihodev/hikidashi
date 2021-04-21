---
id: 'mapip'
title: 'Function: mapip'
sidebar_label: 'mapip'
custom_edit_url: null
hide_title: true
---

# Function: mapip

▸ `Const`**mapip**(`arr`: _any_, `cb`: ArrayCB): _any_

A non-spec compliant fast Array map that _modifies the input array_ and maps in-place.

**`remarks`**

This implementation loops in reverse order.
The mapip function should be used with caution due to its destructive nature.
We see promising use cases where you may iterate a map that is not used for any other purpose.
Consider the following: const users = [111, 112, 113, 114].map(id => database.fetchById(id));
The user ID array is not used, but all other traditional map implementations make an unnecessary allocation.

#### Parameters:

| Name  | Type    | Description                                                                                                                 |
| :---- | :------ | :-------------------------------------------------------------------------------------------------------------------------- |
| `arr` | _any_   | The input array-like to map through.                                                                                        |
| `cb`  | ArrayCB | The callback provided to produce mapped results. This iteratee is invoked with three arguments: value, index\|key, and arr. |

**Returns:** _any_

typeof arr - The modified input.

Defined in: [unsafe/array/mapip.ts:19](https://github.com/kaihodev/hikidashi/blob/031836f/src/unsafe/array/mapip.ts#L19)
