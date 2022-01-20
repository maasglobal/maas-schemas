/*

undefined
MaaS customer delete

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId =
  'https://schemas.maas.global/maas-backend/customers/delete/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    status?: string & ('IN_PROGRESS' | 'DELETED');
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.PartialC<{
    status: t.IntersectionC<
      [t.StringC, t.UnionC<[t.LiteralC<'IN_PROGRESS'>, t.LiteralC<'DELETED'>]>]
    >;
  }>,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.partial({
    status: t.intersection([
      t.string,
      t.union([t.literal('IN_PROGRESS'), t.literal('DELETED')]),
    ]),
  }),
  (
    x,
  ): x is t.Branded<
    {
      status?: string & ('IN_PROGRESS' | 'DELETED');
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