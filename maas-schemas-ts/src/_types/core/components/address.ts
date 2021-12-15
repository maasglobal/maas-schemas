/*

undefined
MaaS schema for address related information

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Common_ from './common';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

export const schemaId = 'https://schemas.maas.global/core/components/address.json';

// ComponentAddress
// Encoded address components. Check the regexr examples. Check https://regexr.com/4ofcq. In streetNumber, there are 2 dashes - they have 2 different unicodes, do not remove
export type ComponentAddress = t.Branded<string, ComponentAddressBrand>;
export type ComponentAddressC = t.BrandC<t.StringC, ComponentAddressBrand>;
export const ComponentAddress: ComponentAddressC = t.brand(
  t.string,
  (x): x is t.Branded<string, ComponentAddressBrand> =>
    typeof x !== 'string' ||
    x.match(
      RegExp(
        "(id:(\\p{L}|\\p{N}|[%-])+\\|?)|(streetName:(\\p{L}|\\p{N}|-|\\/| (?=\\p{L}|&|\\p{N})|[#.,;:'&°’])+\\|?)|(city:(\\p{L}|['-]| (?=\\p{L}))+\\|?)|(state:(\\p{L}|[-]| (?=\\p{L}))+\\|?)|(zipCode:(\\p{L}|\\p{N}|-)+\\|?)|(country:(\\p{L}| (?=\\p{L}))+)\\|?|(streetNumber:(\\p{L}|\\p{N}|-|-|\\/)+)\\|?|(ward:(\\p{L}|\\p{N}|-|[']| (?=\\p{L}|\\p{N}))+)\\|?|(district:(\\p{L}|\\p{N}|-|[']| (?=\\p{L}|\\p{N}))+)\\|?",
        'gui',
      ),
    ) !== null,
  'ComponentAddress',
);
export interface ComponentAddressBrand {
  readonly ComponentAddress: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(ComponentAddress)).decodeSync(examplesComponentAddress) // => examplesComponentAddress */
export const examplesComponentAddress: NonEmptyArray<ComponentAddress> = ([
  'state:Tōkyō-to|district:Kanda Nishikichō 3-chōme|streetNumber:4-パレステュディオ御茶ノ水駿河台参番館|zipCode:101-0054|city:Chiyoda-City|country:Japan',
  "id:pe--Aigle--whosonfirst%3Alocality%3A101853849|streetName:Tarkk'ampujänkätu|city:Helsinki|country:Finland|state:Uusimaa|streetNumber:1|zipCode:00100|district:Tapiola",
  "streetName:Hämeentie Töölöntori Lähettilääntie Tarkk'ampujänkätu",
  'streetName:Brädgårdsgatan',
  'streetName:Żółkiewskiego',
  'streetName:Øster Allé',
  'streetName:شارع حمدان بن محمد',
  'streetName:Karl-Marx-Straße',
  'streetName:Küçük Ayasofya|city:İstanbul|district:Fatih',
  'streetName:11 Avenue d’Ostende',
  'streetName:Küçük Ayasofya, Küçük Ayasofya Cami Sk.',
  "streetName:Kasumi'gaseki",
  "streetName:St Martin's Lane",
  'country:Åland',
  'country:Puerto Rico',
  'country:français',
  'country:skandinavisk',
  'streetNumber:1-1',
  'streetNumber:1/2-d2',
] as unknown) as NonEmptyArray<ComponentAddress>;

// PlaceName
// Place name (given in autocomplete)
export type PlaceName = t.Branded<string, PlaceNameBrand>;
export type PlaceNameC = t.BrandC<t.StringC, PlaceNameBrand>;
export const PlaceName: PlaceNameC = t.brand(
  t.string,
  (x): x is t.Branded<string, PlaceNameBrand> => typeof x !== 'string' || x.length >= 1,
  'PlaceName',
);
export interface PlaceNameBrand {
  readonly PlaceName: unique symbol;
}

// FirstName
// First name of the customer (e.g. John)
export type FirstName = t.Branded<Common_.PersonalName, FirstNameBrand>;
export type FirstNameC = t.BrandC<typeof Common_.PersonalName, FirstNameBrand>;
export const FirstName: FirstNameC = t.brand(
  Common_.PersonalName,
  (x): x is t.Branded<Common_.PersonalName, FirstNameBrand> => true,
  'FirstName',
);
export interface FirstNameBrand {
  readonly FirstName: unique symbol;
}

// LastName
// Last name of the customer (e.g. Doe)
export type LastName = t.Branded<Common_.PersonalName, LastNameBrand>;
export type LastNameC = t.BrandC<typeof Common_.PersonalName, LastNameBrand>;
export const LastName: LastNameC = t.brand(
  Common_.PersonalName,
  (x): x is t.Branded<Common_.PersonalName, LastNameBrand> => true,
  'LastName',
);
export interface LastNameBrand {
  readonly LastName: unique symbol;
}

// Phone
// ITU-T E.164 phone number
export type Phone = t.Branded<Common_.Phone, PhoneBrand>;
export type PhoneC = t.BrandC<typeof Common_.Phone, PhoneBrand>;
export const Phone: PhoneC = t.brand(
  Common_.Phone,
  (x): x is t.Branded<Common_.Phone, PhoneBrand> => true,
  'Phone',
);
export interface PhoneBrand {
  readonly Phone: unique symbol;
}

// Email
// Rough validation of a valid e-mail address
export type Email = t.Branded<Common_.Email, EmailBrand>;
export type EmailC = t.BrandC<typeof Common_.Email, EmailBrand>;
export const Email: EmailC = t.brand(
  Common_.Email,
  (x): x is t.Branded<Common_.Email, EmailBrand> => true,
  'Email',
);
export interface EmailBrand {
  readonly Email: unique symbol;
}

// Address
// Street address (and optional number), http://www.bitboost.com/ref/international-address-formats.html
export type Address = t.Branded<string, AddressBrand>;
export type AddressC = t.BrandC<t.StringC, AddressBrand>;
export const Address: AddressC = t.brand(
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
export type ZipCodeC = t.BrandC<t.StringC, ZipCodeBrand>;
export const ZipCode: ZipCodeC = t.brand(
  t.string,
  (x): x is t.Branded<string, ZipCodeBrand> =>
    (typeof x !== 'string' || x.length >= 2) && (typeof x !== 'string' || x.length <= 64),
  'ZipCode',
);
export interface ZipCodeBrand {
  readonly ZipCode: unique symbol;
}

// State
// Alphabetic state name
export type State = t.Branded<string, StateBrand>;
export type StateC = t.BrandC<t.StringC, StateBrand>;
export const State: StateC = t.brand(
  t.string,
  (x): x is t.Branded<string, StateBrand> =>
    (typeof x !== 'string' || x.match(RegExp("^(?:\\p{L}|\\s|')+$", 'gui')) !== null) &&
    (typeof x !== 'string' || x.length <= 64),
  'State',
);
export interface StateBrand {
  readonly State: unique symbol;
}

// CountryName
// Alphabetic country name
export type CountryName = t.Branded<string, CountryNameBrand>;
export type CountryNameC = t.BrandC<t.StringC, CountryNameBrand>;
export const CountryName: CountryNameC = t.brand(
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
export type CountryC = t.BrandC<t.StringC, CountryBrand>;
export const Country: CountryC = t.brand(
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
export type CityC = t.BrandC<t.StringC, CityBrand>;
export const City: CityC = t.brand(
  t.string,
  (x): x is t.Branded<string, CityBrand> => typeof x !== 'string' || x.length >= 1,
  'City',
);
export interface CityBrand {
  readonly City: unique symbol;
}

// Success
