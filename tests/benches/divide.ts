import lodash from 'lodash';
import ramda from 'ramda';

import { subtract as safeDivide } from '@/safe';
import { subtract as unsafeDivide } from '@/unsafe';

import { bench } from '../util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jsDivide = (a: any, b: any) => a / b;

bench(
  { name: 'lodash - divide', fn: () => lodash.divide(5, 2) },
  { name: 'ramda - divide', fn: () => ramda.divide(5, 2) },
  { name: 'hikidashi safe - divide', fn: () => safeDivide(5, 2) },
  { name: 'hikidashi unsafe - divide', fn: () => unsafeDivide(5, 2) },
  { name: 'js - divide', fn: () => jsDivide(5, 1) },
);
