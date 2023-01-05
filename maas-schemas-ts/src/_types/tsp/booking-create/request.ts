/*

undefined
Request schema for creating a booking through a TSP adapter

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import * as t from 'io-ts';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

import * as Booking_ from '../../core/booking';
import * as BookingMeta_ from '../../core/booking-meta';
import * as BookingOption_ from '../../core/booking-option';
import * as Configurator_ from '../../core/components/configurator';
import * as CustomerSelection_ from '../../core/components/customerSelection';
import * as Customer_ from '../../core/customer';

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

export const schemaId = 'https://schemas.maas.global/tsp/booking-create/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  ({
    leg?: BookingOption_.Leg;
    meta?: BookingMeta_.BookingMeta;
    terms?: Booking_.Terms;
    customer?: Customer_.Customer;
    tspProduct?: BookingOption_.TspProduct;
    configurator?: Configurator_.Configurator;
    customerSelection?: CustomerSelection_.CustomerSelection;
  } & Record<string, unknown>) & {
    leg: Defined;
    meta: Defined;
    terms: Defined;
    customer: Defined;
    tspProduct: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            leg: typeof BookingOption_.Leg;
            meta: typeof BookingMeta_.BookingMeta;
            terms: typeof Booking_.Terms;
            customer: typeof Customer_.Customer;
            tspProduct: typeof BookingOption_.TspProduct;
            configurator: typeof Configurator_.Configurator;
            customerSelection: typeof CustomerSelection_.CustomerSelection;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        leg: typeof Defined;
        meta: typeof Defined;
        terms: typeof Defined;
        customer: typeof Defined;
        tspProduct: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        leg: BookingOption_.Leg,
        meta: BookingMeta_.BookingMeta,
        terms: Booking_.Terms,
        customer: Customer_.Customer,
        tspProduct: BookingOption_.TspProduct,
        configurator: Configurator_.Configurator,
        customerSelection: CustomerSelection_.CustomerSelection,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      leg: Defined,
      meta: Defined,
      terms: Defined,
      customer: Defined,
      tspProduct: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      leg?: BookingOption_.Leg;
      meta?: BookingMeta_.BookingMeta;
      terms?: Booking_.Terms;
      customer?: Customer_.Customer;
      tspProduct?: BookingOption_.TspProduct;
      configurator?: Configurator_.Configurator;
      customerSelection?: CustomerSelection_.CustomerSelection;
    } & Record<string, unknown>) & {
      leg: Defined;
      meta: Defined;
      terms: Defined;
      customer: Defined;
      tspProduct: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export type RequestBrand = {
  readonly Request: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(Request)).decodeSync(examplesRequest) // => examplesRequest */
export const examplesRequest: NonEmptyArray<Request> = [
  {
    leg: {
      to: {
        lat: 60.1769789,
        lon: 24.9504135,
        name: 'Ida Aalbergin tie 3, Helsinki',
        address:
          'streetName:Ida%20Aalbergin%20tie|streetNumber:1|city:Helsinki|zipCode:00400|country:Suomi',
      },
      from: {
        lat: 60.177252,
        lon: 24.950388,
        name: 'Siltasaarenkatu 1, Helsinki',
        address:
          'streetName:Siltasaarenkatu|streetNumber:1|city:Helsinki|zipCode:00530|country:Suomi',
      },
      mode: 'TAXI',
      endTime: 1572441571838,
      agencyId: 'Test1',
      startTime: 1572440451838,
    },
    customer: {
      email: 'test@example.com',
      phone: '+358400001010',
      locale: 'en',
      clientId: 'whim',
      lastName: 'Tester',
      opaqueId: 'cafecacacafecacacafecacacafecacacafecacacafecacacafecacacafecaca',
      opaqueIdShort: 'cafecacacafecacacafecacacafecaca',
      firstName: 'Test',
      documents: [],
    },
    meta: {
      MODE_TAXI: {
        driver: {},
        taxiCenter: { name: 'Taksi', phone: '+358100000011' },
        vehicleType: 'any',
      },
    },
    terms: {
      reusable: false,
      validity: { endTime: 1572355249017, startTime: 1572355193128 },
      reconcilable: false,
    },
    configurator: {
      outboundSingle: {
        type: 'oneOf',
        name: 'Outbound Single',
        description: 'Are you posh or not?',
        choices: [
          {
            id: 'first-class',
            name: '1st Class',
            description: 'Yes, posh',
            fares: [{ amount: 100, currency: 'EUR' }],
            default: false,
          },
          {
            id: 'second-class',
            name: '2nd Class',
            description: 'Not posh',
            fares: [{ amount: 30, currency: 'EUR' }],
            default: true,
          },
        ],
      },
    },
    customerSelection: {},
    cost: null,
    tspId: null,
    tspProduct: { id: 'testtaxi1-product1' },
  },
] as unknown as NonEmptyArray<Request>;

export default Request;

// Success
