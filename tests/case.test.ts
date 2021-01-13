import { createStore, combineReducers } from '../src';

describe('demo-2 test', () => {
  it('createStore测试', () => {
    function ccReducer(state, action) {
      if (!state) {
        state = { loveYashi: 0 };
      }
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
      if (!state) {
        state = { loveCc: 0 };
      }
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

    let store = createStore(reducer);

    let loveYashi;
    let loveCc;

    store.subscribe(() => {
      let state = store.getState();
      loveCc = state.yashi.loveCc;
      loveYashi = state.cc.loveYashi;
    });

    store.dispatch({
      type: 'loveYashiAdd1',
    });

    expect(loveYashi).toBe(1);
    expect(loveCc).toBe(0);

    store.dispatch({
      type: 'loveCcAdd2',
    });

    expect(loveYashi).toBe(1);
    expect(loveCc).toBe(2);
  });
});
