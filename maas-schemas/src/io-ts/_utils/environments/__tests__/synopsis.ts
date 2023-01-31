import * as P from 'maasglobal-prelude-ts';

import * as t from 'io-ts';
import { validator } from 'io-ts-validator';

import { AccountAlias } from '../../../_types/environments/accounts';
import { EnvironmentId } from '../../../_types/environments/environments';
import { Synopses } from '../../../_types/environments/synopses';
import { Synopsis } from '../../../_types/environments/synopsis';
import {
  AccountSynopsis,
  accountSynopsis,
  StageSynopsis,
  stageSynopsis,
} from '../synopsis';

const DevAccount = t.intersection([AccountAlias, t.literal('development')]);
type DevAccount = t.TypeOf<typeof DevAccount>;
const devAccount = validator(DevAccount, 'strict').decodeSync('development');

const ProdStage = t.intersection([EnvironmentId, t.literal('prod')]);
type ProdStage = t.TypeOf<typeof ProdStage>;
const prodStage = validator(ProdStage, 'strict').decodeSync('prod');

const devSynopses = validator(Synopses, 'strict').decodeSync([
  {
    environment: {
      account: 'development',
      id: 'dev',
      live: false,
    },
    group: { name: 'Dev Environments' },
    account: { id: '111111111111' },
  },
  {
    environment: {
      account: 'development',
      id: 'woodbox',
      live: false,
    },
    group: { name: 'Dev Environments' },
    account: { id: '111111111111' },
  },
]);

const prodSynopsis = validator(Synopsis, 'strict').decodeSync({
  environment: {
    account: 'production',
    description: 'production',
    id: 'prod',
    live: true,
  },
  group: { name: 'Core Environments' },
  account: { id: '333333333333' },
});

const extraSynopsis = validator(Synopsis, 'strict').decodeSync({
  environment: {
    account: 'testing',
    id: 'alpha',
    live: false,
  },
  group: { name: 'Core Environments' },
  account: { id: '222222222222' },
});

const exampleSynopses: Synopses = [
  ...devSynopses,
  prodSynopsis,
  extraSynopsis,
] as Synopses;

describe('synopsis utils', () => {
  describe('accountSynopsis function', () => {
    it('should work with filter', () => {
      const result: Array<AccountSynopsis<DevAccount>> = P.pipe(
        exampleSynopses,
        P.Array_.filter(accountSynopsis(devAccount)),
      );
      expect(result).toEqual(devSynopses);
    });
  });
  describe('stageSynopsis function', () => {
    it('should work with findFirst', () => {
      const result: StageSynopsis<ProdStage> | null = P.pipe(
        exampleSynopses,
        P.Array_.findFirst(stageSynopsis(prodStage)),
        P.Option_.toNullable,
      );
      expect(result).toEqual(prodSynopsis);
    });
  });
});
