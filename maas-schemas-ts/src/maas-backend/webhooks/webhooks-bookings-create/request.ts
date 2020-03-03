/*

undefined
Request schema for webhooks-bookings-create

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as I18n_ from 'maas-schemas-ts/core/components/i18n';
import * as Booking_ from 'maas-schemas-ts/core/booking';
import * as BookingMeta_ from 'maas-schemas-ts/core/booking-meta';
import * as CustomerSelection_ from 'maas-schemas-ts/core/components/customerSelection';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';

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
  'http://maasglobal.com/maas-backend/webhooks/webhooks-bookings-create/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    payload?: {
      identityId?: Units_.IdentityId;
      locale?: I18n_.Locale;
      option?: {
        cost?: Booking_.Cost;
        leg?: Booking_.Leg;
        meta?: BookingMeta_.BookingMeta;
        terms?: Booking_.Terms;
        tspProduct?: {
          id?: string;
        };
        configurator?: Booking_.Configurator;
      } & (
        | {
            leg: Defined;
            terms: Defined;
            cost: Defined;
            meta: Defined;
          }
        | {
            leg: Defined;
            terms: Defined;
            cost: Defined;
            meta: Defined;
            configurator: Defined;
          });
      customerSelection?: CustomerSelection_.CustomerSelection;
    } & {
      option: Defined;
      identityId: Defined;
      locale: Defined;
    };
    headers?: ApiCommon_.Headers;
  } & {
    payload: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      payload: t.intersection([
        t.partial({
          identityId: Units_.IdentityId,
          locale: I18n_.Locale,
          option: t.intersection([
            t.partial({
              cost: Booking_.Cost,
              leg: Booking_.Leg,
              meta: BookingMeta_.BookingMeta,
              terms: Booking_.Terms,
              tspProduct: t.partial({
                id: t.string,
              }),
              configurator: Booking_.Configurator,
            }),
            t.union([
              t.type({
                leg: Defined,
                terms: Defined,
                cost: Defined,
                meta: Defined,
              }),
              t.type({
                leg: Defined,
                terms: Defined,
                cost: Defined,
                meta: Defined,
                configurator: Defined,
              }),
            ]),
          ]),
          customerSelection: CustomerSelection_.CustomerSelection,
        }),
        t.type({
          option: Defined,
          identityId: Defined,
          locale: Defined,
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      payload?: {
        identityId?: Units_.IdentityId;
        locale?: I18n_.Locale;
        option?: {
          cost?: Booking_.Cost;
          leg?: Booking_.Leg;
          meta?: BookingMeta_.BookingMeta;
          terms?: Booking_.Terms;
          tspProduct?: {
            id?: string;
          };
          configurator?: Booking_.Configurator;
        } & (
          | {
              leg: Defined;
              terms: Defined;
              cost: Defined;
              meta: Defined;
            }
          | {
              leg: Defined;
              terms: Defined;
              cost: Defined;
              meta: Defined;
              configurator: Defined;
            });
        customerSelection?: CustomerSelection_.CustomerSelection;
      } & {
        option: Defined;
        identityId: Defined;
        locale: Defined;
      };
      headers?: ApiCommon_.Headers;
    } & {
      payload: Defined;
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
