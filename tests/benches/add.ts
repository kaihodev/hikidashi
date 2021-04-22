import lodash from 'lodash';
import ramda from 'ramda';

import safeAdd from '@/safe/math/add';
import unsafeAdd from '@/unsafe/math/add';

import { bench } from '../util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jsAdd = (a: any, b: any) => a + b;

bench(
  { name: 'hikidashi safe - add', fn: () => safeAdd(5, 1) },
  { name: 'hikidashi unsafe - add', fn: () => unsafeAdd(5, 1) },
  { name: 'lodash - add', fn: () => lodash.add(5, 1) },
  { name: 'ramda - add', fn: () => ramda.add(5, 1) },
  { name: 'js - add', fn: () => jsAdd(5, 1) },
);
