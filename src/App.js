import 'antd/dist/antd.css';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { Layout } from 'antd';

import store from './store';

import Root from './views/Root';
import Category from './views/Category';
import Post from './views/Post';

import CategoriesMenu from './components/CategoriesMenu'

import loadCategories from './actions/loadCategories';
import loadPosts from './actions/loadPosts';

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
  componentDidMount() {
    store.dispatch(loadCategories());
    store.dispatch(loadPosts());
  }

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
                <CategoriesMenu />
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
