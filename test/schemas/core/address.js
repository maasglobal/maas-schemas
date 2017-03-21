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
  ]);
});
