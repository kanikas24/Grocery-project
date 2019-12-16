import React from 'react';
import ReactDOM from 'react-dom';
//import View from './V';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<View />, div);
  ReactDOM.unmountComponentAtNode(div);
});
