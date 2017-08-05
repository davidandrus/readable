import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import {
  Root,
  Category,
  Post,
} from './views';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Root} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/post" component={Post} />
        </div>
      </Router>
    );
  }
}

export default App;
