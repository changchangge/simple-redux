import { Action, AnyAction } from './action';

export type Reducer<S = any, A extends Action = AnyAction> = (
  // eslint-disable-next-line no-unused-vars
  state: S | undefined,
  // eslint-disable-next-line no-unused-vars
  action: A
) => S;

export type ReducersMapObject<S = any, A extends Action = AnyAction> = {
  [K in keyof S]: Reducer<S[K], A>;
};
