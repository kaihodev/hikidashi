---
id: "mdiveq"
title: "Function: mdiveq"
sidebar_label: "mdiveq"
sidebar_position: 0
custom_edit_url: null
---

▸ **mdiveq**(`a`, `b`): `any`

Divides two arrays back into and *modifying the first array* as if a /= b.

**`Remarks`**

This implementation loops in reverse order.
The mdiveq function should be used with caution due to its destructive nature.
We implicitly assume that the second array contains at least as many elements as the first.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `any` | The dividend, first input array-like to divide and modify. |
| `b` | `any` | The divisor, second input array-like to divide. |

#### Returns

`any`

typeof a - The modified input.

#### Defined in

[unsafe/matrix/mdiveq.ts:17](https://github.com/axisiscool/hikidashi/blob/6610d16/src/unsafe/matrix/mdiveq.ts#L17)
