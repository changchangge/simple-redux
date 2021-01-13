import { Reducer } from './types/reducers';
import { State, StoreEnhancerStoreCreator } from './types/store';

const applyMiddleware = function (...middlewares: any[]) {
  return (createStore: StoreEnhancerStoreCreator) => (
    reducer: Reducer,
    initState: State
  ): any => {
    const store = createStore(reducer, initState);
    const dispatch = middlewares.reduce((acc, curr) => {
      curr(store)(acc);
    }, store.dispatch);
    return {
      ...store,
      dispatch,
    };
  };
};

export default applyMiddleware;
