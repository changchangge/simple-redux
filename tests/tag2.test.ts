import { createStore, combineReducers } from '../src';

describe('demo-2 test', () => {
  it('createStore测试', () => {
    function ccReducer(state, action) {
      switch (action.type) {
        case 'loveYashiAdd1':
          return {
            loveYashi: state.loveYashi + 1,
          };
        case 'loveYashiAdd2': {
          return {
            loveYashi: state.loveYashi + 2,
          };
        }
        default:
          return state;
      }
    }

    function yashiReducer(state, action) {
      switch (action.type) {
        case 'loveCcAdd1':
          return {
            loveCc: state.loveCc + 1,
          };
        case 'loveCcAdd2': {
          return {
            loveCc: state.loveCc + 2,
          };
        }
        default:
          return state;
      }
    }

    const reducer = combineReducers({
      cc: ccReducer,
      yashi: yashiReducer,
    });

    let initState = {
      cc: {
        loveYashi: 1,
      },
      yashi: {
        loveCc: 1,
      },
    };

    let store = createStore(reducer, initState);

    let loveYashi = initState.cc.loveYashi;
    let loveCc = initState.yashi.loveCc;

    store.subscribe(() => {
      let state = store.getState();
      loveCc = state.yashi.loveCc;
      loveYashi = state.cc.loveYashi;
    });

    expect(loveYashi).toBe(1);
    expect(loveCc).toBe(1);

    store.dispatch({
      type: 'loveYashiAdd1',
    });

    expect(loveYashi).toBe(2);
    expect(loveCc).toBe(1);

    store.dispatch({
      type: 'loveCcAdd2',
    });

    expect(loveYashi).toBe(2);
    expect(loveCc).toBe(3);
  });
});
