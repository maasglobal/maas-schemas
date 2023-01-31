/*

undefined
Request schema for stations list

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_16a4_ from '../../../core/components/api-common';
import * as Common_ffba_ from '../../../core/components/common';
import * as Units_c404_ from '../../../core/components/units';
import * as UnitsGeo_3e31_ from '../../../core/components/units-geo';

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
  'https://schemas.maas.global/maas-backend/stations/stations-list/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_c404_.IdentityId;
    agencyId?: Common_ffba_.AgencyId;
    payload?:
      | (({
          lat?: UnitsGeo_3e31_.RelaxedLatitude;
          lon?: UnitsGeo_3e31_.RelaxedLatitude;
          radius?: number;
          type?: 'origin' | 'destination' | 'viaAvoid';
        } & Record<string, unknown>) & {
          lat: Defined;
          lon: Defined;
          type: Defined;
        })
      | (({
          agencyId?: Common_ffba_.AgencyId;
          name?: string;
          count?: number;
          type?: 'origin' | 'destination' | 'viaAvoid';
        } & Record<string, unknown>) & {
          name: Defined;
          count: Defined;
          type: Defined;
        });
    headers?: ApiCommon_16a4_.Headers;
  } & {
    identityId: Defined;
    agencyId: Defined;
    payload: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_c404_.IdentityId;
        agencyId: typeof Common_ffba_.AgencyId;
        payload: t.UnionC<
          [
            t.IntersectionC<
              [
                t.IntersectionC<
                  [
                    t.PartialC<{
                      lat: typeof UnitsGeo_3e31_.RelaxedLatitude;
                      lon: typeof UnitsGeo_3e31_.RelaxedLatitude;
                      radius: t.NumberC;
                      type: t.UnionC<
                        [
                          t.LiteralC<'origin'>,
                          t.LiteralC<'destination'>,
                          t.LiteralC<'viaAvoid'>,
                        ]
                      >;
                    }>,
                    t.RecordC<t.StringC, t.UnknownC>,
                  ]
                >,
                t.TypeC<{
                  lat: typeof Defined;
                  lon: typeof Defined;
                  type: typeof Defined;
                }>,
              ]
            >,
            t.IntersectionC<
              [
                t.IntersectionC<
                  [
                    t.PartialC<{
                      agencyId: typeof Common_ffba_.AgencyId;
                      name: t.StringC;
                      count: t.NumberC;
                      type: t.UnionC<
                        [
                          t.LiteralC<'origin'>,
                          t.LiteralC<'destination'>,
                          t.LiteralC<'viaAvoid'>,
                        ]
                      >;
                    }>,
                    t.RecordC<t.StringC, t.UnknownC>,
                  ]
                >,
                t.TypeC<{
                  name: typeof Defined;
                  count: typeof Defined;
                  type: typeof Defined;
                }>,
              ]
            >,
          ]
        >;
        headers: typeof ApiCommon_16a4_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        agencyId: typeof Defined;
        payload: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_c404_.IdentityId,
      agencyId: Common_ffba_.AgencyId,
      payload: t.union([
        t.intersection([
          t.intersection([
            t.partial({
              lat: UnitsGeo_3e31_.RelaxedLatitude,
              lon: UnitsGeo_3e31_.RelaxedLatitude,
              radius: t.number,
              type: t.union([
                t.literal('origin'),
                t.literal('destination'),
                t.literal('viaAvoid'),
              ]),
            }),
            t.record(t.string, t.unknown),
          ]),
          t.type({
            lat: Defined,
            lon: Defined,
            type: Defined,
          }),
        ]),
        t.intersection([
          t.intersection([
            t.partial({
              agencyId: Common_ffba_.AgencyId,
              name: t.string,
              count: t.number,
              type: t.union([
                t.literal('origin'),
                t.literal('destination'),
                t.literal('viaAvoid'),
              ]),
            }),
            t.record(t.string, t.unknown),
          ]),
          t.type({
            name: Defined,
            count: Defined,
            type: Defined,
          }),
        ]),
      ]),
      headers: ApiCommon_16a4_.Headers,
    }),
    t.type({
      identityId: Defined,
      agencyId: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_c404_.IdentityId;
      agencyId?: Common_ffba_.AgencyId;
      payload?:
        | (({
            lat?: UnitsGeo_3e31_.RelaxedLatitude;
            lon?: UnitsGeo_3e31_.RelaxedLatitude;
            radius?: number;
            type?: 'origin' | 'destination' | 'viaAvoid';
          } & Record<string, unknown>) & {
            lat: Defined;
            lon: Defined;
            type: Defined;
          })
        | (({
            agencyId?: Common_ffba_.AgencyId;
            name?: string;
            count?: number;
            type?: 'origin' | 'destination' | 'viaAvoid';
          } & Record<string, unknown>) & {
            name: Defined;
            count: Defined;
            type: Defined;
          });
      headers?: ApiCommon_16a4_.Headers;
    } & {
      identityId: Defined;
      agencyId: Defined;
      payload: Defined;
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
