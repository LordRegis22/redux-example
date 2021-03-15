import * as actions from '../constants/actionTypes';

const initialState = {
  count: 22,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNTER: {
      const newCounterVal = state.count + 1;
      return { count: newCounterVal };
    }
    case actions.DECREMENT_COUNTER: {
      const newCounterVal = state.count - 1;
      return { count: newCounterVal };
    }
    default:
      return state;
  }
};

export default counterReducer;
