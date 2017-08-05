import React from 'react';
import ReactDOM from 'react-dom';

import PostTeaser from './PostTeaser';

it('should exist', () => {
  expect(PostTeaser).toBeDefined();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostTeaser />, div);
});

