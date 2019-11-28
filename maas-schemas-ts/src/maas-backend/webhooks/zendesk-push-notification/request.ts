/*

undefined
MaaS Zendesk push notification forwarder request schema.

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

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
  'http://maasglobal.com/maas-backend/webhooks/zendesk-push-notification/request.json';

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    devices?: Array<{
      identifier: Defined;
      type: Defined;
    }>;
    notification?: {
      body?: string;
      title?: string;
      ticket_id?: string;
    };
  } & {
    devices: Defined;
    notification: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      devices: t.array(
        t.type({
          identifier: Defined,
          type: Defined,
        }),
      ),
      notification: t.partial({
        body: t.string,
        title: t.string,
        ticket_id: t.string,
      }),
    }),
    t.type({
      devices: Defined,
      notification: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      devices?: Array<{
        identifier: Defined;
        type: Defined;
      }>;
      notification?: {
        body?: string;
        title?: string;
        ticket_id?: string;
      };
    } & {
      devices: Defined;
      notification: Defined;
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
