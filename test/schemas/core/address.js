'use strict';

const expect = require('chai').expect;
const schema = require('../../../prebuilt/core/address.json');
const validator = require('../../../validator');
const ValidationError = require('../../../ValidationError');

function generateTestCases(schema, positive, cases) {
  if (positive) {
    it('positive cases', () => {
      cases.forEach(value => {
        expect(validator.validateSync(schema, value)).to.be.an.object;
      });
    });
  } else {
    it('negative cases', () => {
      cases.forEach(value => {
        const func = () => {
          validator.validateSync(schema, value);
          console.warn(`We should not get here. Input: ${value}`);
        };
        expect(func).to.throw(ValidationError);
      });
    });
  }
}

describe('address.placeName', () => {
  generateTestCases(schema.definitions.placeName, true, [
    'Erenköy Mahallesi, Çoban Yıldızı Sk. No:4, 34738 Kadıköy/İstanbul, Turkki',
    '5-2 4-2 タイムズスクエアビル Takashimaya Shinjuku', // Tokyu Hands Shinjuku
    '武侯区通祠路39号-江城花2楼 (春江花月夜对面)', // Some sample address on Baidu
  ]);

  generateTestCases(schema.definitions.placeName, false, [
    '💩',
    // '00100', Does not work, but relaxed the schema
    '',
  ]);
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
    // Other interesting special characters
    'country:Aäöم武кв.-`\'\'´`|state:Aäöم武кв.-`\'\'´`|city:Aäöم武кв.-`\'\'´`|zipCode:3191|streetName:Aäöم武кв.-`\'\'´`|streetNumber:479',
  ]);

  generateTestCases(schema.definitions.componentAddress, false, [
    '💩',
    // TODO The parser does not yet support limiting to one occurrence of each field
    //'country:Finland|country:Finland|country:Finland|country:Finland|country:Finland|country:Finland',
    '',
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

  generateTestCases(schema.definitions.address, false, [
    '💩',
    // '00100', Does not work, but relaxed the schema
    '',
  ]);
});

describe('address.zipCode', () => {
  generateTestCases(schema.definitions.zipCode, true, [
    '00100', // Finnish ZIP code
    'TW6 2GA', // UK Heathrow
    'K1A 0B1', // Ontario, Canada
    '102600', // China Daxing District
    '90210', // USA Beverly Hills
  ]);

  generateTestCases(schema.definitions.address, false, [
    '💩',
    '',
  ]);
});

describe('address.country', () => {
  generateTestCases(schema.definitions.country, true, [
    'FI', // Finland
    'GB',  // UK (Great britain)
  ]);

  generateTestCases(schema.definitions.country, false, [
    '💩',
    '',
    'fi',
    'FIN',
  ]);
});

describe('address.city', () => {
  generateTestCases(schema.definitions.city, true, [
    'Helsinki',
    '北京',  // Simplified Chinese: Beijing
    'あきる野市', // Hiragana/Kanji: Akiruno,
    //'กรุงเทพมหานคร', // Thai: Krung Thep (=Bangkok) -> not supported
    // 'दिल्ली', // Hindi: Delhi -> no supported
    'Москва', // Cyrillic: Moscow
  ]);

  generateTestCases(schema.definitions.city, false, [
    '💩',
    '',
    // Too long
    // eslint-disable-next-line max-len
    'LRuwGi4XRMVgImvVm7OEsw58YBDsUsApuKGXrjAcQi9QDEWwFYUp2yrzspe2WHu5rGuFoSU6TKeFIf73QjEnzv5Lq6Wu1YTJAbN2bZws8SfwhEoDInr6K3zTgmFQEQnzaDheGZtO4IMzAGoDSUx2zw1Lv4inpE4uq6NBYELaSusrlxGM0pJEiUrYZwIlzGAS4MgRrOKfZIyuZLH9gARtzyKvstQZw9bMmnRE8yWPTNGKlWmYBHLjMTluZp5AcpbU',
  ]);
});
