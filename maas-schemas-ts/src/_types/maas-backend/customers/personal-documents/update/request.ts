/*

undefined
Update a pending verification personal document object

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../../../core/components/units';
import * as PersonalDocument_ from '../../../../core/personal-document';
import * as ApiCommon_ from '../../../../core/components/api-common';

export interface NullBrand {
  readonly Null: unique symbol;
}
export type NullC = t.BrandC<t.UnknownC, NullBrand>;
export const Null: NullC = t.brand(
  t.unknown,
  (n): n is t.Branded<unknown, NullBrand> => n === null,
  'Null',
);
export type Null = t.TypeOf<typeof Null>;

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
  'https://schemas.maas.global/maas-backend/customers/personal-documents/update/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    customerId?: Units_.IdentityId;
    documentId?: Units_.Uuid;
    payload?: {
      type?: PersonalDocument_.DocumentType;
      documentNumber?: PersonalDocument_.DocumentNumber;
      category?: PersonalDocument_.Category;
      issuingCountry?: PersonalDocument_.IssuingCountry;
      validFrom?: PersonalDocument_.ValidFrom;
      validTo?: PersonalDocument_.ValidTo;
      details?: PersonalDocument_.Details;
      media?: PersonalDocument_.Media;
      kycServiceId?: PersonalDocument_.KycServiceId;
      firstName?: PersonalDocument_.FirstName | Null;
      lastName?: PersonalDocument_.LastName | Null;
    };
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    customerId: Defined;
    documentId: Defined;
    payload: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_.IdentityId;
        customerId: typeof Units_.IdentityId;
        documentId: typeof Units_.Uuid;
        payload: t.PartialC<{
          type: typeof PersonalDocument_.DocumentType;
          documentNumber: typeof PersonalDocument_.DocumentNumber;
          category: typeof PersonalDocument_.Category;
          issuingCountry: typeof PersonalDocument_.IssuingCountry;
          validFrom: typeof PersonalDocument_.ValidFrom;
          validTo: typeof PersonalDocument_.ValidTo;
          details: typeof PersonalDocument_.Details;
          media: typeof PersonalDocument_.Media;
          kycServiceId: typeof PersonalDocument_.KycServiceId;
          firstName: t.UnionC<[typeof PersonalDocument_.FirstName, typeof Null]>;
          lastName: t.UnionC<[typeof PersonalDocument_.LastName, typeof Null]>;
        }>;
        headers: typeof ApiCommon_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        customerId: typeof Defined;
        documentId: typeof Defined;
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
      identityId: Units_.IdentityId,
      customerId: Units_.IdentityId,
      documentId: Units_.Uuid,
      payload: t.partial({
        type: PersonalDocument_.DocumentType,
        documentNumber: PersonalDocument_.DocumentNumber,
        category: PersonalDocument_.Category,
        issuingCountry: PersonalDocument_.IssuingCountry,
        validFrom: PersonalDocument_.ValidFrom,
        validTo: PersonalDocument_.ValidTo,
        details: PersonalDocument_.Details,
        media: PersonalDocument_.Media,
        kycServiceId: PersonalDocument_.KycServiceId,
        firstName: t.union([PersonalDocument_.FirstName, Null]),
        lastName: t.union([PersonalDocument_.LastName, Null]),
      }),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      customerId: Defined,
      documentId: Defined,
      payload: Defined,
      headers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      customerId?: Units_.IdentityId;
      documentId?: Units_.Uuid;
      payload?: {
        type?: PersonalDocument_.DocumentType;
        documentNumber?: PersonalDocument_.DocumentNumber;
        category?: PersonalDocument_.Category;
        issuingCountry?: PersonalDocument_.IssuingCountry;
        validFrom?: PersonalDocument_.ValidFrom;
        validTo?: PersonalDocument_.ValidTo;
        details?: PersonalDocument_.Details;
        media?: PersonalDocument_.Media;
        kycServiceId?: PersonalDocument_.KycServiceId;
        firstName?: PersonalDocument_.FirstName | Null;
        lastName?: PersonalDocument_.LastName | Null;
      };
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      customerId: Defined;
      documentId: Defined;
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