import * as P from 'maasglobal-prelude-ts';

import { TokenId } from '../../../../_types/core/components/fare';

export const Eq: P.Eq<TokenId> = P.string_.Eq;
export const Ord: P.Ord<TokenId> = P.string_.Ord;
