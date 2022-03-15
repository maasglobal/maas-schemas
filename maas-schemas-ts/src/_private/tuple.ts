import * as P from 'maasglobal-prelude-ts';

export function fromArray(n: 0): <A>(as: Array<A>) => P.Option<[]>;
export function fromArray(n: 1): <A>(as: Array<A>) => P.Option<[A]>;
export function fromArray(n: 2): <A>(as: Array<A>) => P.Option<[A, A]>;
export function fromArray(n: 3): <A>(as: Array<A>) => P.Option<[A, A, A]>;
export function fromArray(n: 4): <A>(as: Array<A>) => P.Option<[A, A, A, A]>;
export function fromArray(n: 5): <A>(as: Array<A>) => P.Option<[A, A, A, A, A]>;
export function fromArray(n: 6): <A>(as: Array<A>) => P.Option<[A, A, A, A, A, A]>;
export function fromArray(n: 7): <A>(as: Array<A>) => P.Option<[A, A, A, A, A, A, A]>;
export function fromArray(n: 8): <A>(as: Array<A>) => P.Option<[A, A, A, A, A, A, A, A]>;
export function fromArray(
  n: 9,
): <A>(as: Array<A>) => P.Option<[A, A, A, A, A, A, A, A, A]>;
export function fromArray(n: number): <A>(as: Array<A>) => P.Option<Array<A>> {
  return P.Option_.fromPredicate((as) => as.length === n);
}
