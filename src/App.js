import 'antd/dist/antd.css';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import {
  Layout,
  Menu,
} from 'antd';

import store from './store';

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

// @TODO - possibly replace react-router with redux version
// @TODO - add test converage
// @TODO - add flow
// @TODO - eliminate all warnings and errors

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
