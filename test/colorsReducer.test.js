import colorsReducer from '../client/reducers/colorsReducer';

describe('colorsReducer', () => {
  let defaultState;

  beforeEach(() => {
    defaultState = {
      colors: ['chartreuse', 'cyan', 'magenta', 'orange'],
      currentColor: 'orange',
      clickedColors: [],
    };
  });

  it('should provide correct default state', () => {
    const result = colorsReducer(defaultState, {});
    expect(result).toEqual({
      colors: ['chartreuse', 'cyan', 'magenta', 'orange'],
      currentColor: 'orange',
      clickedColors: [],
    });
  });

  it('should not update state with an invalid action', () => {
    const result = colorsReducer(defaultState, { type: 'INVALID_ACTION' });
    expect(result).toEqual({
      colors: ['chartreuse', 'cyan', 'magenta', 'orange'],
      currentColor: 'orange',
      clickedColors: [],
    });
  });

  it('should update state.currentColor and add chosen color to state.clickedColors when passed a color object', () => {
    const result = colorsReducer(defaultState, {
      type: 'CHANGE_COLOR',
      payload: 'cyan',
    });
    expect(result).toEqual({
      colors: ['chartreuse', 'cyan', 'magenta', 'orange'],
      currentColor: 'cyan',
      clickedColors: ['cyan'],
    });
  });
});
