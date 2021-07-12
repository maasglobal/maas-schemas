'use strict';

const utils = require('../../../index');

describe('configurators', () => {
  describe('validate configurator', () => {
    it('should succeed without error', () => {
      const schema = require('../../../schemas/core/itinerary.json');
      const data = require('./itinerary-1.json');

      expect(utils.validate(schema, data)).toStrictEqual(data);
    });

    it('should succeed without error', () => {
      const schema = require('../../../schemas/core/itinerary.json');
      const data = require('./itinerary-2.json');

      expect(utils.validate(schema, data)).toStrictEqual(data);
    });

    it('should succeed for v1 without error', () => {
      const schema = require('../../../schemas/core/components/configurator.json');
      const data = require('./configurator-v1-1.json');

      expect(utils.validate(schema, data)).toStrictEqual(data);
    });

    it('should succeed for v1 without error', () => {
      const schema = require('../../../schemas/core/components/configurator.json');
      const data = require('./configurator-v1-2.json');

      expect(utils.validate(schema, data)).toStrictEqual(data);
    });

    it('should succeed for v1 with empty object', () => {
      const schema = require('../../../schemas/core/components/configurator.json');

      expect(utils.validate(schema, {})).toStrictEqual({});
    });

    it('should succeed for v2 without error', () => {
      const schema = require('../../../schemas/core/components/configurator.json');
      const data = require('./configurator-v2.json');

      expect(utils.validate(schema, data)).toStrictEqual(data);
    });

    it('should succeed for v2 with empty object', () => {
      const schema = require('../../../schemas/core/components/configurator.json');

      expect(utils.validate(schema, {})).toStrictEqual({});
    });
  });

  describe('validate customerSelection', () => {
    const schema = require('../../../schemas/core/components/customerSelection.json');

    it('should succeed without error', () => {
      const data = {
        ticketClass: ['second'],
        travelCard: ['none'],
      };

      expect(utils.validate(schema, data)).toStrictEqual(data);
    });
  });
});
