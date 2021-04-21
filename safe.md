## Hikidashi Safe

Hikidashi's Safe library provides spec compliancy, clean syntax, and type checking while still being more performant that other libraries.

### Example
Using map in-place with Hikidashi Safe


```js
import map from 'hikidashi/safe/array/mapip.mjs';

const series = map(Array(10).fill(0), x => x * 2);
console.log(series);
```
