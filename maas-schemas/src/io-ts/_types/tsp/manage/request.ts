/*

undefined
Request schema for managing TSP

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Customer_c745_ from '../../core/customer';

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

export const schemaId = 'https://schemas.maas.global/tsp/manage/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  ({
    operation?: string;
    customer?: Customer_c745_.Customer;
  } & Record<string, unknown>) & {
    operation: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            operation: t.StringC;
            customer: typeof Customer_c745_.Customer;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        operation: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        operation: t.string,
        customer: Customer_c745_.Customer,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      operation: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      operation?: string;
      customer?: Customer_c745_.Customer;
    } & Record<string, unknown>) & {
      operation: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export type RequestBrand = {
  readonly Request: unique symbol;
};

export default Request;

// Success
