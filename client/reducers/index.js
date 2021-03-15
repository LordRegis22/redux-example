import { combineReducers } from 'redux';

import colorsReducer from './colorsReducer.js';
import counterReducer from './counterReducer.js';

export default combineReducers({
  colors: colorsReducer,
  counter: counterReducer,
});

// // this is the shape of state in store
// state = {
//   colors: {
//     colors: ['chartreuse', 'cyan', 'magenta', 'orange'],
//     currentColor: 'orange',
//     clickedColors: [],
//   },
//   counter: {
//     count: 22,
//   },
// };
