# Hikidashi

### Convenient, simple, functional JavaScript. Like [hikidashi boxes](https://happiboxshop.com/blogs/news/12-alternatives-to-marie-kondo-hikidashi-boxes).

[NPM](https://npm.im/hikidashi) |
[Docs](https://kaihodev.github.io/hikidashi) |
[Github](https://github.com/kaihodev/hikidashi/tree/develop)

Hikidashi is released under the [MIT license](https://github.com/kaihodev/hikidashi/blob/develop/LICENSE) & supports modern Node and browser environments.<br>

## Quick install

**Use any of the following.**
```shell
$ npm i hikidashi
$ yarn add hikidashi
$ pnpm i hikidashi
```
Note: add `--save` if you are using npm < 5.0.0

Using ESM: smaller bundle sizes.
```js
// Load only what you need
import map from 'hikidashi/unsafe/array/mapip.mjs';
import add from 'hikidashi/safe/math/add.mjs';

const series = map(Array(10).fill(0), add);
console.log(series); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Using a single require:
```js
const { unsafe } = require('hikidashi');

const series = unsafe.mapip([1, 2, 3, 4], e => e * 2);
console.log(series); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Using exported paths:
```js
const safe = require('hikidashi/safe');

const series = safe.filter([true, false, true])
console.log(series); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Why Hikidashi
We like going back to basics with convenient, simple, functional JavaScript. Hikidashi is a one-stop-shop for all your daily array, object, string, and mathematical needs.

  * Easy to Use, simple API based on common sense.
  * Fast, lightweight, and built for the new age. (We're usually faster than **every** alternative, see our benchmarks!)
  * Modular, bundler-friendly file structure lets you use only what you need.

<div align="center">
<img src="https://www.wallpaperflare.com/static/275/491/805/anime-girl-gift-hope-wallpaper-preview.jpg" width=720 />
</div>
