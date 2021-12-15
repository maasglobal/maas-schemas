/*

undefined
MaaS customer verification initiate

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../../../core/components/units';
import * as ApiCommon_ from '../../../../core/components/api-common';
import * as UnitsGeo_ from '../../../../core/components/units-geo';
import * as Common_ from '../../../../core/components/common';

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
  'https://schemas.maas.global/maas-backend/customers/verification/initiate/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    customerId?: Units_.IdentityId;
    headers?: ApiCommon_.Headers;
    identityId?: Units_.IdentityId;
    payload?: {
      location?: UnitsGeo_.ShortLocationString;
      metadata?: {
        agencyId?: Common_.AgencyId;
        planId?: string;
      } & (
        | {
            planId: Defined;
          }
        | {
            agencyId: Defined;
          }
      );
    } & {
      location: Defined;
    };
  } & {
    identityId: Defined;
    customerId: Defined;
    payload: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        customerId: typeof Units_.IdentityId;
        headers: typeof ApiCommon_.Headers;
        identityId: typeof Units_.IdentityId;
        payload: t.IntersectionC<
          [
            t.PartialC<{
              location: typeof UnitsGeo_.ShortLocationString;
              metadata: t.IntersectionC<
                [
                  t.PartialC<{
                    agencyId: typeof Common_.AgencyId;
                    planId: t.StringC;
                  }>,
                  t.UnionC<
                    [
                      t.TypeC<{
                        planId: typeof Defined;
                      }>,
                      t.TypeC<{
                        agencyId: typeof Defined;
                      }>,
                    ]
                  >,
                ]
              >;
            }>,
            t.TypeC<{
              location: typeof Defined;
            }>,
          ]
        >;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        customerId: typeof Defined;
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
      customerId: Units_.IdentityId,
      headers: ApiCommon_.Headers,
      identityId: Units_.IdentityId,
      payload: t.intersection([
        t.partial({
          location: UnitsGeo_.ShortLocationString,
          metadata: t.intersection([
            t.partial({
              agencyId: Common_.AgencyId,
              planId: t.string,
            }),
            t.union([
              t.type({
                planId: Defined,
              }),
              t.type({
                agencyId: Defined,
              }),
            ]),
          ]),
        }),
        t.type({
          location: Defined,
        }),
      ]),
    }),
    t.type({
      identityId: Defined,
      customerId: Defined,
      payload: Defined,
      headers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customerId?: Units_.IdentityId;
      headers?: ApiCommon_.Headers;
      identityId?: Units_.IdentityId;
      payload?: {
        location?: UnitsGeo_.ShortLocationString;
        metadata?: {
          agencyId?: Common_.AgencyId;
          planId?: string;
        } & (
          | {
              planId: Defined;
            }
          | {
              agencyId: Defined;
            }
        );
      } & {
        location: Defined;
      };
    } & {
      identityId: Defined;
      customerId: Defined;
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
