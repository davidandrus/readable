import 'antd/dist/antd.css';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import { ConnectedRouter } from 'react-router-redux';

import {
  Layout,
  Icon,
} from 'antd';

import store from './store';
import history from './history';
import Category from './views/Category';
import Post from './views/Post';
import PostCreate from './views/PostCreate';
import PostEdit from './views/PostEdit';
import CommentEdit from './views/CommentEdit';
import PageNotFound from './views/PageNotFound';
import CategoriesMenu from './components/CategoriesMenu'
import loadCategories from './actions/loadCategories';
import loadPosts from './actions/loadPosts';

const {
  Header,
  Content,
  Sider,
} = Layout;

class App extends Component {
  componentDidMount() {
    store.dispatch(loadCategories());
    store.dispatch(loadPosts());
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
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
                  <Switch>
                    <Route exact path="/" component={Category} />
                    <Route exact path="/post/edit/:post_id" component={PostEdit} />
                    <Route exact path="/comment/edit/:comment_id" component={CommentEdit} />
                    <Route exact path="/post/create" component={PostCreate} />
                    <Route exact path="/:category/:post_id" component={Post} />
                    <Route exact path="/:category" component={Category} />
                    <Route component={PageNotFound}/>
                  </Switch>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
