import lodash from 'lodash';
import ramda from 'ramda';

import safeAdd from '../../safe/add';
import unsafeAdd from '../../unsafe/add';

import { bench } from '../util';

bench(
  { name: 'js - add', fn: () => 5 + 1 },
  { name: 'lodash - add', fn: () => lodash.add(5, 1) },
  { name: 'ramda - add', fn: () => ramda.add(5, 1) },
  { name: 'hikidashi safe - add', fn: () => safeAdd(5, 1) },
  { name: 'hikidashi unsafe - add', fn: () => unsafeAdd(5, 1) }
);
