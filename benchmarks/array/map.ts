import lodash from 'lodash';
import * as ramda from 'ramda';
import underscore from 'underscore';

import safeMap from '@/safe/array/map';
import unsafeMap from '@/unsafe/array/map';
import safeMapip from '@/safe/array/mapip';
import unsafeMapip from '@/unsafe/array/mapip';

import add from '@/safe/math/add';

import { bench } from 'benchi';

const cbf = (x: number) => x * 2;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jsMap = (arr: any, fn: any) => arr.map(fn);

let array = safeMap(Array(10).fill(0), add);
bench(
  { name: '10 hikidashi safe - map', fn: () => safeMap(array, cbf) },
  { name: '10 hikidashi unsafe - map', fn: () => unsafeMap(array, cbf) },
  { name: '10 hikidashi safe - mapip', fn: () => safeMapip(array, cbf) },
  { name: '10 hikidashi unsafe - mapip', fn: () => unsafeMapip(array, cbf) },
  { name: '10 lodash - map', fn: () => lodash.map(array, cbf) },
  { name: '10 ramda - map', fn: () => ramda.map(cbf, array) },
  { name: '10 underscore - map', fn: () => underscore.map(array, cbf) },
  { name: '10 js - map', fn: () => jsMap(array, cbf) },
);

array = safeMap(Array(100).fill(0), add);
bench(
  { name: '100 hikidashi safe - map', fn: () => safeMap(array, cbf) },
  { name: '100 hikidashi unsafe - map', fn: () => unsafeMap(array, cbf) },
  { name: '100 hikidashi safe - mapip', fn: () => safeMapip(array, cbf) },
  { name: '100 hikidashi unsafe - mapip', fn: () => unsafeMapip(array, cbf) },
  { name: '100 lodash - map', fn: () => lodash.map(array, cbf) },
  { name: '100 ramda - map', fn: () => ramda.map(cbf, array) },
  { name: '100 underscore - map', fn: () => underscore.map(array, cbf) },
  { name: '100 js - map', fn: () => jsMap(array, cbf) },
);

array = safeMap(Array(100).fill(0), add);
bench(
  { name: '1000 hikidashi safe - map', fn: () => safeMap(array, cbf) },
  { name: '1000 hikidashi unsafe - map', fn: () => unsafeMap(array, cbf) },
  { name: '1000 hikidashi safe - mapip', fn: () => safeMapip(array, cbf) },
  { name: '1000 hikidashi unsafe - mapip', fn: () => unsafeMapip(array, cbf) },
  { name: '1000 lodash - map', fn: () => lodash.map(array, cbf) },
  { name: '1000 ramda - map', fn: () => ramda.map(cbf, array) },
  { name: '1000 underscore - map', fn: () => underscore.map(array, cbf) },
  { name: '1000 js - map', fn: () => jsMap(array, cbf) },
);
