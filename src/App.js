import React, { Component } from 'react';

// @TODO - possibly replace with redux router
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import {
  Root,
  Category,
  Post,
} from './views';


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
