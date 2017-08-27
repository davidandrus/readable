import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form';
import categories from './categories';
import posts from './posts';
import comments from './comments';

export default combineReducers({
  categories,
  comments,
  posts,
  router: routerReducer,
  form: reduxFormReducer,
});