/*

undefined
MaaS customer virtual cards add token reference response

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as VirtualCard_ from '../virtualCard';

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
  'https://schemas.maas.global/maas-backend/customers/virtual-cards/add-token-reference/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    virtualCard?: VirtualCard_.VirtualCard;
  } & {
    virtualCard: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        virtualCard: typeof VirtualCard_.VirtualCard;
      }>,
      t.TypeC<{
        virtualCard: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      virtualCard: VirtualCard_.VirtualCard,
    }),
    t.type({
      virtualCard: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      virtualCard?: VirtualCard_.VirtualCard;
    } & {
      virtualCard: Defined;
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
