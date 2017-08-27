import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form';
import categories from './categories';
import posts from './posts';

export default combineReducers({
  categories,
  posts,
  router: routerReducer,
  form: reduxFormReducer,
});