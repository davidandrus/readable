import React from 'react';
import ReactDOM from 'react-dom';

import CategoriesMenu from './CategoriesMenu';

it('should exist', () => {
  expect(CategoriesMenu).toBeDefined();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CategoriesMenu />, div);
});
