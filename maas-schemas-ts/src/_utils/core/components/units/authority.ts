import { Hostname } from '../../../../_types/core/components/units';

import {
  Authority,
  defaultHostPortDelimiter as colon,
  defaultNetworkSchemeDelimiter as colonSlashSlash,
  Port,
} from '../../../../_types/core/components/units';

export const authority = (hostname: Hostname, port: Port): Authority =>
  [hostname, port].join(colon) as Authority;

export const fromOrigin = (origin: string): Authority => {
  const [_scheme, rest] = origin.split(colonSlashSlash);
  return rest as Authority;
};
