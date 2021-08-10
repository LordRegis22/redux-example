import * as actions from '../constants/actionTypes';

const initialState = {
  colors: ['chartreuse', 'cyan', 'magenta', 'orange', 'gold'],
  currentColor: 'chartreuse',
  clickedColors: [],
};

const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_COLOR: {
      const copyOfClickedColors = [...state.clickedColors];
      copyOfClickedColors.push(action.payload);
      return {
        ...state,
        currentColor: action.payload,
        clickedColors: copyOfClickedColors,
      };
    }
    default:
      return state;
  }
};

export default colorsReducer;
