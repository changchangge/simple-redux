import { ReducersMapObject, Reducer } from './types/reducers';
import { AnyAction } from './types/action';
import { State } from './types/store';

function combineReducers(reducers: ReducersMapObject): Reducer {
  const keys = Object.keys(reducers);

  function reducer(state: State = {}, action: AnyAction): State {
    const newState: State = {};

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const newStateForKey = reducer(previousStateForKey, action);
      newState[key] = newStateForKey;
    }

    return newState;
  }

  return reducer;
}

export default combineReducers;
