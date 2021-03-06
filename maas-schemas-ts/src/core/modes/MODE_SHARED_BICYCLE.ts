/*

undefined
undefined

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

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

export const schemaId = 'http://maasglobal.com/core/modes/MODE_SHARED_BICYCLE.json';

// MODE_SHARED_BICYCLE
// The default export. More information at the top.
export type MODE_SHARED_BICYCLE = t.Branded<
  {
    bike?: {
      id?: string;
      type?: string;
    } & {
      id: Defined;
    };
  },
  MODE_SHARED_BICYCLEBrand
>;
export type MODE_SHARED_BICYCLEC = t.BrandC<
  t.PartialC<{
    bike: t.IntersectionC<
      [
        t.PartialC<{
          id: t.StringC;
          type: t.StringC;
        }>,
        t.TypeC<{
          id: typeof Defined;
        }>,
      ]
    >;
  }>,
  MODE_SHARED_BICYCLEBrand
>;
export const MODE_SHARED_BICYCLE: MODE_SHARED_BICYCLEC = t.brand(
  t.partial({
    bike: t.intersection([
      t.partial({
        id: t.string,
        type: t.string,
      }),
      t.type({
        id: Defined,
      }),
    ]),
  }),
  (
    x,
  ): x is t.Branded<
    {
      bike?: {
        id?: string;
        type?: string;
      } & {
        id: Defined;
      };
    },
    MODE_SHARED_BICYCLEBrand
  > => true,
  'MODE_SHARED_BICYCLE',
);
export interface MODE_SHARED_BICYCLEBrand {
  readonly MODE_SHARED_BICYCLE: unique symbol;
}

export default MODE_SHARED_BICYCLE;

// Success
