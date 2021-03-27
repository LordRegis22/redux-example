import React from 'react';
import { mount, shallow } from 'enzyme';
import Button from '../../client/components/button';

describe('Button component', () => {
  let state, wrapper;
  const props = {
    color: 'cyan',
    selected: 'true',
    changeColor: jest.fn(),
    key: 'cyan',
  };
  beforeAll(() => {
    wrapper = shallow(<Button {...props} />);
  });
  it('Is a button that displays text from props.color', () => {
    expect(wrapper.is('.button')).toBe(true);
    expect(wrapper.text()).toEqual('cyan');
  });
  it('Should invoke click handler on click', () => {
    wrapper.simulate('click');
    expect(props.changeColor).toHaveBeenCalled();
  });
});
