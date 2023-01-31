import * as P from 'maasglobal-prelude-ts';

import { validator } from 'io-ts-validator';

import {
  Authority,
  Hostname,
  HostnameLabel,
} from '../../../../../_types/core/components/units';
import { EnvironmentId } from '../../../../../_types/environments/environments';
import * as Hostname_ from '../hostname';

describe('hostname', () => {
  describe('fromAuthority function', () => {
    it('should extract hostname from authority', () => {
      const authority = validator(Authority).decodeSync('example.com:12345');
      const hostname = Hostname_.fromAuthority(authority);
      expect(hostname).toEqual('example.com');
    });
  });
  describe('normalize function', () => {
    it('should extract labels from hostname', () => {
      const hostname = '.www.example.com.' as Hostname;
      const normalized = Hostname_.normalize(hostname);
      expect(normalized).toStrictEqual('www.example.com');
    });
  });
  describe('labels function', () => {
    it('should extract labels from hostname', () => {
      const hostname = validator(Hostname).decodeSync('www.example.com');
      const labels = Hostname_.labels(hostname);
      expect(labels).toStrictEqual(['www', 'example', 'com']);
    });
  });
  describe('fromLabels function', () => {
    it('should construct hostname from labels', () => {
      const labels = validator(P.NonEmptyArray(HostnameLabel)).decodeSync([
        'www',
        'example',
        'com',
      ]);
      const hostname = Hostname_.fromLabels(labels);
      expect(hostname).toStrictEqual('www.example.com');
    });
  });
  describe('concat function', () => {
    it('should concat hostnames', () => {
      const foo = validator(Hostname).decodeSync('foo.example.com');
      const bar = validator(Hostname).decodeSync('bar.example.com');
      const hostname = P.pipe(foo, Hostname_.concat(bar));
      expect(hostname).toStrictEqual('foo.example.com.bar.example.com');
    });
  });
  describe('stripBase function', () => {
    const currentEnv = validator(EnvironmentId).decodeSync('current');

    const subLabel = validator(HostnameLabel).decodeSync('sub');
    const envLabel = validator(HostnameLabel).decodeSync(currentEnv);
    const baseLabel = validator(HostnameLabel).decodeSync('localhost');

    const baseHostname = Hostname_.fromLabels([baseLabel]);
    const relativeHostname = Hostname_.fromLabels([subLabel, envLabel]);

    const fullHostname = P.pipe(relativeHostname, Hostname_.concat(baseHostname));

    const result = P.pipe(fullHostname, Hostname_.stripBase(baseHostname));
    const expected = P.Option_.some(relativeHostname);

    it('should return initial state', () => {
      expect(result).toEqual(expected);
    });
  });
});
