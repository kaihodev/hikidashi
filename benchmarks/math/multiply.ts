import lodash from 'lodash';
import * as ramda from 'ramda';

import safeMultiply from '@/safe/math/multiply';
import unsafeMultiply from '@/unsafe/math/multiply';

import { bench } from 'benchi';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jsMultiply = (a: any, b: any) => a * b;

bench(
  { name: 'hikidashi safe - multiply', fn: () => safeMultiply(5, 1) },
  { name: 'hikidashi unsafe - multiply', fn: () => unsafeMultiply(5, 1) },
  { name: 'lodash - multiply', fn: () => lodash.multiply(5, 1) },
  { name: 'ramda - multiply', fn: () => ramda.multiply(5, 1) },
  { name: 'js - multiply', fn: () => jsMultiply(5, 1) },
);
