/*

undefined
MaaS customer schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../core/components/units';
import * as PersonalData_ from './personalData';
import * as PaymentSource_ from './payment-sources/paymentSource';
import * as Fare_ from '../../core/components/fare';
import * as Cost_ from '../../core/components/cost';
import * as Region_ from '../../core/region';
import * as Authorization_ from '../../core/components/authorization';
import * as PersonalDocument_ from '../../core/personal-document';
import * as Common_ from '../../core/components/common';
import * as VirtualCard_ from './virtual-cards/virtualCard';
import * as VerificationObject_ from './verification/verification-object';

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
  'https://schemas.maas.global/maas-backend/customers/customer.json';

// Customer
// The default export. More information at the top.
export type Customer = t.Branded<
  {
    identityId?: Units_.IdentityId;
    profileImageUrl?: string;
    personalData?: PersonalData_.PersonalData;
    personalDataVerifiedItems?: Array<string>;
    paymentSources?: Array<PaymentSource_.PaymentSource>;
    balances?: Array<Fare_.Fare | Cost_.Cost>;
    region?: Region_.Region;
    authorizations?: Array<Authorization_.Authorization>;
    favoriteLocations?: Array<Record<string, unknown>>;
    personalDocuments?: Array<
      {
        type?: PersonalDocument_.DocumentType;
        status?: PersonalDocument_.DocumentStatus;
      } & {
        type: Defined;
        status: Defined;
      }
    >;
    personalDocumentConsents?: Array<Common_.AgencyId>;
    virtualCards?: Array<VirtualCard_.VirtualCard>;
    verifications?: Array<VerificationObject_.VerificationObject>;
  } & {
    personalData: Defined;
    paymentSources: Defined;
    balances: Defined;
    region: Defined;
    authorizations: Defined;
  },
  CustomerBrand
>;
export type CustomerC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_.IdentityId;
        profileImageUrl: t.StringC;
        personalData: typeof PersonalData_.PersonalData;
        personalDataVerifiedItems: t.ArrayC<t.StringC>;
        paymentSources: t.ArrayC<typeof PaymentSource_.PaymentSource>;
        balances: t.ArrayC<t.UnionC<[typeof Fare_.Fare, typeof Cost_.Cost]>>;
        region: typeof Region_.Region;
        authorizations: t.ArrayC<typeof Authorization_.Authorization>;
        favoriteLocations: t.ArrayC<t.UnknownRecordC>;
        personalDocuments: t.ArrayC<
          t.IntersectionC<
            [
              t.PartialC<{
                type: typeof PersonalDocument_.DocumentType;
                status: typeof PersonalDocument_.DocumentStatus;
              }>,
              t.TypeC<{
                type: typeof Defined;
                status: typeof Defined;
              }>,
            ]
          >
        >;
        personalDocumentConsents: t.ArrayC<typeof Common_.AgencyId>;
        virtualCards: t.ArrayC<typeof VirtualCard_.VirtualCard>;
        verifications: t.ArrayC<typeof VerificationObject_.VerificationObject>;
      }>,
      t.TypeC<{
        personalData: typeof Defined;
        paymentSources: typeof Defined;
        balances: typeof Defined;
        region: typeof Defined;
        authorizations: typeof Defined;
      }>,
    ]
  >,
  CustomerBrand
>;
export const Customer: CustomerC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      profileImageUrl: t.string,
      personalData: PersonalData_.PersonalData,
      personalDataVerifiedItems: t.array(t.string),
      paymentSources: t.array(PaymentSource_.PaymentSource),
      balances: t.array(t.union([Fare_.Fare, Cost_.Cost])),
      region: Region_.Region,
      authorizations: t.array(Authorization_.Authorization),
      favoriteLocations: t.array(t.UnknownRecord),
      personalDocuments: t.array(
        t.intersection([
          t.partial({
            type: PersonalDocument_.DocumentType,
            status: PersonalDocument_.DocumentStatus,
          }),
          t.type({
            type: Defined,
            status: Defined,
          }),
        ]),
      ),
      personalDocumentConsents: t.array(Common_.AgencyId),
      virtualCards: t.array(VirtualCard_.VirtualCard),
      verifications: t.array(VerificationObject_.VerificationObject),
    }),
    t.type({
      personalData: Defined,
      paymentSources: Defined,
      balances: Defined,
      region: Defined,
      authorizations: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      profileImageUrl?: string;
      personalData?: PersonalData_.PersonalData;
      personalDataVerifiedItems?: Array<string>;
      paymentSources?: Array<PaymentSource_.PaymentSource>;
      balances?: Array<Fare_.Fare | Cost_.Cost>;
      region?: Region_.Region;
      authorizations?: Array<Authorization_.Authorization>;
      favoriteLocations?: Array<Record<string, unknown>>;
      personalDocuments?: Array<
        {
          type?: PersonalDocument_.DocumentType;
          status?: PersonalDocument_.DocumentStatus;
        } & {
          type: Defined;
          status: Defined;
        }
      >;
      personalDocumentConsents?: Array<Common_.AgencyId>;
      virtualCards?: Array<VirtualCard_.VirtualCard>;
      verifications?: Array<VerificationObject_.VerificationObject>;
    } & {
      personalData: Defined;
      paymentSources: Defined;
      balances: Defined;
      region: Defined;
      authorizations: Defined;
    },
    CustomerBrand
  > => true,
  'Customer',
);
export interface CustomerBrand {
  readonly Customer: unique symbol;
}

export default Customer;

// Success