import * as P from 'maasglobal-prelude-ts';

import * as Tuple_ from '../tuple';

describe('private Tuple utils', () => {
  describe('fromArray function', () => {
    it('should support tuple of length 2', () => {
      const pair = Tuple_.fromArray(2);
      const input: Array<number> = [1, 2];
      const result: P.Option<[number, number]> = pair(input);
      expect(result).toStrictEqual(P.Option_.some(input));
    });
    it('should support tuple of length 5', () => {
      const quintuple = Tuple_.fromArray(5);
      const input: Array<number> = [1, 2, 3, 4, 5];
      const result: P.Option<[number, number, number, number, number]> = quintuple(input);
      expect(result).toStrictEqual(P.Option_.some(input));
    });
    it('should return none on incorrect array length', () => {
      const pair = Tuple_.fromArray(2);
      expect(pair([])).toStrictEqual(P.Option_.none);
      expect(pair([1])).toStrictEqual(P.Option_.none);
      expect(pair([1, 2, 3])).toStrictEqual(P.Option_.none);
    });
  });
});
