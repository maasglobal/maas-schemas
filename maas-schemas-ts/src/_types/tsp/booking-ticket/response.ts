/*

undefined
Response schema for retrieving a ticket from booking through a TSP adapter

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../core/components/units';

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

export const schemaId = 'https://schemas.maas.global/tsp/booking-ticket/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  ({
    ticket?: string;
    type?: string & ('html' | 'pdf' | 'svg' | 'png');
    contentType?: string &
      ('application/pdf' | 'image/svg+xml' | 'image/png' | 'text/html');
    refreshAt?: Units_.Time;
  } & Record<string, unknown>) & {
    ticket: Defined;
    type: Defined;
    contentType: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            ticket: t.StringC;
            type: t.IntersectionC<
              [
                t.StringC,
                t.UnionC<
                  [
                    t.LiteralC<'html'>,
                    t.LiteralC<'pdf'>,
                    t.LiteralC<'svg'>,
                    t.LiteralC<'png'>,
                  ]
                >,
              ]
            >;
            contentType: t.IntersectionC<
              [
                t.StringC,
                t.UnionC<
                  [
                    t.LiteralC<'application/pdf'>,
                    t.LiteralC<'image/svg+xml'>,
                    t.LiteralC<'image/png'>,
                    t.LiteralC<'text/html'>,
                  ]
                >,
              ]
            >;
            refreshAt: typeof Units_.Time;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        ticket: typeof Defined;
        type: typeof Defined;
        contentType: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        ticket: t.string,
        type: t.intersection([
          t.string,
          t.union([
            t.literal('html'),
            t.literal('pdf'),
            t.literal('svg'),
            t.literal('png'),
          ]),
        ]),
        contentType: t.intersection([
          t.string,
          t.union([
            t.literal('application/pdf'),
            t.literal('image/svg+xml'),
            t.literal('image/png'),
            t.literal('text/html'),
          ]),
        ]),
        refreshAt: Units_.Time,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      ticket: Defined,
      type: Defined,
      contentType: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      ticket?: string;
      type?: string & ('html' | 'pdf' | 'svg' | 'png');
      contentType?: string &
        ('application/pdf' | 'image/svg+xml' | 'image/png' | 'text/html');
      refreshAt?: Units_.Time;
    } & Record<string, unknown>) & {
      ticket: Defined;
      type: Defined;
      contentType: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success