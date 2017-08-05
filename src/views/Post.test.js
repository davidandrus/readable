import React from 'react';
import ReactDOM from 'react-dom';

import Post from './Post';

it('should exist', () => {
  expect(Post).toBeDefined();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Post />, div);
});

