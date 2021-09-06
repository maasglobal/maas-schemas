'use strict';

const { expect } = require('chai');
const utils = require('../../../../');

const requestWithoutSpaceDemand = {
  identityId: 'e0dd4850-6449-11ea-b274-21ac9ed58ee0',
  payload: {
    from: '35.6917414,139.7829273',
    fromAddress:
      'state:Tokyo|zipCode:103-0004|country:Japan|streetNumber:10-3|city:Chuo City|district:Higashinihonbashi 3-chōme',
    fromName: 'Chuo City, Higashinihonbashi 3-chōme, 10-3',
    leaveAt: '1627485225645',
    modes: 'TAXI',
    to: '35.6910514,139.7823222',
    toAddress:
      'state:Tokyo|zipCode:103-0004|country:Japan|streetNumber:3-18|city:Chuo City|district:3-chōme Higashinihonbashi',
    toName: 'Chuo City, 3-chōme Higashinihonbashi, 3-18',
  },
};

describe('routes-query-request', () => {
  const schema = require('../../../../schemas/maas-backend/routes/routes-query/request.json');

  it('should succeed without error for request without space demand', () => {
    const result = utils.validate(schema, requestWithoutSpaceDemand);

    expect(result).to.exist;
    expect(result.payload.spaceDemand).to.not.exist;
  });

  it('should succeed without error for request with space demand', () => {
    const result = utils.validate(
      schema,
      Object.assign({}, requestWithoutSpaceDemand, {
        payload: {
          ...requestWithoutSpaceDemand.payload,
          spaceDemand: 'adults:1|bags:2',
        },
      })
    );

    expect(result).to.exist;
    expect(result.payload.spaceDemand).to.exist;
    expect(result.payload.spaceDemand).to.equal('adults:1|bags:2');
  });
});
