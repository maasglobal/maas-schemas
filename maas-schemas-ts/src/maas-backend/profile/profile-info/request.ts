/*

undefined
Request schema for profile-info

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId =
  'http://maasglobal.com/maas-backend/profile/profile-info/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<unknown, RequestBrand>;
export const Request = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, RequestBrand> => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success