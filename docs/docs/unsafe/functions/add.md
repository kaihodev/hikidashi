---
id: 'add'
title: 'Function: add'
sidebar_label: 'add'
custom_edit_url: null
hide_title: true
---

# Function: add

▸ `Const`**add**(`x`: _any_, `y`: _any_): _unknown_

Adds two given inputs using the built-in operator+.

**`remarks`**

The function makes no assumptions about the input types.
Number casting is not performed on the augend, so operations including string concatenations will work perfectly,
unlike in the safe version.

#### Parameters:

| Name | Type  | Description |
| :--- | :---- | :---------- |
| `x`  | _any_ | The augend. |
| `y`  | _any_ | The addend. |

**Returns:** _unknown_

The result of the addition or concat.

Defined in: [unsafe/math/add.ts:14](https://github.com/kaihodev/hikidashi/blob/031836f/src/unsafe/math/add.ts#L14)
