import * as types from '../constants/actionTypes';

export const changeColor = (color) => {
  return { type: types.CHANGE_COLOR, payload: color };
};

export const incrementCounter = () => {
  return { type: types.INCREMENT_COUNTER };
};

export const decrementCounter = () => {
  return { type: types.DECREMENT_COUNTER };
};
