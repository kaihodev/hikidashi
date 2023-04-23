---
id: "add"
title: "Function: add"
sidebar_label: "add"
sidebar_position: 0
custom_edit_url: null
---

▸ **add**(`x`, `y`): `unknown`

Adds two given inputs using the built-in operator+.

**`Remarks`**

The function makes no assumptions about the input types.
Number casting is not performed on the augend, so operations including string concatenations will work perfectly,
unlike in the safe version.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `any` | The augend. |
| `y` | `any` | The addend. |

#### Returns

`unknown`

The result of the addition or concat.

#### Defined in

[unsafe/math/add.ts:14](https://github.com/axisiscool/hikidashi/blob/6610d16/src/unsafe/math/add.ts#L14)
