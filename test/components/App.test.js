import React from 'react';
import { shallow, render, configure } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../client/store';
import App from '../../client/components/App';
import Buttons from '../../client/components/Buttons';
import Adapter from 'enzyme-adapter-react-16';

//configure({ adapter: new Adapter() });

describe('App component', () => {
  it('should render App component with class of App and three children', () => {
    // shallow mount App component
    const shallowApp = shallow(<App />);
    // assert it has class of App
    expect(shallowApp.hasClass('App')).toBe(true);
    // assert it has three children
    expect(shallowApp.children().length).toBe(3);
    // assert three children are Buttons, Counter and a div for hot reloading
    console.log(shallowApp.children());

    //expect(shallowApp.dive().find(Buttons)).toBe(true);
  });
});
