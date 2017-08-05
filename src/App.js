import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import {
  Layout,
  Menu,
} from 'antd';

import rootReducer from './reducers/root';

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


const store = createStore(rootReducer);

// @TODO -store should be it's own module
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
