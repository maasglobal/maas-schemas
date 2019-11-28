/*

undefined
Response schema for subscriptions-options

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as SubscriptionOption_ from 'maas-schemas-ts/maas-backend/subscriptions/subscriptionOption';

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
  'http://maasglobal.com/maas-backend/subscriptions/subscriptions-options/response.json';

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    options?: Array<SubscriptionOption_.Default>;
    debug?: {};
  } & {
    options: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      options: t.array(SubscriptionOption_.Default),
      debug: t.type({}),
    }),
    t.type({
      options: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      options?: Array<SubscriptionOption_.Default>;
      debug?: {};
    } & {
      options: Defined;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
