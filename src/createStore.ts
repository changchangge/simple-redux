interface state {
  [key: string]: any;
}

type listener = () => any;

function createStore(initState: state): any {
  let state = initState;
  const listeners: listener[] = [];

  function subscribe(listener: listener): void {
    listeners.push(listener);
  }

  function changeState(newState: state): void {
    state = newState;
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function getState(): state {
    return state;
  }

  return {
    subscribe,
    changeState,
    getState,
  };
}

export default createStore;
