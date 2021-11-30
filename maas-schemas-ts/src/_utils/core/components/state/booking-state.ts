import * as P from 'maasglobal-prelude-ts';

import { BookingState } from '../../../../_types/core/components/state';

export const Eq: P.Eq<BookingState> = P.string_.Eq;
export const Ord: P.Ord<BookingState> = P.string_.Ord;
