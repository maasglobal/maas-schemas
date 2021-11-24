/*

undefined
MaaS virtual card posting schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../../core/components/units';

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

export const schemaId =
  'https://schemas.maas.global/maas-backend/customers/virtual-cards/virtualCardAccountPosting.json';

// VirtualCardAccountPosting
// The default export. More information at the top.
export type VirtualCardAccountPosting = t.Branded<
  {
    id?: Units_.Uuid;
    virtualCardAccountId?: Units_.Uuid;
    date?: Units_.Time;
    direction?: string & ('CREDIT' | 'DEBIT');
    amount?: number;
    currency?: Units_.Currency;
    metadata?: Record<string, unknown>;
    location?: Record<string, unknown>;
    providerPostingId?: string;
    created?: Units_.Time;
  } & {
    id: Defined;
    virtualCardAccountId: Defined;
    date: Defined;
    amount: Defined;
    currency: Defined;
  },
  VirtualCardAccountPostingBrand
>;
export type VirtualCardAccountPostingC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: typeof Units_.Uuid;
        virtualCardAccountId: typeof Units_.Uuid;
        date: typeof Units_.Time;
        direction: t.IntersectionC<
          [t.StringC, t.UnionC<[t.LiteralC<'CREDIT'>, t.LiteralC<'DEBIT'>]>]
        >;
        amount: t.NumberC;
        currency: typeof Units_.Currency;
        metadata: t.UnknownRecordC;
        location: t.UnknownRecordC;
        providerPostingId: t.StringC;
        created: typeof Units_.Time;
      }>,
      t.TypeC<{
        id: typeof Defined;
        virtualCardAccountId: typeof Defined;
        date: typeof Defined;
        amount: typeof Defined;
        currency: typeof Defined;
      }>,
    ]
  >,
  VirtualCardAccountPostingBrand
>;
export const VirtualCardAccountPosting: VirtualCardAccountPostingC = t.brand(
  t.intersection([
    t.partial({
      id: Units_.Uuid,
      virtualCardAccountId: Units_.Uuid,
      date: Units_.Time,
      direction: t.intersection([
        t.string,
        t.union([t.literal('CREDIT'), t.literal('DEBIT')]),
      ]),
      amount: t.number,
      currency: Units_.Currency,
      metadata: t.UnknownRecord,
      location: t.UnknownRecord,
      providerPostingId: t.string,
      created: Units_.Time,
    }),
    t.type({
      id: Defined,
      virtualCardAccountId: Defined,
      date: Defined,
      amount: Defined,
      currency: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: Units_.Uuid;
      virtualCardAccountId?: Units_.Uuid;
      date?: Units_.Time;
      direction?: string & ('CREDIT' | 'DEBIT');
      amount?: number;
      currency?: Units_.Currency;
      metadata?: Record<string, unknown>;
      location?: Record<string, unknown>;
      providerPostingId?: string;
      created?: Units_.Time;
    } & {
      id: Defined;
      virtualCardAccountId: Defined;
      date: Defined;
      amount: Defined;
      currency: Defined;
    },
    VirtualCardAccountPostingBrand
  > => true,
  'VirtualCardAccountPosting',
);
export interface VirtualCardAccountPostingBrand {
  readonly VirtualCardAccountPosting: unique symbol;
}

export default VirtualCardAccountPosting;

// Success
