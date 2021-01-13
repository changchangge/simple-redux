import { Reducer } from './types/reducers';
import { AnyAction } from './types/action';
import { State } from './types/store';

type listener = () => any;

function createStore(reducer: Reducer, initState?: State): any {
  let state = initState;
  const listeners: listener[] = [];

  function subscribe(listener: listener): void {
    listeners.push(listener);
  }

  function dispatch(action: AnyAction): void {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function getState(): State | undefined {
    return state;
  }

  dispatch({ type: Symbol() });

  return {
    subscribe,
    dispatch,
    getState,
  };
}

export default createStore;
