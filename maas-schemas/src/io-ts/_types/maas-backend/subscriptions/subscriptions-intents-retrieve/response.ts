/*

undefined
Response schema for subscriptions-intents-retrieve

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as SubscriptionIntent_b244_ from '../subscription-intent';

export type Defined = {} | null;
export class DefinedType extends t.Type<Defined> {
  readonly _tag: 'DefinedType' = 'DefinedType';
  constructor() {
    super(
      'defined',
      (u): u is Defined => typeof u !== 'undefined',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
  }
}
export type DefinedC = {} & DefinedType;
export const Defined: DefinedC = new DefinedType();

export const schemaId =
  'https://schemas.maas.global/maas-backend/subscriptions/subscriptions-intents-retrieve/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    subscriptionIntent?: SubscriptionIntent_b244_.SubscriptionIntentBase;
  } & {
    subscriptionIntent: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        subscriptionIntent: typeof SubscriptionIntent_b244_.SubscriptionIntentBase;
      }>,
      t.TypeC<{
        subscriptionIntent: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      subscriptionIntent: SubscriptionIntent_b244_.SubscriptionIntentBase,
    }),
    t.type({
      subscriptionIntent: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      subscriptionIntent?: SubscriptionIntent_b244_.SubscriptionIntentBase;
    } & {
      subscriptionIntent: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export type ResponseBrand = {
  readonly Response: unique symbol;
};

export default Response;

// Success
