import * as P from 'maasglobal-prelude-ts';

import { Account, AccountAlias } from '../../_types/environments/accounts';
import { Environment, Environments } from '../../_types/environments/environments';
import { Synopses } from '../../_types/environments/synopses';
import { GroupMeta, Synopsis } from '../../_types/environments/synopsis';

export const fromEnvironments: P.Reader<Environments, Synopses> = (environments) =>
  environments.index.flatMap(({ envs, name, description }) =>
    envs.map((environment: Environment): Synopsis => {
      const alias: AccountAlias = environment.account;
      const account: Account | null = P.pipe(
        P.Option_.fromNullable(environments.accounts),
        P.Option_.chain((accounts: Record<AccountAlias, Account>) =>
          P.Option_.fromNullable(accounts[alias]),
        ),
        P.Option_.toNullable,
      );
      const group: GroupMeta = (
        description
          ? {
              name,
              description,
            }
          : { name }
      ) as GroupMeta;
      return {
        environment,
        account,
        group,
      } as Synopsis;
    }),
  ) as Synopses;
