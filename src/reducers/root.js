import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form';

import categories from './categories';
import posts from './posts';
import postsLoaded from './postsLoaded';
import comments from './comments';
import sort from './sort';

export default combineReducers({
  categories,
  comments,
  posts,
  postsLoaded,
  router: routerReducer,
  sort,
  form: reduxFormReducer,
});
