/*

undefined
Schema for MODE_TAXI meta field

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Common_ from 'maas-schemas-ts/core/components/common';

export const schemaId = 'http://maasglobal.com/core/modes/MODE_TAXI.json';

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    vehicleId?: string;
    noShowReportedByDriver?: boolean;
    vehicleLocation?: UnitsGeo_.Location;
    vehicleType?: string;
    vehicleDescription?: string;
    driver?: {
      phone?: string;
      name?: string;
      image?: Units_.Url;
    };
    dispatchOrderId?: string;
    eta?: Units_.Time;
    taxiCenter?: {
      name?: string;
      phone?: Common_.Phone;
    };
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    vehicleId: t.string,
    noShowReportedByDriver: t.boolean,
    vehicleLocation: UnitsGeo_.Location,
    vehicleType: t.string,
    vehicleDescription: t.string,
    driver: t.partial({
      phone: t.string,
      name: t.string,
      image: Units_.Url,
    }),
    dispatchOrderId: t.string,
    eta: Units_.Time,
    taxiCenter: t.partial({
      name: t.string,
      phone: Common_.Phone,
    }),
  }),
  (
    x,
  ): x is t.Branded<
    {
      vehicleId?: string;
      noShowReportedByDriver?: boolean;
      vehicleLocation?: UnitsGeo_.Location;
      vehicleType?: string;
      vehicleDescription?: string;
      driver?: {
        phone?: string;
        name?: string;
        image?: Units_.Url;
      };
      dispatchOrderId?: string;
      eta?: Units_.Time;
      taxiCenter?: {
        name?: string;
        phone?: Common_.Phone;
      };
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
