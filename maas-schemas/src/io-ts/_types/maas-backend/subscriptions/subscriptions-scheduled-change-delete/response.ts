/*

undefined
Response schema for subscriptions-scheduled-change-delete

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Subscription_b8eb_ from '../subscription';

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
  'https://schemas.maas.global/maas-backend/subscriptions/subscriptions-scheduled-change-delete/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    subscription?: Subscription_b8eb_.Subscription;
    debug?: Record<string, unknown>;
  } & {
    subscription: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        subscription: typeof Subscription_b8eb_.Subscription;
        debug: t.RecordC<t.StringC, t.UnknownC>;
      }>,
      t.TypeC<{
        subscription: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      subscription: Subscription_b8eb_.Subscription,
      debug: t.record(t.string, t.unknown),
    }),
    t.type({
      subscription: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      subscription?: Subscription_b8eb_.Subscription;
      debug?: Record<string, unknown>;
    } & {
      subscription: Defined;
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
