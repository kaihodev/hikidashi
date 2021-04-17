---
id: "add"
title: "Function: add"
sidebar_label: "add"
custom_edit_url: null
hide_title: true
---

# Function: add

▸ `Const`**add**(`x`: *any*, `y`: *any*): *unknown*

Adds two given inputs using the built-in operator+.

**`remarks`** 

The function makes no assumptions about the input types.
Number casting is not performed on the augend, so operations including string concatenations will work perfectly,
unlike in the safe version.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`x` | *any* | The augend.   |
`y` | *any* | The addend.   |

**Returns:** *unknown*

The result of the addition or concat.

Defined in: [unsafe/add.ts:14](https://github.com/diced/hikidashi/blob/1f00be1/src/unsafe/add.ts#L14)
