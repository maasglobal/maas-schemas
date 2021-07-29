'use strict';

const { expect } = require('chai');
const utils = require('../../../../../');

const requestWithoutSpaceDemand = {
  identityId: 'e0dd4850-6449-11ea-b274-21ac9ed58ee0',
  agencyId: '24Rent',
  headers: {
    Accept: 'application/json;version=7.0.0, application/json;version=6.0.0',
    'Accept-Encoding': 'gzip',
    'Accept-Language': 'en-GB',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5MjAzOTUwLTNiOGMtMTFlYi1iMDM1LTQ1OTZmNDMxZmFmYiIsImlhdCI6MTYyNzQ4Nzg0M30.WtPm044ss3iPJNj09Q1aFdCy8wZ8g3Lcy8LqS_y0dZQ',
    Host: 'api-eu-west-1.blackbox.development.maas.global',
    'User-Agent': 'Amazon CloudFront',
    Via: '2.0 ba9347086484f25b8da311dec69fb9c2.cloudfront.net (CloudFront)',
    'X-Amz-Cf-Id': 'gN35rCvJ_03wgoY-3mVtf-M4CNgdfIpVAZZ3_K012VSXslmIhZ5ZMg==',
    'X-Amzn-Trace-Id': 'Root=1-61017e6e-6f18e093373fc5dc2b28f947',
    'x-api-key': 'LpCi7hIhXu8c3HaRBxrNT569nxB8AVVE2gpOsM1r',
    'X-Forwarded-For': '91.145.172.194, 35.158.136.197',
    'X-Forwarded-Port': '443',
    'X-Forwarded-Proto': 'https',
    'x-my-api-version': '1',
    'x-whim-app-instance-id': 'B2FB7F98-BF3E-4520-AF2F-10D8128D969A',
    'x-whim-user-agent': 'Whim/2.0.1000_12 (IOS/14.6.0; iPhone/iPhone 11; 828x1792; en_GB)',
  },
  payload: {
    endTime: '1627497000000',
    from: '60.1770736,24.9489845',
    fromRadius: '20000',
    mode: 'CAR',
    startTime: '1627489800000',
    toRadius: '0',
  },
};

describe('bookings-agency-options request', () => {
  const schema = require('../../../../../schemas/maas-backend/bookings/bookings-agency-options/request.json');

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
