/*

undefined
Response schema for subscriptions-estimate

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Pricing_ from '../pricing';

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
  'https://schemas.maas.global/maas-backend/subscriptions/subscriptions-estimate/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    estimate?: Pricing_.Pricing;
    immediateUpdate?: boolean;
    debug?: Record<string, unknown>;
  } & {
    estimate: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        estimate: typeof Pricing_.Pricing;
        immediateUpdate: t.BooleanC;
        debug: t.RecordC<t.StringC, t.UnknownC>;
      }>,
      t.TypeC<{
        estimate: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      estimate: Pricing_.Pricing,
      immediateUpdate: t.boolean,
      debug: t.record(t.string, t.unknown),
    }),
    t.type({
      estimate: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      estimate?: Pricing_.Pricing;
      immediateUpdate?: boolean;
      debug?: Record<string, unknown>;
    } & {
      estimate: Defined;
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
