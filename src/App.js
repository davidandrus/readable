import React, { Component } from 'react';

import 'antd/dist/antd.css';

// @TODO - possibly replace with redux router
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import {
  Layout,
  Menu,
} from 'antd';

import {
  Root,
  Category,
  Post,
} from './views';

const {
  Header,
  Content,
  Sider,
} = Layout;

// @TODO - add test converage
// @TODO - add flow

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <h1>Readable</h1>
          </Header>
          <Layout>
            <Sider>
              <Menu>
                <Menu.Item key="1">Category</Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{padding: 25}}>
              <Content style={{padding: 25, background: '#fff' }}>
                <Route exact path="/" component={Root} />
                <Route exact path="/category" component={Category} />
                <Route exact path="/post" component={Post} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
