/*

undefined
Request schema for webhooks-bookings-create

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import * as t from 'io-ts';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

import * as Booking_4353_ from '../../../core/booking';
import * as BookingMeta_c057_ from '../../../core/booking-meta';
import * as ApiCommon_16a4_ from '../../../core/components/api-common';
import * as CustomerSelection_57c3_ from '../../../core/components/customerSelection';
import * as I18n_b70d_ from '../../../core/components/i18n';
import * as Units_c404_ from '../../../core/components/units';

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
  'https://schemas.maas.global/maas-backend/webhooks/webhooks-bookings-create/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    payload?: ({
      identityId?: Units_c404_.IdentityId;
      locale?: I18n_b70d_.Locale;
      option?: ({
        cost?: Booking_4353_.Cost;
        leg?: Booking_4353_.Leg;
        meta?: BookingMeta_c057_.BookingMeta;
        terms?: Booking_4353_.Terms;
        tspProduct?: {
          id?: string;
        } & Record<string, unknown>;
        configurator?: Booking_4353_.Configurator;
      } & Record<string, unknown>) &
        (
          | (Record<string, unknown> &
              Record<string, unknown> & {
                leg: Defined;
                terms: Defined;
                cost: Defined;
                meta: Defined;
              })
          | (Record<string, unknown> &
              Record<string, unknown> & {
                leg: Defined;
                terms: Defined;
                cost: Defined;
                meta: Defined;
                configurator: Defined;
              })
        );
      customerSelection?: CustomerSelection_57c3_.CustomerSelection;
    } & Record<string, unknown>) & {
      option: Defined;
      identityId: Defined;
      locale: Defined;
    };
    headers?: ApiCommon_16a4_.Headers;
  } & {
    payload: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        payload: t.IntersectionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  identityId: typeof Units_c404_.IdentityId;
                  locale: typeof I18n_b70d_.Locale;
                  option: t.IntersectionC<
                    [
                      t.IntersectionC<
                        [
                          t.PartialC<{
                            cost: typeof Booking_4353_.Cost;
                            leg: typeof Booking_4353_.Leg;
                            meta: typeof BookingMeta_c057_.BookingMeta;
                            terms: typeof Booking_4353_.Terms;
                            tspProduct: t.IntersectionC<
                              [
                                t.PartialC<{
                                  id: t.StringC;
                                }>,
                                t.RecordC<t.StringC, t.UnknownC>,
                              ]
                            >;
                            configurator: typeof Booking_4353_.Configurator;
                          }>,
                          t.RecordC<t.StringC, t.UnknownC>,
                        ]
                      >,
                      t.UnionC<
                        [
                          t.IntersectionC<
                            [
                              t.UnknownRecordC,
                              t.RecordC<t.StringC, t.UnknownC>,
                              t.TypeC<{
                                leg: typeof Defined;
                                terms: typeof Defined;
                                cost: typeof Defined;
                                meta: typeof Defined;
                              }>,
                            ]
                          >,
                          t.IntersectionC<
                            [
                              t.UnknownRecordC,
                              t.RecordC<t.StringC, t.UnknownC>,
                              t.TypeC<{
                                leg: typeof Defined;
                                terms: typeof Defined;
                                cost: typeof Defined;
                                meta: typeof Defined;
                                configurator: typeof Defined;
                              }>,
                            ]
                          >,
                        ]
                      >,
                    ]
                  >;
                  customerSelection: typeof CustomerSelection_57c3_.CustomerSelection;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >,
            t.TypeC<{
              option: typeof Defined;
              identityId: typeof Defined;
              locale: typeof Defined;
            }>,
          ]
        >;
        headers: typeof ApiCommon_16a4_.Headers;
      }>,
      t.TypeC<{
        payload: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      payload: t.intersection([
        t.intersection([
          t.partial({
            identityId: Units_c404_.IdentityId,
            locale: I18n_b70d_.Locale,
            option: t.intersection([
              t.intersection([
                t.partial({
                  cost: Booking_4353_.Cost,
                  leg: Booking_4353_.Leg,
                  meta: BookingMeta_c057_.BookingMeta,
                  terms: Booking_4353_.Terms,
                  tspProduct: t.intersection([
                    t.partial({
                      id: t.string,
                    }),
                    t.record(t.string, t.unknown),
                  ]),
                  configurator: Booking_4353_.Configurator,
                }),
                t.record(t.string, t.unknown),
              ]),
              t.union([
                t.intersection([
                  t.UnknownRecord,
                  t.record(t.string, t.unknown),
                  t.type({
                    leg: Defined,
                    terms: Defined,
                    cost: Defined,
                    meta: Defined,
                  }),
                ]),
                t.intersection([
                  t.UnknownRecord,
                  t.record(t.string, t.unknown),
                  t.type({
                    leg: Defined,
                    terms: Defined,
                    cost: Defined,
                    meta: Defined,
                    configurator: Defined,
                  }),
                ]),
              ]),
            ]),
            customerSelection: CustomerSelection_57c3_.CustomerSelection,
          }),
          t.record(t.string, t.unknown),
        ]),
        t.type({
          option: Defined,
          identityId: Defined,
          locale: Defined,
        }),
      ]),
      headers: ApiCommon_16a4_.Headers,
    }),
    t.type({
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      payload?: ({
        identityId?: Units_c404_.IdentityId;
        locale?: I18n_b70d_.Locale;
        option?: ({
          cost?: Booking_4353_.Cost;
          leg?: Booking_4353_.Leg;
          meta?: BookingMeta_c057_.BookingMeta;
          terms?: Booking_4353_.Terms;
          tspProduct?: {
            id?: string;
          } & Record<string, unknown>;
          configurator?: Booking_4353_.Configurator;
        } & Record<string, unknown>) &
          (
            | (Record<string, unknown> &
                Record<string, unknown> & {
                  leg: Defined;
                  terms: Defined;
                  cost: Defined;
                  meta: Defined;
                })
            | (Record<string, unknown> &
                Record<string, unknown> & {
                  leg: Defined;
                  terms: Defined;
                  cost: Defined;
                  meta: Defined;
                  configurator: Defined;
                })
          );
        customerSelection?: CustomerSelection_57c3_.CustomerSelection;
      } & Record<string, unknown>) & {
        option: Defined;
        identityId: Defined;
        locale: Defined;
      };
      headers?: ApiCommon_16a4_.Headers;
    } & {
      payload: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export type RequestBrand = {
  readonly Request: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(Request)).decodeSync(examplesRequest) // => examplesRequest */
export const examplesRequest: NonEmptyArray<Request> = [
  {
    payload: {
      identityId: 'c4bf3ad0-4e6d-11ea-b64c-a3d04ec90b87',
      locale: 'fi',
      option: {
        cost: { amount: 0, currency: 'EUR' },
        leg: {
          startTime: 1582045562000,
          endTime: 1582045922000,
          from: { lat: 60.17806592826971, lon: 24.958452215046275, name: 'Merihaka' },
          to: { lat: 60.17806592826971, lon: 24.958452215046275, name: 'Merihaka' },
          mode: 'BICYCLE',
        },
        meta: { MODE_BICYCLE: { pickupStationId: '000' } },
        terms: {
          validity: { startTime: 1582045562000, endTime: 1582045922000 },
          cancellation: {
            isCancellable: true,
            cost: { amount: 0, currency: 'EUR' },
            expiration: 1582028997000,
          },
          faresRates: [{ amount: 0, currency: 'EUR', timeInterval: 1800, startAt: 0 }],
        },
        tspProduct: { id: 'Bike' },
      },
    },
  },
] as unknown as NonEmptyArray<Request>;

export default Request;

// Success
