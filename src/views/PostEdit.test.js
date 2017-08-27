import React from 'react';
import ReactDOM from 'react-dom';

import PostCreate from './PostCreate';

it('should exist', () => {
  expect(PostCreate).toBeDefined();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostCreate />, div);
});
