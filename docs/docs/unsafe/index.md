---
id: "index"
title: "hikidashi"
slug: "/unsafe"
sidebar_label: "Readme"
custom_edit_url: null
hide_title: true
---

## Hikidashi Unsafe

Hikidashi's Unsafe library provides more performant solutions than the safe library and any other alternative library, including naive implementations in pure JS.

### Example
Using map in-place with Hikidashi Unsafe

```js
import map from 'hikidashi/unsafe/array/mapip.mjs';

const series = map(Array(10).fill(0), x => x * 2);
console.log(series);
```
