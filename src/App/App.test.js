import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('progressRestart() resets quiz state'), () => {
  let component = shallow(<App />);
  component.instance().setState = jest.fn();

  component.instance().state = {
    progress: 2,
    selected: 'Young Lamb',
    score: 2
  };

  component.instance().progressRestart();

  expect(component.instance().setState).toHaveBeenCalledWith({
    progress: 0,
    selected: 'Nothing',
    score: 0
  });
};
