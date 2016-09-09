'use strict';

const index = require('../index');
const expect = require('chai').expect;
const Promise = require('bluebird');

module.exports = function () {
  describe('Resolve schema', () => {

    describe('valid core schema request', () => {
      let schema;
      let childSchema;
      let error;

      before(done => {
        Promise.all([
          index.resolveSchema('core:agency-option'),
          index.resolveSchema('core:agency-option#/properties/leg'),
        ])
        .spread((_schema, _childSchema) => {
          schema = _schema;
          childSchema = _childSchema;
        })
        .catch(_error => {
          error = _error;
        })
        .finally(() => done());
      });

      it('should return a valid schema', () => {
        expect(schema).to.not.be.undefined;
        expect(childSchema).to.not.be.undefined;
        expect(childSchema.type).to.not.be.undefined;
      });

      it('should return a dereferenced schema', () => {
        expect(schema).to.not.have.deep.property('$ref');
        expect(childSchema).to.not.have.deep.property('$ref');
      });

      it('should not return an error', () => {
        expect(error).to.be.undefined;
      });
    });

    describe('valid maas-backend schema request', () => {
      let schema;
      let childSchema;
      let error;

      before(done => {
        Promise.all([
          index.resolveSchema('maas-backend:bookings-agency-options-request'),
          index.resolveSchema('maas-backend:bookings-agency-options-request#/properties/mode'),
        ])
        .spread((_schema, _childSchema) => {
          schema = _schema;
          childSchema = _childSchema;
        })
        .catch(_error => {
          error = _error;
        })
        .finally(() => done());
      });

      it('should return a valid schema', () => {
        expect(schema).to.not.be.undefined;
        expect(childSchema).to.not.be.undefined;
        expect(childSchema.type).to.not.be.undefined;
      });

      it('should return a dereferenced schema', () => {
        expect(schema).to.not.have.deep.property('$ref');
        expect(childSchema).to.not.have.deep.property('$ref');
      });

      it('should not return an error', () => {
        expect(error).to.be.undefined;
      });
    });

    describe('valid tsp schema request', () => {
      let schema;
      let childSchema;
      let error;

      before(done => {
        Promise.all([
          index.resolveSchema('tsp:booking-create-response'),
          index.resolveSchema('tsp:booking-create-response#/properties/leg'),
        ])
        .spread((_schema, _childSchema) => {
          schema = _schema;
          childSchema = _childSchema;
        })
        .catch(_error => {
          error = _error;
        })
        .finally(() => done());
      });

      it('should return a valid schema', () => {
        expect(schema).to.not.be.undefined;
        expect(childSchema).to.not.be.undefined;
        console.log(childSchema);
        expect(childSchema.anyOf).to.not.be.undefined;
      });

      it('should return a dereferenced schema', () => {
        expect(schema).to.not.have.deep.property('$ref');
        expect(childSchema).to.not.have.deep.property('$ref');
      });

      it('should not return an error', () => {
        expect(error).to.be.undefined;
      });
    });

    describe('invalid normal schema request', () => {
      const unexistedId = 'core:i-am-not-your-id';
      let error;
      let schema;

      before(done => {
        Promise.resolve(index.resolveSchema(unexistedId))
          .then(_schema => {
            schema = _schema;
          })
          .catch(_error => {
            error = _error;
          })
          .finally(() => done());
      });

      it('should not return a schema', () => {
        expect(schema).to.be.undefined;
      });

      it('should return error', () => {
        expect(error).to.not.be.undefined;
      });

    });

    describe('invalid child schema request', () => {
      const unexistedId = 'core:agency-option#/fake/does-not-exist';
      let error;
      let schema;

      before(done => {
        Promise.resolve(index.resolveSchema(unexistedId))
          .then(_schema => {
            schema = _schema;
            done();
          })
          .catch(_error => {
            error = _error;
            done();
          });
      });

      it('should not return a schema', () => {
        expect(schema).to.be.undefined;
      });

      it('should return error', () => {
        expect(error).to.not.be.undefined;
      });

    });
  });
};
