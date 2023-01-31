import * as P from 'maasglobal-prelude-ts';

import { MetaCurrency } from '../../../../_types/core/components/common';

export const Eq: P.Eq<MetaCurrency> = P.string_.Eq;
export const Ord: P.Ord<MetaCurrency> = P.string_.Ord;
