import { ReducersMapObject, Reducer } from './types/reducers';
import { AnyAction } from './types/action';
import { State } from './types/store';

function combineReducers(reducers: ReducersMapObject): Reducer {
  const keys = Object.keys(reducers);

  function reducer(state: State, action: AnyAction): State {
    const newState = state;

    for (let i = 0; i < keys.length; i++) {
      newState[keys[i]] = {
        ...newState,
        ...reducers[keys[i]](newState[keys[i]], action),
      };
    }

    return newState;
  }

  return reducer;
}

export default combineReducers;
