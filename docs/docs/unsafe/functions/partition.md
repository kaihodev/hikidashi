---
id: "partition"
title: "Function: partition"
sidebar_label: "partition"
sidebar_position: 0
custom_edit_url: null
---

▸ **partition**(`arr`, `cb`): typeof `arr`[]

A fast Array partitioner.

**`Remakrs`**

This implementation loops in reverse order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `any` | The input array-like to filter. |
| `cb` | `ArrayCB` | The callback provided to produce EITHER truthy/falsy OR numberical indices to indicate the correct bucket.              This iteratee is invoked with three arguments: value, index\|key, and arr. |

#### Returns

typeof `arr`[]

(typeof arr)[] - The partitioned results.

#### Defined in

[unsafe/array/partition.ts:16](https://github.com/axisiscool/hikidashi/blob/6610d16/src/unsafe/array/partition.ts#L16)
