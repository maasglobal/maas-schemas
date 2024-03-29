/*

undefined
Response schema for subscriptions-change-state

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as SubscriptionChangeState_e96c_ from '../../../core/components/subscriptionChangeState';

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
  'https://schemas.maas.global/maas-backend/subscriptions/subscriptions-change-state/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    changeState?: SubscriptionChangeState_e96c_.SubscriptionChangeState;
  } & {
    changeState: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        changeState: typeof SubscriptionChangeState_e96c_.SubscriptionChangeState;
      }>,
      t.TypeC<{
        changeState: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      changeState: SubscriptionChangeState_e96c_.SubscriptionChangeState,
    }),
    t.type({
      changeState: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      changeState?: SubscriptionChangeState_e96c_.SubscriptionChangeState;
    } & {
      changeState: Defined;
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
