import * as P from 'maasglobal-prelude-ts';

import { Uuid } from '../../../../_types/core/components/units';

// unsafe tuple contructor, throws on incorrect input length
function unsafeTuple(n: 2): <A>(as: Array<A>) => [A, A];
function unsafeTuple(n: 5): <A>(as: Array<A>) => [A, A, A, A, A];
function unsafeTuple(n: number): <A>(as: Array<A>) => Array<A> {
  return (as) => {
    if (as.length !== n) {
      // eslint-disable-next-line fp/no-throw
      throw new Error(`Can not construct ${n}-tuple of array with length ${as.length}`);
    }
    return as;
  };
}

export type Separator = '-';
export const separator: Separator = '-';

export type Group = string;
export type Groups = [Group, Group, Group, Group, Group];
export const groups = (uuid: Uuid): Groups =>
  P.pipe(uuid.split(separator), unsafeTuple(5));

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
        unsafeTuple(2),
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
