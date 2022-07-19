/*

undefined
Request schema for autocomplete

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../../core/components/units';
import * as Address_ from '../../../core/components/address';
import * as UnitsGeo_ from '../../../core/components/units-geo';
import * as ApiCommon_ from '../../../core/components/api-common';

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
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId =
  'https://schemas.maas.global/maas-backend/autocomplete/autocomplete-query/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: {
      name?: Address_.PlaceName;
      lat?: UnitsGeo_.RelaxedLatitude;
      lon?: UnitsGeo_.RelaxedLongitude;
      providerHint?: string;
      count?: number;
      radius?: UnitsGeo_.Distance & unknown;
    } & {
      name: Defined;
      lat: Defined;
      lon: Defined;
    };
    headers?: ApiCommon_.Headers;
  } & Record<string, unknown>,
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_.IdentityId;
        payload: t.IntersectionC<
          [
            t.PartialC<{
              name: typeof Address_.PlaceName;
              lat: typeof UnitsGeo_.RelaxedLatitude;
              lon: typeof UnitsGeo_.RelaxedLongitude;
              providerHint: t.StringC;
              count: t.NumberC;
              radius: t.IntersectionC<[typeof UnitsGeo_.Distance, t.UnknownC]>;
            }>,
            t.TypeC<{
              name: typeof Defined;
              lat: typeof Defined;
              lon: typeof Defined;
            }>,
          ]
        >;
        headers: typeof ApiCommon_.Headers;
      }>,
      t.RecordC<t.StringC, t.UnknownC>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      payload: t.intersection([
        t.partial({
          name: Address_.PlaceName,
          lat: UnitsGeo_.RelaxedLatitude,
          lon: UnitsGeo_.RelaxedLongitude,
          providerHint: t.string,
          count: t.number,
          radius: t.intersection([UnitsGeo_.Distance, t.unknown]),
        }),
        t.type({
          name: Defined,
          lat: Defined,
          lon: Defined,
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.record(t.string, t.unknown),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: {
        name?: Address_.PlaceName;
        lat?: UnitsGeo_.RelaxedLatitude;
        lon?: UnitsGeo_.RelaxedLongitude;
        providerHint?: string;
        count?: number;
        radius?: UnitsGeo_.Distance & unknown;
      } & {
        name: Defined;
        lat: Defined;
        lon: Defined;
      };
      headers?: ApiCommon_.Headers;
    } & Record<string, unknown>,
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success
