'use strict';

const { expect } = require('chai');
const main = require('./index');
const ValidationError = require('./ValidationError');
const { transform } = require('./utils/transform-unicode-patterns');

function generateTestCases(schema, positive, cases) {
  if (positive) {
    it('positive cases', () => {
      cases.forEach(value => {
        expect(main.validate(transform(schema), value)).to.be.an.object;
      });
    });
  } else {
    it('negative cases', () => {
      cases.forEach(value => {
        const func = () => {
          main.validate(transform(schema), value);
          console.warn(`We should not get here. Input: ${value}`);
        };
        expect(func).to.throw(ValidationError);
      });
    });
  }
}

module.exports = { generateTestCases };
