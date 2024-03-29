/*

undefined
Response schema for retrieving customer registration details

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

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
  'https://schemas.maas.global/tsp/customer-registration/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  ({
    customer?: Record<string, unknown> & Record<string, unknown>;
  } & Record<string, unknown>) & {
    customer: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            customer: t.IntersectionC<
              [t.UnknownRecordC, t.RecordC<t.StringC, t.UnknownC>]
            >;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        customer: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        customer: t.intersection([t.UnknownRecord, t.record(t.string, t.unknown)]),
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      customer: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      customer?: Record<string, unknown> & Record<string, unknown>;
    } & Record<string, unknown>) & {
      customer: Defined;
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
