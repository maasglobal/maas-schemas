'use strict';

const { expect } = require('chai');
const main = require('../index');
const ValidationError = require('../lib/ValidationError');
const { transform } = require('../utils/transform-unicode-patterns');

function generateTestCases(schema, positive, cases) {
  if (positive) {
    it('positive cases', () => {
      cases.forEach(value => {
        expect(main.validate(transform(schema), value)).to.exist;
      });
    });
  } else {
    it('negative cases', () => {
      cases.forEach(value => {
        expect(() => {
          main.validate(transform(schema), value);
        }).to.throw(ValidationError);
      });
    });
  }
}

module.exports = { generateTestCases };
