---
id: "index"
title: "Unsafe Module Overview"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

## Hikidashi Unsafe

Hikidashi's Unsafe library provides more performant solutions than the safe library and any other alternative library, including naive implementations in pure JS.

### Example
Using map in-place with Hikidashi Unsafe

```js
import map from 'hikidashi/unsafe/array/mapip.mjs';

const series = map(Array(10).fill(0), (_, x) => x * 2);
console.log(series);
```
