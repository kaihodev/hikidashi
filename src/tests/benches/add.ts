import lodash from 'lodash';
import ramda from 'ramda';

const safeAdd = require('../../safe/add').default;
const unsafeAdd = require('../../unsafe/add').default;

const { bench } = require('../util');

const jsAdd = (a: any, b: any) => a + b;

bench(
  { name: 'lodash - add', fn: () => lodash.add(5, 1) },
  { name: 'ramda - add', fn: () => ramda.add(5, 1) },
  { name: 'hikidashi safe - add', fn: () => safeAdd(5, 1) },
  { name: 'hikidashi unsafe - add', fn: () => unsafeAdd(5, 1) },
  { name: 'js - add', fn: () => jsAdd(5, 1) },
);
