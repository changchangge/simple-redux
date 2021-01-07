import { Reducer } from './types/reducers';

interface State {
  [key: string]: any;
}

interface Action {
  type: string;
}

type listener = () => any;

function createStore(reducer: Reducer, initState: State): any {
  let state = initState;
  const listeners: listener[] = [];

  function subscribe(listener: listener): void {
    listeners.push(listener);
  }

  function dispatch(action: Action): void {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function getState(): State {
    return state;
  }

  return {
    subscribe,
    dispatch,
    getState,
  };
}

export default createStore;
