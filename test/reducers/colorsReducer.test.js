import colorsReducer from '../../client/reducers/colorsReducer';

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
  describe('CHANGE_COLOR', () => {
    let CHANGE_COLOR;
    beforeEach(() => {
      CHANGE_COLOR = {
        type: 'CHANGE_COLOR',
        payload: 'cyan',
      };
    });

    it('should update state.currentColor and add chosen color to state.clickedColors when passed a color object', () => {
      const result = colorsReducer(defaultState, CHANGE_COLOR);
      expect(result).toEqual({
        colors: ['chartreuse', 'cyan', 'magenta', 'orange'],
        currentColor: 'cyan',
        clickedColors: ['cyan'],
      });
    });

    it('should immutably update state', () => {
      const result = colorsReducer(defaultState, {
        type: 'CHANGE_COLOR',
        payload: 'cyan',
      });
      expect(result).not.toBe(defaultState);
      expect(result.clickedColors).not.toBe(defaultState.clickedColors);
    });
  });
});
