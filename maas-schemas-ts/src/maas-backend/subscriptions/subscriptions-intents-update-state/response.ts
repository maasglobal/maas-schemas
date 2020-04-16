/*

undefined
Response schema for subscriptions-intents-create

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as SubscriptionIntent_ from 'maas-schemas-ts/maas-backend/subscriptions/subscription-intent';

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
  'http://maasglobal.com/maas-backend/subscriptions/subscriptions-intents-update-state/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    subscriptionIntent?: SubscriptionIntent_.SubscriptionIntentBase;
  } & {
    subscriptionIntent: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      subscriptionIntent: SubscriptionIntent_.SubscriptionIntentBase,
    }),
    t.type({
      subscriptionIntent: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      subscriptionIntent?: SubscriptionIntent_.SubscriptionIntentBase;
    } & {
      subscriptionIntent: Defined;
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
