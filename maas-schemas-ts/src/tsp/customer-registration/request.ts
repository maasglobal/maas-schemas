/*

undefined
Request schema for customer registration

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Customer_ from 'maas-schemas-ts/core/customer';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId = 'http://maasglobal.com/tsp/customer-registration/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    customer?: Customer_.Customer;
  } & {
    customer: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      customer: Customer_.Customer,
    }),
    t.type({
      customer: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customer?: Customer_.Customer;
    } & {
      customer: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success