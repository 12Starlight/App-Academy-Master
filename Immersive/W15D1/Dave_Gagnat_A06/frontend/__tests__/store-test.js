/* globals jest */

jest.mock('../reducers/root_reducer', () => {
  return jest.fn((oldState, action) => ({
    events: { 1:
                { id: 1,
                  description: "Apply to App Academy",
                  date: '2016-01-17'
                }
            }
  }));
});
import RootReducer from '../reducers/root_reducer';
import configureStore from '../store/store';

describe('Store', () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  afterEach(() => {
    RootReducer.mockClear();
  });

  it('should export a configureStore function', () => {
    expect(typeof configureStore).toEqual('function');
  });

  it('the exported function should create a store when invoked', () => {
    expect(store.getState()).toEqual({
      events: { 1: { id: 1, description: "Apply to App Academy", date: '2016-01-17' }}
    });
  });

  it('passes dispatched objects the the reducer', () => {
    store.dispatch({ type: "TESTING_REDUCER" });

    // RootReducer should be called twice: when the store is configured & when
    //  object is dispatched
    expect(RootReducer).toHaveBeenCalledTimes(2);
  });

  it('creates a store with thunk middleware', () => {
    store.dispatch(dispatch => {});

    // RootReducer should only be called once: when the store is configured
    expect(RootReducer).toHaveBeenCalledTimes(1);
  });
});
