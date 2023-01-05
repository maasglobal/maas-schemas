/*

undefined
MaaS customer virtual cards provision response

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
  'https://schemas.maas.global/maas-backend/customers/virtual-cards/provision/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    virtualCard?: VirtualCard_.VirtualCard;
    provisionData?: Record<string, unknown> & Record<string, unknown>;
  } & {
    virtualCard: Defined;
    provisionData: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        virtualCard: typeof VirtualCard_.VirtualCard;
        provisionData: t.IntersectionC<
          [t.UnknownRecordC, t.RecordC<t.StringC, t.UnknownC>]
        >;
      }>,
      t.TypeC<{
        virtualCard: typeof Defined;
        provisionData: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      virtualCard: VirtualCard_.VirtualCard,
      provisionData: t.intersection([t.UnknownRecord, t.record(t.string, t.unknown)]),
    }),
    t.type({
      virtualCard: Defined,
      provisionData: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      virtualCard?: VirtualCard_.VirtualCard;
      provisionData?: Record<string, unknown> & Record<string, unknown>;
    } & {
      virtualCard: Defined;
      provisionData: Defined;
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
