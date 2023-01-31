/*

undefined
Initiate customer KYC process

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_16a4_ from '../../../../core/components/api-common';
import * as Units_c404_ from '../../../../core/components/units';
import * as UnitsGeo_3e31_ from '../../../../core/components/units-geo';
import * as PersonalDocument_9750_ from '../../../../core/personal-document';

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
  'https://schemas.maas.global/maas-backend/customers/personal-documents/initiate/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_c404_.IdentityId;
    customerId?: Units_c404_.IdentityId;
    payload?: ({
      type?: PersonalDocument_9750_.DocumentType;
      location?: UnitsGeo_3e31_.ShortLocationString;
    } & Record<string, unknown>) & {
      type: Defined;
      location: Defined;
    };
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
        customerId: typeof Units_c404_.IdentityId;
        payload: t.IntersectionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  type: typeof PersonalDocument_9750_.DocumentType;
                  location: typeof UnitsGeo_3e31_.ShortLocationString;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >,
            t.TypeC<{
              type: typeof Defined;
              location: typeof Defined;
            }>,
          ]
        >;
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
      customerId: Units_c404_.IdentityId,
      payload: t.intersection([
        t.intersection([
          t.partial({
            type: PersonalDocument_9750_.DocumentType,
            location: UnitsGeo_3e31_.ShortLocationString,
          }),
          t.record(t.string, t.unknown),
        ]),
        t.type({
          type: Defined,
          location: Defined,
        }),
      ]),
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
      customerId?: Units_c404_.IdentityId;
      payload?: ({
        type?: PersonalDocument_9750_.DocumentType;
        location?: UnitsGeo_3e31_.ShortLocationString;
      } & Record<string, unknown>) & {
        type: Defined;
        location: Defined;
      };
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
