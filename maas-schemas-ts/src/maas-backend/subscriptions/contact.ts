/*

undefined
MaaS contact (customer and user) schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Common_ from '../../core/components/common';
import * as Address_ from '../../core/components/address';
import * as Units_ from '../../core/components/units';

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

export const schemaId = 'http://maasglobal.com/maas-backend/subscriptions/contact.json';

// IdentityId
// The purpose of this remains a mystery
export type IdentityId = t.Branded<Units_.IdentityId, IdentityIdBrand>;
export type IdentityIdC = t.BrandC<typeof Units_.IdentityId, IdentityIdBrand>;
export const IdentityId: IdentityIdC = t.brand(
  Units_.IdentityId,
  (x): x is t.Branded<Units_.IdentityId, IdentityIdBrand> => true,
  'IdentityId',
);
export interface IdentityIdBrand {
  readonly IdentityId: unique symbol;
}

// ContactBase
// The purpose of this remains a mystery
export type ContactBase = t.Branded<
  {
    identityId?: IdentityId;
    firstName?: Common_.PersonalName;
    lastName?: Common_.PersonalName;
    address?: Address_.Address;
    city?: Address_.City;
    zipCode?: Address_.ZipCode;
    country?: Address_.Country;
    phone?: Common_.Phone;
    email?: Common_.Email;
  },
  ContactBaseBrand
>;
export type ContactBaseC = t.BrandC<
  t.PartialC<{
    identityId: typeof IdentityId;
    firstName: typeof Common_.PersonalName;
    lastName: typeof Common_.PersonalName;
    address: typeof Address_.Address;
    city: typeof Address_.City;
    zipCode: typeof Address_.ZipCode;
    country: typeof Address_.Country;
    phone: typeof Common_.Phone;
    email: typeof Common_.Email;
  }>,
  ContactBaseBrand
>;
export const ContactBase: ContactBaseC = t.brand(
  t.partial({
    identityId: IdentityId,
    firstName: Common_.PersonalName,
    lastName: Common_.PersonalName,
    address: Address_.Address,
    city: Address_.City,
    zipCode: Address_.ZipCode,
    country: Address_.Country,
    phone: Common_.Phone,
    email: Common_.Email,
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: IdentityId;
      firstName?: Common_.PersonalName;
      lastName?: Common_.PersonalName;
      address?: Address_.Address;
      city?: Address_.City;
      zipCode?: Address_.ZipCode;
      country?: Address_.Country;
      phone?: Common_.Phone;
      email?: Common_.Email;
    },
    ContactBaseBrand
  > => true,
  'ContactBase',
);
export interface ContactBaseBrand {
  readonly ContactBase: unique symbol;
}

// StripePaymentMethod
// The payment (gateway) method info; no credit cards here
export type StripePaymentMethod = t.Branded<
  {
    type?: string & 'stripe';
    token?: string;
  } & {
    type: Defined;
    token: Defined;
  },
  StripePaymentMethodBrand
>;
export type StripePaymentMethodC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        type: t.IntersectionC<[t.StringC, t.LiteralC<'stripe'>]>;
        token: t.StringC;
      }>,
      t.TypeC<{
        type: typeof Defined;
        token: typeof Defined;
      }>,
    ]
  >,
  StripePaymentMethodBrand
>;
export const StripePaymentMethod: StripePaymentMethodC = t.brand(
  t.intersection([
    t.partial({
      type: t.intersection([t.string, t.literal('stripe')]),
      token: t.string,
    }),
    t.type({
      type: Defined,
      token: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: string & 'stripe';
      token?: string;
    } & {
      type: Defined;
      token: Defined;
    },
    StripePaymentMethodBrand
  > => true,
  'StripePaymentMethod',
);
export interface StripePaymentMethodBrand {
  readonly StripePaymentMethod: unique symbol;
}

// CreditCardPaymentMethod
// Credit card based payment (only for testing)
export type CreditCardPaymentMethod = t.Branded<
  {
    type?: string & 'card';
    number?: string;
    expiryMonth?: number;
    expiryYear?: number;
    cvv?: string;
  } & {
    type: Defined;
    number: Defined;
    expiryMonth: Defined;
    expiryYear: Defined;
    cvv: Defined;
  },
  CreditCardPaymentMethodBrand
>;
export type CreditCardPaymentMethodC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        type: t.IntersectionC<[t.StringC, t.LiteralC<'card'>]>;
        number: t.StringC;
        expiryMonth: t.NumberC;
        expiryYear: t.NumberC;
        cvv: t.StringC;
      }>,
      t.TypeC<{
        type: typeof Defined;
        number: typeof Defined;
        expiryMonth: typeof Defined;
        expiryYear: typeof Defined;
        cvv: typeof Defined;
      }>,
    ]
  >,
  CreditCardPaymentMethodBrand
>;
export const CreditCardPaymentMethod: CreditCardPaymentMethodC = t.brand(
  t.intersection([
    t.partial({
      type: t.intersection([t.string, t.literal('card')]),
      number: t.string,
      expiryMonth: t.number,
      expiryYear: t.number,
      cvv: t.string,
    }),
    t.type({
      type: Defined,
      number: Defined,
      expiryMonth: Defined,
      expiryYear: Defined,
      cvv: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: string & 'card';
      number?: string;
      expiryMonth?: number;
      expiryYear?: number;
      cvv?: string;
    } & {
      type: Defined;
      number: Defined;
      expiryMonth: Defined;
      expiryYear: Defined;
      cvv: Defined;
    },
    CreditCardPaymentMethodBrand
  > => true,
  'CreditCardPaymentMethod',
);
export interface CreditCardPaymentMethodBrand {
  readonly CreditCardPaymentMethod: unique symbol;
}

// NewPaymentMethod
// The purpose of this remains a mystery
export type NewPaymentMethod = t.Branded<
  StripePaymentMethod | CreditCardPaymentMethod,
  NewPaymentMethodBrand
>;
export type NewPaymentMethodC = t.BrandC<
  t.UnionC<[typeof StripePaymentMethod, typeof CreditCardPaymentMethod]>,
  NewPaymentMethodBrand
>;
export const NewPaymentMethod: NewPaymentMethodC = t.brand(
  t.union([StripePaymentMethod, CreditCardPaymentMethod]),
  (
    x,
  ): x is t.Branded<
    StripePaymentMethod | CreditCardPaymentMethod,
    NewPaymentMethodBrand
  > => true,
  'NewPaymentMethod',
);
export interface NewPaymentMethodBrand {
  readonly NewPaymentMethod: unique symbol;
}

// NewContact
// The purpose of this remains a mystery
export type NewContact = t.Branded<
  {
    identityId: Defined;
    phone: Defined;
  } & (ContactBase & {
    paymentMethod?: NewPaymentMethod;
  }),
  NewContactBrand
>;
export type NewContactC = t.BrandC<
  t.IntersectionC<
    [
      t.TypeC<{
        identityId: typeof Defined;
        phone: typeof Defined;
      }>,
      t.IntersectionC<
        [
          typeof ContactBase,
          t.PartialC<{
            paymentMethod: typeof NewPaymentMethod;
          }>,
        ]
      >,
    ]
  >,
  NewContactBrand
>;
export const NewContact: NewContactC = t.brand(
  t.intersection([
    t.type({
      identityId: Defined,
      phone: Defined,
    }),
    t.intersection([
      ContactBase,
      t.partial({
        paymentMethod: NewPaymentMethod,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId: Defined;
      phone: Defined;
    } & (ContactBase & {
      paymentMethod?: NewPaymentMethod;
    }),
    NewContactBrand
  > => true,
  'NewContact',
);
export interface NewContactBrand {
  readonly NewContact: unique symbol;
}

// ContactUpdate
// The purpose of this remains a mystery
export type ContactUpdate = t.Branded<
  {
    identityId: Defined;
  } & (ContactBase & {
    paymentMethod?: NewPaymentMethod;
  }),
  ContactUpdateBrand
>;
export type ContactUpdateC = t.BrandC<
  t.IntersectionC<
    [
      t.TypeC<{
        identityId: typeof Defined;
      }>,
      t.IntersectionC<
        [
          typeof ContactBase,
          t.PartialC<{
            paymentMethod: typeof NewPaymentMethod;
          }>,
        ]
      >,
    ]
  >,
  ContactUpdateBrand
>;
export const ContactUpdate: ContactUpdateC = t.brand(
  t.intersection([
    t.type({
      identityId: Defined,
    }),
    t.intersection([
      ContactBase,
      t.partial({
        paymentMethod: NewPaymentMethod,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId: Defined;
    } & (ContactBase & {
      paymentMethod?: NewPaymentMethod;
    }),
    ContactUpdateBrand
  > => true,
  'ContactUpdate',
);
export interface ContactUpdateBrand {
  readonly ContactUpdate: unique symbol;
}

// PaymentMethodResponse
// The payment (gateway) method info; no credit cards here
export type PaymentMethodResponse = t.Branded<
  {
    type?: string;
    valid?: boolean;
  } & {
    type: Defined;
    valid: Defined;
  },
  PaymentMethodResponseBrand
>;
export type PaymentMethodResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        type: t.StringC;
        valid: t.BooleanC;
      }>,
      t.TypeC<{
        type: typeof Defined;
        valid: typeof Defined;
      }>,
    ]
  >,
  PaymentMethodResponseBrand
>;
export const PaymentMethodResponse: PaymentMethodResponseC = t.brand(
  t.intersection([
    t.partial({
      type: t.string,
      valid: t.boolean,
    }),
    t.type({
      type: Defined,
      valid: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: string;
      valid?: boolean;
    } & {
      type: Defined;
      valid: Defined;
    },
    PaymentMethodResponseBrand
  > => true,
  'PaymentMethodResponse',
);
export interface PaymentMethodResponseBrand {
  readonly PaymentMethodResponse: unique symbol;
}

// ContactResponse
// The purpose of this remains a mystery
export type ContactResponse = t.Branded<
  {
    identityId: Defined;
    phone: Defined;
  } & (ContactBase & {
    paymentMethod?: PaymentMethodResponse;
  }),
  ContactResponseBrand
>;
export type ContactResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.TypeC<{
        identityId: typeof Defined;
        phone: typeof Defined;
      }>,
      t.IntersectionC<
        [
          typeof ContactBase,
          t.PartialC<{
            paymentMethod: typeof PaymentMethodResponse;
          }>,
        ]
      >,
    ]
  >,
  ContactResponseBrand
>;
export const ContactResponse: ContactResponseC = t.brand(
  t.intersection([
    t.type({
      identityId: Defined,
      phone: Defined,
    }),
    t.intersection([
      ContactBase,
      t.partial({
        paymentMethod: PaymentMethodResponse,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId: Defined;
      phone: Defined;
    } & (ContactBase & {
      paymentMethod?: PaymentMethodResponse;
    }),
    ContactResponseBrand
  > => true,
  'ContactResponse',
);
export interface ContactResponseBrand {
  readonly ContactResponse: unique symbol;
}

// Contact
// The default export. More information at the top.
export type Contact = t.Branded<unknown, ContactBrand>;
export type ContactC = t.BrandC<t.UnknownC, ContactBrand>;
export const Contact: ContactC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, ContactBrand> => true,
  'Contact',
);
export interface ContactBrand {
  readonly Contact: unique symbol;
}

export default Contact;

// Success
