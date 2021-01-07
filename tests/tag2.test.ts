import { createStore } from '../src';

describe('demo-2 test', () => {
  it('createStore测试', () => {
    function reducer(state, action) {
      switch (action.type) {
        case 'CCINCREMENT':
          return {
            ...state,
            cc: {
              loveyashi: 2,
            },
          };
        case 'YASHIINCREMENT':
          return {
            ...state,
            yashi: {
              lovecc: 2,
            },
          };
        default:
          return state;
      }
    }

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

    let store = createStore(reducer, initState);

    store.subscribe(() => {
      let state = store.getState();
      temp1 = state.cc.loveyashi;
    });

    store.subscribe(() => {
      let state = store.getState();
      temp2 = state.yashi.lovecc;
    });

    store.dispatch({
      type: 'CCINCREMENT',
    });

    expect(temp1).toBe(2);
    expect(temp2).toBe(1);

    store.dispatch({
      type: 'YASHIINCREMENT',
    });

    expect(temp1).toBe(2);
    expect(temp2).toBe(2);
  });
});
