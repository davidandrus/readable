import 'antd/dist/antd.css';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import {
  Layout,
  Icon,
} from 'antd';

import store from './store';

import Root from './views/Root';
import Category from './views/Category';
import Post from './views/Post';
import PostCreate from './views/PostCreate';

import CategoriesMenu from './components/CategoriesMenu'

import loadCategories from './actions/loadCategories';
import loadPosts from './actions/loadPosts';
import createPost from './actions/createPost';

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
    store.dispatch(createPost({
      "id": "6ni6ok3ym7mf1p33lnez-sucka",
      "timestamp": 1468479767190,
      "title": "sucka - Learn Redux in 10 minutes!",
      "body": "sucka - Just kidding. It takes more than 10 minutes to learn technology.",
      "author": "sucka - thingone",
      "category": "redux",
    }));
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout style={{ minHeight: '100vh' }}>
            <Header>
              <Link to="/">
                <h1 style={{ color: 'white', display: 'inline-block' }}>
                  <Icon type="book" /> Readable
                </h1>
              </Link>
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
                  <Route exact path="/post/create" component={PostCreate} />
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
