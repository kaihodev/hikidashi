---
id: "modulo"
title: "Function: modulo"
sidebar_label: "modulo"
sidebar_position: 0
custom_edit_url: null
---

▸ **modulo**(`x?`, `y?`): `number`

Gets the modulo of dividing two given NumberLikes.

**`Remarks`**

In most languages, ‘%’ is a remainder operator, but in some (e.g. Python, Perl) it is a modulo operator.
For positive values, the two are equivalent, but when the dividend and divisor are of different signs, they give different results.

**`See`**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `NumberLike` | `1` | The dividend. |
| `y` | `NumberLike` | `1` | The divisor. |

#### Returns

`number`

number - The resulting modulo.

#### Defined in

[safe/math/modulo.ts:17](https://github.com/axisiscool/hikidashi/blob/6610d16/src/safe/math/modulo.ts#L17)
