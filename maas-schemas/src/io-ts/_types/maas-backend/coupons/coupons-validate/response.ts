/*

undefined
MaaS coupon validation

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Code_f8bc_ from '../code';

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
  'https://schemas.maas.global/maas-backend/coupons/coupons-validate/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    code?: Code_f8bc_.Code;
    valid?: boolean;
  } & {
    code: Defined;
    valid: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        code: typeof Code_f8bc_.Code;
        valid: t.BooleanC;
      }>,
      t.TypeC<{
        code: typeof Defined;
        valid: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      code: Code_f8bc_.Code,
      valid: t.boolean,
    }),
    t.type({
      code: Defined,
      valid: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      code?: Code_f8bc_.Code;
      valid?: boolean;
    } & {
      code: Defined;
      valid: Defined;
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
