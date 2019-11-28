/*

undefined
MaaS customer personal data schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Address_ from 'maas-schemas-ts/core/components/address';
import * as Units_ from 'maas-schemas-ts/core/components/units';

export const schemaId = 'http://maasglobal.com/maas-backend/customers/personalData.json';

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    firstName?: Common_.PersonalName;
    lastName?: Common_.PersonalName;
    phone?: Common_.Phone;
    email?: Common_.Email;
    address?: Address_.Address;
    city?: Address_.City;
    country?: Address_.Country;
    zipCode?: Address_.ZipCode;
    dob?: boolean | Units_.IsoDate;
    ssid?: boolean | Common_.Ssid;
    subscriberType?: string;
    profileImageUrl?: string;
  } & {},
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      firstName: Common_.PersonalName,
      lastName: Common_.PersonalName,
      phone: Common_.Phone,
      email: Common_.Email,
      address: Address_.Address,
      city: Address_.City,
      country: Address_.Country,
      zipCode: Address_.ZipCode,
      dob: t.union([t.boolean, Units_.IsoDate]),
      ssid: t.union([t.boolean, Common_.Ssid]),
      subscriberType: t.string,
      profileImageUrl: t.string,
    }),
    t.type({}),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      firstName?: Common_.PersonalName;
      lastName?: Common_.PersonalName;
      phone?: Common_.Phone;
      email?: Common_.Email;
      address?: Address_.Address;
      city?: Address_.City;
      country?: Address_.Country;
      zipCode?: Address_.ZipCode;
      dob?: boolean | Units_.IsoDate;
      ssid?: boolean | Common_.Ssid;
      subscriberType?: string;
      profileImageUrl?: string;
    } & {},
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
