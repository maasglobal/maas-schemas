import * as P from 'maasglobal-prelude-ts';

import { AccountAlias } from '../../_types/environments/accounts';
import { EnvironmentId } from '../../_types/environments/environments';

import { Synopsis } from '../../_types/environments/synopsis';

export type AccountSynopsis<A extends AccountAlias> = Synopsis & {
  environment: { account: A };
};
export function accountSynopsis<A extends AccountAlias>(
  alias: A,
): P.Refinement<Synopsis, AccountSynopsis<A>> {
  return (synopsis): synopsis is AccountSynopsis<A> => {
    const {
      environment: { account },
    } = synopsis;
    return account === alias;
  };
}

export type StageSynopsis<S extends EnvironmentId> = Synopsis & {
  environment: { id: S };
};
export function stageSynopsis<S extends EnvironmentId>(
  stage: S,
): P.Refinement<Synopsis, StageSynopsis<S>> {
  return (synopsis): synopsis is StageSynopsis<S> => {
    const {
      environment: { id },
    } = synopsis;
    return id === stage;
  };
}
