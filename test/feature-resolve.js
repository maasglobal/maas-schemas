'use strict';

const index = require('../index');
const expect = require('chai').expect;

module.exports = function () {
  describe('Resolve schema', () => {

    describe('valid core schema request', () => {
      let schema;

      before(done => {
        schema = index.resolveSchema('core:agency-option');
        done();
      });

      it('should return a schema', () => {
        expect(schema).to.not.be.undefined;
      });

      it('should return a dereferenced schema', () => {
        expect(schema).to.not.have.deep.property('$ref');
      });
    });

    describe('valid maas-backend schema request', () => {
      let schema;

      before(done => {
        schema = index.resolveSchema('maas-backend:bookings-agency-options-request');
        done();
      });

      it('should return a schema', () => {
        expect(schema).to.not.be.undefined;
      });

      it('should return a dereferenced schema', () => {
        expect(schema).to.not.have.deep.property('$ref');
      });
    });

    describe('valid tsp schema request', () => {
      let schema;

      before(done => {
        schema = index.resolveSchema('tsp:booking-create-response');
        done();
      });

      it('should return a schema', () => {
        expect(schema).to.not.be.undefined;
      });

      it('should return a dereferenced schema', () => {
        expect(schema).to.not.have.deep.property('$ref');
      });
    });

    describe('invalid schema request', () => {
      const unexistedId = 'core:i-am-not-your-id';
      let e;
      let schema;

      before(done => {
        try {
          schema = index.resolveSchema(unexistedId);
          done();
        } catch (error) {
          e = error;
          done();
        }
      });

      it('should not return a schema', () => {
        expect(schema).to.be.undefined;
      });

      it('should return error', () => {
        expect(e).to.not.be.undefined;
      });

    });
  });
};
