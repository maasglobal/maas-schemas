/*

undefined
MaaS schema for address related information

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';

export const schemaId = 'http://maasglobal.com/core/components/address.json';

// ComponentAddress
// Encoded address components. Check the regexr examples. Check https://regexr.com/4ofcq. In streetNumber, there are 2 dashes - they have 2 different unicodes, do not remove
export type ComponentAddress = t.Branded<string, ComponentAddressBrand>;
export const ComponentAddress = t.brand(
  t.string,
  (x): x is t.Branded<string, ComponentAddressBrand> =>
    typeof x !== 'string' ||
    x.match(
      RegExp(
        "(streetName:(\\p{L}|\\p{N}|-|\\/| (?=\\p{L}|&|\\p{N})|[#.,;:'&°’])+\\|?)|(city:(\\p{L}|['-]| (?=\\p{L}))+\\|?)|(state:(\\p{L}| (?=\\p{L}))+\\|?)|(zipCode:(\\p{L}|\\p{N}|-)+\\|?)|(country:(\\p{L}| (?=\\p{L}))+)\\|?|(streetNumber:(\\p{L}|\\p{N}|-|-|\\/)+)\\|?|(ward:(\\p{L}|\\p{N}|-|[']| (?=\\p{L}|\\p{N}))+)\\|?|(district:(\\p{L}|\\p{N}|-|[']| (?=\\p{L}|\\p{N}))+)\\|?",
        'gui',
      ),
    ) !== null,
  'ComponentAddress',
);
export interface ComponentAddressBrand {
  readonly ComponentAddress: unique symbol;
}

// PlaceName
// Place name (given in autocomplete)
export type PlaceName = t.Branded<string, PlaceNameBrand>;
export const PlaceName = t.brand(
  t.string,
  (x): x is t.Branded<string, PlaceNameBrand> => typeof x !== 'string' || x.length >= 1,
  'PlaceName',
);
export interface PlaceNameBrand {
  readonly PlaceName: unique symbol;
}

// FirstName
// The purpose of this remains a mystery
export type FirstName = Common_.PersonalName;
export const FirstName = Common_.PersonalName;

// LastName
// The purpose of this remains a mystery
export type LastName = Common_.PersonalName;
export const LastName = Common_.PersonalName;

// Phone
// The purpose of this remains a mystery
export type Phone = Common_.Phone;
export const Phone = Common_.Phone;

// Email
// The purpose of this remains a mystery
export type Email = Common_.Email;
export const Email = Common_.Email;

// Address
// Street address (and optional number), http://www.bitboost.com/ref/international-address-formats.html
export type Address = t.Branded<string, AddressBrand>;
export const Address = t.brand(
  t.string,
  (x): x is t.Branded<string, AddressBrand> => typeof x !== 'string' || x.length >= 2,
  'Address',
);
export interface AddressBrand {
  readonly Address: unique symbol;
}

// ZipCode
// Numeric zip code, see https://en.wikipedia.org/wiki/Postal_code
export type ZipCode = t.Branded<string, ZipCodeBrand>;
export const ZipCode = t.brand(
  t.string,
  (x): x is t.Branded<string, ZipCodeBrand> =>
    (typeof x !== 'string' || x.length >= 2) && (typeof x !== 'string' || x.length <= 64),
  'ZipCode',
);
export interface ZipCodeBrand {
  readonly ZipCode: unique symbol;
}

// CountryName
// Alphabetic country name
export type CountryName = t.Branded<string, CountryNameBrand>;
export const CountryName = t.brand(
  t.string,
  (x): x is t.Branded<string, CountryNameBrand> =>
    (typeof x !== 'string' || x.match(RegExp("^(?:\\p{L}|\\s|')+$", 'gui')) !== null) &&
    (typeof x !== 'string' || x.length <= 64),
  'CountryName',
);
export interface CountryNameBrand {
  readonly CountryName: unique symbol;
}

// Country
// ISO 3166-1 alpha-2 country code, see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
export type Country = t.Branded<string, CountryBrand>;
export const Country = t.brand(
  t.string,
  (x): x is t.Branded<string, CountryBrand> =>
    typeof x !== 'string' || x.match(RegExp('^[A-Z]{2,2}$')) !== null,
  'Country',
);
export interface CountryBrand {
  readonly Country: unique symbol;
}

// City
// Alphabetic city name
export type City = t.Branded<string, CityBrand>;
export const City = t.brand(
  t.string,
  (x): x is t.Branded<string, CityBrand> => typeof x !== 'string' || x.length >= 1,
  'City',
);
export interface CityBrand {
  readonly City: unique symbol;
}

// Default
// The default export. More information at the top.
export type Default = t.Branded<unknown, DefaultBrand>;
export const Default = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, DefaultBrand> => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
