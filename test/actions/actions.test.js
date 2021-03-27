import * as actions from '../../client/actions/actions';

describe('changeColor', () => {
  it('should return valid CHANGE_COLOR object, passing argument as payload', () => {
    const result = actions.changeColor('purple');
    expect(result).toEqual({ type: 'CHANGE_COLOR', payload: 'purple' });
  });
});

describe('incrementCounter', () => {
  it('should return valid INCREMENT_COUNTER object without a payload', () => {
    const result = actions.incrementCounter();
    expect(result).toEqual({ type: 'INCREMENT_COUNTER' });
  });
});

describe('decrementCounter', () => {
  it('should return valid DECREMENT_COUNTER object without a payload', () => {
    const result = actions.decrementCounter();
    expect(result).toEqual({ type: 'DECREMENT_COUNTER' });
  });
});
