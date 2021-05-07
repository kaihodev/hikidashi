import lodash from 'lodash';
import ramda from 'ramda';

import safeDivide from '@/safe/math/divide';
import unsafeDivide from '@/unsafe/math/divide';

import { bench } from 'benchi';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jsDivide = (a: any, b: any) => a / b;

bench(
  { name: 'hikidashi safe - divide', fn: () => safeDivide(5, 2) },
  { name: 'hikidashi unsafe - divide', fn: () => unsafeDivide(5, 2) },
  { name: 'lodash - divide', fn: () => lodash.divide(5, 2) },
  { name: 'ramda - divide', fn: () => ramda.divide(5, 2) },
  { name: 'js - divide', fn: () => jsDivide(5, 1) },
);
