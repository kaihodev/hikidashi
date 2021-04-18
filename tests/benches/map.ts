import lodash from 'lodash';
import ramda from 'ramda';
import underscore from 'underscore';

import safeMap from '@/safe/array/map';
import unsafeMap from '@/unsafe/array/map';

import { bench } from '../util';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cbf = (x: number) => x * 2;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jsMap = (arr: any, fn: any) => arr.map(fn);

bench(
  { name: 'lodash - map', fn: () => lodash.map(array, cbf) },
  { name: 'ramda - map', fn: () => ramda.map(cbf, array) },
  { name: 'underscore - map', fn: () => underscore.map(array, cbf) },
  { name: 'hikidashi safe - map', fn: () => safeMap(array, cbf) },
  { name: 'hikidashi unsafe - map', fn: () => unsafeMap(array, cbf) },
  { name: 'js - map', fn: () => jsMap(array, cbf) },
);
