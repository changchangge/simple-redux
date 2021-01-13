import { Action, AnyAction } from './action';
import { Reducer } from './reducers';

export interface State {
  [key: string]: any;
}

export type StoreEnhancerStoreCreator<S = any, A extends Action = AnyAction> = (
  // eslint-disable-next-line no-unused-vars
  reducer: Reducer<S, A>,
  // eslint-disable-next-line no-unused-vars
  state: State
) => any;
