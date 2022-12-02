import * as P from 'maasglobal-prelude-ts';

import * as t from 'io-ts';
import { NumberFromString } from 'io-ts-types/lib/NumberFromString';

import {
  Authority,
  defaultHostPortDelimiter as colon,
  Port,
} from '../../../../_types/core/components/units';

export const PortFromString = t.brand(NumberFromString, Port.is, 'Port');
export type PortFromString = t.TypeOf<typeof PortFromString>;

export const fromAuthority = (authority: Authority): P.Option<Port> =>
  P.pipe(
    authority.split(colon),
    ([_hostname, port]) => P.Option_.fromNullable(port),
    P.Option_.map((port) => parseInt(port, 10) as Port),
  );
