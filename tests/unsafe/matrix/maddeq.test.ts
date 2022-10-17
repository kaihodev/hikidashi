import a from '@/unsafe/matrix/maddeq';
import { maddeq as a2 } from '@/unsafe';
import { unsafe } from '@';

describe.each([a, a2, unsafe.maddeq])('%# - unsafe maddeq', add => {
  test('add empty arg values to throw', () => {
    expect(add).toThrow(TypeError);
  });

  test('adds [11] + [22] to equal [33]', () => {
    expect(add([11], [22])).toStrictEqual([33]);
  });

  test('adds [11, 22, 33] + [1, 2, 3] to equal [12, 24, 36]', () => {
    expect(add([11, 22, 33], [1, 2, 3])).toStrictEqual([12, 24, 36]);
  });

  test("adds [11] + ['22'] to equal ['1122']", () => {
    expect(add([11], ['22'])).toStrictEqual(['1122']);
  });
});
