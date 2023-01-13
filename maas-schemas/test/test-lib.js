'use strict';

const { expect } = require('chai');
const main = require('../index');
const { ValidationError } = require('maasglobal-json-schema-validator');

function generateTestCases(schema, positive, cases) {
  if (positive) {
    cases.forEach(value => {
      it(`positive cases ${value}`, () => {
        expect(main.validate(schema, value)).to.exist;
      });
    });
  } else {
    cases.forEach(value => {
      it(`negative cases ${value}`, () => {
        expect(() => {
          main.validate(schema, value);
        }).to.throw(ValidationError);
      });
    });
  }
}

module.exports = { generateTestCases };
