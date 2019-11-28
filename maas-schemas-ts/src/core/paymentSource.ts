/*

undefined
MaaS region schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Card_ from 'maas-schemas-ts/core/card';

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

export const schemaId = 'http://maasglobal.com/core/paymentSource.json';

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    id?: string;
    customerId?: Units_.IdentityId;
    type?: string &
      (
        | 'card'
        | 'paypal_express_checkout'
        | 'amazon_payments'
        | 'direct_debit'
        | 'generic'
        | 'alipay'
        | 'unionpay'
        | 'apple_pay');
    gateway?: string;
    gatewayId?: string;
    temporaryToken?: string;
    status?: string;
    valid?: boolean;
    card?: Card_.Default;
  } & {
    customerId: Defined;
    type: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      id: t.string,
      customerId: Units_.IdentityId,
      type: t.intersection([
        t.string,
        t.union([
          t.literal('card'),
          t.literal('paypal_express_checkout'),
          t.literal('amazon_payments'),
          t.literal('direct_debit'),
          t.literal('generic'),
          t.literal('alipay'),
          t.literal('unionpay'),
          t.literal('apple_pay'),
        ]),
      ]),
      gateway: t.string,
      gatewayId: t.string,
      temporaryToken: t.string,
      status: t.string,
      valid: t.boolean,
      card: Card_.Default,
    }),
    t.type({
      customerId: Defined,
      type: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
      customerId?: Units_.IdentityId;
      type?: string &
        (
          | 'card'
          | 'paypal_express_checkout'
          | 'amazon_payments'
          | 'direct_debit'
          | 'generic'
          | 'alipay'
          | 'unionpay'
          | 'apple_pay');
      gateway?: string;
      gatewayId?: string;
      temporaryToken?: string;
      status?: string;
      valid?: boolean;
      card?: Card_.Default;
    } & {
      customerId: Defined;
      type: Defined;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
