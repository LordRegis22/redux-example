import counterReducer from '../client/reducers/counterReducer.js';

describe('counterReducer', () => {
  // create state to be available in each test
  let defaultState;

  beforeEach(() => {
    defaultState = { count: 22 };
  });

  it('should provide correct default state', () => {
    // save result of invoking reducer with empty action
    const result = counterReducer(defaultState, {});
    // assert correct default state is returned from reducer
    expect(result).toEqual({ count: 22 });
  });

  it('should not update state with an invalid action', () => {
    // save result of invoking reducer with invalid action
    const result = counterReducer(defaultState, {
      type: 'INVALID_ACTION',
      payload: 'NOT_A_REAL_PAYLOAD',
    });
    // assert state is not updated by reducer
    expect(result).toEqual({ count: 22 });
  });

  it('should increment state.count by one when passed an increment object', () => {
    const result = counterReducer(defaultState, { type: 'INCREMENT_COUNTER' });
    expect(result).toEqual({ count: 23 });
  });
});
