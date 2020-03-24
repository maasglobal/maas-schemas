/*

undefined
MaaS customer stats. Give lifetime stats of customer e.g total number of bookings and itineraries

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/stats/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    identityId?: Units_.IdentityId;
    lifetimeBookingsCount?: number;
    lifetimeItinerariesCount?: number;
    profileCreationTimestamp?: Units_.Time;
  } & {
    identityId: Defined;
    lifetimeBookingsCount: Defined;
    lifetimeItinerariesCount: Defined;
    profileCreationTimestamp: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      lifetimeBookingsCount: t.number,
      lifetimeItinerariesCount: t.number,
      profileCreationTimestamp: Units_.Time,
    }),
    t.type({
      identityId: Defined,
      lifetimeBookingsCount: Defined,
      lifetimeItinerariesCount: Defined,
      profileCreationTimestamp: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      lifetimeBookingsCount?: number;
      lifetimeItinerariesCount?: number;
      profileCreationTimestamp?: Units_.Time;
    } & {
      identityId: Defined;
      lifetimeBookingsCount: Defined;
      lifetimeItinerariesCount: Defined;
      profileCreationTimestamp: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success