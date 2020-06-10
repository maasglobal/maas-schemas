/*

undefined
Request schema for booking-option-create

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Common_ from '../../core/components/common';
import * as Product_ from '../../core/product';
import * as CustomerSelection_ from '../../core/components/customerSelection';
import * as Units_ from '../../core/components/units';
import * as AgencyOptions_ from '../../core/components/agencyOptions';
import * as ApiCommon_ from '../../core/components/api-common';

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

export const schemaId =
  'http://maasglobal.com/maas-backend/booking-option-create/request.json';

// Option
// The purpose of this remains a mystery
export type Option = t.Branded<
  {
    paymentSourceId?: Common_.PaymentSourceId;
    productId?: Product_.Id;
    customerSelection?: CustomerSelection_.CustomerSelection;
    autoPurchaseId?: Units_.Uuid;
    agencyOptions?: AgencyOptions_.AgencyOptions;
    rollbackOnFailure?: boolean;
  },
  OptionBrand
>;
export const Option = t.brand(
  t.partial({
    paymentSourceId: Common_.PaymentSourceId,
    productId: Product_.Id,
    customerSelection: CustomerSelection_.CustomerSelection,
    autoPurchaseId: Units_.Uuid,
    agencyOptions: AgencyOptions_.AgencyOptions,
    rollbackOnFailure: t.boolean,
  }),
  (
    x,
  ): x is t.Branded<
    {
      paymentSourceId?: Common_.PaymentSourceId;
      productId?: Product_.Id;
      customerSelection?: CustomerSelection_.CustomerSelection;
      autoPurchaseId?: Units_.Uuid;
      agencyOptions?: AgencyOptions_.AgencyOptions;
      rollbackOnFailure?: boolean;
    },
    OptionBrand
  > => true,
  'Option',
);
export interface OptionBrand {
  readonly Option: unique symbol;
}

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: Array<Option>;
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    payload: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      payload: t.array(Option),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      payload: Defined,
      headers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: Array<Option>;
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      payload: Defined;
      headers: Defined;
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
