import { validator } from 'io-ts-validator';

import { Uuid } from '../../../../../_types/core/components/units';
import * as Uuid_ from '../uuid';

describe('Uuid_', () => {
  const uuid0 = validator(Uuid).decodeSync('00000000-0000-0000-0000-000000000000');
  const uuid1 = validator(Uuid).decodeSync('8268f868-50fc-11ec-bf63-0242ac130002');
  const uuid4 = validator(Uuid).decodeSync('c16515ca-ae80-4b0a-bc35-9c12ff9bb3ec');

  describe('groups function', () => {
    it('should break uuid into groups', () => {
      const result = Uuid_.groups(uuid4);
      expect(result).toStrictEqual(['c16515ca', 'ae80', '4b0a', 'bc35', '9c12ff9bb3ec']);
    });
  });
  describe('fields function', () => {
    it('should break uuid into fields', () => {
      const result = Uuid_.fields(uuid4);
      expect(result).toStrictEqual({
        timeLow: 'c16515ca',
        timeMid: 'ae80',
        timeHiAndVersion: '4b0a',
        clockSeqHiAndReserved: 'bc',
        clockSeqLow: '35',
        node: '9c12ff9bb3ec',
      });
    });
    it('should crash on invalid uuid', () => {
      expect(() =>
        Uuid_.fields('c16515ca-ae80-4b0a-bc35-9c12ff9bb3ec-cafe' as Uuid),
      ).toThrow();
      expect(() =>
        Uuid_.fields('c16515ca-ae80-4b0a-bc35cafe-9c12ff9bb3ec' as Uuid),
      ).toThrow();
    });
  });
  describe('version function', () => {
    it('should return uuid version', () => {
      expect(Uuid_.version(uuid0)).toStrictEqual(0);
      expect(Uuid_.version(uuid1)).toStrictEqual(1);
      expect(Uuid_.version(uuid4)).toStrictEqual(4);
    });
  });
});
