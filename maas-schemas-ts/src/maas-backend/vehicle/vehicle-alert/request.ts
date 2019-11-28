/*

undefined
Request to vehicle

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Product_ from 'maas-schemas-ts/core/product';

export const schemaId =
  'http://maasglobal.com/maas-backend/vehicle/vehicle-alert/request.json';

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    vehicleId?: string;
    productId?: Product_.Id;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    vehicleId: t.string,
    productId: Product_.Id,
  }),
  (
    x,
  ): x is t.Branded<
    {
      vehicleId?: string;
      productId?: Product_.Id;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
