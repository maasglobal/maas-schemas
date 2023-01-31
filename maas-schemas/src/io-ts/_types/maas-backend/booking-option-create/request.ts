/*

undefined
Request schema for booking-option-create

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as AgencyOptions_6c5f_ from '../../core/components/agencyOptions';
import * as ApiCommon_16a4_ from '../../core/components/api-common';
import * as Common_ffba_ from '../../core/components/common';
import * as CustomerSelection_57c3_ from '../../core/components/customerSelection';
import * as Units_c404_ from '../../core/components/units';
import * as Product_d23e_ from '../../core/product';

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
  'https://schemas.maas.global/maas-backend/booking-option-create/request.json';

// Option
// The purpose of this remains a mystery
export type Option = t.Branded<
  {
    paymentSourceId?: Common_ffba_.PaymentSourceId;
    productId?: Product_d23e_.Id;
    customerSelection?: CustomerSelection_57c3_.CustomerSelection;
    autoPurchaseId?: Units_c404_.Uuid;
    agencyOptions?: AgencyOptions_6c5f_.AgencyOptions;
    rollbackOnFailure?: boolean;
  },
  OptionBrand
>;
export type OptionC = t.BrandC<
  t.PartialC<{
    paymentSourceId: typeof Common_ffba_.PaymentSourceId;
    productId: typeof Product_d23e_.Id;
    customerSelection: typeof CustomerSelection_57c3_.CustomerSelection;
    autoPurchaseId: typeof Units_c404_.Uuid;
    agencyOptions: typeof AgencyOptions_6c5f_.AgencyOptions;
    rollbackOnFailure: t.BooleanC;
  }>,
  OptionBrand
>;
export const Option: OptionC = t.brand(
  t.partial({
    paymentSourceId: Common_ffba_.PaymentSourceId,
    productId: Product_d23e_.Id,
    customerSelection: CustomerSelection_57c3_.CustomerSelection,
    autoPurchaseId: Units_c404_.Uuid,
    agencyOptions: AgencyOptions_6c5f_.AgencyOptions,
    rollbackOnFailure: t.boolean,
  }),
  (
    x,
  ): x is t.Branded<
    {
      paymentSourceId?: Common_ffba_.PaymentSourceId;
      productId?: Product_d23e_.Id;
      customerSelection?: CustomerSelection_57c3_.CustomerSelection;
      autoPurchaseId?: Units_c404_.Uuid;
      agencyOptions?: AgencyOptions_6c5f_.AgencyOptions;
      rollbackOnFailure?: boolean;
    },
    OptionBrand
  > => true,
  'Option',
);
export type OptionBrand = {
  readonly Option: unique symbol;
};

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_c404_.IdentityId;
    payload?: Array<Option>;
    headers?: ApiCommon_16a4_.Headers;
  } & {
    identityId: Defined;
    payload: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_c404_.IdentityId;
        payload: t.ArrayC<typeof Option>;
        headers: typeof ApiCommon_16a4_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        payload: typeof Defined;
        headers: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_c404_.IdentityId,
      payload: t.array(Option),
      headers: ApiCommon_16a4_.Headers,
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
      identityId?: Units_c404_.IdentityId;
      payload?: Array<Option>;
      headers?: ApiCommon_16a4_.Headers;
    } & {
      identityId: Defined;
      payload: Defined;
      headers: Defined;
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