import * as P from 'maasglobal-prelude-ts';

import * as Tuple_ from '../../../../_private/tuple';
import { Uuid } from '../../../../_types/core/components/units';

export type Separator = '-';
export const separator: Separator = '-';

export type Group = string;
export type Groups = [Group, Group, Group, Group, Group];
export const groups = (uuid: Uuid): Groups =>
  P.pipe(
    uuid.split(separator),
    Tuple_.fromArray(5),
    P.Option_.getOrElse((): Groups => {
      // eslint-disable-next-line fp/no-throw
      throw new Error('Uuid has more than five groups');
    }),
  );

export type Field = string;
export type Fields = {
  timeLow: Field;
  timeMid: Field;
  timeHiAndVersion: Field;
  clockSeqHiAndReserved: Field;
  clockSeqLow: Field;
  node: Field;
};
export const fields = (uuid: Uuid): Fields =>
  P.pipe(
    groups(uuid),
    ([timeLow, timeMid, timeHiAndVersion, clockSeq, node]): Fields =>
      P.pipe(
        clockSeq.split(P.string_.empty),
        P.Array_.chunksOf(2),
        P.Array_.map((chunk) => chunk.join(P.string_.empty)),
        Tuple_.fromArray(2),
        P.Option_.getOrElse((): [string, string] => {
          // eslint-disable-next-line fp/no-throw
          throw new Error('Uuid ClockSeq hi/lo not 2x2 hex long');
        }),
        ([clockSeqHiAndReserved, clockSeqLow]) => ({
          timeLow,
          timeMid,
          timeHiAndVersion,
          clockSeqHiAndReserved,
          clockSeqLow,
          node,
        }),
      ),
  );

export type Version = number;
export const version = (uuid: Uuid): Version =>
  P.pipe(fields(uuid), ({ timeHiAndVersion }) =>
    parseInt(timeHiAndVersion.charAt(0), 16),
  );
