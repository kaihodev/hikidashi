import lodash from 'lodash';
import ramda from 'ramda';

import safeSubtract from '@/safe/math/subtract';
import unsafeSubtract from '@/unsafe/math/subtract';

import { bench } from 'benchi';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jsSubtract = (a: any, b: any) => a - b;

bench(
  { name: 'hikidashi safe - subtract', fn: () => safeSubtract(5, 1) },
  { name: 'hikidashi unsafe - subtract', fn: () => unsafeSubtract(5, 1) },
  { name: 'lodash - subtract', fn: () => lodash.subtract(5, 1) },
  { name: 'ramda - subtract', fn: () => ramda.subtract(5, 1) },
  { name: 'js - subtract', fn: () => jsSubtract(5, 1) },
);
