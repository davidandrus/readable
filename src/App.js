import React, { Component } from 'react';

import 'antd/dist/antd.css';

// @TODO - possibly replace with redux router
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { Layout } from 'antd';

import {
  Root,
  Category,
  Post,
} from './views';

const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <div style={{background: 'red', height: 50, width: 100 }} />
          </Header>
          <Content>
            <Route exact path="/" component={Root} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/post" component={Post} />
          </Content>
        </Layout>
      </Router>
    );
  }
}

export default App;
