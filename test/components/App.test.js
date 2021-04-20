import React from 'react';
import { shallow, render, configure } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../client/store';
import App from '../../client/components/App';
import Buttons from '../../client/components/Buttons';
import Counter from '../../client/components/Counter';
import Adapter from 'enzyme-adapter-react-16';

//configure({ adapter: new Adapter() });

describe('App component', () => {
  let shallowApp;
  beforeEach(() => {
    // shallow mount App component
    shallowApp = shallow(<App />);
  });
  it('should render App component with class of App and three children', () => {
    // assert it has class of App
    expect(shallowApp.hasClass('App')).toBe(true);
    // assert it has three children
    expect(shallowApp.children().length).toBe(3);
  });
  it('should render a Buttons, Counter, and HMR div component as children', () => {
    // assert three children are Buttons, Counter and a div for hot reloading
    expect(shallowApp.find(Buttons)).toBeTruthy();
    expect(shallowApp.find(Counter)).toBeTruthy();
    expect(shallowApp.find('.hotReloading')).toHaveLength(1);
  });
});
