/*

undefined
MaaS.fi geocoding (GeoJSON) response schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Geolocation_ from 'maas-schemas-ts/core/components/geolocation';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId =
  'http://maasglobal.com/maas-backend/geocoding/geocoding-reverse/response.json';

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    type?: 'FeatureCollection';
    features?: Array<
      Geolocation_.Feature & {
        properties?: {} & {
          city: Defined;
          country: Defined;
          countryCode: Defined;
        };
      }
    >;
    debug?: {};
  } & {
    type: Defined;
    features: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      type: t.literal('FeatureCollection'),
      features: t.array(
        t.intersection([
          Geolocation_.Feature,
          t.partial({
            properties: t.intersection([
              t.type({}),
              t.type({
                city: Defined,
                country: Defined,
                countryCode: Defined,
              }),
            ]),
          }),
        ]),
      ),
      debug: t.type({}),
    }),
    t.type({
      type: Defined,
      features: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'FeatureCollection';
      features?: Array<
        Geolocation_.Feature & {
          properties?: {} & {
            city: Defined;
            country: Defined;
            countryCode: Defined;
          };
        }
      >;
      debug?: {};
    } & {
      type: Defined;
      features: Defined;
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
