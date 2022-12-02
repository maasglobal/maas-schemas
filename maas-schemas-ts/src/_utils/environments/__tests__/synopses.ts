import { validator } from 'io-ts-validator';

import { Environments } from '../../../_types/environments/environments';

import { Synopses } from '../../../_types/environments/synopses';
import { fromEnvironments } from '../synopses';

const exampleEnvironments = validator(Environments, 'strict').decodeSync({
  accounts: {
    development: {
      id: '111111111111',
    },
    testing: {
      id: '222222222222',
    },
    production: {
      id: '333333333333',
    },
  },
  index: [
    {
      name: 'Core Environments',
      envs: [
        {
          id: 'prod',
          live: true,
          account: 'production',
          description: 'production',
        },
        {
          id: 'alpha',
          live: false,
          account: 'testing',
        },
      ],
    },
    {
      name: 'Dev Environments',
      description: 'Experimental environments used by developers',
      envs: [
        {
          id: 'dev',
          live: false,
          account: 'development',
        },
        {
          id: 'woodbox',
          live: false,
          account: 'development',
        },
      ],
    },
  ],
});

const exampleSynopses = validator(Synopses, 'strict').decodeSync([
  {
    environment: {
      account: 'production',
      description: 'production',
      id: 'prod',
      live: true,
    },
    group: { name: 'Core Environments' },
    account: { id: '333333333333' },
  },
  {
    environment: {
      account: 'testing',
      id: 'alpha',
      live: false,
    },
    group: { name: 'Core Environments' },
    account: { id: '222222222222' },
  },
  {
    environment: {
      account: 'development',
      id: 'dev',
      live: false,
    },
    group: {
      name: 'Dev Environments',

      description: 'Experimental environments used by developers',
    },
    account: { id: '111111111111' },
  },
  {
    environment: {
      account: 'development',
      id: 'woodbox',
      live: false,
    },
    group: {
      name: 'Dev Environments',

      description: 'Experimental environments used by developers',
    },
    account: { id: '111111111111' },
  },
]);

describe('synopses utils', () => {
  describe('fromEnvironments function', () => {
    it('should derive synopses from environments', async () => {
      const result = fromEnvironments(exampleEnvironments);
      expect(result).toEqual(exampleSynopses);
    });
    it('should support missing accounts', async () => {
      const minimalEnvironments = validator(Environments, 'strict').decodeSync({
        index: [
          {
            name: 'Core Environments',
            envs: [
              {
                id: 'prod',
                live: true,
                account: 'production',
              },
            ],
          },
        ],
      });
      const result = fromEnvironments(minimalEnvironments);
      expect(result).toStrictEqual([
        {
          account: null,
          environment: {
            id: 'prod',
            live: true,
            account: 'production',
          },
          group: { name: 'Core Environments' },
        },
      ]);
    });
  });
});
