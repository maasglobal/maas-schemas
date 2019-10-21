'use strict';

const schema = require('../../../schemas/core/components/address.json');
const { generateTestCases } = require('../../test-lib');

describe('address.placeName', () => {
  generateTestCases(schema.definitions.placeName, true, [
    'Kallan & Co Oy, Simonsgatan, Helsinki', // Address with special chars
    'Erenköy Mahallesi, Çoban Yıldızı Sk. No:4, 34738 Kadıköy/İstanbul, Turkki',
    '5-2 4-2 タイムズスクエアビル Takashimaya Shinjuku', // Tokyu Hands Shinjuku
    '武侯区通祠路39号-江城花2楼 (春江花月夜对面)', // Some sample address on Baidu
    "28 St John's Wood Road, London",
    "Shakespeare's Globe",
    'Tarkk´ampujankatu', // Common known validation failure
    "'s-Gravesandestraat 55",
  ]);

  generateTestCases(schema.definitions.placeName, false, ['']);
});

describe('address.componentAddress', () => {
  generateTestCases(schema.definitions.componentAddress, true, [
    // Ludviginkatu 6, Helsinki, Uusimaa, Finland
    'country:Finland|state:Uusimaa|city:Helsinki|zipCode:00100|streetName:Ludviginkatu|streetNumber:6',
    // Interchangeable fields
    'city:Helsinki|state:Uusimaa|country:Finland|zipCode:00100|streetName:Ludviginkatu|streetNumber:6',
    // State not mandatory
    'city:Helsinki|country:Finland|zipCode:00100|streetName:Ludviginkatu|streetNumber:6',
    // Spaces in-between
    'country:New Zealand|state:Bay of Plenty|city:White Pine Bush|zipCode:3191|streetName:White Pine Bush Road|streetNumber:479',
    // Apostrophe
    "country:Côte d'Ivoire|city:Abidjan|zipCode:01 BP2581|streetName:Cocody Quartier Ambassades Impasse du Belier|streetNumber:58",
    // Other interesting special characters
    "country:Aäöم武кв'|state:Aäöم武кв.-`''´`|city:Aäöم武кв.-`''´`|zipCode:3191|streetName:Aäöم武кв.-`''´`|streetNumber:479",
    // King's Cross, UK, London
    'city:Lontoo|streetNumber:2|streetName:Charrington Street|zipCode:NW1|country:Yhdistynyt kuningaskunta',
    "country:UK|city:London|zipCode:NW8 7HA|streetName:St John's Wood Road|streetNumber:28",
    'country:UK|city:London|zipCode:SE1 9DT|streetName:New Globe Walk|streetNumber:21',
  ]);

  generateTestCases(schema.definitions.componentAddress, false, [
    '💩',
    // TODO The parser does not yet support limiting to one occurrence of each field
    //'country:Finland|country:Finland|country:Finland|country:Finland|country:Finland|
    //   country:Finland',
  ]);
});

describe('address.address', () => {
  generateTestCases(schema.definitions.address, true, [
    'Pohjoiskaari 29 A 2',
    'Pohjoiskaari 29 A 2, 00200, Helsinki, Finland',
    'مكة', // Arabic - Mecca
    '5-2 4-2 タイムズスクエアビル', // Kanji - Tokyu Hands Shinjuku
    'Красная Площадь', // Cyrillic - Red square
  ]);

  generateTestCases(schema.definitions.address, false, ['💩']);
});

describe('address.zipCode', () => {
  generateTestCases(schema.definitions.zipCode, true, [
    '00100', // Finnish ZIP code
    'TW6 2GA', // UK Heathrow
    'K1A 0B1', // Ontario, Canada
    '102600', // China Daxing District
    '90210', // USA Beverly Hills
    'N1C', // What Google gives for King's Cross
    '3137BH', // Somewhere in Netherlands
  ]);

  generateTestCases(schema.definitions.address, false, ['💩', '']);
});

describe('address.country', () => {
  generateTestCases(schema.definitions.country, true, [
    'FI', // Finland
    'GB', // UK (Great britain)
  ]);

  generateTestCases(schema.definitions.country, false, ['💩', '', 'fi', 'FIN']);
});

describe('address.city', () => {
  generateTestCases(schema.definitions.city, true, [
    'Helsinki',
    '北京', // Simplified Chinese: Beijing
    'あきる野市', // Hiragana/Kanji: Akiruno,
    //'กรุงเทพมหานคร', // Thai: Krung Thep (=Bangkok) -> not supported
    // 'दिल्ली', // Hindi: Delhi -> no supported
    'Москва', // Cyrillic: Moscow
  ]);

  generateTestCases(schema.definitions.city, false, ['']);
});
