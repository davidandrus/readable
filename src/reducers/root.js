import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form';

import categories from './categories';
import posts from './posts';
import comments from './comments';
import sort from './sort';

export default combineReducers({
  categories,
  comments,
  posts,
  router: routerReducer,
  sort,
  form: reduxFormReducer,
});
