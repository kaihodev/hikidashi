---
id: "maddeq"
title: "Function: maddeq"
sidebar_label: "maddeq"
sidebar_position: 0
custom_edit_url: null
---

▸ **maddeq**(`a`, `b`): `any`

Adds two arrays together, but *modifies the first array* as if a += b.

**`Remarks`**

This implementation loops in reverse order.
The maddeq function should be used with caution due to its destructive nature.
We implicitly assume that the second array contains at least as many elements as the first.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `any` | The augend, first input array-like to add and modify. |
| `b` | `any` | The addend, second input array-like to add. |

#### Returns

`any`

typeof a - The modified input.

#### Defined in

[unsafe/matrix/maddeq.ts:17](https://github.com/axisiscool/hikidashi/blob/6610d16/src/unsafe/matrix/maddeq.ts#L17)
