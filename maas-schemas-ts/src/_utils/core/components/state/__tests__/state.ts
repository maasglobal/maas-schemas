import * as P from 'maasglobal-prelude-ts';

import { validator } from 'io-ts-validator';

import { State } from '../../../../../_types/core/components/state';

import * as State_ from '../state';

describe('state', () => {
  it('should export BookingState utils', () => {
    expect(State_.BookingState_).toBeDefined;
  });
});
