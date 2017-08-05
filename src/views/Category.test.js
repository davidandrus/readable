import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';

it('should exist', () => {
  expect(Category).toBeDefined();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Category />, div);
});

