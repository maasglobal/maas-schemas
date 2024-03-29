/*

undefined
Maas Itinerary estimate request

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_16a4_ from '../../../core/components/api-common';
import * as CustomerSelection_57c3_ from '../../../core/components/customerSelection';
import * as Units_c404_ from '../../../core/components/units';
import * as Itinerary_8303_ from '../../../core/itinerary';
import * as ProductOption_5313_ from '../../../core/product-option';

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

export const schemaId =
  'https://schemas.maas.global/maas-backend/itineraries/itinerary-estimate/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_c404_.IdentityId;
    headers?: ApiCommon_16a4_.Headers;
    payload?: {
      itinerary?: Itinerary_8303_.Itinerary;
      customerSelections?: Array<
        {
          ref?: ProductOption_5313_.Ref;
          customerSelection?: CustomerSelection_57c3_.CustomerSelection;
        } & Record<string, unknown>
      >;
    } & {
      itinerary: Defined;
      customerSelections: Defined;
    };
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.PartialC<{
    identityId: typeof Units_c404_.IdentityId;
    headers: typeof ApiCommon_16a4_.Headers;
    payload: t.IntersectionC<
      [
        t.PartialC<{
          itinerary: typeof Itinerary_8303_.Itinerary;
          customerSelections: t.ArrayC<
            t.IntersectionC<
              [
                t.PartialC<{
                  ref: typeof ProductOption_5313_.Ref;
                  customerSelection: typeof CustomerSelection_57c3_.CustomerSelection;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >
          >;
        }>,
        t.TypeC<{
          itinerary: typeof Defined;
          customerSelections: typeof Defined;
        }>,
      ]
    >;
  }>,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.partial({
    identityId: Units_c404_.IdentityId,
    headers: ApiCommon_16a4_.Headers,
    payload: t.intersection([
      t.partial({
        itinerary: Itinerary_8303_.Itinerary,
        customerSelections: t.array(
          t.intersection([
            t.partial({
              ref: ProductOption_5313_.Ref,
              customerSelection: CustomerSelection_57c3_.CustomerSelection,
            }),
            t.record(t.string, t.unknown),
          ]),
        ),
      }),
      t.type({
        itinerary: Defined,
        customerSelections: Defined,
      }),
    ]),
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_c404_.IdentityId;
      headers?: ApiCommon_16a4_.Headers;
      payload?: {
        itinerary?: Itinerary_8303_.Itinerary;
        customerSelections?: Array<
          {
            ref?: ProductOption_5313_.Ref;
            customerSelection?: CustomerSelection_57c3_.CustomerSelection;
          } & Record<string, unknown>
        >;
      } & {
        itinerary: Defined;
        customerSelections: Defined;
      };
    },
    RequestBrand
  > => true,
  'Request',
);
export type RequestBrand = {
  readonly Request: unique symbol;
};

export default Request;

// Success
