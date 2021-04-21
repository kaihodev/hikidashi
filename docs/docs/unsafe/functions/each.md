---
id: 'each'
title: 'Function: each'
sidebar_label: 'each'
custom_edit_url: null
hide_title: true
---

# Function: each

▸ `Const`**each**(`arr`: _any_, `cb`: ArrayCB): _void_

A non-spec compliant fast Array forEach.

**`remarks`**

This implementation loops in reverse order.

#### Parameters:

| Name  | Type    | Description                                                                                       |
| :---- | :------ | :------------------------------------------------------------------------------------------------ |
| `arr` | _any_   | The input array-like to loop through.                                                             |
| `cb`  | ArrayCB | The callback provided. This iteratee is invoked with three arguments: value, index\|key, and arr. |

**Returns:** _void_

void

Defined in: [unsafe/array/each.ts:15](https://github.com/kaihodev/hikidashi/blob/031836f/src/unsafe/array/each.ts#L15)
