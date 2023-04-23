---
id: "msubeq"
title: "Function: msubeq"
sidebar_label: "msubeq"
sidebar_position: 0
custom_edit_url: null
---

▸ **msubeq**(`a`, `b`): `any`

Subtracts two arrays back into and *modifying the first array* as if a -= b.

**`Remarks`**

This implementation loops in reverse order.
The msubeq function should be used with caution due to its destructive nature.
We implicitly assume that the second array contains at least as many elements as the first.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `any` | The minuend, first input array-like to subtract and modify. |
| `b` | `any` | The subtrahend, second input array-like to subtract. |

#### Returns

`any`

typeof a - The modified input.

#### Defined in

[unsafe/matrix/msubeq.ts:17](https://github.com/axisiscool/hikidashi/blob/6610d16/src/unsafe/matrix/msubeq.ts#L17)
