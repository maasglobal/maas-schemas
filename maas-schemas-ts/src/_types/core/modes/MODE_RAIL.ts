/*

undefined
Schema for MODE_RAIL meta field

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Place_ from '../components/place';
import * as Station_ from '../components/station';

export type Defined = {} | null;
export class DefinedType extends t.Type<Defined> {
  readonly _tag: 'DefinedType' = 'DefinedType';
  constructor() {
    super(
      'defined',
      (u): u is Defined => typeof u !== 'undefined',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
  }
}
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId = 'https://schemas.maas.global/core/modes/MODE_RAIL.json';

// MODE_RAIL
// The default export. More information at the top.
export type MODE_RAIL = t.Branded<
  {
    outward?: ({
      id?: string;
      from?: Place_.Place;
      to?: Place_.Place;
    } & Record<string, unknown>) & {
      from: Defined;
      to: Defined;
    };
    return?: ({
      id?: string;
      from?: Place_.Place;
      to?: Place_.Place;
    } & Record<string, unknown>) & {
      from: Defined;
      to: Defined;
    };
    deliveryMethod?: {
      name?: string;
      stationId?: Station_.Id;
      alternativeCollections?: string;
    } & Record<string, unknown>;
  } & Record<string, unknown>,
  MODE_RAILBrand
>;
export type MODE_RAILC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        outward: t.IntersectionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  id: t.StringC;
                  from: typeof Place_.Place;
                  to: typeof Place_.Place;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >,
            t.TypeC<{
              from: typeof Defined;
              to: typeof Defined;
            }>,
          ]
        >;
        return: t.IntersectionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  id: t.StringC;
                  from: typeof Place_.Place;
                  to: typeof Place_.Place;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >,
            t.TypeC<{
              from: typeof Defined;
              to: typeof Defined;
            }>,
          ]
        >;
        deliveryMethod: t.IntersectionC<
          [
            t.PartialC<{
              name: t.StringC;
              stationId: typeof Station_.Id;
              alternativeCollections: t.StringC;
            }>,
            t.RecordC<t.StringC, t.UnknownC>,
          ]
        >;
      }>,
      t.RecordC<t.StringC, t.UnknownC>,
    ]
  >,
  MODE_RAILBrand
>;
export const MODE_RAIL: MODE_RAILC = t.brand(
  t.intersection([
    t.partial({
      outward: t.intersection([
        t.intersection([
          t.partial({
            id: t.string,
            from: Place_.Place,
            to: Place_.Place,
          }),
          t.record(t.string, t.unknown),
        ]),
        t.type({
          from: Defined,
          to: Defined,
        }),
      ]),
      return: t.intersection([
        t.intersection([
          t.partial({
            id: t.string,
            from: Place_.Place,
            to: Place_.Place,
          }),
          t.record(t.string, t.unknown),
        ]),
        t.type({
          from: Defined,
          to: Defined,
        }),
      ]),
      deliveryMethod: t.intersection([
        t.partial({
          name: t.string,
          stationId: Station_.Id,
          alternativeCollections: t.string,
        }),
        t.record(t.string, t.unknown),
      ]),
    }),
    t.record(t.string, t.unknown),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      outward?: ({
        id?: string;
        from?: Place_.Place;
        to?: Place_.Place;
      } & Record<string, unknown>) & {
        from: Defined;
        to: Defined;
      };
      return?: ({
        id?: string;
        from?: Place_.Place;
        to?: Place_.Place;
      } & Record<string, unknown>) & {
        from: Defined;
        to: Defined;
      };
      deliveryMethod?: {
        name?: string;
        stationId?: Station_.Id;
        alternativeCollections?: string;
      } & Record<string, unknown>;
    } & Record<string, unknown>,
    MODE_RAILBrand
  > => true,
  'MODE_RAIL',
);
export interface MODE_RAILBrand {
  readonly MODE_RAIL: unique symbol;
}

export default MODE_RAIL;

// Success
