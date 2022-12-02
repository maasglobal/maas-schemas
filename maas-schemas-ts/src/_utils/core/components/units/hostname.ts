import * as P from 'maasglobal-prelude-ts';

import { Hostname, HostnameLabel } from '../../../../_types/core/components/units';

import {
  Authority,
  defaultHostnameDelimiter as dot,
  defaultHostPortDelimiter as colon,
} from '../../../../_types/core/components/units';

export const fromAuthority = (authority: Authority): Hostname =>
  P.pipe(authority.split(colon), ([hostname, _port]) => hostname as Hostname);

export const normalize = (h: Hostname): Hostname => {
  const space = ' ';
  return h.split(dot).join(space).trim().split(space).join(dot) as Hostname;
};

export const labels = (h: Hostname): P.NonEmptyArray<HostnameLabel> =>
  P.pipe(
    h,
    P.string_.split(dot),
    P.NonEmptyArray_.fromReadonlyNonEmptyArray,
    P.NonEmptyArray_.map((x): HostnameLabel => (x as unknown) as HostnameLabel),
  );

export const fromLabels = (labels: P.NonEmptyArray<HostnameLabel>): Hostname => {
  return labels.join(dot) as Hostname;
};

export const stripBase = (base: Hostname) => (full: Hostname): P.Option<Hostname> => {
  return P.pipe(
    {
      b: normalize(base),
      f: normalize(full),
    },
    P.Option_.fromPredicate(({ f, b }) => f.endsWith(b)),
    P.Option_.map(({ f, b }) => normalize(f.slice(0, 0 - b.length) as Hostname)),
  );
};

export const concat = (b: Hostname) => (a: Hostname): Hostname =>
  normalize([normalize(a), normalize(b)].join(dot) as Hostname);
