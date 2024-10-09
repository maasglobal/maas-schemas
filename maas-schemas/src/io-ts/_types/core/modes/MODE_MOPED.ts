/*

undefined
undefined

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Vehicle_52ac_ from '../components/vehicle';

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
export type DefinedC = {} & DefinedType;
export const Defined: DefinedC = new DefinedType();

export const schemaId = 'https://schemas.maas.global/core/modes/MODE_MOPED.json';

// MODE_MOPED
// The default export. More information at the top.
export type MODE_MOPED = t.Branded<
  {
    scooter?: ({
      id?: Vehicle_52ac_.VehicleId;
    } & Record<string, unknown>) & {
      id: Defined;
    };
  } & Record<string, unknown>,
  MODE_MOPEDBrand
>;
export type MODE_MOPEDC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        scooter: t.IntersectionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  id: typeof Vehicle_52ac_.VehicleId;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >,
            t.TypeC<{
              id: typeof Defined;
            }>,
          ]
        >;
      }>,
      t.RecordC<t.StringC, t.UnknownC>,
    ]
  >,
  MODE_MOPEDBrand
>;
export const MODE_MOPED: MODE_MOPEDC = t.brand(
  t.intersection([
    t.partial({
      scooter: t.intersection([
        t.intersection([
          t.partial({
            id: Vehicle_52ac_.VehicleId,
          }),
          t.record(t.string, t.unknown),
        ]),
        t.type({
          id: Defined,
        }),
      ]),
    }),
    t.record(t.string, t.unknown),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      scooter?: ({
        id?: Vehicle_52ac_.VehicleId;
      } & Record<string, unknown>) & {
        id: Defined;
      };
    } & Record<string, unknown>,
    MODE_MOPEDBrand
  > => true,
  'MODE_MOPED',
);
export type MODE_MOPEDBrand = {
  readonly MODE_MOPED: unique symbol;
};

export default MODE_MOPED;

// Success