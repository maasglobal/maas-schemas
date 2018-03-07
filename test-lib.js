'use strict';

const { expect } = require('chai');
const validator = require('./validator');
const ValidationError = require('./ValidationError');

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

module.exports = { generateTestCases };
