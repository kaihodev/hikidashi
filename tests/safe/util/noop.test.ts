import n from '@/safe/util/noop';
import { noop as n2 } from '@/safe';
import { safe } from '@';

describe.each([n, n2, safe.noop])('%# - safe noop', noop => {
  test('noop of one argument should return nothing', () => {
    expect(noop(1)).toBeUndefined();
  });

  test('noop of many argument should return nothing', () => {
    expect(noop(1, 45, 645, 64, 56, 45, 6, 45, 6, 45, 64, 56)).toBeUndefined();
  });
});
