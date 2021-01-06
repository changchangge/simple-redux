import { createStore } from '../src';

describe('demo-1 test', () => {
  it('createStore测试', () => {
    let initState = {
      cc: {
        loveyashi: 1,
      },
      yashi: {
        lovecc: 1,
      },
    };
    
    let temp1 = initState.cc.loveyashi;
    let temp2 = initState.yashi.lovecc;

    let store = createStore(initState);

    store.subscribe(() => {
      let state = store.getState();
      temp1 = state.cc.loveyashi;
    });

    store.subscribe(() => {
      let state = store.getState();
      temp2 = state.yashi.lovecc;
    });

    store.changeState({
      ...store.getState(),
      cc: {
        loveyashi: 2,
      },
    });

    expect(temp1).toBe(2);
    expect(temp2).toBe(1);

    store.changeState({
      ...store.getState(),
      yashi: {
        lovecc: 2,
      },
    });

    expect(temp1).toBe(2);
    expect(temp2).toBe(2);
  });
});
