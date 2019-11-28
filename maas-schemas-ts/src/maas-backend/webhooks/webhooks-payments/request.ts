/*

undefined
MaaS webhook to receive payment status updates from payment gateways.

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Avainpay_ from 'maas-schemas-ts/maas-backend/webhooks/webhooks-payments/gateway/avainpay';
import * as Stripe_ from 'maas-schemas-ts/maas-backend/webhooks/webhooks-payments/gateway/stripe';
import * as Yaband_ from 'maas-schemas-ts/maas-backend/webhooks/webhooks-payments/gateway/yaband';

export const schemaId =
  'http://maasglobal.com/maas-backend/webhooks/webhooks-payments/request.json';

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  Avainpay_.Request | Stripe_.Request | Yaband_.Request,
  DefaultBrand
>;
export const Default = t.brand(
  t.union([Avainpay_.Request, Stripe_.Request, Yaband_.Request]),
  (
    x,
  ): x is t.Branded<
    Avainpay_.Request | Stripe_.Request | Yaband_.Request,
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
