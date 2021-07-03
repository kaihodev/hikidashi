import n from '@/unsafe/util/noop';
import { noop as n2 } from '@/unsafe';
import { unsafe } from '@';

describe.each([n, n2, unsafe.noop])('safe noop', noop => {
  test('noop of one argument should return nothing', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(noop(1)).toBeUndefined();
  });

  test('noop of many argument should return nothing', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(noop(1, 45, 645, 64, 56, 45, 6, 45, 6, 45, 64, 56)).toBeUndefined();
  });

  test('mapping with noop should return array of undefined', () => {
    const a = [1, 45, 645, 64, 56, 45, 6, 45, 6, 45, 64, 56];
    expect(a.map(noop)).toStrictEqual(Array(a.length).fill(undefined));
  });
});
