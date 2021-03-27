import React from 'react';
import { shallow, configure } from 'enzyme';
import App from '../../client/components/App';
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
  });
});
