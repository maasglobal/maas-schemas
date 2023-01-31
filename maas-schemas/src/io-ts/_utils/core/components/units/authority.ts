import {
  Authority,
  defaultHostPortDelimiter as colon,
  defaultNetworkSchemeDelimiter as colonSlashSlash,
  Hostname,
  Port,
} from '../../../../_types/core/components/units';

export const authority = (hostname: Hostname, port: Port): Authority =>
  [hostname, port].join(colon) as Authority;

export const fromOrigin = (origin: string): Authority => {
  const [_scheme, rest] = origin.split(colonSlashSlash);
  return rest as Authority;
};
