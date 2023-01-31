import * as P from 'maasglobal-prelude-ts';

import { Currency } from '../../../../_types/core/components/units';

export const Eq: P.Eq<Currency> = P.string_.Eq;
export const Ord: P.Ord<Currency> = P.string_.Ord;
