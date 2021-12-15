/*

undefined
Request schema for profile-favoriteLocations-delete

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../../core/components/units';
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
  'https://schemas.maas.global/maas-backend/profile/profile-favoriteLocations-delete/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: {
      name?: string;
    } & {
      name: Defined;
    };
    headers?: {
      Accept?: ApiCommon_.AcceptHeader;
      'X-Whim-User-Agent'?: ApiCommon_.UserAgentHeader;
    };
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.PartialC<{
    identityId: typeof Units_.IdentityId;
    payload: t.IntersectionC<
      [
        t.PartialC<{
          name: t.StringC;
        }>,
        t.TypeC<{
          name: typeof Defined;
        }>,
      ]
    >;
    headers: t.PartialC<{
      Accept: typeof ApiCommon_.AcceptHeader;
      'X-Whim-User-Agent': typeof ApiCommon_.UserAgentHeader;
    }>;
  }>,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.partial({
    identityId: Units_.IdentityId,
    payload: t.intersection([
      t.partial({
        name: t.string,
      }),
      t.type({
        name: Defined,
      }),
    ]),
    headers: t.partial({
      Accept: ApiCommon_.AcceptHeader,
      'X-Whim-User-Agent': ApiCommon_.UserAgentHeader,
    }),
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: {
        name?: string;
      } & {
        name: Defined;
      };
      headers?: {
        Accept?: ApiCommon_.AcceptHeader;
        'X-Whim-User-Agent'?: ApiCommon_.UserAgentHeader;
      };
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
