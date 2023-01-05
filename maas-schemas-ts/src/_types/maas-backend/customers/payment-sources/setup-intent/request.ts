/*

undefined
MaaS customer payment sources setup intent create

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_ from '../../../../core/components/api-common';
import * as Common_ from '../../../../core/components/common';
import * as Units_ from '../../../../core/components/units';
import * as PaymentSource_ from '../paymentSource';

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
  'https://schemas.maas.global/maas-backend/customers/payment-sources/setup-intent/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    customerId?: Units_.IdentityId;
    payload?: {
      setupIntent?: {
        paymentSourceId?: Common_.PaymentSourceId;
        gatewayName?: PaymentSource_.GatewayName;
        isDefault?: boolean;
        type?: PaymentSource_.Type;
        alias?: PaymentSource_.Alias;
      } & {
        paymentSourceId: Defined;
        gatewayName: Defined;
        isDefault: Defined;
        type: Defined;
      };
      bin?: string;
    } & {
      setupIntent: Defined;
    };
    headers?: ApiCommon_.Headers;
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
        identityId: typeof Units_.IdentityId;
        customerId: typeof Units_.IdentityId;
        payload: t.IntersectionC<
          [
            t.PartialC<{
              setupIntent: t.IntersectionC<
                [
                  t.PartialC<{
                    paymentSourceId: typeof Common_.PaymentSourceId;
                    gatewayName: typeof PaymentSource_.GatewayName;
                    isDefault: t.BooleanC;
                    type: typeof PaymentSource_.Type;
                    alias: typeof PaymentSource_.Alias;
                  }>,
                  t.TypeC<{
                    paymentSourceId: typeof Defined;
                    gatewayName: typeof Defined;
                    isDefault: typeof Defined;
                    type: typeof Defined;
                  }>,
                ]
              >;
              bin: t.StringC;
            }>,
            t.TypeC<{
              setupIntent: typeof Defined;
            }>,
          ]
        >;
        headers: typeof ApiCommon_.Headers;
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
      identityId: Units_.IdentityId,
      customerId: Units_.IdentityId,
      payload: t.intersection([
        t.partial({
          setupIntent: t.intersection([
            t.partial({
              paymentSourceId: Common_.PaymentSourceId,
              gatewayName: PaymentSource_.GatewayName,
              isDefault: t.boolean,
              type: PaymentSource_.Type,
              alias: PaymentSource_.Alias,
            }),
            t.type({
              paymentSourceId: Defined,
              gatewayName: Defined,
              isDefault: Defined,
              type: Defined,
            }),
          ]),
          bin: t.string,
        }),
        t.type({
          setupIntent: Defined,
        }),
      ]),
      headers: ApiCommon_.Headers,
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
      identityId?: Units_.IdentityId;
      customerId?: Units_.IdentityId;
      payload?: {
        setupIntent?: {
          paymentSourceId?: Common_.PaymentSourceId;
          gatewayName?: PaymentSource_.GatewayName;
          isDefault?: boolean;
          type?: PaymentSource_.Type;
          alias?: PaymentSource_.Alias;
        } & {
          paymentSourceId: Defined;
          gatewayName: Defined;
          isDefault: Defined;
          type: Defined;
        };
        bin?: string;
      } & {
        setupIntent: Defined;
      };
      headers?: ApiCommon_.Headers;
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
export type RequestBrand = {
  readonly Request: unique symbol;
};

export default Request;

// Success
