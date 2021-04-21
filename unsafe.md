## Hikidashi Unsafe

Hikidashi's Unsafe library provides more performant solutions than the safe library and any other alternative library, including naive implementations in pure JS.

### Example
```js
import map from 'hikidashi/unsafe/array/mapip.mjs';

const series = map(Array(10).fill(0), x => x * 2);
console.log(series);
```
