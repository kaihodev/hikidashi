---
id: "partitionLeft"
title: "Function: partitionLeft"
sidebar_label: "partitionLeft"
sidebar_position: 0
custom_edit_url: null
---

▸ **partitionLeft**(`arr`, `cb`): typeof `arr`[]

A fast Array partitioner.

**`Remakrs`**

This implementation loops "normally," in normal order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `any` | The input array-like to filter. |
| `cb` | `ArrayCB` | The callback provided to produce EITHER truthy/falsy OR numberical indices to indicate the correct bucket.              This iteratee is invoked with three arguments: value, index\|key, and arr. |

#### Returns

typeof `arr`[]

(typeof arr)[] - The partitioned results.

#### Defined in

[unsafe/array/partitionLeft.ts:16](https://github.com/axisiscool/hikidashi/blob/6610d16/src/unsafe/array/partitionLeft.ts#L16)
